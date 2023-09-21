import { Habilidades } from "./Habilidades";
import { Clan } from "./clan";
import { Guardian } from "./guardian";

export interface Avatar {
    ID: number;
    Nombre: string;
    Apellido:string;
    Fecha: Date;
    BIO: string;
    Clan:Clan;
    Guardian:Guardian;
    Habilidades:[Habilidades]
}