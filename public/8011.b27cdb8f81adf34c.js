"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8011],{8011:(_,u,r)=>{r.r(u),r.d(u,{Tab3PageModule:()=>Z});var i=r(5056),m=r(9808),c=r(4182),p=r(581),g=r(8808),d=r(655),e=r(9863),f=r(4781),b=r(520);let h=(()=>{class t{constructor(n){this.http=n}AgregarSalon(n,a){return(0,d.mG)(this,void 0,void 0,function*(){var o=new FormData;return o.append("nombre",n),o.append("ubicacion",a),yield this.http.post(f.O+"/AgregarSalon.php",o)})}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(b.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function T(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",6)(3,"ion-button",7),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.cancel())}),e._uU(4,"Cancel"),e.qZA()(),e.TgZ(5,"ion-title"),e._uU(6,"Contrase\xf1a de Administrador"),e.qZA(),e.TgZ(7,"ion-buttons",8)(8,"ion-button",9),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.confirm())}),e._uU(9,"Confirm"),e.qZA()()()(),e.TgZ(10,"ion-content",10)(11,"ion-item")(12,"ion-label",11),e._uU(13,"Contrase\xf1a de administrador:"),e.qZA(),e.TgZ(14,"ion-input",12),e.NdJ("ngModelChange",function(o){e.CHM(n);const l=e.oxw();return e.KtG(l.contrasena=o)}),e.qZA()()()}if(2&t){const n=e.oxw();e.xp6(8),e.Q6J("strong",!0),e.xp6(6),e.Q6J("ngModel",n.contrasena)}}const v=[{path:"",component:(()=>{class t{constructor(n,a){this.modificaciones=n,this.alertController=a}AgregarSalon(){return(0,d.mG)(this,void 0,void 0,function*(){if(""==this.nombre||null==this.nombre||""==this.ubicacion||null==this.ubicacion){const n=yield this.alertController.create({header:"Datos incompletos",message:"Verifique que todos los campos esten cubiertos",buttons:[{text:"OK",role:"confirm"}]});yield n.present(),yield n.onDidDismiss()}else(yield this.modificaciones.AgregarSalon(this.nombre,this.ubicacion)).subscribe(a=>(0,d.mG)(this,void 0,void 0,function*(){if(1==a){const o=yield this.alertController.create({header:"Registro correcto",buttons:[{text:"OK",role:"confirm"}]});yield o.present(),yield o.onDidDismiss(),this.nombre="",this.ubicacion=""}else{const o=yield this.alertController.create({header:"Error",buttons:[{text:"OK",role:"confirm"}]});yield o.present(),yield o.onDidDismiss()}}))})}cancel(){this.modal.dismiss(null,"cancel")}confirm(){this.modal.dismiss(this.contrasena,"confirm")}onWillDismiss(n){"confirm"===n.detail.role&&"Sivitel"==this.contrasena&&this.AgregarSalon()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(h),e.Y36(i.Br))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tab3"]],viewQuery:function(n,a){if(1&n&&e.Gf(i.ki,5),2&n){let o;e.iGM(o=e.CRH())&&(a.modal=o.first)}},decls:22,vars:4,consts:[[3,"translucent"],["id","content",3,"fullscreen"],["id","content"],[3,"ngModel","ngModelChange"],["expand","block","id","open-modal-password"],["trigger","open-modal-password",3,"willDismiss"],["slot","start"],[3,"click"],["slot","end"],[3,"strong","click"],[1,"ion-padding"],["position","stacked"],["type","password","placeholder","contrase\xf1a",3,"ngModel","ngModelChange"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Modificaciones "),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-card")(6,"ion-card-header")(7,"ion-card-title"),e._uU(8,"Agregar Sal\xf3n"),e.qZA()(),e.TgZ(9,"ion-card-content")(10,"ion-item",2)(11,"ion-label"),e._uU(12,"Nombre del sal\xf3n"),e.qZA(),e.TgZ(13,"ion-input",3),e.NdJ("ngModelChange",function(l){return a.nombre=l}),e.qZA()(),e.TgZ(14,"ion-item")(15,"ion-label"),e._uU(16,"Ubicaci\xf3n"),e.qZA(),e.TgZ(17,"ion-input",3),e.NdJ("ngModelChange",function(l){return a.ubicacion=l}),e.qZA()(),e.TgZ(18,"ion-button",4),e._uU(19,"Agregar"),e.qZA()()(),e.TgZ(20,"ion-modal",5),e.NdJ("willDismiss",function(l){return a.onWillDismiss(l)}),e.YNc(21,T,15,2,"ng-template"),e.qZA()()),2&n&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(9),e.Q6J("ngModel",a.nombre),e.xp6(4),e.Q6J("ngModel",a.ubicacion))},dependencies:[i.YG,i.Sm,i.PM,i.FN,i.Zi,i.Dq,i.W2,i.Gu,i.pK,i.Ie,i.Q$,i.wd,i.sr,i.ki,i.j9,c.JJ,c.On],styles:["#content[_ngcontent-%COMP%]{margin-top:10px}"]}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild(v),g.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.Pc,m.ez,c.u5,p.e,M]}),t})()}}]);