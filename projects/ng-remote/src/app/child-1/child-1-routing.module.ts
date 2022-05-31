import { RouterModule, Routes } from '@angular/router';

import { Child1Component } from './child-1.component';
import { NgModule } from '@angular/core';
import { SubChild1Component } from './sub-child-1/sub-child-1.component';

const routes: Routes = [
  {
    path: '',
    component: Child1Component,
  },
  {
    path: 'child',
    component: SubChild1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Child1RoutingModule { }
