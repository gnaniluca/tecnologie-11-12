import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cb125Component } from './cb125/cb125.component';
import { Cb1000Component } from './cb1000/cb1000.component';
import { Cb600Component } from './cb600/cb600.component';
import { Cb500Component } from './cb500/cb500.component';

const routes: Routes = [
  { path: 'cb125', component: Cb125Component},
  { path: 'cb1000', component: Cb1000Component},
  { path: 'cb500', component: Cb500Component},
  { path: 'cb600', component: Cb600Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
