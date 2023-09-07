import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Usuario } from './usuario.model';
import { DataServices } from './data.services';
import { Observable } from 'rxjs';

@Injectable()
export class UsuariosService {
  usuarios: Usuario[] = [new Usuario('juanaco','puto'), new Usuario('juanaco','puto'), new Usuario('juanaco','puto')];

  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService,
    private dataService: DataServices) {}

  usuarioAgregado(usuario: Usuario) {
    console.log(this.usuarios);
    this.loggingService.enviarMensajeAConsola(
      'Usuario agregado: ' + usuario.nombre
    );
    if(this.usuarios == null){
      this.usuarios = []
    }
    this.usuarios.push(usuario);
    this.dataService.guardarUsuarios(this.usuarios);
  }
  
  setUsuarios(usuarios: Usuario[]){
    this.usuarios=usuarios;
  }
  obtenerUsuarios() : Observable<Usuario[]>{
    return this.dataService.cargarPersonas();
  }

  usuarioEliminado(index:number) {
    this.usuarios.splice(index,1);
    this.dataService.eliminarUsuario(index);
    //guardar arreglo de nuevo
    this.modificarUsuarios();
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
    this.dataService.modificarUsuario(index,usuario);
  }
  modificarUsuarios(){
    if(this.usuarios != null){
      this.dataService.guardarUsuarios(this.usuarios);
    }
  }
}
