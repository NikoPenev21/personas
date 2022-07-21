import { Component, OnInit } from '@angular/core';
import {ChoiceItem, ChoiceSettingsBase} from "../../../node_modules/@progress/sitefinity-component-framework";

export interface IPersona {
  personaRole: string;
  avatar: string;
  numberOfVisits: number;
  percentage: string;
  percentageAllTime: string;
}

const selectChoices: Array<ChoiceItem> = [
  {Value: "0", Name: "- Select -", Title: "Select choice"},
  {Value: "1", Name: "First choice", Title: "First choice"},
  {Value: "2", Name: "Second choice", Title: "Hover - not checked" },
  {Value: "3", Name: "Third choice", Title: "Third choice"},
  {Value: "4", Name: "Fourth choice", Title: "Fourth choice"}
];

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  selectChoices = selectChoices;
  selectSettings: ChoiceSettingsBase = { wrapperCssClass: "-small"};

  personas: IPersona[] = [
    {
    personaRole: "Business user",
    avatar: "https://ux.sitefinity.com/DEC-iris_design/images/personas/u96.png",
    numberOfVisits: 134,
    percentage: "0.15%",
    percentageAllTime: "1,356  (24%)"
  },
  {
    personaRole: "IT manager",
    avatar: "https://ux.sitefinity.com/DEC-iris_design/images/personas/u106.png",
    numberOfVisits: 81,
    percentage: "0.22%",
    percentageAllTime: "2,013  (36%)"
  },
  {
    personaRole: "Gamer",
    avatar: "https://ux.sitefinity.com/DEC-iris_design/images/personas/u118.png",
    numberOfVisits: 10,
    percentage: "0.17%",
    percentageAllTime: "1,214  (22%)"
  },
  {
    personaRole: "Designer",
    avatar: "https://ux.sitefinity.com/DEC-iris_design/images/personas/u593.png",
    numberOfVisits: 3,
    percentage: "0.02%",
    percentageAllTime: "654 (12%)"
  },
  {
    personaRole: "Developer",
    avatar: "",
    numberOfVisits: 4,
    percentage: "12%",
    percentageAllTime: "345  (6%)"
  }
];

  selectClosed = 'select-default';
  id = 2;

  printMessage(e: any) {
    let text = e.target.innerText;
    console.log(text + " clicked")
  }

  open() {
    if(this.selectClosed == 'select-open') {
      this.selectClosed = 'select-default';
    } else {
      this.selectClosed = 'select-open';
    }
  }

  addClass(id: any) {
    this.id = id;
}

  select(e: any) {
    var selectItem = <HTMLSpanElement>document.getElementById('value');
    selectItem.textContent = e.target.innerText;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
