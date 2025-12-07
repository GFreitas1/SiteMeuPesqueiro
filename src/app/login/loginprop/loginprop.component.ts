import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincliente',
  imports: [ ReactiveFormsModule],
  templateUrl: './loginprop.component.html',
  styleUrl: './loginprop.component.css'
})
export class LoginpropComponent {
  loginForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]]
      });
    }

    navigateToPagamento() {
      if (this.loginForm.valid) {
        console.log('Dados do formulário:', this.loginForm.value);
        this.router.navigate(['/pagamento']);
      }
    }
    navigateToCadastrarProp(): void {
      this.router.navigate(['/cadastroprop']);
    }
    navigateToEsqueceuSenha(): void {
      this.router.navigate(['/esqueceusenha'])
    }
}
