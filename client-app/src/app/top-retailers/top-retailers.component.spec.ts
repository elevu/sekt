import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRetailersComponent } from './top-retailers.component';

describe('TopRetailersComponent', () => {
  let component: TopRetailersComponent;
  let fixture: ComponentFixture<TopRetailersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRetailersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRetailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
