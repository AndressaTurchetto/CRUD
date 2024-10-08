import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full',
    title: 'Home'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent,
    title: 'Criar Pensamento'
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent,
    title: 'Listar Pensamento'
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent,
    title: 'Excluir Pensamento'
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent,
    title: 'Editar Pensamento'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
