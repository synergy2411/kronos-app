import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector : '[app-highlight]'
})

export class HighlightDirective{

    @HostBinding('style.background-color') bgColor : any;

    @Input('defaultColor') defaultColor : string;

    @HostListener('mouseenter') mouseenter(){
        this.bgColor = this.defaultColor;
    }
    
    @HostListener('mouseleave') mouseleave(){
        this.bgColor = "transparent";
    }

    constructor(private elementRef : ElementRef){
        // console.log(this.elementRef.nativeElement);
        // this.elementRef.nativeElement.style.backgroundColor = "aqua";
    }
}