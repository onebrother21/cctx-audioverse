import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactUsComponent } from './qs-contact-us.component';

describe('ContactUsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ContactUsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ContactUsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-contact-us'`, () => {
    const fixture = TestBed.createComponent(ContactUsComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-contact-us');
  });
});
