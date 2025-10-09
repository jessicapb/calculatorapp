import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Operadores } from "./operadores/operadores";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Operadores],
    templateUrl: './app.html',
    styleUrl: './app.css'
})

export class App {
    title = 'Aplicación Calculadora';
}
