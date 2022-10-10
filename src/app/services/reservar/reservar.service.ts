import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservarService {
  

  constructor() { }


  public static getReservacionesSalonFecha(idSalon: number, fecha: string) {
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
      Reservo: "Luis Marquez",
      Grupo: "Valientes cn Cristo",
      Fecha: "2022-10-10",
      InicioR: "09:30",
      FinR: "11:30"

    },
    {
      id: "1",
      Reservo: "Luis Marquez",
      Grupo: "Valientes cn Cristo",
      Fecha: "2022-10-10",
      InicioR: "13:30",
      FinR: "14:30"
    }
    
    ]

    return ejemploR;
  }
}
