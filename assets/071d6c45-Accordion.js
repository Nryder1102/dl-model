import{o,k as f}from"./9121d302-jsxRuntime.module.js";import{u as h}from"./6c499396-useToggleState.js";import{c as e}from"./1a6d7162-createSvgIcon.js";const w=e(o("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown"),D=e(o("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");const $=f((a,n)=>{const{children:t=[],className:l="",defaultOpen:i=!1,disableGutters:d=!1,...m}=a,[r,p]=h(i),A=`Accordion ${d?"noGutters":""} ${r?"open":""} ${l}`,[s,c]=t,u=r?o(D,{}):o(w,{});return o("div",{className:A,...m,ref:n,children:[s&&o("div",{onClick:p,className:"Accordion-summary",children:[u,s]}),r&&c&&o("div",{className:"Accordion-details",children:c})]})});export{$ as A,D as a,w as b};
