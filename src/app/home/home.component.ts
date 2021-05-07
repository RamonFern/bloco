import { Veiculo } from './../models/veiculo';
import { VeiculoService } from './../service/veiculo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carro: any
  veiculos: Array<Veiculo> = []
  carregarLoading: boolean = false
  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {   

    this.veiculoService.listar().subscribe(veic => {
      setTimeout(() =>{
      this.carregarLoading = true  
      this.veiculos = veic
    }, 100)
    })
  }

  excluirVeiculo = (id: any) => {
    this.veiculoService.excluirVeiculo(id).subscribe(
      success => console.log("Deletado com sucessso!"),
      error => console.log("Não foi possivel Excluir este veiculo!..."),
      () => console.log("Requisição completa")
    )
    this.ngOnInit();
  }
  
  }


  

