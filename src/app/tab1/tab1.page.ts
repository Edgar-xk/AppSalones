import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  salones;
  HoraBusqueda:Number;
  InfoSalones;
  bandera:boolean;
  constructor() {}
  ngOnInit() {

   // this.HoraBusqueda=23;
    this.bandera=false;
     this.InfoSalones=[
     {
          id:"1",
          Nombre:"Salón Madre Auxiliadora",
          Ubicacion:"Madre Auxiliadora",
          Reservo:"Luis Marquez",
          Grupo:"Valientes cn Cristo",
          InicioR:20,
          FinR:23
  
        }
      
      ,
      {
        id:"2",
        Nombre:"Salón Juan Pablo Segundo",
        Ubicacion:"San Ignacio",
        Reservo:"",
        Grupo:"",
        InicioR:0,
        FinR:0

      }
    ];
   // this.IdentificarEstado();
  }


  IdentificarEstado(){
    
    console.log(this.HoraBusqueda);
    console.log((<HTMLInputElement>document.getElementById("selectHora")).value);
    this.salones=new Array();
    for(let i=0;i<this.InfoSalones.length;i++){

      if(!this.bandera){
        this.salones.push(
          {
            info: this.InfoSalones[i],
            Estado:this.InfoSalones[i].InicioR==this.HoraBusqueda||this.InfoSalones[i].FinR>this.HoraBusqueda&&this.InfoSalones[i].InicioR<=this.HoraBusqueda?1:2
          });
      }else{
        this.salones.splice(i,1,
          {
            info: this.InfoSalones[i],
            Estado:this.InfoSalones[i].InicioR==this.HoraBusqueda||this.InfoSalones[i].FinR>this.HoraBusqueda&&this.InfoSalones[i].InicioR<=this.HoraBusqueda?1:2
          });
      }

      
        
       
    }
    console.log(this.salones);
    this.bandera=true;
  }

}
