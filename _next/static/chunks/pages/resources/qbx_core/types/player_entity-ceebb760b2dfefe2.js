(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9177],{5822:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/qbx_core/types/player_entity",function(){return s(7149)}])},7149:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return r}});var i=s(2676),l=s(6318),c=s(4603);let r=[{depth:2,value:"Fields",id:"fields"}];function d(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",code:"code"},(0,c.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"PlayerEntity"}),"\n",(0,i.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["citizenid: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["license: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["name: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["money: ",(0,i.jsx)(n.code,{children:"table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["cash: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["bank: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["crypto: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["charinfo: ",(0,i.jsx)(n.code,{children:"table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["firstname: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["lastname: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["birthdate: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["nationality: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["cid: ",(0,i.jsx)(n.code,{children:"integer"})]}),"\n",(0,i.jsxs)(n.li,{children:["gender: ",(0,i.jsx)(n.code,{children:"integer"})]}),"\n",(0,i.jsxs)(n.li,{children:["backstory: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["phone: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["account: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["card: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["job: ",(0,i.jsx)(n.code,{children:"table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["name: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["label: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["payment: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["onduty: ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:["isboss: ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:["grade: ",(0,i.jsx)(n.code,{children:"table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["name: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["level: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["jobs: ",(0,i.jsx)(n.code,{children:"table<string, integer>"})," maps job name to job grade that the player has. Unemployed not included."]}),"\n",(0,i.jsxs)(n.li,{children:["gang: ",(0,i.jsx)(n.code,{children:"table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["name: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["label: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["isboss: ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:["grade: ",(0,i.jsx)(n.code,{children:"table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["name: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["level: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["gangs: ",(0,i.jsx)(n.code,{children:"table<string, integer>"})," maps gang name to gang grade that the player has. None gang not included."]}),"\n",(0,i.jsxs)(n.li,{children:["position: ",(0,i.jsx)(n.code,{children:"vector4"})]}),"\n",(0,i.jsxs)(n.li,{children:["metadata: ",(0,i.jsx)(n.code,{children:"table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["health: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["armor: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["hunger: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["thirst: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["stress: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["isdead: ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:["inlaststand: ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:["ishandcuffed: ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:["tracker: ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:["injail: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["jailitems: ",(0,i.jsx)(n.code,{children:"table"})]}),"\n",(0,i.jsxs)(n.li,{children:["status: ",(0,i.jsx)(n.code,{children:"table"})]}),"\n",(0,i.jsxs)(n.li,{children:["phone: ",(0,i.jsx)(n.code,{children:"table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["background: ",(0,i.jsx)(n.code,{children:"any"})]}),"\n",(0,i.jsxs)(n.li,{children:["profilepicture: ",(0,i.jsx)(n.code,{children:"any"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["bloodtype: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["dealerrep: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["craftingrep: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["attachmentcraftingrep: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["currentapartment?: ",(0,i.jsx)(n.code,{children:"integer"})]}),"\n",(0,i.jsxs)(n.li,{children:["jobrep: ",(0,i.jsx)(n.code,{children:"table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["tow: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["trucker: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["taxi: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["hotdog: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["callsign: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["fingerprint: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["walletid: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["criminalrecord: ",(0,i.jsx)(n.code,{children:"table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["hasRecord: ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:["date?: ",(0,i.jsx)(n.code,{children:"table"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["licences: ",(0,i.jsx)(n.code,{children:"table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["id: ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:["driver: ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:["weapon: ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["inside: ",(0,i.jsx)(n.code,{children:"table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["house?: ",(0,i.jsx)(n.code,{children:"any"})]}),"\n",(0,i.jsxs)(n.li,{children:["apartment: ",(0,i.jsx)(n.code,{children:"table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["apartmentType?: ",(0,i.jsx)(n.code,{children:"any"})]}),"\n",(0,i.jsxs)(n.li,{children:["apartmentId?: ",(0,i.jsx)(n.code,{children:"integer"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["phonedata: ",(0,i.jsx)(n.code,{children:"table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["SerialNumber: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["InstalledApps: ",(0,i.jsx)(n.code,{children:"table"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["cid: ",(0,i.jsx)(n.code,{children:"integer"})]}),"\n",(0,i.jsxs)(n.li,{children:["items: ",(0,i.jsx)(n.code,{children:"table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Deprecated."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["lastLoggedOut: ",(0,i.jsx)(n.code,{children:"integer"})]}),"\n"]})]})}n.default=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/resources/qbx_core/types/player_entity.mdx",route:"/resources/qbx_core/types/player_entity",frontMatter:{title:"PlayerEntity"},timestamp:1726692153e3,title:"PlayerEntity",headings:r},pageNextRoute:"/resources/qbx_core/types/player_entity"})}},function(e){e.O(0,[6318,2888,9774,179],function(){return e(e.s=5822)}),_N_E=e.O()}]);