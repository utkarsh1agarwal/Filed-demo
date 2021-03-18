import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private httpOptions;
  baseUrl = ''


  constructor(private http: HttpClient) { }

  // Http Headers 
  getHttpOptions() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE ',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      })
    };
  }

  // Post request for payment
  paymentRequest(payload) {
    this.getHttpOptions();
    return this.http.post(this.baseUrl + '', payload, this.httpOptions)
      .pipe(
        res => res,
        catchError(error => {
          return throwError('error');
        })
      );
  }
}
