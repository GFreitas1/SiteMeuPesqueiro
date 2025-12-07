import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginclienteComponent } from './login/logincliente/logincliente.component';
import { CadastroclienteComponent } from './login/cadastrocliente/cadastrocliente.component';
import { CadastropropComponent } from './login/cadastroprop/cadastroprop.component';
import { LoginpropComponent } from './login/loginprop/loginprop.component';
import { EsqueceusenhaComponent } from './login/esqueceusenha/esqueceusenha.component';
import { PagamentoComponent } from './prop/pagamento/pagamento.component';
import { InstalarComponent } from './prop/instalar/instalar.component';
import { InicioclienteComponent } from './cliente/iniciocliente/iniciocliente.component';
import { LgpdComponent } from './pages/lgpd/lgpd.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'logincliente', component: LoginclienteComponent},
  { path: 'cadastrocliente', component: CadastroclienteComponent},
  { path: 'loginprop', component: LoginpropComponent},
  { path: 'cadastroprop', component: CadastropropComponent},
  { path: 'esqueceusenha', component: EsqueceusenhaComponent},
  { path: 'pagamento', component: PagamentoComponent},
  { path: 'instalar', component: InstalarComponent},
  { path: 'iniciocliente', component: InicioclienteComponent},
  { path: 'lgpd', component: LgpdComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
