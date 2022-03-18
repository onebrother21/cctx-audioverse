import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_BlueBoxComponent } from './qs-blue-box.component';

describe('QS_BlueBoxComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_BlueBoxComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_BlueBoxComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-blue-box'`, () => {
    const fixture = TestBed.createComponent(QS_BlueBoxComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-blue-box');
  });
});
