import { async, TestBed } from '@angular/core/testing';
import { LogTicketComponent } from '../log-ticket.component';
import { CorporateModule } from '../../../../corporate.module';
// class MockLoginService extends LoginService {
//   login(pin: number) {
//     return Promise.resolve(true);
//   }
// }

describe('greeting component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogTicketComponent, CorporateModule]
    });
  });

  describe('without overriding', () => {
    beforeEach(async(() => {
      TestBed.compileComponents();
    }));

    it('should ask for PIN', async(() => {
      var fixture = TestBed.createComponent(LogTicketComponent);
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;


      //expect(compiled).toContainText('Enter PIN');
      //expect(compiled.querySelector('h3')).toHaveText('Status: Enter PIN');
    }));

  });
});
