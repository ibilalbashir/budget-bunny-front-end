import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { matchOtherValidator } from '../matchOtherValidator';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private services: UserService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, matchOtherValidator('email'), Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onJoinNow() {
    const temp = this.signupForm.value;

    delete temp['confirmEmail'];
    temp['credit'] = 0;
console.log(temp);
    this.services.singupFn(temp).subscribe(res => {
      alert('user ' + res['name'] + ' created successfully');
      this.signupForm.reset();
      console.log(res);
    }, error => {
      alert('user not created');
      console.log(error);
    });


  }

}

