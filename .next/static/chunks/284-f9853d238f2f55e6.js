"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[284],{7592:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(1066).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},8165:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(1066).Z)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},5169:function(e,t,n){n.d(t,{F:function(){return i},f:function(){return d}});var r=n(2265);let o=["light","dark"],a="(prefers-color-scheme: dark)",u="undefined"==typeof window,l=(0,r.createContext)(void 0),c={setTheme:e=>{},themes:[]},i=()=>{var e;return null!==(e=(0,r.useContext)(l))&&void 0!==e?e:c},d=e=>(0,r.useContext)(l)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),s=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:u=!0,storageKey:c="theme",themes:i=s,defaultTheme:d=n?"system":"light",attribute:f="data-theme",value:g,children:w,nonce:E})=>{let[M,_]=(0,r.useState)(()=>m(c,d)),[b,y]=(0,r.useState)(()=>m(c)),C=g?Object.values(g):i,R=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=h());let a=g?g[r]:r,l=t?v():null,c=document.documentElement;if("class"===f?(c.classList.remove(...C),a&&c.classList.add(a)):a?c.setAttribute(f,a):c.removeAttribute(f),u){let e=o.includes(d)?d:null,t=o.includes(r)?r:e;c.style.colorScheme=t}null==l||l()},[]),D=(0,r.useCallback)(e=>{_(e);try{localStorage.setItem(c,e)}catch(e){}},[e]),T=(0,r.useCallback)(t=>{y(h(t)),"system"===M&&n&&!e&&R("system")},[M,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,r.useEffect)(()=>{let e=e=>{e.key===c&&D(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[D]),(0,r.useEffect)(()=>{R(null!=e?e:M)},[e,M]);let k=(0,r.useMemo)(()=>({theme:M,setTheme:D,forcedTheme:e,resolvedTheme:"system"===M?b:M,themes:n?[...i,"system"]:i,systemTheme:n?b:void 0}),[M,D,e,b,n,i]);return r.createElement(l.Provider,{value:k},r.createElement(p,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:u,storageKey:c,themes:i,defaultTheme:d,attribute:f,value:g,children:w,attrs:C,nonce:E}),w)},p=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:u,enableColorScheme:l,defaultTheme:c,value:i,attrs:d,nonce:s})=>{let f="system"===c,p="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,m=l?o.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,r=!0)=>{let a=i?i[e]:e,u=t?e+"|| ''":`'${a}'`,c="";return l&&r&&!t&&o.includes(e)&&(c+=`d.style.colorScheme = '${e}';`),"class"===n?c+=t||a?`c.add(${u})`:"null":a&&(c+=`d[s](n,${u})`),c},h=e?`!function(){${p}${v(e)}}()`:u?`!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${v(i?"x[e]":"e",!0)}}${f?"":"else{"+v(c,!1,!1)+"}"}${m}}catch(e){}}()`:`!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${v(i?"x[e]":"e",!0)}}else{${v(c,!1,!1)};}${m}}catch(t){}}();`;return r.createElement("script",{nonce:s,dangerouslySetInnerHTML:{__html:h}})},()=>!0),m=(e,t)=>{let n;if(!u){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},h=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},1220:function(e,t,n){n.d(t,{oC:function(){return tn},VY:function(){return e9},ZA:function(){return e4},ck:function(){return tt},wU:function(){return ta},__:function(){return te},Uv:function(){return e7},Ee:function(){return tr},Rk:function(){return to},fC:function(){return e5},Z0:function(){return tu},Tr:function(){return tl},tu:function(){return ti},fF:function(){return tc},xz:function(){return e2}});var r=n(2988),o=n(2265),a=n(8149),u=n(1584),l=n(8324),c=n(1715),i=n(5171),d=n(976),s=n(7513),f=n(3938),p=n(589),m=n(467),v=n(3201),h=n(7791),g=n(6935),w=n(1383),E=n(5137);let M="rovingFocusGroup.onEntryFocus",_={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[y,C,R]=(0,d.B)(b),[D,T]=(0,l.b)(b,[R]),[k,I]=D(b),O=(0,o.forwardRef)((e,t)=>(0,o.createElement)(y.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(y.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(S,(0,r.Z)({},e,{ref:t}))))),S=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:l,loop:d=!1,dir:f,currentTabStopId:p,defaultCurrentTabStopId:m,onCurrentTabStopIdChange:v,onEntryFocus:h,...g}=e,w=(0,o.useRef)(null),b=(0,u.e)(t,w),y=(0,s.gm)(f),[R=null,D]=(0,c.T)({prop:p,defaultProp:m,onChange:v}),[T,I]=(0,o.useState)(!1),O=(0,E.W)(h),S=C(n),x=(0,o.useRef)(!1),[P,Z]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=w.current;if(e)return e.addEventListener(M,O),()=>e.removeEventListener(M,O)},[O]),(0,o.createElement)(k,{scope:n,orientation:l,dir:y,loop:d,currentTabStopId:R,onItemFocus:(0,o.useCallback)(e=>D(e),[D]),onItemShiftTab:(0,o.useCallback)(()=>I(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>Z(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>Z(e=>e-1),[])},(0,o.createElement)(i.WV.div,(0,r.Z)({tabIndex:T||0===P?-1:0,"data-orientation":l},g,{ref:b,style:{outline:"none",...e.style},onMouseDown:(0,a.M)(e.onMouseDown,()=>{x.current=!0}),onFocus:(0,a.M)(e.onFocus,e=>{let t=!x.current;if(e.target===e.currentTarget&&t&&!T){let t=new CustomEvent(M,_);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=S().filter(e=>e.focusable);F([e.find(e=>e.active),e.find(e=>e.id===R),...e].filter(Boolean).map(e=>e.ref.current))}}x.current=!1}),onBlur:(0,a.M)(e.onBlur,()=>I(!1))})))}),x=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:u=!0,active:l=!1,tabStopId:c,...d}=e,s=(0,v.M)(),f=c||s,p=I("RovingFocusGroupItem",n),m=p.currentTabStopId===f,h=C(n),{onFocusableItemAdd:g,onFocusableItemRemove:w}=p;return(0,o.useEffect)(()=>{if(u)return g(),()=>w()},[u,g,w]),(0,o.createElement)(y.ItemSlot,{scope:n,id:f,focusable:u,active:l},(0,o.createElement)(i.WV.span,(0,r.Z)({tabIndex:m?0:-1,"data-orientation":p.orientation},d,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{u?p.onItemFocus(f):e.preventDefault()}),onFocus:(0,a.M)(e.onFocus,()=>p.onItemFocus(f)),onKeyDown:(0,a.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return P[o]}(e,p.orientation,p.dir);if(void 0!==t){e.preventDefault();let o=h().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&o.reverse();let a=o.indexOf(e.currentTarget);o=p.loop?(n=o,r=a+1,n.map((e,t)=>n[(r+t)%n.length])):o.slice(a+1)}setTimeout(()=>F(o))}})})))}),P={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function F(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}var Z=n(1538),A=n(8369),L=n(8684);let N=["Enter"," "],K=["ArrowUp","PageDown","End"],$=["ArrowDown","PageUp","Home",...K],U={ltr:[...N,"ArrowRight"],rtl:[...N,"ArrowLeft"]},V={ltr:["ArrowLeft"],rtl:["ArrowRight"]},G="Menu",[W,B,z]=(0,d.B)(G),[X,H]=(0,l.b)(G,[z,h.D7,T]),Y=(0,h.D7)(),j=T(),[J,q]=X(G),[Q,ee]=X(G),et=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e,u=Y(n);return(0,o.createElement)(h.ee,(0,r.Z)({},u,a,{ref:t}))}),en="MenuPortal",[er,eo]=X(en,{forceMount:void 0}),ea="MenuContent",[eu,el]=X(ea),ec=(0,o.forwardRef)((e,t)=>{let n=eo(ea,e.__scopeMenu),{forceMount:a=n.forceMount,...u}=e,l=q(ea,e.__scopeMenu),c=ee(ea,e.__scopeMenu);return(0,o.createElement)(W.Provider,{scope:e.__scopeMenu},(0,o.createElement)(w.z,{present:a||l.open},(0,o.createElement)(W.Slot,{scope:e.__scopeMenu},c.modal?(0,o.createElement)(ei,(0,r.Z)({},u,{ref:t})):(0,o.createElement)(ed,(0,r.Z)({},u,{ref:t})))))}),ei=(0,o.forwardRef)((e,t)=>{let n=q(ea,e.__scopeMenu),l=(0,o.useRef)(null),c=(0,u.e)(t,l);return(0,o.useEffect)(()=>{let e=l.current;if(e)return(0,A.Ry)(e)},[]),(0,o.createElement)(es,(0,r.Z)({},e,{ref:c,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:(0,a.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),ed=(0,o.forwardRef)((e,t)=>{let n=q(ea,e.__scopeMenu);return(0,o.createElement)(es,(0,r.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),es=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,loop:l=!1,trapFocus:c,onOpenAutoFocus:i,onCloseAutoFocus:d,disableOutsidePointerEvents:s,onEntryFocus:v,onEscapeKeyDown:g,onPointerDownOutside:w,onFocusOutside:E,onInteractOutside:M,onDismiss:_,disableOutsideScroll:b,...y}=e,C=q(ea,n),R=ee(ea,n),D=Y(n),T=j(n),k=B(n),[I,S]=(0,o.useState)(null),x=(0,o.useRef)(null),P=(0,u.e)(t,x,C.onContentChange),F=(0,o.useRef)(0),A=(0,o.useRef)(""),N=(0,o.useRef)(0),U=(0,o.useRef)(null),V=(0,o.useRef)("right"),G=(0,o.useRef)(0),W=b?L.Z:o.Fragment,z=b?{as:Z.g7,allowPinchZoom:!0}:void 0,X=e=>{var t,n;let r=A.current+e,o=k().filter(e=>!e.disabled),a=document.activeElement,u=null===(t=o.find(e=>e.ref.current===a))||void 0===t?void 0:t.textValue,l=function(e,t,n){var r;let o=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,a=(r=Math.max(n?e.indexOf(n):-1,0),e.map((t,n)=>e[(r+n)%e.length]));1===o.length&&(a=a.filter(e=>e!==n));let u=a.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return u!==n?u:void 0}(o.map(e=>e.textValue),r,u),c=null===(n=o.find(e=>e.textValue===l))||void 0===n?void 0:n.ref.current;!function e(t){A.current=t,window.clearTimeout(F.current),""!==t&&(F.current=window.setTimeout(()=>e(""),1e3))}(r),c&&setTimeout(()=>c.focus())};(0,o.useEffect)(()=>()=>window.clearTimeout(F.current),[]),(0,p.EW)();let H=(0,o.useCallback)(e=>{var t,n,r;return V.current===(null===(t=U.current)||void 0===t?void 0:t.side)&&!!(r=null===(n=U.current)||void 0===n?void 0:n.area)&&function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let u=t[e].x,l=t[e].y,c=t[a].x,i=t[a].y;l>r!=i>r&&n<(c-u)*(r-l)/(i-l)+u&&(o=!o)}return o}({x:e.clientX,y:e.clientY},r)},[]);return(0,o.createElement)(eu,{scope:n,searchRef:A,onItemEnter:(0,o.useCallback)(e=>{H(e)&&e.preventDefault()},[H]),onItemLeave:(0,o.useCallback)(e=>{var t;H(e)||(null===(t=x.current)||void 0===t||t.focus(),S(null))},[H]),onTriggerLeave:(0,o.useCallback)(e=>{H(e)&&e.preventDefault()},[H]),pointerGraceTimerRef:N,onPointerGraceIntentChange:(0,o.useCallback)(e=>{U.current=e},[])},(0,o.createElement)(W,z,(0,o.createElement)(m.M,{asChild:!0,trapped:c,onMountAutoFocus:(0,a.M)(i,e=>{var t;e.preventDefault(),null===(t=x.current)||void 0===t||t.focus()}),onUnmountAutoFocus:d},(0,o.createElement)(f.XB,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:g,onPointerDownOutside:w,onFocusOutside:E,onInteractOutside:M,onDismiss:_},(0,o.createElement)(O,(0,r.Z)({asChild:!0},T,{dir:R.dir,orientation:"vertical",loop:l,currentTabStopId:I,onCurrentTabStopIdChange:S,onEntryFocus:(0,a.M)(v,e=>{R.isUsingKeyboardRef.current||e.preventDefault()})}),(0,o.createElement)(h.VY,(0,r.Z)({role:"menu","aria-orientation":"vertical","data-state":eF(C.open),"data-radix-menu-content":"",dir:R.dir},D,y,{ref:P,style:{outline:"none",...y.style},onKeyDown:(0,a.M)(y.onKeyDown,e=>{let t=e.target.closest("[data-radix-menu-content]")===e.currentTarget,n=e.ctrlKey||e.altKey||e.metaKey,r=1===e.key.length;t&&("Tab"===e.key&&e.preventDefault(),!n&&r&&X(e.key));let o=x.current;if(e.target!==o||!$.includes(e.key))return;e.preventDefault();let a=k().filter(e=>!e.disabled).map(e=>e.ref.current);K.includes(e.key)&&a.reverse(),function(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}(a)}),onBlur:(0,a.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(F.current),A.current="")}),onPointerMove:(0,a.M)(e.onPointerMove,eL(e=>{let t=e.target,n=G.current!==e.clientX;if(e.currentTarget.contains(t)&&n){let t=e.clientX>G.current?"right":"left";V.current=t,G.current=e.clientX}}))})))))))}),ef=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({role:"group"},a,{ref:t}))}),ep=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({},a,{ref:t}))}),em="MenuItem",ev="menu.itemSelect",eh=(0,o.forwardRef)((e,t)=>{let{disabled:n=!1,onSelect:l,...c}=e,d=(0,o.useRef)(null),s=ee(em,e.__scopeMenu),f=el(em,e.__scopeMenu),p=(0,u.e)(t,d),m=(0,o.useRef)(!1);return(0,o.createElement)(eg,(0,r.Z)({},c,{ref:p,disabled:n,onClick:(0,a.M)(e.onClick,()=>{let e=d.current;if(!n&&e){let t=new CustomEvent(ev,{bubbles:!0,cancelable:!0});e.addEventListener(ev,e=>null==l?void 0:l(e),{once:!0}),(0,i.jH)(e,t),t.defaultPrevented?m.current=!1:s.onClose()}}),onPointerDown:t=>{var n;null===(n=e.onPointerDown)||void 0===n||n.call(e,t),m.current=!0},onPointerUp:(0,a.M)(e.onPointerUp,e=>{var t;m.current||null===(t=e.currentTarget)||void 0===t||t.click()}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{let t=""!==f.searchRef.current;!n&&(!t||" "!==e.key)&&N.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})}))}),eg=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,disabled:l=!1,textValue:c,...d}=e,s=el(em,n),f=j(n),p=(0,o.useRef)(null),m=(0,u.e)(t,p),[v,h]=(0,o.useState)(!1),[g,w]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=p.current;if(e){var t;w((null!==(t=e.textContent)&&void 0!==t?t:"").trim())}},[d.children]),(0,o.createElement)(W.ItemSlot,{scope:n,disabled:l,textValue:null!=c?c:g},(0,o.createElement)(x,(0,r.Z)({asChild:!0},f,{focusable:!l}),(0,o.createElement)(i.WV.div,(0,r.Z)({role:"menuitem","data-highlighted":v?"":void 0,"aria-disabled":l||void 0,"data-disabled":l?"":void 0},d,{ref:m,onPointerMove:(0,a.M)(e.onPointerMove,eL(e=>{l?s.onItemLeave(e):(s.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus())})),onPointerLeave:(0,a.M)(e.onPointerLeave,eL(e=>s.onItemLeave(e))),onFocus:(0,a.M)(e.onFocus,()=>h(!0)),onBlur:(0,a.M)(e.onBlur,()=>h(!1))}))))}),ew=(0,o.forwardRef)((e,t)=>{let{checked:n=!1,onCheckedChange:u,...l}=e;return(0,o.createElement)(eC,{scope:e.__scopeMenu,checked:n},(0,o.createElement)(eh,(0,r.Z)({role:"menuitemcheckbox","aria-checked":eZ(n)?"mixed":n},l,{ref:t,"data-state":eA(n),onSelect:(0,a.M)(l.onSelect,()=>null==u?void 0:u(!!eZ(n)||!n),{checkForDefaultPrevented:!1})})))}),[eE,eM]=X("MenuRadioGroup",{value:void 0,onValueChange:()=>{}}),e_=(0,o.forwardRef)((e,t)=>{let{value:n,onValueChange:a,...u}=e,l=(0,E.W)(a);return(0,o.createElement)(eE,{scope:e.__scopeMenu,value:n,onValueChange:l},(0,o.createElement)(ef,(0,r.Z)({},u,{ref:t})))}),eb=(0,o.forwardRef)((e,t)=>{let{value:n,...u}=e,l=eM("MenuRadioItem",e.__scopeMenu),c=n===l.value;return(0,o.createElement)(eC,{scope:e.__scopeMenu,checked:c},(0,o.createElement)(eh,(0,r.Z)({role:"menuitemradio","aria-checked":c},u,{ref:t,"data-state":eA(c),onSelect:(0,a.M)(u.onSelect,()=>{var e;return null===(e=l.onValueChange)||void 0===e?void 0:e.call(l,n)},{checkForDefaultPrevented:!1})})))}),ey="MenuItemIndicator",[eC,eR]=X(ey,{checked:!1}),eD=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,forceMount:a,...u}=e,l=eR(ey,n);return(0,o.createElement)(w.z,{present:a||eZ(l.checked)||!0===l.checked},(0,o.createElement)(i.WV.span,(0,r.Z)({},u,{ref:t,"data-state":eA(l.checked)})))}),eT=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({role:"separator","aria-orientation":"horizontal"},a,{ref:t}))}),ek=((e,t)=>{let{__scopeMenu:n,...a}=e,u=Y(n);return(0,o.createElement)(h.Eh,(0,r.Z)({},u,a,{ref:t}))},"MenuSub"),[eI,eO]=X(ek),eS="MenuSubTrigger",ex=(0,o.forwardRef)((e,t)=>{let n=q(eS,e.__scopeMenu),l=ee(eS,e.__scopeMenu),c=eO(eS,e.__scopeMenu),i=el(eS,e.__scopeMenu),d=(0,o.useRef)(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:f}=i,p={__scopeMenu:e.__scopeMenu},m=(0,o.useCallback)(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return(0,o.useEffect)(()=>m,[m]),(0,o.useEffect)(()=>{let e=s.current;return()=>{window.clearTimeout(e),f(null)}},[s,f]),(0,o.createElement)(et,(0,r.Z)({asChild:!0},p),(0,o.createElement)(eg,(0,r.Z)({id:c.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":c.contentId,"data-state":eF(n.open)},e,{ref:(0,u.F)(t,c.onTriggerChange),onClick:t=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,t),e.disabled||t.defaultPrevented||(t.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:(0,a.M)(e.onPointerMove,eL(t=>{i.onItemEnter(t),t.defaultPrevented||e.disabled||n.open||d.current||(i.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{n.onOpenChange(!0),m()},100))})),onPointerLeave:(0,a.M)(e.onPointerLeave,eL(e=>{var t,r;m();let o=null===(t=n.content)||void 0===t?void 0:t.getBoundingClientRect();if(o){let t=null===(r=n.content)||void 0===r?void 0:r.dataset.side,a="right"===t,u=o[a?"left":"right"],l=o[a?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:u,y:o.top},{x:l,y:o.top},{x:l,y:o.bottom},{x:u,y:o.bottom}],side:t}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,a.M)(e.onKeyDown,t=>{let r=""!==i.searchRef.current;if(!e.disabled&&(!r||" "!==t.key)&&U[l.dir].includes(t.key)){var o;n.onOpenChange(!0),null===(o=n.content)||void 0===o||o.focus(),t.preventDefault()}})})))}),eP=(0,o.forwardRef)((e,t)=>{let n=eo(ea,e.__scopeMenu),{forceMount:l=n.forceMount,...c}=e,i=q(ea,e.__scopeMenu),d=ee(ea,e.__scopeMenu),s=eO("MenuSubContent",e.__scopeMenu),f=(0,o.useRef)(null),p=(0,u.e)(t,f);return(0,o.createElement)(W.Provider,{scope:e.__scopeMenu},(0,o.createElement)(w.z,{present:l||i.open},(0,o.createElement)(W.Slot,{scope:e.__scopeMenu},(0,o.createElement)(es,(0,r.Z)({id:s.contentId,"aria-labelledby":s.triggerId},c,{ref:p,align:"start",side:"rtl"===d.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var t;d.isUsingKeyboardRef.current&&(null===(t=f.current)||void 0===t||t.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,a.M)(e.onFocusOutside,e=>{e.target!==s.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,a.M)(e.onEscapeKeyDown,e=>{d.onClose(),e.preventDefault()}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{let t=e.currentTarget.contains(e.target),n=V[d.dir].includes(e.key);if(t&&n){var r;i.onOpenChange(!1),null===(r=s.trigger)||void 0===r||r.focus(),e.preventDefault()}})})))))});function eF(e){return e?"open":"closed"}function eZ(e){return"indeterminate"===e}function eA(e){return eZ(e)?"indeterminate":e?"checked":"unchecked"}function eL(e){return t=>"mouse"===t.pointerType?e(t):void 0}let eN=e=>{let{__scopeMenu:t,open:n=!1,children:r,dir:a,onOpenChange:u,modal:l=!0}=e,c=Y(t),[i,d]=(0,o.useState)(null),f=(0,o.useRef)(!1),p=(0,E.W)(u),m=(0,s.gm)(a);return(0,o.useEffect)(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",t,{capture:!0,once:!0}),document.addEventListener("pointermove",t,{capture:!0,once:!0})},t=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",t,{capture:!0}),document.removeEventListener("pointermove",t,{capture:!0})}},[]),(0,o.createElement)(h.fC,c,(0,o.createElement)(J,{scope:t,open:n,onOpenChange:p,content:i,onContentChange:d},(0,o.createElement)(Q,{scope:t,onClose:(0,o.useCallback)(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:m,modal:l},r)))},eK=e=>{let{__scopeMenu:t,forceMount:n,children:r,container:a}=e,u=q(en,t);return(0,o.createElement)(er,{scope:t,forceMount:n},(0,o.createElement)(w.z,{present:n||u.open},(0,o.createElement)(g.h,{asChild:!0,container:a},r)))},e$=e=>{let{__scopeMenu:t,children:n,open:r=!1,onOpenChange:a}=e,u=q(ek,t),l=Y(t),[c,i]=(0,o.useState)(null),[d,s]=(0,o.useState)(null),f=(0,E.W)(a);return(0,o.useEffect)(()=>(!1===u.open&&f(!1),()=>f(!1)),[u.open,f]),(0,o.createElement)(h.fC,l,(0,o.createElement)(J,{scope:t,open:r,onOpenChange:f,content:d,onContentChange:s},(0,o.createElement)(eI,{scope:t,contentId:(0,v.M)(),triggerId:(0,v.M)(),trigger:c,onTriggerChange:i},n)))},eU="DropdownMenu",[eV,eG]=(0,l.b)(eU,[H]),eW=H(),[eB,ez]=eV(eU),eX=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,disabled:l=!1,...c}=e,d=ez("DropdownMenuTrigger",n),s=eW(n);return(0,o.createElement)(et,(0,r.Z)({asChild:!0},s),(0,o.createElement)(i.WV.button,(0,r.Z)({type:"button",id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open,"aria-controls":d.open?d.contentId:void 0,"data-state":d.open?"open":"closed","data-disabled":l?"":void 0,disabled:l},c,{ref:(0,u.F)(t,d.triggerRef),onPointerDown:(0,a.M)(e.onPointerDown,e=>{l||0!==e.button||!1!==e.ctrlKey||(d.onOpenToggle(),d.open||e.preventDefault())}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{!l&&(["Enter"," "].includes(e.key)&&d.onOpenToggle(),"ArrowDown"===e.key&&d.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})))}),eH=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...u}=e,l=ez("DropdownMenuContent",n),c=eW(n),i=(0,o.useRef)(!1);return(0,o.createElement)(ec,(0,r.Z)({id:l.contentId,"aria-labelledby":l.triggerId},c,u,{ref:t,onCloseAutoFocus:(0,a.M)(e.onCloseAutoFocus,e=>{var t;i.current||null===(t=l.triggerRef.current)||void 0===t||t.focus(),i.current=!1,e.preventDefault()}),onInteractOutside:(0,a.M)(e.onInteractOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;(!l.modal||r)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),eY=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eW(n);return(0,o.createElement)(ef,(0,r.Z)({},u,a,{ref:t}))}),ej=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eW(n);return(0,o.createElement)(ep,(0,r.Z)({},u,a,{ref:t}))}),eJ=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eW(n);return(0,o.createElement)(eh,(0,r.Z)({},u,a,{ref:t}))}),eq=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eW(n);return(0,o.createElement)(ew,(0,r.Z)({},u,a,{ref:t}))}),eQ=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eW(n);return(0,o.createElement)(e_,(0,r.Z)({},u,a,{ref:t}))}),e0=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eW(n);return(0,o.createElement)(eb,(0,r.Z)({},u,a,{ref:t}))}),e1=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eW(n);return(0,o.createElement)(eD,(0,r.Z)({},u,a,{ref:t}))}),e6=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eW(n);return(0,o.createElement)(eT,(0,r.Z)({},u,a,{ref:t}))}),e8=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eW(n);return(0,o.createElement)(ex,(0,r.Z)({},u,a,{ref:t}))}),e3=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eW(n);return(0,o.createElement)(eP,(0,r.Z)({},u,a,{ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),e5=e=>{let{__scopeDropdownMenu:t,children:n,dir:a,open:u,defaultOpen:l,onOpenChange:i,modal:d=!0}=e,s=eW(t),f=(0,o.useRef)(null),[p=!1,m]=(0,c.T)({prop:u,defaultProp:l,onChange:i});return(0,o.createElement)(eB,{scope:t,triggerId:(0,v.M)(),triggerRef:f,contentId:(0,v.M)(),open:p,onOpenChange:m,onOpenToggle:(0,o.useCallback)(()=>m(e=>!e),[m]),modal:d},(0,o.createElement)(eN,(0,r.Z)({},s,{open:p,onOpenChange:m,dir:a,modal:d}),n))},e2=eX,e7=e=>{let{__scopeDropdownMenu:t,...n}=e,a=eW(t);return(0,o.createElement)(eK,(0,r.Z)({},a,n))},e9=eH,e4=eY,te=ej,tt=eJ,tn=eq,tr=eQ,to=e0,ta=e1,tu=e6,tl=e=>{let{__scopeDropdownMenu:t,children:n,open:a,onOpenChange:u,defaultOpen:l}=e,i=eW(t),[d=!1,s]=(0,c.T)({prop:a,defaultProp:l,onChange:u});return(0,o.createElement)(e$,(0,r.Z)({},i,{open:d,onOpenChange:s}),n)},tc=e8,ti=e3},1383:function(e,t,n){n.d(t,{z:function(){return l}});var r=n(2265),o=n(4887),a=n(1584),u=n(1336);let l=e=>{let{present:t,children:n}=e,l=function(e){var t,n;let[a,l]=(0,r.useState)(),i=(0,r.useRef)({}),d=(0,r.useRef)(e),s=(0,r.useRef)("none"),[f,p]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return(0,r.useEffect)(()=>{let e=c(i.current);s.current="mounted"===f?e:"none"},[f]),(0,u.b)(()=>{let t=i.current,n=d.current;if(n!==e){let r=s.current,o=c(t);e?p("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?p("UNMOUNT"):n&&r!==o?p("ANIMATION_OUT"):p("UNMOUNT"),d.current=e}},[e,p]),(0,u.b)(()=>{if(a){let e=e=>{let t=c(i.current).includes(e.animationName);e.target===a&&t&&(0,o.flushSync)(()=>p("ANIMATION_END"))},t=e=>{e.target===a&&(s.current=c(i.current))};return a.addEventListener("animationstart",t),a.addEventListener("animationcancel",e),a.addEventListener("animationend",e),()=>{a.removeEventListener("animationstart",t),a.removeEventListener("animationcancel",e),a.removeEventListener("animationend",e)}}p("ANIMATION_END")},[a,p]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(e=>{e&&(i.current=getComputedStyle(e)),l(e)},[])}}(t),i="function"==typeof n?n({present:l.isPresent}):r.Children.only(n),d=(0,a.e)(l.ref,i.ref);return"function"==typeof n||l.isPresent?(0,r.cloneElement)(i,{ref:d}):null};function c(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"}}]);