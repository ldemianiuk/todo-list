import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../static-data.service';
import { LocalStorageDataService } from '../local-storage-data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoText: string = "";
  searchText: string = "";

  constructor(private data: LocalStorageDataService) { }

  ngOnInit(): void {
    this.todos = this.data.getTodos();
    console.log(this.todos);
  }

  addTodo() {
    if(this.todoText === "") return;
    this.data.addTodo(this.todoText);
    this.todoText = "";
  }

  deleteTodo(i: number) {
    this.data.deleteTodo(i);
  }

  searchHide(title: string): boolean {
    if (this.searchText == "") return false;
    return !title.toLowerCase().includes(this.searchText.toLowerCase());
  }


}
