import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloSeguridadComponent } from './modulo-seguridad.component';

describe('ModuloSeguridadComponent', () => {
  let component: ModuloSeguridadComponent;
  let fixture: ComponentFixture<ModuloSeguridadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloSeguridadComponent]
    });
    fixture = TestBed.createComponent(ModuloSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
