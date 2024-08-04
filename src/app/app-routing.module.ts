import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './modules/calculator/pages/calculator/calculator.component';

const routes: Routes = [
  {
    path : 'calculator',
    loadChildren : ()=>import('./modules/calculator/calculator.module').then((m)=>m.CalculatorModule)
  },
  { path: '**', redirectTo: 'calculator' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
