import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccumilatorService {
  totalScore: number;

  constructor() { }

  resetScore() {
    this.totalScore = 0;
  }

  addScore() {
    this.totalScore += 1;
  }

  getTotalScore(): number {
    return this.totalScore;
  }
}
