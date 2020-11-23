import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TentangKamiService { 
  // Http Headers
  httpOptions = {
    // headers: new HttpHeaders({
    //   'Content-Type': 'application/json'
    // })
  }

  // Base URL
  baseurl = `${environment.apiUrl}`

  constructor(private http: HttpClient) { }
  // GET
  GetStruktureOrganisasi(): Observable<any> {
    debugger
      var result = this.http.get<any>(this.baseurl + `/Struktur_Organisasi/Struktur_Organisasi`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
    
    return result;
  }

  
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
