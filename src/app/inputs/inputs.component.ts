import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {

  constructor() { }

  peso=''
  altura=''
  resultado=0

  CalculoIMC(){
    this.resultado = parseFloat(this.peso) / (parseFloat(this.altura) * parseFloat(this.altura));

    return this.resultado;
  }

}
