import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';

const appRoutes  : Routes = [
  {path : "users" , component : UsersComponent } , 
  {path : "sign-up" , component : SignUpComponent } , 
  {path : "auth" , component : AuthComponent } , 
  {path : "" , component : SignUpComponent } , 

]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SignUpComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule , 
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
