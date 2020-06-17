import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  form: FormGroup;

  private authListnerSub: Subscription;


  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    console.log('hi');
  }

}
