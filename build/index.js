(()=>{"use strict";var e={962:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.app=void 0;const o=(0,s(r(860)).default)();t.app=o;const{PORT:l=4e3}=process.env;o.get("/",((e,t)=>{t.send({message:"hello world"})})),o.listen(l,(()=>{console.log("server started at http://localhost:"+l)}))},860:e=>{e.exports=require("express")}},t={};!function r(s){var o=t[s];if(void 0!==o)return o.exports;var l=t[s]={exports:{}};return e[s].call(l.exports,l,l.exports,r),l.exports}(962)})();