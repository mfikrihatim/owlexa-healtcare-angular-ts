import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Base URL
  baseurl = `${environment.apiUrl}`
  apiUrlProvider: string = 'http://localhost:8080/api/provider/';
  apiUrlProviderBaru: string = 'http://localhost:8080/api/provider/detail';
  // apiUrlNews: string = 'http://localhost:8080/api/news';
  apiUrlNews: string = this.baseurl + '/news/news';
  // apiUrlArticel: string = 'http://localhost:8080/api/article';
  apiUrlArticel: string = this.baseurl + '/article/article';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  //create provider
  createProvider(data): Observable<any> {
    let API_URL = `${this.apiUrlProviderBaru}/`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.error)
      )
  }
  //upload file
  uploadFileProvider(formProvider) {
    console.log("ayeee kapten", formProvider)
    let API_URL = `${this.apiUrlProviderBaru}/uploadFile`;
    return this.http.post<any>(API_URL, formProvider, {
      reportProgress: true,
      observe: 'events'
    })
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status}\nMessage : ${error.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage)
  }

  //list provider
  listProvider(): Observable<any> {
    return this.http.get(`${this.apiUrlProvider}`);
  }

  //list news
  listNews(): Observable<any> {
    return this.http.get(`${this.apiUrlNews}/`);
  }

  //list articel
  listArticel(): Observable<any> {
    return this.http.get(`${this.apiUrlArticel}/`);
  }

  //get by id articel
  getByIdArticel(id): Observable<any> {
    return this.http.get(`${this.apiUrlArticel}?id=` + id);
  }
  getByIdBerita(id): Observable<any> {
    return this.http.get(`${this.apiUrlArticel}?id=` + id);
  }
}
