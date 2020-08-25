import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myInput:string;
  allTasks = [] ;

  addTask(event){
    event.preventDefault();
    if(this.allTasks[0] == undefined) {
      this.allTasks.splice(0,1)
    }
    if (this.validation() == true) {
      let data = {
        taskHeading: this.myInput,
        checked: false
      }
      this.allTasks.push(data);
      this.myInput = '';
    }
  }  

  validation = () => {
    if (this.myInput !== '' || null || undefined) {
      return true;
    }
  }

  deleteTask = (index) => {
    this.allTasks.splice(index,1);
  }

  checkUncheck = (index) => {
    this.allTasks[index].checked = !this.allTasks[index].checked;
  }
}
