import { Routes } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';

export const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'result/:id', component: ResultPageComponent },
  { path: '**', redirectTo: '' }
];