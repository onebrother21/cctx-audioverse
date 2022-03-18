import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_HomeComponent } from './qs-home.component';

describe('QS_HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_HomeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_HomeComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-home'`, () => {
    const fixture = TestBed.createComponent(QS_HomeComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-home');
  });
});
