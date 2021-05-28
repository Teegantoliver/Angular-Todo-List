import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todosService: TodoService) { }

  ngOnInit(): void {
  }

  //Set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo:Todo) {
    //toggle in UI
    todo.completed = !todo.completed;
    //toggle on server
    this.todosService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    })

  }
  onDelete(todo:Todo) {
    this.deleteTodo.emit(todo);
  }

}
