import { USER_DATA } from './../model/mocks';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { IUser } from '../model/user.model';

@Component({
    selector : "app-user",
    templateUrl : './user.component.html',
    styleUrls : [`./user.component.css`],
    encapsulation : ViewEncapsulation.Emulated
})

export class UserComponent implements OnInit{

    users : IUser[]; 

    moreInfo(user : IUser){
        alert(`${user.firstName} is working with ${user.company}`);
    }

    ngOnInit(){
        this.users = USER_DATA;
    }
  
}