import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_IconMenuItemComponent } from './qs-icon-menu-item.component';

describe('QS_IconMenuItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_IconMenuItemComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_IconMenuItemComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-dash'`, () => {
    const fixture = TestBed.createComponent(QS_IconMenuItemComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-dash');
  });
});
