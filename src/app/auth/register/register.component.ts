import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  password = new FormControl('', [
    Validators.required,
    this.hasExclamationMark
  ]);

  registerForm : FormGroup;

  hasExclamationMark(input : FormControl){
    const excl = input.value.indexOf("!") >=0;
    return excl ? null : { needExclamation : true} 
  }


  constructor(private fb : FormBuilder){
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    });
  }

  onRegister(){
    console.log(this.registerForm);
  }

}
