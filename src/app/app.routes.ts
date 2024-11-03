import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome-screen',
    pathMatch: 'full'
  },
  {
    path: 'welcome-screen',
    loadComponent: () => import('./welcome-screen/welcome-screen.component').then(mod => mod.WelcomeScreenComponent),
    title: 'Algorithms Playground',
    data: { animation: '' }
  },
  {
    path: 'transform-numbers',
    loadComponent: () => import('./transform-number/transform-number.component').then(mod => mod.TransformNumberComponent),
    title: 'Transform Numbers | Algorithms Playground',
    data: { animation: '' }
  },
  {
    path: 'create-a-list',
    loadComponent: () => import('./list/list.component').then(mod => mod.ListComponent),
    title: 'Create Lists | Algorithms Playground',
    data: { animation: '' }
  },
  {
    path: 'play-music',
    loadComponent: () => import('./play-music/play-music.component').then(mod => mod.PlayMusicComponent),
    title: 'Playlist | Algorithms Playground',
    data: { animation: '' }
  }
];
