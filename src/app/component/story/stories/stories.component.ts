import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { storyResponse } from '../../../response/story.response';
import { AppRouter } from '../../../constant/app-route.contant';
import { storyDetailsResponse } from '../../../response/storyDetails.response';

@Component({
  selector: 'app-stories',
  standalone: false,
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent {
  public Route = AppRouter;
  private httpClient = inject(HttpClient);
  public stories: storyResponse[] = [];

  id:any;
  image: any;
  bookname: any;
  Description: any;


  ngOnInit(): void{
    this.fetchData();
  }
  private fetchData() {
    this.httpClient.get<storyResponse[]>('http://localhost:3001/story').subscribe((story: storyResponse[])=>{
      console.log(story);
      this.stories = story; 
    })
  }
}
