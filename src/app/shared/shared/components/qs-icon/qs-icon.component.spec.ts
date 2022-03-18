import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_IconComponent } from './qs-icon.component';

describe('QS_IconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_IconComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_IconComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-dash'`, () => {
    const fixture = TestBed.createComponent(QS_IconComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-dash');
  });
});
