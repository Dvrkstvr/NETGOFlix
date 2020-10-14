import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MovieCategoriesComponent } from './movies/movie-categories/movie-categories.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieFavoritesComponent } from './movies/movie-favorites/movie-favorites.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieManagerComponent } from './movies/movie-manager/movie-manager.component';
import { MovieSearchComponent } from './movies/movie-search/movie-search.component';
import { AdminGuard } from './_guards/admin.guard';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'movies', component: MovieListComponent},
      {path: 'movies/:id', component: MovieDetailComponent},
      {path: 'search', component: MovieSearchComponent},
      {path: 'categories', component: MovieCategoriesComponent},
      {path: 'favorites', component: MovieFavoritesComponent},
      {path: 'manage', component: MovieManagerComponent, canActivate: [AdminGuard]},
      {path: 'lists', component: ListsComponent}
    ]
  },
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
