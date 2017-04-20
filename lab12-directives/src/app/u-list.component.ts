import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-u-list',
  template: `
      <ul>
        <li [appMyColor]="['yellow','blue','red']" (colorEmitter)="getUColor($event)" *ngFor="let item of items">
          {{item}}
        </li>
      </ul>
      <div> Color Emitted to UL Component: {{color}} </div>
    `
})
export class UListComponent{

  color:string;
  @Input() items:[string];
  
  @Output() uLColorEmitter = new EventEmitter();

  constructor() { }

  getUColor(data){
    console.log("color!="+data);
    this.color=data;
    this.uLColorEmitter.emit(data);
  }


}
