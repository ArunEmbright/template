import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { NewComponent } from './new/new.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ NewComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ExampleModule { }
