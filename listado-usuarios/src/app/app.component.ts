import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import { LoggingService } from './LoggingService.service';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = 'Listado de usuarios';
  usuarios: Usuario[] = [];
  constructor(private loggingService: LoggingService, private usuariosService:UsuariosService){}
  
  ngOnInit(): void {
    this.usuarios= this.usuariosService.usuarios;
  }

  /*usuarioAgregado(usuario: Usuario){
    //this.loggingService.enviarMensajeAConsola("Usuario agregado: "+usuario.nombre);
    //this.usuarios.push(usuario);
    this.usuariosService.usuarioAgregado(usuario);
  }*/

}
