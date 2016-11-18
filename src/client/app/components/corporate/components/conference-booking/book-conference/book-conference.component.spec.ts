import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { Router} from '@angular/router';

import { BookComponent } from './book-conference.component';
import { t } from '../../../../../frameworks/test/index';
import { CoreModule } from '../../../../../frameworks/core/core.module';
import {DropdownModule, SharedModule} from 'primeng/primeng';

export function main() {

    t.describe('Component: BookComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, RouterTestingModule, DropdownModule, SharedModule],
                declarations: [BookComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [{ provide: Router, useClass: RouterStub }]
            });
        });
        t.it('should have a defined component',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.e(fixture.nativeElement).toBeTruthy();
                        t.e(TestComponent).toBeDefined();
                    });
            }));
        t.it('should have a conferenceRooms property initialize',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        t.expect(componentInstance.conferenceRooms.length).toBe(9);
                    });
            }));
        t.it('should save a record',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        componentInstance.conferenceModel.title = 'Meeting';
                        componentInstance.conferenceModel.start = new Date();
                        componentInstance.conferenceModel.end = new Date();
                        componentInstance.selectedRoom = { name: 'Bahamas', color: 'red' };
                        componentInstance.save();
                        t.expect(componentInstance.conferenceModel.conference).toBe('Bahamas');
                        t.expect(componentInstance.conferenceModel.color).toBe('red');
                    });
            }));
        t.it('TC_14:To check what are the contents of the Form provided for new booking',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_15:To check whether Title is mandatory Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_16: To check whether Title has any limitations Of the characters or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_17: To check whether Start Time is Mandatory or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_18:To check whether Date and Time Both has to be entered in Start Time Field or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_19: To check whether for entering date, Calender is provided',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_20: To check whether past date can be Entered or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_21:To check whether validation is displayed If date is left blank',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_22: To check how should be time be Displayed',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_23: To check whether minutes dropdownlist Also provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_24:To check whether entering time is mandatory or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_25: To check whether validation is provided Or not when left blank',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_26: To check whether End Time is Mandatory or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_27:To check whether Date and Time Both has to be entered in End Time Field or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_28: To check whether for entering date, Calender is provided',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_29: To check whether past date can be Entered or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_30:To check whether validation is displayed If date is left blank',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_31:To check how should be time be Displayed ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_32: To check whether minutes dropdownlist Also provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_33: To check whether validation hits or Not when date is fine but time entered Which is already passed',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_34: To check whether entering time is mandatory or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_35:To check whether validation is provided Or not when left blank',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_36: To check how to enter Legal Attendees ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_37: To check what does that form contains.',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_38: To check what happens if illegal Attendees are directly added in The text box.',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_39:To check whether illegal attendees Are added and still it accepts',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_40: To check cancel button is provided In the form where attendees are selected ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_41: To check what will happen if Attendees Are selected and then cancel button is Clicked',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_42: To check whether cancel button is Redirected back when no attendees is Added',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_43:To check what happens when OK button Is clicked when no attendees is selected',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_44: To check what happens when OK button is Clicked when attendees are selected ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_45: To check whether at right corner View dropdownlist is provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_46: To check what are the contents of View Dropdownlist',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_47: To check whether it makes any changes When List view is selected',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_48:To check what is displayed on the Screen when List view is selected',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_49: To check does the view on the screen Changes when Detailed View is Selected',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_50:To check whether 2 options for Searching attendees on the left Side is provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_51: To check whether selecting Conference room option is provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_52: To check what are the contents Of Conference Rooms Dropdownlist',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_53: To check whether any changes in the Dropdownlist can be made by the user Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_54: To check how it is displayed Whether selected conference is Free or busy',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_55: To check when the conference room Is available as per user wish; Can User Book the conference Room',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_56:To check whether selected attendees Selected are free or busy',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_57: To check how it is displayed for a Busy attendees or busy Conference room',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_58: To check whether it allows to book Same conference room for the Same start time to end time By two different users',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_59: To check what happens if Attendees are occupied in 2 different conference room at same time',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_60:To check whether all the attendees are Present in the table or not after adding Attendees',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_61: To check what if any of the attendees Is not added',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_62:To check whether the double booking Option Is provided or not ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_63: To check how it is displayed To check the double booking',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_64:To check whether click button Works properly or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_65: To check whether validation is Provided or not when double booking is found',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_66:To check whether Description is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_67:To check the word limitations for Description box is provided Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_68: To check whether description field Is mandatory or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_69: To check All -Day Event is provided Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_70: To check whether the check box When clicked gets saved or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_71: To check to tick on the check box If any conference room has to be Used for the whole day',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_72: To check if not ticked on the check box But according to start time and end time The conference room is booked For the whole day',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_73: To check Recurrence option',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_74: To check how Recurrence option Is provided',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_75: To check whether Recurrence option If selected will save the data',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_76: To check what are the contents of Special treatment',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_77: To check whether check box selected Gets saved for further use',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_78:To check Special Comments Field Is mandatory',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_79: To check Word Limitations is Provided or not to this Special Comments Field',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_80: To check Number of guests is Number type field or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_81: To check Number of guests has Limitations or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_82:To check whether No. of guests is Mandatory field or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_86:To check whether save button Is available or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_87: To check whether save button is Redirecting page or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_88:To check whether save button Works when all the fields are blank Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_89: To check whether save button Works when all the fields filled or Not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_90: To check whether save button Works when only half fields are Selected',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_91: To check whether save button is displaying the same data on the Redirected page or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_92:To check validations on the Unfilled Fields after clicking On save button',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_93:to check whether save button Saves the data or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_94: To check whether cancel button Is available or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_95: To check whether cancel button Works when all the fields are Left blank',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_96:To check whether cancel redirects The page or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_97: To check whether cancel close the Form or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_98: To check whether data entered Will get vanished or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_99:To check what close sign at right Corner Will perform ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_100:To check if form is filled and then Close sign is used, what will happen',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_101:To check whether warning will be Given or not before closing the Form',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_102:To check whether the data entered In the form will be lost or not if Accidentally clicked on close option',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
        t.it('TC_103:To check what happens when the Form is closed and reopened again',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(false).toBe(true);
                    });
            }));
    });
};


@Component({
    selector: 'test-cmp',
    template: '<book-conference></book-conference>'
})
class TestComponent { }

class RouterStub {
    navigate(url: any) { return url; }
}
