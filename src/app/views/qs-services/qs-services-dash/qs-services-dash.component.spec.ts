import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_ServicesDashComponent } from './qs-services-dash.component';

describe('QS_ServicesDashComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_ServicesDashComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_ServicesDashComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-services-dash'`, () => {
    const fixture = TestBed.createComponent(QS_ServicesDashComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-services-dash');
  });
});
