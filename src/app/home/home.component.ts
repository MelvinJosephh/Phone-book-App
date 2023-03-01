import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactsService } from '../services/contacts.service';
import { AddContactComponent } from '../shared/components/add-contact/add-contact.component';
import { Contact } from './interface/contact.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  contacts: Contact[] = []

  constructor(private contactService: ContactsService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe(res => {
      this.contacts = res;
    })
  }

  addContact(): void {
    const dialogRef = this.dialog.open(AddContactComponent, {
      // data: {firstName: '', lastName: '', email: '', phone: ''},
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {

      const body = {...result,...{id: "3"}}

      this.contactService.addContact(body).subscribe((res) => {
          this.contacts.push(res)
      })
    });
  }
}