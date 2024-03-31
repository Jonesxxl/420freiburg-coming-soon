import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bud3dComponent } from './component/bud3d/bud3d.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Bud3dComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '420freiburg';

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      name: '',
    });
  }
  onSubmit(): void {
    console.log(this.form.value);
    // Handle your form submission logic here, e.g., sending data to an API
  }
}
