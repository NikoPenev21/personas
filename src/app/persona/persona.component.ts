import { Component, OnInit, Input } from '@angular/core';
import { IPersona } from '../main-container/main-container.component';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  @Input()
  persona: IPersona = {
      personaRole: "Business user",
      avatar: "",
      numberOfVisits: 134,
      percentage: "0.15%",
      percentageAllTime: "1,356  (24%)"
      };

  constructor() { }

  ngOnInit(): void {
  }

}
