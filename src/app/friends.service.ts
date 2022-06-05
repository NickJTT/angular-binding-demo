import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IFriend } from './friend';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  private url: string = '/assets/data/friends1.json';

  constructor(private readonly http: HttpClient) {}

  public getFriends(): Observable<IFriend[]> {
    return this.http.get<IFriend[]>(this.url).pipe(
      retry(1),
      catchError(error => { return throwError(error.message || 'Something went wrong!')})
    );
  }
}
