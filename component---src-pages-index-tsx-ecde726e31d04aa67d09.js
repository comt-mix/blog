"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[691],{2978:function(e,t,r){r.r(t),r.d(t,{default:function(){return ne}});var n={};r.r(n),r.d(n,{exclude:function(){return te},extract:function(){return V},parse:function(){return W},parseUrl:function(){return Y},pick:function(){return ee},stringify:function(){return X},stringifyUrl:function(){return _}});var o=r(7294),a=r(6450),i=r(4316),s=r(4160),l=r(917);const c=(0,i.Z)("div",{target:"e18otyfd1"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),u=(0,i.Z)((e=>{let{active:t,...r}=e;return(0,l.tZ)(s.rU,r)}),{target:"e18otyfd0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(e=>{let{active:t}=e;return t?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}");var p=function(e){let{selectedCategory:t,categoryList:r}=e;return(0,l.tZ)(c,null,Object.entries(r).map((e=>{let[r,n]=e;return(0,l.tZ)(u,{to:"./?category="+r,active:r===t,key:r},"#",r,"(",n,")")})))},f=r(8032);const d=(0,i.Z)(f.G,{target:"e1xuvkrd0"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"});var g=function(e){let{profileImage:t}=e;return(0,l.tZ)(d,{image:t,alt:"Profile Image"})};const m=(0,i.Z)("div",{target:"e1t4fq1c3"})({name:"1u7ncg7",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#ffffff"}),y=(0,i.Z)("div",{target:"e1t4fq1c2"})({name:"1kisa53",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),x=(0,i.Z)("div",{target:"e1t4fq1c0"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"});var h=function(e){let{profileImage:t}=e;return(0,l.tZ)(m,null,(0,l.tZ)(y,null,(0,l.tZ)(g,{profileImage:t}),(0,l.tZ)("div",null,(0,l.tZ)(x,null,"Frontend Developer Comt"))))},b=r(7462);const w=(0,i.Z)(s.rU,{target:"e16s08fj7"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),v=(0,i.Z)(f.G,{target:"e16s08fj6"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"}),k=(0,i.Z)("div",{target:"e16s08fj5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),j=(0,i.Z)("div",{target:"e16s08fj4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),Z=(0,i.Z)("div",{target:"e16s08fj3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),I=(0,i.Z)("div",{target:"e16s08fj2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),F=(0,i.Z)("div",{target:"e16s08fj1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),O=(0,i.Z)("div",{target:"e16s08fj0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"});var S=function(e){let{title:t,date:r,categories:n,summary:o,thumbnail:{childImageSharp:{gatsbyImageData:a}},link:i}=e;return(0,l.tZ)(w,{to:i},(0,l.tZ)(v,{image:a,alt:"Post Item Image"}),(0,l.tZ)(k,null,(0,l.tZ)(j,null,t),(0,l.tZ)(Z,null,r),(0,l.tZ)(I,null,n.map((e=>(0,l.tZ)(F,{key:e},e)))),(0,l.tZ)(O,null,o)))};var E=function(e,t){const r=(0,o.useRef)(null),n=(0,o.useRef)(null),{0:a,1:i}=(0,o.useState)(1),s=(0,o.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return"All"===e||r.includes(e)}))),[e]);return(0,o.useEffect)((()=>{n.current=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(i((e=>e+1)),t.unobserve(e[0].target))}))}),[]),(0,o.useEffect)((()=>i(1)),[e]),(0,o.useEffect)((()=>{10*a>=s.length||null===r.current||0===r.current.children.length||null===n.current||n.current.observe(r.current.children[r.current.children.length-1])}),[a,e]),{containerRef:r,postList:s.slice(0,10*a)}};const C=(0,i.Z)("div",{target:"e1be7hgc0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"});var A=function(e){let{seletedCategory:t,posts:r}=e;const{containerRef:n,postList:o}=E(t,r);return(0,l.tZ)(C,{ref:n},o.map((e=>{let{node:{id:t,fields:{slug:r},frontmatter:n}}=e;return(0,l.tZ)(S,(0,b.Z)({},n,{link:r,key:t}))})))};const R="%[a-f0-9]{2}",N=new RegExp("("+R+")|([^%]+?)","gi"),U=new RegExp("("+R+")+","gi");function $(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],$(r),$(n))}function z(e){try{return decodeURIComponent(e)}catch{let t=e.match(N)||[];for(let r=1;r<t.length;r++)t=(e=$(t,r).join("")).match(N)||[];return e}}function L(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=U.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=z(r[0]);e!==r[0]&&(t[r[0]]=e)}r=U.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const o of n)e=e.replace(new RegExp(o,"g"),t[o]);return e}(e)}}function q(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function P(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,o)}}return r}const D=e=>null==e,M=e=>encodeURIComponent(e).replaceAll(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),B=Symbol("encodeFragmentIdentifier");function T(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function G(e,t){return t.encode?t.strict?M(e):encodeURIComponent(e):e}function K(e,t){return t.decode?L(e):e}function H(e){return Array.isArray(e)?e.sort():"object"==typeof e?H(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function J(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function Q(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function V(e){const t=(e=J(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function W(e,t){T((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&K(r,e).includes(e.arrayFormatSeparator);r=a?K(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>K(t,e))):null===r?r:K(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o)return void(n[t]=r?K(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>K(t,e)));void 0!==n[t]?n[t]=[...n[t],...a]:n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=t.decode?o.replaceAll("+"," "):o;let[a,i]=q(e,"=");void 0===a&&(a=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:K(i,t),r(K(a,t),i,n)}for(const[o,a]of Object.entries(n))if("object"==typeof a&&null!==a)for(const[e,r]of Object.entries(a))a[e]=Q(r,t);else n[o]=Q(a,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return e[t]=Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?H(r):r,e}),Object.create(null))}function X(e,t){if(!e)return"";T((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&D(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[G(t,e),"[",o,"]"].join("")]:[...r,[G(t,e),"[",G(o,e),"]=",G(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[G(t,e),"[]"].join("")]:[...r,[G(t,e),"[]=",G(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[G(t,e),":list="].join("")]:[...r,[G(t,e),":list=",G(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[G(r,e),t,G(o,e)].join("")]:[[n,G(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,G(t,e)]:[...r,[G(t,e),"=",G(n,e)].join("")]}}(t),o={};for(const[i,s]of Object.entries(e))r(i)||(o[i]=s);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?G(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?G(r,t)+"[]":o.reduce(n(r),[]).join("&"):G(r,t)+"="+G(o,t)})).filter((e=>e.length>0)).join("&")}function Y(e,t){t={decode:!0,...t};let[r,n]=q(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:W(V(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:K(n,t)}:{}}}function _(e,t){t={encode:!0,strict:!0,[B]:!0,...t};const r=J(e.url).split("?")[0]||"";let n=X({...W(V(e.url),{sort:!1}),...e.query},t);n&&=`?${n}`;let o=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if("string"==typeof e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,o=t[B]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${o}`}function ee(e,t,r){r={parseFragmentIdentifier:!0,[B]:!1,...r};const{url:n,query:o,fragmentIdentifier:a}=Y(e,r);return _({url:n,query:P(o,t),fragmentIdentifier:a},r)}function te(e,t,r){return ee(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var re=n;var ne=function(e){let{location:{search:t},data:{site:{siteMetadata:{title:r,description:n,siteUrl:i}},allMarkdownRemark:{edges:s},file:{childImageSharp:{gatsbyImageData:c},publicURL:u}}}=e;const f=re.parse(t),d="string"==typeof f.category&&f.category?f.category:"All",g=(0,o.useMemo)((()=>s.reduce(((e,t)=>{let{node:{frontmatter:{categories:r}}}=t;return r.forEach((t=>{void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})),[]);return(0,l.tZ)(a.Z,{title:r,description:n,url:i,image:u},(0,l.tZ)(h,{profileImage:c}),(0,l.tZ)(p,{selectedCategory:d,categoryList:g}),(0,l.tZ)(A,{seletedCategory:d,posts:s}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ecde726e31d04aa67d09.js.map