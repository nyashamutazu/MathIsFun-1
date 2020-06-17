import { validate } from 'json-schema';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleDialog } from './dialog-content.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  isLoading = false;
  checked = false;
  parentForm: FormGroup;
  studentForm: FormGroup;
  tutorForm: FormGroup;

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      userName: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      confirmEmail: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.required]}),
      confirmPassword: new FormControl(null, {validators: [Validators.required]}),
      checkbox: new FormControl(false, {validators: [Validators.required]})
    });

    this.parentForm = new FormGroup({
      userName: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      confirmEmail: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      schoolName: new FormControl(null, {validators: [Validators.required]}),
      phoneNumber: new FormControl(null, {validators: [Validators.required]}),
      password: new FormControl(null, {validators: [Validators.required]}),
      confirmPassword: new FormControl(null, {validators: [Validators.required]}),
      checkbox: new FormControl(false, {validators: [Validators.required]})
    });

    this.tutorForm = new FormGroup({
      userName: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      confirmEmail: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      schoolName: new FormControl(null, {validators: [Validators.required]}),
      phoneNumber: new FormControl(null, {validators: [Validators.required]}),
      password: new FormControl(null, {validators: [Validators.required]}),
      confirmPassword: new FormControl(null, {validators: [Validators.required]}),
      checkbox: new FormControl(false, {validators: [Validators.required]})
    });

    // this.studentForm = new FormGroup({

    // });
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSubmit() {
    console.log('hi');
  }
}

