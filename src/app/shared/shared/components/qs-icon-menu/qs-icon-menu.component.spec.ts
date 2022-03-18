import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_IconMenuComponent } from './qs-icon-menu.component';

describe('QS_IconMenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_IconMenuComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_IconMenuComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-dash'`, () => {
    const fixture = TestBed.createComponent(QS_IconMenuComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-dash');
  });
});
