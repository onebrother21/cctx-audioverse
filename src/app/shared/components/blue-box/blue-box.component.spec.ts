import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BlueBoxComponent } from './blue-box.component';

describe('BlueBoxComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BlueBoxComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BlueBoxComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'blue-box'`, () => {
    const fixture = TestBed.createComponent(BlueBoxComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('blue-box');
  });
});
