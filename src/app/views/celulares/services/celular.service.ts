import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CelularModel } from "../models/celular.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class CelularService {
  //url de su api (backend)
  private API_URL = 'http://localhost:8000/celular'
  constructor(private http: HttpClient) {

  }

  getTodosLosCelulares (): Observable<CelularModel[]> {
    return this.http.get<CelularModel[]>(`${this.API_URL}/traerCelulares`);
  }

  agregarCelular(celular: CelularModel) : Observable<CelularModel> {
    return this.http.post<CelularModel>(`${this.API_URL}/crearCelular`, celular);
  }

  editarCelular(celular: CelularModel) : Observable<CelularModel> {
    return this.http.put<CelularModel>(`${this.API_URL}/editarCelular/${celular._id}`, celular);
  }

  eliminarCelular(idCelular : string) : Observable<CelularModel> {
    console.log(idCelular);
    // return this.http.delete<RecetaModel>(`${this.API_URL}/eliminar/${idReceta}`);
    return this.http.delete<CelularModel>(this.API_URL+'/eliminarCelular/'+idCelular);

  }
}