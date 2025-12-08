import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeadercadastradoComponent } from '../../shared/headercadastrado/headercadastrado.component';
import { FooterComponent } from '../../shared/footer/footer.component';

interface Pesqueiro {
  id: string;
  nome: string;
  avaliacao?: string;
  fotos?: number;
  imagens?: string[];
  endereco?: string;
  descricao?: string;
}

@Component({
  selector: 'app-iniciocliente',
  standalone: true,
  imports: [ FormsModule, CommonModule, HeadercadastradoComponent, FooterComponent],
  templateUrl: './iniciocliente.component.html',
  styleUrl: './iniciocliente.component.css'
})
export class InicioclienteComponent {
  pesqueiros: Pesqueiro[] = [
    {
      id: 'cantareira',
      nome: 'Pesqueiro Cantareira',
      avaliacao: '★ 4.5 (667)',
      imagens: [
        'cantareira1.png',
        'cantareira2.png',
        'cantareira3.png'
      ],
      endereco: 'Av. Luís Carlos Gentile de Laet, 2500 - Tremembé, São Paulo - SP, 02378-000',
      descricao: 'Localizado na zona norte de São Paulo. Rua Luis Carlos Gentille de Laet. 2500 - Contato: 2204-7754'
    },
    {
      id: 'arnaldo',
      nome: 'Pesqueiro do Arnaldo',
      avaliacao: '★ 4.3 (968)',
      imagens: [
        'arnaldo1.png',
        'arnaldo2.png'
      ],
      endereco: 'Av. Cel. Sezefredo Fagundes, 5990 - Jardim Francisco Mendes, São Paulo - SP, 02366-001',
      descricao: 'Espaço verde e natural com lagos para pescar, além de restaurante que serve peixe frito, feijoada e bebidas.'
    }
  ];

  selecionado = this.pesqueiros[0];
  indiceImagem = 0;
  novaAvaliacao = '';


  selecionarPesqueiro(id: string) {
    const encontrado = this.pesqueiros.find(p => p.id === id);
    if (encontrado) {
      this.selecionado = encontrado;
      this.indiceImagem = 0;
    }
  }

  avancarImagem() {
    if (this.selecionado.imagens) {
      this.indiceImagem = (this.indiceImagem + 1) % this.selecionado.imagens.length;
    }
  }

  voltarImagem() {
    if (this.selecionado.imagens) {
      this.indiceImagem =
        (this.indiceImagem - 1 + this.selecionado.imagens.length) %
        this.selecionado.imagens.length;
    }
  }

  mudarImagem(indice: number) {
    this.indiceImagem = indice;
  }

estrelas: number[] = [1,2,3,4,5];
notaSelecionada = 0;
hoverEstrela = 0;

definirNota(valor: number) {
  this.notaSelecionada = valor;
}

hoverNota(valor: number) {
  this.hoverEstrela = valor;
}

enviarAvaliacao() {
  if (this.novaAvaliacao.trim() && this.notaSelecionada > 0) {
    alert(
      `Avaliação enviada!\n\nNota: ${this.notaSelecionada}/5\nComentário: ${this.novaAvaliacao}`
    );
    this.novaAvaliacao = '';
    this.notaSelecionada = 0;
  } else {
    alert('Por favor, escreva uma opinião e selecione uma nota.');
  }
}

}
