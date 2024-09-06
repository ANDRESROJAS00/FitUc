import { Role } from "./role";

export interface UserLogin{
    id: number;
    username: string;
    password: string;
    rol: Role[];
    nombre: string;
    apellido: string;
    edad: number;
}