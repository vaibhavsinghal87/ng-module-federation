import { Child2Component } from './child-2.component';
import { Child2RoutingModule } from './child-2-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubChild1Component } from './sub-child-1/sub-child-1.component';

@NgModule({
  declarations: [
    Child2Component,
    SubChild1Component
  ],
  imports: [
    CommonModule,
    Child2RoutingModule
  ]
})
export class Child2Module { }
