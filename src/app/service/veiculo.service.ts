import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor() { }

  listar(){
    return ['Mercedes', 'Jipe', 'Celta', 'Honda']
  }
}
