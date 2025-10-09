import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

// NgModel: permiten el enlace bidireccional entre las propiedades del componente (operandoA y operandoB) y los campos de entrada (<input>).

@Component({
    selector: 'app-operadores',
    imports: [FormsModule],
    templateUrl: './operadores.html',
    styleUrl: './operadores.css'
})

export class Operadores {
    operadorA: number = 0;
    operadorB: number = 0;
    resultado: number = 0;
    
    sumar(): void{
        this.resultado = this.operadorA + this.operadorB;
    }
}
