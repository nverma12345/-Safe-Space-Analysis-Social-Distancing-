import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import {NgModule} from '@angular/core'; 
import { StoreDetails } from '../../storeDetails';
import { map } from 'rxjs/operators';
import { StoreService } from '../../store.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

class Count {
  constructor(public In) { }
}

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import * as firebase from 'firebase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  storeDetails: StoreDetails = new StoreDetails();
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  stores: Observable<any[]>;
  allStores :any

  constructor(
    db: AngularFireDatabase,
    private router: Router,
    private route:ActivatedRoute
    ) {
      this.stores = db.list('/stores').valueChanges();
      this.stores.subscribe(store => {
      this.allStores = store;
      })
      
    //  const itemsRef: AngularFireList<any[]>=db.list('/stores')
    //  .snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c =>
    //       ({ key: c.payload.key})
    //     )
    //   )
    // ).subscribe(str => {
    //   this.stores = str;
    // });

  }

  ngOnInit() {
    this.getStoresList();
  }

  getStoresList(){
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  public submit(){

  }

  public viewStoredetails(store){
    this.router.navigate(['/details'],{
      queryParams: {data:btoa(JSON.stringify(store))}
    })
  }

}
