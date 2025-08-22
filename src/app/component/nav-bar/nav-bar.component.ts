import { Component } from '@angular/core';
import { AppRouter } from '../../constant/app-route.contant';
// import 

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  
  public Route = AppRouter;
}
