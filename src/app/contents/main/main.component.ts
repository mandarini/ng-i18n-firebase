import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'deeplinktest-main',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigate(targetRoute: string) {
    this.router.navigate([targetRoute], { relativeTo: this.route });
  }
}
