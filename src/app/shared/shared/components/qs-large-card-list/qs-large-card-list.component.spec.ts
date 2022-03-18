import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_LargeCardListComponent } from './qs-large-card-list.component';

describe('QS_LargeCardListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_LargeCardListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_LargeCardListComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
