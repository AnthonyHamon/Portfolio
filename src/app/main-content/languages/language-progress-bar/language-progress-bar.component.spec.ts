import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageProgressBarComponent } from './language-progress-bar.component';

describe('LanguageProgressBarComponent', () => {
  let component: LanguageProgressBarComponent;
  let fixture: ComponentFixture<LanguageProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageProgressBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
