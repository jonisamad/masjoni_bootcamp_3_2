import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahKamarComponent } from './tambah-kamar.component';

describe('TambahKamarComponent', () => {
  let component: TambahKamarComponent;
  let fixture: ComponentFixture<TambahKamarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahKamarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahKamarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
