import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{Observable} from 'rxjs';
import {environment} from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {


  constructor(private http:HttpClient) { }

  getRepo(searchedUser:string):Observable<[]>{
    let url = "https://api.github.com/users/" + "levi" + '/repos?order=created&sort=asc?access_token='+ "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"
    return this.http.get<[]>(url)
  }
}
