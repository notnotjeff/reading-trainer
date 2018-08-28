import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReadingSelectService } from '../reading-select.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reading-app',
  templateUrl: './reading-app.component.html',
  styleUrls: ['./reading-app.component.css']
})
export class ReadingAppComponent implements OnInit, OnDestroy {
  piece: string;
  private subscription: Subscription;

  constructor(private readingService: ReadingSelectService) { }

  ngOnInit() {
    this.subscription = this.readingService.pieceChanged
    .subscribe(
      (pieceImg: string) => {
        this.piece = pieceImg;
      }
    );
    this.readingService.getPiece();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getNewPiece() {
    this.readingService.getPiece();
  }
}
