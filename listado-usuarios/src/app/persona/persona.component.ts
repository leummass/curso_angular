import { Component, Input } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  @Input() usuario: Usuario;
  @Input() indice: number;

  constructor(private usuariosService: UsuariosService) {}
  emitirSaludo() {
    this.usuariosService.saludar.emit(this.indice);
  }
}
