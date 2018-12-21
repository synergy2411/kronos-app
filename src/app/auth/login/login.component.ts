import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  onFormSubmit(f : NgForm){
    console.log(f);
    this.authService.login(f.value.username, f.value.password);
  }
  constructor(private authService : AuthServiceService){}
}
