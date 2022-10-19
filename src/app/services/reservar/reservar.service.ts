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





/*
    let ejemploR = [{
      id: "1",
      Reservo: "Luis Marquez",
      Grupo: "Valientes cn Cristo",
      Fecha: "2022-10-10",
      InicioR: "20:35",
      FinR: "23:30"

    },
    {
      id: "2",
      Reservo: "Carlos Suarez",
      Grupo: "MIRAC",
      Fecha: "2022-10-10",
      InicioR: "09:30",
      FinR: "11:30"

    },
    {
      id: "3",
      Reservo: "Jorge Negrete",
      Grupo: "P.Familiar",
      Fecha: "2022-10-05",
      InicioR: "13:30",
      FinR: "14:30"
    },{
      id: "4",
      Reservo: "Enrique Saldivar",
      Grupo: "Acts",
      Fecha: "2022-10-20",
      InicioR: "20:35",
      FinR: "23:30"

    },
    {
      id: "5",
      Reservo: "Ulises Lomelí",
      Grupo: "Esmahí",
      Fecha: "2022-10-30",
      InicioR: "18:30",
      FinR: "19:00"

    },
    {
      id: "6",
      Reservo: "Mayra ",
      Grupo: "Kairós",
      Fecha: "2022-10-22",
      InicioR: "13:30",
      FinR: "14:30"
    }
    
    ]

    return ejemploR;*/
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
}
