import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../home/interface/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  baseUrl = 'http://localhost:3000';


  constructor(private http: HttpClient) { }


  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.baseUrl}/contacts`)
  }

  addContact(data: Contact): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/contacts`, data)
  }
}
