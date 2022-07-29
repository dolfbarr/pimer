import{C as Ye,K as dt,L as ht,M as at,S as de,i as he,s as ge,l as y,r as Ae,a as O,m as w,n as m,u as De,h as c,c as P,p as l,b as B,J as v,N as le,v as Le,E as z,O as ot,P as I,Q as V,g as ut,t as K,d as ct,f as C,R as Se,T as ze,U as je,w as se,x as ie,y as ae,B as oe,V as gt,W as mt,X as _t,Y as pt,Z as Ze,_ as vt,$ as bt}from"../chunks/index-2f7ad5c8.js";import{w as ft}from"../chunks/index-26c65db5.js";const kt=!0;function Et(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function et(t){return Object.prototype.toString.call(t)==="[object Date]"}function $e(t,e){if(t===e||t!==t)return()=>t;const r=typeof t;if(r!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map((s,i)=>$e(t[i],s));return s=>n.map(i=>i(s))}if(r==="object"){if(!t||!e)throw new Error("Object cannot be null");if(et(t)&&et(e)){t=t.getTime(),e=e.getTime();const i=e-t;return u=>new Date(t+u*i)}const n=Object.keys(e),s={};return n.forEach(i=>{s[i]=$e(t[i],e[i])}),i=>{const u={};return n.forEach(o=>{u[o]=s[o](i)}),u}}if(r==="number"){const n=e-t;return s=>t+s*n}throw new Error(`Cannot interpolate ${r} values`)}function Pe(t,e={}){const r=ft(t);let n,s=t;function i(u,o){if(t==null)return r.set(t=u),Promise.resolve();s=u;let a=n,_=!1,{delay:g=0,duration:h=400,easing:x=at,interpolate:A=$e}=Ye(Ye({},e),o);if(h===0)return a&&(a.abort(),a=null),r.set(t=s),Promise.resolve();const f=dt()+g;let d;return n=ht(b=>{if(b<f)return!0;_||(d=A(t,u),typeof h=="function"&&(h=h(t,u)),_=!0),a&&(a.abort(),a=null);const k=b-f;return k>h?(r.set(t=u),!1):(r.set(t=d(x(k/h))),!0)}),n.promise}return{set:i,update:(u,o)=>i(u(s,t),o),subscribe:r.subscribe}}function Me(t,{delay:e=0,duration:r=400,easing:n=at}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:r,easing:n,css:i=>`opacity: ${i*s}`}}function Ke(t,{delay:e=0,speed:r,duration:n,easing:s=Et}={}){let i=t.getTotalLength();const u=getComputedStyle(t);return u.strokeLinecap!=="butt"&&(i+=parseInt(u.strokeWidth)),n===void 0?r===void 0?n=800:n=i/r:typeof n=="function"&&(n=n(i)),{delay:e,duration:n,easing:s,css:(o,a)=>`stroke-dasharray: ${o*i} ${a*i}`}}function tt(t,e,r){const n=t.slice();return n[8]=e[r],n}function rt(t){let e,r=t[8].toString()+"",n,s,i;function u(){return t[7](t[8])}return{c(){e=y("button"),n=Ae(r),this.h()},l(o){e=w(o,"BUTTON",{class:!0});var a=m(e);n=De(a,r),a.forEach(c),this.h()},h(){l(e,"class","w-10 self-auto rounded border-2 border-current p-1 transition-all active:scale-90")},m(o,a){B(o,e,a),v(e,n),s||(i=le(e,"click",u),s=!0)},p(o,a){t=o,a&8&&r!==(r=t[8].toString()+"")&&Le(n,r)},d(o){o&&c(e),s=!1,i()}}}function yt(t){let e,r,n,s,i,u,o,a,_,g,h,x,A=t[3],f=[];for(let d=0;d<A.length;d+=1)f[d]=rt(tt(t,A,d));return{c(){e=y("div"),r=y("div"),n=y("span"),s=Ae(t[1]),u=O(),o=y("div"),a=y("input"),g=O();for(let d=0;d<f.length;d+=1)f[d].c();this.h()},l(d){e=w(d,"DIV",{});var b=m(e);r=w(b,"DIV",{class:!0});var k=m(r);n=w(k,"SPAN",{class:!0});var D=m(n);s=De(D,t[1]),D.forEach(c),u=P(k),o=w(k,"DIV",{class:!0});var R=m(o);a=w(R,"INPUT",{placeholder:!0,type:!0,class:!0}),g=P(R);for(let N=0;N<f.length;N+=1)f[N].l(R);R.forEach(c),k.forEach(c),b.forEach(c),this.h()},h(){l(n,"class",i="absolute z-10 text-sm transition-[background-color] duration-500 "+(t[2]?"bg-lime-500 dark:bg-lime-800":"bg-zinc-50 dark:bg-zinc-800")+" -top-5 left-4 p-2 font-semibold"),l(a,"placeholder","?"),l(a,"type","text"),a.value=t[0],l(a,"class",_="appearance-none "+(t[2]?"bg-zing-white dark:bg-zinc-200 text-lime-500 dark:text-lime-800":"bg-gray-900 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-800")+" border-10 w-10 rounded border-current p-1 text-center accent-black"),l(o,"class","flex flex-wrap gap-2"),l(r,"class","relative m-5 flex rounded border-2 border-solid border-current bg-transparent p-5")},m(d,b){B(d,e,b),v(e,r),v(r,n),v(n,s),v(r,u),v(r,o),v(o,a),v(o,g);for(let k=0;k<f.length;k+=1)f[k].m(o,null);h||(x=le(a,"input",t[6]),h=!0)},p(d,[b]){if(b&2&&Le(s,d[1]),b&4&&i!==(i="absolute z-10 text-sm transition-[background-color] duration-500 "+(d[2]?"bg-lime-500 dark:bg-lime-800":"bg-zinc-50 dark:bg-zinc-800")+" -top-5 left-4 p-2 font-semibold")&&l(n,"class",i),b&1&&a.value!==d[0]&&(a.value=d[0]),b&4&&_!==(_="appearance-none "+(d[2]?"bg-zing-white dark:bg-zinc-200 text-lime-500 dark:text-lime-800":"bg-gray-900 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-800")+" border-10 w-10 rounded border-current p-1 text-center accent-black")&&l(a,"class",_),b&25){A=d[3];let k;for(k=0;k<A.length;k+=1){const D=tt(d,A,k);f[k]?f[k].p(D,b):(f[k]=rt(D),f[k].c(),f[k].m(o,null))}for(;k<f.length;k+=1)f[k].d(1);f.length=A.length}},i:z,o:z,d(d){d&&c(e),ot(f,d),h=!1,x()}}}function wt(t,e,r){let{label:n}=e,{isBreak:s}=e,{settings:i}=e,{onChange:u}=e,{defaultValue:o=""}=e,{value:a=o}=e;const _=h=>u(h.currentTarget.value),g=h=>{u(h.toString()),r(0,a=h.toString())};return t.$$set=h=>{"label"in h&&r(1,n=h.label),"isBreak"in h&&r(2,s=h.isBreak),"settings"in h&&r(3,i=h.settings),"onChange"in h&&r(4,u=h.onChange),"defaultValue"in h&&r(5,o=h.defaultValue),"value"in h&&r(0,a=h.value)},[a,n,s,i,u,o,_,g]}class Re extends de{constructor(e){super(),he(this,e,wt,yt,ge,{label:1,isBreak:2,settings:3,onChange:4,defaultValue:5,value:0})}}function Tt(t){let e,r,n;return{c(){e=I("svg"),r=I("circle"),n=I("path"),this.h()},l(s){e=V(s,"svg",{viewBox:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var i=m(e);r=V(i,"circle",{cx:!0,cy:!0,r:!0}),m(r).forEach(c),n=V(i,"path",{d:!0}),m(n).forEach(c),i.forEach(c),this.h()},h(){l(r,"cx","12"),l(r,"cy","12"),l(r,"r","3"),l(n,"d","M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"),l(e,"viewBox","0 0 24 24"),l(e,"fill","none"),l(e,"stroke-linecap","round"),l(e,"stroke-linejoin","round"),l(e,"class","feather feather-settings h-full w-full stroke-current")},m(s,i){B(s,e,i),v(e,r),v(e,n)},p:z,i:z,o:z,d(s){s&&c(e)}}}class Bt extends de{constructor(e){super(),he(this,e,null,Tt,ge,{})}}function It(t){let e;return{c(){e=I("path"),this.h()},l(r){e=V(r,"path",{d:!0}),m(e).forEach(c),this.h()},h(){l(e,"d","M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z")},m(r,n){B(r,e,n)},d(r){r&&c(e)}}}function Vt(t){let e,r,n,s,i,u,o,a,_;return{c(){e=I("circle"),r=I("line"),n=I("line"),s=I("line"),i=I("line"),u=I("line"),o=I("line"),a=I("line"),_=I("line"),this.h()},l(g){e=V(g,"circle",{cx:!0,cy:!0,r:!0}),m(e).forEach(c),r=V(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(r).forEach(c),n=V(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(n).forEach(c),s=V(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(s).forEach(c),i=V(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(i).forEach(c),u=V(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(u).forEach(c),o=V(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(o).forEach(c),a=V(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(a).forEach(c),_=V(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(_).forEach(c),this.h()},h(){l(e,"cx","12"),l(e,"cy","12"),l(e,"r","5"),l(r,"x1","12"),l(r,"y1","1"),l(r,"x2","12"),l(r,"y2","3"),l(n,"x1","12"),l(n,"y1","21"),l(n,"x2","12"),l(n,"y2","23"),l(s,"x1","4.22"),l(s,"y1","4.22"),l(s,"x2","5.64"),l(s,"y2","5.64"),l(i,"x1","18.36"),l(i,"y1","18.36"),l(i,"x2","19.78"),l(i,"y2","19.78"),l(u,"x1","1"),l(u,"y1","12"),l(u,"x2","3"),l(u,"y2","12"),l(o,"x1","21"),l(o,"y1","12"),l(o,"x2","23"),l(o,"y2","12"),l(a,"x1","4.22"),l(a,"y1","19.78"),l(a,"x2","5.64"),l(a,"y2","18.36"),l(_,"x1","18.36"),l(_,"y1","5.64"),l(_,"x2","19.78"),l(_,"y2","4.22")},m(g,h){B(g,e,h),B(g,r,h),B(g,n,h),B(g,s,h),B(g,i,h),B(g,u,h),B(g,o,h),B(g,a,h),B(g,_,h)},d(g){g&&c(e),g&&c(r),g&&c(n),g&&c(s),g&&c(i),g&&c(u),g&&c(o),g&&c(a),g&&c(_)}}}function At(t){let e;function r(i,u){return i[0]?Vt:It}let n=r(t),s=n(t);return{c(){e=I("svg"),s.c(),this.h()},l(i){e=V(i,"svg",{viewBox:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var u=m(e);s.l(u),u.forEach(c),this.h()},h(){l(e,"viewBox","0 0 24 24"),l(e,"fill","none"),l(e,"stroke-linecap","round"),l(e,"stroke-linejoin","round"),l(e,"class","feather feather-settings h-full w-full stroke-current")},m(i,u){B(i,e,u),s.m(e,null)},p(i,[u]){n!==(n=r(i))&&(s.d(1),s=n(i),s&&(s.c(),s.m(e,null)))},i:z,o:z,d(i){i&&c(e),s.d()}}}function Dt(t,e,r){let{isDarkMode:n}=e;return t.$$set=s=>{"isDarkMode"in s&&r(0,n=s.isDarkMode)},[n]}class St extends de{constructor(e){super(),he(this,e,Dt,At,ge,{isDarkMode:0})}}function Mt(t){let e,r;return{c(){e=I("svg"),r=I("polyline"),this.h()},l(n){e=V(n,"svg",{viewBox:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var s=m(e);r=V(s,"polyline",{points:!0}),m(r).forEach(c),s.forEach(c),this.h()},h(){l(r,"points","15 18 9 12 15 6"),l(e,"viewBox","0 0 24 24"),l(e,"fill","none"),l(e,"stroke-linecap","round"),l(e,"stroke-linejoin","round"),l(e,"class","feather feather-chevron-left h-full w-full stroke-current")},m(n,s){B(n,e,s),v(e,r)},p:z,i:z,o:z,d(n){n&&c(e)}}}class Nt extends de{constructor(e){super(),he(this,e,null,Mt,ge,{})}}function xt(t){let e,r;return{c(){e=I("svg"),r=I("polyline"),this.h()},l(n){e=V(n,"svg",{viewBox:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var s=m(e);r=V(s,"polyline",{points:!0}),m(r).forEach(c),s.forEach(c),this.h()},h(){l(r,"points","9 18 15 12 9 6"),l(e,"viewBox","0 0 24 24"),l(e,"fill","none"),l(e,"stroke-linecap","round"),l(e,"stroke-linejoin","round"),l(e,"class","feather feather-chevron-right h-full w-full stroke-current")},m(n,s){B(n,e,s),v(e,r)},p:z,i:z,o:z,d(n){n&&c(e)}}}class Rt extends de{constructor(e){super(),he(this,e,null,xt,ge,{})}}function Lt(t){let e,r,n,s;return{c(){e=I("polygon"),this.h()},l(i){e=V(i,"polygon",{points:!0}),m(e).forEach(c),this.h()},h(){l(e,"points","5 3 19 12 5 21 5 3")},m(i,u){B(i,e,u),s=!0},i(i){s||(Se(()=>{n&&n.end(1),r=ze(e,Ke,{}),r.start()}),s=!0)},o(i){r&&r.invalidate(),n=je(e,Me,{}),s=!1},d(i){i&&c(e),i&&n&&n.end()}}}function zt(t){let e,r,n,s,i,u,o;return{c(){e=I("rect"),s=I("rect"),this.h()},l(a){e=V(a,"rect",{x:!0,y:!0,width:!0,height:!0}),m(e).forEach(c),s=V(a,"rect",{x:!0,y:!0,width:!0,height:!0}),m(s).forEach(c),this.h()},h(){l(e,"x","6"),l(e,"y","4"),l(e,"width","4"),l(e,"height","16"),l(s,"x","14"),l(s,"y","4"),l(s,"width","4"),l(s,"height","16")},m(a,_){B(a,e,_),B(a,s,_),o=!0},i(a){o||(Se(()=>{n&&n.end(1),r=ze(e,Ke,{}),r.start()}),Se(()=>{u&&u.end(1),i=ze(s,Ke,{}),i.start()}),o=!0)},o(a){r&&r.invalidate(),n=je(e,Me,{}),i&&i.invalidate(),u=je(s,Me,{}),o=!1},d(a){a&&c(e),a&&n&&n.end(),a&&c(s),a&&u&&u.end()}}}function jt(t){let e,r,n,s;const i=[zt,Lt],u=[];function o(a,_){return a[0]?0:1}return r=o(t),n=u[r]=i[r](t),{c(){e=I("svg"),n.c(),this.h()},l(a){e=V(a,"svg",{viewBox:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var _=m(e);n.l(_),_.forEach(c),this.h()},h(){l(e,"viewBox","0 0 24 24"),l(e,"fill","none"),l(e,"stroke-linecap","round"),l(e,"stroke-linejoin","round"),l(e,"class","feather feather-chevron-play h-full w-full stroke-current")},m(a,_){B(a,e,_),u[r].m(e,null),s=!0},p(a,[_]){let g=r;r=o(a),r!==g&&(ut(),K(u[g],1,1,()=>{u[g]=null}),ct(),n=u[r],n||(n=u[r]=i[r](a),n.c()),C(n,1),n.m(e,null))},i(a){s||(C(n),s=!0)},o(a){K(n),s=!1},d(a){a&&c(e),u[r].d()}}}function Ot(t,e,r){let{isPlaying:n}=e;return t.$$set=s=>{"isPlaying"in s&&r(0,n=s.isPlaying)},[n]}class Pt extends de{constructor(e){super(),he(this,e,Ot,jt,ge,{isPlaying:0})}}function Ct(t){let e,r,n;return{c(){e=I("svg"),r=I("polyline"),n=I("path"),this.h()},l(s){e=V(s,"svg",{viewBox:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var i=m(e);r=V(i,"polyline",{points:!0}),m(r).forEach(c),n=V(i,"path",{d:!0}),m(n).forEach(c),i.forEach(c),this.h()},h(){l(r,"points","1 4 1 10 7 10"),l(n,"d","M3.51 15a9 9 0 1 0 2.13-9.36L1 10"),l(e,"viewBox","0 0 24 24"),l(e,"fill","none"),l(e,"stroke-linecap","round"),l(e,"stroke-linejoin","round"),l(e,"class","feather feather-rotate-ccw h-full w-full stroke-current")},m(s,i){B(s,e,i),v(e,r),v(e,n)},p:z,i:z,o:z,d(s){s&&c(e)}}}class $t extends de{constructor(e){super(),he(this,e,null,Ct,ge,{})}}const{window:Kt}=_t;function nt(t,e,r){const n=t.slice();return n[42]=e[r].timer,n[43]=e[r].task,n}function lt(t){let e,r,n,s,i,u,o,a,_,g,h,x,A;return r=new Re({props:{label:"Work time, min",settings:[10,15,20,25,30,50,60,90,120],onChange:t[27],defaultValue:t[11][Q]/t[12],isBreak:t[23](t[9])}}),i=new Re({props:{label:"Break time, min",settings:[5,10,15],isBreak:t[23](t[9]),defaultValue:t[11][X]/t[12],onChange:t[28]}}),o=new Re({props:{label:"Long break time, min",settings:[15,20,30],isBreak:t[23](t[9]),defaultValue:t[11][F]/t[12],onChange:t[29]}}),_=new Re({props:{label:"Session count",settings:[1,2,3,4,5,6,7,8,9],isBreak:t[23](t[9]),defaultValue:t[11][we],onChange:t[30]}}),{c(){e=y("div"),se(r.$$.fragment),n=O(),s=y("div"),se(i.$$.fragment),u=O(),se(o.$$.fragment),a=O(),se(_.$$.fragment),this.h()},l(f){e=w(f,"DIV",{class:!0,"data-testid":!0});var d=m(e);ie(r.$$.fragment,d),n=P(d),s=w(d,"DIV",{class:!0});var b=m(s);ie(i.$$.fragment,b),u=P(b),ie(o.$$.fragment,b),b.forEach(c),a=P(d),ie(_.$$.fragment,d),d.forEach(c),this.h()},h(){l(s,"class","flex flex-wrap justify-between"),l(e,"class",g="z-10 "+t[24](t[9])+" h-full overflow-auto"),l(e,"data-testid","settings-container")},m(f,d){B(f,e,d),ae(r,e,null),v(e,n),v(e,s),ae(i,s,null),v(s,u),ae(o,s,null),v(e,a),ae(_,e,null),A=!0},p(f,d){const b={};d[0]&2048&&(b.defaultValue=f[11][Q]/f[12]),d[0]&512&&(b.isBreak=f[23](f[9])),r.$set(b);const k={};d[0]&512&&(k.isBreak=f[23](f[9])),d[0]&2048&&(k.defaultValue=f[11][X]/f[12]),i.$set(k);const D={};d[0]&512&&(D.isBreak=f[23](f[9])),d[0]&2048&&(D.defaultValue=f[11][F]/f[12]),o.$set(D);const R={};d[0]&512&&(R.isBreak=f[23](f[9])),d[0]&2048&&(R.defaultValue=f[11][we]),_.$set(R),(!A||d[0]&512&&g!==(g="z-10 "+f[24](f[9])+" h-full overflow-auto"))&&l(e,"class",g)},i(f){A||(C(r.$$.fragment,f),C(i.$$.fragment,f),C(o.$$.fragment,f),C(_.$$.fragment,f),Se(()=>{x&&x.end(1),h=ze(e,Me,{}),h.start()}),A=!0)},o(f){K(r.$$.fragment,f),K(i.$$.fragment,f),K(o.$$.fragment,f),K(_.$$.fragment,f),h&&h.invalidate(),x=je(e,Me,{}),A=!1},d(f){f&&c(e),oe(r),oe(i),oe(o),oe(_),f&&x&&x.end()}}}function st(t){let e,r,n;return{c(){e=y("div"),this.h()},l(s){e=w(s,"DIV",{title:!0,"data-testid":!0,class:!0}),m(e).forEach(c),this.h()},h(){l(e,"title",r=t[43]),l(e,"data-testid","session-dot"),l(e,"class",n="h-4 "+(t[42]===F?"w-10":"w-4")+" rounded-full border-2 border-solid border-current "+([F,X].includes(t[42])&&"bg-current"))},m(s,i){B(s,e,i)},p(s,i){i[0]&1&&r!==(r=s[43])&&l(e,"title",r),i[0]&1&&n!==(n="h-4 "+(s[42]===F?"w-10":"w-4")+" rounded-full border-2 border-solid border-current "+([F,X].includes(s[42])&&"bg-current"))&&l(e,"class",n)},d(s){s&&c(e)}}}function Ut(t){let e,r,n,s,i,u;return n=new St({props:{isDarkMode:t[5]}}),{c(){e=y("div"),r=y("button"),se(n.$$.fragment),this.h()},l(o){e=w(o,"DIV",{class:!0,"data-testid":!0});var a=m(e);r=w(a,"BUTTON",{class:!0});var _=m(r);ie(n.$$.fragment,_),_.forEach(c),a.forEach(c),this.h()},h(){l(r,"class","mx-4 my-2 h-12 w-12 self-auto transition-transform active:scale-90"),l(e,"class","absolute top-0 right-0 flex max-h-screen flex-col p-5"),l(e,"data-testid","mode-button")},m(o,a){B(o,e,a),v(e,r),ae(n,r,null),s=!0,i||(u=le(r,"click",t[22]),i=!0)},p(o,a){const _={};a[0]&32&&(_.isDarkMode=o[5]),n.$set(_)},i(o){s||(C(n.$$.fragment,o),s=!0)},o(o){K(n.$$.fragment,o),s=!1},d(o){o&&c(e),oe(n),i=!1,u()}}}function Wt(t){let e,r,n,s,i,u,o,a,_,g,h,x,A,f,d,b,k,D,R,N,Y,Z=t[13](t[10])+"",ee,G,j,ue,pe,te,ce,me=t[14](t[10])+"",ve,Te,q,fe,_e,re,U,Be,ne,$,be,ke,H,Ie,Ne;i=new Bt({}),a=new $t({});let M=t[4]&&lt(t),p=t[0],S=[];for(let E=0;E<p.length;E+=1)S[E]=st(nt(t,p,E));let W=Ut(t);return k=new Nt({}),fe=new Rt({}),U=new Pt({props:{isPlaying:t[2]&&!t[3]}}),{c(){e=y("div"),r=y("div"),n=y("div"),s=y("button"),se(i.$$.fragment),u=O(),o=y("button"),se(a.$$.fragment),_=O(),M&&M.c(),g=O(),h=y("div");for(let E=0;E<S.length;E+=1)S[E].c();x=O(),W&&W.c(),A=O(),f=y("div"),d=y("div"),b=y("button"),se(k.$$.fragment),R=O(),N=y("div"),Y=y("div"),ee=Ae(Z),G=O(),j=y("div"),ue=Ae(":"),te=O(),ce=y("div"),ve=Ae(me),Te=O(),q=y("button"),se(fe.$$.fragment),_e=O(),re=y("button"),se(U.$$.fragment),Be=O(),ne=y("div"),$=y("span"),this.h()},l(E){e=w(E,"DIV",{class:!0});var T=m(e);r=w(T,"DIV",{class:!0});var J=m(r);n=w(J,"DIV",{class:!0});var L=m(n);s=w(L,"BUTTON",{class:!0,"data-testid":!0});var Ve=m(s);ie(i.$$.fragment,Ve),Ve.forEach(c),u=P(L),o=w(L,"BUTTON",{class:!0,"data-testid":!0});var Ue=m(o);ie(a.$$.fragment,Ue),Ue.forEach(c),L.forEach(c),_=P(J),M&&M.l(J),J.forEach(c),g=P(T),h=w(T,"DIV",{class:!0,"data-testid":!0});var We=m(h);for(let Oe=0;Oe<S.length;Oe+=1)S[Oe].l(We);We.forEach(c),x=P(T),W&&W.l(T),A=P(T),f=w(T,"DIV",{class:!0,"data-testid":!0});var xe=m(f);d=w(xe,"DIV",{class:!0});var Ee=m(d);b=w(Ee,"BUTTON",{"data-testid":!0,class:!0});var He=m(b);ie(k.$$.fragment,He),He.forEach(c),R=P(Ee),N=w(Ee,"DIV",{class:!0,"data-testid":!0});var ye=m(N);Y=w(ye,"DIV",{class:!0});var Fe=m(Y);ee=De(Fe,Z),Fe.forEach(c),G=P(ye),j=w(ye,"DIV",{class:!0});var Ge=m(j);ue=De(Ge,":"),Ge.forEach(c),te=P(ye),ce=w(ye,"DIV",{class:!0});var qe=m(ce);ve=De(qe,me),qe.forEach(c),ye.forEach(c),Te=P(Ee),q=w(Ee,"BUTTON",{"data-testid":!0,class:!0});var Je=m(q);ie(fe.$$.fragment,Je),Je.forEach(c),Ee.forEach(c),_e=P(xe),re=w(xe,"BUTTON",{class:!0,"data-testid":!0});var Qe=m(re);ie(U.$$.fragment,Qe),Qe.forEach(c),xe.forEach(c),Be=P(T),ne=w(T,"DIV",{class:!0,"data-testid":!0});var Xe=m(ne);$=w(Xe,"SPAN",{role:!0,contenteditable:!0,class:!0}),m($).forEach(c),Xe.forEach(c),T.forEach(c),this.h()},h(){l(s,"class","mx-4 my-2 h-12 w-12 self-auto transition-all active:scale-90"),l(s,"data-testid","settings-button"),l(o,"class","mx-4 my-2 h-12 w-12 self-auto transition-all active:scale-90"),l(o,"data-testid","reset-button"),l(n,"class","flex gap-2"),l(r,"class","absolute top-0 left-0 flex max-h-screen flex-col p-5"),l(h,"class","absolute top-24 m-2 flex h-48 max-h-10 max-w-xl flex-wrap content-center justify-center gap-2 overflow-auto lg:top-7 lg:max-h-12 landscape:invisible landscape:lg:visible"),l(h,"data-testid","sessions-container"),l(b,"data-testid","prev-button"),l(b,"class",D="h-14 w-14 self-center lg:h-32 lg:w-32 "+(!t[0].length&&"invisible")+" transition-transform active:scale-90"),l(Y,"class","flex-1"),l(j,"class",pe=(t[2]&&"animate-pulse")+" relative top-[-2px] lg:top-[-10px]"),l(ce,"class","flex-1"),l(N,"class","relative top-[-3px] flex text-center font-mono"),l(N,"data-testid","timer-count"),l(q,"data-testid","next-button"),l(q,"class","flex h-14 w-14 self-center transition-transform active:scale-90 lg:h-32 lg:w-32"),l(d,"class","flex font-sans text-6xl lg:text-9xl"),l(re,"class","mt-2 h-16 w-16 self-center lg:mt-8 lg:h-20 lg:w-20"),l(re,"data-testid","play-button"),l(f,"class","flex flex-col justify-center self-center object-center align-middle"),l(f,"data-testid","timer"),l($,"role","textbox"),l($,"contenteditable",""),l($,"class",be="z-10 appearance-none "+t[24](t[9])+" text-center text-3xl focus:outline-none"),t[1]===void 0&&Se(()=>t[33].call($)),l(ne,"class","absolute bottom-7 m-2 justify-center gap-2 overflow-auto file:after:odd:backdrop:flex"),l(ne,"data-testid","task-name"),l(e,"class",ke="container relative mx-auto flex min-h-screen min-w-full justify-center "+t[24](t[9]))},m(E,T){B(E,e,T),v(e,r),v(r,n),v(n,s),ae(i,s,null),v(n,u),v(n,o),ae(a,o,null),v(r,_),M&&M.m(r,null),t[31](r),v(e,g),v(e,h);for(let J=0;J<S.length;J+=1)S[J].m(h,null);t[32](h),v(e,x),W&&W.m(e,null),v(e,A),v(e,f),v(f,d),v(d,b),ae(k,b,null),v(d,R),v(d,N),v(N,Y),v(Y,ee),v(N,G),v(N,j),v(j,ue),v(N,te),v(N,ce),v(ce,ve),v(d,Te),v(d,q),ae(fe,q,null),v(f,_e),v(f,re),ae(U,re,null),v(e,Be),v(e,ne),v(ne,$),t[1]!==void 0&&($.innerHTML=t[1]),H=!0,Ie||(Ne=[le(Kt,"click",t[26]),le(s,"click",t[20]),le(o,"click",t[21]),le(b,"click",t[19]),le(q,"click",t[18]),le(re,"click",function(){pt(t[2]?t[16]:t[17])&&(t[2]?t[16]:t[17]).apply(this,arguments)}),le($,"input",t[33])],Ie=!0)},p(E,T){if(t=E,t[4]?M?(M.p(t,T),T[0]&16&&C(M,1)):(M=lt(t),M.c(),C(M,1),M.m(r,null)):M&&(ut(),K(M,1,1,()=>{M=null}),ct()),T[0]&1){p=t[0];let L;for(L=0;L<p.length;L+=1){const Ve=nt(t,p,L);S[L]?S[L].p(Ve,T):(S[L]=st(Ve),S[L].c(),S[L].m(h,null))}for(;L<S.length;L+=1)S[L].d(1);S.length=p.length}W.p(t,T),(!H||T[0]&1&&D!==(D="h-14 w-14 self-center lg:h-32 lg:w-32 "+(!t[0].length&&"invisible")+" transition-transform active:scale-90"))&&l(b,"class",D),(!H||T[0]&1024)&&Z!==(Z=t[13](t[10])+"")&&Le(ee,Z),(!H||T[0]&4&&pe!==(pe=(t[2]&&"animate-pulse")+" relative top-[-2px] lg:top-[-10px]"))&&l(j,"class",pe),(!H||T[0]&1024)&&me!==(me=t[14](t[10])+"")&&Le(ve,me);const J={};T[0]&12&&(J.isPlaying=t[2]&&!t[3]),U.$set(J),(!H||T[0]&512&&be!==(be="z-10 appearance-none "+t[24](t[9])+" text-center text-3xl focus:outline-none"))&&l($,"class",be),T[0]&2&&t[1]!==$.innerHTML&&($.innerHTML=t[1]),(!H||T[0]&512&&ke!==(ke="container relative mx-auto flex min-h-screen min-w-full justify-center "+t[24](t[9])))&&l(e,"class",ke)},i(E){H||(C(i.$$.fragment,E),C(a.$$.fragment,E),C(M),C(W),C(k.$$.fragment,E),C(fe.$$.fragment,E),C(U.$$.fragment,E),H=!0)},o(E){K(i.$$.fragment,E),K(a.$$.fragment,E),K(M),K(W),K(k.$$.fragment,E),K(fe.$$.fragment,E),K(U.$$.fragment,E),H=!1},d(E){E&&c(e),oe(i),oe(a),M&&M.d(),t[31](null),ot(S,E),t[32](null),W&&W.d(),oe(k),oe(fe),oe(U),Ie=!1,gt(Ne)}}}const Ce=1e3,Q="WORK_TIMER",X="BREAK_TIMER",F="LONG_BREAK_TIMER",we="LONG_BREAK_APPEAR",it="Work",Ht="Break",Ft=4;function Gt(t,e,r){let n,s=z,i=()=>(s(),s=vt(G,p=>r(10,n=p)),G),u;t.$$.on_destroy.push(()=>s());const o=60*Ce,a=25*o,_=5*o,g=30*o,h=p=>p.toString().padStart(2,"0"),x=p=>h(Math.floor(p/o)),A=(p,S)=>localStorage[S]?localStorage[S]:p,f=p=>h(Math.floor((p-Number(x(p))*o)/Ce));let d=ft({[Q]:A(a,Q),[X]:A(_,X),[F]:A(g,F),[we]:A(Ft,we)});mt(t,d,p=>r(11,u=p));let b=[],k=it,D=!1,R=!1,N=!1,Y=localStorage.theme==="dark"||document.documentElement.classList.contains("dark"),Z,ee,G,j;const ue=()=>{b.length&&b[b.length-1].timer===Q?b.length%(u[we]*2-1)===0?(i(r(8,G=Pe(Number(u[F])))),r(9,j=F)):(i(r(8,G=Pe(Number(u[X])))),r(9,j=X)):(i(r(8,G=Pe(Number(u[Q])))),r(9,j=Q)),r(1,k=j!==Q?Ht:it)};ue();const pe=()=>{r(3,R=!R)};let te=-1;const ce=()=>{r(2,D=!0),te=setInterval(function(){D||clearInterval(te),R||n>0&&bt(G,n-=1e3,n),n===0&&D&&(r(2,D=!1),r(0,b=[...b,{timer:j,task:k}]),ue(),clearInterval(te),j===X&&ce())},Ce)},me=()=>{r(2,D=!1),clearInterval(te),r(0,b=[...b,{timer:j,task:k}]),ne(ee),ue()},ve=()=>{r(2,D=!1),clearInterval(te),r(0,b=[...b.slice(0,-1)]),ne(ee),ue()},Te=()=>{r(4,N=!N)},q=(p=!0)=>{r(2,D=!1),clearInterval(te),r(0,b=[]),ue(),p&&kt&&(localStorage.removeItem("theme"),window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"))},fe=()=>{document.documentElement.classList.contains("dark")?(r(5,Y=!1),localStorage.theme="light",document.documentElement.classList.remove("dark")):(r(5,Y=!0),localStorage.theme="dark",document.documentElement.classList.add("dark"))},_e=p=>p!==Q,re=p=>`transition-[background-color] duration-500 ${_e(p)&&"bg-lime-500 dark:bg-lime-800"} ${_e(p)&&"text-white dark:text-zinc-200"} bg-zinc-50 dark:bg-zinc-800`,U=(p,S)=>{[Q,X,F].includes(S)&&(p*=o),d.update(W=>(W[S]=p,W)),localStorage[S]=p,q(!1)},Be=p=>{!Z.contains(p.target)&&N&&r(4,N=!1)},ne=async p=>{p.scroll({top:p.scrollHeight,behavior:"smooth"})},$=p=>U(Number(p),Q),be=p=>U(Number(p),X),ke=p=>U(Number(p),F),H=p=>U(Number(p),we);function Ie(p){Ze[p?"unshift":"push"](()=>{Z=p,r(6,Z)})}function Ne(p){Ze[p?"unshift":"push"](()=>{ee=p,r(7,ee)})}function M(){k=this.innerHTML,r(1,k)}return[b,k,D,R,N,Y,Z,ee,G,j,n,u,o,x,f,d,pe,ce,me,ve,Te,q,fe,_e,re,U,Be,$,be,ke,H,Ie,Ne,M]}class Qt extends de{constructor(e){super(),he(this,e,Gt,Wt,ge,{},null,[-1,-1])}}export{Qt as default};
