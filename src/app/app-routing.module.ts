import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoImportComponent } from './todo-import/todo-import.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "todo"},
  {path: "todo", component: TodoListComponent},
  {path: "import", component: TodoImportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
