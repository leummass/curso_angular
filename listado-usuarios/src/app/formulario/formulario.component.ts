import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() usuarioCreado = new EventEmitter<Usuario>();
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  agregarUsuario() {
    let usuarion = new Usuario(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value
    );
    this.usuarioCreado.emit(usuarion);
  }
  eliminarUsuario() {
    //this.usuarios.pop();
  }
}
