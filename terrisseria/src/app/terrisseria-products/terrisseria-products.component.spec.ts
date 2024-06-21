import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrisseriaProductsComponent } from './terrisseria-products.component';

describe('TerrisseriaProductsComponent', () => {
  let component: TerrisseriaProductsComponent;
  let fixture: ComponentFixture<TerrisseriaProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerrisseriaProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrisseriaProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
