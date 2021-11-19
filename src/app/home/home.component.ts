import { CrudService } from '../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  receita: Recipe;
  erro: any;


  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.getter();
  }

  getter(){
    this.crudService.pegarReceita().subscribe((data: Recipe) => {
       this.receita = data;
       console.log(this.receita);


    }, (error: any) => { 
      this.erro = error;
      console.log('Erro: ', this.erro)
    })
  } 

}
