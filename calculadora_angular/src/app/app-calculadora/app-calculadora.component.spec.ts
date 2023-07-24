import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCalculadoraComponent } from './app-calculadora.component';

describe('AppCalculadoraComponent', () => {
  let component: AppCalculadoraComponent;
  let fixture: ComponentFixture<AppCalculadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCalculadoraComponent]
    });
    fixture = TestBed.createComponent(AppCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
