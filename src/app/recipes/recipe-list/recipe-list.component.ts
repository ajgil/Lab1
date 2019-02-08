import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class recipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Receta Dummy','Esta receta es para dummies',
     'https://upload.wikimedia.org/wikipedia/commons/2/27/Brocheta-frutas-recetas-faciles-ninos.jpg'),
     new Recipe('Receta Dummy','Receta para dummies 2',
     'https://upload.wikimedia.org/wikipedia/commons/2/27/Brocheta-frutas-recetas-faciles-ninos.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
