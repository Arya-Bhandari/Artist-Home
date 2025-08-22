import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPodcastComponent } from './music-podcast.component';

describe('MusicPodcastComponent', () => {
  let component: MusicPodcastComponent;
  let fixture: ComponentFixture<MusicPodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicPodcastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
