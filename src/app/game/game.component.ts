import { logging } from 'protractor';
import { AccumilatorService } from './../services/accumilator.service';
import { MathService } from './../services/math.service';
import {
  GameSettings,
  MathType,
  MathProblem
} from './../services/math.reducer';
import { Component, OnInit, Injectable, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { timer, Subscription } from 'rxjs';

@Injectable()
export class MyService {
  getCounter(tick) {
    return timer(0, tick);
  }
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [MyService]
})
export class GameComponent implements OnInit, OnDestroy {
  constructor(
    private snackBar: MatSnackBar,
    private mathService: MathService,
    private scoreService: AccumilatorService,
    private myService: MyService
  ) {}

  countDown: Subscription;
  counter = 300;
  tick = 1000;

  questionNumber = 0;

  correctTotal = 0;

  form: FormGroup;
  gameSettings: GameSettings;
  mathProblem: MathProblem;

  mode: string;
  mathType: string;
  difficulty;

  showValue = true;

  ngOnInit(): void {
    this.form = new FormGroup({
      answer: new FormControl(null)
    });

    this.gameSettings = this.mathService.getGameSettingsUpdated();

    if (this.gameSettings === undefined) {
      this.gameSettings = this.mathService.returnDefaultGameSettings();
    }

    this.mode = this.gameSettings.gameType.toString();
    this.mathType = this.gameSettings.mathType.toString();
    this.difficulty = this.gameSettings.difficulty;


    this.countDown = this.myService
    .getCounter(this.tick)
    .subscribe(() => {
      this.counter--;

      if (this.counter === 30) {
        this.openSnackBar();
      }
    });

    this.getNextQuestion();
  }

  openSnackBar() {
    this.snackBar.open('You Have 30 Seconds Remaining', 'close', {
      duration: 3000
    });
  }

  correct() {
    this.snackBar.open('Correct', 'x', {
      duration: 1000
    });
  }

  wrong() {
    this.snackBar.open('Wrong', 'x', {
      duration: 1000
    });
  }

  skipQuestion() {
    this.getNextQuestion();
  }

  findAnswer() {
    const questionAnswer = this.form.get('answer').value;

    if (questionAnswer === this.mathProblem.answer) {
      this.correct();
    } else {
      this.wrong();
    }

    this.getNextQuestion();
  }

  getNextQuestion() {

    this.questionNumber ++;
    this.form.reset();

    console.log('mode', this.mode);

    if (this.mode === 'timed') {
        switch (this.mathType) {
          case 'addition':
            this.mathProblem = this.mathService.createAdditionProblem(this.difficulty);
            break;
          case 'subtraction':
            this.mathProblem = this.mathService.createSubtractionProblem(this.difficulty);
            break;
          case 'multiplication':
            this.mathProblem = this.mathService.createMuliplicationProblem(this.difficulty);
            break;
          case 'division':
            this.mathProblem = this.mathService.createDivisionProblem(this.difficulty);
            break;
          default:
            this.mathProblem = this.mathService.getRandomProblem(this.difficulty);
            break;
        }
    } else {
      if (this.showValue) {
        this.showValue = false;

        switch (this.mathType) {
          case 'addition':
            this.mathProblem = this.mathService.createAdditionProblem(this.difficulty);
            break;
          case 'subtraction':
            this.mathProblem = this.mathService.createSubtractionProblem(this.difficulty);
            break;
          case 'multiplication':
            this.mathProblem = this.mathService.createMuliplicationProblem(this.difficulty);
            break;
          case 'division':
            this.mathProblem = this.mathService.createDivisionProblem(this.difficulty);
            break;
          default:
            this.mathProblem = this.mathService.getRandomProblem(this.difficulty);
            break;
        }
      } else {
        this.showValue = true;
      }
    }

    console.log('math problem', this.mathProblem);
    console.log('---');
  }

  ngOnDestroy() {
    this.countDown = null;
  }
}

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {

    const minutes: number = Math.floor(value / 60);
    return (
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
