import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LayananService {
  // Http Headers
  httpOptions = {
    // headers: new HttpHeaders({
    //   'Content-Type': 'application/json'
    // })
  }

  // Base URL
  baseurl = `${environment.apiUrl}`

  constructor(private http: HttpClient) { }
  GET
  GetThirdParty(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/third_party/third_party`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetSemiManagedCare(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/semi_managed_care/semi_managed_care`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetManagedCare(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/managed_care/managed_care`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetOptimalisasiBPJS(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/optimalisasi_bpjs/optimalisasi_bpjs`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  // GetLintasarta(): Observable<any> {
  //   debugger
  //   var result = this.http.get<any>(this.baseurl + `/Lintasarta/Lintasarta`)
  //     .pipe(
  //       retry(1),
  //       catchError(this.errorHandl)
  //     )

  //   return result;
  // }

  // GetBisnisUnit(): Observable<any> {
  //   debugger
  //   var result = this.http.get<any>(this.baseurl + `/Business_Unit/Business_Unit`)
  //     .pipe(
  //       retry(1),
  //       catchError(this.errorHandl)
  //     )

  //   return result;
  // }

  // GET BY ID
  // GetArticle(id): Observable<Article> {
  //   return this.http.get<any>(this.baseurl + 'article/id?id=' + id)
  //   .pipe(
  //     retry(1),
  //     catchError(this.errorHandl)
  //   )
  // }


  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
