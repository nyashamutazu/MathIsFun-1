import { GameDifficulty, MathType, GameType } from './../services/math.reducer';
import { MathService } from './../services/math.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, public mathService: MathService, private router: Router) {

  }

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('Anonymous', {validators: [Validators.required]}),
      difficulty: new FormControl('easy', {validators: [Validators.required]}),
      mathType: new FormControl('all', {validators: [Validators.required]}),
      gameType: new FormControl('timed', {validators: [Validators.required]}),
    });


  }

  startGame() {
    console.log(this.form);
    if (this.form.invalid) {
      return;
    } else {
      const difficulty: GameDifficulty = this.form.get('difficulty').value;
      const mathType: MathType = this.form.get('mathType').value;
      const gameType: GameType = this.form.get('gameType').value;

      this.mathService.assignGameSetting(difficulty, mathType, gameType);

      this.router.navigate(['/game']);
    }
  }
}
