import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SmallCardListComponent } from './small-card-list.component';

describe('SmallCardListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SmallCardListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SmallCardListComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'small-card-list'`, () => {
    const fixture = TestBed.createComponent(SmallCardListComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('small-card-list');
  });
});
