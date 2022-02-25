import { ReceitasComponent } from './../receitas/receitas.component';
import { Meal, MealAPI } from './../models/receita.model';
import { CrudService } from '../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { merge, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  recipes: Observable<Meal[]>;
  erro: any;
  form = this.formBuilder.group({
    search: ''
  })
  search: string;

  constructor(
    private crudService: CrudService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.recipes = this.getData;
  }

  onSubmit() {
    this.recipes = this.crudService.getSearchRecipe(this.form.controls['search'].value);
    this.form.reset();
  }

  getData = this.crudService.getSearchRecipe();

  open(recipe: Meal): void {
    const modalRef = this.modalService.open(ReceitasComponent, { size: 'lg' });
    modalRef.componentInstance.title = recipe.title;
    modalRef.componentInstance.instructions = recipe.instructions;
    modalRef.componentInstance.linkVideo = recipe.youtube;
  }

}
