import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
selector: 'app-input-form',
standalone: true,
imports: [ReactiveFormsModule],
templateUrl: './input-form.html'
})

export class InputFormComponent {

    form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    }

    submit() {
        if (this.form.valid) { 
            console.log(this.form.value); 
        }
        else { 
            this.form.markAllAsTouched(); 
        }
    }
}