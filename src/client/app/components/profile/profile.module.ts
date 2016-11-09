/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

/** Other Module Dependencies */
import {CommonModule, TranslateModule} from '../../shared/index';

/** Module level Dependencies */
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationComponent } from './components/certification/certification.component';
import { AchievementComponent } from './components/achievement/achievement.component';

/** Module Import Declarations */
let imports = [CommonModule, TranslateModule, BrowserModule];

/** Component/Directive Declarations */
let declarations = [
         MyProfileComponent, 
         PersonalInfoComponent,
         EducationComponent,
         CertificationComponent,
         AchievementComponent 
    ];

/** Providers Declarations*/
let providers = [];

/** Module Definition */
@NgModule({
    imports,
    declarations,
    providers,
})
export class ProfileModule { }
