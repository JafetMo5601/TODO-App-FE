import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

import { slideInAnimation } from './animations/animations';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]

})
export class AppComponent {
  navTitle = 'Jafet\'s TODO App';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}