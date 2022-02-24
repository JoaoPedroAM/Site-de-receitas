import { ReceitasComponent } from './../receitas/receitas.component';
import { Meal } from './../models/receita.model';
import { CrudService } from '../services/crud.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent{

  erro: any;
  form = this.formBuilder.group({
    search: ''
  })

  constructor(private crudService: CrudService, private modalService: NgbModal, private formBuilder: FormBuilder) { }

  onSubmit(){
    this.crudService.getSearchRecipe(this.form.controls['search'].value).pipe()
    this.form.reset();
  }

  getData = this.crudService.getSearchRecipe();

  recipes = this.getData;

  open(recipe: Meal): void {
    const modalRef = this.modalService.open(ReceitasComponent, { size: 'lg' });
    modalRef.componentInstance.title = recipe.title;
    modalRef.componentInstance.instructions = recipe.instructions;
    modalRef.componentInstance.linkVideo = recipe.youtube;
  }

}
