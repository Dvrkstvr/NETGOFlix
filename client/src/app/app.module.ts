import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MovieSearchComponent } from './movies/movie-search/movie-search.component';
import { MovieCategoriesComponent } from './movies/movie-categories/movie-categories.component';
import { MovieFavoritesComponent } from './movies/movie-favorites/movie-favorites.component';
import { MovieManagerComponent } from './movies/movie-manager/movie-manager.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './_modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MovieListComponent,
    MovieDetailComponent,
    ListsComponent,
    MovieSearchComponent,
    MovieCategoriesComponent,
    MovieFavoritesComponent,
    MovieManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
