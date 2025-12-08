import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-cadastroprop',
  imports: [ ReactiveFormsModule, HeaderComponent],
  templateUrl: './cadastroprop.component.html',
  styleUrl: './cadastroprop.component.css'
})
export class CadastropropComponent {
  registrarForm: FormGroup;
  mostrarRequisito = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrarForm = this.fb.group(
      {
        nome: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\u00C0-\\u00FF ]+$')]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmarSenha: ['', [Validators.required]],
        aceitouTermos: [false, Validators.requiredTrue],
      },
      { validators: this.senhasIguaisValidator }
    );
  }

  senhasIguaisValidator(form: AbstractControl) {
    const senha = form.get('senha')?.value;
    const confirmarSenha = form.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { senhasDiferentes: true };
  }

  navigateToPagamento() {
      if (this.registrarForm.valid) {
        console.log('Dados do formulário:', this.registrarForm.value);
        this.router.navigate(['/pagamento']);
      }
  }
  navigateToLoginProp(): void {
    this.router.navigate(['/loginprop']);
  }

  navigateToLgpd(): void {
    this.router.navigate(['/lgpd']);
  }
}
