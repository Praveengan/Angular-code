import { Component } from '@angular/core';
import { User } from './user'
@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.css']

})
export class UserRegisterComponent{
    submitted = false;
    onSubmit(){
        this.submitted = true;
    }
     model = new User( '', '', '', '', '', '');
     newUser() {
  this.model = new User( '', '', '', '', '', '');
}
}