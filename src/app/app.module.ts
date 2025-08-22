import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
// import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';

import { RouterModule } from '@angular/router';
import { StoriesComponent } from './component/stories/stories.component';
import { ArtCraftComponent } from './component/artCraft/art-craft.component';
import { MusicPodcastComponent } from './component/musicPodcast/music-podcast.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { StoryDetailsComponent } from './component/story-details/story-details.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    // FooterComponent,
    HomeComponent,
    StoriesComponent,
    ArtCraftComponent,
    MusicPodcastComponent,
    LoginComponent,
    StoryDetailsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
