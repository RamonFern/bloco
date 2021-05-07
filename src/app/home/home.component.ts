import { VeiculoService } from './../service/veiculo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carro: any
  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {   

    this.carro = this.veiculoService.listar()
  }

  }


  

