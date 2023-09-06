import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  guardarUsuarios(usuarios: Usuario[]) {
    this.httpClient
      .post(
        'https://listado-usuarios-4afbe-default-rtdb.firebaseio.com/datos.json',
        usuarios
      )
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
}
