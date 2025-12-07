import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Layout/home/home.component';
import { NotFoundComponent } from './Layout/not-found/not-found.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  //{ path: "", component: AppComponent },

  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },

   {path:'events', loadChildren:()=>import('./features/events/events.module').then(m=>m.EventsModule), canActivate:[authGuard]},
   {path:'tickets', loadChildren:()=>import('./features/tickets/tickets.module').then(m=>m.TicketsModule)},
   {path:"users", loadChildren:()=>import('./features/users/users.module').then(m=>m.UsersModule)},
   {path:"feedback", loadChildren:()=>import('./features/feedback/feedback.module').then(m=>m.FeedbackModule)},
   {path:"auth", loadChildren:()=>import('./features/auth/auth.module').then(m=>m.AuthModule)},
  { path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
