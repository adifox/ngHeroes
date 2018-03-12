import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  @Input() hero;
  @Input() id;

  constructor() { }

  ngOnInit() {
  }
}
