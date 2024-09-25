import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsAPiComponent } from './hotels-api.component';

describe('HotelsAPiComponent', () => {
  let component: HotelsAPiComponent;
  let fixture: ComponentFixture<HotelsAPiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsAPiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsAPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
