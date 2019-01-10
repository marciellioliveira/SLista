import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarListasComponent } from './criar-listas.component';

describe('CriarListasComponent', () => {
  let component: CriarListasComponent;
  let fixture: ComponentFixture<CriarListasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarListasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
