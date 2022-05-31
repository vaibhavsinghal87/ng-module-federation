import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./child-2/child-2.module').then((m) => {
        return m.Child2Module;
      }),
  },
  {
    path: 'another-remote',
    loadChildren: () =>
      import('./child-1/child-1.module').then((m) => {
        return m.Child1Module;
      }),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
