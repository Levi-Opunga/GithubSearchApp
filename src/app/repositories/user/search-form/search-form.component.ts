import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchedUser!: string;
@Output() emittingUser = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  outputUser() {
    this.emittingUser.emit(this.searchedUser)
    this.searchedUser=""
  }
}
