import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEventsComponent } from './pages/list-events/list-events.component';
import { EventdetailsComponent } from './pages/eventdetails/eventdetails.component';
import { ParticipationFormComponent } from './components/participation-form/participation-form.component';

const routes: Routes = [
  { path: "", component: ListEventsComponent },
  { path: "details/:param", component: EventdetailsComponent },
  { path: "participer/:id/:prix", component: ParticipationFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
