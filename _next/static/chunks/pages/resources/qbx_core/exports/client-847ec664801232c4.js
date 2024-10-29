(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[578],{3039:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/qbx_core/exports/client",function(){return i(9848)}])},9848:function(e,n,i){"use strict";i.r(n),i.d(n,{__toc:function(){return o}});var s=i(2676),r=i(6318),l=i(4603),t=i(9323);let o=[{depth:2,value:"Notify",id:"notify"},{depth:2,value:"HasPrimaryGroup",id:"hasprimarygroup"},{depth:2,value:"HasGroup",id:"hasgroup"},{depth:2,value:"GetGroups",id:"getgroups"}];function c(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",span:"span",ul:"ul",li:"li"},(0,l.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Client Exports"}),"\n",(0,s.jsx)(n.h2,{id:"notify",children:"Notify"}),"\n",(0,s.jsx)(t.UW,{type:"info",children:(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://overextended.dev/ox_lib/Modules/Interface/Client/notify#libnotify",children:(0,s.jsx)(n.code,{children:"lib.notify"})})," for more details."]})}),"\n",(0,s.jsx)(n.p,{children:"Text box popup which disappears after a given amount of time."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_core:"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Notify"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(text, notifyType, duration, subTitle, notifyPosition, notifyStyle, notifyIcon, notifyIconColor)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["text: ",(0,s.jsx)(n.code,{children:"table | string"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The text of the notification."}),"\n",(0,s.jsxs)(n.li,{children:["Can be a string, or a table containing:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["text?: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["caption?: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["notifyType?: ",(0,s.jsx)(n.code,{children:"'inform' | 'error' | 'success' | 'warning'"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"'inform'"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["duration?: ",(0,s.jsx)(n.code,{children:"integer"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The duration in milliseconds for which the notification will remain on screen."}),"\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"5000"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["subTitle?: ",(0,s.jsx)(n.code,{children:"string"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Additional text under the title."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["notifyPosition?: ",(0,s.jsx)(n.code,{children:"'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left' | 'center-right' | 'center-left'"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"top-right"})," (changable in config)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["notifyStyle?: ",(0,s.jsx)(n.code,{children:"table"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Custom styling. Refer to ",(0,s.jsx)(n.a,{href:"https://overextended.dev/ox_lib/Modules/Interface/Client/notify#libnotify",children:(0,s.jsx)(n.code,{children:"lib.notify"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["notifyIcon?: ",(0,s.jsx)(n.code,{children:"string"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Font Awesome 6 icon name."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["notifyIconColor?: ",(0,s.jsx)(n.code,{children:"string"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Custom color for ",(0,s.jsx)(n.code,{children:"notifyIcon"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"hasprimarygroup",children:"HasPrimaryGroup"}),"\n",(0,s.jsx)(n.p,{children:"Checks if the player's current Job/Gang or citizenid matches against a single group, array of group, or group/grade or list of citizenids. Does not check if player is on or off duty"}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_core:"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"HasPrimaryGroup"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(filter)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["filter: ",(0,s.jsx)(n.code,{children:"string"})," or ",(0,s.jsx)(n.code,{children:"string[]"})," or ",(0,s.jsx)(n.code,{children:"table<string, number>"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A group/citizenid, array of groups/citizenids, or pairs of groups-grades required to pass the check."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["success: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"hasgroup",children:"HasGroup"}),"\n",(0,s.jsx)(n.p,{children:"Checks if the player's list of groups (Jobs/Gangs) or citizenid matches against a single group, array of group, or group/grade or list of citizenids. Does not check if player is on or off duty"}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_core:"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"HasGroup"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(filter)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["filter: ",(0,s.jsx)(n.code,{children:"string"})," or ",(0,s.jsx)(n.code,{children:"string[]"})," or ",(0,s.jsx)(n.code,{children:"table<string, number>"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A group/citizenid, array of groups/citizenids, or pairs of groups-grades required to pass the check."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["success: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getgroups",children:"GetGroups"}),"\n",(0,s.jsx)(n.p,{children:"Returns a combined table of all the groups the current player currently has."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_core:"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"GetGroups"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})})}),"\n",(0,s.jsx)(n.p,{children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["groups: ",(0,s.jsx)(n.code,{children:"table<string, number>"})]}),"\n"]})]})}n.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/resources/qbx_core/exports/client.mdx",route:"/resources/qbx_core/exports/client",timestamp:1723884099e3,title:"Client Exports",headings:o},pageNextRoute:"/resources/qbx_core/exports/client"})}},function(e){e.O(0,[318,888,774,179],function(){return e(e.s=3039)}),_N_E=e.O()}]);