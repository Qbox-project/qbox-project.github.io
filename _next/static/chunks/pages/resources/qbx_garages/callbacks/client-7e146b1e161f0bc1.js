(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1139],{3750:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/qbx_garages/callbacks/client",function(){return s(2772)}])},2772:function(e,a,s){"use strict";s.r(a),s.d(a,{__toc:function(){return n}});var l=s(1527),r=s(7154),t=s(5424);let n=[{depth:2,value:"getGarages",id:"getgarages"},{depth:2,value:"getGarageVehicles",id:"getgaragevehicles"},{depth:2,value:"isParkable",id:"isparkable"},{depth:2,value:"parkVehicle",id:"parkvehicle"},{depth:2,value:"payDepotPrice",id:"paydepotprice"},{depth:2,value:"spawnVehicle",id:"spawnvehicle"}];function _createMdxContent(e){let a=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span"},(0,t.a)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h1,{children:"Server Callbacks"}),"\n",(0,l.jsx)(a.p,{children:"Can be used to support a custom UI. Called from the client."}),"\n",(0,l.jsx)(a.h2,{id:"getgarages",children:"getGarages"}),"\n",(0,l.jsx)(a.p,{children:"Get the currently registered garages"}),"\n",(0,l.jsx)(a.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(a.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(a.span,{className:"line",children:[(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"lib.callback."}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"await"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qbx_garages:server:getGarages'"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,l.jsx)(a.h2,{id:"getgaragevehicles",children:"getGarageVehicles"}),"\n",(0,l.jsx)(a.p,{children:"Get vehicles that the player has access to in the given garage. Does not return vehicles currently spawned in the world."}),"\n",(0,l.jsx)(a.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(a.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(a.span,{className:"line",children:[(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"lib.callback."}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"await"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qbx_garages:server:getGarageVehicles'"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:", garageName)"})]})})}),"\n",(0,l.jsx)(a.h2,{id:"isparkable",children:"isParkable"}),"\n",(0,l.jsx)(a.p,{children:"Returns true if the player can access the garage and the vehicle matches the garage filters"}),"\n",(0,l.jsx)(a.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(a.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(a.span,{className:"line",children:[(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"lib.callback."}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"await"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qbx_garages:server:isParkable'"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:", garageName, netId)"})]})})}),"\n",(0,l.jsx)(a.h2,{id:"parkvehicle",children:"parkVehicle"}),"\n",(0,l.jsx)(a.p,{children:"Stores the vehicle in the garage and deletes the entity from the world"}),"\n",(0,l.jsx)(a.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(a.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(a.span,{className:"line",children:[(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"lib.callback."}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"await"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qbx_garages:server:parkVehicle'"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:", netId, props, garageName)"})]})})}),"\n",(0,l.jsx)(a.h2,{id:"paydepotprice",children:"payDepotPrice"}),"\n",(0,l.jsx)(a.p,{children:"Takes vehicle's depot price from cash or bank and returns true if player paid. Does not update the vehicle's depot price after payment."}),"\n",(0,l.jsx)(a.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(a.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(a.span,{className:"line",children:[(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"lib.callback."}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"await"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qbx_garages:server:payDepotPrice'"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:", vehicleId)"})]})})}),"\n",(0,l.jsx)(a.h2,{id:"spawnvehicle",children:"spawnVehicle"}),"\n",(0,l.jsx)(a.p,{children:"Spawns the vehicle entity in the world at the given garage's access point. Checks that the player has required access permissions to do so.\nAttempts to give the player vehicle keys."}),"\n",(0,l.jsx)(a.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(a.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(a.span,{className:"line",children:[(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"lib.callback."}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"await"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qbx_garages:server:spawnVehicle'"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:", vehicleId, garageName, accessPointIndex)"})]})})})]})}a.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,t.a)(),e.components);return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/resources/qbx_garages/callbacks/client.mdx",route:"/resources/qbx_garages/callbacks/client",title:"Server Callbacks",headings:n},pageNextRoute:"/resources/qbx_garages/callbacks/client"})}},function(e){e.O(0,[7154,9774,2888,179],function(){return e(e.s=3750)}),_N_E=e.O()}]);