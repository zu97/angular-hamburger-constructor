import {Component, Input} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent {
  @Input() ingredients!: Ingredient[];

  getIngredients() {
    return this.ingredients.reduce((acc: string[], ingredient) => {
      for (let i = 0; i < ingredient.count; i++) {
        acc.push(ingredient.name);
      }

      return acc;
    }, []).reverse();
  }
}
