import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=kaplan').pipe(catchError(this.handleError))
  }

  private handleError(err: HttpErrorResponse): Observable<any>{
    let errMsg = '';
    if(err.error instanceof Error){
      errMsg = err.error.message;
    }
    else{
      errMsg = err.error.status;
    }
    return throwError(() => errMsg);
  }

}
