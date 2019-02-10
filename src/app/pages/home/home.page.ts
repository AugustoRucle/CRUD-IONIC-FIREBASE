import { Component } from '@angular/core';
import { Todo, FirebaseCrudService } from '../../services/firebase-crud/firebase-crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todos: Todo[]

  constructor(private todoService: FirebaseCrudService){}

  ngOnInit(){
    this.todoService.getTodos().subscribe(data =>{
      this.todos = data
    }, error =>{
      console.log(error)
    })
  }

  remove(item){
    this.todoService.removeTodo(item.id)
  }

}
