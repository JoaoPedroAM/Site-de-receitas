import { Recipe } from './../models/recipe.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  pegarReceita(): Observable<Recipe>{
    return this.http.get<Recipe>(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);
  }

}