import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppRouter } from '../../../constant/app-route.contant';
import { ActivatedRoute } from '@angular/router';
import { storyDetailsResponse } from '../../../response/storyDetails.response';

@Component({
  selector: 'app-story-details',
  standalone: false,
  templateUrl: './story-details.component.html',
  styleUrl: './story-details.component.css',
})
export class StoryDetailsComponent {
  public Route = AppRouter;
  private route = inject(ActivatedRoute);
  private httpClient = inject(HttpClient);
  public storyDetails: storyDetailsResponse = {
    id: 0,
    img: '',
    title: '',
    author: '',
    genre: '',
    year: 0,
    summary: '',
    chapter: 0,
    rating: 0,
  };

  editMode: any = false; //queryParamas
    
  doneButtonOn(): void{
    this.editMode = true;
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      console.log(id, typeof id);
      this.fetchDataById(id);
    }

    this.route.queryParamMap.subscribe(qParam => {
      console.log(qParam.get('editMode'));
      this.editMode = qParam.get('editMode');
    });
  }
  private fetchDataById(id: number) {
    this.httpClient
      .get<storyDetailsResponse[]>('http://localhost:3000/bookDetails')
      .subscribe((stories: storyDetailsResponse[]) => {
        const result = stories.find((val) => val.id == id);
        if (result) {
          this.storyDetails = result;
        }
      });
  }
}
