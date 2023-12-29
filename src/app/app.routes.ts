import { Route } from '@angular/router';
import { guestGuard } from './guest.guard';
import { MainComponent } from './contents/main/main.component';
import { AccommodationComponent } from './contents/accommodation/accommodation.component';
import { GettingThereComponent } from './contents/getting-there/getting-there.component';
import { ScheduleComponent } from './contents/schedule/schedule.component';
import { VenuesComponent } from './contents/venues/venues.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'wedding',
    pathMatch: 'full',
  },
  {
    path: 'el',
    redirectTo: 'wedding',
    pathMatch: 'full',
  },
  {
    path: 'en',
    redirectTo: 'wedding',
    pathMatch: 'full',
  },
  {
    path: 'wedding',
    component: MainComponent,
    canActivate: [guestGuard],
    children: [
      {
        path: 'accommodation',
        component: AccommodationComponent,
      },
      {
        path: 'getting-to-koufonisi',
        component: GettingThereComponent,
      },
      {
        path: 'venues',
        component: VenuesComponent,
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
      },
    ],
  },
];
