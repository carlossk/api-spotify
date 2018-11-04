import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';


export const ROUTER: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },



];

