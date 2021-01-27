import { Component } from '@angular/core';
import {Todo} from './todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  status1:status=['in progress','finished','not started'];
  todos:Todo = [];
  name = "";
  person="";
  date="";
  editabel = false;
  addButton="ADD";
  editableIndex="";

  Add(){
    if(this.editabel===true){
      const TodosList: Todo={
        name: this.name,
        person: this.person,
        date: this.date,
        editabel: this.editabel
      }
     this.todos.splice(this.editableIndex,1,TodosList);
     this.addButton="ADD";
     this.editabel=false;
    }
    else{
      const TodosList: Todo = {
        name:this.name,
        person:this.person,
        date:this.date,
        editabel:this.editabel
     
      }
      this.todos.splice(0,0,TodosList);
      this.name="";
      this.person="";
      this.date="";
    
    }
    }
    
  delete(index){
    this.todos.splice(index,1);
  }
  edit(item1, item2, item3, index){
    this.editabel=true;
    this.addButton="UPDATE";
    this.name=item1;
    this.editableIndex=index;
    this.person=item2;
    this.date=item3;
  }

}
