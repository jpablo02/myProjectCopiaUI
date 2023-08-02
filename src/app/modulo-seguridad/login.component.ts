import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Aquí puedes manejar la respuesta del servidor después del inicio de sesión exitoso
        console.log('Inicio de sesión exitoso:', response);
      },
      (error) => {
        // Aquí puedes manejar el error en caso de inicio de sesión fallido
        console.error('Error al iniciar sesión:', error);
      }
    );
  }
}
