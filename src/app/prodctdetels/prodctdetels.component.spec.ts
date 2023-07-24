import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctdetelsComponent } from './prodctdetels.component';

describe('ProdctdetelsComponent', () => {
  let component: ProdctdetelsComponent;
  let fixture: ComponentFixture<ProdctdetelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdctdetelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdctdetelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
