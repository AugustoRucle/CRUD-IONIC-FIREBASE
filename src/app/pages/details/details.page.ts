import { Component, OnInit } from '@angular/core';
import { Todo, FirebaseCrudService } from '../../services/firebase-crud/firebase-crud.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  todo: Todo = {
    task: 'test',
    createdAt: new Date().getTime(),
    priority: 2
  }

  todoId = null

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private todoService: FirebaseCrudService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if(this.todoId){
      this.loadTodo()
    }
  }

  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Loading.......'
    })
    await loading.present()

    this.todoService.getTodo(this.todoId).subscribe(data =>{
      loading.dismiss();
      this.todo = data
    })
  }

  async saveTodo(){
    const loading = await this.loadingController.create({
      message: 'Saving todo..'
    })
    await loading.present()
    
    if(this.todoId){
      this.todoService.updateTodo(this.todo, this.todoId).then(()=>{
        loading.dismiss()
        this.navCtrl.navigateBack('home')
      })
    }else{
      this.todoService.addTodo(this.todo).then(()=>{
        loading.dismiss()
        this.navCtrl.navigateBack('home')
      })
    }
  }

}
