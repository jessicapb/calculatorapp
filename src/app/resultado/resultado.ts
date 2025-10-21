import { Component, Input } from '@angular/core';
import { Formulario } from "../formulario/formulario";

@Component({
  selector: 'app-resultado',
  imports: [Formulario],
  templateUrl: './resultado.html',
  styleUrl: './resultado.css'
})

export class Resultado {
  @Input() resultadoHijo: number | null = null;
}
