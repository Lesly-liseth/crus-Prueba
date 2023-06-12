import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
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
