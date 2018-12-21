import { DataService } from './../services/data.service';
// import { USER_DATA } from './../model/mocks';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { IUser } from '../model/user.model';

@Component({
    selector : "app-user",
    templateUrl : './user.component.html',
    styleUrls : [`./user.component.css`],
    encapsulation : ViewEncapsulation.Emulated,
    providers :     [DataService]
})

export class UserComponent implements OnInit{

    users : IUser[]; 

    constructor(public dataService : DataService){}

    increase(){
        this.dataService.counter++;
    }

    moreInfo(user : IUser){
        alert(`${user.firstName} is working with ${user.company}`);
    }

    ngOnInit(){
        // this.users = USER_DATA;
        // this.users = this.dataService.getUserData();
        this.dataService.getHttpUserData()
            .subscribe(
                // res=>this.users=res['userdata'],
                res=>this.users=<IUser[]>res,
                err=>console.log(err),
                ()=>console.log('COMPLETED')
                );
    }
  
}