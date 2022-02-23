import { ReceitasComponent } from './../receitas/receitas.component';
import { Meal } from './../models/receita.model';
import { CrudService } from '../services/crud.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { merge } from 'rxjs'
import {  debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent{

  erro: any;
  search = new FormControl();
  form = this.formBuilder.group({
    search: ''
  })
  
  constructor(private crudService: CrudService, private modalService: NgbModal, private formBuilder: FormBuilder) { }

  getData = this.crudService.getSearchRecipe().pipe(
    tap(console.log)
  );
 
  inputFilter = this.search.valueChanges.pipe(
    debounceTime(1000),
    filter(
      (valorDigitado) => valorDigitado.length >= 3 || !valorDigitado.length
    ),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this.crudService.getSearchRecipe(valorDigitado).pipe(
      tap(console.log)
    ))
  );
  
  recipes = merge(this.getData, this.inputFilter);

  open(recipe: Meal): void {
    const modalRef = this.modalService.open(ReceitasComponent, { size: 'lg' });
    modalRef.componentInstance.title = recipe.title;
    modalRef.componentInstance.instructions = recipe.instructions;
    modalRef.componentInstance.linkVideo = recipe.youtube;
  }

}