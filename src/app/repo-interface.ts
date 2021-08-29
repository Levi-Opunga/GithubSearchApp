export interface RepoInterface {
  html_url: string,
  name: string,
  description:string,
  language:string,
  created_at: Date,updated_at:Date,
  license:{
    name:string,
    url:string,
  }
  default_branch:string,
  forks:number,
}
