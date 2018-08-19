import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reading-preferences',
  templateUrl: './reading-preferences.component.html',
  styleUrls: ['./reading-preferences.component.css']
})
export class ReadingPreferencesComponent implements OnInit {
  currentGrade: Number = 1;
  grades: Array<any> = [["Grade 1", 1], ["Grade 2", 2], ["Grade 3", 3], ["Grade 4", 4]];
  keys: String[] = ["G", "D", "A", "F"];

  constructor() { }

  ngOnInit() {
  }

  onSetPreferences() {
    console.log('Setting preferences')
  }

}
