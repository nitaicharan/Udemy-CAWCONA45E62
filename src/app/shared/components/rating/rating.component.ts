import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  rates: number[] = [1, 2, 3, 4, 5]
  rate: number = 0
  previusRate: number
  result: boolean

  @Output() rated = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  setRate(rate: number) {
    this.rate = rate
    this.previusRate = undefined
    this.rated.emit(this.rate)
  }
  setTemporaryRate(rate: number) {
    if (this.previusRate === undefined) this.previusRate = this.rate
    this.rate = rate
  }
  clearTemporaryRate() {
    if (this.previusRate !== undefined) {
      this.rate = this.previusRate
      this.previusRate = undefined
    }
  }
}
