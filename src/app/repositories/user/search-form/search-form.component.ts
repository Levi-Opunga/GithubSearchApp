import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UseInfoService} from "../../../useinfo.service";


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchedUser!: string;
  @Output() emittingUser = new EventEmitter<string[]>();
  users!: string[];

  constructor(private userinfoService: UseInfoService) {
  }

  ngOnInit(): void {
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

