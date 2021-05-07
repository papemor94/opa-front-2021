import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:any = {};
  constructor(private httpClient  : HttpClient) { 
    this.user.firstname  = '' ; 
    this.user.lastname = '' ; 
    this.user.login = '' ; 
    this.user.password ='';  
  }

  ngOnInit(): void {
  }
  submit(form : NgForm) {


    console.log(form.value) ; 

    console.log(this.user) ; 
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      this.httpClient.post("http://localhost:8091/android/utilisateurs", form.value)
        .subscribe(data => {
          console.log(data);
         }, error => {
          console.log(error);
        });
  /*
        var headers2 = new Headers();
        headers2.append("Accept", 'application/json');
        headers2.append('Content-Type', 'application/json' );
        headers.append("Authorization", "Basic " + this.base64.encodeFile((this.user2.login + ":" + this.user2.password)))
        this.http.post("http://localhost:8091/android/auth", this.user2)
        .subscribe(data => {
          console.log(data);
         }, error => {
          console.log(error);
        });
      */}

}
