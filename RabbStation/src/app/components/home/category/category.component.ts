import {
  Component,
  OnInit
} from '@angular/core';
import {
  CategoriesService
} from 'src/app/_services/category.service';
import { Category } from 'src/app/_models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: Category[];

  constructor(
    private categoryService: CategoriesService
  ) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe( res => this.categories = res);
  }
}
