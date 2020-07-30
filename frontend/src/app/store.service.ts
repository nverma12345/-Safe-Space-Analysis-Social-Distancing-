import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { StoreDetails } from './storeDetails';
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class StoreService {
 
  private dbPath = '/stores';
 
  storeRef: AngularFireList<StoreDetails> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.storeRef = db.list(this.dbPath);
  }
 
  getStoreList(): AngularFireList<StoreDetails> {
    return this.storeRef;
  }
 
//   deleteAll(): Promise<void> {
//     return this.storeRef.remove();
//   }
}