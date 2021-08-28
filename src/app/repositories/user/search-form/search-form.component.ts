import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UseInfoService} from "../../../useinfo.service";
import{userdetails} from "../../../userInterface";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchedUser: string="Levi-Opunga"

  ngOnInit(): void {

    this.outputUser()
  }

  @Output() emittingUser = new EventEmitter<any>();
  users!: userdetails;

  constructor(private userinfoService: UseInfoService) {
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

