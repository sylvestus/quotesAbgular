import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {
  constructor(private elem:ElementRef){}
// Event listeners for element hosting
// the directive
@HostListener('mouseenter') onMouseEnter() {
  this.textDeco("underline")
}

@HostListener('mouseleave') onMouseLeave() {
  this.textDeco("None")
}

private textDeco(action:string){
  this.elem.nativeElement.style.textDecoration=action;




  
  
  }

 

}
