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
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes  : Routes = [
  {path : "users" ,canActivate :[AuthGuard]  , component : UsersComponent } , 
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
  providers: [HttpClientModule , AuthService , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
