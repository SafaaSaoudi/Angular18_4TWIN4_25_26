import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from '../../../../models/event';
import { EventService } from '../../../../data-acess/event.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';

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

eventService= inject(EventService);
route= inject(ActivatedRoute);
R= inject (Router)
id!:number;
mode='add';

ngOnInit(){
   this.id= this.route.snapshot.params['id'];
   this.mode= this.route.snapshot.data['mode'];
  
    if(this.mode==='edit'){
      this.eventService.getEventById(this.id).subscribe(data => {
        this.newevent = data;
        this.eventForm.patchValue(this.newevent);});
    }
  }

  add(){
    if(this.mode==='add'){
      this.eventForm.value.id = undefined;
      let data: any = this.eventForm.value;
      this.eventService.addEvent(data).subscribe(data=>{
        console.log("Event added successfully", data);
        this.R.navigate(['/events']);
      });
    }
    else if(this.mode==='edit'){
      let data: any = this.eventForm.value;
      this.eventService.updateEvent(data).subscribe(data=>{
        console.log("Event updated successfully", data);
        this.R.navigate(['/events']);
      });
    }

  }
}

