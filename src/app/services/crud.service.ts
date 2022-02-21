import { MealAPI, RecipeAPI } from '../models/receita.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { tap, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  getRecipe(): Observable<RecipeAPI>{
    return this.http.get<MealAPI>(`https://www.themealdb.com/api/json/v1/1/search.php?s=`).pipe(
      pluck('meals'),
      tap((v) => console.log(v)),
    ) 
  }

  getSearchRecipe(search: string): Observable<RecipeAPI>{
    return this.http.get<RecipeAPI>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  }
  /*
  .pipe(
    map((recipeItem) => {
      console.log(recipeItem)
      const recipe: any = this.parse(recipeItem);
      this.recipes = recipe;
      return this.recipes; 
    })

    this.crudService.getRecipe().subscribe((data: RecipeAPI) => {
      this.recipes = data.map((recipeItem: MealAPI) => {
        const recipe: Meal = this.parse(recipeItem);
        return recipe;
      })
    }, (err: any) => {
      this.erro = err;
      console.log('Error: ', this.erro);
    })

    */
}
