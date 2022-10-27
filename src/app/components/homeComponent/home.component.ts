import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private name: string = 'Carlos Eduardo Alves De Oliveira';
  private ra: string = '0050832021021';
  private data: string = Date() ;
  
  constructor() { }

  ngOnInit() {
  }

  getName(){
    return this.name;
  }
  
  getRa(){
    return this.ra;
  }

  getDate(){
    return this.data;
  }

}