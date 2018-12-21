import { AuthServiceService } from './auth-service.service';
import { USER_DATA } from './../model/mocks';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService{
    counter : number = 0;
    getUserData(){
        return USER_DATA;
    }

    constructor(private httpClient : HttpClient,
                private authService : AuthServiceService){}
    getHttpUserData(){
        // return this.httpClient.get("assets/data/user-data.json");
        return this.httpClient.get("https://kronos-app-5685b.firebaseio.com/userdata.json?auth="+this.authService.getToken());
    }
}