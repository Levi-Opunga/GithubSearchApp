import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import{Userdetails} from"../../userdetails"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user!:string;
  constructor(private http:HttpClient) { }

userinfo!:Userdetails[];
  levi!:Userdetails;

  ngOnInit(): void {
  interface ApiResponse {
  avatar_url:string;
  html_url:string;
}
    this.http.get<ApiResponse>("https://api.github.com/users/Levi-Opunga").subscribe(data=>{
      this.userinfo.push (this.levi =new Userdetails(data.html_url,data.avatar_url))
    })
  }

  gettingUser(gottenUser: string) {
    this.user = gottenUser
  }
}
