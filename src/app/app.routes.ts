import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'home/citizen',
    loadComponent: () => import('./pages/citizen/citizen.page').then((m) => m.CitizenPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home/my-wallet',
    loadComponent: () => import('./pages/my-wallet/my-wallet.page').then( m => m.MyWalletPage),
    pathMatch: 'full',

  },
  {
    path: 'home/profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'home/place-details',
    loadComponent: () => import('./pages/place-details/place-details.page').then( m => m.PlaceDetailsPage)
  },
  {
    path: 'home/services/service',
    loadComponent: () => import('./pages/service/service.page').then( m => m.ServicePage)
  },
  {
    path: 'home/categories',
    loadComponent: () => import('./pages/categories/categories.page').then( m => m.CategoriesPage)
  },
  {
    path: 'home/categories/:categoryId',
    loadComponent: () => import('./pages/categories/categories.page').then( m => m.CategoriesPage)
  },
  {
    path: 'home/services',
    loadComponent: () => import('./pages/services/services.page').then( m => m.ServicesPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then( m => m.ContactPage)
  },
  {
    path: 'map',
    loadComponent: () => import('./pages/map/map.page').then( m => m.MapPage)
  },
  {
    path: 'map/:category',
    loadComponent: () => import('./pages/map/map.page').then( m => m.MapPage)
  },   {
    path: 'signin',
    loadComponent: () => import('./pages/signin/signin.page').then( m => m.SigninPage)
  },
 
];
