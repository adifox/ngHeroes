import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DataStorageService } from '../../../services/data.storage.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  heroDetail;
  id: number;
  heroesInTheList = true;

  constructor(private dataStorageService: DataStorageService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.getHeroDetail(+params['id']);
      });
  }

  getHeroDetail(id) {
    this.heroDetail = this.dataStorageService.getData()
      .subscribe((res) => {
        if (id > res['heroDetails'].length) {
          this.heroesInTheList = false;
        } else {
          this.heroDetail = res['heroDetails'][id - 1];
        }
      });
  }
}
