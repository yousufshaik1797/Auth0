import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    // moduleId:module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class Profilecomponent {
  title = 'auth0';
  constructor(public auth: AuthService) {}
}
