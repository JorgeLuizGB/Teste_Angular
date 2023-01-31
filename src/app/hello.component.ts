import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  //template: '<h1>Hello este é o  {{name}}!</h1>',
  templateUrl: './hello.component.html',
  styleUrls: [ './hello.component.css' ]
})
export class HelloComponent  {
  @Input() name: string;
}
