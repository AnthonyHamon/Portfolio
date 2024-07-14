import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeScreenOverlayComponent } from './landscape-screen-overlay.component';

describe('LandscapeScreenOverlayComponent', () => {
  let component: LandscapeScreenOverlayComponent;
  let fixture: ComponentFixture<LandscapeScreenOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandscapeScreenOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandscapeScreenOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
