import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_IconMenuDivComponent } from './qs-icon-menu-div.component';

describe('QS_IconMenuDivComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_IconMenuDivComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_IconMenuDivComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
