import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'remote',
    loadChildren: () =>
      import('ngRemote/RemoteModule').then((m) => {
        return m.RemoteModule;
      }),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
