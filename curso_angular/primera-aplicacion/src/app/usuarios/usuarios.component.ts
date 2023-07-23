import { Component } from "@angular/core";

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css'],
})

export class UsuariosComponent{
    disableBtn = true;
    msj = '';
    titulo='dsfsdf';
    mostrar=false;
    agregarUsuario(){
        this.mostrar=true;
        this.msj = 'Usuario añadido';
    }

    modificarTitulo(event: Event){
        this.titulo = (<HTMLInputElement>event.target).value;
    }
}