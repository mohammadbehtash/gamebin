import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    email:new FormControl(null,[Validators.required,Validators.email,Validators.pattern(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)]),
    age:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]),
    confirmPassword:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  })

  unsubmit(){
    console.log(this.registerForm.value);
    
  }
}
