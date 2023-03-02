# PhoneBookApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.


## Running database
This project used mock data in arrays present in JSON Server (a Node Module that helped in creating a demo rest json webservice.)
Run `npm install -g json-server` on a different terminal to install Json Server
Run `json-server -v` to confirm json server version.

Please ensure you run Json Server `json-server --watch db.json` alongside the app so that the app can effectively link the data from the database.

In response to the screening test, this app allows the user to add contact details (including FirstName, LastName, Email, and Phone Number).
The app has used UUID, (a Universal Unique Identifier), as an Id to help uniquely identify the contacts. This makes it easier to edit, delete and update the single contacts.
the app allows user to view contact details, update and delete contact. 
Also, the user can view the contact list either in tabled or listed format. 
Upon clicking the view option, the app directs the user to a new page with contact details.

Please note, the app builds on Angular materials (which provides readily available styling templates instead of bootstrap or Tailwind).

Looking forward to hearing from you.
