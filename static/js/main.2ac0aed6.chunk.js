(this["webpackJsonppunk-api"]=this["webpackJsonppunk-api"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(3),s=c.n(i),r=(c(17),c(18),c(4)),l=(c(19),c(8)),o=(c(22),c(9)),u=(c(7),c(1)),b=function(e){var t=e.label,c=e.handleInput,n=e.beerToSearch;return Object(u.jsx)("div",{className:"p-fluid mt-6 m-3",children:Object(u.jsxs)("span",{className:" p-input-icon-left p-float-label",children:[Object(u.jsx)("i",{className:"pi pi-search"}),Object(u.jsx)(o.a,{type:"text",name:t,id:"searchBeer",value:n,onChange:c}),Object(u.jsx)("label",{htmlFor:"searchBeer",children:t})]})})},d=(c(24),c(10)),h=(c(25),c(11)),j=function(e){var t=e.tooltip,c=e.inputId,n=e.value,a=e.onChange,i=e.checked,s=e.label;return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"text-left mt-5 ml-4",children:Object(u.jsxs)("div",{className:"p-field-checkbox",children:[Object(u.jsx)(h.a,{tooltip:t,inputId:c,value:n,onChange:a,checked:i}),Object(u.jsx)("label",{className:"ml-5",htmlFor:c,children:s})]})})})},f=function(e){var t=e.isHighABVchecked,c=e.isClassicRangeChecked,n=e.isAcidicChecked,a=e.handleFilters,i=e.handleSlider,s=e.valueIbu;return Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{tooltip:"ABV greater than 6.0%",inputId:"highABV",value:"High ABV",onChange:a,checked:t,label:"High ABV"}),Object(u.jsx)(j,{tooltip:"Brewed before 2010",inputId:"classicRange",value:"Classic Range",onChange:a,checked:c,label:"Classic Range"}),Object(u.jsx)(j,{tooltip:"pH lower than 4",inputId:"acidicRange",value:"Acidic Range",onChange:a,checked:n,label:"Acidic Range"}),Object(u.jsxs)("div",{className:"m-5 mt-6 text-center",children:[Object(u.jsx)("label",{children:"Internation Bitterness Units (IBU)"}),Object(u.jsx)(d.a,{className:"m-4",value:s,onChange:i,max:"200"}),s]})]})},p=(c(26),c(27),function(e){var t=e.beerImg,c=e.beerName,n=e.beerDescription.substring(0,80)+"...";return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"p-card shadow-5 p-4",children:[Object(u.jsx)("img",{src:t,alt:"beer",className:"beer-image"}),Object(u.jsx)("h5",{children:c}),Object(u.jsx)("p",{children:n})]})})}),g=function(e){var t=e.beerData.map((function(e){return Object(u.jsx)(p,{beerId:e.id,beerName:e.name,beerImg:e.image_url,firstBrewed:e.first_brewed,beerPh:e.ph,beerAvb:e.abv,beerDescription:e.description},e.id+1)}));return Object(u.jsx)("div",{className:"main-layout flex flex-wrap pt-2 pb-2 mr-2",children:t})},O=(c(28),c.p+"static/media/logo-small.196d43f8.jpg"),m=function(){return Object(u.jsxs)("div",{className:"sidebar__label shadow-4 p-3",children:[Object(u.jsx)("img",{src:O,alt:"logo",className:"sidebar__label--logo mr-3"}),Object(u.jsx)("span",{className:"sidebar__label--title",children:"Brewdog Punk-API"})]})},v=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),s=Object(r.a)(i,2),o=s[0],d=s[1],h=Object(n.useState)(!1),j=Object(r.a)(h,2),p=j[0],O=j[1],v=Object(n.useState)(0),x=Object(r.a)(v,2),C=x[0],k=x[1],I=Object(n.useState)([]),N=Object(r.a)(I,2),B=N[0],w=N[1],A=Object(n.useState)(""),S=Object(r.a)(A,2),R=S[0],_=S[1];Object(n.useEffect)((function(){fetch("https://api.punkapi.com/v2/beers").then((function(e){return e.json()})).then((function(e){w(e)})).catch((function(e){return console.log(e)}))}),[]);var F=B.filter((function(e){var t=e.name.toLowerCase(),c=R.toLowerCase();return t.includes(c)}));return console.log(F),Object(u.jsxs)("div",{className:"home",children:[Object(u.jsxs)(l.a,{visible:!0,showCloseIcon:!1,children:[Object(u.jsx)(m,{}),Object(u.jsx)(b,{label:"Search Your Beer",beerToSearch:R,handleInput:function(e){var t=e.target.value.toLowerCase();_(t)}}),Object(u.jsx)(f,{isHighABVchecked:c,isClassicRangeChecked:o,isAcidicChecked:p,handleFilters:function(e){if("High ABV"===e.value){a(e.target.checked);var t=B.filter((function(e){return e.abv>6}));w(t)}else if("Classic Range"===e.value){d(e.target.checked);var c=B.filter((function(e){var t=e.first_brewed.slice(-2);return parseInt(t)<10}));w(c)}else if("Acidic Range"===e.value){O(e.target.checked);var n=B.filter((function(e){var t=null;return null!=e.ph&&e.ph<4&&(t=e),t}));w(n)}},handleSlider:function(e){k(e.value),fetch("https://api.punkapi.com/v2/beers?ibu_lt=".concat(C)).then((function(e){return e.json()})).then((function(e){console.log(e),w(e)})).catch((function(e){return console.log(e)}))},valueIbu:C})]}),Object(u.jsx)(g,{beerData:F})]})},x=(c(29),c(30),c(31),function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(v,{})})}),C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),C()}],[[32,1,2]]]);
//# sourceMappingURL=main.2ac0aed6.chunk.js.map