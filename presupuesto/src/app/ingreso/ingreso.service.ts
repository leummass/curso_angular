import { Ingreso } from "./ingreso.model";

export class IngresoService{
    ingreso:Ingreso [] =[
        new Ingreso("Salario",4000),
        new Ingreso("Venta mobiliario",5000)
    ];

    eliminar(ingreso:Ingreso){
        const idx: number = this.ingreso.indexOf(ingreso);
        this.ingreso.splice(idx,1);
    }
    agregar(ingreso:Ingreso){
        this.ingreso.push(ingreso);
    }
}