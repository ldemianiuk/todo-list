import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoImportComponent } from './todo-import.component';

describe('TodoImportComponent', () => {
  let component: TodoImportComponent;
  let fixture: ComponentFixture<TodoImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
