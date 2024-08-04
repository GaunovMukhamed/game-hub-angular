import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorResponse } from '../general.interfaces';
import { ToastService } from '../ui/toast/toast.service';
import { inject } from '@angular/core';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const toastService: ToastService = inject(ToastService);

  return next(req).pipe(
    catchError((result: ErrorResponse) => {
      toastService.showMessage({ type: 'error', text: result.message });
      return throwError(() => new Error(result.message));
    })
  );
};
