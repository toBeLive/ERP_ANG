import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    {name: 'WFM 1'},
    {name: 'WFM 2'},
    {name: 'WFM 3'},
    {name: 'WFM 4'},
    {name: 'WFM 5'},
    {name: 'WFM 6'},
    {name: 'WFM 7'},
    {name: 'WFM 8'}
  ]
}
