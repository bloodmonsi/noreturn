import { Route, RouterModule } from '@angular/router';
import { ChargenComponent } from './chargen.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { AttributeComponent } from './containers/attribute/attribute.component';
import { AbilityComponent } from './containers/ability/ability.component';

const routes: Route[] = [
  {
    path: '',
    component: ChargenComponent,
    children: [
      {
        path: '',
        component: OverviewComponent
      },
      {
        path: 'attribute',
        component: AttributeComponent
      },
      {
        path: 'ability',
        component: AbilityComponent
      }
    ]
  }
];

export const ChargenRouting = RouterModule.forChild(routes);
