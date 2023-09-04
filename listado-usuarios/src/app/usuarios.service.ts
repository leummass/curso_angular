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

  usuarioEliminado(index:number) {
    this.usuarios.splice(index,1);
  }

  noUsuarios(): true | false {
    if (this.usuarios.length == 0) {
      return true;
    }
    return false;
  }
  encontrarPersona(index:number){
    let usuario: Usuario = this.usuarios[index];
    return usuario;
  }
  modificarUsuario(index:number,usuario: Usuario ){
    let usuario1 = this.usuarios[index];
    usuario1.nombre=usuario.nombre;
    usuario1.apellido=usuario.apellido;
  }
}
