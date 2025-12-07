import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  navigateToCadastroCliente(): void {
    this.router.navigate(['/cadastrocliente']);
  }

  navigateToCadastroProp(): void {
    this.router.navigate(['/cadastroprop']);
  }
}
