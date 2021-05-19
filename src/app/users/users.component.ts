import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users :any = [] ; 
  constructor(private authService  : AuthService  , private httpClient  : HttpClient ,private router : Router) { }

  ngOnInit(): void {
    this.httpClient.get<any>("http://opaback:8091/android/utilisateurs").subscribe((res)=>{
            console.log(res);
            this.users = res ; 
            
        });
  }
  remove(id : any){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+localStorage.getItem('token'));
    //  faut empecher que l'on supprime l'administrateur
    fetch(environment.apiUrl+"/android/utilisateurs/"+id, {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    })
    .then(
      response=>{ 

        //console.log(response.status , "status")
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
