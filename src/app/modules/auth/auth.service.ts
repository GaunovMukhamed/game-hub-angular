import { Injectable } from '@angular/core';
import { SuccessResponse } from '../../general.interfaces';
import { HttpService } from './http.service';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _httpService: HttpService
  ) { }

  auth(login: string): Observable<SuccessResponse> {
    return this._httpService.auth(login).pipe(
      map((result: SuccessResponse) => result),
      catchError((error: any) => EMPTY)
    )
  }
}
