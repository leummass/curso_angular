import { Component } from "@angular/core";

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css'],
})

export class UsuariosComponent{
    disableBtn = true;
    msj = 'No se ha agregado ningun usuario';
    titulo='dsfsdf';
    agregarUsuario(){
        this.msj = 'Usuario añadido';
    }

    modificarTitulo(event: Event){
        this.titulo = (<HTMLInputElement>event.target).value;
    }
}