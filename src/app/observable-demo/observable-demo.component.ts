import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {
  unsubObj: any;
  data: string;
  obsObj = Observable.create((observer) => {
    setTimeout(() => {
      observer.next("First Package")
    }, 1000)
    setTimeout(() => {
      observer.next("Second Package")
    }, 2000)
    setTimeout(() => {
      observer.next("Third Package")
    }, 4000)
    setTimeout(() => {
      observer.error(new Error("ERROR!"));
    }, 5000)
    setTimeout(() => {
      observer.complete();
    }, 6000)
  })


  onUnsubscribe() {
    this.unsubObj.unsubscribe();
  }

  onSubscribe() {
    this.unsubObj = this.obsObj.subscribe(
      data => this.data = data,
      err => console.log(err),
      () => { console.log("Data Completed!") }
    )
  }
  constructor() { }

  ngOnInit() {
  }

}
