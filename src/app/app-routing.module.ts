import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReceitasComponent } from './receitas/receitas.component';

const routes: Routes = [

  { path: 'app-home', component: HomeComponent },
  { path: 'app-perfil', component: PerfilComponent },
  { path: 'app-receitas', component: ReceitasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
