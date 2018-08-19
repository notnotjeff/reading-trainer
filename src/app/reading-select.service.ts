import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadingSelectService {
  allowedKeys: String[] = [];
  grade: Number = 4;
  readingExcerpts = [];

  private keysDirectory = {
    1: ["C"],
    2: ["G"],
    3: ["D"],
    4: ["G", "D", "A", "F"],
  }

  private readingDirectory = [
    { key: "G", img: "https://i.ytimg.com/vi/IWcp8bCBPcY/maxresdefault.jpg", grade: 4 },
    { key: "D", img: "http://www.musiclearning.com/lessoncentral/reading/rdefquarter.gif", grade: 4 },
    { key: "A", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJKA79akbyHCEX1EeU9_KsrPDYVLLcnRr3OfyvQLh1ciICOEKRQ", grade: 4 },
    { key: "F", img: "https://www.fundamental-changes.com/wp-content/uploads/2018/05/28-Sight-Reading-Part-4-Ex-2.png", grade: 4 }
  ]

  constructor() { }

  setKeys(keys: String[]) {
    this.allowedKeys = keys;
  }

  setGrade(newGrade: Number) {
    this.grade = newGrade;
  }

  setExcerpts() {
    this.readingExcerpts = this.readingDirectory.slice().filter(excerpt => { this.allowedKeys.includes(excerpt.key) && excerpt.grade === this.grade });
  }
}
