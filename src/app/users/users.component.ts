import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  users :any = [] ; 

  constructor(private httpClient  : HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<any>('http://127.0.0.1:8091/android/utilisateurs').subscribe((res)=>{
            console.log(res);
            this.users = res ; 
        });
  }

  remove(id : any){
    this.httpClient.delete('http://127.0.0.1:8091/android/utilisateurs/'+id)
    .subscribe(() => console.log ('Delete'+id+'successful'));
    //window.location.reload();
  
  
}

}
