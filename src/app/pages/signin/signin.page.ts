import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, Validators, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, FormsModule ]
})

export class SigninPage implements OnInit {
  loginForm!: FormGroup;
  router = inject(Router);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
      if (this.loginForm.valid) {
        console.log('Login data', this.loginForm.value);
        this.router.navigateByUrl("/home/profile");
      }
}
}