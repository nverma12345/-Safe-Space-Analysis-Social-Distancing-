import { Component, OnInit } from '@angular/core';
import { StoreDetails } from '../../storeDetails';
import { map } from 'rxjs/operators';
import { StoreService } from '../../store.service';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import Chart from 'chart.js';
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailComponent implements OnInit {

  //stores: any;
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  specificStore: any;
  finalObject: any;
  public storeName
  public storeId

  details: Observable<any[]>;
  allDetails :any
  
  stores:any
  currentDate = new Date();
  stringDate = this.currentDate.toString();

  constructor(
    db: AngularFireDatabase,  private router: Router, private route:ActivatedRoute
    ) {
      this.details = db.list('/historicData').valueChanges();
      this.details.subscribe(store => {
      this.allDetails = store;
      this.calculateGraphData();

      var chartOrders = document.getElementById('chart-orders');
      parseOptions(Chart, chartOptions());
      var ordersChart = new Chart(chartOrders, {
        type: 'bar',
        options: chartExample2.options,
        // data: chartExample2.data
        data:    {
          labels: ["9pm", "12pm", "3pm", "6pm"],
          datasets: [
            {
              label: "Weekly Statistics",
              data: [this.finalObject.nine, 
                    this.finalObject.twelve, 
                    this.finalObject.three,
                    this.finalObject.six]
            }
          ]
        }
      });
      })
    }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      this.stores = JSON.parse(atob(params.data));
    })
  }

  public calculateGraphData(){
    this.specificStore = this.allDetails.filter(store => store.storeId == this.stores.storeId)
   
    this.finalObject = {
      "storeId": 1,
      "nine": this.getReducedValue('nine', this.specificStore),
      "twelve": this.getReducedValue('twelve', this.specificStore),
      "three": this.getReducedValue('three', this.specificStore),
      "six": this.getReducedValue('six', this.specificStore),
    }
      Object.entries(this.finalObject).forEach(([key, value]) => {
        if(typeof value === 'number') {
          this.finalObject[key] = Math.ceil(value)
        }
      })
  }

  private getReducedValue(index, specificStore) {
    let size = specificStore.length;
    return specificStore.reduce((accumulator, currentValue, currentIndex, array) => {
      return (accumulator[index] + parseInt(array[currentIndex][index])) / size;
    });
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
}
