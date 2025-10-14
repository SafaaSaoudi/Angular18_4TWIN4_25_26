import { Component } from '@angular/core';
import { Event } from '../../../../models/event';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrl: './list-events.component.css'
})
export class ListEventsComponent {

searchTerm!:string;

  Eventlist:Event[]=[
    {id:1,titre:"Concert de Rock",description:"Un concert de rock avec des groupes locaux.",date:new Date("2026-11-15"),lieu:"Salle des Fêtes",prix:30,organisateurId:1,imageUrl:"assets/images/concert.jpg",nbPlaces:100,nbLikes:45},
    {id:2,titre:"Exposition d'Art",description:"Une exposition d'art contemporain.",date:new Date("2024-12-01"),lieu:"Galerie d'Art",prix:15,organisateurId:2,imageUrl:"assets/images/expo.webp",nbPlaces:50,nbLikes:30},
    {id:3,titre:"Atelier de Cuisine",description:"Apprenez à cuisiner des plats italiens.",date:new Date("2025-11-20"),lieu:"Centre Culinaire",prix:50,organisateurId:3,imageUrl:"assets/images/cuisine.webp",nbPlaces:20,nbLikes:10}
  ];

constructor(private R: Router){}

  increment_likes(event:Event){
    event.nbLikes+=1;
  }
  campare(event:Event) {
    return event.date < (new Date());
  }

  showDetails(id:number){
      this.R.navigate(["events/details",id]);
  }
}
