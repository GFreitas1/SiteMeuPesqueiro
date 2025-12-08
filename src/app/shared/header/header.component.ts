import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  imglogo: string = "Logo.png";

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

}
