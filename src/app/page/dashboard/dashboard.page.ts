import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';
import { UserLogin } from 'src/app/models/usuarioLogin';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  usuario: UserLogin | undefined;

  constructor(private router: Router, private _userLoginService: UserLoginService) { }

  ngOnInit() {
    // Obtener el username desde la navegación
    const navigation = this.router.getCurrentNavigation();
    const username = navigation?.extras.state?.['username'];
    console.log(username);
    
    // Obtener la información del usuario desde el servicio
    this.usuario = this._userLoginService.obtener_info_usuario(username);
    console.log(this.usuario);
  }

  // Verificar si el usuario es admin
  esAdmin() {
    return this.usuario?.rol.some(rol => rol.nomRol === 'admin');
  }
}

