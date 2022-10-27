import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-Router.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './components/homeComponent/home.component';
import { TabuadaComponent } from './components/tabuadaComponent/tabuada.component';
import { TimerComponent } from './components/timerComponent/timer.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, TabuadaComponent, TimerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
