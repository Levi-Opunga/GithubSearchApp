import {Component, OnInit} from '@angular/core';
import {RepositoriesService} from "../repositories.service"
import {HttpClient} from "@angular/common/http"
import {Repositories} from "../repositories"
import {RepoInterface} from "../repo-interface";


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  searchedName!: string;
  repos!: Repositories;
  myRepos!: Repositories;
  public Repo!: RepoInterface[];

  constructor(private repositoriesService: RepositoriesService) {
  }

  userName(search: string) {
   this.searchedName = search
  }

  ngOnInit(): void {
    this.searchedName="Levi-Opunga"
    console.log(this.searchedName)
  }

  showRepos() {
    this.repositoriesService.getRepo(this.searchedName).subscribe((data) => {
      this.Repo = data
      console.log(data)
    })

  }
}
