import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_SmallCardListComponent } from './qs-small-card-list.component';

describe('QS_SmallCardListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_SmallCardListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_SmallCardListComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-small-card-list'`, () => {
    const fixture = TestBed.createComponent(QS_SmallCardListComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-small-card-list');
  });
});
