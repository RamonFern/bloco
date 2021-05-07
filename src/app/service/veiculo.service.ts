import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Veiculo } from './../models/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private readonly API = `${environment.API}veiculos`
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Veiculo[]>(`${this.API}`)
  }

  excluirVeiculo(id: any){
    return this.http.delete(`${this.API}/${id}`)
  }
}
