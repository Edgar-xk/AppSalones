import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {ReservarService} from '../services/reservar/reservar.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  FechaSeleccionada: Date;
  HoraInicio;
  HoraFin;
  fecha: Date
  fechaFormateadaI: string;
  fechaFormateadaF: string;
  constructor(private alertController: AlertController,reservarService:ReservarService) {
    this.fecha = new Date();
    console.log((this.fecha.getHours() + 1) + ':' + this.fecha.getMinutes());


    this.fechaFormateadaI = "2022-10-07T" + (this.fecha.getHours()<10?"0"+this.fecha.getHours():this.fecha.getHours()) + ":" + (this.fecha.getMinutes()<10?"0"+this.fecha.getMinutes():this.fecha.getMinutes()) + ":00-23:00";
    this.fechaFormateadaF = "2022-10-07T" + (this.fecha.getHours()+1<10?"0"+this.fecha.getHours():this.fecha.getHours()) + ":" + (this.fecha.getMinutes()<10?"0"+this.fecha.getMinutes():this.fecha.getMinutes()) + ":00-23:00";

  }
  ngOnInit() {

  }



  async InfoCodigo() {
    await this.VerificarOcupacion();
    const alert = await this.alertController.create({
      header: 'Codigo: 51518',
      message: "Guarde este codigo para realizar modificaciones",
      buttons: [

        {
          text: 'OK',
          role: 'confirm'

        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

  }

  async VerificarOcupacion() {
    if ((<HTMLInputElement>document.getElementById("fecha")).value == undefined) {
      const alert = await this.alertController.create({
        header: 'Error ',
        message: "Seleccione fecha",
        buttons: [

          {
            text: 'OK',
            role: 'confirm'

          },
        ],
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
    } else {


      //llamar servicio de consultar datos
      






      

      console.log((<HTMLInputElement>document.getElementById("fecha")).value);
      console.log((<HTMLInputElement>document.getElementById("datetime")).value);

    }



  }
}
