import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Produto } from 'src/models/Produto';

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.scss'],
})
export class ModalProdutoComponent  implements OnInit {

  produtoAtual: Produto = new Produto();
  constructor( private modalProduto: ModalController) { }

  ngOnInit() {}

  cancel() {
    this.modalProduto.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalProduto.dismiss({
      dados: this.produtoAtual
    });
  }
}
