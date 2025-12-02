import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEventsComponent } from './pages/list-events/list-events.component';
import { EventdetailsComponent } from './pages/eventdetails/eventdetails.component';
import { ParticipationFormComponent } from './components/participation-form/participation-form.component';
import { AddEventComponent } from './components/add-event/add-event.component';

const routes: Routes = [
  { path: "", component: ListEventsComponent },
  { path: "details/:param", component: EventdetailsComponent },
  {path:'add', component:AddEventComponent, data:{mode:'add'}},
  {path:'edit/:id', component:AddEventComponent, data:{mode:'edit'}},
  { path: "participer/:id/:prix", component: ParticipationFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
