(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=(n(0),n(98)),i={id:"complex-objects",title:"Classes"},c={unversionedId:"complex-objects",id:"complex-objects",isDocsHomePage:!1,title:"Classes",description:"Plain objects (objects without a prototype), arrays, Maps and Sets are always drafted by Immer. Every other object must use the immerable symbol to mark itself as compatible with Immer. When one of these objects is mutated within a producer, its prototype is preserved between copies.",source:"@site/docs/complex-objects.md",slug:"/complex-objects",permalink:"/immer/complex-objects",editUrl:"https://github.com/immerjs/immer/edit/master/website/docs/complex-objects.md",version:"current",sidebar:"Immer",previous:{title:"Map and Set",permalink:"/immer/map-set"},next:{title:"Extracting the current state from a draft",permalink:"/immer/current"}},s=[{value:"Example",id:"example",children:[]},{value:"Semantics in detail",id:"semantics-in-detail",children:[]}],l={toc:s};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("center",null,Object(o.b)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",class:"horizontal bordered"})),Object(o.b)("p",null,"Plain objects (objects without a prototype), arrays, ",Object(o.b)("inlineCode",{parentName:"p"},"Map"),"s and ",Object(o.b)("inlineCode",{parentName:"p"},"Set"),"s are always drafted by Immer. Every other object must use the ",Object(o.b)("inlineCode",{parentName:"p"},"immerable")," symbol to mark itself as compatible with Immer. When one of these objects is mutated within a producer, its prototype is preserved between copies."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import {immerable} from "immer"\n\nclass Foo {\n    [immerable] = true // Option 1\n\n    constructor() {\n        this[immerable] = true // Option 2\n    }\n}\n\nFoo[immerable] = true // Option 3\n')),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import {immerable, produce} from "immer"\n\nclass Clock {\n    [immerable] = true\n\n    constructor(hour, minute) {\n        this.hour = hour\n        this.minute = minute\n    }\n\n    get time() {\n        return `${this.hour}:${this.minute}`\n    }\n\n    tick() {\n        return produce(this, draft => {\n            draft.minute++\n        })\n    }\n}\n\nconst clock1 = new Clock(12, 10)\nconst clock2 = clock1.tick()\nconsole.log(clock1.time) // 12:10\nconsole.log(clock2.time) // 12:11\nconsole.log(clock2 instanceof Clock) // true\n')),Object(o.b)("h3",{id:"semantics-in-detail"},"Semantics in detail"),Object(o.b)("p",null,"The semantics on how classes are drafted are as follows:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A draft of a class is a fresh object but with the same prototype as the original object."),Object(o.b)("li",{parentName:"ol"},"When creating a draft, Immer will copy all ",Object(o.b)("em",{parentName:"li"},"own")," properties from the base to the draft.This includes non-enumerable and symbolic properties."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"Own")," getters will be invoked during the copy process, just like ",Object(o.b)("inlineCode",{parentName:"li"},"Object.assign")," would."),Object(o.b)("li",{parentName:"ol"},"Inherited getters and methods will remain as is and be inherited by the draft."),Object(o.b)("li",{parentName:"ol"},"Immer will not invoke constructor functions."),Object(o.b)("li",{parentName:"ol"},"The final instance will be constructed with the same mechanism as the draft was created."),Object(o.b)("li",{parentName:"ol"},"Only getters that have a setter as well will be writable in the draft, as otherwise the value can't be copied back.")),Object(o.b)("p",null,"Because Immer will dereference own getters of objects into normal properties, it is possible to use objects that use getter/setter traps on their fields, like MobX and Vue do."),Object(o.b)("p",null,"Immer does not support exotic / engine native objects such as DOM Nodes or Buffers, nor is subclassing Map, Set or arrays supported and the ",Object(o.b)("inlineCode",{parentName:"p"},"immerable")," symbol can't be used on them."),Object(o.b)("p",null,"So when working for example with ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," objects, you should always create a new ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," instance instead of mutating an existing ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," object."))}m.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,d=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);