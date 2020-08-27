import { Injectable } from '@angular/core';
import { Todo, newTodo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageDataService {
  sampleTodos: Todo[] = [
    {title: 'Lorem ipsum dolor sit amet', priority: 3, completed: false},
    {title: 'Consectetur adipiscing elit', priority: 2, completed: false},
    {title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', priority: 1, completed: false},
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

    window.addEventListener("storage", this.storageEvent.bind(this));
  }

  storageEvent(event: StorageEvent): void {
    if (event.storageArea === localStorage) {
      this.todos.splice(0, this.todos.length, ...JSON.parse(event.newValue));
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

  decreasePriority(i: number) {
    this.todos[i].priority--;
    this.sortTodos();
    this.saveTodos();
  }

  increasePriority(i: number) {
    this.todos[i].priority++;
    this.sortTodos();
    this.saveTodos();
  }

  toggleCompleted(i: number) {
    this.todos[i].completed = !this.todos[i].completed;
    this.saveTodos();
  }

  changeTitle(i: number, newTitle: string) {
    this.todos[i].title = newTitle;
    this.saveTodos();
  }

}
