import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DataStorageService } from './services/data.storage.service';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/heroes/heroes-list/hero/hero.component';
import { HeroDetailComponent } from './components/heroes/hero-detail/hero-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    HeroDetailComponent,
    HeaderComponent,
    HeroesListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
