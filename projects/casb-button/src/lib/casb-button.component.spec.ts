import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasbButtonComponent } from './casb-button.component';

describe('CasbButtonComponent', () => {
  let component: CasbButtonComponent;
  let fixture: ComponentFixture<CasbButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasbButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasbButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
