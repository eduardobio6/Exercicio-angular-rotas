import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  counter = 0;

  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 100);

  constructor() {}

  ngOnInit() {}

  getTimer() {
    return this.counter;
  }
}
