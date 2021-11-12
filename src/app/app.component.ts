import { Component } from '@angular/core';
import {Ingredient} from "./shared/ingredient.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingredients = [
    new Ingredient('https://clck.ru/Ymakw', 'Meat', 50),
    new Ingredient('https://clck.ru/Ymakq', 'Cheese', 20),
    new Ingredient('https://clck.ru/YmamC', 'Salad', 5),
    new Ingredient('https://clck.ru/Ymamk', 'Bacon', 30),
  ];
}
