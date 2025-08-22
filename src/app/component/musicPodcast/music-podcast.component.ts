import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { musicPodcastResponse } from '../../response/musicPodcast.response';

@Component({
  selector: 'app-music-podcast',
  standalone: false,
  templateUrl: './music-podcast.component.html',
  styleUrl: './music-podcast.component.css'
})
export class MusicPodcastComponent {
  private httpClient= inject(HttpClient)
  public musicPodcast: musicPodcastResponse[] = [];

  id: any;
  image: any;
  Name: any;
  musPod: any;

  ngOnInit(): void{
  this.fetchData();
}

private fetchData(){
  this.httpClient.get<musicPodcastResponse[]>('http://localhost:3003/musicPodcast').subscribe((musPod: musicPodcastResponse[])=>{
    console.log(musPod);
    this.musicPodcast = musPod;
  })
}
}


