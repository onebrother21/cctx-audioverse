import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SinglePageComponent } from './qs-single-page.component';

describe('SinglePageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SinglePageComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SinglePageComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
