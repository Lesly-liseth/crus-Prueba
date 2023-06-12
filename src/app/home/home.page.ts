import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  estudiantes: any[] = [];
  nombre: string = '';
  apellido: string = '';
  aportes: number[] = [];
  resultado: number = 0;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  calcularResultado() {
    const pesos = [20, 20, 20, 10, 30];
    let sumaAportes = 0;

    for (let i = 0; i < this.aportes.length; i++) {
      sumaAportes += (this.aportes[i] * pesos[i]) / 10;
    }

    this.resultado = sumaAportes;
  }

  async guardar() {
    if (this.nombre && this.apellido) {
      const estudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        aportes: [...this.aportes],
        resultado: this.resultado,
      };

      this.estudiantes.push(estudiante);

      // Limpiar campos
      this.nombre = '';
      this.apellido = '';
      this.aportes = [];
      this.resultado = 0;

      // Mostrar mensaje de éxito
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Estudiante guardado correctamente.',
        buttons: ['Aceptar'],
      });

      await alert.present();
    } else {
      // Mostrar mensaje de error
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingrese el nombre y apellido del estudiante.',
        buttons: ['Aceptar'],
      });

      await alert.present();
    }
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
