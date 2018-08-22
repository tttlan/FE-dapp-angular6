import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
  { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule' },
  { path: '**', loadChildren: 'app/pages/not-found/not-found.module#NotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
