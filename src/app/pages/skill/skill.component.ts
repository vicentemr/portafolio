import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faCss3Alt, faHtml5, faJava, faJsSquare } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  public openList = 'frontend';
  faAngular = faAngular;
  faCss3Alt = faCss3Alt;
  faHtml5 = faHtml5;
  faJava = faJava
  faJsSquare = faJsSquare;

  cambioOpenLIst(nameList: string): void {
    this.openList = nameList;
  }
}
