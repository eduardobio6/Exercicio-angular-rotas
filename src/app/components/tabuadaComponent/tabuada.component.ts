import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})
export class TabuadaComponent implements OnInit {

  @Input() num: number = 2;

  constructor() { }

  ngOnInit() {
  }

  getTabuada(){

    for(var i = 0; i<=10; i++){
      return this.num * i;
    }
    
  }
}