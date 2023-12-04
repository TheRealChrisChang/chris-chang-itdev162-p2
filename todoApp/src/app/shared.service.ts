import { Injectable } from '@angular/core';
import 
  { 
    Firestore, addDoc, collection, 
    collectionData, deleteDoc, doc 
  } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs:Firestore) { }

  //grabs from data base
  getNotes(){
    let notesCollection = collection(this.fs,'notes');
    return collectionData(notesCollection,{idField: 'id'});
  }

  //adds to data base
  addNote(desc:string){
    let data = {description:desc};
    let notesCollection= collection(this.fs,'notes');
    return addDoc(notesCollection, data);
  }

  //removes from data base
  deleteNote(id:string){
    let docRef=doc(this.fs,'notes/'+id);
    return deleteDoc(docRef);
  }
}
