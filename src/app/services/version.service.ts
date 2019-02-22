import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  private _version$ = new BehaviorSubject(0);
  // Pour faire un getter et setter
  public version$ = this._version$.asObservable().pipe(
    filter((x) => x < 20)
  );
  constructor() { }

  add() {
    this._version$.next(this._version$.value + 1);
  }

  minus() {
    this._version$.next(this._version$.value - 1);
  }
}


