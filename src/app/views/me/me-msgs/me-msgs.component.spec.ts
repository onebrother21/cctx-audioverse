import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserMessagesComponent } from './me-msgs.component';

describe('UserMessagesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserMessagesComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserMessagesComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'me-msgs'`, () => {
    const fixture = TestBed.createComponent(UserMessagesComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('me-msgs');
  });
});
