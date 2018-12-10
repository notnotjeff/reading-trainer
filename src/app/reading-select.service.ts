import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadingSelectService {
  allowedKeys: any = [];
  grade: number = 1;
  readingExcerpts = [];
  pieceChanged = new Subject<string>();
  currentPiece: string = "";
  gradeKeys = new Subject<String[]>();

  private keysDirectory = {
    1: ["C", "Am"],
    2: ["G"],
    3: ["D"],
    4: ["G", "D", "Em"]
  }

  // Naming scheme: grade_key/piece-number_part-number (gr4 = grade 4, g01 = piece 01 in key of g, p1 = part 1)
  private readingDirectory = [
    { key: "C", img: "gr1_c01.png", grade: 1 },
    { key: "C", img: "gr1_c02.png", grade: 1 },
    { key: "C", img: "gr1_c03.png", grade: 1 },
    { key: "C", img: "gr1_c04.png", grade: 1 },
    { key: "Am", img: "gr1_am01.png", grade: 1 },
    { key: "Am", img: "gr1_am02.png", grade: 1 },
    { key: "Am", img: "gr1_am03.png", grade: 1 },
    { key: "Am", img: "gr1_am04.png", grade: 1 },
    { key: "G", img: "gr4_g01_p1.png", grade: 4 },
    { key: "G", img: "gr4_g01_p2.png", grade: 4 },
    { key: "G", img: "gr4_g01_p3.png", grade: 4 },
    { key: "Em", img: "gr4_em01_p1.png", grade: 4 },
    { key: "Em", img: "gr4_em01_p2.png", grade: 4 },
    { key: "Em", img: "gr4_em02_p1.png", grade: 4 },
    { key: "Em", img: "gr4_em02_p2.png", grade: 4 },
    { key: "D", img: "gr4_d01_p1.png", grade: 4 },
    { key: "D", img: "gr4_d01_p2.png", grade: 4 },
    { key: "D", img: "gr4_d01_p3.png", grade: 4 },
    { key: "D", img: "gr4_d01_p4.png", grade: 4 },
    { key: "D", img: "gr4_d01_p5.png", grade: 4 },
    { key: "F", img: "gr4_f01_p1.png", grade: 4 },
    { key: "F", img: "gr4_f01_p2.png", grade: 4 },
    { key: "F", img: "gr4_f01_p3.png", grade: 4 },
    { key: "F", img: "gr4_f01_p4.png", grade: 4 },
    { key: "A", img: "gr4_a01_p1.png", grade: 4 },
    { key: "A", img: "gr4_a01_p2.png", grade: 4 }
  ]

  constructor() { }

  setKeys(keys: String[]) {
    this.allowedKeys = keys;
    this.getPiece();
  }

  getKeys() {
    return this.keysDirectory[+this.grade].slice();
  }

  setGrade(newGrade: number) {
    if (newGrade !== 0) {
      this.grade = newGrade;
    } else {
      this.grade = 1;
    }
    this.getPiece();
  }

  getPiece() {
    // Filter pieces so only selected ones qualify
    this.readingExcerpts = this.readingDirectory.slice().filter(excerpt => { 
      if (this.allowedKeys.includes(excerpt.key) && excerpt.grade === +this.grade) {
        return true;
      } 
      return false;
    });

    this.shufflePieces();

    if (this.readingExcerpts.length > 0 ) {
      if (this.readingExcerpts.length === 1) {
        this.currentPiece = this.readingExcerpts[0].img;
        this.pieceChanged.next(this.readingExcerpts[0].img);
      } else if (this.currentPiece !== this.readingExcerpts[0].img) {
        this.currentPiece = this.readingExcerpts[0].img;
        this.pieceChanged.next(this.readingExcerpts[0].img);
      } else {
        this.currentPiece = this.readingExcerpts[1].img;
        this.pieceChanged.next(this.readingExcerpts[1].img);
      }
    } else {
      this.pieceChanged.next("");
    }
  }

  shufflePieces() {
    // If there are no pieces to show, don't shuffle
    if (this.readingExcerpts.length < 1) { return false };

    let array = this.readingExcerpts.slice();

    // Shuffle array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    this.readingExcerpts = array;
  }
}
