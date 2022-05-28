import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteRoutingModule } from './remote-routing.module';
import { RemoteComponent } from './remote.component';


@NgModule({
  declarations: [
    RemoteComponent
  ],
  imports: [
    CommonModule,
    RemoteRoutingModule
  ]
})
export class RemoteModule { }
