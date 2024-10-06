import { CurrencyPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private _currencyPipe: CurrencyPipe) {}

  setcurrency(value: any) {
    return this._currencyPipe.transform(value);
  }
}
