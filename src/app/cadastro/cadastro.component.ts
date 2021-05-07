import { Veiculo } from './../models/veiculo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  
  carro: Veiculo = new Veiculo('nmr4292', 'moto suzuky', '123123')
  constructor() { }

  ngOnInit(): void {

    
    

  }

}
