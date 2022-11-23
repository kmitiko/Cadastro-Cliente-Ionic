import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Constants } from '../model/constantes';
import { Cliente } from '../model/cliente.model';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  clienteForm!: FormGroup;
  statusCadastro!: string;

  constructor(private formBuilder: FormBuilder, private route: Router, private clienteService: ClienteService) {}
  ngOnInit(): void {
    this.clienteForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15),]],
      logradouro: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      numero: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5),Validators.pattern(/^[0-9]+$/)]],
      bairro: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      cidade: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],

    });
  }
    addCliente() {
      const newCliente = this.clienteForm.getRawValue()as Cliente;

      this.clienteService.insertCliente(newCliente)
        .subscribe({
        next: (result:any) => {
        this.clienteForm.reset();
        console.info('[AddCliente]', result);
        this.statusCadastro = Constants.MSG_SUCESSO;
        this.route.navigateByUrl('/tabs/tabs2');
        },
        error: (error:any) => {console.log(error)}
        })




    }

  }




