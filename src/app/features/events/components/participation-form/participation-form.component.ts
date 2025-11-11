import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrls: ['./participation-form.component.css']
})
export class ParticipationFormComponent {
id!: number;
prix!: number;
  constructor(private R: ActivatedRoute) { }
 ngOnInit(): void {
    this.id = this.R.snapshot.params['id'];
    // this.id = this.R.snapshot.paramMap.get('id'); returns string

    this.prix = this.R.snapshot.params['prix'];
  }


  confirmer(F: NgForm){
    console.log(F.value);
  }
}
