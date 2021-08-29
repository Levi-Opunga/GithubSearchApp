import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{Observable} from 'rxjs';
import {environment} from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {


  constructor(private http:HttpClient) { }

  getRepo(searchedUser:string="levi-opunga"):Observable<[]>{
    let url = "https://api.github.com/users/" + searchedUser + '/repos?order=created&sort=asc?access_token='+ environment.myApi
    return this.http.get<[]>(url)
  }
}
