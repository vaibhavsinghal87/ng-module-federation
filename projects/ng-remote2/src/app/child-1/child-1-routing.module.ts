import { RouterModule, Routes } from '@angular/router';

import { Child1Component } from './child-1.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: Child1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Child1RoutingModule { }
