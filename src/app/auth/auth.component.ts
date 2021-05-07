import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router : Router , private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  submit(form : NgForm) {


    var headers = new Headers();

    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    this.httpClient.post("http://localhost:8091/android/utilisateurs", form.value)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
}

}
