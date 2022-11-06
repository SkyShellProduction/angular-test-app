import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs'
import { IProduct } from '../models/product';
import { ErrorService } from './error.service';
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
        ) 
        {

    }
    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
            params: new HttpParams().append('limit', 5)
        }).pipe(
            catchError(this.errorHandler.bind(this))
        )
    }
    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message);
        return throwError(() => error.message)

    }
}
