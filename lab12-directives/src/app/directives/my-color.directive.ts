import { Directive,ElementRef,HostBinding,HostListener,Input,Output,EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective {
  
  index:number=0;

  @Input()
  appMyColor:[string];

  @Output() colorEmitter = new EventEmitter();


  constructor(private e: ElementRef) {}

  @HostListener('click') click(){
    let color = this.appMyColor[this.index];
    this.e.nativeElement.style.color = color;
    this.colorEmitter.emit(color);
    // this.myBG = this.appMyColor[this.index];
    this.index++;
    if(this.index >= this.appMyColor.length){
      this.index=0;
    }
  }
  // @HostBinding('style.backgroundColor') myBG;


}
