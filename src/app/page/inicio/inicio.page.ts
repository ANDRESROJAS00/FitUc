import { Component } from '@angular/core';
// Asegúrate de importar el servicio correctamente
import { NavController } from '@ionic/angular';  // Para la navegación
import { AutentificacionService } from 'src/app/services/autentificacion/autentificacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  username: string = '';  // Variable para almacenar el usuario
  password: string = '';  // Variable para almacenar la contraseña

  constructor(private authService: AutentificacionService, private navCtrl: NavController) {}

  // Función de login
  login() {
    // Verificar si el usuario y la contraseña son correctos
    const autenticado = this.authService.verificarUser(this.username, this.password);

    if (autenticado) {
      // Si es correcto, redirigir a la página de 'home'
      this.navCtrl.navigateForward('/home');
    } else {
      // Si es incorrecto, mostrar un mensaje de error (puedes personalizar esto)
      alert('Usuario o contraseña incorrectos.');
    }
  }
}

