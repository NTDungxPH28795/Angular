import { Component } from '@angular/core';
import { IStudent } from './interfaces/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student: IStudent ={
    name: 'Dungx',
    age: 20,
    imageUrl: 'https://picsum.photos/200/300',
    status: true,
    address:{
      street: '123 Main St',
      city: 'Boston',
      state: 'MA'
    }
  }
  setName(newName: string){
    return this.student.name = newName;
  }
  onHandleInput(event: any){
    return this.student.name = event.target.value;
  }
}