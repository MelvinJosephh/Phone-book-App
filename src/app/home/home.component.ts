import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactsService } from '../services/contacts.service';
import { AddContactComponent } from '../shared/components/add-contact/add-contact.component';
import { Contact } from './interface/contact.interface';
import * as uuid from 'uuid';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  listViewDesign = true

  contacts: Contact[] = []

  constructor(private contactService: ContactsService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe(res => {
      this.contacts = res.sort((a,b)=>(a.firstName>b.firstName) ? 1: -1);
    })
  }

  toggleDesign(status: boolean) {
    this.listViewDesign = status;
  }

  openDialog(data?: Contact): void {
    const dialogRef = this.dialog.open(AddContactComponent, {
      data,
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {

      if(!result) {
        return
      }

      if (data) {
        this.updateContact(data.id, result)
      } else {
        const body = { ...result, ...{ id: uuid.v4() } }
        this.addContact(body)
      }
    });
  }

  addContact(body: Contact) {
    this.contactService.addContact(body).subscribe((res) => {
      this.contacts.push(res);
      this.openSnackBar('Contact created successfully!')
    })
  }

  updateContact(id: string, body: Contact) {
    this.contactService.updateContact(id, body).subscribe(res => {
      this.openSnackBar('Contact updated successfully!');
      const index = this.contacts.findIndex(res => res.id === id); // [1,3]
      this.contacts.splice(index, 1);
      this.contacts.push(res)
    })
  }
  deleteContact(id: string) {
    this.contactService.deleteContact(id).subscribe(res => {
      this.openSnackBar('Contact deleted successfully!')
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Splash', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    });
  }
}