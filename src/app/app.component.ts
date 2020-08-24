import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myInput:string;
  allTasks= [] ;

  addTask(){
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
    let tempArr:any = this.allTasks;
    this.allTasks[index].checked = !this.allTasks[index].checked;
    this.addTask = tempArr;
  }
}
