import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
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
  
  InfoReservaciones;

  CodigoReservacion:number;




  constructor(private reservarService:ReservarService, private alertController: AlertController,private toastController: ToastController) { }
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
        
        

       // console.log(this.reservaciones);

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

  async Eliminar(index: number) {
    const alert = await this.alertController.create({
      header: 'Código de reservación',
      message: 'Ingrese el código que se le brindó al registrar la reservación',
      inputs: [
        {
          name:"codigo",
          placeholder: 'Codigo de modificaciones',
          
        },
      
      ],
      buttons:[
        {
          text:'Eliminar',
          handler:async (data)=>{
           /* console.log("Eliminar");
            console.log("Data: "+data.codigo);
            console.log("Codigo: "+this.InfoReservaciones[index].codigo);*/
            this.CodigoReservacion=data.codigo;
            if(this.CodigoReservacion==this.reservaciones[index].info.codigo){

              this.reservarService.EliminarReservacion(this.reservaciones[index].info.id).subscribe(data=>{
                //console.log(data);
                this.IdentificarEstado();
              });
            }else{
              const toast = await this.toastController.create({
                message: 'Código incorrecto',
                duration: 1500,
                position: 'bottom'
              });
          
              await toast.present();
            }
          }
        }

      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

    
  
  }

  
  doRefresh(event){
    setTimeout(() => {
      
      location.reload();
      event.target.complete();
    }, 1000);
  }


}
