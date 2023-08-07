import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Usuario } from './usuario.model';

@Injectable()
export class UsuariosService {
  usuarios: Usuario[] = [
    new Usuario('Juan', 'Pérez'),
    new Usuario('Laura', 'Rojo'),
    new Usuario('Pedro', 'Picapiedra'),
  ];

  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService) {}

  usuarioAgregado(usuario: Usuario) {
    this.loggingService.enviarMensajeAConsola(
      'Usuario agregado: ' + usuario.nombre
    );
    this.usuarios.push(usuario);
  }

  usuarioEliminado() {
    this.usuarios.pop();
  }

  noUsuarios(): true | false {
    if (this.usuarios.length == 0) {
      return true;
    }
    return false;
  }
}
