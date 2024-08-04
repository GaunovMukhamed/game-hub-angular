import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastMessage } from '../../general.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  messages: ToastMessage[] = []; 

  showMessage(msg: ToastMessage): void {
    this.messages.push(msg);
  }
}
