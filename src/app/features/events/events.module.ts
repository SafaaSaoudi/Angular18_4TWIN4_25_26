import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventdetailsComponent } from './pages/eventdetails/eventdetails.component';
import { ListEventsComponent } from './pages/list-events/list-events.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ParticipationFormComponent } from './components/participation-form/participation-form.component';
import { UpdateeventComponent } from './pages/updateevent/updateevent.component';


@NgModule({
  declarations: [
    EventdetailsComponent,
    ListEventsComponent,
    EventCardComponent,
    SearchBarComponent,
    AddEventComponent,
    ParticipationFormComponent,
    UpdateeventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EventsModule { }
