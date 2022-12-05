(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[3806],{69085:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=(n(34582),"v3.0.0"),o=n(90814),p=["components"],d={sidebar_position:2},s="Installation",k={unversionedId:"nodes/installation",id:"nodes/installation",title:"Installation",description:"You'll find below the available ways of getting the needed okp4d binary to start a node.",source:"@site/docs/nodes/installation.mdx",sourceDirName:"nodes",slug:"/nodes/installation",permalink:"/nodes/installation",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/nodes/installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/nodes/introduction"},next:{title:"Running a node",permalink:"/nodes/run-node"}},u={},m=[{value:"Supported platforms",id:"supported-platforms",level:2},{value:"Release binary",id:"release-binary",level:2},{value:"Docker",id:"docker",level:2},{value:"Build from source",id:"build-from-source",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3}],c={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,"You'll find below the available ways of getting the needed ",(0,i.kt)("inlineCode",{parentName:"p"},"okp4d")," binary to start a node."),(0,i.kt)("h2",{id:"supported-platforms"},"Supported platforms"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"okp4d")," currently supports the following builds."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Platform")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Arch")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},"Status")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Darwin"),(0,i.kt)("td",{parentName:"tr",align:null},"amd64"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Darwin"),(0,i.kt)("td",{parentName:"tr",align:null},"arm64"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Linux"),(0,i.kt)("td",{parentName:"tr",align:null},"amd64"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Linux"),(0,i.kt)("td",{parentName:"tr",align:null},"arm64"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Windows"),(0,i.kt)("td",{parentName:"tr",align:null},"amd64"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\ufe0f\ud83d\udeab",(0,i.kt)("br",null)," Not supported")))),(0,i.kt)("h2",{id:"release-binary"},"Release binary"),(0,i.kt)("p",null,"You'll find the released binaries on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/okp4/okp4d/releases"},"GitHub repository"),". These are statically linked builds, so be careful to choose the right binary for your system (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"linux/amd64")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"linux/arm64"),"). Checksums are also provided if you wish to verify the integrity of the download."),(0,i.kt)("p",null,"To easily install ",(0,i.kt)("inlineCode",{parentName:"p"},"okp4d")," from a GitHub release you can use this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jpillora/installer"},"oneliner script"),":"),(0,i.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"curl https://i.jpillora.com/okp4/okp4d@",l,"! | bash"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"By principle, take the time to verify the checksum manually.")),(0,i.kt)("h2",{id:"docker"},"Docker"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"okp4d")," binary can be invoked directly through the following docker image:"),(0,i.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"docker run -ti --rm okp4/okp4d:",l," --help"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"Build once, deploy anywhere"),": The docker image is a multi-arch build supporting both ",(0,i.kt)("inlineCode",{parentName:"p"},"amd64")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"arm64")," architectures.")),(0,i.kt)("h2",{id:"build-from-source"},"Build from source"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go")," \u2014 OKP4 is built using ",(0,i.kt)("a",{parentName:"li",href:"https://go.dev/dl/"},"Go")," version 19+. Install ",(0,i.kt)("inlineCode",{parentName:"li"},"Go")," ",(0,i.kt)("inlineCode",{parentName:"li"},"1.19+")," following instructions from the ",(0,i.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"official Go documentation"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"make")," \u2014 the project comes with a convenient ",(0,i.kt)("inlineCode",{parentName:"li"},"Makefile")," so verify that ",(0,i.kt)("a",{parentName:"li",href:"https://fr.wikipedia.org/wiki/Make"},(0,i.kt)("inlineCode",{parentName:"a"},"make"))," is properly installed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git")," \u2014 in order to clone the project you need to have ",(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/"},(0,i.kt)("inlineCode",{parentName:"a"},"git"))," installed.")),(0,i.kt)("h3",{id:"steps"},"Steps"),(0,i.kt)("p",null,"Clone the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/okp4/okp4d"},"okp4/okp4d")," repo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/okp4/okp4d\ncd okp4d\n")),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"okp4d")," using the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"Makefile"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make install\n")),(0,i.kt)("p",null,"You can verify that everything is OK:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"okp4d version\n")),(0,i.kt)("p",null,"You should get an output similar to:"),(0,i.kt)(o.Z,{language:"text",mdxType:"CodeBlock"},l))}h.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=11748}}]);