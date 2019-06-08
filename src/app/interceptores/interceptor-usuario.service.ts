import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorUsuarioService implements HttpInterceptor{

  constructor() { }

  intercept(req, next){
    let token = null;
    if(localStorage.getItem('token') != null){
      token=localStorage.getItem('token');
    }
    let authReq=req.clone({
      setHeaders: {
        Authorization: 'Bearer '+ token
      }
    })
    return next.handle(authReq)
    .pipe(
      catchError(this.manejarError)
    );
  }
  manejarError(error: HttpErrorResponse){
    alert('Ocurrio un error con el servidor');
    return throwError(error);
  }
}
