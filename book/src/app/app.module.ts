import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AddBook } from './add.book'
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { BookList } from './book.list'

@NgModule({
  declarations: [
    AppComponent,
    AddBook,
    BookList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
  {
    path: 'add-book',
    component: AddBook
  },
  {
    path: '',
    component: BookList
  }

])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
