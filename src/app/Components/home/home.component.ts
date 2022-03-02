import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    // moduleId:module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  title = 'auth0';
  constructor(public auth: AuthService) {}

}
