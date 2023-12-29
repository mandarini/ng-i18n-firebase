import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  selector: 'katastasis-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'katastasis';
  userIsLoggedIn$ = this.authService.userIsLoggedIn();
  password = '';

  constructor(private authService: AuthenticationService) {}

  login() {
    this.authService.login(this.password);
    this.userIsLoggedIn$ = this.authService.userIsLoggedIn();
  }
}
