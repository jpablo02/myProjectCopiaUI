// private-area.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-private-area',
  templateUrl: './private-area.component.html',
  styleUrls: ['./private-area.component.css']
})
export class PrivateAreaComponent {
  message = 'Acceso al área privada exitoso.';

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
