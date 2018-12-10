import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ReadingSelectService } from '../reading-select.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reading-preferences',
  templateUrl: './reading-preferences.component.html',
  styleUrls: ['./reading-preferences.component.css']
})
export class ReadingPreferencesComponent implements OnInit {
  currentGrade: number = 1;
  keys: any = [];
  defaultChecked: boolean = true;

  constructor(private readingService: ReadingSelectService) { }

  ngOnInit() {
    this.readingService.setGrade(this.currentGrade);
    this.keys = this.readingService.getKeys();
    this.readingService.setKeys(this.keys);
  }

  onSelectGrade(grade: any) {
    this.readingService.setGrade(+grade.target.value);
    this.keys = this.readingService.getKeys();
    this.readingService.setKeys(this.keys);
  }

  onSelectKeys(event: any, form: NgForm) {
    let newKeys = []
    let formKeys = form.value;

    for (let key in formKeys) {
      if (formKeys[key] == true) {
        newKeys.push(key)
      }
    }

    this.readingService.setKeys(newKeys);
    this.keys = this.readingService.getKeys();
  }
}
