import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../../../home/interface/contact.interface';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  addContactForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addContactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(10)]],
      lastName: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['',[ Validators.email, Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
    })

    if(this.data) {
      this.addContactForm.patchValue({
        ...this.data
      })
    }

  }

  saveContact() {
    this.dialogRef.close(this.addContactForm.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
