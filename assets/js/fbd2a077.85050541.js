"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5588],{7937:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"metacommands","title":"Meta-commands","description":"We\'ve not reviewed this section for a while, it\'s possible that this information may be out of date.","source":"@site/docs/13-metacommands.md","sourceDirName":".","slug":"/metacommands","permalink":"/docs/metacommands","draft":false,"unlisted":false,"editUrl":"https://github.com/BiraruX/CmdrX/edit/main/docs/13-metacommands.md","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Types","permalink":"/docs/types"},"next":{"title":"Network event handlers","permalink":"/docs/networkeventhandlers"}}');var i=s(74848),d=s(28453);const t={},o="Meta-commands",r={},c=[{value:"Embedded commands",id:"embedded-commands",level:2},{value:"Run",id:"run",level:2},{value:"Bind",id:"bind",level:2},{value:"Alias",id:"alias",level:2},{value:"Types and Descriptions",id:"types-and-descriptions",level:3}];function l(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"meta-commands",children:"Meta-commands"})}),"\n",(0,i.jsx)(n.admonition,{title:"Possibly outdated",type:"info",children:(0,i.jsx)(n.p,{children:"We've not reviewed this section for a while, it's possible that this information may be out of date."})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"bind"}),", ",(0,i.jsx)(n.code,{children:"alias"}),", and ",(0,i.jsx)(n.code,{children:"run"})," commands make use of ",(0,i.jsx)(n.em,{children:"command strings"}),". A command string is raw text made up of a command name and possibly predefined arguments that is run in the background as a command itself. Before these command strings are run, they are preprocessed, replacing arguments (in the format ",(0,i.jsx)(n.code,{children:"$1"}),", ",(0,i.jsx)(n.code,{children:"$2"}),", ",(0,i.jsx)(n.code,{children:"$3"}),", etc.) and embedded commands with their textual values."]}),"\n",(0,i.jsx)(n.h2,{id:"embedded-commands",children:"Embedded commands"}),"\n",(0,i.jsxs)(n.p,{children:["Sub-commands may be embedded inside command strings, in the format ",(0,i.jsx)(n.code,{children:"${command arg1 arg2 arg3}"}),". These sub-commands are evaluated just before the command string is run, and are run every time the command string runs. They evaluate to whatever the command returns as output."]}),"\n",(0,i.jsxs)(n.p,{children:["Embedded commands are nestable: ",(0,i.jsx)(n.code,{children:"run echo ${run echo ${echo hello}!}"})," (displays ",(0,i.jsx)(n.code,{children:"hello!"}),"). We use ",(0,i.jsx)(n.code,{children:"run"})," here instead of just running ",(0,i.jsx)(n.code,{children:"echo"})," directly, because embedded commands are only evaluated in the preprocess step of commands that use ",(0,i.jsx)(n.em,{children:"command strings"})," (which is only ",(0,i.jsx)(n.code,{children:"run"}),", ",(0,i.jsx)(n.code,{children:"alias"}),", and ",(0,i.jsx)(n.code,{children:"bind"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, if the evaluated command output has a space in it, the return value will be encapsulated in quote marks so that the entire value is perceived as one argument to CmdrX. In cases where it's desirable for CmdrX to parse each word as a separate argument, you can use use a literal syntax: ",(0,i.jsx)(n.code,{children:'run teleport ${{"echo first second"}\u200b}'}),' (in this example, "first" and "second" would then become the first and second arguments to the ',(0,i.jsx)(n.code,{children:"teleport"}),' command, instead of the first argument being "first second")']}),"\n",(0,i.jsx)(n.h2,{id:"run",children:"Run"}),"\n",(0,i.jsx)(n.p,{children:"Run is the simplest of the bunch, and does right what it says on the tin. It runs whatever text you give it immediately as a command. This is useful, because it evaluates embedded commands within the command string before running."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'run ${{"echo kill me"}}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Commands can contain more than one distinct command, delimited by ",(0,i.jsx)(n.code,{children:"&&"}),". This can be escaped by adding an additional ampersand, for example: ",(0,i.jsx)(n.code,{children:"&&&"}),". You can escape an additional level by adding more. ",(0,i.jsx)(n.code,{children:"&&&&"})," is a two level deep escape."]}),"\n",(0,i.jsxs)(n.p,{children:["When using ",(0,i.jsx)(n.code,{children:"&&"}),", you can access the previous command's output by using the ",(0,i.jsx)(n.code,{children:"||"})," slot operator. For example ",(0,i.jsx)(n.code,{children:"run echo evaera && kill ||"})," would cause ",(0,i.jsx)(n.code,{children:"evaera"})," to die."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"run"})," command has a single-character alias, ",(0,i.jsx)(n.code,{children:">"}),", which can also be used to invoke it."]}),"\n",(0,i.jsx)(n.h2,{id:"bind",children:"Bind"}),"\n",(0,i.jsx)(n.p,{children:"Bind is a command that allows you to run a certain command string every time some event happens. The default bind type is by user input (mouse or keyboard input), but you can also bind to other events."}),"\n",(0,i.jsxs)(n.p,{children:["This is very powerful: you could define a command, like ",(0,i.jsx)(n.code,{children:"cast_ability"}),", which casts a certain move in your game. Then, you could have a keybindings menu that allows the user to rebind keys, and whenever they do, it runs ",(0,i.jsx)(n.code,{children:'CmdrXClient:Run("bind", keyCode.Name, "cast_ability", abilityId)'})," in the background. By separating the user input from our hypothetical ability code, our code is made more robust as we can now trigger abilities from a number of possible events, in addition to the bound key."]}),"\n",(0,i.jsxs)(n.p,{children:["If you prefix the first argument with ",(0,i.jsx)(n.code,{children:"@"}),", you can instead select a player to bind to, which will run this command string every time that player chats. You can get the chat text by using ",(0,i.jsx)(n.code,{children:"$1"})," in your command string."]}),"\n",(0,i.jsxs)(n.p,{children:["In the future, you will be able to bind to network events as described in the previous section by prefixing the first argument with ",(0,i.jsx)(n.code,{children:"!"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"unbind"})," command can be used to unbind anything that ",(0,i.jsx)(n.code,{children:"bind"})," can bind."]}),"\n",(0,i.jsx)(n.h2,{id:"alias",children:"Alias"}),"\n",(0,i.jsxs)(n.p,{children:["The alias command lets you create a new, single command out of a command string. Alias commands can contain more than one distinct command, delimited by ",(0,i.jsx)(n.code,{children:"&&"}),". You can also accept arguments from the command with ",(0,i.jsx)(n.code,{children:"$1"})," through ",(0,i.jsx)(n.code,{children:"$5"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"alias farewell announce Farewell, $1! && kill $1\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then, if we run ",(0,i.jsx)(n.code,{children:"farewell evaera"}),", it would make an announcement saying ",(0,i.jsx)(n.code,{children:"Farewell, evaera!"})," and then kill the player called ",(0,i.jsx)(n.code,{children:"evaera"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"As another example, you could create a command that killed anyone your mouse was currently hovering over like so:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"alias pointer_of_death kill ${hover}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"types-and-descriptions",children:"Types and Descriptions"}),"\n",(0,i.jsxs)(n.p,{children:["You can optionally provide types, names, and descriptions to your alias arguments, like so: ",(0,i.jsx)(n.code,{children:"$1{type|Name|Description here}"}),". For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"alias goodbye kill $1{player|Player|The player you want to kill.}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Name and Description are optional. These are all okay:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"alias goodbye kill $1{player}"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"alias goodbye kill $1{player|Player}"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"alias goodbye kill $1{player|Player|The player you want to kill.}"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Additionally, you can supply a description for the command itself:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'alias "goodbye|Kills a player." kill $1{player|Player|The player you want to kill.}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The double quotes here are used to 'escape' the space, meaning it'll get parsed as part of the first argument. This is common in consoles (shells) outside of Roblox."})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var a=s(96540);const i={},d=a.createContext(i);function t(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);