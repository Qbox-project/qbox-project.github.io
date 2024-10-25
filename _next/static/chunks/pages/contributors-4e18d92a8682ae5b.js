(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7965],{4828:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contributors",function(){return s(4119)}])},4119:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return r}});var i=s(2676),t=s(6318),o=s(4603);let r=[{depth:2,value:"Issues",id:"issues"},{depth:2,value:"Pull Requests",id:"pull-requests"},{depth:2,value:"Code Conventions",id:"code-conventions"},{depth:3,value:"Commit Message Conventions",id:"commit-message-conventions"},{depth:3,value:"Lua Conventions",id:"lua-conventions"},{depth:4,value:"General Style",id:"general-style"},{depth:4,value:"Optimization & Security",id:"optimization--security"},{depth:4,value:"Naming",id:"naming"},{depth:3,value:"JavaScript/TypeScript Conventions",id:"javascripttypescript-conventions"}];function l(e){let n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",em:"em",h3:"h3",h4:"h4"},(0,o.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Contributing to Qbox"}),"\n",(0,i.jsx)(n.p,{children:"Thank you for taking the time to contribute!"}),"\n",(0,i.jsx)(n.p,{children:"These guidelines will help you help us in the best way possible regardless of your skill level. We ask that you try to read everything related to the way you'd like to contribute and try and use your best judgement for anything not covered."}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to also read our ",(0,i.jsx)(n.a,{href:"https://github.com/Qbox-Project/github-docs/blob/main/repo-template/.github/CODE_OF_CONDUCT.md",children:"Contributor Code of Conduct"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you still have further questions after reading be sure to join the ",(0,i.jsx)(n.a,{href:"https://discord.gg/Z6Whda5hHA",children:"Qbox Discord server"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"issues",children:"Issues"}),"\n",(0,i.jsx)(n.p,{children:"Open a new issue to report a bug or request a new feature or improvement."}),"\n",(0,i.jsxs)(n.p,{children:["If you want to ask a question, issues are not the place to do so. Please join our ",(0,i.jsx)(n.a,{href:"https://discord.gg/Z6Whda5hHA",children:"Discord server"})," and ask over there instead."]}),"\n",(0,i.jsx)(n.p,{children:"Before opening a new issue:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/issues?q=is%3Aissue+org%3AQbox-Project",children:"Search"})," for existing issues; maybe someone else already experienced the same problem that you're having! Duplicate issues will be closed."]}),"\n",(0,i.jsx)(n.li,{children:"Download the latest release of the resource you are opening the issue for to make sure that it wasn't already fixed. Issues that are already fixed are considered invalid and will be closed."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When opening a new issue, make sure to pick the right type of form and fill it out. The more information you provide, the easier it will be for us to work on your new issue. Issues that are invalid or do not follow the correct form may be ignored or even closed."}),"\n",(0,i.jsx)(n.h2,{id:"pull-requests",children:"Pull Requests"}),"\n",(0,i.jsx)(n.p,{children:"Open a new pull request to contribute code."}),"\n",(0,i.jsxs)(n.p,{children:["You can use your own editor of choice, but we recommend using ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"VSCode"})," with these extensions:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",children:"GitLens"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=sumneko.lua",children:"Lua Language Server"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",children:"EditorConfig"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=overextended.cfxlua-vscode",children:"CfxLua IntelliSense"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you are new to contributing code, you can check out and try to fix issues marked with ",(0,i.jsx)(n.a,{href:"https://github.com/issues?q=is%3Aissue+is%3Aopen+org%3AQbox-Project+label%3A%22good+first+issue%22",children:(0,i.jsx)(n.code,{children:"good first issue"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to contribute code but don't know what to do, please check out issues marked with ",(0,i.jsx)(n.a,{href:"https://github.com/issues?q=is%3Aissue+is%3Aopen+org%3AQbox-Project+label%3A%22help+wanted%22",children:(0,i.jsx)(n.code,{children:"help wanted"})})," as those are issues that we actually ",(0,i.jsx)(n.em,{children:"need"})," help with."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to contribute code unrelated to an existing issue, you should open an issue yourself or ask over on the ",(0,i.jsx)(n.a,{href:"https://discord.gg/Z6Whda5hHA",children:"Discord server"})," to discuss it with our team and ask whether your change is wanted, especially if you are planning on adding new features or large designs."]}),"\n",(0,i.jsx)(n.p,{children:"Before opening a pull request:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Make sure that your contribution fits our ",(0,i.jsx)(n.a,{href:"#code-conventions",children:"code conventions"})," described below. After opening a pull request your code will be checked according to them."]}),"\n",(0,i.jsxs)(n.li,{children:["Make sure that your pull request is small and focused. Break it into multiple smaller pull requests if not (see ",(0,i.jsx)(n.a,{href:"https://github.com/PlaytikaOSS/small-pull-request-manifesto",children:"Small Pull Request Manifesto"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"It is recommended to test your changes to make sure they work and don't break existing functionality."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When opening a pull request, make sure to follow the template and explain your changes. If you are trying to contribute something related to a GitHub issue, make sure to mention it as well."}),"\n",(0,i.jsx)(n.h2,{id:"code-conventions",children:"Code Conventions"}),"\n",(0,i.jsx)(n.p,{children:"Below are conventions that you must follow when contributing code."}),"\n",(0,i.jsx)(n.h3,{id:"commit-message-conventions",children:"Commit Message Conventions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The first line of a commit message must be 72 characters at most."}),"\n",(0,i.jsxs)(n.li,{children:["Commit messages and pull request titles must follow ",(0,i.jsx)(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",children:"Conventional Commits"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"fix:"})," when patching a bug."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"feat:"})," when introducing a new feature."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"refactor:"})," when altering code without changing functionality."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"chore:"})," when your changes don't alter production code."]}),"\n",(0,i.jsxs)(n.li,{children:["Append a ",(0,i.jsx)(n.code,{children:"!"})," after the type/scope of the feature when you change code and introduce a breaking API change. Optionally add a footer to the bottom of your commit message separated by 2 newlines, starting with ",(0,i.jsx)(n.code,{children:"BREAKING CHANGE:"}),", and explaining the breaking change."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"lua-conventions",children:"Lua Conventions"}),"\n",(0,i.jsx)(n.h4,{id:"general-style",children:"General Style"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use 4 space indentation."}),"\n",(0,i.jsx)(n.li,{children:"Prefer creating local variables over global ones."}),"\n",(0,i.jsx)(n.li,{children:"Don't repeat yourself. If you're using the same operations in multiple different places convert them into a flexible function."}),"\n",(0,i.jsxs)(n.li,{children:["Exported functions must be properly annotated (see ",(0,i.jsx)(n.a,{href:"https://luals.github.io/wiki/annotations/",children:"LuaLS Annotations"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Utilize ",(0,i.jsx)(n.a,{href:"https://overextended.dev/ox_lib",children:"ox_lib"})," to make your life easier. Prefer lib calls over native ones."]}),"\n",(0,i.jsx)(n.li,{children:"Make use of config options where it makes sense to make features optional and/or customizable. Configs should not be modified by other code."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"optimization--security",children:"Optimization & Security"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Consider ",(0,i.jsx)(n.a,{href:"https://springrts.com/wiki/Lua_Performance",children:"this Lua Performance guide"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Don't create unnecessary threads. Always try to find a better method of triggering events."}),"\n",(0,i.jsxs)(n.li,{children:["Set longer ",(0,i.jsx)(n.code,{children:"Wait"})," calls in distance checking loops when the player is out of range."]}),"\n",(0,i.jsx)(n.li,{children:"Don't waste cycles; job specific loops should only run for players with that job."}),"\n",(0,i.jsxs)(n.li,{children:["When possible don't trust the client, ",(0,i.jsx)(n.em,{children:"especially"})," with transactions."]}),"\n",(0,i.jsx)(n.li,{children:"Balance security and optimizations."}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"#(vector3 - vector3)"})," instead of ",(0,i.jsx)(n.code,{children:"GetDistanceBetweenCoords()"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"myTable[#myTable + 1] = 'value'"})," instead of ",(0,i.jsx)(n.code,{children:"table.insert(myTable, 'value')"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"myTable['key'] = 'value'"})," instead of ",(0,i.jsx)(n.code,{children:"table.insert(myTable, 'key', 'value')"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"naming",children:"Naming"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"camelCase"})," for local variables and functions."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"PascalCase"})," for global variables and functions."]}),"\n",(0,i.jsx)(n.li,{children:"Avoid acronyms as they can be confusing and context dependant."}),"\n",(0,i.jsxs)(n.li,{children:["Be descriptive; make it easy for the reader.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Booleans may be prefixed with ",(0,i.jsx)(n.code,{children:"is"}),", ",(0,i.jsx)(n.code,{children:"has"}),", ",(0,i.jsx)(n.code,{children:"are"}),", etc."]}),"\n",(0,i.jsx)(n.li,{children:"Arrays should have plural names."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"javascripttypescript-conventions",children:"JavaScript/TypeScript Conventions"}),"\n",(0,i.jsxs)(n.p,{children:["Consider following the ",(0,i.jsx)(n.a,{href:"https://google.github.io/styleguide/jsguide.html",children:"Google JavaScript Style Guide"})," and the ",(0,i.jsx)(n.a,{href:"https://google.github.io/styleguide/tsguide.html",children:"Google TypeScript Style Guide"}),"."]})]})}n.default=(0,t.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/contributors.mdx",route:"/contributors",timestamp:1702408901e3,title:"Contributing to Qbox",headings:r},pageNextRoute:"/contributors"})}},function(e){e.O(0,[6318,2888,9774,179],function(){return e(e.s=4828)}),_N_E=e.O()}]);