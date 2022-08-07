import { Component, HostBinding, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @HostBinding('class') classes = 'app-root';
}
