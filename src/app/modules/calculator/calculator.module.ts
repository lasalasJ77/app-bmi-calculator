import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { ResultComponent } from './pages/result/result.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CalculatorComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule,
  ],
  exports : [
    CalculatorComponent,
    ResultComponent
  ]
})
export class CalculatorModule { }
