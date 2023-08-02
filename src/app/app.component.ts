import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mi-proyecto-angular'; // Asegúrate de que esta línea esté presente

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Verificar si hay un token JWT en el LocalStorage al cargar la aplicación
    const jwtToken = localStorage.getItem('jwtToken');

    if (jwtToken) {
      // Aquí puedes realizar acciones con el token, como obtener datos protegidos del servidor
      console.log('Token JWT encontrado:', jwtToken);
    }
  }
}
