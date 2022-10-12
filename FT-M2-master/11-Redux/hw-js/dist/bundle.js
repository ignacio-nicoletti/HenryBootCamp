(()=>{var r={857:(r,t,e)=>{"use strict";function n(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function o(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function i(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){n(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function c(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}e.r(t),e.d(t,{__DO_NOT_USE__ActionTypes:()=>a,applyMiddleware:()=>v,bindActionCreators:()=>E,combineReducers:()=>d,compose:()=>O,createStore:()=>l,legacy_createStore:()=>y});var u="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function p(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}function l(r,t,e){var n;if("function"==typeof t&&"function"==typeof e||"function"==typeof e&&"function"==typeof arguments[3])throw new Error(c(0));if("function"==typeof t&&void 0===e&&(e=t,t=void 0),void 0!==e){if("function"!=typeof e)throw new Error(c(1));return e(l)(r,t)}if("function"!=typeof r)throw new Error(c(2));var o=r,i=t,f=[],y=f,d=!1;function s(){y===f&&(y=f.slice())}function E(){if(d)throw new Error(c(3));return i}function O(r){if("function"!=typeof r)throw new Error(c(4));if(d)throw new Error(c(5));var t=!0;return s(),y.push(r),function(){if(t){if(d)throw new Error(c(6));t=!1,s();var e=y.indexOf(r);y.splice(e,1),f=null}}}function v(r){if(!p(r))throw new Error(c(7));if(void 0===r.type)throw new Error(c(8));if(d)throw new Error(c(9));try{d=!0,i=o(i,r)}finally{d=!1}for(var t=f=y,e=0;e<t.length;e++)(0,t[e])();return r}function b(r){if("function"!=typeof r)throw new Error(c(10));o=r,v({type:a.REPLACE})}function h(){var r,t=O;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(c(11));function e(){r.next&&r.next(E())}return e(),{unsubscribe:t(e)}}})[u]=function(){return this},r}return v({type:a.INIT}),(n={dispatch:v,subscribe:O,getState:E,replaceReducer:b})[u]=h,n}var y=l;function d(r){for(var t=Object.keys(r),e={},n=0;n<t.length;n++){var o=t[n];"function"==typeof r[o]&&(e[o]=r[o])}var i,u=Object.keys(e);try{!function(r){Object.keys(r).forEach((function(t){var e=r[t];if(void 0===e(void 0,{type:a.INIT}))throw new Error(c(12));if(void 0===e(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error(c(13))}))}(e)}catch(r){i=r}return function(r,t){if(void 0===r&&(r={}),i)throw i;for(var n=!1,o={},f=0;f<u.length;f++){var a=u[f],p=e[a],l=r[a],y=p(l,t);if(void 0===y)throw t&&t.type,new Error(c(14));o[a]=y,n=n||y!==l}return(n=n||u.length!==Object.keys(r).length)?o:r}}function s(r,t){return function(){return t(r.apply(this,arguments))}}function E(r,t){if("function"==typeof r)return s(r,t);if("object"!=typeof r||null===r)throw new Error(c(16));var e={};for(var n in r){var o=r[n];"function"==typeof o&&(e[n]=s(o,t))}return e}function O(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return 0===t.length?function(r){return r}:1===t.length?t[0]:t.reduce((function(r,t){return function(){return r(t.apply(void 0,arguments))}}))}function v(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return function(r){return function(){var e=r.apply(void 0,arguments),n=function(){throw new Error(c(15))},o={getState:e.getState,dispatch:function(){return n.apply(void 0,arguments)}},u=t.map((function(r){return r(o)}));return n=O.apply(void 0,u)(e.dispatch),i(i({},e),{},{dispatch:n})}}}},883:r=>{r.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO"}},518:(r,t,e)=>{const{INCREMENTO:n,DECREMENTO:o}=e(883);r.exports={incremento:()=>({type:"INCREMENTO"}),decremento:()=>({type:"DECREMENTO"})}},616:(r,t,e)=>{const{INCREMENTO:n,DECREMENTO:o}=e(883),i={contador:0};r.exports=function(r=i,t){switch(t.type){case"INCREMENTO":return{contador:r.contador+1};case"DECREMENTO":return{contador:r.contador-1};default:return r}}}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return r[n](i,i.exports,e),i.exports}e.d=(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},e.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),e.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},(()=>{const{createStore:r}=e(857),t=e(616),{incremento:n,decremento:o}=e(518);var i=r(t),c=document.getElementById("valor");function u(){let r=i.getState().contador;c.innerText=r}u(),i.subscribe(u),document.getElementById("incremento").onclick=()=>dispatch(n()),document.getElementById("decremento").onclick=()=>dispatch(n());let f=document.getElementById("incrementoImpar");t%2!=0&&(f.onclick=()=>dispatch(n()))})()})();