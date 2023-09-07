import { Component } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  titulo = 'Listado de usuarios';
  usuarios: Usuario[] = [];
  constructor( private usuariosService:UsuariosService, private router:Router){}
  
  ngOnInit(): void {
    this.usuarios= this.usuariosService.usuarios;
    this.usuariosService.obtenerUsuarios()
    .subscribe({
      next: (item) =>{
        this.usuarios = item as Usuario[];
        this.usuariosService.setUsuarios(this.usuarios);
      },
      error: () => {console.log("Error al recibir usuarios")},
      complete: () => {console.log("Usuarios recibidos")}
    });
  }
  agregar(){
    this.router.navigate(["personas/agregar"])
  }
}
