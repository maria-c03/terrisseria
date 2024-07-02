import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  constructor(){}
  
  @Input()
  quantity: number = 0;

  @Input()
  max: number = 0;

  @Output()
  quantityChange: EventEmitter<number> =new EventEmitter<number>();

  ngOnInit():void{}

  upQuantity(): void{
    if(this.quantity < this.max)
      this.quantity++;
      this.quantityChange.emit(this.quantity);
  }

  downQuantity(): void{
    if(this.quantity>0)
      this.quantity--;
      this.quantityChange.emit(this.quantity);

  }
  onChangeQuantity(event: any): void {
    if(this.max < this.quantity){
      this.quantity = this.max;
      console.log("no podes pedir mas")
    }
    if(this.quantity < 0){
      this.quantity = 0;
      console.log("no podes pedir menos de 0")
    }
    this.quantityChange.emit(this.quantity);
    event.preventDefault(event);
  }
}
