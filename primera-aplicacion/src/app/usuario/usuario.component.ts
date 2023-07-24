import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  nombre: string = 'Samuel';
  apellido: string = 'Valadez';
  private edad: number = 22;

  getEdad():number{
    return this.edad;
  }
    
}
