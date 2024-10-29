(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{6813:function(e,l,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/qbx_vehicles/exports/server",function(){return i(1317)}])},1317:function(e,l,i){"use strict";i.r(l),i.d(l,{__toc:function(){return c}});var s=i(2676),n=i(6318),r=i(4603);i(9323);let c=[{depth:2,value:"CreatePlayerVehicle",id:"createplayervehicle"},{depth:2,value:"DeletePlayerVehicles",id:"deleteplayervehicles"},{depth:2,value:"DoesPlayerVehiclePlateExist",id:"doesplayervehicleplateexist"},{depth:2,value:"GetPlayerVehicle",id:"getplayervehicle"},{depth:2,value:"GetPlayerVehicles",id:"getplayervehicles"},{depth:2,value:"SetPlayerVehicleOwner",id:"setplayervehicleowner"},{depth:2,value:"GetVehicleIdByPlate",id:"getvehicleidbyplate"},{depth:2,value:"SaveVehicle",id:"savevehicle"},{depth:2,value:"Common Types",id:"common-types"},{depth:3,value:"VehicleState",id:"vehiclestate"},{depth:3,value:"PlayerVehicle",id:"playervehicle"},{depth:3,value:"PlayerVehiclesFilters",id:"playervehiclesfilters"}];function t(e){let l=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",a:"a",h3:"h3"},(0,r.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h1,{children:"Server Exports"}),"\n",(0,s.jsx)(l.h2,{id:"createplayervehicle",children:"CreatePlayerVehicle"}),"\n",(0,s.jsx)(l.p,{children:"Sets the owner of the vehicle, or if citizenid is nil, sets the vehicle to have no owner."}),"\n",(0,s.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(l.span,{className:"line",children:[(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_vehicles:"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"CreatePlayerVehicle"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(request)"})]})})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["request: ",(0,s.jsx)(l.code,{children:"table"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["model: ",(0,s.jsx)(l.code,{children:"string"})]}),"\n",(0,s.jsxs)(l.li,{children:["citizenid?: ",(0,s.jsx)(l.code,{children:"string"})]}),"\n",(0,s.jsxs)(l.li,{children:["garage?: ",(0,s.jsx)(l.code,{children:"string"})]}),"\n",(0,s.jsxs)(l.li,{children:["props?: ",(0,s.jsx)(l.a,{href:"https://github.com/overextended/ox_lib/blob/master/resource/vehicleProperties/client.lua#L3",children:"ox_lib vehicle properties"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"Returns:"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["vehicleId?: ",(0,s.jsx)(l.code,{children:"integer"})]}),"\n",(0,s.jsxs)(l.li,{children:["errorResult?: ",(0,s.jsx)(l.code,{children:"{code: string, message: string}"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"Error Codes: N/A"}),"\n",(0,s.jsx)(l.h2,{id:"deleteplayervehicles",children:"DeletePlayerVehicles"}),"\n",(0,s.jsx)(l.p,{children:"Delete player vehicles matching some identifier. Only handles deleting from the database."}),"\n",(0,s.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(l.span,{className:"line",children:[(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_vehicles:"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"DeletePlayerVehicles"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(idType, idValue)"})]})})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["idType: ",(0,s.jsx)(l.code,{children:"'citizenid' | 'license' | 'plate' | 'vehicleId'"})]}),"\n",(0,s.jsxs)(l.li,{children:["idValue: ",(0,s.jsx)(l.code,{children:"string | number"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"Returns:"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["success: ",(0,s.jsx)(l.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(l.li,{children:["errorResult?: ",(0,s.jsx)(l.code,{children:"{code: string, message: string}"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"Error Codes: N/A"}),"\n",(0,s.jsx)(l.h2,{id:"doesplayervehicleplateexist",children:"DoesPlayerVehiclePlateExist"}),"\n",(0,s.jsx)(l.p,{children:"Returns whether a player owned vehicle has the matching plate"}),"\n",(0,s.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(l.span,{className:"line",children:[(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_vehicles:"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"DoesPlayerVehiclePlateExist"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(plate)"})]})})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["plate: ",(0,s.jsx)(l.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsxs)(l.p,{children:["Returns: ",(0,s.jsx)(l.code,{children:"boolean"})]}),"\n",(0,s.jsx)(l.h2,{id:"getplayervehicle",children:"GetPlayerVehicle"}),"\n",(0,s.jsx)(l.p,{children:"Queries a player vehicle by vehicleId. Can optionally pass filter criteria."}),"\n",(0,s.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(l.span,{className:"line",children:[(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_vehicles:"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayerVehicle"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicleId, filters)"})]})})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["vehicleId: ",(0,s.jsx)(l.code,{children:"number"})]}),"\n",(0,s.jsxs)(l.li,{children:["filters?: ",(0,s.jsx)(l.a,{href:"#playervehiclesfilters",children:"PlayerVehiclesFilters"})]}),"\n"]}),"\n",(0,s.jsxs)(l.p,{children:["Returns: ",(0,s.jsx)(l.a,{href:"#playervehicle",children:"PlayerVehicle"}),"?"]}),"\n",(0,s.jsx)(l.h2,{id:"getplayervehicles",children:"GetPlayerVehicles"}),"\n",(0,s.jsx)(l.p,{children:"Queries player vehicles by various filter criteria. If no filters are set, queries all vehicles."}),"\n",(0,s.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(l.span,{className:"line",children:[(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_vehicles:"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayerVehicles"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(filters)"})]})})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["filters?: ",(0,s.jsx)(l.a,{href:"#playervehiclesfilters",children:"PlayerVehiclesFilters"})]}),"\n"]}),"\n",(0,s.jsxs)(l.p,{children:["Returns: ",(0,s.jsx)(l.a,{href:"#playervehicle",children:"PlayerVehicle"}),"[]"]}),"\n",(0,s.jsx)(l.h2,{id:"setplayervehicleowner",children:"SetPlayerVehicleOwner"}),"\n",(0,s.jsx)(l.p,{children:"Sets the owner of the vehicle, or if citizenid is nil, sets the vehicle to have no owner."}),"\n",(0,s.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(l.span,{className:"line",children:[(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_vehicles:"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"SetPlayerVehicleOwner"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicleId, citizenid)"})]})})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["vehicleId: ",(0,s.jsx)(l.code,{children:"integer"})]}),"\n",(0,s.jsxs)(l.li,{children:["citizenid?: ",(0,s.jsx)(l.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"Returns:"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["success: ",(0,s.jsx)(l.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(l.li,{children:["errorResult?: ",(0,s.jsx)(l.code,{children:"{code: string, message: string}"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"Error Codes: N/A"}),"\n",(0,s.jsx)(l.h2,{id:"getvehicleidbyplate",children:"GetVehicleIdByPlate"}),"\n",(0,s.jsx)(l.p,{children:"Looks up the vehicleId with the given plate"}),"\n",(0,s.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(l.span,{className:"line",children:[(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_vehicles:"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"GetVehicleIdByPlate"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(plate)"})]})})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["plate: ",(0,s.jsx)(l.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsxs)(l.p,{children:["Returns vehicleId?: ",(0,s.jsx)(l.code,{children:"integer"})]}),"\n",(0,s.jsx)(l.h2,{id:"savevehicle",children:"SaveVehicle"}),"\n",(0,s.jsx)(l.p,{children:"Update an existing vehicle's attributes"}),"\n",(0,s.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(l.span,{className:"line",children:[(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_vehicles:"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"SaveVehicle"}),(0,s.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicle, options)"})]})})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["vehicle: ",(0,s.jsx)(l.code,{children:"number"})," entity"]}),"\n",(0,s.jsxs)(l.li,{children:["options: ",(0,s.jsx)(l.code,{children:"table"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["garage?: ",(0,s.jsx)(l.code,{children:"string"})]}),"\n",(0,s.jsxs)(l.li,{children:["state?: ",(0,s.jsx)(l.a,{href:"#vehiclestate",children:"VehicleState"})]}),"\n",(0,s.jsxs)(l.li,{children:["depotPrice?: ",(0,s.jsx)(l.code,{children:"integer"})]}),"\n",(0,s.jsxs)(l.li,{children:["props?: ",(0,s.jsx)(l.a,{href:"https://github.com/overextended/ox_lib/blob/master/resource/vehicleProperties/client.lua#L3",children:"ox_lib vehicle properties"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"Returns:"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["success: ",(0,s.jsx)(l.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(l.li,{children:["errorResult?: ",(0,s.jsx)(l.code,{children:"{code: string, message: string}"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"Error Codes:"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"not_owned: unable to locate the vehicle's row in the player_vehicles table"}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"common-types",children:"Common Types"}),"\n",(0,s.jsx)(l.h3,{id:"vehiclestate",children:"VehicleState"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"OUT = 0"}),"\n",(0,s.jsx)(l.li,{children:"GARAGED = 1"}),"\n",(0,s.jsx)(l.li,{children:"IMPOUNDED = 2"}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"playervehicle",children:"PlayerVehicle"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["id: ",(0,s.jsx)(l.code,{children:"integer"})]}),"\n",(0,s.jsxs)(l.li,{children:["citizenid?: ",(0,s.jsx)(l.code,{children:"string"})]}),"\n",(0,s.jsxs)(l.li,{children:["modelName: ",(0,s.jsx)(l.code,{children:"string"})]}),"\n",(0,s.jsxs)(l.li,{children:["garage: ",(0,s.jsx)(l.code,{children:"string"})]}),"\n",(0,s.jsxs)(l.li,{children:["state: ",(0,s.jsx)(l.a,{href:"#vehiclestate",children:"VehicleState"})]}),"\n",(0,s.jsxs)(l.li,{children:["depotPrice: ",(0,s.jsx)(l.code,{children:"integer"})]}),"\n",(0,s.jsxs)(l.li,{children:["props: ",(0,s.jsx)(l.a,{href:"https://github.com/overextended/ox_lib/blob/master/resource/vehicleProperties/client.lua#L3",children:"ox_lib vehicle properties"})]}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"playervehiclesfilters",children:"PlayerVehiclesFilters"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["citizenid?: ",(0,s.jsx)(l.code,{children:"string"})]}),"\n",(0,s.jsxs)(l.li,{children:["states?: ",(0,s.jsx)(l.code,{children:"VehicleState | VehicleState[]"})]}),"\n",(0,s.jsxs)(l.li,{children:["garage?: ",(0,s.jsx)(l.code,{children:"string"})]}),"\n"]})]})}l.default=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:l}=Object.assign({},(0,r.a)(),e.components);return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"pages/resources/qbx_vehicles/exports/server.mdx",route:"/resources/qbx_vehicles/exports/server",timestamp:1719934299e3,title:"Server Exports",headings:c},pageNextRoute:"/resources/qbx_vehicles/exports/server"})}},function(e){e.O(0,[318,888,774,179],function(){return e(e.s=6813)}),_N_E=e.O()}]);