import { Component } from '@angular/core';
import { AppRouter } from '../../constant/app-route.contant';
import { Route, Routes } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  public Route = AppRouter;
  editMode:any = false;

  userProfile: FormGroup = new FormGroup({
    userName: new FormControl(''),
    userId: new FormControl('0')
  })
}
