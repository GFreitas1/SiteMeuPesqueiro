import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincliente',
  imports: [ ReactiveFormsModule],
  templateUrl: './logincliente.component.html',
  styleUrl: './logincliente.component.css'
})
export class LoginclienteComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

    navigateToInicioCliente() {
    if (this.loginForm.valid) {
      console.log('Dados do formulário:', this.loginForm.value);
      this.router.navigate(['/iniciocliente']);
    }
  }
    navigateToCadastrarCliente(): void {
    this.router.navigate(['/cadastrocliente']);
  }
  navigateToEsqueceuSenha(): void {
    this.router.navigate(['/esqueceusenha'])
  }
  
}
