import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ModificacionesServiceService {

  constructor(private http:HttpClient) { }

  async AgregarSalon(nombre: string,ubicacion: string){

    var formData = new FormData();
    formData.append("nombre",nombre);
    formData.append("ubicacion",ubicacion);

    //let response = this.http.post<any>("http://localhost:4000/NuevoEspacio", { data: info });
    
    return  await  this.http.post<any>("http://localhost:80/AppiesAppSalones/AgregarSalon.php",formData);
    
  }
}
