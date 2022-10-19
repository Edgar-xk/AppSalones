import { Component, OnInit, ViewChild } from '@angular/core';
import {IonModal, ToastController} from '@ionic/angular'
import { OverlayEventDetail } from '@ionic/core/components';

import { ReservarService } from '../services/reservar/reservar.service'
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  @ViewChild(IonModal)modal: IonModal;

  mes:number;
  anio:number;
  dias: string[];
  diaString:string;
  reservaciones;
  fechaCalendarioMin: string;
  fechaCalendarioMax: string;
  dia:number;
  ReservacionesOrdenadas;
  constructor(private toastController: ToastController, private reservarService:ReservarService) {
    this.dias = new Array<string>();
    // this.dia=3;
    this.reservaciones = this.reservarService.getReservacionesSalonFecha(1, "");
    this.ColocarFechas()
  }

  ngOnInit() {


  }
  ColocarFechas() {
    this.mes = ((new Date()).getMonth()) + 1;
    this.anio= ((new Date()).getFullYear());
    this.fechaCalendarioMin = "2022-" + this.mes + "-01T00:00:00";
    this.fechaCalendarioMax = "2022-" + this.mes + "-01T00:00:00";
    let mesR: number;
    let diaR: number;
    for (let i = 0; i < this.reservaciones.length; i++) {
      
      mesR = Number.parseInt((this.reservaciones[i].Fecha).substring(5, 7));
      if (mesR == this.mes) {
      
      //  diaR = Number.parseInt(().substring(8, 10));
        this.dias.push(this.reservaciones[i].Fecha);
      }
    }
    //this.diaString="'"+this.dias+"'";
    //console.log(this.dias.toString());
   //document.getElementById("dateTime").value=this.dias.toString();
  }

  ConsultarDatTIme(){
    
  }

  OrdenarReservaciones(){
    this.ReservacionesOrdenadas= new Array();
    let fecha:number;
    let fecha1:number;
    let bandera=false;
    //console.log(this.reservaciones.length);
    for(let i=0; i<this.reservaciones.length;i++){
      bandera=false;
      if(i==0){
      //  console.log("ReservacionesOrdenadas.lenght=="+this.ReservacionesOrdenadas.length);
        this.ReservacionesOrdenadas.push(this.reservaciones[i]);
      }
      else{
        
        fecha1=Number.parseInt(this.reservaciones[i].Fecha.substring(8,10));
       // console.log(this.ReservacionesOrdenadas.length);
        
        for(let q=0; q<this.ReservacionesOrdenadas.length;q++){
          
          fecha= Number.parseInt(this.ReservacionesOrdenadas[q].Fecha.substring(8,10));
          

         
         
          if(fecha1<=fecha){
            
            this.ReservacionesOrdenadas.splice(q,0,this.reservaciones[i]);
            bandera=true;
            
            break;
           // if(q==6)break;
          }
          
          

          
          
        
        }
        if(!bandera){
          this.ReservacionesOrdenadas.push(this.reservaciones[i]);
        }
        
        
        
      }
      
    }
  //  console.log(this.ReservacionesOrdenadas);

  }


  




  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }





  //Funciones Modal 
  cancel(){
    this.modal.dismiss(null,'cancel');

  }
  confirm(){
    this.modal.dismiss('confirm');
  }
  onWillDismiss(){
    const ev=event as CustomEvent<OverlayEventDetail<string>>;
    if(ev.detail.role==='confirm'){

    }
  }



}
