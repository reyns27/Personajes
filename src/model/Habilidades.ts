import { Elemento } from "./Elemento";

export interface Habilidades {
    ID: number;
    Nombre:string;
    Descripcion: string;
    Elemento:[Elemento];
    Rango:string;
}