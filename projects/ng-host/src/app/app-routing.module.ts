import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'remote',
    loadChildren: () =>
      import('ngRemote/RemoteModule').then((m) => {
        return m.RemoteModule;
      }),
  },
  {
    path: 'another-remote',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './AnotherRemoteModule',
      }).then(m => m.AnotherRemoteModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
