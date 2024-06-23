import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../../core/services/jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css',
})
export class JokesComponent implements OnInit {
  constructor(private _jokesService: JokesService) {}

  ngOnInit(): void {}

  jokesfromapi() {
    this._jokesService.getJokes().subscribe((data) => {
      console.log(data);
    });
  }
}
