import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{Observable} from 'rxjs';
import {environment} from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UseInfoService {


  constructor(private http:HttpClient) { }

  getData(searchName:string="levi-opunga"):Observable<any> {
    let url = "https://api.github.com/users/" + searchName
    return this.http.get<any>(url)
  }
}
