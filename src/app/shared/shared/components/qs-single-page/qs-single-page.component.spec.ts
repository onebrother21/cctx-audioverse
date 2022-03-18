import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_SinglePageComponent } from './qs-single-page.component';

describe('QS_SinglePageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_SinglePageComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_SinglePageComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
