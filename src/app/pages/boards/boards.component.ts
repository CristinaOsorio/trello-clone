import { Component, OnInit } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {
  faBorderAll,
  faBox,
  faChevronDown,
  faChevronUp,
  faClock,
  faCog,
  faHeart,
  faPlus,
  faUsers,
  faWaveSquare,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent implements OnInit {
  faClock = faClock;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faTrello = faTrello;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faCog = faCog;
  faPlus = faPlus;

  menu = [
    {
      label: 'Boards',
      link: '',
      icon: faTrello,
    },
    {
      label: 'Template',
      link: '',
      icon: faBox,
    },
    {
      label: 'Home',
      link: '',
      icon: faWaveSquare,
    },
  ];

  workspaceMenu = [
    {
      label: 'Boards',
      icon: faTrello,
    },
    {
      label: 'Highlights',
      icon: faHeart,
    },
    {
      label: 'Views',
      icon: faBorderAll,
    },
    {
      label: 'Members',
      icon: faUsers,
    },
    {
      label: 'Settings',
      icon: faCog,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  get iconChevron() {
    return {
      faChevronDown: true,
      faChevronUp: true,
    };
  }
}
