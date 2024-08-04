import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  bmi: number;
  resultado: string;
  interpretacion: string;

  constructor(private route: ActivatedRoute) { 
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado() {

    if(this.bmi >=25) {
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intente hacer más ejercicio'
    } else if(this.bmi >= 18.5) {
      this.resultado = 'Normal';
      this.interpretacion = 'Tienes un peso corporal normal. ¡Buen trabajo!'
    } else {
      this.resultado = 'Bajo peso';
      this.interpretacion = 'Tienes un peso corporal más bajo de lo normal. Puedes comer un poco más'
    }
  }

}
