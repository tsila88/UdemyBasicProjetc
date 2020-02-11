import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe','Simply test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('A test Recipe','Simply test','https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994_1280.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
