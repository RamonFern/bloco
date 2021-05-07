import { VeiculoService } from './../service/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Veiculo } from './../models/veiculo';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  
  veic: Veiculo = new Veiculo(0,'', '', '')
  constructor(
    private router: Router,
    private veiculoService: VeiculoService
    ) { }

  ngOnInit(): void {
  }

  inserirVeiculo = () => {
    this.veiculoService.adicionarVeiculo(this.veic).subscribe(
      success => console.log("Salvo com sucessso"),
      error => console.log("Não foi possivel Salvar. ERRO!"),
      () => console.log('Requisição completa'))
      this.router.navigate(['home'])
  }
  

}
