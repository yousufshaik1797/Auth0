import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  // moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'auth0';
  redirectUri='http://localhost:4200/'
  constructor(public auth: AuthService) {}
}
