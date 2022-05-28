import { AnotherRemoteComponent } from './another-remote.component';
import { AnotherRemoteRoutingModule } from './another-remote-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AnotherRemoteComponent
  ],
  imports: [
    CommonModule,
    AnotherRemoteRoutingModule
  ]
})
export class AnotherRemoteModule { }
