import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm=new FormGroup({
    name:new FormControl('w'),
    email:new FormControl('w'),
    age:new FormControl('1'),
    phone:new FormControl('w'),
    password:new FormControl('w'),
    confirmPassword:new FormControl('w'),
  })
}
