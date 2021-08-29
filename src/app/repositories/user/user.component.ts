import {userdetails} from "../../userInterface";
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import{UseInfoService} from'../../useinfo.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users!: userdetails

  @Output() emittingUser = new EventEmitter<string>();

  constructor(private userService:UseInfoService) { }


  ngOnInit(): void {
    this.userService.getData()
  }


  userName(username: string) {
    this.emittingUser.emit(username)
    this.userService.getData(username).subscribe((data) => {
      this.users = data
  })
}}
