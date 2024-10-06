import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { UtilService } from './service/util.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div>Hello from {{ value  }}!</div>
  `,
  providers: [CurrencyPipe, UtilService],
})
export class App implements OnInit {
  name = 'Angular';
  value: number | string = 10;

  constructor(
    // private _currencyPipe: CurrencyPipe,
    private _utilService: UtilService
  ) {}
  ngOnInit(): void {
    // this.value = this._currencyPipe.transform(this.value)!;
    this.value = this._utilService.setcurrency(this.value)!;
  }
}

bootstrapApplication(App);
