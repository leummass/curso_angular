import { Component, Input } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  
  @Input() usuario: Usuario;
  @Input() indice:number;
}
