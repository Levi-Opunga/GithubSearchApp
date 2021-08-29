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
    let url = "https://api.github.com/users/" + searchedUser + '/repos?order=created&sort=asc?access_token=' +  "48ecd86f89944695011ce0760b21497d470f8b7e"
    return this.http.get<[]>(url)
  }
}
