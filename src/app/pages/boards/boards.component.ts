import { Component, OnInit } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {
  faBox,
  faClock,
  faWaveSquare,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent implements OnInit {
  faClock = faClock;
  menu = [
    {
      title: 'Boards',
      link: '',
      icon: faTrello,
    },
    {
      title: 'Template',
      link: '',
      icon: faBox,
    },
    {
      title: 'Home',
      link: '',
      icon: faWaveSquare,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
