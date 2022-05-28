import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./remote/remote.module').then((m) => {
        return m.RemoteModule;
      }),
  },
  {
    path: 'another-remote',
    loadChildren: () =>
      import('./another-remote/another-remote.module').then((m) => {
        return m.AnotherRemoteModule;
      }),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
