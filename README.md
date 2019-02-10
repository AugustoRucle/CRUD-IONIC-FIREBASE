# CRUD-IONIC-FIREBASE

It's important say that if you are interesting for created a first project with ionic + firabase you have to add 
the following depennce to your app.module file, if you don't add it is probably that give you 
a warning or error

Added the following to app.modules file

import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

  providers: [
    { provide: FirestoreSettingsToken, useValue: {} },
    .
    .
    .
    .

And the old versions IONIC don't add the script for connect to firebase in app.module, Ionic 4 added a environment folder where 
you will have to add the script to connect to firebase.
