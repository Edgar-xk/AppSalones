import { Component } from '@angular/core';
import { ReservarService } from '../services/reservar/reservar.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  FechaSeleccionada: string;
  salones;
  HoraBusqueda: Number;
  InfoSalones;
  bandera: boolean;
  reservaciones;
  
  InfoReservaciones
  constructor(private reservarService: ReservarService) { }
  ngOnInit() {
    let fechahoy = new Date();
    this.reservaciones = new Array();
    this.FechaSeleccionada = fechahoy.getFullYear() + "-" + (fechahoy.getMonth() + 1) + "-" + fechahoy.getDate();

    // this.HoraBusqueda=23;
    this.bandera = false;



    this.GetSalones();




    // this.IdentificarEstado();
  }


  async GetSalones(){
    this.reservarService.GetSalones().subscribe(data=>{
      this.salones=<Array<any>>data;
      if(this.salones.length>0){
        localStorage.setItem('salones', JSON.stringify(this.salones));
      }
    });
  }

  IdentificarEstado() {

    let fecha = (<HTMLInputElement>document.getElementById("datetime")).value.substring(0, 10);
    let response = this.reservarService.getReservacionesFechaHora(this.FechaSeleccionada, this.HoraBusqueda.toString());
    let salon;
    response.subscribe(data => {
      this.InfoReservaciones=<Array<any>>data;
      this.InfoSalones=new Array();
      this.reservaciones = new Array();
      if(this.InfoReservaciones.length>0){

        
        for (let i = 0; i < this.InfoReservaciones.length; i++) {


          salon=this.ObtenerInfoSalon(this.InfoReservaciones[i].idSalon);
  
          if (!this.bandera) {
            this.reservaciones.push(
              {
                salon:salon,
                info: this.InfoReservaciones[i],
                Estado: 1
              });
          } else {
            this.reservaciones.splice(i, 1,
              {
                salon:salon,
                info: this.InfoReservaciones[i],
                Estado: 1
              });
          }
  
  
  
  
        }
        
        

        console.log(this.reservaciones);

        this.bandera = true;
        this.CompeltarInformacionSalones();
      }else{
        this.CompeltarInformacionSalones();
      }



    });










  }

  ObtenerInfoSalon(idSalon: number){

    
    let bandera=false;
    for(let i = 0; i < this.salones.length; i++){
      if(this.salones[i].id==idSalon){
        if(this.InfoSalones.length>0){
          for(let j = 0; j < this.InfoSalones.length; j++){
            if(this.InfoSalones[j]==idSalon){
              bandera=true;
//              j=this.InfoSalones.length;

            }
            

          }
          if(!bandera){
            this.InfoSalones.push(idSalon);  
          }
        }else{
          this.InfoSalones.push(idSalon);
        }
        
        return {
        'nombre':this.salones[i].nombre,
        'ubicacion':this.salones[i].ubicacion


      }}
    }
  }

  CompeltarInformacionSalones(){

    let bandera;
    for(let i = 0; i < this.salones.length; i++){
      bandera=false;
      for(let j = 0; j < this.InfoSalones.length; j++){
        if(this.InfoSalones[j]==this.salones[i].id){
          bandera=true;
        }
      }
      if(!bandera){
        this.reservaciones.push(
          {
            salon:{
              'nombre':this.salones[i].nombre,
              'ubicacion':this.salones[i].ubicacion
            },
            Estado: 2
          });
      }



    }
  }
}
