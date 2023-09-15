import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

declare var $:any;



@Directive({
  selector: '[appExample]' // Uygulama seviyesinde directive'i kullanmamızı sağlayan referanstır.

})
export default class ExampleDirective implements OnInit  {

  constructor(private element:ElementRef) {

   }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor=this.color;

    $(this.element.nativeElement).fadeOut(2000).fadeIn();
  }

   @Input() color!: string;
   
   @HostListener("click")
   onClick(){
    alert("HTML nesnesi click edildi...")
   }

   @HostBinding("style.color")
   writingColor:string = "blue";


}
