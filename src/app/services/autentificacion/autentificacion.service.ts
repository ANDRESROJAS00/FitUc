import { Injectable } from '@angular/core';
import { UserLoginService } from '../user-login.service';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  constructor( private _userLoginService: UserLoginService) { }


  verificarUser(username: string, password: string): boolean{
    const usuarios = this._userLoginService.obtener_lista_usuarios();
    const usuarioExiste = usuarios.some(usuario => usuario.username == username && usuario.password == password);
    if(usuarioExiste){
      return true
    }else{
      return false;
    }

  }



























}
