import { Component } from '@angular/core';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Listado de usuarios';
  usuarios: Usuario[] = [
    new Usuario('Juan', 'Pérez'),
    new Usuario('Laura', 'Rojo'),
    new Usuario('Pedro','Picapiedra')
  ];
}
