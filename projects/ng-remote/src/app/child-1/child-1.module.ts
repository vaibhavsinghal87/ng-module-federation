import { Child1Component } from './child-1.component';
import { Child1RoutingModule } from './child-1-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubChild1Component } from './sub-child-1/sub-child-1.component';

@NgModule({
  declarations: [
    Child1Component,
    SubChild1Component
  ],
  imports: [
    CommonModule,
    Child1RoutingModule
  ]
})
export class Child1Module { }
