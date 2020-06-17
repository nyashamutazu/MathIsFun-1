import { async } from '@angular/core/testing';
export interface MathProblem {
  first: number;
  second: number;
  operator: string;
  answer: number;
}

export interface GameSettings {
  difficulty: GameDifficulty;
  mathType: MathType;
  gameType: GameType;
}

export enum GameDifficulty {
  easy,
  medium,
  hard
}

export enum MathType {
  all,
  addition,
  subtraction,
  multiplication,
  division
}

export enum GameType {
  practise,
  timed
}

const defaultState = {
  difficulty: GameDifficulty.easy,
  gameType: GameType.timed,
  mathType: MathType.all
};

export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const SET_MATH_TYPE = 'SET_MATH_TYPE';
export const SET_GAME_TYPE = 'SET_GAME_TYPE';
