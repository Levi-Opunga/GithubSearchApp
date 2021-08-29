import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import{HttpClientModule} from "@angular/common/http";
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserComponent } from './repositories/user/user.component';
import { SearchFormComponent } from './repositories/user/search-form/search-form.component';
import { DaysagoPipe } from './pipes/daysago.pipe';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'home', component: RepositoriesComponent },
  {path: 'repositories', component: RepositoriesComponent},
  {path:'user', component:UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    UserComponent,
    SearchFormComponent,
    DaysagoPipe,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
