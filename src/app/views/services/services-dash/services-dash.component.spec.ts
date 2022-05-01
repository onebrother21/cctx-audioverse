import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicesDashComponent } from './services-dash.component';

describe('ServicesDashComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ServicesDashComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ServicesDashComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'services-dash'`, () => {
    const fixture = TestBed.createComponent(ServicesDashComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('services-dash');
  });
});
