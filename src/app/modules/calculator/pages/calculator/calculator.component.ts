import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  edad = 25;
  peso = 60;
  altura = 170;
  sexo = 'Masculino';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any) {
    this.altura = event.target.value;
  }

  masculino() {
    this.sexo = 'Masculino';
  }

  femenino() {
    this.sexo = 'Femenino'
  }

  calcularBMI() {
    // vamos a hacer unos calculos
    const BMI = this.peso / Math.pow(this.altura/100, 2);
    this.router.navigate(['calculator/result', BMI.toFixed(1)])
  }

}
