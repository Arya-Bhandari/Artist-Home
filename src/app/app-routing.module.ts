import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouter } from './constant/app-route.contant';
import { ArtCraftComponent } from './component/artCraft/art-craft.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MusicPodcastComponent } from './component/musicPodcast/music-podcast.component';
import { StoriesComponent } from './component/story/stories/stories.component';
import { StoryDetailsComponent } from './component/story/story-details/story-details.component';
import { ProfileComponent } from './component/profile/profile.component';



const routes: Routes = [
  { path: AppRouter.home, component: HomeComponent },
  { path: '', redirectTo: AppRouter.home, pathMatch: 'full' }, // Optional: Redirect empty path to home
  { path: AppRouter.Stories, component: StoriesComponent },
  { path: AppRouter.ArtCraft, component: ArtCraftComponent },
  { path: AppRouter.MusicPodcast, component: MusicPodcastComponent},
  { path: AppRouter.Login, component: LoginComponent},
  { path: AppRouter.Profil, component: ProfileComponent},
  { path: `${AppRouter.storyDetails}/:id`, component: StoryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
