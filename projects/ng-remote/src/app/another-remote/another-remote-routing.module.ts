import { RouterModule, Routes } from '@angular/router';

import { AnotherRemoteComponent } from './another-remote.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AnotherRemoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnotherRemoteRoutingModule { }
