import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IGetStream } from '../models/getStream.interface';
import { delay, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetStreamService {
  btnClicked$ = new Subject<void>();
  constructor(private http: HttpClient) {}

  getStream(): Observable<number> {
    const apiUrl = 'https://api.rand.by/v1/integer?count=1';
    return this.btnClicked$.pipe(
      switchMap(() => {
        return this.http.get<IGetStream>(apiUrl).pipe(
          delay(100),
          map((res: IGetStream) => res.items[0])
        );
      })
    );
  }
}
