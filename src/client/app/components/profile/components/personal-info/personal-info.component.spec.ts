import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { t } from '../../../../frameworks/test/index';

import { PersonalInfoComponent } from './personal-info.component';

const testModuleConfig = () => {
    TestBed.configureTestingModule({
        declarations: [
            TestComponent, PersonalInfoComponent,
        ]
    });
};

var profile = {
    employeeID: 1,
    employeeName: 'Nick',
    currentAddress: 'currentAddress',
    contactNo: '',
    email: 'email@anc.com',
    dateOfBirth: '01/01/1993',
    esplPfNo: '',
    previousPfNo: '',
    careerStartDate: '',
    lastWorkingDay: '',
    emergencyContactName: '',
    bloodGroup: '',
    emergencyContactNo: '',
    skypeID: ''
};

export function main() {

    t.describe('Component: PersonalInfoComponent', () => {
        t.be(testModuleConfig);
        t.it('TC_03 : To check what comes under Personal Information',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let personalInfoDOMEl = fixture.debugElement.children[0].nativeElement;
                        t.e(TestComponent).toBeDefined();
                        t.e(personalInfoDOMEl.querySelector('#personalInfo_employeeID').textContent).toEqual('Employee ID');
                        t.e(personalInfoDOMEl.querySelector('#personalInfo_employeeName').textContent).toEqual('Employee Name');
                        t.e(personalInfoDOMEl.querySelector('#personalInfo_currentAddress').textContent).toEqual('Current Address');
                        t.e(personalInfoDOMEl.querySelector('#personalInfo_contactNo').textContent).toEqual('Contact No');
                        t.e(personalInfoDOMEl.querySelector('#personalInfo_employeeEmail').textContent).toEqual('Email');
                        t.e(personalInfoDOMEl.querySelector('#personalInfo_dateOfBirth').textContent).toEqual('Date of Birth');
                        t.e(personalInfoDOMEl.querySelector('#personalInfo_esplPFNo').textContent).toEqual('ESPL PF No');
                        t.e(personalInfoDOMEl.querySelector('#personalInfo_previousPFNo').textContent).toEqual('Previous PF No');
                        t.e(personalInfoDOMEl.querySelector('#personalInfo_careerStartDate').textContent).toEqual('Career Start Date ');
                        t.e(personalInfoDOMEl.querySelector('#personalInfo_lastWorkingDay').textContent).toEqual('Last working day of previous employer');
                        t.e(personalInfoDOMEl.querySelector('#personalInfo_emergencyContactName').textContent).toEqual('Emergency Contact Name');
                        t.e(personalInfoDOMEl.querySelector('#personalInfo_bloodGroup').textContent).toEqual('Blood Group');
                        t.e(personalInfoDOMEl.querySelector('#personalInfo_emergencyContactNo').textContent).toEqual('Emergency Contact No');
                        t.e(personalInfoDOMEl.querySelector('#personalInfo_skypeID').textContent).toEqual('Skype ID');
                    });
            }));
        t.it('TC_04 : To check whether Employee ID is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;
                        personalInfoInstance.profile = profile;
                        fixture.detectChanges();

                        t.e(personalInfoInstance.profileInfo).toBeDefined();
                        t.e(personalInfoInstance.profileInfo.employeeID).toBeDefined();
                        t.e(personalInfoInstance.profileInfo.employeeID).toEqual(profile.employeeID);
                    });
            }));
        t.it('TC_05 : To check whether Employee ID is editable Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_06 : To check whether Employee Name is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;
                        personalInfoInstance.profile = profile;
                        fixture.detectChanges();

                        t.e(personalInfoInstance.profileInfo).toBeDefined();
                        t.e(personalInfoInstance.profileInfo.employeeName).toBeDefined();
                        t.e(personalInfoInstance.profileInfo.employeeName).toEqual(profile.employeeName);
                    });
            }));
        t.it('TC_07 : To check whether Employee Name is editable Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_08 : To check whether Current Address is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;
                        personalInfoInstance.profile = profile;
                        fixture.detectChanges();

                        t.e(personalInfoInstance.profileInfo).toBeDefined();
                        t.e(personalInfoInstance.profileInfo.currentAddress).toBeDefined();
                        t.e(personalInfoInstance.profileInfo.currentAddress).toEqual(profile.currentAddress);
                    });
            }));
        t.it('TC_09 : To check whether Current Address is editable Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));

        t.it('TC_10 : To check whether Contact No is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;
                        personalInfoInstance.profile = profile;
                        personalInfoInstance.profile.contactNo = 123456789;
                        personalInfoInstance.editContactNo();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.isEditContactNo).toBe(true);
                    });
            }));
        t.it('TC_11 : To check whether Contact No is editable Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;

                        t.e(personalInfoInstance.isEditContactNo).toBe(false);

                        personalInfoInstance.profile = profile;
                        personalInfoInstance.profile.contactNo = 123456789;
                        personalInfoInstance.editContactNo();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.isEditContactNo).toBe(true);
                    });
            }));
        t.it('TC_12 : To check whether contact No is Number type or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_13 : To check what is the length limitations',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));

        t.it('TC_14 : To check whether Email ID is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;
                        personalInfoInstance.profile = profile;
                        fixture.detectChanges();

                        t.e(personalInfoInstance.profileInfo).toBeDefined();
                        t.e(personalInfoInstance.profileInfo.email).toBeDefined();
                        t.e(personalInfoInstance.profileInfo.email).toEqual(profile.email);
                    });
            }));

        t.it('TC_15 : To check whether Email ID is Editable Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_16 : To check whether Date of Birth is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;
                        personalInfoInstance.profile = profile;
                        fixture.detectChanges();

                        t.e(personalInfoInstance.profileInfo).toBeDefined();
                        t.e(personalInfoInstance.profileInfo.dateOfBirth).toBeDefined();
                        t.e(personalInfoInstance.profileInfo.dateOfBirth).toEqual(profile.dateOfBirth);
                    });
            }));
        t.it('TC_17 : To check whether Date of Birth is Editable Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_18 : To check whether ESPL PF Number is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_19 : To check whether ESPL PF Number is Editable Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;

                        t.e(personalInfoInstance.isAddEsplPfNo).toBe(false);
                        t.e(personalInfoInstance.isEditEsplPfNo).toBe(false);

                        personalInfoInstance.profile = profile;
                        personalInfoInstance.addEsplPfNo();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.isAddEsplPfNo).toBe(true);
                        t.e(personalInfoInstance.isEditEsplPfNo).toBe(true);

                        personalInfoInstance.isEditEsplPfNo = false;
                        personalInfoInstance.editEsplPfNo();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.isEditEsplPfNo).toBe(true);
                    });
            }));
        t.it('TC_20 : To check whether ADD Link is provided Or not in front of ESPL PF Number',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_21 : To check whether ADD Link is Clickable',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_22 : To check what should happen after ADD Link is clicked',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;

                        t.e(personalInfoInstance.isAddEsplPfNo).toBe(false);
                        t.e(personalInfoInstance.isEditEsplPfNo).toBe(false);

                        personalInfoInstance.profile = profile;
                        personalInfoInstance.addEsplPfNo();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.isAddEsplPfNo).toBe(true);
                        t.e(personalInfoInstance.isEditEsplPfNo).toBe(true);
                    });
            }));

        t.it('TC_23 : To check whether ESPL UAN Number is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_24 : To check whether ESPL UAN Number is Editable Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_25 : To check whether ADD Link is provided Or not in front of ESPL UAN Number',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_26 : To check whether ADD Link is Clickable',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_27 : To check what should happen after ADD Link is clicked',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_28 : To check whether Previous PF Number is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });;
            }));
        t.it('TC_29 : To check whether Previous PF Number is Editable Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;

                        t.e(personalInfoInstance.isAddPreviousPfNo).toBe(false);
                        t.e(personalInfoInstance.isEditPreviousPfNo).toBe(false);

                        personalInfoInstance.profile = profile;
                        personalInfoInstance.addPreviousPfNo();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.isAddPreviousPfNo).toBe(true);
                        t.e(personalInfoInstance.isEditPreviousPfNo).toBe(true);

                        personalInfoInstance.isEditPreviousPfNo = false;
                        personalInfoInstance.editPreviousPfNo();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.isEditPreviousPfNo).toBe(true);
                    });
            }));
        t.it('TC_30 : To check whether ADD Link is provided Or not in front of Previous PF Number',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_31 : To check whether ADD Link is Clickable',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_32 : To check what should happen after ADD Link is clicked',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;

                        t.e(personalInfoInstance.isAddPreviousPfNo).toBe(false);
                        t.e(personalInfoInstance.isEditPreviousPfNo).toBe(false);

                        personalInfoInstance.profile = profile;
                        personalInfoInstance.addPreviousPfNo();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.isAddPreviousPfNo).toBe(true);
                        t.e(personalInfoInstance.isEditPreviousPfNo).toBe(true);
                    });
            }));
        t.it('TC_33 :To check whether Previous UAN Number is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_34 : To check whether Previous UAN Number is Editable Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_35 : To check whether ADD Link is provided Or not in front of Previous UAN Number',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_36 : To check whether ADD Link is Clickable',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_37 : To check what should happen after ADD Link is clicked',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_38 : To check whether Career Start Date is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_39 : To check whether Career Start Date is Number type or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_40 : To check whether dd-mm-yy is the format For specifying date or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_41 : To check whether it is mandatory or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_42 : To check whether Career start date can Be updated or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;

                        personalInfoInstance.profile = profile;
                        personalInfoInstance.profileInfo = {
                            careerStartDate: '10/10/2015'
                        };
                        personalInfoInstance.saveCareerStartDate();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.profile.careerStartDate).toBe(personalInfoInstance.profileInfo.careerStartDate);
                    });
            }));
        t.it('TC_43 : To check whether Update Link Button is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_44 : To check whether Update Link button is Clickable or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_45 : To check whether Update Link button when Clicked is displaying the text box or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;

                        personalInfoInstance.profile = profile;
                        personalInfoInstance.profile.careerStartDate = '10/10/2015';
                        personalInfoInstance.saveCareerStartDate();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.isEditCareerStartDate).toBe(false);
                    });
            }));
        t.it('TC_46 : To check whether Last working day of previous employer is provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_47 : To check whether  it is mandatory or not to fill ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_48 : To check whether if already mentioned then it is in dd-mm-yyyy format or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_49 : To check if not mentioned anything then what is provided',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));

        t.it('TC_50 : To check whether ADD Link is provided Or not in front of  Last working day of previous employer',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_51 : To check whether ADD Link is Clickable',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));

        t.it('TC_52 : To check what should happen after ADD Link is clicked',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;

                        t.e(personalInfoInstance.isAddLastWorkingDay).toBe(false);
                        t.e(personalInfoInstance.isEditLastWorkingDay).toBe(false);

                        personalInfoInstance.profile = profile;
                        personalInfoInstance.addLastWorkingDay();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.isAddLastWorkingDay).toBe(true);
                        t.e(personalInfoInstance.isEditLastWorkingDay).toBe(true);
                    });
            }));
        t.it('TC_53 : To check whether Emergency Contact Name is provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_54 : To check whether  it is mandatory or not to fill',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_55 : To check whether if already mentioned then it is in text format or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_56 : To check if not mentioned anything then what is provided',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_57 : To check whether ADD Link is provided Or not in front of Emergency Contact Name',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_58 : To check whether ADD Link is Clickable',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_59 : To check what should happen after ADD Link is clicked',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;

                        t.e(personalInfoInstance.isAddEmergencyContactName).toBe(false);
                        t.e(personalInfoInstance.isEditEmergencyContactName).toBe(false);

                        personalInfoInstance.profile = profile;
                        personalInfoInstance.addEmergencyContactName();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.isAddEmergencyContactName).toBe(true);
                        t.e(personalInfoInstance.isEditEmergencyContactName).toBe(true);
                    });
            }));
        t.it('TC_60 : To check whether Emergency Contact Number is provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_61 : To check whether  it is mandatory or not to fill',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_62 : To check whether if already mentioned then it is in number format or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_63 : To check if mentioned anything already & want to change it then what is provided',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_64 : To check whether UPDATE Link is provided Or not in front of Emergency Contact Number',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_65 : To check whether UPDATE Link is Clickable',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_66 : To check what should happen after UPDATE Link is clicked',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;
                        personalInfoInstance.profile = profile;
                        personalInfoInstance.profileInfo = {
                            emergencyContactName: 'John'
                        };
                        personalInfoInstance.saveEmergencyContactName();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.profile.emergencyContactName).toBe(personalInfoInstance.profileInfo.emergencyContactName);
                    });
            }));
        t.it('TC_67 : To check whether Skype ID field is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_68 : To check whether  it is mandatory or not To fill',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));

        t.it('TC_69 : To check whether Skype ID field can be Edited or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_70 : To check whether Edit Option is Working or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_71 : To check whether Edit Option displays Text box or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;
                        t.e(personalInfoInstance.isAddSkypeID).toBe(false);
                        t.e(personalInfoInstance.isEditSkypeID).toBe(false);

                        personalInfoInstance.profile = profile;
                        personalInfoInstance.editSkypeID();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.isEditSkypeID).toBe(true);
                    });
            }));

        t.it('TC_72 : To check whether Text box displayed After clicking on Edit Option is filled With old data or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_73 : To check when changed data in the Text box saves the data and displays it Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;

                        personalInfoInstance.profile = profile;
                        personalInfoInstance.profileInfo = {
                            skypeID: 'John.skype'
                        };
                        personalInfoInstance.saveSkypeID();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.profile.skypeID).toBe(personalInfoInstance.profileInfo.skypeID);
                    });
            }));
        t.it('TC_74 : To check whether Blood Group field is Provided or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_75 : To check whether  it is mandatory or not To fill',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_76 : To check whether Blood Group field can  Be Edited or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;
                        t.e(personalInfoInstance.isAddBloodGroup).toBe(false);
                        t.e(personalInfoInstance.isEditBloodGroup).toBe(false);

                        personalInfoInstance.profile = profile;
                        personalInfoInstance.editBloodGroup();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.isEditBloodGroup).toBe(true);
                    });
            }));
        t.it('TC_77 : To check whether Edit Option is Working or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_78 : To check whether Edit Option displays Text box or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let personalInfoInstance = fixture.debugElement.children[0].componentInstance;
                        t.e(personalInfoInstance.isAddBloodGroup).toBe(false);
                        t.e(personalInfoInstance.isEditBloodGroup).toBe(false);

                        personalInfoInstance.profile = profile;
                        personalInfoInstance.editBloodGroup();
                        fixture.detectChanges();

                        t.e(personalInfoInstance.isEditBloodGroup).toBe(true);
                    });
            }));
        t.it('TC_79 : To check whether drop down displayed After clicking on Edit Option is filled With old data or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
        t.it('TC_80 : To check when changed data in the drop down saves the data and displays It Or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        t.e(true).toBe(false);
                    });
            }));
    });
};

@Component({
    selector: 'test-cmp',
    template: '<personal-info></personal-info>'
})
class TestComponent { }
