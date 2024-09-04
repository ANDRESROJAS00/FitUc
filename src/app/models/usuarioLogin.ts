import { Role } from "./role";

export interface UserLogin{
    id: number;
    username: string;
    password: string;
    rol: Role;
}