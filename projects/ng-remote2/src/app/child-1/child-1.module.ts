import { Child1Component } from './child-1.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Child1RoutingModule } from './child-1-routing.module';

@NgModule({
  declarations: [
    Child1Component
  ],
  imports: [
    CommonModule,
    Child1RoutingModule
  ]
})
export class Child1Module { }
