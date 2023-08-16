import { Egreso } from "./egreso.model";

export class EgresoService{
    egresos:Egreso[]=[
        new Egreso("Renta",400),
        new Egreso("Compras extra",500)
    ]
    eliminar(egreso:Egreso){
        const idx = this.egresos.indexOf(egreso);
        this.egresos.splice(idx,1);
    }
    agregar(egreso:Egreso){
        this.egresos.push(egreso);
    }
}