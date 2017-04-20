import { Directive,Renderer,ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appMyVisibility]'
})
export class MyVisibilityDirective{

  @Input()
  appMyVisibility:boolean;

  constructor(private e: ElementRef, private r: Renderer) { 
     console.log("constructor isVisible="+this.appMyVisibility);
  }

  ngOnInit(){
    console.log(this.appMyVisibility);
    if(!this.appMyVisibility){
      console.log("hiding the display");
      this.r.setElementStyle(this.e.nativeElement,'display','none');
    }

  }


}
