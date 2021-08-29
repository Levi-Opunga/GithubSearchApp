import{userdetails} from "../../userInterface";

import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users!:userdetails
  @Output() userForRepo =new EventEmitter<string>();

  gettingUser(users: any){
    this.users = users
  }

  ngOnInit(): void {





  }

  passingToRepo(searchedUser: string) {
    this.userForRepo.emit(searchedUser)
  }
}
