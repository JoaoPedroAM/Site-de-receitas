import { ReceitasComponent } from './../receitas/receitas.component';
import { MealAPI, Meal } from './../models/receita.model';
import { CrudService } from '../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { RecipeAPI } from '../models/receita.model';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  recipes: Meal[] = [];
  erro: any;
  form = this.formBuilder.group({
    search: ''
  })
  
  constructor(private crudService: CrudService, private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getData();
  }

  onSubmit(){
    this.getSearchData(this.form.controls['search'].value);
    this.form.reset();
  }

  getData() {
    this.crudService.getRecipe().subscribe((data: RecipeAPI) => {
      this.recipes = data.meals.map((recipeItem: MealAPI) => {
        const recipe: Meal = this.parse(recipeItem);
        return recipe;
      })
    }, (err: any) => {
      this.erro = err;
      console.log('Error: ', this.erro);
    })
  }

  getSearchData(search: string) {
    this.crudService.getSearchRecipe(search).subscribe((data: RecipeAPI) => {
      this.recipes = data.meals.map((recipeItem: MealAPI) => {
        const recipe: Meal = this.parse(recipeItem);
        return recipe;
      })
    }, (err: any) => {
      this.erro = err;
      console.log('Error: ', this.erro);
    })
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

  open(recipe: Meal) {
    const modalRef = this.modalService.open(ReceitasComponent, { size: 'lg' });
    modalRef.componentInstance.title = recipe.title;
    modalRef.componentInstance.instructions = recipe.instructions;
    modalRef.componentInstance.linkVideo = recipe.youtube;
  }

}
