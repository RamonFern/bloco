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
  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {   

    this.veiculoService.listar().subscribe(veic => {
      this.veiculos = veic
      this.carro = veic
      console.log(this.veiculos)
    })
  }
  }


  

