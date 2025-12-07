import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  imports: [],
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent {

   constructor(private router: Router) {}

  navigateToInstalar(): void {
    this.router.navigate(['/instalar']);
  }

}
