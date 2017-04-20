import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives Exercise:';
  color:string;
  getColor(data){
    console.log("getColor!")
    this.color=data;
  }
}
