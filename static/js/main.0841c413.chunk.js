(this["webpackJsonpmy-filter"]=this["webpackJsonpmy-filter"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var r,n,l=a(0),i=a.n(l),s=a(3),c=a.n(s),o=(a(10),a(4)),u=function(){return i.a.createElement("nav",{className:"Header"},i.a.createElement("div",{className:"nav-wrapper indigo"},i.a.createElement("div",{className:"brand-logo"},"Filters App")))},m=function(e){var t=e.id,a=e.value,r=e.min,n=e.max,l=e.setOneFilterHandler;return i.a.createElement("div",{className:"Range"},i.a.createElement("form",{action:"#"},i.a.createElement("p",{className:"range-field"},i.a.createElement("label",null,t," ",i.a.createElement("span",null,"(",a,")")),i.a.createElement("input",{className:"indigo",type:"range",id:t,value:a,min:r,max:n,onChange:function(e){return l(t,e.target.value)}}))))},d=i.a.createContext(),f=function(){var e=Object(l.useContext)(d),t=e.state,a=e.setOneFilterHandler,r=e.addNewFilterHandler,n=t.filter1,s=t.filter2,c=t.filter3,o=t.filter4,u=t.filter5;return i.a.createElement("div",{className:"Ranges"},i.a.createElement(m,{id:"contrast",value:n,min:0,max:200,setOneFilterHandler:a}),i.a.createElement(m,{id:"hue",value:s,min:-180,max:180,setOneFilterHandler:a}),i.a.createElement(m,{id:"brightness",value:c,min:0,max:200,setOneFilterHandler:a}),i.a.createElement(m,{id:"saturate",value:o,min:0,max:100,setOneFilterHandler:a}),i.a.createElement(m,{id:"sepia",value:u,min:0,max:100,setOneFilterHandler:a}),i.a.createElement("div",null,i.a.createElement("button",{className:"waves-effect waves-light btn indigo",onClick:r,disabled:!t.touched},"Add filter")))},E=function(){var e=Object(l.useContext)(d).state,t=e.filter1,a=e.filter2,r=e.filter3,n=e.filter4,s=e.filter5,c="contrast(".concat(t,"%) hue-rotate(").concat(a,"deg) brightness(").concat(r,"%) saturate(").concat(n,"%) sepia(").concat(s,"%)");return i.a.createElement("div",{className:"MainImage"},i.a.createElement("div",{className:"img-wrap",style:{WebkitFilter:c}},i.a.createElement("img",{src:"https://images.wallpaperscraft.ru/image/dorozhka_alleia_derevia_138886_1920x1080.jpg",alt:""})))},v=function(e){var t=e.id,a=e.settings,r=e.setAllFiltersHandler,n=e.removeFilterHandler,l="contrast(".concat(a.contrast,"%) hue-rotate(").concat(a.hue,"deg) brightness(").concat(a.brightness,"%) saturate(").concat(a.saturate,"%) sepia(").concat(a.sepia,"%)");return i.a.createElement("div",{className:"Filter"},i.a.createElement("div",{className:"close",onClick:function(){n(t)}},i.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/271/271203.svg",alt:""})),i.a.createElement("div",{className:"img-wrap",onClick:function(){return r(a)},style:{WebkitFilter:l}},i.a.createElement("img",{src:"https://images.wallpaperscraft.ru/image/dorozhka_alleia_derevia_138886_1920x1080.jpg",alt:""})))},g=function(){var e=Object(l.useContext)(d),t=e.state,a=e.setAllFiltersHandler,r=e.removeFilterHandler;return i.a.createElement("div",{className:"Filters"},t.filters?t.filters.map((function(e,t){return i.a.createElement(v,{key:t,id:e.id,settings:e.settings,setAllFiltersHandler:a,removeFilterHandler:r})})):i.a.createElement("h3",null,"No filters"))},p=a(1),h=function(e,t){switch(t.type){case"SET_TOUCH":return Object(p.a)({},e,{touched:t.payload});case"SET_ONE_FILTER":switch(r=Object(p.a)({},e),t.id){case"contrast":r.filter1=+t.value;break;case"hue":r.filter2=+t.value;break;case"brightness":r.filter3=+t.value;break;case"saturate":r.filter4=+t.value;break;case"sepia":r.filter5=+t.value;break;default:return!1}return r;case"SET_FILTERS":r=Object(p.a)({},e);var a=t.settings,l=a.contrast,i=a.hue,s=a.brightness,c=a.saturate,o=a.sepia;return r.filter1=l,r.filter2=i,r.filter3=s,r.filter4=c,r.filter5=o,r;case"REMOVE_FILTER":return r=Object(p.a)({},e),n=r.filters.filter((function(e){return e.id!==t.id})),r.filters=n,r;case"ADD_NEW_FILTER":r=Object(p.a)({},e),n=r.filters;var u={id:Math.random(),settings:{contrast:e.filter1,hue:e.filter2,brightness:e.filter3,saturate:e.filter4,sepia:e.filter5}};return n.push(u),r.touched=!1,r.filters=n,r;default:return e}},b=function(){var e={touched:!1,filter1:100,filter2:0,filter3:100,filter4:100,filter5:0,filters:[]},t=JSON.parse(localStorage.getItem("filters"));t?e=t:localStorage.setItem("filters",JSON.stringify(e));var a=Object(l.useReducer)(h,e),r=Object(o.a)(a,2),n=r[0],s=r[1];Object(l.useEffect)((function(){localStorage.setItem("filters",JSON.stringify(n))}),[n]);return i.a.createElement(d.Provider,{value:{state:n,setOneFilterHandler:function(e,t){s({type:"SET_TOUCH",payload:!0}),s({type:"SET_ONE_FILTER",id:e,value:t})},setAllFiltersHandler:function(e){s({type:"SET_TOUCH",payload:!1}),s({type:"SET_FILTERS",settings:e})},addNewFilterHandler:function(){n.touched&&s({type:"ADD_NEW_FILTER"})},removeFilterHandler:function(e){s({type:"SET_TOUCH",payload:!0}),window.confirm("Are you sure to remove the filter?")&&s({type:"REMOVE_FILTER",id:e})}}},i.a.createElement("div",{className:"App"},i.a.createElement(u,null),i.a.createElement("div",{className:"Layout"},i.a.createElement(f,null),i.a.createElement(E,null)),i.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.0841c413.chunk.js.map