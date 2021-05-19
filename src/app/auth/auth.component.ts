import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from './auth.service';

import {environment} from 'src/environments/environment'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus : boolean= false; 
  constructor(private router : Router , private httpClient : HttpClient , private authService :AuthService) { }

  ngOnInit(): void {
   this.authService.authStatus =!!(localStorage.getItem('status'))
   console.log("envir" , environment.apiUrl)

  }

login(form : NgForm) {

        let login  = form.value.login ; 
        let password  = form.value.password ; 
        // log in
        this.signin(login,password) ; 
        //


}

signOut(){
  this.authStatus = this.authService.authStatus; 
  console.log("Deconnexion")
  console.log(this.authStatus); 


}
signin(login, password){

  // tentative de connexion pour l'utilisateur login , password 

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic "+btoa(login+":"+password));

  fetch(environment.apiUrl+"/android/auth", 
  {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
  })
    .then(
            response=>{ 
              console.log(response.status , "status")
              // on sauvegarde le token si tous se passe bien 
              if (response.status==200){
                response.text().then(
                    result=>{console.log(result)
                    localStorage.setItem('token', result.substring(10,result.length-1))  
                    localStorage.setItem('status', 'true')  
                    this.authService.authStatus=true; 
                    this.router.navigate(['users'])
            })
            .catch(error=>console.log('error',error))
                  
            }})

  }

}
