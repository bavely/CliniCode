import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Note } from '../Interface/note';
import * as CryptoJS from 'crypto-js';  
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  usersRef: AngularFireList<any>;      // Reference to users list, Its an Observable
  userRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too

 
  constructor(private db: AngularFireDatabase) { }   // Inject AngularFireDatabase dependency in constructor


  // Create User
  AddUser(note: Note) {
  
     

    this.usersRef.push({
      name: CryptoJS.AES.encrypt(note.name,"userid").toString(),
      email: CryptoJS.AES.encrypt(note.email,"userid").toString(),
      type: CryptoJS.AES.encrypt(note.type,"userid").toString()
    })

  }
  // Read User
  GetUser(id: string) {
    this.userRef = this.db.object('notes-list/' + id);
    return this.userRef;
  }
  // Read Users List
  GetUsersList() {
    this.usersRef = this.db.list('notes-list');

    return this.usersRef;
  }  
  // Update User
  UpdateUser(note: Note) {
    this.userRef.update({
      name: note.name,
      email: note.email,
      type: note.type
    })
  }  
  // Delete User
  DeleteUser(id: string) { 
    this.userRef = this.db.object('notes-list/'+id);
    this.userRef.remove();
  }
  
}