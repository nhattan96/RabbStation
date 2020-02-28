import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Category
} from 'src/app/_models';
import {
  Categories
} from '../../../../../_fake-data';
import {
  Observable,
  of
} from 'rxjs';
import {
  CategoriesService
} from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  currentCatagory: Category;
  currentCategoryId: number;
  products: Product[];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoriesService
  ) {
    this.route.params.subscribe(params => {
      this.currentCategoryId = +params[`categoryId`];
    });
  }

  ngOnInit() {
    this.getCategoryById(this.currentCategoryId);
  }

  getCategoryById(id: number): void {
    this.categoryService.getCategoryById(id).subscribe( res => this.currentCatagory = res);
  }
}
