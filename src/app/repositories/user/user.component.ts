import { Component, OnInit } from '@angular/core';
import{UseInfoService} from "../../useinfo.service"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user!:string;
  constructor(private userinfoService:UseInfoService){ }
getUser(){
    this.userinfoService.getData().subscribe((data)=>{console.log(data)})
}

  gettingUser(users: string){
    this.user = users
  }

  ngOnInit(): void {

  }

}
