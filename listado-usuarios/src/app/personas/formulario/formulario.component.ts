import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Usuario } from '../../usuario.model';
import { LoggingService } from '../../LoggingService.service';
import { UsuariosService } from '../../usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nombreInput:string;
  apellidoInput:string;
  index:number;
  modoEdicion:number;
  //@Output() usuarioCreado = new EventEmitter<Usuario>();
  //@ViewChild('nombreInput') nombreInput: ElementRef;
  //@ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private usuariosService: UsuariosService,
    private router:Router,
    private route: ActivatedRoute
  ) {
    this.usuariosService.saludar.subscribe((indice: number) =>
      alert('El indice es: ' + indice)
    );
  }
  ngOnInit(){
    this.index=this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if(this.modoEdicion != null && this.modoEdicion === 1){
      let usuario: Usuario= this.usuariosService.encontrarPersona(this.index);
      this.nombreInput=usuario.nombre;
      this.apellidoInput=usuario.apellido;
    }
  }

  onGuardarUsuario() {
    let usuarion = new Usuario(
      this.nombreInput,
      this.apellidoInput
    );
    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.usuariosService.modificarUsuario(this.index, usuarion);
    }else{
      this.usuariosService.usuarioAgregado(usuarion);
    }

    
    
    this.router.navigate(["personas"])
    //this.loggingService.enviarMensajeAConsola("Usuario nombre: "+ usuarion.nombre+" apellido: "+usuarion.apellido);
    //this.usuarioCreado.emit(usuarion);
  }
  eliminarUsuario() {
    //this.usuarios.pop();
    if(this.index !=null){
      this.usuariosService.usuarioEliminado(this.index);
    }
    this.router.navigate(['personas'])
  }
}
