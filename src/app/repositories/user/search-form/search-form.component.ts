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


  @Output() userForRepo =new EventEmitter<string>();


  ngOnInit(){
    this.userForRepo.emit(this.searchedUser)

  }
  outputUser() {
    this.userForRepo.emit(this.searchedUser)

  }



  }





