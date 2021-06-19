import { Base } from '../Entity/Base';
export class Instrumento implements Base{
    id!: number;
    instrument!: string;
    marca!: string;
    modelo!: string;
    foto!: number;
    precio!: number;
    costoEnvio!: string;
    cantidadVendida!: number;
    descripcion!: string;
}