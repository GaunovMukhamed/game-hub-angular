import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../ui/input/input.component';
import { ButtonComponent } from "../ui/button/button.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    InputComponent,
    ButtonComponent
],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  myForm : FormGroup = new FormGroup({
    "login": new FormControl('', [Validators.required, Validators.maxLength(1)]),
  });


}
