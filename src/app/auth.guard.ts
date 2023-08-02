import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Verificar si hay un token JWT en el LocalStorage
    const jwtToken = localStorage.getItem('jwtToken');

    if (jwtToken) {
      // Si el token existe, puedes realizar alguna verificación adicional si es necesario
      // Por ejemplo, verificar si el token ha expirado o si es válido

      // En este ejemplo, simplemente permitimos el acceso si el token existe
      return true;
    } else {
      // Si no hay un token, redirigir al usuario al formulario de inicio de sesión
      this.router.navigate(['/inicio-sesion']);
      return false;
    }
  }
}
