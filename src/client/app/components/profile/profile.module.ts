/** Angular Dependencies */
import { NgModule } from '@angular/core';

/** Other Module Dependencies */
import {CommonModule, TranslateModule} from '../../shared/index';

/** Module level Dependencies */
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

/** Module Import Declarations */
let imports = [CommonModule, TranslateModule];

/** Component/Directive Declarations */
let declarations = [
         MyProfileComponent, 
         PersonalInfoComponent 
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
