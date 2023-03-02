import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Observable } from 'rxjs';
import { Contact } from '../home/interface/contact.interface';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contact$!: Observable<Contact>;

  constructor(private router: ActivatedRoute, private contactService: ContactsService) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');

    if(id) {
        this.contact$ = this.contactService.getOneContact(id);
    }
 
  }

}
