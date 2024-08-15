import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {
  faAlignLeft,
  faBars,
  faBrush,
  faCheckSquare,
  faClock,
  faEye,
  faListUl,
  faPaperclip,
  faPenSquare,
  faPlus,
  faTag,
  faTasks,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { DetailsTask } from './../../models/details-task.interface';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent implements OnInit {
  faClose = faTimes;
  faTask = faTasks;
  faEye = faEye;
  faPaperclip = faPaperclip;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;
  faBrush = faBrush;
  faPenSquare = faPenSquare;
  faPlus = faPlus;
  faAlignLeft = faAlignLeft;
  faListUl = faListUl;

  detailsTask!: DetailsTask;

  constructor(
    private dialogRef: DialogRef<DetailsTask>,
    @Inject(DIALOG_DATA) data: DetailsTask
  ) {
    this.detailsTask = { ...data };
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
}
