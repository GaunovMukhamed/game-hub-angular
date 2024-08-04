import { Injectable } from '@angular/core';
import { SuccessResponse } from '../../general.interfaces';
import { AuthHttpService } from './auth-http.service';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _httpService: AuthHttpService
  ) { }

  auth(login: string): Observable<SuccessResponse> {
    return this._httpService.auth(login).pipe(
      map((result: SuccessResponse) => result),
      catchError((error: any) => EMPTY)
    )
  }
}
