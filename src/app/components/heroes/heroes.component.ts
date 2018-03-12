import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { DataStorageService } from '../../services/data.storage.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes = [];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    // this.dataStorageService.getData()
    //   .subscribe((res) => {
    //     this.heroes = res['heroes'].slice();
    //   });
  }
}
