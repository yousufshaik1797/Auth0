import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { Profilecomponent } from './Components/profile/profile.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, Profilecomponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule,
  AuthModule.forRoot({
    domain: 'dev--7y2xub8.eu.auth0.com',
    clientId: '98WvUzhwAWIoR6Hr7aK134fGgKSvwRrb'
  }),
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
