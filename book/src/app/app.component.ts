import { Component } from '@angular/core';
import{ Book } from './book'
import{ BOOKS } from './book'


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   selectedBook: Book;
  books = BOOKS
  
 }
