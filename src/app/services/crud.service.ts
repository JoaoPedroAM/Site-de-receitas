import { RecipeAPI } from '../models/receita.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  getRecipe(): Observable<RecipeAPI>{
    return this.http.get<RecipeAPI>(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);
  }
}
