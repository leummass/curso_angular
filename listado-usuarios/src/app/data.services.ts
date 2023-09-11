import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient, private loginService:LoginService) {}

  guardarUsuarios(usuarios: Usuario[]) {
    const token = this.loginService.getIdToken();
    this.httpClient
      .put(
        'https://listado-usuarios-4afbe-default-rtdb.firebaseio.com/datos.json?auth='+token,
        usuarios
      )
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
  cargarPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get<Usuario[]>(
      'https://listado-usuarios-4afbe-default-rtdb.firebaseio.com/datos.json?auth='+token
    );
  }
  modificarUsuario(index:number,usuario:Usuario){
    const token = this.loginService.getIdToken();
    let url:string;
    url = 'https://listado-usuarios-4afbe-default-rtdb.firebaseio.com/datos/' + index + '.json?auth='+token;
    this.httpClient.put(url,usuario)
    .subscribe({
      next: (response) => console.log("Usuario modificado"+response),
      error: (error) => console.log(error),
    });
  }
  eliminarUsuario(index:number){
    const token = this.loginService.getIdToken();
    let url:string;
    url = 'https://listado-usuarios-4afbe-default-rtdb.firebaseio.com/datos/' + index + '.json?auth='+token;
    this.httpClient.delete(url)
    .subscribe({
      next: (response) => console.log("Usuario eliminado"+response),
      error: (error) => console.log(error),
    });
  }
}
