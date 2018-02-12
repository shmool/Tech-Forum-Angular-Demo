import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../../todos.service';

@Component({
  selector: 'app-main',
  template: `
    <h1>My Todo List</h1>
    {{ todos | json }}
    <ul>
      <li *ngFor="let item of todos">
        {{ item.title }}
      </li>
    </ul>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  todoList$;
  todos;

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.todoList$ = this.todosService.getList()
      .subscribe(res => this.todos = res);
  }

}
