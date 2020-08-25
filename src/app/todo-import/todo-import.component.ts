import { Component, OnInit } from '@angular/core';
import { LocalStorageDataService } from '../local-storage-data.service';

@Component({
  selector: 'app-todo-import',
  templateUrl: './todo-import.component.html',
  styleUrls: ['./todo-import.component.css']
})
export class TodoImportComponent implements OnInit {
  textarea = "";

  constructor(private data: LocalStorageDataService) { }

  ngOnInit(): void {
  }

  importTodos(): void {
    if (this.textarea === "") return;
    this.textarea.split('\n').forEach(title => {if(title !== "") this.data.addTodo(title)});
    this.textarea = "";
  }
}
