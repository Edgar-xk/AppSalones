"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1835],{1835:(q,h,l)=>{l.r(h),l.d(h,{Tab1PageModule:()=>I});var i=l(5056),u=l(9808),g=l(4182),f=l(581),_=l(8808),d=l(655),e=l(9863),p=l(3442);function m(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"ion-datetime",24),e.NdJ("ngModelChange",function(t){e.CHM(n);const s=e.oxw();return e.KtG(s.FechaSeleccionada=t)})("ionChange",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.IdentificarEstado())}),e.qZA()}if(2&o){const n=e.oxw();e.Q6J("showDefaultButtons",!0)("ngModel",n.FechaSeleccionada)}}function T(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"ion-icon",27),e.NdJ("click",function(){e.CHM(n);const t=e.oxw().index,s=e.oxw(2);return e.KtG(s.Eliminar(t))}),e.qZA()}}function Z(o,r){if(1&o&&(e.TgZ(0,"ion-item")(1,"ion-label")(2,"h2"),e._uU(3,"Reserv\xf3"),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.qZA()()()),2&o){const n=e.oxw().$implicit;e.xp6(5),e.Oqu(n.info.persona)}}function v(o,r){if(1&o&&(e.TgZ(0,"ion-item")(1,"ion-label")(2,"h2"),e._uU(3,"Grupo"),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.qZA()()()),2&o){const n=e.oxw().$implicit;e.xp6(5),e.Oqu(n.info.grupo)}}function b(o,r){if(1&o&&(e.TgZ(0,"ion-item")(1,"ion-label")(2,"h2"),e._uU(3,"Duraci\xf3n"),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.qZA()()()),2&o){const n=e.oxw().$implicit;e.xp6(5),e.AsE("",n.info.horaI,":00HRS - ",n.info.horaF,":00HRS")}}function S(o,r){if(1&o&&(e.TgZ(0,"ion-row")(1,"ion-col")(2,"ion-card")(3,"ion-card-header"),e.YNc(4,T,1,0,"ion-icon",26),e.TgZ(5,"ion-card-title"),e._uU(6),e.qZA(),e.TgZ(7,"ion-card-subtitle"),e._uU(8),e.qZA()(),e.TgZ(9,"ion-card-content")(10,"ion-list")(11,"ion-item")(12,"ion-label")(13,"h2"),e._uU(14,"Estado"),e.qZA(),e.TgZ(15,"p"),e._uU(16),e.qZA()()(),e.YNc(17,Z,6,1,"ion-item",23),e.YNc(18,v,6,1,"ion-item",23),e.YNc(19,b,6,2,"ion-item",23),e.qZA()()()()()),2&o){const n=r.$implicit;e.xp6(4),e.Q6J("ngIf",1==n.Estado),e.xp6(2),e.Oqu(n.salon.nombre),e.xp6(2),e.Oqu(n.salon.ubicacion),e.xp6(8),e.Oqu(1==n.Estado?"Ocupado":"Libre"),e.xp6(1),e.Q6J("ngIf",1==n.Estado),e.xp6(1),e.Q6J("ngIf",1==n.Estado),e.xp6(1),e.Q6J("ngIf",1==n.Estado)}}function A(o,r){if(1&o&&(e.TgZ(0,"ion-grid"),e.YNc(1,S,20,7,"ion-row",25),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.reservaciones)}}const C=[{path:"",component:(()=>{class o{constructor(n,a,t){this.reservarService=n,this.alertController=a,this.toastController=t}ngOnInit(){let n=new Date;this.reservaciones=new Array,this.FechaSeleccionada=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate(),this.bandera=!1,this.GetSalones()}GetSalones(){return(0,d.mG)(this,void 0,void 0,function*(){this.reservarService.GetSalones().subscribe(n=>{this.salones=n,this.salones.length>0&&localStorage.setItem("salones",JSON.stringify(this.salones))})})}IdentificarEstado(){let t;document.getElementById("datetime").value.substring(0,10),this.reservarService.getReservacionesFechaHora(this.FechaSeleccionada,this.HoraBusqueda.toString()).subscribe(s=>{if(this.InfoReservaciones=s,this.InfoSalones=new Array,this.reservaciones=new Array,this.InfoReservaciones.length>0){for(let c=0;c<this.InfoReservaciones.length;c++)t=this.ObtenerInfoSalon(this.InfoReservaciones[c].idSalon),this.bandera?this.reservaciones.splice(c,1,{salon:t,info:this.InfoReservaciones[c],Estado:1}):this.reservaciones.push({salon:t,info:this.InfoReservaciones[c],Estado:1});this.bandera=!0,this.CompeltarInformacionSalones()}else this.CompeltarInformacionSalones()})}ObtenerInfoSalon(n){let a=!1;for(let t=0;t<this.salones.length;t++)if(this.salones[t].id==n){if(this.InfoSalones.length>0){for(let s=0;s<this.InfoSalones.length;s++)this.InfoSalones[s]==n&&(a=!0);a||this.InfoSalones.push(n)}else this.InfoSalones.push(n);return{nombre:this.salones[t].nombre,ubicacion:this.salones[t].ubicacion}}}CompeltarInformacionSalones(){let n;for(let a=0;a<this.salones.length;a++){n=!1;for(let t=0;t<this.InfoSalones.length;t++)this.InfoSalones[t]==this.salones[a].id&&(n=!0);n||this.reservaciones.push({salon:{nombre:this.salones[a].nombre,ubicacion:this.salones[a].ubicacion},Estado:2})}}Eliminar(n){return(0,d.mG)(this,void 0,void 0,function*(){const a=yield this.alertController.create({header:"C\xf3digo de reservaci\xf3n",message:"Ingrese el c\xf3digo que se le brind\xf3 al registrar la reservaci\xf3n",inputs:[{name:"codigo",placeholder:"Codigo de modificaciones"}],buttons:[{text:"Eliminar",handler:s=>(0,d.mG)(this,void 0,void 0,function*(){this.CodigoReservacion=s.codigo,this.CodigoReservacion==this.reservaciones[n].info.codigo?this.reservarService.EliminarReservacion(this.reservaciones[n].info.id).subscribe(c=>{this.IdentificarEstado()}):yield(yield this.toastController.create({message:"C\xf3digo incorrecto",duration:1500,position:"bottom"})).present()})}]});yield a.present(),yield a.onDidDismiss()})}doRefresh(n){setTimeout(()=>{location.reload(),n.target.complete()},1e3)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(p.Q),e.Y36(i.Br),e.Y36(i.yF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-tab1"]],decls:51,vars:5,consts:[[3,"translucent"],["datetime","datetime"],[3,"keepContentsMounted"],["placeholder","Seleccione Hora","id","selectHora","interface","action-sheet",3,"ngModel","ngModelChange","ionChange"],["value","7"],["value","8"],["value","9"],["value","10"],["value","11"],["value","12"],["value","13"],["value","14"],["value","15"],["value","16"],["value","17"],["value","18"],["value","19"],["value","20"],["value","21"],["value","22"],["value","23"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[4,"ngIf"],["presentation","date","id","datetime",3,"showDefaultButtons","ngModel","ngModelChange","ionChange"],[4,"ngFor","ngForOf"],["name","close-circle-outline","id","icon","title","Eliminar",3,"click",4,"ngIf"],["name","close-circle-outline","id","icon","title","Eliminar",3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Reservaci\xf3n de salones "),e.qZA(),e.TgZ(4,"ion-grid")(5,"ion-row"),e._UZ(6,"ion-datetime-button",1),e.TgZ(7,"ion-modal",2),e.YNc(8,m,1,2,"ng-template"),e.qZA()(),e.TgZ(9,"ion-row")(10,"ion-list")(11,"ion-item")(12,"ion-select",3),e.NdJ("ngModelChange",function(s){return a.HoraBusqueda=s})("ionChange",function(){return a.IdentificarEstado()}),e.TgZ(13,"ion-select-option",4),e._uU(14,"07:00 HRS."),e.qZA(),e.TgZ(15,"ion-select-option",5),e._uU(16,"08:00 HRS."),e.qZA(),e.TgZ(17,"ion-select-option",6),e._uU(18,"09:00 HRS."),e.qZA(),e.TgZ(19,"ion-select-option",7),e._uU(20,"10:00 HRS."),e.qZA(),e.TgZ(21,"ion-select-option",8),e._uU(22,"11:00 HRS."),e.qZA(),e.TgZ(23,"ion-select-option",9),e._uU(24,"12:00 HRS."),e.qZA(),e.TgZ(25,"ion-select-option",10),e._uU(26,"13:00 HRS."),e.qZA(),e.TgZ(27,"ion-select-option",11),e._uU(28,"14:00 HRS."),e.qZA(),e.TgZ(29,"ion-select-option",12),e._uU(30,"15:00 HRS."),e.qZA(),e.TgZ(31,"ion-select-option",13),e._uU(32,"16:00 HRS."),e.qZA(),e.TgZ(33,"ion-select-option",14),e._uU(34,"17:00 HRS."),e.qZA(),e.TgZ(35,"ion-select-option",15),e._uU(36,"18:00 HRS."),e.qZA(),e.TgZ(37,"ion-select-option",16),e._uU(38,"19:00 HRS."),e.qZA(),e.TgZ(39,"ion-select-option",17),e._uU(40,"20:00 HRS."),e.qZA(),e.TgZ(41,"ion-select-option",18),e._uU(42,"21:00 HRS."),e.qZA(),e.TgZ(43,"ion-select-option",19),e._uU(44,"22:00 HRS."),e.qZA(),e.TgZ(45,"ion-select-option",20),e._uU(46,"23:00 HRS."),e.qZA()()()()()()()(),e.TgZ(47,"ion-content",21)(48,"ion-refresher",22),e.NdJ("ionRefresh",function(s){return a.doRefresh(s)}),e._UZ(49,"ion-refresher-content"),e.qZA(),e.YNc(50,A,2,1,"ion-grid",23),e.qZA()),2&n&&(e.Q6J("translucent",!0),e.xp6(7),e.Q6J("keepContentsMounted",!0),e.xp6(5),e.Q6J("ngModel",a.HoraBusqueda),e.xp6(35),e.Q6J("fullscreen",!0),e.xp6(3),e.Q6J("ngIf",a.reservaciones.length>0))},dependencies:[i.PM,i.FN,i.Zi,i.tO,i.Dq,i.wI,i.W2,i.x4,i.Mj,i.jY,i.Gu,i.gu,i.Ie,i.Q$,i.q_,i.nJ,i.Wo,i.Nd,i.t9,i.n0,i.wd,i.sr,i.ki,i.QI,u.sg,u.O5,g.JJ,g.On],styles:["ion-row[_ngcontent-%COMP%]{width:100%}ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{width:100%}ion-row[_ngcontent-%COMP%]   ion-datetime-button[_ngcontent-%COMP%]{width:100%}ion-row[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%]{width:100%}#icon[_ngcontent-%COMP%]{font-size:30px;padding-left:95%}"]}),o})()}];let R=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[_.Bz.forChild(C),_.Bz]}),o})(),I=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[i.Pc,u.ez,g.u5,f.e,R]}),o})()}}]);