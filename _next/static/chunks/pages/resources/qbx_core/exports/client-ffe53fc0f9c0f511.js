(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[578],{3362:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/qbx_core/exports/client",function(){return i(3706)}])},3706:function(e,n,i){"use strict";i.r(n),i.d(n,{__toc:function(){return o}});var r=i(1527),s=i(7154),t=i(5424),l=i(1890);let o=[{depth:2,value:"Notify",id:"notify"},{depth:2,value:"HasPrimaryGroup",id:"hasprimarygroup"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",span:"span",ul:"ul",li:"li"},(0,t.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"Client Exports"}),"\n",(0,r.jsx)(n.h2,{id:"notify",children:"Notify"}),"\n",(0,r.jsx)(l.UW,{type:"info",children:(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://overextended.dev/ox_lib/Modules/Interface/Client/notify#libnotify",children:(0,r.jsx)(n.code,{children:"lib.notify"})})," for more details."]})}),"\n",(0,r.jsx)(n.p,{children:"Text box popup which disappears after a given amount of time."}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_core:"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Notify"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(text, notifyType, duration, subTitle, notifyPosition, notifyStyle, notifyIcon, notifyIconColor)"})]})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["text: ",(0,r.jsx)(n.code,{children:"table | string"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The text of the notification."}),"\n",(0,r.jsxs)(n.li,{children:["Can be a string, or a table containing:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["text?: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:["caption?: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["notifyType?: ",(0,r.jsx)(n.code,{children:"'inform' | 'error' | 'success' | 'warning'"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"'inform'"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["duration?: ",(0,r.jsx)(n.code,{children:"integer"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The duration in milliseconds for which the notification will remain on screen."}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"5000"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["subTitle?: ",(0,r.jsx)(n.code,{children:"string"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Additional text under the title."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["notifyPosition?: ",(0,r.jsx)(n.code,{children:"'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left' | 'center-right' | 'center-left'"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"top-right"})," (changable in config)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["notifyStyle?: ",(0,r.jsx)(n.code,{children:"table"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Custom styling. Refer to ",(0,r.jsx)(n.a,{href:"https://overextended.dev/ox_lib/Modules/Interface/Client/notify#libnotify",children:(0,r.jsx)(n.code,{children:"lib.notify"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["notifyIcon?: ",(0,r.jsx)(n.code,{children:"string"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Font Awesome 6 icon name."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["notifyIconColor?: ",(0,r.jsx)(n.code,{children:"string"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Custom color for ",(0,r.jsx)(n.code,{children:"notifyIcon"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"hasprimarygroup",children:"HasPrimaryGroup"}),"\n",(0,r.jsx)(n.p,{children:"Checks if the player's current Job/Gang or citizenid matches against a single group, array of group, or group/grade or list of citizenids. Does not check if player is on or off duty"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_core:"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"HasPrimaryGroup"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(filter)"})]})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["filter: ",(0,r.jsx)(n.code,{children:"string"})," or ",(0,r.jsx)(n.code,{children:"string[]"})," or ",(0,r.jsx)(n.code,{children:"table<string, number>"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A group/citizenid, array of groups/citizenids, or pairs of groups-grades required to pass the check."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Returns:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["success: ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]})]})}n.default=(0,s.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.a)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/resources/qbx_core/exports/client.mdx",route:"/resources/qbx_core/exports/client",title:"Client Exports",headings:o},pageNextRoute:"/resources/qbx_core/exports/client"})}},function(e){e.O(0,[154,774,888,179],function(){return e(e.s=3362)}),_N_E=e.O()}]);