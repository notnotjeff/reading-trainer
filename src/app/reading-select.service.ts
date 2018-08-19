import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadingSelectService {
  allowedKeys = ["G", "D", "A", "F"];
  readingExcerpts = [];

  private readingDirectory = [
    { key: "G", img: "https://i.ytimg.com/vi/IWcp8bCBPcY/maxresdefault.jpg" },
    { key: "D", img: "http://www.musiclearning.com/lessoncentral/reading/rdefquarter.gif" },
    { key: "A", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJKA79akbyHCEX1EeU9_KsrPDYVLLcnRr3OfyvQLh1ciICOEKRQ" },
    { key: "F", img: "https://www.fundamental-changes.com/wp-content/uploads/2018/05/28-Sight-Reading-Part-4-Ex-2.png" }
  ]

  constructor() { }

  setKeys(keys: Array<string>) {
    this.allowedKeys = keys;
  }

  setExcerpts() {
    this.readingExcerpts = this.readingDirectory.slice().filter(excerpt => { this.allowedKeys.includes(excerpt.key) });
  }
}
