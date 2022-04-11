import { Component, Input, OnInit } from '@angular/core';
import { SocialMediaLink } from 'src/app/shared/models/socialMediaLink.model';

import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public icon = faFilm;

  @Input() socialMedia: SocialMediaLink[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
