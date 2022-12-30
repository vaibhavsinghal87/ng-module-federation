import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  // home
  {
    path: '',
    component: HomeComponent
  },
  // static loading
  /* {
    path: 'child2',
    loadChildren: () =>
      import('ngRemote/Child2Module').then((m) => {
        return m.RemoteModule;
      }),
  }, */
  // dynamic loading
  {
    path: 'child1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Child1',
      }).then(m => m.Child1Module),
  },
  {
    path: 'child2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Child2',
      }).then(m => m.Child2Module),
  },
  {
    path: 'remote2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Child1',
      }).then(m => m.Child1Module),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
