import { Component, OnInit } from '@angular/core';
import { IncrementarService } from '../../services/incrementar.service';

@Component({
  selector: 'app-incremeter',
  templateUrl: './incremeter.component.html',
  styleUrls: ['./incremeter.component.scss'],
})
export class IncremeterComponent {

  valor: number = 0;

  constructor(
    public incrementService: IncrementarService
  ) { }

  decrementer(){
    if (this.incrementService.valor > 0)
      this.incrementService.valor--;
  }
  incrementer(){
    this.incrementService.valor++
  }
}
