import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Board, Task } from './../../models/list.interface';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: rgba(156, 163, 175, var(--tw-bg-opacity));
        border-radius: 4px;
      }

      ::-webkit-scrollbar-track {
        background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
        border-radius: 4px;
      }

      /* Agrega un efecto hover a la barra de desplazamiento */
      ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(107, 114, 128, var(--tw-bg-opacity));
      }
    `,
  ],
})
export class BoardComponent implements OnInit {
  newColumn = new FormControl('', [Validators.required]);

  columns: Board[] = [
    {
      id: 'toDo',
      title: 'To Do',
      tasks: [
        { title: 'Task 1', description: 'Lorem ipsum dolor sit amet' },
        { title: 'Task 2', description: 'Consectetur adipiscing elit' },
        { title: 'Task 3', description: 'Ut enim ad minim veniam' },
        {
          title: 'Task 4',
          description:
            'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        },
      ],
    },
    {
      id: 'doing',
      title: 'Doing',
      tasks: [
        {
          title: 'Task 5',
          description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        },
        {
          title: 'Task 6',
          description: 'Excepteur sint occaecat cupidatat non proident',
        },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      tasks: [
        {
          title: 'Task 7',
          description:
            'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  get columnsIds() {
    return this.columns.map((column) => column.id);
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn() {
    if (this.newColumn.valid) {
      this.columns.push({
        id: this.generateRandomId(),
        title: `${this.newColumn.value}`,
        tasks: [],
      });
      this.newColumn.reset();
    }
  }

  generateRandomId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}
