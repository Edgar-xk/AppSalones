import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModificacionesServiceService } from '../services/Modificaciones/modificaciones-service.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  nombre: string;
  ubicacion: string;
  constructor(private modificaciones: ModificacionesServiceService, private alertController: AlertController) { }

  async AgregarSalon() {
    if (this.nombre == "" || this.nombre == undefined || this.ubicacion == "" || this.ubicacion == undefined) {

      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: "Verifique que todos los campos esten cubiertos",
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

      let respuesta = await this.modificaciones.AgregarSalon(this.nombre, this.ubicacion);

      respuesta.subscribe(async data => {
        if (data == 1){
          const alert = await this.alertController.create({
            header: 'Registro correcto',
           
            buttons: [
    
              {
                text: 'OK',
                role: 'confirm'
    
              },
            ],
          });
    
          await alert.present();
    
          const { role } = await alert.onDidDismiss();

          this.nombre="";
          this.ubicacion="";
        }else{
          const alert = await this.alertController.create({
            header: 'Error',
            
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
      });





    }
  }

}
