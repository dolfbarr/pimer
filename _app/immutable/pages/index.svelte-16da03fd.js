import{C as Ye,K as ht,L as dt,M as ot,S as he,i as de,s as me,l as y,r as Ae,a as O,m as w,n as g,u as De,h as c,c as P,p as s,b as B,J as v,N as re,v as Le,E as z,O as at,P as I,Q as V,g as ut,t as K,d as ct,f as C,R as Se,T as ze,U as je,w as ne,x as le,y as se,B as ie,V as mt,W as gt,X as _t,Y as pt,Z as Ze,_ as vt,$ as bt}from"../chunks/index-81c5949b.js";import{w as ft}from"../chunks/index-fb92d811.js";const kt=!0;function Et(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function et(t){return Object.prototype.toString.call(t)==="[object Date]"}function $e(t,e){if(t===e||t!==t)return()=>t;const r=typeof t;if(r!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map((l,i)=>$e(t[i],l));return l=>n.map(i=>i(l))}if(r==="object"){if(!t||!e)throw new Error("Object cannot be null");if(et(t)&&et(e)){t=t.getTime(),e=e.getTime();const i=e-t;return u=>new Date(t+u*i)}const n=Object.keys(e),l={};return n.forEach(i=>{l[i]=$e(t[i],e[i])}),i=>{const u={};return n.forEach(a=>{u[a]=l[a](i)}),u}}if(r==="number"){const n=e-t;return l=>t+l*n}throw new Error(`Cannot interpolate ${r} values`)}function Pe(t,e={}){const r=ft(t);let n,l=t;function i(u,a){if(t==null)return r.set(t=u),Promise.resolve();l=u;let o=n,_=!1,{delay:m=0,duration:d=400,easing:x=ot,interpolate:A=$e}=Ye(Ye({},e),a);if(d===0)return o&&(o.abort(),o=null),r.set(t=l),Promise.resolve();const f=ht()+m;let h;return n=dt(b=>{if(b<f)return!0;_||(h=A(t,u),typeof d=="function"&&(d=d(t,u)),_=!0),o&&(o.abort(),o=null);const k=b-f;return k>d?(r.set(t=u),!1):(r.set(t=h(x(k/d))),!0)}),n.promise}return{set:i,update:(u,a)=>i(u(l,t),a),subscribe:r.subscribe}}function Me(t,{delay:e=0,duration:r=400,easing:n=ot}={}){const l=+getComputedStyle(t).opacity;return{delay:e,duration:r,easing:n,css:i=>`opacity: ${i*l}`}}function Ke(t,{delay:e=0,speed:r,duration:n,easing:l=Et}={}){let i=t.getTotalLength();const u=getComputedStyle(t);return u.strokeLinecap!=="butt"&&(i+=parseInt(u.strokeWidth)),n===void 0?r===void 0?n=800:n=i/r:typeof n=="function"&&(n=n(i)),{delay:e,duration:n,easing:l,css:(a,o)=>`stroke-dasharray: ${a*i} ${o*i}`}}function tt(t,e,r){const n=t.slice();return n[8]=e[r],n}function rt(t){let e,r=t[8].toString()+"",n,l,i;function u(){return t[7](t[8])}return{c(){e=y("button"),n=Ae(r),this.h()},l(a){e=w(a,"BUTTON",{class:!0});var o=g(e);n=De(o,r),o.forEach(c),this.h()},h(){s(e,"class","w-10 self-auto rounded border-2 border-current p-1 transition-all active:scale-90")},m(a,o){B(a,e,o),v(e,n),l||(i=re(e,"click",u),l=!0)},p(a,o){t=a,o&8&&r!==(r=t[8].toString()+"")&&Le(n,r)},d(a){a&&c(e),l=!1,i()}}}function yt(t){let e,r,n,l,i,u,a,o,_,m,d,x,A=t[3],f=[];for(let h=0;h<A.length;h+=1)f[h]=rt(tt(t,A,h));return{c(){e=y("div"),r=y("div"),n=y("span"),l=Ae(t[1]),u=O(),a=y("div"),o=y("input"),m=O();for(let h=0;h<f.length;h+=1)f[h].c();this.h()},l(h){e=w(h,"DIV",{});var b=g(e);r=w(b,"DIV",{class:!0});var k=g(r);n=w(k,"SPAN",{class:!0});var D=g(n);l=De(D,t[1]),D.forEach(c),u=P(k),a=w(k,"DIV",{class:!0});var R=g(a);o=w(R,"INPUT",{placeholder:!0,type:!0,class:!0}),m=P(R);for(let N=0;N<f.length;N+=1)f[N].l(R);R.forEach(c),k.forEach(c),b.forEach(c),this.h()},h(){s(n,"class",i="absolute z-10 text-sm transition-[background-color] duration-500 "+(t[2]?"bg-lime-500 dark:bg-lime-800":"bg-zinc-50 dark:bg-zinc-800")+" -top-5 left-4 p-2 font-semibold"),s(o,"placeholder","?"),s(o,"type","text"),o.value=t[0],s(o,"class",_="appearance-none "+(t[2]?"bg-zing-white dark:bg-zinc-200 text-lime-500 dark:text-lime-800":"bg-gray-900 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-800")+" border-10 w-10 rounded border-current p-1 text-center accent-black"),s(a,"class","flex flex-wrap gap-2"),s(r,"class","relative m-5 flex rounded border-2 border-solid border-current bg-transparent p-5")},m(h,b){B(h,e,b),v(e,r),v(r,n),v(n,l),v(r,u),v(r,a),v(a,o),v(a,m);for(let k=0;k<f.length;k+=1)f[k].m(a,null);d||(x=re(o,"input",t[6]),d=!0)},p(h,[b]){if(b&2&&Le(l,h[1]),b&4&&i!==(i="absolute z-10 text-sm transition-[background-color] duration-500 "+(h[2]?"bg-lime-500 dark:bg-lime-800":"bg-zinc-50 dark:bg-zinc-800")+" -top-5 left-4 p-2 font-semibold")&&s(n,"class",i),b&1&&o.value!==h[0]&&(o.value=h[0]),b&4&&_!==(_="appearance-none "+(h[2]?"bg-zing-white dark:bg-zinc-200 text-lime-500 dark:text-lime-800":"bg-gray-900 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-800")+" border-10 w-10 rounded border-current p-1 text-center accent-black")&&s(o,"class",_),b&25){A=h[3];let k;for(k=0;k<A.length;k+=1){const D=tt(h,A,k);f[k]?f[k].p(D,b):(f[k]=rt(D),f[k].c(),f[k].m(a,null))}for(;k<f.length;k+=1)f[k].d(1);f.length=A.length}},i:z,o:z,d(h){h&&c(e),at(f,h),d=!1,x()}}}function wt(t,e,r){let{label:n}=e,{isBreak:l}=e,{settings:i}=e,{onChange:u}=e,{defaultValue:a=""}=e,{value:o=a}=e;const _=d=>u(d.currentTarget.value),m=d=>{u(d.toString()),r(0,o=d.toString())};return t.$$set=d=>{"label"in d&&r(1,n=d.label),"isBreak"in d&&r(2,l=d.isBreak),"settings"in d&&r(3,i=d.settings),"onChange"in d&&r(4,u=d.onChange),"defaultValue"in d&&r(5,a=d.defaultValue),"value"in d&&r(0,o=d.value)},[o,n,l,i,u,a,_,m]}class Re extends he{constructor(e){super(),de(this,e,wt,yt,me,{label:1,isBreak:2,settings:3,onChange:4,defaultValue:5,value:0})}}function Tt(t){let e,r,n;return{c(){e=I("svg"),r=I("circle"),n=I("path"),this.h()},l(l){e=V(l,"svg",{viewBox:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var i=g(e);r=V(i,"circle",{cx:!0,cy:!0,r:!0}),g(r).forEach(c),n=V(i,"path",{d:!0}),g(n).forEach(c),i.forEach(c),this.h()},h(){s(r,"cx","12"),s(r,"cy","12"),s(r,"r","3"),s(n,"d","M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"),s(e,"viewBox","0 0 24 24"),s(e,"fill","none"),s(e,"stroke-linecap","round"),s(e,"stroke-linejoin","round"),s(e,"class","feather feather-settings h-full w-full stroke-current")},m(l,i){B(l,e,i),v(e,r),v(e,n)},p:z,i:z,o:z,d(l){l&&c(e)}}}class Bt extends he{constructor(e){super(),de(this,e,null,Tt,me,{})}}function It(t){let e;return{c(){e=I("path"),this.h()},l(r){e=V(r,"path",{d:!0}),g(e).forEach(c),this.h()},h(){s(e,"d","M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z")},m(r,n){B(r,e,n)},d(r){r&&c(e)}}}function Vt(t){let e,r,n,l,i,u,a,o,_;return{c(){e=I("circle"),r=I("line"),n=I("line"),l=I("line"),i=I("line"),u=I("line"),a=I("line"),o=I("line"),_=I("line"),this.h()},l(m){e=V(m,"circle",{cx:!0,cy:!0,r:!0}),g(e).forEach(c),r=V(m,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),g(r).forEach(c),n=V(m,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),g(n).forEach(c),l=V(m,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),g(l).forEach(c),i=V(m,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),g(i).forEach(c),u=V(m,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),g(u).forEach(c),a=V(m,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),g(a).forEach(c),o=V(m,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),g(o).forEach(c),_=V(m,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),g(_).forEach(c),this.h()},h(){s(e,"cx","12"),s(e,"cy","12"),s(e,"r","5"),s(r,"x1","12"),s(r,"y1","1"),s(r,"x2","12"),s(r,"y2","3"),s(n,"x1","12"),s(n,"y1","21"),s(n,"x2","12"),s(n,"y2","23"),s(l,"x1","4.22"),s(l,"y1","4.22"),s(l,"x2","5.64"),s(l,"y2","5.64"),s(i,"x1","18.36"),s(i,"y1","18.36"),s(i,"x2","19.78"),s(i,"y2","19.78"),s(u,"x1","1"),s(u,"y1","12"),s(u,"x2","3"),s(u,"y2","12"),s(a,"x1","21"),s(a,"y1","12"),s(a,"x2","23"),s(a,"y2","12"),s(o,"x1","4.22"),s(o,"y1","19.78"),s(o,"x2","5.64"),s(o,"y2","18.36"),s(_,"x1","18.36"),s(_,"y1","5.64"),s(_,"x2","19.78"),s(_,"y2","4.22")},m(m,d){B(m,e,d),B(m,r,d),B(m,n,d),B(m,l,d),B(m,i,d),B(m,u,d),B(m,a,d),B(m,o,d),B(m,_,d)},d(m){m&&c(e),m&&c(r),m&&c(n),m&&c(l),m&&c(i),m&&c(u),m&&c(a),m&&c(o),m&&c(_)}}}function At(t){let e;function r(i,u){return i[0]?Vt:It}let n=r(t),l=n(t);return{c(){e=I("svg"),l.c(),this.h()},l(i){e=V(i,"svg",{viewBox:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var u=g(e);l.l(u),u.forEach(c),this.h()},h(){s(e,"viewBox","0 0 24 24"),s(e,"fill","none"),s(e,"stroke-linecap","round"),s(e,"stroke-linejoin","round"),s(e,"class","feather feather-settings h-full w-full stroke-current")},m(i,u){B(i,e,u),l.m(e,null)},p(i,[u]){n!==(n=r(i))&&(l.d(1),l=n(i),l&&(l.c(),l.m(e,null)))},i:z,o:z,d(i){i&&c(e),l.d()}}}function Dt(t,e,r){let{isDarkMode:n}=e;return t.$$set=l=>{"isDarkMode"in l&&r(0,n=l.isDarkMode)},[n]}class St extends he{constructor(e){super(),de(this,e,Dt,At,me,{isDarkMode:0})}}function Mt(t){let e,r;return{c(){e=I("svg"),r=I("polyline"),this.h()},l(n){e=V(n,"svg",{viewBox:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var l=g(e);r=V(l,"polyline",{points:!0}),g(r).forEach(c),l.forEach(c),this.h()},h(){s(r,"points","15 18 9 12 15 6"),s(e,"viewBox","0 0 24 24"),s(e,"fill","none"),s(e,"stroke-linecap","round"),s(e,"stroke-linejoin","round"),s(e,"class","feather feather-chevron-left h-full w-full stroke-current")},m(n,l){B(n,e,l),v(e,r)},p:z,i:z,o:z,d(n){n&&c(e)}}}class Nt extends he{constructor(e){super(),de(this,e,null,Mt,me,{})}}function xt(t){let e,r;return{c(){e=I("svg"),r=I("polyline"),this.h()},l(n){e=V(n,"svg",{viewBox:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var l=g(e);r=V(l,"polyline",{points:!0}),g(r).forEach(c),l.forEach(c),this.h()},h(){s(r,"points","9 18 15 12 9 6"),s(e,"viewBox","0 0 24 24"),s(e,"fill","none"),s(e,"stroke-linecap","round"),s(e,"stroke-linejoin","round"),s(e,"class","feather feather-chevron-right h-full w-full stroke-current")},m(n,l){B(n,e,l),v(e,r)},p:z,i:z,o:z,d(n){n&&c(e)}}}class Rt extends he{constructor(e){super(),de(this,e,null,xt,me,{})}}function Lt(t){let e,r,n,l;return{c(){e=I("polygon"),this.h()},l(i){e=V(i,"polygon",{points:!0}),g(e).forEach(c),this.h()},h(){s(e,"points","5 3 19 12 5 21 5 3")},m(i,u){B(i,e,u),l=!0},i(i){l||(Se(()=>{n&&n.end(1),r=ze(e,Ke,{}),r.start()}),l=!0)},o(i){r&&r.invalidate(),n=je(e,Me,{}),l=!1},d(i){i&&c(e),i&&n&&n.end()}}}function zt(t){let e,r,n,l,i,u,a;return{c(){e=I("rect"),l=I("rect"),this.h()},l(o){e=V(o,"rect",{x:!0,y:!0,width:!0,height:!0}),g(e).forEach(c),l=V(o,"rect",{x:!0,y:!0,width:!0,height:!0}),g(l).forEach(c),this.h()},h(){s(e,"x","6"),s(e,"y","4"),s(e,"width","4"),s(e,"height","16"),s(l,"x","14"),s(l,"y","4"),s(l,"width","4"),s(l,"height","16")},m(o,_){B(o,e,_),B(o,l,_),a=!0},i(o){a||(Se(()=>{n&&n.end(1),r=ze(e,Ke,{}),r.start()}),Se(()=>{u&&u.end(1),i=ze(l,Ke,{}),i.start()}),a=!0)},o(o){r&&r.invalidate(),n=je(e,Me,{}),i&&i.invalidate(),u=je(l,Me,{}),a=!1},d(o){o&&c(e),o&&n&&n.end(),o&&c(l),o&&u&&u.end()}}}function jt(t){let e,r,n,l;const i=[zt,Lt],u=[];function a(o,_){return o[0]?0:1}return r=a(t),n=u[r]=i[r](t),{c(){e=I("svg"),n.c(),this.h()},l(o){e=V(o,"svg",{viewBox:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var _=g(e);n.l(_),_.forEach(c),this.h()},h(){s(e,"viewBox","0 0 24 24"),s(e,"fill","none"),s(e,"stroke-linecap","round"),s(e,"stroke-linejoin","round"),s(e,"class","feather feather-chevron-play h-full w-full stroke-current")},m(o,_){B(o,e,_),u[r].m(e,null),l=!0},p(o,[_]){let m=r;r=a(o),r!==m&&(ut(),K(u[m],1,1,()=>{u[m]=null}),ct(),n=u[r],n||(n=u[r]=i[r](o),n.c()),C(n,1),n.m(e,null))},i(o){l||(C(n),l=!0)},o(o){K(n),l=!1},d(o){o&&c(e),u[r].d()}}}function Ot(t,e,r){let{isPlaying:n}=e;return t.$$set=l=>{"isPlaying"in l&&r(0,n=l.isPlaying)},[n]}class Pt extends he{constructor(e){super(),de(this,e,Ot,jt,me,{isPlaying:0})}}function Ct(t){let e,r,n;return{c(){e=I("svg"),r=I("polyline"),n=I("path"),this.h()},l(l){e=V(l,"svg",{viewBox:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var i=g(e);r=V(i,"polyline",{points:!0}),g(r).forEach(c),n=V(i,"path",{d:!0}),g(n).forEach(c),i.forEach(c),this.h()},h(){s(r,"points","1 4 1 10 7 10"),s(n,"d","M3.51 15a9 9 0 1 0 2.13-9.36L1 10"),s(e,"viewBox","0 0 24 24"),s(e,"fill","none"),s(e,"stroke-linecap","round"),s(e,"stroke-linejoin","round"),s(e,"class","feather feather-rotate-ccw h-full w-full stroke-current")},m(l,i){B(l,e,i),v(e,r),v(e,n)},p:z,i:z,o:z,d(l){l&&c(e)}}}class $t extends he{constructor(e){super(),de(this,e,null,Ct,me,{})}}const{window:Kt}=_t;function nt(t,e,r){const n=t.slice();return n[42]=e[r].timer,n[43]=e[r].task,n}function lt(t){let e,r,n,l,i,u,a,o,_,m,d,x,A;return r=new Re({props:{label:"Work time, min",settings:[10,15,20,25,30,50,60,90,120],onChange:t[27],defaultValue:t[11][J]/t[12],isBreak:t[23](t[9])}}),i=new Re({props:{label:"Break time, min",settings:[5,10,15],isBreak:t[23](t[9]),defaultValue:t[11][Q]/t[12],onChange:t[28]}}),a=new Re({props:{label:"Long break time, min",settings:[15,20,30],isBreak:t[23](t[9]),defaultValue:t[11][F]/t[12],onChange:t[29]}}),_=new Re({props:{label:"Session count",settings:[1,2,3,4,5,6,7,8,9],isBreak:t[23](t[9]),defaultValue:t[11][we],onChange:t[30]}}),{c(){e=y("div"),ne(r.$$.fragment),n=O(),l=y("div"),ne(i.$$.fragment),u=O(),ne(a.$$.fragment),o=O(),ne(_.$$.fragment),this.h()},l(f){e=w(f,"DIV",{class:!0});var h=g(e);le(r.$$.fragment,h),n=P(h),l=w(h,"DIV",{class:!0});var b=g(l);le(i.$$.fragment,b),u=P(b),le(a.$$.fragment,b),b.forEach(c),o=P(h),le(_.$$.fragment,h),h.forEach(c),this.h()},h(){s(l,"class","flex flex-wrap justify-between"),s(e,"class",m="z-10 "+t[24](t[9])+" h-full overflow-auto")},m(f,h){B(f,e,h),se(r,e,null),v(e,n),v(e,l),se(i,l,null),v(l,u),se(a,l,null),v(e,o),se(_,e,null),A=!0},p(f,h){const b={};h[0]&2048&&(b.defaultValue=f[11][J]/f[12]),h[0]&512&&(b.isBreak=f[23](f[9])),r.$set(b);const k={};h[0]&512&&(k.isBreak=f[23](f[9])),h[0]&2048&&(k.defaultValue=f[11][Q]/f[12]),i.$set(k);const D={};h[0]&512&&(D.isBreak=f[23](f[9])),h[0]&2048&&(D.defaultValue=f[11][F]/f[12]),a.$set(D);const R={};h[0]&512&&(R.isBreak=f[23](f[9])),h[0]&2048&&(R.defaultValue=f[11][we]),_.$set(R),(!A||h[0]&512&&m!==(m="z-10 "+f[24](f[9])+" h-full overflow-auto"))&&s(e,"class",m)},i(f){A||(C(r.$$.fragment,f),C(i.$$.fragment,f),C(a.$$.fragment,f),C(_.$$.fragment,f),Se(()=>{x&&x.end(1),d=ze(e,Me,{}),d.start()}),A=!0)},o(f){K(r.$$.fragment,f),K(i.$$.fragment,f),K(a.$$.fragment,f),K(_.$$.fragment,f),d&&d.invalidate(),x=je(e,Me,{}),A=!1},d(f){f&&c(e),ie(r),ie(i),ie(a),ie(_),f&&x&&x.end()}}}function st(t){let e,r,n;return{c(){e=y("div"),this.h()},l(l){e=w(l,"DIV",{title:!0,class:!0}),g(e).forEach(c),this.h()},h(){s(e,"title",r=t[43]),s(e,"class",n="h-4 "+(t[42]===F?"w-10":"w-4")+" rounded-full border-2 border-solid border-current "+([F,Q].includes(t[42])&&"bg-current"))},m(l,i){B(l,e,i)},p(l,i){i[0]&1&&r!==(r=l[43])&&s(e,"title",r),i[0]&1&&n!==(n="h-4 "+(l[42]===F?"w-10":"w-4")+" rounded-full border-2 border-solid border-current "+([F,Q].includes(l[42])&&"bg-current"))&&s(e,"class",n)},d(l){l&&c(e)}}}function Ut(t){let e,r,n,l,i,u;return n=new St({props:{isDarkMode:t[5]}}),{c(){e=y("div"),r=y("button"),ne(n.$$.fragment),this.h()},l(a){e=w(a,"DIV",{class:!0});var o=g(e);r=w(o,"BUTTON",{class:!0});var _=g(r);le(n.$$.fragment,_),_.forEach(c),o.forEach(c),this.h()},h(){s(r,"class","mx-4 my-2 h-12 w-12 self-auto transition-transform active:scale-90"),s(e,"class","absolute top-0 right-0 flex max-h-screen flex-col p-5")},m(a,o){B(a,e,o),v(e,r),se(n,r,null),l=!0,i||(u=re(r,"click",t[22]),i=!0)},p(a,o){const _={};o[0]&32&&(_.isDarkMode=a[5]),n.$set(_)},i(a){l||(C(n.$$.fragment,a),l=!0)},o(a){K(n.$$.fragment,a),l=!1},d(a){a&&c(e),ie(n),i=!1,u()}}}function Wt(t){let e,r,n,l,i,u,a,o,_,m,d,x,A,f,h,b,k,D,R,N,X,Y=t[13](t[10])+"",Z,G,j,oe,pe,ee,ae,ge=t[14](t[10])+"",ve,Te,te,ue,_e,ce,U,Be,fe,$,be,ke,H,Ie,Ne;i=new Bt({}),o=new $t({});let M=t[4]&&lt(t),p=t[0],S=[];for(let E=0;E<p.length;E+=1)S[E]=st(nt(t,p,E));let W=Ut(t);return k=new Nt({}),ue=new Rt({}),U=new Pt({props:{isPlaying:t[2]&&!t[3]}}),{c(){e=y("div"),r=y("div"),n=y("div"),l=y("button"),ne(i.$$.fragment),u=O(),a=y("button"),ne(o.$$.fragment),_=O(),M&&M.c(),m=O(),d=y("div");for(let E=0;E<S.length;E+=1)S[E].c();x=O(),W&&W.c(),A=O(),f=y("div"),h=y("div"),b=y("button"),ne(k.$$.fragment),R=O(),N=y("div"),X=y("div"),Z=Ae(Y),G=O(),j=y("div"),oe=Ae(":"),ee=O(),ae=y("div"),ve=Ae(ge),Te=O(),te=y("button"),ne(ue.$$.fragment),_e=O(),ce=y("button"),ne(U.$$.fragment),Be=O(),fe=y("div"),$=y("span"),this.h()},l(E){e=w(E,"DIV",{class:!0});var T=g(e);r=w(T,"DIV",{class:!0});var q=g(r);n=w(q,"DIV",{class:!0});var L=g(n);l=w(L,"BUTTON",{class:!0});var Ve=g(l);le(i.$$.fragment,Ve),Ve.forEach(c),u=P(L),a=w(L,"BUTTON",{class:!0});var Ue=g(a);le(o.$$.fragment,Ue),Ue.forEach(c),L.forEach(c),_=P(q),M&&M.l(q),q.forEach(c),m=P(T),d=w(T,"DIV",{class:!0});var We=g(d);for(let Oe=0;Oe<S.length;Oe+=1)S[Oe].l(We);We.forEach(c),x=P(T),W&&W.l(T),A=P(T),f=w(T,"DIV",{class:!0});var xe=g(f);h=w(xe,"DIV",{class:!0});var Ee=g(h);b=w(Ee,"BUTTON",{class:!0});var He=g(b);le(k.$$.fragment,He),He.forEach(c),R=P(Ee),N=w(Ee,"DIV",{class:!0});var ye=g(N);X=w(ye,"DIV",{class:!0});var Fe=g(X);Z=De(Fe,Y),Fe.forEach(c),G=P(ye),j=w(ye,"DIV",{class:!0});var Ge=g(j);oe=De(Ge,":"),Ge.forEach(c),ee=P(ye),ae=w(ye,"DIV",{class:!0});var qe=g(ae);ve=De(qe,ge),qe.forEach(c),ye.forEach(c),Te=P(Ee),te=w(Ee,"BUTTON",{class:!0});var Je=g(te);le(ue.$$.fragment,Je),Je.forEach(c),Ee.forEach(c),_e=P(xe),ce=w(xe,"BUTTON",{class:!0});var Qe=g(ce);le(U.$$.fragment,Qe),Qe.forEach(c),xe.forEach(c),Be=P(T),fe=w(T,"DIV",{class:!0});var Xe=g(fe);$=w(Xe,"SPAN",{role:!0,contenteditable:!0,class:!0}),g($).forEach(c),Xe.forEach(c),T.forEach(c),this.h()},h(){s(l,"class","mx-4 my-2 h-12 w-12 self-auto transition-all active:scale-90"),s(a,"class","mx-4 my-2 h-12 w-12 self-auto transition-all active:scale-90"),s(n,"class","flex gap-2"),s(r,"class","absolute top-0 left-0 flex max-h-screen flex-col p-5"),s(d,"class","absolute top-0 m-2 mt-7 flex h-48 max-h-12 max-w-xl flex-wrap content-center justify-center gap-2 overflow-auto"),s(b,"class",D="h-14 w-14 self-center lg:h-32 lg:w-32 "+(!t[0].length&&"invisible")+" transition-transform active:scale-90"),s(X,"class","flex-1"),s(j,"class",pe=(t[2]&&"animate-pulse")+" relative top-[-2px] lg:top-[-10px]"),s(ae,"class","flex-1"),s(N,"class","relative top-[-3px] flex text-center font-mono"),s(te,"class","flex h-14 w-14 self-center transition-transform active:scale-90 lg:h-32 lg:w-32"),s(h,"class","flex font-sans text-6xl lg:text-9xl"),s(ce,"class","mt-8 h-16 w-16 self-center lg:h-20 lg:w-20"),s(f,"class","flex flex-col justify-center self-center object-center align-middle"),s($,"role","textbox"),s($,"contenteditable",""),s($,"class",be="z-10 appearance-none "+t[24](t[9])+" p-3 text-center text-3xl focus:outline-none"),t[1]===void 0&&Se(()=>t[33].call($)),s(fe,"class","absolute bottom-0 m-2 mb-7 justify-center gap-2 overflow-auto file:after:odd:backdrop:flex"),s(e,"class",ke="container relative mx-auto flex min-h-screen min-w-full justify-center "+t[24](t[9]))},m(E,T){B(E,e,T),v(e,r),v(r,n),v(n,l),se(i,l,null),v(n,u),v(n,a),se(o,a,null),v(r,_),M&&M.m(r,null),t[31](r),v(e,m),v(e,d);for(let q=0;q<S.length;q+=1)S[q].m(d,null);t[32](d),v(e,x),W&&W.m(e,null),v(e,A),v(e,f),v(f,h),v(h,b),se(k,b,null),v(h,R),v(h,N),v(N,X),v(X,Z),v(N,G),v(N,j),v(j,oe),v(N,ee),v(N,ae),v(ae,ve),v(h,Te),v(h,te),se(ue,te,null),v(f,_e),v(f,ce),se(U,ce,null),v(e,Be),v(e,fe),v(fe,$),t[1]!==void 0&&($.innerHTML=t[1]),H=!0,Ie||(Ne=[re(Kt,"click",t[26]),re(l,"click",t[20]),re(a,"click",t[21]),re(b,"click",t[19]),re(te,"click",t[18]),re(ce,"click",function(){pt(t[2]?t[16]:t[17])&&(t[2]?t[16]:t[17]).apply(this,arguments)}),re($,"input",t[33])],Ie=!0)},p(E,T){if(t=E,t[4]?M?(M.p(t,T),T[0]&16&&C(M,1)):(M=lt(t),M.c(),C(M,1),M.m(r,null)):M&&(ut(),K(M,1,1,()=>{M=null}),ct()),T[0]&1){p=t[0];let L;for(L=0;L<p.length;L+=1){const Ve=nt(t,p,L);S[L]?S[L].p(Ve,T):(S[L]=st(Ve),S[L].c(),S[L].m(d,null))}for(;L<S.length;L+=1)S[L].d(1);S.length=p.length}W.p(t,T),(!H||T[0]&1&&D!==(D="h-14 w-14 self-center lg:h-32 lg:w-32 "+(!t[0].length&&"invisible")+" transition-transform active:scale-90"))&&s(b,"class",D),(!H||T[0]&1024)&&Y!==(Y=t[13](t[10])+"")&&Le(Z,Y),(!H||T[0]&4&&pe!==(pe=(t[2]&&"animate-pulse")+" relative top-[-2px] lg:top-[-10px]"))&&s(j,"class",pe),(!H||T[0]&1024)&&ge!==(ge=t[14](t[10])+"")&&Le(ve,ge);const q={};T[0]&12&&(q.isPlaying=t[2]&&!t[3]),U.$set(q),(!H||T[0]&512&&be!==(be="z-10 appearance-none "+t[24](t[9])+" p-3 text-center text-3xl focus:outline-none"))&&s($,"class",be),T[0]&2&&t[1]!==$.innerHTML&&($.innerHTML=t[1]),(!H||T[0]&512&&ke!==(ke="container relative mx-auto flex min-h-screen min-w-full justify-center "+t[24](t[9])))&&s(e,"class",ke)},i(E){H||(C(i.$$.fragment,E),C(o.$$.fragment,E),C(M),C(W),C(k.$$.fragment,E),C(ue.$$.fragment,E),C(U.$$.fragment,E),H=!0)},o(E){K(i.$$.fragment,E),K(o.$$.fragment,E),K(M),K(W),K(k.$$.fragment,E),K(ue.$$.fragment,E),K(U.$$.fragment,E),H=!1},d(E){E&&c(e),ie(i),ie(o),M&&M.d(),t[31](null),at(S,E),t[32](null),W&&W.d(),ie(k),ie(ue),ie(U),Ie=!1,mt(Ne)}}}const Ce=1e3,J="WORK_TIMER",Q="BREAK_TIMER",F="LONG_BREAK_TIMER",we="LONG_BREAK_APPEAR",it="Work",Ht="Break",Ft=4;function Gt(t,e,r){let n,l=z,i=()=>(l(),l=vt(G,p=>r(10,n=p)),G),u;t.$$.on_destroy.push(()=>l());const a=60*Ce,o=25*a,_=5*a,m=30*a,d=p=>p.toString().padStart(2,"0"),x=p=>d(Math.floor(p/a)),A=(p,S)=>localStorage[S]?localStorage[S]:p,f=p=>d(Math.floor((p-Number(x(p))*a)/Ce));let h=ft({[J]:A(o,J),[Q]:A(_,Q),[F]:A(m,F),[we]:A(Ft,we)});gt(t,h,p=>r(11,u=p));let b=[],k=it,D=!1,R=!1,N=!1,X=localStorage.theme==="dark"||document.documentElement.classList.contains("dark"),Y,Z,G,j;const oe=()=>{b.length&&b[b.length-1].timer===J?b.length%(u[we]*2-1)===0?(i(r(8,G=Pe(Number(u[F])))),r(9,j=F)):(i(r(8,G=Pe(Number(u[Q])))),r(9,j=Q)):(i(r(8,G=Pe(Number(u[J])))),r(9,j=J)),r(1,k=j!==J?Ht:it)};oe();const pe=()=>{r(3,R=!R)};let ee=-1;const ae=()=>{r(2,D=!0),ee=setInterval(function(){D||clearInterval(ee),R||n>0&&bt(G,n-=1e3,n),n===0&&D&&(r(2,D=!1),r(0,b=[...b,{timer:j,task:k}]),oe(),clearInterval(ee),j===Q&&ae())},Ce)},ge=()=>{r(2,D=!1),clearInterval(ee),r(0,b=[...b,{timer:j,task:k}]),fe(Z),oe()},ve=()=>{r(2,D=!1),clearInterval(ee),r(0,b=[...b.slice(0,-1)]),fe(Z),oe()},Te=()=>{r(4,N=!N)},te=(p=!0)=>{r(2,D=!1),clearInterval(ee),r(0,b=[]),oe(),p&&kt&&(localStorage.removeItem("theme"),window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"))},ue=()=>{document.documentElement.classList.contains("dark")?(r(5,X=!1),localStorage.theme="light",document.documentElement.classList.remove("dark")):(r(5,X=!0),localStorage.theme="dark",document.documentElement.classList.add("dark"))},_e=p=>p!==J,ce=p=>`transition-[background-color] duration-500 ${_e(p)&&"bg-lime-500 dark:bg-lime-800"} ${_e(p)&&"text-white dark:text-zinc-200"} bg-zinc-50 dark:bg-zinc-800`,U=(p,S)=>{[J,Q,F].includes(S)&&(p*=a),h.update(W=>(W[S]=p,W)),localStorage[S]=p,te(!1)},Be=p=>{!Y.contains(p.target)&&N&&r(4,N=!1)},fe=async p=>{p.scroll({top:p.scrollHeight,behavior:"smooth"})},$=p=>U(Number(p),J),be=p=>U(Number(p),Q),ke=p=>U(Number(p),F),H=p=>U(Number(p),we);function Ie(p){Ze[p?"unshift":"push"](()=>{Y=p,r(6,Y)})}function Ne(p){Ze[p?"unshift":"push"](()=>{Z=p,r(7,Z)})}function M(){k=this.innerHTML,r(1,k)}return[b,k,D,R,N,X,Y,Z,G,j,n,u,a,x,f,h,pe,ae,ge,ve,Te,te,ue,_e,ce,U,Be,$,be,ke,H,Ie,Ne,M]}class Qt extends he{constructor(e){super(),de(this,e,Gt,Wt,me,{},null,[-1,-1])}}export{Qt as default};
