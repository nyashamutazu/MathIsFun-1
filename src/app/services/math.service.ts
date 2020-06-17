import {
  GameDifficulty,
  MathType,
  MathProblem,
  GameSettings,
  GameType
} from './math.reducer';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  gameSettings: GameSettings;

  constructor() {}

  createAdditionProblem(difficulty: GameDifficulty): MathProblem {
    const first: number = this.getRandomNumberFromRangeDifficulty(difficulty);
    const second: number = this.getRandomNumberFromRangeDifficulty(
      difficulty,
      true
    );

    if (second > first) {
      return this.createAdditionProblem(difficulty);
    }

    const answer: number = first + second;

    const problem: MathProblem = {
      first,
      second,
      operator: '+',
      answer
    };

    return problem;
  }

  createSubtractionProblem(difficulty: GameDifficulty): MathProblem {
    const first = this.getRandomNumberFromRangeDifficulty(difficulty, true);
    const second = this.getRandomNumberFromRangeDifficulty(difficulty);

    if (second > first) {
      return this.createSubtractionProblem(difficulty);
    }

    const answer = first - second;

    const problem: MathProblem = {
      first,
      second,
      operator: 'x',
      answer
    };

    return problem;
  }

  createMuliplicationProblem(difficulty: GameDifficulty): MathProblem {
    const first = this.getRandomNumberFromRangeDifficulty(difficulty, true);
    const second = this.getRandomNumberFromRangeDifficulty(difficulty);

    if (second > first) {
      return this.createMuliplicationProblem(difficulty);
    }

    const answer = first * second;

    const problem: MathProblem = {
      first,
      second,
      operator: 'x',
      answer
    };

    return problem;
  }

  createDivisionProblem(difficulty: GameDifficulty): MathProblem {
    const first = this.getRandomNumberFromRangeDifficulty(difficulty);
    const second = this.getRandomNumberFromRangeDifficulty(difficulty, true);

    if (first === 0 || first % second !== 0) {
      return this.createDivisionProblem(difficulty);
    }

    const answer = first / second;

    const problem: MathProblem = {
      first,
      second,
      operator: '÷',
      answer
    };

    return problem;
  }

  getRandomProblem(difficulty: GameDifficulty): MathProblem {
    const rand = this.createRandomNumber(0, 4);

    switch (rand) {
      case MathType.addition:
        return this.createAdditionProblem(difficulty);
      case MathType.division:
        return this.createDivisionProblem(difficulty);
      case MathType.subtraction:
        return this.createSubtractionProblem(difficulty);
      case MathType.multiplication:
        return this.createMuliplicationProblem(difficulty);
      default:
        return this.createAdditionProblem(difficulty);
    }
  }

  private getRandomNumberFromRangeDifficulty(
    difficulty: GameDifficulty,
    second = false
  ): number {
    const min = 0;
    let max = 9;

    const difficultyString = difficulty.toString();

    if (second) {
      switch (difficultyString) {
        case 'hard':
          max = 999;
          break;
        case 'medium':
          max = 99;
          break;
        default:
          max = 9;
          break;
      }
    } else {
      switch (difficultyString) {
        case 'hard':
          max = 99;
          break;
        default:
          max = 9;
          break;
      }
    }

    console.log(max, min);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  createRandomNumber(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  assignGameSetting(
    difficulty: GameDifficulty,
    mathType: MathType,
    gameType: GameType
  ) {
    this.gameSettings = {
      difficulty,
      mathType,
      gameType
    };
  }

  getGameSettingsUpdated() {
    return this.gameSettings;
  }

  returnDefaultGameSettings() {
    return {
      difficulty: GameDifficulty.easy,
      gameType: GameType.timed,
      mathType: MathType.all
    };
  }
}
