import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'difficulty', 'score'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  difficulty: any;
  score: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', difficulty: 1.0079, score: 'H'},
  {position: 2, name: 'Helium', difficulty: 4.0026, score: 'He'},
  {position: 3, name: 'Lithium', difficulty: 6.941, score: 'Li'},
  {position: 4, name: 'Beryllium', difficulty: 9.0122, score: 'Be'},
  {position: 5, name: 'Boron', difficulty: 10.811, score: 'B'},
  {position: 6, name: 'Carbon', difficulty: 12.0107, score: 'C'},
  {position: 7, name: 'Nitrogen', difficulty: 14.0067, score: 'N'},
  {position: 8, name: 'Oxygen', difficulty: 15.9994, score: 'O'},
  {position: 9, name: 'Fluorine', difficulty: 18.9984, score: 'F'},
  {position: 10, name: 'Neon', difficulty: 20.1797, score: 'Ne'},
  {position: 11, name: 'Sodium', difficulty: 22.9897, score: 'Na'},
  {position: 12, name: 'Magnesium', difficulty: 24.305, score: 'Mg'},
  {position: 13, name: 'Aluminum', difficulty: 26.9815, score: 'Al'},
  {position: 14, name: 'Silicon', difficulty: 28.0855, score: 'Si'},
  {position: 15, name: 'Phosphorus', difficulty: 30.9738, score: 'P'},
  {position: 16, name: 'Sulfur', difficulty: 32.065, score: 'S'},
  {position: 17, name: 'Chlorine', difficulty: 35.453, score: 'Cl'},
  {position: 18, name: 'Argon', difficulty: 39.948, score: 'Ar'},
  {position: 19, name: 'Potassium', difficulty: 39.0983, score: 'K'},
  {position: 20, name: 'Calcium', difficulty: 40.078, score: 'Ca'},
];
