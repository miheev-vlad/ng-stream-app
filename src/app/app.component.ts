import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetStreamService } from './services/getStream.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  streamNumber$: Observable<number>;
  constructor(public getStreamService: GetStreamService) {}

  ngOnInit(): void {
    this.streamNumber$ = this.getStreamService.getStream();
  }

  public onUpdate() {
    this.getStreamService.btnClicked$.next();
  }
}
