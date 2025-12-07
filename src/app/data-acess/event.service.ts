import { inject, Injectable } from '@angular/core';
import { Event } from '../models/event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  
http = inject(HttpClient);
URL= "http://localhost:3000/listEvents";

getAllEvents(){
  return this.http.get<Event[]>(this.URL);
}

getEventById(id: number){
  return this.http.get<Event>(`${this.URL}/${id}`);
}

addEvent(e:Event)
{ return this.http.post<Event>(this.URL, e);}

updateEvent(e:Event)
{ return this.http.put<Event>(`${this.URL}/${e.id}`, e);}

deleteEvent(id:number)
{ return this.http.delete(`${this.URL}/${id}`);}

}
