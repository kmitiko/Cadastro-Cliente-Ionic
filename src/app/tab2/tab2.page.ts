import { Component } from '@angular/core';
import { Cliente } from '../model/cliente.model';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  clientes!: Cliente[];

  constructor(private service: ClienteService) {
    this.listaClientes();
  }

  public ionicViewWillEnter(): void{}

  listaClientes(){
    this.service.getClientes().subscribe({
      next:(result) => this.clientes = result,
        error:(err) => console.error(err),

      });
    }


}
