import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-appointment',
  templateUrl: './show-appointment.page.html',
  styleUrls: ['./show-appointment.page.scss'],
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/login']);
  }

  requestPermissions() {
    // Aquí puedes agregar la lógica para solicitar los permisos de geolocalización
  }
}
