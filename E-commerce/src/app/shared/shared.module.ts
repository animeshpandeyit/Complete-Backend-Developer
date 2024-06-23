import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesComponent } from './components/jokes/jokes.component';



@NgModule({
  declarations: [
    JokesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
