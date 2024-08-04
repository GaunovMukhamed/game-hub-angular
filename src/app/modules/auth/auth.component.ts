import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { SuccessResponse } from '../../general.interfaces';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  constructor(
    private _authService: AuthService,
    private _messageService: MessageService
  ) {}

  authForm : FormGroup = new FormGroup({
    "login": new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  onSubmit(): void {
    this._authService.auth(this.authForm.value.login).subscribe((result: SuccessResponse) => {
      this._messageService.add({ severity: 'success', summary: 'Успешно', detail: result.message });
    })
  }
}
