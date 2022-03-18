import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LargeCardListComponent } from './qs-large-card-list.component';

describe('LargeCardListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LargeCardListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LargeCardListComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
