import { Component } from '@angular/core';
import{ Book } from './book'
import{ BOOKS } from './book'


@Component({
  selector: 'book-list',
  templateUrl: './book-list.html',
  
})

export class BookList {
  selectedBook: Book;
  books = BOOKS;
  
  
 }