import { CrudService } from '../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Receita } from '../models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  receita: Receita;
  erro: any;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.receberDados();
  }

  receberDados(){
    this.crudService.pegarReceita().subscribe((data: Receita) => {
       this.receita = data;
       console.log(this.receita);

    }, (err: any) => { 
      this.erro = err;
      console.log('Erro: ', this.erro)
    })
  } 

}
