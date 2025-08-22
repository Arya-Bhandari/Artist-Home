import { Component } from '@angular/core';
import { AppRouter } from '../../constant/app-route.contant';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public Route = AppRouter;
}
