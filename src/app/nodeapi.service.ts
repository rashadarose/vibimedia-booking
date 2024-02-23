import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { loadStripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class NodeapiService {

  constructor(private http: HttpClient) { }




   public getInfo(): Observable<any> {
    return this.http.get<any>('/all/info').pipe(
      tap((info:any) => {
        return info;
      }),
      catchError(throwError)
    );
  }

  

 public getInfoId(id:any): Observable<any> {
    // return this.getInfo().pipe(
    //   map((infos:any)=> infos.filter((info:any) =>{ return info.id == id})));
    return this.http.get(`http://localhost:4200/all/info/`+38, {responseType: 'text'}).pipe(
      tap((info:any) => {
        return info;
      }),
      catchError(throwError)
    );
  }

  public postName(
    nameData: any
  ): Observable<any> {
    
    return this.http
      .post('all/data', [nameData])
      .pipe(
        tap((data: any) => {
          return data;
        }),
       catchError(throwError)
      );
  }

public postData(
    nameData: any
  ): Observable<any> {
   
    return this.http
      .post('all/datagram', nameData, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
      .pipe(
        tap((data: any) => {
          return data;
        }),
        //catchError(throwError)
      );
  }


  public updateInfo(
    updateNamedata : object
  ): Observable<any> {
    return this.http
      .put<any>('all/update',
        updateNamedata
      )
      .pipe(catchError(throwError));
  }

  // public deleteInfo( data:any
    
  // ): Observable<any> {
  //   return this.http
  //     .post<any>(`all/delete`, data)
  //     .pipe(catchError(throwError));
  // }


    public deleteInfo(id: any): Observable<any> {
      return this.http
        .post('all/delete', { id })
        .pipe(catchError(throwError));
  }

 
}
