import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private router:Router, private httpClient  : HttpClient) { ;  
  }

  ngOnInit(): void {

  }
  signup(form : NgForm)
  { 
          var myHeaders = new Headers();
          myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzYW1wbGUtamF4cnMiLCJpYXQiOjE2MjEzNDg4MjYsInN1YiI6ImFkbWluIiwibG9naW4iOiJwY2lzc2UyMDAiLCJleHAiOjE2MjEzNDk3MjZ9.iMCwDY2CaFxyHF9BQzZ9prpQn3rjYFKvNsVL-qn4ldc");
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify(form.value);
          
          
          fetch(environment.apiUrl+"/android/utilisateurs",
          {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
          })
          .then(
            response=>{ 
      
              // on sauvegarde le token si tous se passe bien 
      
              if (response.status==200){
                response.text().then(
                    result=>{console.log(result)
                    //this.router.navigate(['users'])
            })   
            }else{
              this.router.navigate(['auth'])
                
            }
          })
            .catch(error=>console.log('error',error))
  }
}
