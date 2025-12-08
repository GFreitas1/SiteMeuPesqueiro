import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeadercadastradoComponent } from '../../shared/headercadastrado/headercadastrado.component';

@Component({
  selector: 'app-pagamento',
  imports: [HeadercadastradoComponent],
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent {

   constructor(private router: Router) {}

  navigateToInstalar(): void {
    this.router.navigate(['/instalar']);
  }

}
