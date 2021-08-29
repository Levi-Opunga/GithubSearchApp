import {Component, OnInit} from '@angular/core';
import {RepositoriesService} from "../repositories.service"
import {HttpClient} from "@angular/common/http"
import {Repositories} from "../repositories"
import {RepoInterface} from "../repo-interface";
import {userdetails} from "../userInterface";


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  user!:string;
  myRepos!: Repositories;
  public Repo!: RepoInterface[];

  constructor(private repositoriesService: RepositoriesService) {
  }

  userName(search:string) {
   this.user = search
  }

  ngOnInit(): void {
    this.repositoriesService.getRepo()
  }

  showRepos() {
    this.repositoriesService.getRepo(this.user).subscribe((data) => {
      this.Repo = data
      console.log(data)
    })

  }
}
