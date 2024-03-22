"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[384],{3854:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=i(5893),l=i(1151);const s={slug:"/devices/lisa",pagination_next:null,pagination_prev:null,title:"lisa*"},t="Xiaomi 11 Lite 5G NE (lisa) - Discontinued",r={id:"devices/xiaomi/lisa",title:"lisa*",description:"Device Information",source:"@site/docs/devices/xiaomi/lisa.md",sourceDirName:"devices/xiaomi",slug:"/devices/lisa",permalink:"/devices/lisa",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/devices/lisa",pagination_next:null,pagination_prev:null,title:"lisa*"},sidebar:"defaultSidebar"},a={},c=[{value:"Device Information",id:"device-information",level:2},{value:"Installation Guide",id:"installation-guide",level:2},{value:"Installing Recovery",id:"installing-recovery",level:3},{value:"Installing ROM",id:"installing-rom",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"xiaomi-11-lite-5g-ne-lisa---discontinued",children:"Xiaomi 11 Lite 5G NE (lisa) - Discontinued"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.h2,{id:"device-information",children:"Device Information"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Device:"})," Xiaomi 11 Lite 5G NE"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Release Date:"})," September 15, 2021"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Chipset:"})," \tQualcomm SM7325 Snapdragon 778G 5G"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"RAM:"})," 6 GB / 8 GB"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Storage:"})," 128 GB / 256 GB"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Battery:"})," 4250 mAh"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Display:"})," 6.53 inches, AMOLED, 1B colors, Dolby Vision, HDR10+, 90Hz, 1080 x 2400 pixels"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Rear Camera:"})," Triple 64 MP (main) + 8 MP (ultrawide) + 5 MP (telephoto macro)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Front Camera:"})," 20 MP"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Halcyon Version:"})," Tithonia"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Maintainer:"})," None"]}),"\n"]})]}),"\n",(0,o.jsx)("a",{href:"https://www.pling.com/p/2058150/",class:"button button--primary",children:"Get builds"}),"\n",(0,o.jsx)(n.h2,{id:"installation-guide",children:"Installation Guide"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Make sure to backup your data before proceeding."})}),"\n",(0,o.jsx)(n.h3,{id:"installing-recovery",children:"Installing Recovery"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Enter fastboot mode by using a key combination ",(0,o.jsx)(n.code,{children:"Power + Vol Down"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Connect your device to your PC via USB."}),"\n",(0,o.jsxs)(n.li,{children:["Verify that your PC detects the device with ",(0,o.jsx)(n.code,{children:"fastboot devices"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Flash the boot image onto your device using ",(0,o.jsx)(n.code,{children:"fastboot flash boot boot.img"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Flash the vendor_boot image onto your device using ",(0,o.jsx)(n.code,{children:"fastboot flash vendor_boot vendor_boot.img"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Flash the dtbo image onto your device using ",(0,o.jsx)(n.code,{children:"fastboot flash dtbo dtbo.img"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Reboot into recovery mode by typing ",(0,o.jsx)(n.code,{children:"fastboot reboot recovey"})," in command line or by holding ",(0,o.jsx)(n.code,{children:"Power + Vol Up"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"installing-rom",children:"Installing ROM"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Download the latest release of Halcyon."}),"\n",(0,o.jsx)(n.li,{children:"Reboot into recovery mode."}),"\n",(0,o.jsx)(n.li,{children:"Perform a Format data."}),"\n",(0,o.jsx)(n.li,{children:"Return to the main menu."}),"\n",(0,o.jsx)(n.li,{children:"Select Apply Update > Apply from ADB."}),"\n",(0,o.jsx)(n.li,{children:"Now you can start sideloading by this command:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"adb sideload halcyon_lisa-xxxxx.zip\n"})}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(n.p,{children:"If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems."})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>t});var o=i(7294);const l={},s=o.createContext(l);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);