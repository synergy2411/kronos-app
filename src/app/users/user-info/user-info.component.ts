import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent{

  @Input("user") user : any;
  dynamicClass = {'border' : false, 'feature' : true};

  myColor = 'green';

  onToggle(){
    this.dynamicClass.border = !this.dynamicClass.border;
    this.dynamicClass.feature = !this.dynamicClass.feature;
  }

}
