import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-modulo-seguridad',
  templateUrl: './modulo-seguridad.component.html',
  styleUrls: ['./modulo-seguridad.component.css'],
})
export class ModuloSeguridadComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Guardar el token JWT en el LocalStorage
        localStorage.setItem('jwtToken', response.token);

        // Redirigir al usuario a otra página después del inicio de sesión exitoso
        this.router.navigate(['/pagina-principal']);
      },
      (error) => {
        // Manejar el error en caso de inicio de sesión fallido
        console.error('Error al iniciar sesión:', error);
      }
    );
  }

  onLogout(): void {
    // Cerrar sesión y redirigir al usuario a otra página
    this.authService.logout();
    this.router.navigate(['/inicio-sesion']);
  }
}
