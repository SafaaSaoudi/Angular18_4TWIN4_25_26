import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrl: './eventdetails.component.css'
})
export class EventdetailsComponent {

  constructor( private actR: ActivatedRoute) { }

  id!:number;
 ngOnInit(): void {
   
  // this.id= Number( this.actR.snapshot.paramMap.get('param'));
  this.actR.paramMap.subscribe( 
    params=>this.id= Number(params.get('param')));

  }

 

}
