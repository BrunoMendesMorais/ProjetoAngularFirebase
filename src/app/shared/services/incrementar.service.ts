import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncrementarService {

  valor: number = 10;

  constructor() { }
}
