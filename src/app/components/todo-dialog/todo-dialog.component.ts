import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
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

  constructor(private dialogRef: DialogRef) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
}
