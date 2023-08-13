import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavSubComponent } from './side-nav-sub.component';

describe('SideNavSubComponent', () => {
  let component: SideNavSubComponent;
  let fixture: ComponentFixture<SideNavSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
