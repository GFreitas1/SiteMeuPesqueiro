import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-cadastrocliente',
  imports: [ ReactiveFormsModule, HeaderComponent],
  templateUrl: './cadastrocliente.component.html',
  styleUrl: './cadastrocliente.component.css'
})
export class CadastroclienteComponent {
  registrarForm: FormGroup;
  mostrarRequisito = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrarForm = this.fb.group(
      {
        nome: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\u00C0-\\u00FF ]+$')]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmarSenha: ['', [Validators.required]],
        aceitouTermos: [false, Validators.requiredTrue]
      },
      { validators: this.senhasIguaisValidator }
    );
  }

  senhasIguaisValidator(form: AbstractControl) {
    const senha = form.get('senha')?.value;
    const confirmarSenha = form.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { senhasDiferentes: true };
  }

  navigateToInicioCliente() {
    if (this.registrarForm.valid) {
      console.log('Dados do formulário:', this.registrarForm.value);
      this.router.navigate(['/iniciocliente']);
    }
  }

  navigateToLoginCliente(): void {
    this.router.navigate(['/logincliente']);
  }

  navigateToLgpd(): void {
    this.router.navigate(['/lgpd']);
  }

}
