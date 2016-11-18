import { Route } from '@angular/router';
import { FeatureComponent } from './components/feature/feature.component';

export const AdminRoutes: Route[] = [
  {
    path: 'admin/feature',
    component: FeatureComponent,
    data: {
      permissions: ['FEATURE.READ']
    }
  },
];
