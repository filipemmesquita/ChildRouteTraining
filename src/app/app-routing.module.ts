import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';

const routes: Routes = [
  {
    path:'first-page',
    loadChildren: ()=> import('./components/first-page/first-page.module').then(m=>m.FirstPageModule)
  },
  {
    path:'second-page',
    loadChildren: ()=> import('./components/second-page/second-page.module').then(m=>m.SecondPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
