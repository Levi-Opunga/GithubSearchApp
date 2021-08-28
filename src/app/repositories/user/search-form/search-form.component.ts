import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UseInfoService} from "../../../useinfo.service";
import{userdetails} from "../../../userInterface";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchedUser!: string;
  users!: userdetails;
  @Output() emittingUser = new EventEmitter<any>();
  constructor(private userinfoService: UseInfoService) {
  }
  ngOnInit(){
    this.outputUser()
    this.outputUser()
    this.userinfoService.getData("Levi-Opunga").subscribe((data) => {
      console.log(data)
      this.users = data
    })
    this.emittingUser.emit(this.users)
    this.searchedUser = ""


  }
  outputUser() {
    this.userinfoService.getData(this.searchedUser).subscribe((data) => {
      console.log(data)
      this.users = data
    })
    this.emittingUser.emit(this.users)
    this.searchedUser = ""
  }



  }





