import {
  Injectable
} from '@angular/core';
import {
  Category
} from 'src/app/_models';
import {
  Observable,
  of
} from 'rxjs';
import {
  Categories
} from '../_fake-data';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
  currentCatalory: Category;

  constructor() {
  }

  getCategories(): Observable < Category[] > {
    return of(Categories);
  }

  getCategoryById(id: number): Observable < Category > {
      return of(Categories.find(category => category.id === id));
  }
}
