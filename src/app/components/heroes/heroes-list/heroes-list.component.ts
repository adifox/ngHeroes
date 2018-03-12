import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../../../services/data.storage.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html'
})
export class HeroesListComponent implements OnInit {
  heroes = [];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getData()
      .subscribe((res) => {
       this.heroes = res['heroes'].slice();
      });
  }

}
