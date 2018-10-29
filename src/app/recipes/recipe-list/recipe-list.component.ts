import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('A Test Recipe','This is simple test','https://www.cookingclassy.com/wp-content/uploads/2017/01/quinoa-vegetable-stew-7.jpg'),
    new Recipe('A Test Recipe','This is simple test','https://www.cookingclassy.com/wp-content/uploads/2017/01/quinoa-vegetable-stew-7.jpg')        
  ];
  constructor() { }

  ngOnInit() {
  }

}
