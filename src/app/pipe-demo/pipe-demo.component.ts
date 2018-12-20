import { Component, DoCheck } from '@angular/core';
import {Http } from '@angular/http'; 


@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements DoCheck  {

  ngDoCheck(){
    console.log("Digest happened!")
  }
  onAddTodo(){
    this.todos.push({label : "New Task", status : "pending"});
  }

  filteredStatus = "";
  
  todos = [{
    label : "Some Task",
    status : 'done'
  },
  {
    label : "New Task",
    status : 'pending'
  },
  {
    label : "Some Task",
    status : 'done'
  }]


  msg : any;
  contact_no : number = 987654321;
  
  // constructor(private http : Http){ // }

  // ngOnInit(){
  //   this.http.get("http://time.jsontest.com")
  //     .subscribe(data => {console.log(data)})
  // }
  promiseObj = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      reject();
    }, 2000);
  }).then((res)=>{
    this.msg = res;
    console.log(this.msg);
  }).catch(err => {
    console.log(err);
    this.msg = err;
  })



}
