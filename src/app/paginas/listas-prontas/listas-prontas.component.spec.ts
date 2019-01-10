import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasProntasComponent } from './listas-prontas.component';

describe('ListasProntasComponent', () => {
  let component: ListasProntasComponent;
  let fixture: ComponentFixture<ListasProntasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasProntasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasProntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
