import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: AppComponent
  }
])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
