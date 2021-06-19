import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  *  as  data  from  'src/assets/datos/instrumentos.json';
import { BASE_ENDPOINT } from '../config/config';
import { Instrumento } from '../Entity/Instrumento';
import { CommonService } from './common.service';


@Injectable({
  providedIn: 'root'
})
export class InstrumentService extends CommonService<Instrumento>{

  constructor(http: HttpClient) {
    super(http);
   }

  protected baseEndPoint = BASE_ENDPOINT + '/instrumento';

  public crearConFoto(instrumento: Instrumento, foto: File): Observable<Instrumento>{
    const formData = new FormData();
    formData.append('instrument', instrumento.instrument);
    formData.append('marca', instrumento.marca);
    formData.append('modelo', instrumento.modelo);
    formData.append('precio', instrumento.precio.toString());
    formData.append('costoEnvio', instrumento.costoEnvio.toString());
    formData.append('cantidadVendida', instrumento.cantidadVendida.toString());
    formData.append('descripcion', instrumento.descripcion);
    formData.append('archivo',  foto);

    return this.http.post<Instrumento>(this.baseEndPoint +'/crear-con-foto', formData);
  }

  public editarConFoto(instrumento: Instrumento, foto: File): Observable<Instrumento>{
    const formData = new FormData();
    formData.append('instrument', instrumento.instrument);
    formData.append('marca', instrumento.marca);
    formData.append('modelo', instrumento.modelo);
    formData.append('precio', instrumento.precio.toString());
    formData.append('costoEnvio', instrumento.costoEnvio.toString());
    formData.append('cantidadVendida', instrumento.cantidadVendida.toString());
    formData.append('descripcion', instrumento.descripcion);
    formData.append('archivo',  foto);
    return this.http.put<Instrumento>(`${this.baseEndPoint}/editar-con-foto/${instrumento.id}`, formData);
  }

}
