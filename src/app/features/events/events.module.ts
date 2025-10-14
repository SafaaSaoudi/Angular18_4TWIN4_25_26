import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventdetailsComponent } from './pages/eventdetails/eventdetails.component';
import { ListEventsComponent } from './pages/list-events/list-events.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EventdetailsComponent,
    ListEventsComponent,
    EventCardComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule
  ]
})
export class EventsModule { }
