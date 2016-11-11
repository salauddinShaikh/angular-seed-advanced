/** Angular Dependencies */

/** Framework Dependencies */
import {BaseComponent} from '../views/base-component';

/** Module Level Dependencies */

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'achievement',
    templateUrl: 'achievement.component.html',
    styleUrls: ['achievement.component.css']
})
export class AchievementComponent {
    achievements: any[];
    showDiv: boolean;

    constructor() {
        this.achievements = [];
        this.showDiv = true;
    }

    onAddClick() {
        this.showDiv = false;
    }
    submit() {
        this.achievements = [{
            id: 1,
            achievement: 'achievement1',
            status: 'pending for approval',
            comment: ''
        }];
        this.showDiv = true;
    }
    cancel() {
        this.showDiv = true;
    }
}
