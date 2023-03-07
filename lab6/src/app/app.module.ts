import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

const routes: Routes =
  [
    {path: 'home', component: HomeComponent},
    {path: 'albums', component: AlbumsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'albums/:albumId', component: AlbumDetailsComponent},
    {path: 'albums/:albumId/photos', component: AlbumPhotosComponent},
    {path: '', redirectTo: 'home', pathMatch: "full"},
  ]

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    AlbumPhotosComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
