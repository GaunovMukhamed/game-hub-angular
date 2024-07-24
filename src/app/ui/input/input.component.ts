import { Component, Input, Optional, Self } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormGroupDirective, NgControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  viewProviders: [{
    provide: ControlContainer, 
    useExisting: FormGroupDirective 
  }]
})
export class InputComponent {

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) this.ngControl.valueAccessor = NOOP_VALUE_ACCESSOR;
  }

  @Input() placeholder: string = 'Введите...'
  @Input() formControlName: string = '';
}

export const NOOP_VALUE_ACCESSOR: ControlValueAccessor = {
  writeValue(): void {},
  registerOnChange(): void {},
  registerOnTouched(): void {}
};
