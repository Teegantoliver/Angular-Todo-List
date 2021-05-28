import { AboutComponent } from './components/pages/about/about.component';
import { TodosComponent } from './components/todos/todos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '',component: TodosComponent},
  { path: 'about',component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
