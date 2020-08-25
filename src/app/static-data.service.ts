import { Injectable } from '@angular/core';
import { Todo, newTodo } from './todo';

@Injectable({
  providedIn: 'root'
})

export class StaticDataService {
  todos : Todo[] = [
    {title: 'Todo 1', priority: 3, completed: false},
    {title: 'Todo 3', priority: 2, completed: false},
    {title: 'Todo 2', priority: 1, completed: false},
  ];

  constructor() {
    this.todos.sort((a, b) => b.priority - a.priority);
  }

  getTodos() {
    return this.todos;
  }

  addTodo(newTitle: string, newPriority: number = 0) {
    this.todos.push(newTodo(newTitle));
    this.todos.sort((a, b) => b.priority - a.priority);
  }

  deleteTodo(i: number) {
    this.todos.splice(i, 1);
  }
}
