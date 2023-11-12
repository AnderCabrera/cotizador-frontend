import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import UserLoginRequest from 'src/app/core/models/userLoginRequest';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm!: FormGroup;
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  showData() {
    console.log(this.myForm.value);
  }

  login() {
    const { username, password } = this.myForm.getRawValue();

    const obj = {
      username,
      password
    };

    this.authService.login(obj).subscribe((res:any) => {
      console.log(res);
    }
    );
  }
}
