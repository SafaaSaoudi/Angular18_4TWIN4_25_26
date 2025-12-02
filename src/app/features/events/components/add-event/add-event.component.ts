import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from '../../../../models/event';
import { EventService } from '../../../../data-acess/event.service';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css',
  // providers: [EventService] : le cas de nouvelle instance par component
})
export class AddEventComponent {
  newevent!: any;
  eventForm= new FormGroup({
    id:new FormControl(0),
    titre:new FormControl(''),
    description:new FormControl(''),
    date:new FormControl(''),
    lieu:new FormControl(''),
    prix:new FormControl(0),
    organisateurId:new FormControl(0),
    imageUrl:new FormControl(''),
    nbPlaces:new FormControl(0),
    nbLikes:new FormControl(0),
});

searchInput= new FormControl('');

//constructor(private eventService: EventService){}

eventService= inject(EventService);



// addField() {
//   this.Fields.push(new FormControl(''));
// }

// add(){
//   console.log(this.eventForm);
//   this.newevent= this.eventForm.getRawValue();
//   console.log(this.newevent);
//   //service event to add the newevent
//   this.eventService.addEvent(this.newevent).subscribe({
//     next: (data) => {
//      alert("Event added successfully");
//     },
//     error: (error) => {
//       console.error("Error adding event", error);
//     }
//   });

  
}
