import{ag as P,ad as v,E as z,as as A,ab as m,at as y,aa as w,A as C,ae as E,ac as g,P as D}from"./vendor.6afcc2f0.js";import{d as O}from"./QMenu.ef562a3e.js";const q={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},X=Object.keys(q);q.all=!0;function _(o){const r={};for(const u of X)o[u]===!0&&(r[u]=!0);return Object.keys(r).length===0?q:(r.horizontal===!0?r.left=r.right=!0:r.left===!0&&r.right===!0&&(r.horizontal=!0),r.vertical===!0?r.up=r.down=!0:r.up===!0&&r.down===!0&&(r.vertical=!0),r.horizontal===!0&&r.vertical===!0&&(r.all=!0),r)}function M(o,r){return r.event===void 0&&o.target!==void 0&&o.target.draggable!==!0&&typeof r.handler=="function"&&o.target.nodeName.toUpperCase()!=="INPUT"&&(o.qClonedBy===void 0||o.qClonedBy.indexOf(r.uid)===-1)}function b(o,r,u){const l=E(o);let e,t=l.left-r.event.x,i=l.top-r.event.y,a=Math.abs(t),s=Math.abs(i);const n=r.direction;n.horizontal===!0&&n.vertical!==!0?e=t<0?"left":"right":n.horizontal!==!0&&n.vertical===!0?e=i<0?"up":"down":n.up===!0&&i<0?(e="up",a>s&&(n.left===!0&&t<0?e="left":n.right===!0&&t>0&&(e="right"))):n.down===!0&&i>0?(e="down",a>s&&(n.left===!0&&t<0?e="left":n.right===!0&&t>0&&(e="right"))):n.left===!0&&t<0?(e="left",a<s&&(n.up===!0&&i<0?e="up":n.down===!0&&i>0&&(e="down"))):n.right===!0&&t>0&&(e="right",a<s&&(n.up===!0&&i<0?e="up":n.down===!0&&i>0&&(e="down")));let p=!1;if(e===void 0&&u===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};e=r.event.lastDir,p=!0,e==="left"||e==="right"?(l.left-=t,a=0,t=0):(l.top-=i,s=0,i=0)}return{synthetic:p,payload:{evt:o,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:l,direction:e,isFirst:r.event.isFirst,isFinal:u===!0,duration:Date.now()-r.event.time,distance:{x:a,y:s},offset:{x:t,y:i},delta:{x:l.left-r.event.lastX,y:l.top-r.event.lastY}}}}let Y=0;var S=P({name:"touch-pan",beforeMount(o,{value:r,modifiers:u}){if(u.mouse!==!0&&v.has.touch!==!0)return;function l(t,i){u.mouse===!0&&i===!0?D(t):(u.stop===!0&&C(t),u.prevent===!0&&w(t))}const e={uid:"qvtp_"+Y++,handler:r,modifiers:u,direction:_(u),noop:z,mouseStart(t){M(t,e)&&A(t)&&(m(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(t,!0))},touchStart(t){if(M(t,e)){const i=t.target;m(e,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),e.start(t)}},start(t,i){if(v.is.firefox===!0&&y(o,!0),e.lastEvt=t,i===!0||u.stop===!0){if(e.direction.all!==!0&&(i!==!0||e.modifiers.mouseAllDir!==!0)){const n=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&w(n),t.cancelBubble===!0&&C(n),Object.assign(n,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[e.uid]:t.qClonedBy.concat(e.uid)}),e.initialEvent={target:t.target,event:n}}C(t)}const{left:a,top:s}=E(t);e.event={x:a,y:s,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:s}},move(t){if(e.event===void 0)return;const i=E(t),a=i.left-e.event.x,s=i.top-e.event.y;if(a===0&&s===0)return;e.lastEvt=t;const n=e.event.mouse===!0,p=()=>{l(t,n),u.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),n===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),O(),e.styleCleanup=d=>{if(e.styleCleanup=void 0,u.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),n===!0){const h=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{h(),d()},50):h()}else d!==void 0&&d()}};if(e.event.detected===!0){e.event.isFirst!==!0&&l(t,e.event.mouse);const{payload:d,synthetic:h}=b(t,e,!1);d!==void 0&&(e.handler(d)===!1?e.end(t):(e.styleCleanup===void 0&&e.event.isFirst===!0&&p(),e.event.lastX=d.position.left,e.event.lastY=d.position.top,e.event.lastDir=h===!0?void 0:d.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||n===!0&&e.modifiers.mouseAllDir===!0){p(),e.event.detected=!0,e.move(t);return}const c=Math.abs(a),f=Math.abs(s);c!==f&&(e.direction.horizontal===!0&&c>f||e.direction.vertical===!0&&c<f||e.direction.up===!0&&c<f&&s<0||e.direction.down===!0&&c<f&&s>0||e.direction.left===!0&&c>f&&a<0||e.direction.right===!0&&c>f&&a>0?(e.event.detected=!0,e.move(t)):e.end(t,!0))},end(t,i){if(e.event!==void 0){if(g(e,"temp"),v.is.firefox===!0&&y(o,!1),i===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(b(t===void 0?e.lastEvt:t,e).payload);const{payload:a}=b(t===void 0?e.lastEvt:t,e,!0),s=()=>{e.handler(a)};e.styleCleanup!==void 0?e.styleCleanup(s):s()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};o.__qtouchpan=e,u.mouse===!0&&m(e,"main",[[o,"mousedown","mouseStart",`passive${u.mouseCapture===!0?"Capture":""}`]]),v.has.touch===!0&&m(e,"main",[[o,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[o,"touchmove","noop","notPassiveCapture"]])},updated(o,r){const u=o.__qtouchpan;u!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&u.end(),u.handler=r.value),u.direction=_(r.modifiers))},beforeUnmount(o){const r=o.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),g(r,"main"),g(r,"temp"),v.is.firefox===!0&&y(o,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete o.__qtouchpan)}});export{S as T};
