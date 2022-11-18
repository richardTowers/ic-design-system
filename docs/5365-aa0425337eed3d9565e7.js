"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[5365],{5365:function(e,i,t){t.r(i),t.d(i,{ic_radio_option:function(){return d}});var a=t(4942),o=t(5671),n=t(3144),r=t(6902),c=t(7331),d=function(){function e(i){var t=this;(0,o.Z)(this,e),(0,r.r)(this,i),this.icCheck=(0,r.c)(this,"icCheck",7),this.radioOptionSelect=(0,r.c)(this,"radioOptionSelect",7),this.defaultRadioValue="",this.handleClick=function(){if(!t.disabled){if(t.radioElement.focus(),t.hasAdditionalField){var e=t.host.querySelector("ic-text-field");t.value=""!==e.value?e.value:t.defaultRadioValue}t.radioOptionSelect.emit({value:t.value})}},this.swallowClick=function(e){e.stopPropagation()},this.hasAdditionalField=!1,this.selected=!1,this.disabled=!1,this.label=void 0,this.value=void 0,this.name=void 0,this.groupLabel=void 0,this.dynamicText="This selection requires additional answers",this.additionalFieldDisplay="static"}return(0,n.Z)(e,[{key:"selectedChangeHandler",value:function(e){e&&this.handleClick()}},{key:"componentWillLoad",value:function(){var e=(0,c.p)(this.host,"additional-field");if(null!==e){this.hasAdditionalField=!0;var i=e[0];if("IC-TEXT-FIELD"===i.tagName)i.hiddenInput=!1}this.defaultRadioValue=this.value}},{key:"textfieldValueHandler",value:function(e){var i=e.detail.value;this.selected&&(""!==i?(this.value=e.detail.value,this.radioOptionSelect.emit({value:this.value})):(this.value=this.defaultRadioValue,this.radioOptionSelect.emit({value:this.defaultRadioValue})))}},{key:"componentDidLoad",value:function(){(0,c.a)([{prop:this.value,propName:"value"}],"Radio Option")}},{key:"componentDidRender",value:function(){if("static"===this.additionalFieldDisplay){var e=this.host.querySelector("ic-text-field");this.selected?e&&e.removeAttribute("disabled"):e&&e.setAttribute("disabled","")}}},{key:"render",value:function(){var e,i=this,t="ic-radio-option-".concat(void 0!==this.label?this.label:this.value,"-").concat(this.groupLabel);return(0,r.h)(r.H,{onClick:this.handleClick},(0,r.h)("div",{class:(e={},(0,a.Z)(e,"container",!0),(0,a.Z)(e,"disabled",this.disabled),e)},(0,r.h)("input",{role:"radio",tabindex:this.selected?"0":"-1",type:"radio",name:this.name,id:t,value:this.value,disabled:!!this.disabled||null,checked:this.selected,ref:function(e){return i.radioElement=e}}),(0,r.h)("span",{class:"checkmark"}),(0,r.h)("ic-typography",{class:"radio-label",variant:"body"},(0,r.h)("label",{htmlFor:t},this.label))),this.hasAdditionalField&&(0,r.h)("div",{onClick:this.swallowClick,class:{"dynamic-container":!0,hidden:"dynamic"===this.additionalFieldDisplay&&!this.selected}},"dynamic"===this.additionalFieldDisplay&&(0,r.h)("div",{class:"branch-corner"}),(0,r.h)("div",null,"dynamic"===this.additionalFieldDisplay&&(0,r.h)("ic-typography",{variant:"caption"},(0,r.h)("p",{class:"dynamic-text"},this.dynamicText)),(0,r.h)("div",{class:{"addition-field-wrapper":"static"===this.additionalFieldDisplay}},(0,r.h)("slot",{name:"additional-field"})))))}},{key:"host",get:function(){return(0,r.g)(this)}}],[{key:"watchers",get:function(){return{selected:["selectedChangeHandler"]}}}]),e}();d.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;margin-bottom:var(--ic-space-sm);width:-moz-fit-content;width:fit-content}:host([dense]){margin-bottom:10px}:host([additional-field-display="static"]) ::slotted(ic-textfield){margin-top:var(--ic-space-xs);margin-left:var(--ic-space-xl)}:host([inactive]){color:var(--ic-architectural-200)}.container input:focus+span.checkmark,:host(:focus) .container input:checked+span.checkmark{box-shadow:var(--ic-border-focus);outline:none}.container input:focus-visible{outline:none}.container{display:inline-flex;position:relative;cursor:pointer;align-items:center;gap:var(--ic-space-xs);margin-left:5px}.container.disabled,.container.disabled input:disabled{cursor:default}.container input{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-block;position:absolute;cursor:pointer;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);border-radius:50%;border:none}.checkmark{display:block;position:relative;top:0;left:0;height:20px;width:20px;background-color:transparent;border:1px solid #a7acb3;border-radius:50%;transition:var(--ic-easing-transition-fast)}.container input:checked~.checkmark::after{display:inline-block}.container:hover input~.checkmark{background-color:var(--ic-action-default-bg-hover);box-shadow:0 0 0 4px var(--ic-action-default-bg-hover);border:1px solid var(--ic-action-default)}.container:active input~.checkmark{background-color:var(--ic-action-default-bg-active);border:1px solid var(--ic-action-default-active);box-shadow:0 0 0 4px var(--ic-action-default-bg-active)}.container:active input:checked~.checkmark{background-color:var(--ic-action-default-bg-active);border:2px solid var(--ic-action-default-active);box-shadow:0 0 0 4px var(--ic-action-default-bg-active)}.container:active input:checked~.checkmark::after{background-color:var(--ic-action-default-active)}.container input:checked~.checkmark{border:2px solid var(--ic-action-default);margin:-1px;margin-bottom:1px}.container input:checked:disabled~.checkmark{background-color:transparent;border:2px solid var(--ic-architectural-200)}.container input:disabled~.checkmark{border:1px dashed var(--ic-architectural-200)}.container input:disabled~.checkmark::after{background:var(--ic-architectural-200)}.container:hover input:disabled~.checkmark{background-color:transparent;box-shadow:none;border:2px solid none}.container:active input:disabled~.checkmark::after{background-color:var(--ic-architectural-200)}.container .checkmark::after{content:"";position:absolute;display:none;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:var(--ic-action-default)}.radio-label{font-size:16px;font-weight:400;margin-left:var(--ic-space-sm)}.addition-field-wrapper{margin-left:44px}.branch-corner{color:var(--ic-action-default);height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 3px;border-bottom:2px solid var(--ic-action-default);border-left:2px solid var(--ic-action-default);margin-left:-1px}.dynamic-container{display:flex;position:relative;margin-left:var(--ic-space-md);margin-top:6px;gap:var(--ic-space-xs)}.dynamic-container.hidden{display:none}.dynamic-text{color:var(--ic-action-default);margin-top:5px;margin-bottom:var(--ic-space-xs);border-radius:2%}'}}]);
//# sourceMappingURL=5365-aa0425337eed3d9565e7.js.map