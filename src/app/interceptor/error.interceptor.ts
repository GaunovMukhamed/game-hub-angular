import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorResponse } from '../general.interfaces';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const messageService: MessageService = inject(MessageService);

  return next(req).pipe(
    catchError((result: ErrorResponse) => {
      //@ts-ignore
      messageService.add({ severity: 'error', detail: result.message['message']??result.message });
      return throwError(() => new Error(result.message));
    })
  );
};
