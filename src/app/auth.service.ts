import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private dialog: MatDialog) {}

  login(email: string, password: string): void {
    // Lógica para realizar la solicitud HTTP de inicio de sesión al backend de NestJS
    // Por ejemplo:
    this.http.post<any>('http://localhost:3001/auth/login', { correo: email, contraseña: password }).subscribe(
      (response) => {
        // Si el inicio de sesión es exitoso, mostrar diálogo de éxito
        this.showSuccessDialog('Inicio de sesión exitoso. Bienvenido, ' + response.username + '!');
        // Aquí también puedes guardar el token JWT en el almacenamiento local
      },
      (error) => {
        // Si el inicio de sesión falla, mostrar diálogo de error
        this.showErrorDialog('Error al iniciar sesión. Credenciales inválidas.');
      }
    );
  }

  register(email: string, password: string): void {
    // Lógica para realizar la solicitud HTTP de registro al backend de NestJS
    // Por ejemplo:
    this.http.post<any>('http://localhost:3001/auth/register', { correo: email, contraseña: password }).subscribe(
      () => {
        // Si el registro es exitoso, mostrar diálogo de éxito
        this.showSuccessDialog('Registro exitoso. Inicia sesión con tus nuevas credenciales.');
      },
      (error) => {
        // Si el registro falla, mostrar diálogo de error
        this.showErrorDialog('Error al registrar usuario. Inténtalo nuevamente.');
      }
    );
  }

  // Método para mostrar el diálogo de error
  private showErrorDialog(errorMessage: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: { errorMessage },
    });
  }

  // Método para mostrar el diálogo de éxito
  private showSuccessDialog(message: string): void {
    this.dialog.open(SuccessDialogComponent, {
      data: { message },
    });
  }
}
