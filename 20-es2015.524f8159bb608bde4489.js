(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"4Es9":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=u("Ado8");class b{constructor(l){this.newsService=l}ngOnInit(){this.getData()}getData(){this.news=this.newsService.getData("top-headlines?country=us")}onRefresh(l){this.getData(),setTimeout(()=>{l.target.complete()},2e3)}}class o{}var a=u("pMnS"),s=u("oBZk"),r=u("ZZ/e"),i=u("qlXg"),p=u("6Hxr"),c=e.ob({encapsulation:0,styles:[[""]],data:{}});function h(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,6,"ion-header",[],null,null,null,s.S,s.l)),e.pb(1,49152,null,0,r.A,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,4,"ion-toolbar",[],null,null,null,s.nb,s.G)),e.pb(3,49152,null,0,r.Bb,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,2,"ion-title",[],null,null,null,s.mb,s.F)),e.pb(5,49152,null,0,r.zb,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Top News"])),(l()(),e.qb(7,0,null,null,8,"ion-content",[["padding",""]],null,null,null,s.Q,s.j)),e.pb(8,49152,null,0,r.t,[e.h,e.k,e.x],null,null),e.pb(9,16384,null,0,r.c,[e.k],null,null),(l()(),e.qb(10,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,u){var e=!0;return"ionRefresh"===n&&(e=!1!==l.component.onRefresh(u)&&e),e}),s.cb,s.u)),e.pb(11,49152,null,0,r.cb,[e.h,e.k,e.x],null,null),(l()(),e.qb(12,0,null,0,1,"ion-refresher-content",[],null,null,null,s.bb,s.v)),e.pb(13,49152,null,0,r.db,[e.h,e.k,e.x],null,null),(l()(),e.qb(14,0,null,0,1,"app-articles",[],null,null,null,i.b,i.a)),e.pb(15,114688,null,0,p.a,[],{news:[0,"news"]},null)],(function(l,n){l(n,15,0,n.component.news)}),null)}function f(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"app-top-news",[],null,null,null,h,c)),e.pb(1,114688,null,0,b,[t.a],null,null)],(function(l,n){l(n,1,0)}),null)}var w=e.mb("app-top-news",b,f,{},{},[]),A=u("SVse"),d=u("s7LF"),g=u("iInd"),k=u("j1ZV");u.d(n,"TopNewsPageModuleNgFactory",(function(){return m}));var m=e.nb(o,[],(function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[a.a,w]],[3,e.j],e.v]),e.Ab(4608,A.m,A.l,[e.s,[2,A.t]]),e.Ab(4608,d.g,d.g,[]),e.Ab(4608,r.a,r.a,[e.x,e.g]),e.Ab(4608,r.Gb,r.Gb,[r.a,e.j,e.p]),e.Ab(4608,r.Jb,r.Jb,[r.a,e.j,e.p]),e.Ab(1073742336,A.c,A.c,[]),e.Ab(1073742336,d.f,d.f,[]),e.Ab(1073742336,d.a,d.a,[]),e.Ab(1073742336,r.Db,r.Db,[]),e.Ab(1073742336,g.n,g.n,[[2,g.s],[2,g.m]]),e.Ab(1073742336,k.a,k.a,[]),e.Ab(1073742336,o,o,[]),e.Ab(1024,g.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);