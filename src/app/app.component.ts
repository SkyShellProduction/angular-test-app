import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
// import {products} from './data/products';
import { Observable, tap } from 'rxjs'
import { ProductService } from './services/products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular Products';
  // products: IProduct[] = [];
  products$: Observable<IProduct[]>
  loading = false;
  constructor(private productsService: ProductService){

  }
  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
    // this.productsService.getAll().subscribe(products => {
    //   this.products = products;
    //   this.loading = false;
    // })
  }

}
