import { NutricionTable } from "./nutricionTable";

export interface Alimentos{
    id: number;
    nombre: string;
    tipo: string;
    vegetal: boolean;
    animal: boolean;
    nutricion: NutricionTable;
}