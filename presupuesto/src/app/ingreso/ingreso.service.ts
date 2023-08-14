import { Ingreso } from "./ingreso.model";

export class IngresoService{
    ingreso:Ingreso [] =[
        new Ingreso("Salario",4000),
        new Ingreso("Venta mobiliario",5000)
    ];
}