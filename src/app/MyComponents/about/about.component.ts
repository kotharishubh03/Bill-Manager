import { Component, OnInit } from '@angular/core';
import { faAt} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  skImg!: string;
  faAt=faAt;
  faLinkedin=faLinkedin;
  faGithub=faGithub;
  constructor() {
   }

  ngOnInit(): void {
  }

}
