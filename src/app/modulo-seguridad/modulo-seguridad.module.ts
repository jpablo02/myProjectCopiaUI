// modulo-seguridad.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Agrega esta importación
import { ModuloSeguridadComponent } from './modulo-seguridad.component';

@NgModule({
  declarations: [ModuloSeguridadComponent],
  imports: [CommonModule, FormsModule], // Agrega FormsModule aquí
  exports: [ModuloSeguridadComponent],
})
export class ModuloSeguridadModule {}
