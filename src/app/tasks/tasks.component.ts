import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  tasks:string[]=[];
  notasks:boolean=false;

  constructor() {
   }

  ngOnInit(): void {
    
  }

  onCreate(){
    if(this.tasks.length==0){
      this.notasks=true;
    }
    let inputtask=((<HTMLInputElement>document.getElementById("taskinput")).value);
    this.tasks.push(inputtask);
    console.log(this.tasks);
    

  }

  onDelete(){
    if(this.tasks.length==0){
    this.notasks=false;
    }
    let inputtask=((<HTMLInputElement>document.getElementById("taskinput")).value);
    for(let i=0;i<this.tasks.length; i++){
      if(inputtask==this.tasks[i])
      delete this.tasks[i];
    }
   
  }



}
