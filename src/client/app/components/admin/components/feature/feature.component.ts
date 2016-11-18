/** Other Module Dependencies */
import * as _ from 'lodash';

/** Framework Dependencies */
import {BaseComponent} from '../views/base-component';

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'admin-feature',
    templateUrl: 'feature.component.html',
})

export class FeatureComponent {
    featureList: Array<Feature>;
    feature: Feature;
    isAddEdit: boolean;
    nextId: number;
    constructor() {
        this.isAddEdit = false;
        this.feature = new Feature(0, '');
        this.featureList = [{
            id: 1,
            name: 'TimeSheet',
        },
            {
                id: 2,
                name: 'Corporate',
            },
        ];
        this.nextId = 2;
    }

    onSave() {
        if (this.feature.id === 0) {
            this.feature.id = ++this.nextId;
            this.featureList.unshift(this.feature);
        } else {
            let featureTobeEditIndex = _.findIndex(this.featureList, function (item) {
                return item.id === this.feature.id;
            }.bind(this));
            this.featureList[featureTobeEditIndex] = this.feature;
        }
        this.feature = new Feature(0, '');
        this.isAddEdit = false;
    }
    onCancel() {
        this.feature = new Feature(0, '');
        this.isAddEdit = false;
    }
    onEdit(feature: Feature) {
        this.feature = _.cloneDeep(feature);
        this.isAddEdit = true;
    }
    onDelete(feature: Feature) {
          let featureTobeEditIndex = _.findIndex(this.featureList, function (item) {
                return item.id === feature.id;
            });
            this.featureList.splice(featureTobeEditIndex,1);
    }
}

class Feature {
    constructor(
        public id: number,
        public name: string
    ) { }
}
