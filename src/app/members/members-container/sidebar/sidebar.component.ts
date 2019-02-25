import { Router } from '@angular/router';
import { CategoryService } from './../../../shared/services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  $allCategories;
  $merchants;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.$allCategories = this.categoryService.getAllCategories();
    this.$allCategories.subscribe(res => {
      console.log('all categories are', res);
    }, err => {
      console.log(err);
    });
  }

  getCategory(id) {
    console.log(id);
    this.$merchants = this.categoryService.getMerchantByCategoryId(id);
    this.$merchants.subscribe(res => {
      console.log('merchants for this category are', res);
    }, err => {
      console.log(err);
    });

    this.router.navigate([], {
      queryParams: {
        id: id
      }
    });
  }

}
