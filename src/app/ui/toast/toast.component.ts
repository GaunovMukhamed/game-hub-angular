import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';
import { ToastMessage } from '../../general.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnInit {

  constructor(
    private _toastService: ToastService
  ) {}

  messages: ToastMessage[] | undefined;

  ngOnInit(): void {
    this.messages = this._toastService.messages;
  }
}
