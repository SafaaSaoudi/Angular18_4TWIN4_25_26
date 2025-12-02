import { inject, Injectable } from '@angular/core';
import { Event } from '../models/event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // liste:Event[]=[
  //     {id:1,titre:"Concert de Rock",description:"Un concert de rock avec des groupes locaux.",date:new Date("2026-11-15"),lieu:"Salle des Fêtes",prix:30,organisateurId:1,imageUrl:"assets/images/concert.jpg",nbPlaces:100,nbLikes:45},
  //     {id:2,titre:"Exposition d'Art",description:"Une exposition d'art contemporain.",date:new Date("2024-12-01"),lieu:"Galerie d'Art",prix:15,organisateurId:2,imageUrl:"assets/images/expo.webp",nbPlaces:50,nbLikes:30},
  //     {id:3,titre:"Atelier de Cuisine",description:"Apprenez à cuisiner des plats italiens.",date:new Date("2025-11-20"),lieu:"Centre Culinaire",prix:50,organisateurId:3,imageUrl:"assets/images/cuisine.webp",nbPlaces:20,nbLikes:10}
  //   ];
  
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
