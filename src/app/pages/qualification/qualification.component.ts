import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-qualification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qualification.component.html',
  styleUrl: './qualification.component.css'
})
export class QualificationComponent {
  public openList = 'educacion';
  cambioOpenLIst(nameList: string): void {
    this.openList = nameList;
  }
}
