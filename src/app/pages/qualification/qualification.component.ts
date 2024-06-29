import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-qualification',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './qualification.component.html',
  styleUrl: './qualification.component.css'
})
export class QualificationComponent {
  faCalendarAlt = faCalendarAlt;

  public openList = 'educacion';
  cambioOpenLIst(nameList: string): void {
    this.openList = nameList;
  }
}
