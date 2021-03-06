import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl
} from '@angular/forms';
import { MatDialogRef } from '@angular/material';

declare var swal: any;

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
    private formBuilder: FormBuilder, private services: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  onSubmit() {
    const temp = this.loginForm.value;
    this.services.loginFn(temp).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
      swal(
        'login Success',
        'Successfully logged in',
        'success'
      );
      localStorage.setItem('token', res['id']);
      this.router.navigate(['/members']);
    }, error => {
      console.log(error);
      alert('login Error');
    });

  }

}
