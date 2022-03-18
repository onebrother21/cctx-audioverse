import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MeMessagesComponent } from './me-msgs.component';

describe('MeMessagesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MeMessagesComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MeMessagesComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'me-msgs'`, () => {
    const fixture = TestBed.createComponent(MeMessagesComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('me-msgs');
  });
});
