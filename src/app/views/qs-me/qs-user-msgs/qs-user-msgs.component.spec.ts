import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_UserMessagesComponent } from './qs-user-msgs.component';

describe('QS_UserMessagesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_UserMessagesComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_UserMessagesComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-msgs'`, () => {
    const fixture = TestBed.createComponent(QS_UserMessagesComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-msgs');
  });
});
