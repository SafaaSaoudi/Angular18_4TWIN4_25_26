import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HomeComponent } from './Layout/home/home.component';
import { NotFoundComponent } from './Layout/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { EventsModule } from './features/events/events.module';
import { TicketsModule } from './features/tickets/tickets.module';
import { FeedbackModule } from './features/feedback/feedback.module';
import { UsersModule } from './features/users/users.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { AuthModule } from './features/auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    EventsModule,
    TicketsModule,
    FeedbackModule,
    UsersModule,
    AuthModule
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
