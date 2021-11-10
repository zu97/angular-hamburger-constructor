import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { BurgerComponent } from './burger/burger.component';
import { IngredientsItemComponent } from './ingredients/ingredients-item/ingredients-item.component';
import { TotalPriceComponent } from './total-price/total-price.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    BurgerComponent,
    IngredientsItemComponent,
    TotalPriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
