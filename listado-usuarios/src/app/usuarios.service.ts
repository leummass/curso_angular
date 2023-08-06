import { Usuario } from './usuario.model';

export class UsuariosService {
  usuarios: Usuario[] = [
    new Usuario('Juan', 'Pérez'),
    new Usuario('Laura', 'Rojo'),
    new Usuario('Pedro', 'Picapiedra'),
  ];

  usuarioAgregado(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  usuarioEliminado(){
    this.usuarios.pop();
  }

  noUsuarios(): true | false{
    if(this.usuarios.length==0){
        return true;
    }
    return false;
  }
}
