import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_UserHomeAltComponent } from './qs-user-home-alt.component';

describe('QS_UserHomeAltComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_UserHomeAltComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_UserHomeAltComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-home-alt'`, () => {
    const fixture = TestBed.createComponent(QS_UserHomeAltComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-home-alt');
  });
});
