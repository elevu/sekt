import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPromotionsComponent } from './completed-promotions.component';

describe('CompletedPromotionsComponent', () => {
  let component: CompletedPromotionsComponent;
  let fixture: ComponentFixture<CompletedPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
