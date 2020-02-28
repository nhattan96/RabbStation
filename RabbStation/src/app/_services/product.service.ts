import {
  Injectable
} from '@angular/core';
import {
  Observable,
  of
} from 'rxjs';
import {
  Product
} from '../_models/product';
import {
  products
} from '../_fake-data';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor() {}

  getProductsByCategoryId(id: number): Observable < Product[] > {
    return of(products.filter(product => product.categoryId === id));
  }
}
