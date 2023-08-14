import { Egreso } from "./egreso.model";

export class EgresoService{
    egresos:Egreso[]=[
        new Egreso("Renta",400),
        new Egreso("Compras extra",500)
    ]
}