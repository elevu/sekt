import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPromotionsComponent } from './top-promotions.component';

describe('TopPromotionsComponent', () => {
  let component: TopPromotionsComponent;
  let fixture: ComponentFixture<TopPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
