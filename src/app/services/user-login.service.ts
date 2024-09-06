import { Injectable } from '@angular/core';
import { UserLogin } from '../models/usuarioLogin';
import * as bcrypt from 'bcryptjs';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {


  private lista_de_usuarios: UserLogin[] = [
    {
      id: 1,
      username: "Batman",
      password: bcrypt.hashSync("123456", 10),
      rol: [
        {id:1, nomRol: "user"}
      ],
      nombre: "Bruce",
      apellido: "Wayne",
      edad: 37
    },
    {
      id: 2,
      username: "IronMan",
      password: bcrypt.hashSync("456789", 10),
      rol: [
        {id:2, nomRol: "admin"}
      ],
      nombre: "Tony",
      apellido: "Stark",
      edad: 43
    }
  ]






  constructor() { }


  public obtener_lista_usuarios(): UserLogin[]{
    return this.lista_de_usuarios;
  }

  public obtener_info_usuario(username: string): UserLogin | undefined{
    console.log(username)
    return this.lista_de_usuarios.find(usuario => username == usuario.username)
  }




















}


