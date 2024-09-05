var M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function O(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var $={exports:{}};(function(d,v){(function(S,D){d.exports=D()})(M,function(){var S=Object.defineProperty,D=(y,t,e)=>t in y?S(y,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):y[t]=e,f=(y,t,e)=>D(y,typeof t!="symbol"?t+"":t,e);const T="1.1.1",N=class m{constructor(){return f(this,"version"),f(this,"v"),f(this,"debounce",(()=>{let t=null;return(e,r=800)=>{t&&clearTimeout(t),t=setTimeout(e,r)}})()),f(this,"throttle",(()=>{let t=0;return(e,r=800)=>{let n=+new Date;n-t>r&&(e(),t=n)}})()),this.version=T,this.v=T,console.log(`%czztoll%cV${this.v}`,"background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px","background: #FFD700; color: #000000; border-radius: 0 3px 3px 0;padding:2px 5px"),m.instance?m.instance:m.instance=this}getVersion(){return this.version}error(t){throw new Error(t)}getType(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}isArray(t){return this.getType(t)==="array"}isObject(t){return this.getType(t)==="object"}isFunction(t){return this.getType(t)==="function"}isString(t){return this.getType(t)==="string"}isNumber(t){return this.getType(t)==="number"}isBoolean(t){return this.getType(t)==="boolean"}isNaN(t){return this.getType(t)==="nan"}isNull(t){return this.getType(t)==="null"}isUndefined(t){return this.getType(t)==="undefined"}isDate(t){return this.getType(t)==="date"}isRegExp(t){return this.getType(t)==="regexp"}isError(t){return this.getType(t)==="error"}isSymbol(t){return this.getType(t)==="symbol"}isPromise(t){return this.getType(t)==="promise"}isElement(t){return this.getType(t)==="element"}regIsHas(t,e){return new RegExp(e).test(t)}regEmail(t){return/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t)}regPhone(t){return/^1[3456789]\d{9}$/.test(t)}regIdcard(t){if(!/^\d{17}(\d|X)$/i.test(t)||!{11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}[t.substring(0,2)])return!1;const e=t.substring(6,14),r=e.substring(0,4),n=e.substring(4,6),s=e.substring(6,14),a=new Date(r+"/"+n+"/"+s);if(a.getFullYear()!==parseInt(r)||a.getMonth()+1!==parseInt(n)||a.getDate()!==parseInt(s))return!1;const i=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],u=["1","0","X","9","8","7","6","5","4","3","2"];let o=0;for(let l=0;l<17;l++)console.log(t[l],i[l]),o+=this.toNumber(t[l])*i[l];const g=u[o%11];return t[17].toUpperCase()===g}getFirstChar(t){return this.isString(t)||this.error("参数类型错误，必须为字符串"),t.charAt(0)}getLastChar(t){return this.isString(t)||this.error("参数类型错误，必须为字符串"),t.substring(t.length-1,t.length)}getChar(t,e,r){return this.isString(t)||this.error("参数类型错误，必须为字符串"),t.substring(e,r)||""}getUrlParam(t){return(t.match(/([^?=&]+)(=([^&]*))/g)||[]).reduce((e,r)=>(e[r.slice(0,r.indexOf("="))]=r.slice(r.indexOf("=")+1),e),{})}paramformat(t,e="url"){if(e==="url")return Object.keys(t).map(r=>`${r}=${t[r]}`).join("&");if(e==="json")return JSON.stringify(t);if(e==="formData"){const r=new FormData;for(const n in t)r.append(n,t[n]);return r}}toString(t){t||this.error;const e=JSON.stringify(t);return this.getFirstChar(e)==="\\"?e.replace(/\\/g,""):e}toArray(t,e=""){if((this.isUndefined(t)||this.isNull(t)||t==="")&&this.error("该变量没有值"),this.isArray(t))return[...t];const r=this.isString(t)?t:this.toString(t),n=this.getFirstChar(r);try{return n==="{"||n==="["?JSON.parse(r):r.includes(",")?r.split(","):r.includes(" ")?r.split(" "):r.split(e)}catch{return r}}toNumber(t){if((this.isUndefined(t)||this.isNull(t)||t==="")&&this.error("该变量没有值"),this.isNumber(t))return t;const e=this.isString(t)?t:this.toString(t);return this.isNaN(Number(e))?Number(e):e}toBoolean(t){return!!t}getRandom(t,e){return(!this.isNumber(t)||!this.isNumber(e))&&this.error("参数类型错误，必须为数字"),Math.floor(Math.random()*(e-t+1)+t)}getRandomArray(t,e,r){const n=[];for(let s=0;s<t;s++)n.push(this.getRandom(e,r));return n}getRandomColor(){return`#${Math.floor(Math.random()*16777215).toString(16)}`}getRandomRGBColor(){return`rgb(${this.getRandom(0,255)},${this.getRandom(0,255)},${this.getRandom(0,255)})`}getRandomRGBA(){return`rgba(${this.getRandom(0,255)},${this.getRandom(0,255)},${this.getRandom(0,255)},${this.getRandom(0,100)/100})`}moneyFormat(t,e=",",r=""){let n=t.toString(),s=n.indexOf(".");for(s===-1&&(s=n.length);s>3;)s-=3,n=n.slice(0,s)+e+n.slice(s);return r?r+n:n}dataEqual(t,e,r=!1){const n=this.getType(t),s=this.getType(e);if(n!==s)return!1;if(!r)return JSON.stringify(t)===JSON.stringify(e);function a(i,u){const o={},g=new Set([...Object.keys(i),...Object.keys(u)]);for(const l of g)if(i[l]!==u[l])if(typeof i[l]=="object"&&typeof u[l]=="object"){const p=a(i[l],u[l]);Object.keys(p).length>0&&(o[l]=p)}else o[l]={oldValue:i[l]?i[l]:"",newValue:u[l]?u[l]:""};return o}return a(t,e)}dataEmpty(t,e=!1){if(t==null||t==null||this.toString(t)==="{}"||this.toString(t)==="[]")return!0;const r=this,n={};function s(i){for(const u in i){const o=i[u];if(o===""||o==null||o==null||r.toString(o)==="{}"||r.toString(o)==="[]")if(e)n[u]=o;else return!0;else if(r.isObject(o)||r.isArray(o))return s(o)}return!1}const a=s(t);return e?this.toString(n)==="{}"?!1:n:a}deepClone(t){if(t==null||typeof t!="object")return t;if(t instanceof Date)return new Date(t.getTime());if(Array.isArray(t)){const e=[];return t.forEach((r,n)=>{e[n]=this.deepClone(r)}),e}if(t instanceof Object){const e={};return Object.keys(t).forEach(r=>{e[r]=this.deepClone(t[r])}),e}this.error("Unsupported data type")}toTree(t,e){let r=[],n={};return t.forEach(s=>{n[s.id]={...s,children:[]}}),t.forEach(s=>{s[e]===null?r.push(n[s.id]):n[s[e]].children.push(n[s.id])}),r}groupBy(t,e){return t.reduce((r,n)=>{const s=n[e];return r[s]||(r[s]=[]),r[s].push(n),r},{})}dataMerge(t,e,r=1){switch(r){case 1:return[...new Set([...t,...e])];case 2:return t.filter(n=>e.includes(n));case 3:return t.filter(n=>!e.includes(n));case 4:return t.filter(n=>!e.includes(n)).concat(e.filter(n=>!t.includes(n)))}}dataUnique(t){return[...new Set(t)]}dataFind(t,e,r){const n=s=>{for(const a in s){if(a===e&&s[a]===r)return{key:a,value:s[a]};if(this.isArray(s[a])||this.isObject(s[a])){const i=n(s[a]);if(i)return i}}return null};return n(t)}dataUnEmpty(t){return t.filter(e=>e!==""&&e!==null&&e!==void 0)}dataFindValues(t,e,r,n=""){const s=t.split(","),a=[];if(n){const i=u=>{for(const o in u){const g=u[o];!g[n]&&g[r]&&s.includes(g[r].toString())?a.push(g):g[n]&&this.isArray(g[n])&&i(g[n])}};i(e)}else{if(s.length===1){const i=e.find(u=>u[r]===s[0]);return i?[i]:[]}return e.filter(i=>s.includes(i[r].toString()))}return a}getDateInfo(t){let e=t;this.isString(t)&&this.regIsHas(t,"-")&&(e=t.replaceAll("-","/"));const r=e?new Date(e):new Date,n=r.getFullYear(),s=(r.getMonth()+1).toString().padStart(2,"0"),a=r.getDate().toString().padStart(2,"0"),i=r.getHours().toString().padStart(2,"0"),u=r.getMinutes().toString().padStart(2,"0"),o=r.getSeconds().toString().padStart(2,"0");return{year:n,month:s,day:a,hour:i,minute:u,second:o}}getDateType(t,e="Y/M/D h:m:s"){if(this.isObject(t))var{year:r,month:n,day:s,hour:a,minute:i,second:u}=t;else var{year:r,month:n,day:s,hour:a,minute:i,second:u}=this.getDateInfo(t);return e.replace("Y",r).replace("M",n).replace("D",s).replace("h",a).replace("m",i).replace("s",u)}getDate(t,e="Y/M/D h:m:s"){return arguments.length===1?this.getDateType(this.getDateInfo(new Date),t):this.getDateType(this.getDateInfo(t),e)}getWeekTime(t=new Date){const e=new Date(t),r=e.getDay(),n=new Date(e);return n.setDate(e.getDate()-r+1),Array.from({length:7},(s,a)=>{const i=new Date(n);return i.setDate(n.getDate()+a),i.toLocaleDateString()})}getMonthDays(t=new Date().getFullYear(),e=new Date().getMonth()+1){let r=new Date(t,e-1,1).getTime();return(new Date(t,e,1).getTime()-r)/(1e3*60*60*24)}getWeekDay(t=new Date){return["日","一","二","三","四","五","六"][new Date(t).getDay()]}weekInMonthCount(){let t=new Date(new Date().setDate(1)||new Date().setDate(1)),e;t.getDay()===0?e=6:e=t.getDay()-1,t.setMonth(t.getMonth()+1),t.setDate(0);let r=t.getDate()+e;return Math.ceil(r/7)}getYearWeeks(t=new Date().getFullYear()){let e=new Date(t,0,1).getDay();if(e==1?e=0:e==0?e=1:e=8-e,t%4==0&&t%100!=0||t%100==0&&t%400==0)var r=366;else var r=365;return Math.ceil((r-e)/7)+(e!==0?1:0)}getBetwenDate(t,e){const r=new Date(t).getTime(),n=new Date(e).getTime(),s=[];for(let a=0;a<Math.abs(r-n)/864e5;a++){const i=r>n?r-a*864e5:r+a*864e5;s.push(this.getDate(new Date(i),"Y-M-D"))}return s}getDateList(t,e,r=!0,n=NaN){if(!t)return[];const s="Y-M-D",a=24*60*60*1e3;let i=Date.now();r||(i-=a);function u(c){const h=c.getMonth();return{year:h===0?c.getFullYear()-1:c.getFullYear(),month:h===0?12:h}}const o=c=>Array.from({length:c},(h,b)=>{const w=i-(c-b-1)*a;return this.getDateType(new Date(w),s)}),{year:g,month:l,day:p}=this.getDateInfo(t);if(e&&!n)switch(e){case 1:return o(3);case 2:return o(7);case 3:const{year:c,month:h}=u(i);return console.log(h),this.getBetwenDate(`${c}-${h}-${p}`,i);case 4:return this.getBetwenDate(`${g-1}/${l}/${p}`,`${g}/${l}/${p}`)}else if(n)return o(n);return[]}getTimeStep(t,e,r="01:00"){const[n,s]=t.split(":").map(Number),[a,i]=e.split(":").map(Number),[u,o]=r.split(":").map(Number),g=n*60+s,l=a*60+i,p=u*60+o,c=[];for(let h=g;h<=l;h+=p){const b=String(Math.floor(h/60)).padStart(2,"0"),w=String(h%60).padStart(2,"0");c.push(`${b}:${w}`)}return c}};return f(N,"instance",null),N})})($);var j=$.exports;const x=O(j);export{x as Z};
//# sourceMappingURL=@zzcpt-CEC27UK7.js.map
