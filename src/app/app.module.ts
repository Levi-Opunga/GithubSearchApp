import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import{HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserComponent } from './repositories/user/user.component';
import { SearchFormComponent } from './repositories/user/search-form/search-form.component';
import { DaysagoPipe } from './pipes/daysago.pipe';



@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    UserComponent,
    SearchFormComponent,
    DaysagoPipe,

  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
