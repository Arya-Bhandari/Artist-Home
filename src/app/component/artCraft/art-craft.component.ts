import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { artCraftResponse } from '../../response/artCraft.response';

@Component({
  selector: 'app-art-craft',
  standalone: false,
  templateUrl: './art-craft.component.html',
  styleUrl: './art-craft.component.css'
})
export class ArtCraftComponent {
  private HttpClient = inject(HttpClient);
  public artCrafts: artCraftResponse[] = [];


  id: any;
  image: any;
  Name: any;
  Price: any;

  ngOnInit(): void{
    this.fetchData();
  }
  
  private fetchData(){
    this.HttpClient.get<artCraftResponse[]>('http://localhost:3000/artCraft').subscribe((artCraft: artCraftResponse[])=>{
      console.log(artCraft);
      this.artCrafts = artCraft;
    })
  }
}
