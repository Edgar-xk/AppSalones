import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ReservarService } from '../services/reservar/reservar.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  salones;
  nombreReservante: string;
  grupo: string;
  banderaValidacionOcupado: boolean;
  contador: number;

  FechaSeleccionada: Date;
  HoraInicio;
  HoraFin;
  fecha: Date
  fechaFormateadaI: string;
  fechaFormateadaF: string;
  banderOcupado: boolean;
  constructor(private alertController: AlertController, private reservarService: ReservarService) {
    this.GetSalones();
    this.fecha = new Date();
    // console.log((this.fecha.getHours() + 1) + ':' + this.fecha.getMinutes());

    this.contador = 0;
    this.fechaFormateadaI = "2022-10-07T" + (this.fecha.getHours() < 10 ? "0" + this.fecha.getHours() : this.fecha.getHours()) + ":" + (this.fecha.getMinutes() < 10 ? "0" + this.fecha.getMinutes() : this.fecha.getMinutes()) + ":00-23:00";
    this.fechaFormateadaF = "2022-10-07T" + (this.fecha.getHours() + 1 < 10 ? "0" + (this.fecha.getHours() + 1) : this.fecha.getHours() + 1) + ":" + (this.fecha.getMinutes() < 10 ? "0" + this.fecha.getMinutes() : this.fecha.getMinutes()) + ":00-23:00";

  }
  ngOnInit() {
    this.GetSalones();
  }

  async GetSalones() {
    let response = this.reservarService.GetSalones();
    await response.subscribe(async data => {
      this.salones = data;

    });



  }
  CambiarSalonF() {
    if ((this.contador + 1) == this.salones.length) {
      this.contador = 0;
    } else {
      this.contador++;
    }
  }
  CambiarSalonR() {
    if ((this.contador - 1) == -1) {
      this.contador = this.salones.length - 1;
    } else {
      this.contador--;
    }
  }



  async InfoCodigo() {
    // console.log("Guardar");



    this.VerificarOcupacion().then(async () => {
      //console.log(this.banderaValidacionOcupado);
      if (this.banderaValidacionOcupado && await this.VerificarInformacion()) {
        let codigo: number = Math.floor(Math.random() * 5000) + 1;

        const alert = await this.alertController.create({
          header: 'Codigo:' + codigo,
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





        //Llamar servicio de guardado de datos


        let fecha = (<HTMLInputElement>document.getElementById("fecha")).value.substring(0, 10);
        let horaI = (<HTMLInputElement>document.getElementById("datetime2")).value.substring(11, 16);
        let horaF = (<HTMLInputElement>document.getElementById("datetime1")).value.substring(11, 16)
        //console.log(fecha);
        let result = this.reservarService.Guardar(this.nombreReservante, fecha, horaI, horaF, this.grupo, this.salones[this.contador].id, codigo);

        (await result).subscribe(async data => {
          if (data) {
            const alert1 = await this.alertController.create({
              header: 'Reservación exitosa',

              buttons: [

                {
                  text: 'OK',
                  role: 'confirm'

                },
              ],
            });
            await alert1.present();

            const { role } = await alert1.onDidDismiss();
            this.nombreReservante = "";
            this.grupo = "";
            (<HTMLInputElement>document.getElementById("fecha")).value = "";
          }
        });


      }

    });















  }

  async VerificarOcupacion() {

    return new Promise<void>(async (resolve, reject) => {

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
        return false;
      } else {

        // console.log("Verificación de occuación");
        //llamar servicio de consultar datos
        let fecha = (<HTMLInputElement>document.getElementById("fecha")).value.substring(0, 10);

        let response = await this.reservarService.getReservacionesSalonFecha(this.salones[this.contador].id, fecha);

        try {
          response.subscribe(async data => {
            let reservaciones = <Array<any>>data;
            //  console.log(reservaciones.length);
            if (reservaciones.length == 0) {
              this.banderaValidacionOcupado = true;
              resolve();
            } else {






              //Verificación de ocupación para la entrada. 
              let horas = Number.parseInt((<HTMLInputElement>document.getElementById("datetime2")).value.substring(11, 13));
              let minutos = Number.parseInt((<HTMLInputElement>document.getElementById("datetime2")).value.substring(14, 16));
              let horasF = Number.parseInt((<HTMLInputElement>document.getElementById("datetime1")).value.substring(11, 13));
              let minutosF = Number.parseInt((<HTMLInputElement>document.getElementById("datetime1")).value.substring(14, 16));

              if (this.ValidarHoras(horas, minutos, horasF, minutosF)) {

                let banderOcupadoFin = false;

                this.banderOcupado = false;
                for (let i = 0; i < reservaciones.length; i++) {

                  //hora==HoraReservacion y minutos>=HoraReservada  <------|HoraSeleccioanda----------HoraSeleccioanda|
                  if (horas == Number.parseInt(reservaciones[i].horaI.substring(0, 2)) && minutos >= Number.parseInt(reservaciones[i].horaI.substring(3, 5))) {
                    this.banderOcupado = true;
                  }
                  //hora>HoraReservacion y hora<=HoraReservada  |HoraSeleccioanda----------HoraSeleccioanda|------->
                  if (horas > Number.parseInt(reservaciones[i].horaI.substring(0, 2)) && horas < Number.parseInt(reservaciones[i].horaF.substring(0, 2))) {
                    this.banderOcupado = true;
                  }
                  //hora==HoraReservacionFin y minutos<minutosDeHoraReservada  |HoraSeleccioanda----------HoraSeleccioanda|------->
                  if (horas == Number.parseInt(reservaciones[i].horaF.substring(0, 2)) && minutos < Number.parseInt(reservaciones[i].horaF.substring(3, 5))) {
                    this.banderOcupado = true;
                  }


                  //Verificación para la hora de salida.


                  if (!this.banderOcupado)
                    if (horas >= Number.parseInt(reservaciones[i].horaF.substring(0, 2))) {

                    } else {
                      //hora==HoraReservacion y minutos>=HoraReservada  <------|HoraSeleccioanda
                      if (horasF == Number.parseInt(reservaciones[i].horaI.substring(0, 2)) && minutosF > Number.parseInt(reservaciones[i].horaI.substring(3, 5))) {
                        banderOcupadoFin = true;
                      }

                      if (horasF > Number.parseInt(reservaciones[i].horaI.substring(0, 2))) {
                        banderOcupadoFin = true;
                      }


                    }

                }

















                if (this.banderOcupado) {
                  document.getElementById("InicioOcupado").classList.remove("d-none");
                } else {
                  !document.getElementById("InicioOcupado").classList.contains("d-none") ? document.getElementById("InicioOcupado").classList.add("d-none") : document.getElementById("InicioOcupado").classList;

                }


                if (banderOcupadoFin) {
                  document.getElementById("FinOcupado").classList.remove("d-none");
                } else {
                  !document.getElementById("FinOcupado").classList.contains("d-none") ? document.getElementById("FinOcupado").classList.add("d-none") : document.getElementById("FinOcupado").classList;

                }

                !banderOcupadoFin && !this.banderOcupado ? this.banderaValidacionOcupado = true : this.banderaValidacionOcupado = false;
                resolve();
              }else{
                const alert1 = await this.alertController.create({
                  header: 'Error',
                  message: 'Hora de finalización menor o igual a la hora de Inicio.',
                  buttons: [
    
                    {
                      text: 'OK',
                      role: 'confirm'
    
                    },
                  ],
                });
                await alert1.present();
    
                const { role } = await alert1.onDidDismiss();
                this.banderaValidacionOcupado = false
                resolve();
              }
            }
          });
        } catch (e) {
          //  console.log(e);
          resolve();
        }

      }


    });











  }

  ValidarHoras(horaI, minutosI, horaF, minutosF) {
    if (horaI > horaF) {
      return false
    }
    if (horaI == horaF && minutosI >= minutosF) {
      return false;
    }
    return true;


  }
  async VerificarInformacion() {
    if (this.grupo == "" || this.grupo == undefined && this.nombreReservante == "" || this.nombreReservante == undefined) {

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
      return false;
    } else return true;

  }
}
