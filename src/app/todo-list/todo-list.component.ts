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
  todoText = '';
  searchText = '';

  constructor(private data: LocalStorageDataService) { }

  ngOnInit(): void {
    this.todos = this.data.getTodos();
    console.log(this.todos);
  }

  addTodo(): void {
    if(this.todoText === '') { return; }
    this.data.addTodo(this.todoText);
    this.todoText = '';
  }

  deleteTodo(i: number): void {
    this.data.deleteTodo(i);
  }

  increasePriority(i: number): void {
    this.data.increasePriority(i);
  }

  decreasePriority(i: number): void {
    this.data.decreasePriority(i);
  }

  toggleCompleted(i: number): void {
    this.data.saveTodos();
  }

  searchHide(title: string): boolean {
    if (this.searchText === '') { return false; }
    return !title.toLowerCase().includes(this.searchText.toLowerCase());
  }

  clearSearch(): void {
    this.searchText = '';
  }

  titleChanged(i: number, newTitle: string): void {
    this.data.changeTitle(i, newTitle);
  }

  titleKeydown(event: any): boolean {
    if (event.key === 'Enter') { event.target.blur(); return false; }
    return true;
  }

}
