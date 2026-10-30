import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { IconComponent } from '../../template/icon/icon.component';
import { profile } from '../../data/portfolio.data';

// TODO: Create a free account at https://www.emailjs.com and fill in your credentials:
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  profile = profile;
  email = 'vomoro96@gmail.com';
  showForm = false;

  form: FormGroup;
  sending = false;
  sent = false;
  error = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.email]],
      proyecto: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() { return this.form.controls; }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending = true;
    this.sent = false;
    this.error = false;

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: this.f['nombre'].value,
          from_email: this.f['correo'].value,
          subject: this.f['proyecto'].value,
          message: this.f['mensaje'].value,
        },
        EMAILJS_PUBLIC_KEY
      );
      this.sent = true;
      this.form.reset();
    } catch {
      this.error = true;
    } finally {
      this.sending = false;
    }
  }
}
