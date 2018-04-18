import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text"(input)="onUserInput($event)">
    <p>Hello {{name}}</p>
    <p>I'am Rahul</p>
  `
 })

export class UserComponent {
  name = 'Rahul';
  onUserInput(event) {
    this.name = event.target.value;
  }
}
