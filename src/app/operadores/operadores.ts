import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Formulario } from "../formulario/formulario";
import { Resultado } from "../resultado/resultado";

// NgModel: permiten el enlace bidireccional entre las propiedades del componente (operandoA y operandoB) y los campos de entrada (<input>).

@Component({
    selector: 'app-operadores',
    imports: [FormsModule, Formulario, Resultado],
    templateUrl: './operadores.html',
    styleUrl: './operadores.css'
})

export class Operadores {
    resultadoPadre: number | null = null;
    
    procesarResultado(resultado: number) {
        this.resultadoPadre = resultado;
    }
}
