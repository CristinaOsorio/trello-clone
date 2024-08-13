import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  Component,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Board, Task } from './../../models/list.interface';
import { FormControl, Validators } from '@angular/forms';
import {
  faAngleDoubleUp,
  faAngleDown,
  faBolt,
  faChartBar,
  faEllipsisH,
  faFilter,
  faLink,
  faLock,
  faPlus,
  faRocket,
  faShare,
  faStar,
  faTimes,
  faUnlock,
} from '@fortawesome/free-solid-svg-icons';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  faEllipses = faEllipsisH;
  faArrow = faLink;
  faClose = faTimes;
  faPlus = faPlus;
  faChar = faChartBar;
  faArrowLeft = faAngleDown;
  faStar = faStar;
  faLock = faLock;
  faAngleUp = faAngleDoubleUp;
  faShared = faShare;
  faFilter = faFilter;
  faBolt = faBolt;
  faRocket = faRocket;

  isOpen = false;

  newColumn = new FormControl('', [Validators.required]);
  overlayRefs: OverlayRef[] = [];

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

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.overlayRefs.forEach((ref) => ref?.dispose());
  }

  get columnsIds() {
    return this.columns.map((column) => column.id);
  }

  dropTask(event: CdkDragDrop<Task[]>) {
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

  dropBoard(event: CdkDragDrop<Board[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
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
  openOverlay(
    index: number,
    event: MouseEvent,
    templateRef: TemplateRef<any>
  ): void {
    this.closeOverlay(index);

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(event.target as HTMLElement)
      .withPositions([
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
        },
      ]);

    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
    });

    overlayRef.backdropClick().subscribe(() => this.closeOverlay(index));

    const portal = new TemplatePortal(templateRef, this.viewContainerRef, {
      item: this.columns[index],
      close: () => this.closeOverlay(index),
    });

    overlayRef.attach(portal);
    this.overlayRefs[index] = overlayRef;
  }

  closeOverlay(index: number): void {
    if (this.overlayRefs[index]) {
      this.overlayRefs[index].dispose();
    }
  }
}
