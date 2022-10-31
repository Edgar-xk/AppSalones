"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4432],{4432:(w,b,d)=>{d.r(b),d.d(b,{ion_radio:()=>r,ion_radio_group:()=>s});var u=d(5861),o=d(1308),m=d(9658),p=d(5730),g=d(2854);const r=class{constructor(t){(0,o.r)(this,t),this.ionStyle=(0,o.e)(this,"ionStyle",7),this.ionFocus=(0,o.e)(this,"ionFocus",7),this.ionBlur=(0,o.e)(this,"ionBlur",7),this.inputId="ion-rb-"+n++,this.radioGroup=null,this.checked=!1,this.buttonTabindex=-1,this.name=this.inputId,this.disabled=!1,this.updateState=()=>{this.radioGroup&&(this.checked=this.radioGroup.value===this.value)},this.onClick=()=>{this.checked=this.nativeInput.checked},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}setFocus(t){var i=this;return(0,u.Z)(function*(){t.stopPropagation(),t.preventDefault(),i.el.focus()})()}setButtonTabindex(t){var i=this;return(0,u.Z)(function*(){i.buttonTabindex=t})()}connectedCallback(){void 0===this.value&&(this.value=this.inputId);const t=this.radioGroup=this.el.closest("ion-radio-group");t&&(this.updateState(),(0,p.a)(t,"ionChange",this.updateState))}disconnectedCallback(){const t=this.radioGroup;t&&((0,p.b)(t,"ionChange",this.updateState),this.radioGroup=null)}componentWillLoad(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})}render(){const{inputId:t,disabled:i,checked:e,color:a,el:c,buttonTabindex:h}=this,l=(0,m.b)(this),{label:y,labelId:v,labelText:_}=(0,p.d)(c,t);return(0,o.h)(o.H,{"aria-checked":`${e}`,"aria-hidden":i?"true":null,"aria-labelledby":y?v:null,role:"radio",tabindex:h,onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.onClick,class:(0,g.c)(a,{[l]:!0,"in-item":(0,g.h)("ion-item",c),interactive:!0,"radio-checked":e,"radio-disabled":i})},(0,o.h)("div",{class:"radio-icon",part:"container"},(0,o.h)("div",{class:"radio-inner",part:"mark"}),(0,o.h)("div",{class:"radio-ripple"})),(0,o.h)("label",{htmlFor:t},_),(0,o.h)("input",{type:"radio",checked:e,disabled:i,tabindex:"-1",id:t,ref:C=>this.nativeInput=C}))}get el(){return(0,o.i)(this)}static get watchers(){return{color:["emitStyle"],checked:["emitStyle"],disabled:["emitStyle"]}}};let n=0;r.style={ios:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host{--color-checked:var(--ion-color-primary, #3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:10px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}',md:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host{--color:var(--ion-color-step-400, #999999);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}'};const s=class{constructor(t){(0,o.r)(this,t),this.ionChange=(0,o.e)(this,"ionChange",7),this.inputId="ion-rg-"+f++,this.labelId=`${this.inputId}-lbl`,this.allowEmptySelection=!1,this.name=this.inputId,this.setRadioTabindex=i=>{const e=this.getRadios(),a=e.find(l=>!l.disabled),c=e.find(l=>l.value===i&&!l.disabled);if(!a&&!c)return;const h=c||a;for(const l of e)l.setButtonTabindex(l===h?0:-1)},this.onClick=i=>{i.preventDefault();const e=i.target&&i.target.closest("ion-radio");if(e){const c=e.value;c!==this.value?this.value=c:this.allowEmptySelection&&(this.value=void 0)}}}valueChanged(t){this.setRadioTabindex(t),this.ionChange.emit({value:t})}componentDidLoad(){this.setRadioTabindex(this.value)}connectedCallback(){var t=this;return(0,u.Z)(function*(){const i=t.el.querySelector("ion-list-header")||t.el.querySelector("ion-item-divider");if(i){const e=t.label=i.querySelector("ion-label");e&&(t.labelId=e.id=t.name+"-lbl")}})()}getRadios(){return Array.from(this.el.querySelectorAll("ion-radio"))}onKeydown(t){const i=!!this.el.closest("ion-select-popover");if(t.target&&!this.el.contains(t.target))return;const e=this.getRadios().filter(a=>!a.disabled);if(t.target&&e.includes(t.target)){const a=e.findIndex(l=>l===t.target),c=e[a];let h;["ArrowDown","ArrowRight"].includes(t.code)&&(h=a===e.length-1?e[0]:e[a+1]),["ArrowUp","ArrowLeft"].includes(t.code)&&(h=0===a?e[e.length-1]:e[a-1]),h&&e.includes(h)&&(h.setFocus(t),i||(this.value=h.value)),["Space"].includes(t.code)&&(this.value=this.allowEmptySelection&&void 0!==this.value?void 0:c.value,t.preventDefault())}}render(){const{label:t,labelId:i}=this,e=(0,m.b)(this);return(0,o.h)(o.H,{role:"radiogroup","aria-labelledby":t?i:null,onClick:this.onClick,class:e})}get el(){return(0,o.i)(this)}static get watchers(){return{value:["valueChanged"]}}};let f=0},2854:(w,b,d)=>{d.d(b,{c:()=>m,g:()=>g,h:()=>o,o:()=>k});var u=d(5861);const o=(r,n)=>null!==n.closest(r),m=(r,n)=>"string"==typeof r&&r.length>0?Object.assign({"ion-color":!0,[`ion-color-${r}`]:!0},n):n,g=r=>{const n={};return(r=>void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(r).forEach(s=>n[s]=!0),n},x=/^[a-z][a-z0-9+\-.]*:/,k=function(){var r=(0,u.Z)(function*(n,s,f,t){if(null!=n&&"#"!==n[0]&&!x.test(n)){const i=document.querySelector("ion-router");if(i)return null!=s&&s.preventDefault(),i.push(n,f,t)}return!1});return function(s,f,t,i){return r.apply(this,arguments)}}()}}]);