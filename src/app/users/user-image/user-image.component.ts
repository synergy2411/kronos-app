import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IUser } from '../../model/user.model';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent {

  @Output('childEvent') childEvent = new EventEmitter<any>();
  @Input("user") user : IUser;

  onMoreInfo(user : any){
    this.childEvent.emit(user);
  }

}
