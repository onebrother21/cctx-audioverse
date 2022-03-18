import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MeDashComponent } from './me-dash.component';

describe('MeDashComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MeDashComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MeDashComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'me-dash'`, () => {
    const fixture = TestBed.createComponent(MeDashComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('me-dash');
  });
});
