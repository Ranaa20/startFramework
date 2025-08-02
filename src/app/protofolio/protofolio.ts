import { Component } from '@angular/core';

@Component({
  selector: 'app-protofolio',
  imports: [],
  templateUrl: './protofolio.html',
  styleUrl: './protofolio.css'
})
export class Protofolio {
 portfolioItems = [
    { img: 'imgs/poert1.png' },
    { img: 'imgs/port2.png' },
    { img: 'imgs/port3.png' },
    { img: 'imgs/poert1.png' },
    { img: 'imgs/port2.png' },
    { img: 'imgs/port3.png' }
  ];


}
