import { Routes } from '@angular/router';
import { FlowersListComponent } from './flowers-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  {
    path: 'list',
    component: FlowersListComponent,
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./view-flower.component').then((m) => m.ViewFlowerComponent),
  },
];
