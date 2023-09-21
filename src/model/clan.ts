import { Especiales } from "./especiales";

export interface Clan {
    ID : number;
    Nombre: string;
    Descripcion: string;
    Historia: string;
    Habilidades:[Especiales]
}