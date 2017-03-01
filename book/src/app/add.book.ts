import { Component } from '@angular/core';
import{ Book } from './book'
import{ BOOKS } from './book'


@Component({
  selector: 'add-book',
  templateUrl: './add-book.html',
 })
 export class AddBook{
     selectedBook: Book;
     books = BOOKS;
     add = BOOKS;
     addbook(id,name,author){
           if(id!=""&&name!=""&&author!=""){
                  //console.log(id);
                  this.add.push({id,name,author})
                }
                
            }
 }
