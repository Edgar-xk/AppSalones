import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservarService {
  
  

  constructor(private http:HttpClient) { }


  public  async getReservacionesSalonFecha(idSalon: number, fecha: string) {

    let respuesta= await this.http.get("http://localhost:80/AppiesAppSalones/GetReservacionesSalonFecha.php?idSalon="+idSalon+"&fecha="+fecha);

    return respuesta;




  }

  public GetSalones(){
    
    return this.http.get<any>("http://localhost:80/AppiesAppSalones/ObtenerSalones.php");
  };

  public async Guardar(nombre:string,fecha:string,horaI:string,horaF:string,grupo:string,idSalon:number,codigo:number){
    var formData = new FormData();
    formData.append("nombre",nombre);
    formData.append("fecha",fecha);
    formData.append("horaI",horaI);
    formData.append("horaF",horaF);
    formData.append("grupo",grupo);
    formData.append("idSalon",idSalon.toString());
    formData.append("codigo",codigo.toString());

    
    
    return  await  this.http.post<any>("http://localhost:80/AppiesAppSalones/NuevaReservacion.php",formData);
  }

  public getReservacionesSalonMes(idSalon:number,mes:string){

    return this.http.get<any>("http://localhost:80/AppiesAppSalones/ReservacionesSalonMes.php?idSalon="+idSalon+"&mes="+mes);


  }


  public getReservacionesFechaHora(fecha:string,hora:string) {
    return this.http.get("http://localhost:80/AppiesAppSalones/ReservacionesFechaHora.php?fecha="+fecha+"&hora="+hora);

  }
}
