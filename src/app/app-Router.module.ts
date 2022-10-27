import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/homeComponent/home.component';
import { TabuadaComponent } from './components/tabuadaComponent/tabuada.component';
import { TimerComponent } from './components/timerComponent/timer.component';

const rotas : Routes = [
  {path: '', component: HomeComponent},
  {path: 'tabuada', component: TabuadaComponent},
  {path: 'timer', component: TimerComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}