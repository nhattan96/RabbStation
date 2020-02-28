import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  CategoriesService
} from 'src/app/_services/category.service';
import {
  ProductService
} from 'src/app/_services';
import {
  Product
} from 'src/app/_models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  currentCategoryId: number;
  products: Product[];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoriesService,
    private productService: ProductService
  ) {
    this.route.params.subscribe(params => {
      this.currentCategoryId = +params[`categoryId`];
    });
  }

  ngOnInit() {
    this.getProductByCategoryId(this.currentCategoryId);
  }

  getProductByCategoryId(id: number): void {
    this.productService.getProductsByCategoryId(id).subscribe(res => this.products = res);
  }
}
