import { Routes } from '@angular/router';
import {MainComponent} from './main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: (): Promise<typeof MainComponent> => import('./main/main.component').then((m) => m.MainComponent), },
  { path: '**', redirectTo: 'home' }
];
