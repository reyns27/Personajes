import { Elemento } from "./Elemento";
import { Habilidades } from "./Habilidades";

export interface Guardian {
    ID: number;
    Nombre:string;
    Descripcion: string;
    Elemento:[Elemento];
    Origen:string;
    Habilidades:[Habilidades]
}