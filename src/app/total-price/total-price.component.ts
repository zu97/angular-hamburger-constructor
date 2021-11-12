import {Component, Input} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.css']
})
export class TotalPriceComponent {
  @Input() base: number = 0
  @Input() ingredients!: Ingredient[];

  getTotalPrice() {
    return this.ingredients.reduce((acc, ingredient) => {
      return acc + ingredient.getPrice();
    }, this.base);
  }
}
