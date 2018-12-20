import { Component, ViewEncapsulation } from '@angular/core';
import { IUser } from '../model/user.model';

@Component({
    selector : "app-user",
    templateUrl : './user.component.html',
    styleUrls : [`./user.component.css`],
    encapsulation : ViewEncapsulation.Emulated
})

export class UserComponent{

    moreInfo(user : IUser){
        alert(`${user.firstName} is working with ${user.company}`);
    }

    user : IUser = {
        firstName : "Bill",
        lastName : "Gates",
        income : 50000,
        dob : new Date ("Dec 21, 1965"),
        isWorking : true,
        company : "Microsoft",
        image : "assets/images/bill.jpg",
        vote : 120
    }
}