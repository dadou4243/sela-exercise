import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private API_URL = 'https://api.icndb.com';

  constructor(private http: HttpClient) { }

  public getJokes(limit, categories): Observable<any[]> {
    return this.http.get<any>(`${this.API_URL}/jokes/random/${limit}?escape=javascript&limitTo=${categories}`)
    .pipe(
      map(result => result.value)
    );
  }
}