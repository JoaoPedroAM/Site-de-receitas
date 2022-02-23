import { Meal, MealAPI, RecipeAPI } from '../models/receita.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { pluck, map, } from 'rxjs/operators';

const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  getSearchRecipe(search?: string) {
      return this.http.get<MealAPI>(`${URL}${search || ''}`)
        .pipe(
          pluck('meals'),
          map((data: RecipeAPI) => {
            return data.map((recipeItem: MealAPI) => {
              const recipe: Meal = this.parse(recipeItem);
              return recipe;
            })
          }, (err: any) => { 
            console.log('Error: ', err)

          }
          )
        )
  }

  parse(data: MealAPI): Meal {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const ingredients = this.parseIngredients(data);
    return {
      id: values[keys.indexOf("idMeal")],
      title: values[keys.indexOf("strMeal")],
      drinkAlternate: values[keys.indexOf("strDrinkAlternate")],
      category: values[keys.indexOf("strCategory")],
      area: values[keys.indexOf("strArea")],
      instructions: values[keys.indexOf("strInstructions")],
      thumbnail: values[keys.indexOf("strMealThumb")],
      tags: values[keys.indexOf("strTags")],
      youtube: values[keys.indexOf("strYoutube")],
      ingredients,
      source: values[keys.indexOf("strSource")],
      imageSource: values[keys.indexOf("strImageSource")],
      creativeCommonsConfirmed: values[keys.indexOf("strCreativeCommonsConfirmed")],
      dateModified: values[keys.indexOf("dateModified")],
    };
  }

  parseIngredients(data: MealAPI) {
    const ingredients = [];
    const keys = Object.keys(data);
    const values = Object.values(data);

    for (let i = 0; i < 20; i++) {
      const name = keys.indexOf("strIngredient" + (i + 1));
      const quantity = keys.indexOf("strMeasure" + (i + 1));
      const ingredient = {
        name: values[name],
        quantity: values[quantity],
        unit: "g"
      }
      ingredients.push(ingredient);
    }
    return ingredients;
  }
}
