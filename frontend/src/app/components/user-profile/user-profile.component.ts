import { Component, OnInit } from '@angular/core';
import { StoreDetails } from '../../storeDetails';
import { map } from 'rxjs/operators';
import { StoreService } from '../../store.service';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  //stores: any;

  stores: StoreDetails = new StoreDetails();
  currentDate = new Date();
  stringDate = this.currentDate.toString();
  submitted:boolean = false;
  constructor(
  //  private storeService: StoreService
  db: AngularFireDatabase
    ) { }

  ngOnInit() {
  this.resetStore();
  }

  resetStore(){
    this.stores  = {
      storeId: 2,
      storename: '',
      maxLimit: null,
      isDisabled :false,
      dateCreated :  this.stringDate,
      cameraIp:'',
      counter:0,
  
    }
  }
  newStore() {
    this.submitted = false;
    this.resetStore();
  }

  onSubmit() {
    firebase.database().ref('/stores').push( this.stores 
        )
        this.resetStore();
        this.submitted = true;
  }
}
