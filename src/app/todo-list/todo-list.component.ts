import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { StaticDataService } from '../static-data.service';
import { LocalStorageDataService } from '../local-storage-data.service';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoText = '';
  searchText = '';
  searchText$: Subject<void>;

  constructor(private data: LocalStorageDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.todos = this.data.getTodos();
    this.searchText$ = new Subject<void>();
    this.searchText$.pipe(throttleTime(1000)).subscribe(s => window.history.replaceState(null, 'Todo list', `/todo?q=${encodeURI(this.searchText)}`));
    this.route.queryParams.subscribe(params => this.searchText = params['q'] || '');
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
    this.searchText$.next();
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
