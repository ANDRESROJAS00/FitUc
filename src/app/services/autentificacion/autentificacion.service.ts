import { Injectable } from '@angular/core';
import { UserLoginService } from '../user-login.service';
import * as bcrypt from 'bcryptjs';
@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  constructor(private _userLoginService: UserLoginService) { }


  verificarUser(username: string, password: string): boolean {
    const usuarios = this._userLoginService.obtener_lista_usuarios();
    const usuario = usuarios.find(usuario => usuario.username === username);

    // Si el usuario existe, comparamos la contraseña encriptada
    if (usuario) {
      // Compara la contraseña ingresada con la encriptada almacenada
      const passwordMatch = bcrypt.compareSync(password, usuario.password);

      // Si la comparación es exitosa, retornamos true
      return passwordMatch;
    }

    // Si no existe el usuario o la contraseña no coincide, retorna false
    return false;
  }

}




























