import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  selector: 'deeplinktest-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  password = '';

  constructor(private authService: AuthenticationService) {}

  login() {
    this.authService.login();
  }
}
