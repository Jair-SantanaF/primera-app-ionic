import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full'
  },
  {
    path: 'user-list',
    loadChildren: () => import('./user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'info/:id',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'bh-list',
    loadChildren: () => import('./bh-list/bh-list.module').then( m => m.BHListPageModule)
  },
  {
    path: 'pk-list',
    loadChildren: () => import('./pk-list/pk-list.module').then( m => m.PKListPageModule)
  },
  {
    path: 'bh-info/:id',
    loadChildren: () => import('./bh-info/bh-info.module').then( m => m.BhInfoPageModule)
  },
  {
    path: 'pk-info/:id',
    loadChildren: () => import('./pk-info/pk-info.module').then( m => m.PkInfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
