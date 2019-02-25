import { Observable } from 'rxjs';
import { CategoryService } from './../../../../shared/services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  $allCategories: Observable<Object>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.$allCategories = this.categoryService.getAllCategories();
    this.$allCategories.subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
