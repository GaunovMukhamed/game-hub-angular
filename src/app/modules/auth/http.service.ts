import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuccessResponse } from '../../general.interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _httpClient: HttpClient
  ) { }
  
  private backUrl: string = environment.BACK_URL;

  auth(login: string): Observable<SuccessResponse> {
    console.log(this.backUrl)
    return this._httpClient.post<SuccessResponse>(this.backUrl+'/auth', { login });
  }
}
