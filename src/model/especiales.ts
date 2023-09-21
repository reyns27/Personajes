import { Elemento } from "./Elemento";

export interface Especiales {
    ID: number;
    Nombre:string;
    Descripcion: string;
    Elemento:[Elemento];
    Rango:string;
}