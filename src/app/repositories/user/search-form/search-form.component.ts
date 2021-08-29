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
  @Output() userForRepo =new EventEmitter<string>();
  constructor(private userinfoService: UseInfoService) {
  }
  ngOnInit(){
    this.userinfoService.getData("Levi-Opunga").subscribe((data) => {

      this.users = data
    })
    this.emittingUser.emit(this.users)




  }
  outputUser() {
    this.userinfoService.getData(this.searchedUser).subscribe((data) => {
      this.users = data
    })
    this.emittingUser.emit(this.users)
    this.userForRepo.emit(this.searchedUser)

  }



  }





