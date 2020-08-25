import { Injectable } from '@angular/core';
import { Todo, newTodo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageDataService {
  sampleTodos: Todo[] = [
    {title: 'Todo 1', priority: 3},
    {title: 'Todo 3', priority: 2},
    {title: 'Todo 2', priority: 1},
  ];

  todos: Todo[];

    
  constructor() {
    let stored = localStorage.getItem('todos');
    if (stored === null) {
      this.todos = this.sampleTodos;
      this.saveTodos();
    }
    else {
      this.todos = JSON.parse(stored);
    }
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  sortTodos() {
    this.todos.sort((a, b) => b.priority - a.priority);
  }

  getTodos() {
    return this.todos;
  }

  addTodo(newTitle: string, newPriority: number = 0) {
    this.todos.push(newTodo(newTitle));
    this.sortTodos();
    this.saveTodos();
  }

  deleteTodo(i: number) {
    //let i = this.todos.findIndex(t => t.id === todo.id);
    this.todos.splice(i, 1);
    this.saveTodos();
  }
}
