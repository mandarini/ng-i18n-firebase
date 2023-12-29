import { Route } from '@angular/router';
import { guestGuard } from './guest.guard';
import { MainComponent } from './contents/main/main.component';
import { OneComponent } from './contents/one/one.component';
import { TwoComponent } from './contents/two/two.component';
import { ThreeComponent } from './contents/three/three.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'el',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'en',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [guestGuard],
    children: [
      {
        path: 'one',
        component: OneComponent,
      },
      {
        path: 'two',
        component: TwoComponent,
      },
      {
        path: 'three',
        component: ThreeComponent,
      },
    ],
  },
];
