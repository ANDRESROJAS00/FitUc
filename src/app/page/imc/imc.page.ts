import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {

  edad: number = 0;   
  peso: number = 0;   
  altura: number = 0; 
  sexo: string = '';  
  nivelActividad: string = '';
  caloriasDiarias: number = 0; 
  caloriasParaPerderPeso: number = 0; // Añadir esta variable

  constructor() { }

  ngOnInit() {
  }

  calcularCalorias() {
    if (this.altura > 0 && this.peso > 0 && this.edad > 0) {
      const alturaEnMetros = this.altura / 100;
      let tasaMetabolicaBasal = 0;

      // Cálculo de TMB basado en el sexo
      if (this.sexo === 'masculino') {
        tasaMetabolicaBasal = 10 * this.peso + 6.25 * this.altura - 5 * this.edad + 5;
      } else if (this.sexo === 'femenino') {
        tasaMetabolicaBasal = 10 * this.peso + 6.25 * this.altura - 5 * this.edad - 161;
      }

      // Cálculo de calorías según nivel de actividad
      const factorActividad = this.obtenerFactorActividad();
      this.caloriasDiarias = tasaMetabolicaBasal * factorActividad;

      // Cálculo de calorías para bajar de peso (500-1000 calorías menos)
      this.caloriasParaPerderPeso = this.caloriasDiarias - 500; // Reducir 500 calorías para pérdida de peso moderada
    }
  }

  obtenerFactorActividad(): number {
    switch (this.nivelActividad) {
      case 'sedentario':
        return 1.2;
      case 'ligero':
        return 1.375;
      case 'moderado':
        return 1.55;
      case 'intenso':
        return 1.725;
      case 'muyIntenso':
        return 1.9;
      default:
        return 1.2;
    }
  }

}

