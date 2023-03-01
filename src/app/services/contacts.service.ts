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

  //fetch using GET method
  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.baseUrl}/contacts`)
  }

  //fetch using GET method
  getOneContact(id: string): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseUrl}/contacts/${id}`)
  }

  //create using POST method
  addContact(data: Contact): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/contacts`, data)
  }
  //update using PUT method
  updateContact(id: string, data: Partial<Contact>): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/contacts/${id}`, data)
  }

  //delete using DELETE method
  deleteContact(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/contacts/${id}`)
  }
}
