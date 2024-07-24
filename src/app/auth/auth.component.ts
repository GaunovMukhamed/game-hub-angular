import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../ui/input/input.component';
import { ButtonComponent } from "../ui/button/button.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent
],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  authForm : FormGroup = new FormGroup({
    "login": new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  onSubmit(): void {
    console.log(this.authForm.value);
  }
}
