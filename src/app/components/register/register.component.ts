import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import UserRegisterRequest from 'src/app/core/models/userRegisterRquest';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  myForm!: FormGroup;
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  subscriptionPlans: {}[] = [
    { name: 'Free', value: 'FREE'},
    { name: 'Premium', value: 'PREMIUM'},
    { name: 'Super Premium', value: 'SUPER_PREMIUM'},
  ];

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      userPlan: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() {
    if (!this.myForm.valid) {
      return console.log('rellena los campos');;
    }

    const { username, userPlan, password } = this.myForm.getRawValue();

    const obj = {
      username,
      userPlan: userPlan.value,
      password,
    };

    this.authService.register(obj).subscribe({
      next: () => {
        alert('User created');
        this.router.navigate(['/login']);
      }
    });
  }
}
