import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})
export class TabuadaComponent implements OnInit {

  @Input() num: Number = 0;

  constructor() { }

  ngOnInit() {
  }

  getTabuada(){

    var tabuada = '';
    for(var i = 1; i<=10; i++){
      tabuada +=
      this.num + 'X' + i + '=' + Number(this.num) * i + `|| \n`
    }
    
    return tabuada;
  }
}