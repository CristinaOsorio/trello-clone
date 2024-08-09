import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
})
export class BtnComponent implements OnInit {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color = 'primary';

  constructor() {}

  ngOnInit(): void {}

  get colors() {
    return {
      'bg-success-700': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-sky-700': this.color === 'sky',
      'hover:bg-sky-800': this.color === 'sky',
      'focus:ring-sky-300': this.color === 'sky',
    };
  }
}
