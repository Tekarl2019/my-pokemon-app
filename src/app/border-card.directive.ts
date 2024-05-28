import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setColor(this.initialColor);
   }

  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }
  
  setColor(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }



  @Input('appBorderCard') user_border_color: string;
  @HostListener('mouseenter') onMouseEnter(){
    this.setColor(this.user_border_color || this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setColor(this.initialColor);
  }

}
