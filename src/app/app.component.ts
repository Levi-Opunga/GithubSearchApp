import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GithubSearchApp';
  hide: boolean= true;

  hideRepos(show: boolean) {
    this.hide= show
  }
}
