import { Component } from '@angular/core';
import { IconComponent } from '../../template/icon/icon.component';
import { certs, jobs, profile, stack } from '../../data/portfolio.data';

@Component({
  selector: 'app-qualification',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './qualification.component.html',
  styleUrl: './qualification.component.css'
})
export class QualificationComponent {
  jobs = jobs;
  stack = stack;
  certs = certs;
  cv = profile.cv;
}
