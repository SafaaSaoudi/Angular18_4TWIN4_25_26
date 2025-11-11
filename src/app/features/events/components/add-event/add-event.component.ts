import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from '../../../../models/event';
import { EventService } from '../../../../data-acess/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  newevent!: any;
  eventForm= new FormGroup({
    Titre: new FormControl('', Validators.required), 
    Description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    Place: new FormGroup({
      gov: new FormControl(''),
      prov: new FormControl(''),
      postal_code: new FormControl(''),
    }),
    Fields: new FormArray([
      new FormControl('')
    ]),
});

searchInput= new FormControl('');

constructor(private eventService: EventService){}


get Description(){
  return this.eventForm.get('Description');
}
get Fields(): FormArray {
  return this.eventForm.get('Fields') as FormArray;
}

addField() {
  this.Fields.push(new FormControl(''));
}

add(){
  console.log(this.eventForm);
  this.newevent= this.eventForm.getRawValue();
  console.log(this.newevent);
  //service event to add the newevent
  this.eventService.liste.push(this.newevent);

  
}
}
