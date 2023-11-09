(()=>{"use strict";var e,t={520:()=>{const e=window.React,t=window.wp.blocks,n=window.wp.i18n,o=window.wp.blockEditor,r=window.wp.components,a=window.wp.element,c=JSON.parse('{"u2":"bee-addons-blocks/scroll-down","kG":"beeAddonsBlocks"}');(0,t.registerBlockType)(c.u2,{edit:function(t){const{className:i,...l}=(0,o.useBlockProps)();return(0,e.createElement)(a.Fragment,null,(0,e.createElement)("section",{className:`${i}`,...l},(0,e.createElement)("span",null,(0,e.createElement)(o.InnerBlocks,{template:[["core/paragraph",{content:(0,n.__)("Scroll down",c.kG)}]]})),(0,e.createElement)("img",{className:"bee-arrow",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMy4zMzQiIGhlaWdodD0iMTYuNTE5IiB2aWV3Qm94PSIwIDAgMzMuMzM0IDE2LjUxOSI+CiAgPGcgaWQ9Ikdyb3VwZV8xODY2IiBkYXRhLW5hbWU9Ikdyb3VwZSAxODY2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MzQuNTM0IC0zMTEuMDI3KSByb3RhdGUoOTApIj4KICAgIDxnIGlkPSJub3VuLWJhY2stMTI3MDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzI2LjEzOCA3MzIuMDU5KSByb3RhdGUoMTgwKSI+CiAgICAgIDxwYXRoIGlkPSJUcmFjw6lfNzQiIGRhdGEtbmFtZT0iVHJhY8OpIDc0IiBkPSJNMTQuMTExLDI0Ljk0NiwzLjUyOCwxNC40ODksMTQuMTExLDMuNjU0VjBMMCwxNC42MTUsMTQuMTExLDI4LjQ3NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9IiNlZmVmZWYiIHN0cm9rZT0iI2VmZWZlZiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"})),(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(r.PanelBody,{title:(0,n.__)("Animations",c.kG)},(0,e.createElement)(r.RangeControl,{min:0,max:100,value:t.attributes.TranslateAnimation||0,onChange:e=>{t.setAttributes({TranslateAnimation:parseInt(e)})},label:(0,n.__)("Translation",c.kG)}),(0,e.createElement)(r.HorizontalRule,null),(0,e.createElement)(r.RangeControl,{min:0,max:2e3,value:t.attributes.scroll||0,onChange:e=>{t.setAttributes({scroll:parseInt(e)})},label:(0,n.__)("Scroll",c.kG)}))))},save:function(){const e=o.useBlockProps.save(),{children:t}=o.useInnerBlocksProps.save(e);return t},icon:(0,e.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBjbGFzcz0idy02IGgtNiI+Cgk8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xOS41IDUuMjVsLTcuNSA3LjUtNy41LTcuNW0xNSA2bC03LjUgNy41LTcuNS03LjUiIC8+Cjwvc3ZnPgo="})})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,r,a)=>{if(!n){var c=1/0;for(I=0;I<e.length;I++){for(var[n,r,a]=e[I],i=!0,l=0;l<n.length;l++)(!1&a||c>=a)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(i=!1,a<c&&(c=a));if(i){e.splice(I--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var I=e.length;I>0&&e[I-1][2]>a;I--)e[I]=e[I-1];e[I]=[n,r,a]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={471:0,261:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[c,i,l]=n,s=0;if(c.some((t=>0!==e[t]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var I=l(o)}for(t&&t(n);s<c.length;s++)a=c[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(I)},n=globalThis.webpackChunkcurvy=globalThis.webpackChunkcurvy||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[261],(()=>o(520)));r=o.O(r)})();