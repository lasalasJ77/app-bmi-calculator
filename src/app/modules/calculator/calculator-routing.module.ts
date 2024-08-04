import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { ResultComponent } from './pages/result/result.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {path : 'calculator', component : CalculatorComponent},
      {path : 'result/:valor', component : ResultComponent},
      { path: '**', redirectTo: 'calculator' },

    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
