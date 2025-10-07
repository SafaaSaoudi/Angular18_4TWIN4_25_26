import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Layout/home/home.component';
import { ListEventsComponent } from './Layout/list-events/list-events.component';
import { NotFoundComponent } from './Layout/not-found/not-found.component';
import { AppComponent } from './app.component';
import { EventdetailsComponent } from './Layout/eventdetails/eventdetails.component';

const routes: Routes = [
  //{ path: "", component: AppComponent },

  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "events", component: ListEventsComponent,
    children:[
      {path:'eventDetails/:param', component:EventdetailsComponent}
    ]
   },
   {path:"user", loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  { path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
