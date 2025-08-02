import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Protofolio } from './protofolio';

describe('Protofolio', () => {
  let component: Protofolio;
  let fixture: ComponentFixture<Protofolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Protofolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Protofolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
