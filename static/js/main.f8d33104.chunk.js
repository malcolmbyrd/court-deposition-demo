(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(t,e,i){},18:function(t,e,i){},20:function(t,e,i){"use strict";i.r(e);var a=i(1),r=i.n(a),n=i(2),d=i(6),c=i(0),o={jobs:[],providers:[]},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_JOBS":return Object(d.a)(Object(d.a)({},t),{},{jobs:e.payload});case"SET_PROVIDERS":return Object(d.a)(Object(d.a)({},t),{},{providers:e.payload})}return t},l=Object(a.createContext)(o),_=function(t){var e=t.children,i=Object(a.useReducer)(s,o),r=Object(n.a)(i,2),d=r[0],_=r[1];return Object(c.jsx)(l.Provider,{value:[d,_],children:e})},u=i(10),j=i.n(u),p=(i(17),i(18),i(11)),O=function(t){var e=t.title,i=t.closeFunction;return Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("div",{className:"modal-title",children:Object(c.jsx)("h1",{children:e})}),Object(c.jsx)("div",{className:"modal-close",onClick:i,children:Object(c.jsx)(p.a,{})})]})},b=function(t){var e=t.children,i=t.className;return Object(c.jsx)("div",{className:"modal-content ".concat(i),children:e})},v=function(t){var e=t.classname,i=t.children;return Object(c.jsx)("div",{className:"modal modal-outer ".concat(e),children:Object(c.jsx)("div",{className:"modal modal-inner ".concat(e),children:i})})},g=i(4),h=i.n(g),m=i(9),E={getJobsMock:[{id:"1",datetime:"2021-06-03 08:19:33",status:"COMPLETE",provider_id:"1",avg_cost_per_page:"550",materials_turned_in_at:"2021-06-13 10:43:33",provider_rating:"1",location_type:"REMOTE",latitude:"",longitude:""},{id:"2",datetime:"2021-06-04 03:31:33",status:"COMPLETE",provider_id:"1",avg_cost_per_page:"625",materials_turned_in_at:"2021-06-13 15:31:33",provider_rating:"1",location_type:"LOCATION_BASED",latitude:"34.0165128",longitude:"-118.4939147"},{id:"3",datetime:"2021-06-05 02:48:21",status:"COMPLETE",provider_id:"1",avg_cost_per_page:"600",materials_turned_in_at:"2021-06-16 05:12:21",provider_rating:"1",location_type:"LOCATION_BASED",latitude:"34.0165128",longitude:"-118.4939147"},{id:"4",datetime:"2021-06-06 01:07:33",status:"COMPLETE",provider_id:"1",avg_cost_per_page:"550",materials_turned_in_at:"2021-06-14 01:07:33",provider_rating:"1",location_type:"REMOTE",latitude:"",longitude:""},{id:"5",datetime:"2021-06-08 10:29:09",status:"COMPLETE",provider_id:"1",avg_cost_per_page:"625",materials_turned_in_at:"2021-06-15 10:29:09",provider_rating:"1",location_type:"LOCATION_BASED",latitude:"34.0165128",longitude:"-118.4939147"},{id:"6",datetime:"2021-06-10 10:14:45",status:"COMPLETE",provider_id:"1",avg_cost_per_page:"600",materials_turned_in_at:"2021-06-20 10:14:45",provider_rating:"1",location_type:"LOCATION_BASED",latitude:"34.0165128",longitude:"-118.4939147"},{id:"7",datetime:"2021-06-01 10:43:33",status:"COMPLETE",provider_id:"2",avg_cost_per_page:"425",materials_turned_in_at:"2021-06-12 13:07:33",provider_rating:"",location_type:"REMOTE",latitude:"",longitude:""},{id:"8",datetime:"2021-06-04 20:19:33",status:"COMPLETE",provider_id:"2",avg_cost_per_page:"500",materials_turned_in_at:"2021-06-17 01:07:33",provider_rating:"1",location_type:"LOCATION_BASED",latitude:"34.0165128",longitude:"-118.4939147"},{id:"9",datetime:"2021-06-08 08:48:21",status:"COMPLETE",provider_id:"2",avg_cost_per_page:"475",materials_turned_in_at:"2021-06-21 09:02:45",provider_rating:"0",location_type:"LOCATION_BASED",latitude:"34.0165128",longitude:"-118.4939147"},{id:"10",datetime:"2021-06-10 10:29:09",status:"COMPLETE",provider_id:"2",avg_cost_per_page:"525",materials_turned_in_at:"2021-06-20 20:05:09",provider_rating:"0",location_type:"REMOTE",latitude:"",longitude:""},{id:"11",datetime:"2021-06-11 09:45:57",status:"COMPLETE",provider_id:"2",avg_cost_per_page:"625",materials_turned_in_at:"2021-06-25 12:09:57",provider_rating:"1",location_type:"LOCATION_BASED",latitude:"34.0165128",longitude:"-118.4939147"},{id:"12",datetime:"2021-06-13 10:29:09",status:"COMPLETE",provider_id:"2",avg_cost_per_page:"600",materials_turned_in_at:"2021-06-23 08:05:09",provider_rating:"1",location_type:"LOCATION_BASED",latitude:"34.0165128",longitude:"-118.4939147"},{id:"13",datetime:"2021-06-23 22:43:33",status:"COMPLETE",provider_id:"3",avg_cost_per_page:"450",materials_turned_in_at:"2021-07-02 22:43:33",provider_rating:"1",location_type:"REMOTE",latitude:"",longitude:""},{id:"14",datetime:"2021-06-27 08:19:33",status:"COMPLETE",provider_id:"4",avg_cost_per_page:"325",materials_turned_in_at:"2021-07-05 08:19:33",provider_rating:"1",location_type:"REMOTE",latitude:"",longitude:""},{id:"15",datetime:"2021-06-28 09:45:57",status:"COMPLETE",provider_id:"4",avg_cost_per_page:"400",materials_turned_in_at:"2021-07-05 09:45:57",provider_rating:"1",location_type:"REMOTE",latitude:"",longitude:""},{id:"16",datetime:"2021-06-29 07:50:45",status:"COMPLETE",provider_id:"4",avg_cost_per_page:"425",materials_turned_in_at:"2021-07-05 07:50:45",provider_rating:"1",location_type:"REMOTE",latitude:"",longitude:""},{id:"17",datetime:"2021-06-30 07:21:57",status:"COMPLETE",provider_id:"4",avg_cost_per_page:"300",materials_turned_in_at:"2021-07-05 07:21:57",provider_rating:"1",location_type:"REMOTE",latitude:"",longitude:""},{id:"18",datetime:"2021-07-06 05:55:33",status:"AWAITING MATERIALS",provider_id:"1",avg_cost_per_page:"",materials_turned_in_at:"",provider_rating:"",location_type:"LOCATION_BASED",latitude:"34.0165128",longitude:"-118.4939147"},{id:"19",datetime:"2021-07-05 03:31:33",status:"AWAITING MATERIALS",provider_id:"1",avg_cost_per_page:"",materials_turned_in_at:"",provider_rating:"",location_type:"LOCATION_BASED",latitude:"34.0165128",longitude:"-118.4939147"},{id:"20",datetime:"2021-07-07 01:07:33",status:"AWAITING MATERIALS",provider_id:"2",avg_cost_per_page:"",materials_turned_in_at:"",provider_rating:"",location_type:"REMOTE",latitude:"",longitude:""},{id:"21",datetime:"2021-07-02 22:43:33",status:"AWAITING MATERIALS",provider_id:"2",avg_cost_per_page:"",materials_turned_in_at:"",provider_rating:"",location_type:"LOCATION_BASED",latitude:"34.0165128",longitude:"-118.4939147"},{id:"22",datetime:"2021-07-01 20:19:33",status:"AWAITING MATERIALS",provider_id:"3",avg_cost_per_page:"",materials_turned_in_at:"",provider_rating:"",location_type:"LOCATION_BASED",latitude:"34.0165128",longitude:"-118.4939147"},{id:"23",datetime:"2021-06-28 13:07:33",status:"AWAITING MATERIALS",provider_id:"4",avg_cost_per_page:"",materials_turned_in_at:"",provider_rating:"",location_type:"REMOTE",latitude:"",longitude:""},{id:"24",datetime:"2021-07-07 10:00:21",status:"AWAITING MATERIALS",provider_id:"4",avg_cost_per_page:"",materials_turned_in_at:"",provider_rating:"",location_type:"LOCATION_BASED",latitude:"34.0165128",longitude:"-118.4939147"},{id:"25",datetime:"2021-07-04 09:31:33",status:"AWAITING MATERIALS",provider_id:"4",avg_cost_per_page:"",materials_turned_in_at:"",provider_rating:"",location_type:"LOCATION_BASED",latitude:"34.0165128",longitude:"-118.4939147"},{id:"26",datetime:"2021-07-21 13:07:33",status:"SCHEDULED",provider_id:"",avg_cost_per_page:"",materials_turned_in_at:"",provider_rating:"",location_type:"LOCATION_BASED",latitude:"34.008454",longitude:"-118.498543"},{id:"27",datetime:"2021-07-22 12:09:57",status:"SCHEDULED",provider_id:"",avg_cost_per_page:"",materials_turned_in_at:"",provider_rating:"",location_type:"LOCATION_BASED",latitude:"34.057388",longitude:"-118.248034"},{id:"28",datetime:"2021-07-20 12:09:57",status:"SCHEDULED",provider_id:"",avg_cost_per_page:"",materials_turned_in_at:"",provider_rating:"",location_type:"LOCATION_BASED",latitude:"34.054018",longitude:"-118.412388"},{id:"29",datetime:"2021-07-19 11:41:09",status:"SCHEDULED",provider_id:"",avg_cost_per_page:"",materials_turned_in_at:"",provider_rating:"",location_type:"REMOTE",latitude:"34.054018",longitude:"-118.412388"},{id:"30",datetime:"2021-07-23 13:36:21",status:"SCHEDULED",provider_id:"",avg_cost_per_page:"",materials_turned_in_at:"",provider_rating:"",location_type:"REMOTE",latitude:"34.054018",longitude:"-118.412388"},{id:"31",datetime:"2021-07-23 13:36:21",status:"SCHEDULED",provider_id:"",avg_cost_per_page:"",materials_turned_in_at:"",provider_rating:"",location_type:"REMOTE",latitude:"34.054018",longitude:"-118.412388"},{id:"32",datetime:"2021-07-24 11:48:21",status:"SCHEDULED",provider_id:"",avg_cost_per_page:"",materials_turned_in_at:"",provider_rating:"",location_type:"REMOTE",latitude:"34.054018",longitude:"-118.412388"}]},x={getProvidersMock:[{id:"1",full_name:"Joe Court Reporter",latitude:"34.059943",longitude:"-118.445317"},{id:"2",full_name:"Jane Smith",latitude:"34.067538",longitude:"-118.425903"},{id:"3",full_name:"John Doe",latitude:"",longitude:""},{id:"4",full_name:"Carey Court Reporter",latitude:"34.06347",longitude:"-118.299954"},{id:"5",full_name:"Michael Jordan",latitude:"34.047637",longitude:"-118.249681"},{id:"6",full_name:"Bill Smith",latitude:"34.007684",longitude:"-118.499621"}]},f={fetchJobs:function(){var t=Object(m.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",E);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),fetchProviders:function(){var t=Object(m.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",x);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},T=i(5),A=function(t,e,i,a){var r=C(i-t),n=C(a-e),d=Math.sin(r/2)*Math.sin(r/2)+Math.cos(C(t))*Math.cos(C(i))*Math.sin(n/2)*Math.sin(n/2);return 6371*(2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)))},C=function(t){return t*(Math.PI/180)},M=function(t){var e=new Date(Date.parse(t.datetime.toString()));return(new Date(Date.parse(t.materials_turned_in_at.toString())).getTime()-e.getTime())/864e5};Array.prototype.max=function(){return Math.max.apply(null,this)};var S=function(t){var e=t.job,i=t.provider,r=t.onClick,d=t.setProviderCostData,o=t.setProviderDistanceData,s=t.setProviderRatingData,_=(t.providerSpeedData,t.setProviderSpeedData),u=Object(a.useContext)(l),j=Object(n.a)(u,2),p=j[0],O=(j[1],Object(a.useState)(0)),b=Object(n.a)(O,2),v=b[0],g=b[1],h=Object(a.useState)(0),m=Object(n.a)(h,2),E=m[0],x=m[1],f=Object(a.useState)(0),C=Object(n.a)(f,2),S=C[0],y=C[1],D=Object(a.useState)(""),L=Object(n.a)(D,2),N=L[0],P=L[1];return Object(a.useEffect)((function(){if(i.latitude&&""!==i.latitude&&i.longitude&&""!==i.longitude){var t=(a=e.latitude,r=e.longitude,n=i.latitude,d=i.longitude,A(a,r,n,d));g(Math.round(100*t)/100)}else g(0);var a,r,n,d,c=function(t,e){var i=0,a=0;return t.filter((function(t){t.provider_id===e.id&&t.avg_cost_per_page>0&&"COMPLETE"===t.status&&(i++,a+=Math.round(100*t.avg_cost_per_page)/100)})),i>0?Math.round(a/i*100)/100:0}(p.jobs,i);x(c);var o=function(t,e){var i=0,a=0;return t.filter((function(t){t.provider_id===e.id&&t.provider_rating>0&&(i++,a+=parseInt(t.provider_rating))})),i>0?a/i:0}(p.jobs,i);y(o);var s=function(t,e){var i=0,a=0;return t.filter((function(t){t.provider_id===e.id&&"COMPLETE"===t.status&&(i++,a+=M(t))})),i>0?Math.round(a/i*100)/100:0}(p.jobs,i);P(s)}),[]),Object(a.useEffect)((function(){E>0&&d((function(t){return[].concat(Object(T.a)(t),[E])})),v>0&&o((function(t){return[].concat(Object(T.a)(t),[v])})),S>0&&s((function(t){return[].concat(Object(T.a)(t),[S])})),N>0&&_((function(t){return[].concat(Object(T.a)(t),[N])}))}),[E,v]),Object(c.jsxs)("tr",{onClick:r,children:[Object(c.jsx)("td",{children:Object(c.jsx)("a",{href:"#",children:i.full_name})}),Object(c.jsx)("td",{className:"job-distance",children:v>0?v+" km":"N/A or REMOTE"}),Object(c.jsx)("td",{className:"average-page-cost-data",children:0!==E?Object(c.jsxs)(c.Fragment,{children:["$",E]}):Object(c.jsx)(c.Fragment,{children:"No Data Available"})}),Object(c.jsx)("td",{children:S?Object(c.jsx)(c.Fragment,{children:S}):Object(c.jsx)(c.Fragment,{children:"No Data Available"})}),Object(c.jsx)("td",{children:N?Object(c.jsxs)(c.Fragment,{children:[N," days"]}):Object(c.jsx)(c.Fragment,{children:"No Data Available"})})]},i.id)},y=function(t){var e=t.job,i=t.onClick,r=Object(a.useState)(0),d=Object(n.a)(r,2),o=d[0],s=d[1];return Object(a.useEffect)((function(){if("COMPLETE"===e.status){var t=M(e);s(t)}}),[]),Object(c.jsx)("table",{className:"job-table",onClick:i,children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Job ID"}),Object(c.jsx)("td",{children:e.id})]}),e.avg_cost_per_page>0&&Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Average cost per page"}),Object(c.jsxs)("td",{children:["$",e.avg_cost_per_page]})]}),e.datetime&&Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Start Date"}),Object(c.jsx)("td",{children:e.datetime})]}),e.materials_turned_in_at&&Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"End Date"}),Object(c.jsx)("td",{children:e.materials_turned_in_at})]}),0!==o&&Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Time to completion"}),Object(c.jsxs)("td",{children:[o," days"]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Location Type"}),Object(c.jsx)("td",{children:e.location_type})]}),e.provider_id>0&&Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Provider ID"}),Object(c.jsx)("td",{children:e.provider_id})]}),e.provider_rating>0&&Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Provider Rating"}),Object(c.jsx)("td",{children:e.provider_rating})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Status"}),Object(c.jsx)("td",{children:e.status})]})]})})},D=function(t){var e=t.provider,i=t.onClick,r=Object(a.useContext)(l),d=Object(n.a)(r,2),o=d[0];d[1];return Object(c.jsxs)("div",{className:"provider-detail-container",children:[Object(c.jsx)("button",{className:"primary",type:"button",onClick:i,children:"Back"}),Object(c.jsx)("h3",{children:"Jobs this provider has done"}),Object(c.jsx)("div",{className:"provider-detail-table-container",children:o.jobs.map((function(t,i){if(t.provider_id===e.id)return Object(c.jsx)(y,{job:t,onClick:function(){return null}})}))})]})},L=function(){return Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Distance from job"}),Object(c.jsx)("th",{children:"Avg Cost Per Page"}),Object(c.jsx)("th",{children:"Avg Provider Rating"}),Object(c.jsx)("th",{children:"Avg Completion"})]})})},N=function(t){var e=t.job;return Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Cheapest Provider"}),"REMOTE"!==e.location_type&&Object(c.jsx)("th",{children:"Closest Provider"}),Object(c.jsx)("th",{children:"Highest Rated Provider"}),Object(c.jsx)("th",{children:"Fastest Provider"})]})})},P=function(t){var e=t.job,i=t.closeFunction,r=Object(a.useContext)(l),d=Object(n.a)(r,2),o=d[0],s=d[1],_=Object(a.useState)(!0),u=Object(n.a)(_,2),j=u[0],p=u[1],g=Object(a.useState)({}),h=Object(n.a)(g,2),m=h[0],E=h[1],x=Object(a.useState)([]),T=Object(n.a)(x,2),A=T[0],C=T[1],M=Object(a.useState)(9999),y=Object(n.a)(M,2),P=y[0],I=y[1],R=Object(a.useState)([]),B=Object(n.a)(R,2),k=B[0],F=B[1],J=Object(a.useState)("9999"),w=Object(n.a)(J,2),G=w[0],H=w[1],W=Object(a.useState)([]),U=Object(n.a)(W,2),$=U[0],q=U[1],V=Object(a.useState)(9),z=Object(n.a)(V,2),K=z[0],Q=z[1],X=Object(a.useState)([]),Y=Object(n.a)(X,2),Z=Y[0],tt=Y[1],et=Object(a.useState)(999999),it=Object(n.a)(et,2),at=it[0],rt=it[1];return Object(a.useEffect)((function(){f.fetchProviders().then((function(t){s({type:"SET_PROVIDERS",payload:t}),console.log(t)}))}),[]),Object(a.useEffect)((function(){if(A.length>0){var t=Math.min.apply(null,A);t<P&&I(t)}if(k.length>0){var e=Math.min.apply(null,k);e<G&&H(e)}if($.length>0){var i=Math.min.apply(null,$);i<K&&Q(i)}if(Z.length>0){var a=Math.min.apply(null,Z);a<at&&rt(a)}}),[A]),Object(c.jsxs)(v,{classname:"jobs-modal",children:[Object(c.jsx)(O,{title:"Providers Available For Job",closeFunction:i}),Object(c.jsx)("p",{children:"If one provider fulfills more than one criteria superlative, they are likely a strong candidate for the job."}),Object(c.jsx)("div",{className:"jobs-modal-content",children:Object(c.jsxs)("table",{children:[Object(c.jsx)(N,{job:e}),Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:["$",P]}),"REMOTE"!==e.location_type&&Object(c.jsxs)("td",{children:[G,"km"]}),Object(c.jsx)("td",{children:K}),Object(c.jsx)("td",{children:at})]})})]})}),Object(c.jsxs)(b,{className:"jobs-modal-content",children:[j&&Object(c.jsxs)("table",{children:[Object(c.jsx)(L,{}),Object(c.jsx)("tbody",{children:o.providers.length>0&&o.providers.map((function(t,i){return Object(c.jsx)(S,{job:e,provider:t,onClick:function(){return function(t){p(!1),E(t)}(t)},providerCostData:A,setProviderCostData:C,providerDistanceData:k,setProviderDistanceData:F,providerRatingData:$,setProviderRatingData:q,bestProviderRating:K,setBestProviderRating:Q,providerSpeedData:Z,setProviderSpeedData:tt},t.id)}))})]}),!j&&Object(c.jsx)(D,{provider:m,onClick:function(){return p(!0)}})]})]})},I=function(t){var e=t.job,i=Object(a.useState)(!1),r=Object(n.a)(i,2),d=r[0],o=r[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(y,{job:e,onClick:function(){return o(!0)}}),d&&Object(c.jsx)(P,{job:e,closeFunction:function(){return o(!1)}})]})},R=function(){return Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{children:"Available Court Deposition Jobs Needing a Provider"}),Object(c.jsx)("div",{children:"Please click on the jobs button to see all available jobs without a provider."})]})},B=function(){var t=Object(a.useContext)(l),e=Object(n.a)(t,2),i=(e[0],e[1]);return Object(c.jsx)("div",{className:"jobs-button-container",children:Object(c.jsx)("button",{className:"primary jobs-button",type:"button",onClick:function(){f.fetchJobs().then((function(t){return i({type:"SET_JOBS",payload:t})}))},children:"Get Jobs"})})},k=function(){var t=Object(a.useContext)(l),e=Object(n.a)(t,2),i=e[0];e[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(R,{}),Object(c.jsx)(B,{}),i.jobs.length>1&&Object(c.jsx)("div",{className:"jobs-container",children:i.jobs.length>0&&i.jobs.map((function(t,e){if(!t.provider_id||""===t.provider_id)return Object(c.jsx)("div",{className:"job-listing",children:Object(c.jsx)(I,{job:t})},t.id)}))})]})})};var F=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(k,{})})},J=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,21)).then((function(e){var i=e.getCLS,a=e.getFID,r=e.getFCP,n=e.getLCP,d=e.getTTFB;i(t),a(t),r(t),n(t),d(t)}))};j.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(_,{children:Object(c.jsx)(F,{})})}),document.getElementById("root")),J()}},[[20,1,2]]]);
//# sourceMappingURL=main.f8d33104.chunk.js.map