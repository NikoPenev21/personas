import { Component, OnInit } from '@angular/core';
import {ChoiceItem, ChoiceSettingsBase} from "../../../node_modules/@progress/sitefinity-component-framework";


export const selectChoices: Array<ChoiceItem> = [
  {Value: "0", Name: "- Select -", Title: "Select choice"},
  {Value: "1", Name: "First choice", Title: "First choice"},
  {Value: "2", Name: "Second choice", Title: "Hover - not checked" },
  {Value: "3", Name: "Third choice", Title: "Third choice"},
  {Value: "4", Name: "Fourth choice", Title: "Fourth choice"}
];

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {

  selectChoices = selectChoices;
  selectSettings: ChoiceSettingsBase = { wrapperCssClass: "-small"};

  open() {
    if(this.selectClosed == 'select-open') {
      this.selectClosed = 'select-default';
    } else {
      this.selectClosed = 'select-open';
    }
  }

  select(e: any) {
    var selectItem = <HTMLSpanElement>document.getElementById('value');
    selectItem.textContent = e.target.innerText;
  }

  selectClosed = 'select-default';

  constructor() { }

  ngOnInit(): void {
  }

}
