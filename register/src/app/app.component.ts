import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Training Angular 2"
  email: string;
  pass: string;
    
  register(){
    console.log(this.email);

  }
  
}
