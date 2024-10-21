import { Component, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { Produto } from 'src/models/Produto';
import { ModalProdutoComponent } from '../modal/modal-produto/modal-produto.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //@ViewChild(IonModal) modal: IonModal;

  listaProdutos: Produto[];
  produtoAtual: Produto = new Produto();

  constructor(private modalProduto: ModalController) {}

  ngOnInit(){
    this.listaProdutos = [];
  }

  onWillDismissEvent(){
    console.log(this.produtoAtual.NomeProduto);
    if(this.produtoAtual.NomeProduto){
      console.log(this.produtoAtual.NomeProduto);
      this.listaProdutos.push(this.produtoAtual);
      this.produtoAtual = new Produto();
    }
    else{
      this.produtoAtual = new Produto();
    }
  }

  cancel() {
    this.modalProduto.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalProduto.dismiss(this.produtoAtual, 'confirm');
  }
  
  removeProduto(nomeProduto: string){
    this.listaProdutos = this.listaProdutos.filter(item => item.NomeProduto != nomeProduto);
  }

  async abrirModal() {
    const modal = await this.modalProduto.create({
      component: ModalProdutoComponent,
    });
    modal.onDidDismiss().then((result) => {
      if (result.data) {
        if(result.data.dados.NomeProduto){
          this.listaProdutos.push(result.data.dados);
        }
      }
    });
    return await modal.present();
  }
}
