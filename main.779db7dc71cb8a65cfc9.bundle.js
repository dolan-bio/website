webpackJsonp([1],{"+h1B":function(l,n,u){"use strict";var t=u("/oeL"),a=u("aR8+"),e=u("wQAS"),r=u("q4dy"),i=u("qbdv"),o=u("fc+i"),s=u("bm2B"),c=u("CPp0"),_=u("A7Ts"),d=u("aleG"),f=u("Bg0C"),p=u("atYR");u.d(n,"a",function(){return h});var h=t.b(a.a,[e.a],function(l){return t.c([t.d(512,t.e,t.f,[[8,[r.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,i.a,i.b,[t.h]),t.d(4608,t.j,t.j,[]),t.d(5120,t.k,t.l,[]),t.d(5120,t.m,t.n,[]),t.d(5120,t.o,t.p,[]),t.d(4608,o.b,o.c,[i.c]),t.d(6144,t.q,null,[o.b]),t.d(4608,o.d,o.e,[]),t.d(5120,o.f,function(l,n,u,t){return[new o.g(l),new o.h(n),new o.i(u,t)]},[i.c,i.c,i.c,o.d]),t.d(4608,o.j,o.j,[o.f,t.r]),t.d(135680,o.k,o.k,[i.c]),t.d(4608,o.l,o.l,[o.j,o.k]),t.d(6144,t.s,null,[o.l]),t.d(6144,o.m,null,[o.k]),t.d(4608,t.t,t.t,[t.r]),t.d(4608,o.n,o.n,[i.c]),t.d(4608,o.o,o.o,[i.c]),t.d(4608,s.a,s.a,[]),t.d(4608,c.a,c.a,[]),t.d(4608,c.b,c.c,[]),t.d(5120,c.d,c.e,[]),t.d(4608,c.f,c.f,[c.a,c.b,c.d]),t.d(4608,c.g,c.h,[]),t.d(5120,c.i,c.j,[c.f,c.g]),t.d(4608,_.a,_.a,[c.i]),t.d(4608,d.a,d.a,[c.i]),t.d(512,i.d,i.d,[]),t.d(1024,t.u,o.p,[]),t.d(1024,t.v,function(l,n){return[o.q(l,n)]},[[2,o.r],[2,t.w]]),t.d(512,t.x,t.x,[[2,t.v]]),t.d(131584,t.y,t.y,[t.r,t.z,t.A,t.u,t.e,t.x]),t.d(2048,t.B,null,[t.y]),t.d(512,t.C,t.C,[t.B]),t.d(512,o.s,o.s,[[3,o.s]]),t.d(512,s.b,s.b,[]),t.d(512,s.c,s.c,[]),t.d(512,c.k,c.k,[]),t.d(512,f.a,f.a,[]),t.d(512,p.a,p.a,[]),t.d(512,a.a,a.a,[])])})},1:function(l,n,u){l.exports=u("cDNt")},"5W53":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["[_nghost-%COMP%]{display:block}"]},"75cc":function(l,n,u){"use strict";var t=u("Dqrr");u.n(t);u.d(n,"a",function(){return a});var a=function(){function l(){var l=this;this.menu=[{title:"Profile",link:"profile"},{title:"Stats",link:"stats"},{title:"Resume",link:"resume"},{title:"Skills",link:"skills"},{title:"Portfolio",link:"portfolio"}],this.whenUserScrolledPast=new t.Observable(function(n){var u=l.nav.nativeElement.offsetHeight;document.addEventListener("scroll",function(l){document.body.scrollTop>window.innerHeight-u?n.next(!0):n.next(!1)},!0)})}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},"998V":function(l,n,u){"use strict";function t(l){return r._16(0,[(l()(),r._17(0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),r._19(null,["Resume"])),(l()(),r._19(null,["\n\n    "])),(l()(),r._17(0,null,null,1,"button",[["class","btn btn-success btn-lg"],["type","button"]],null,null,null,null,null)),(l()(),r._19(null,["Generate CV"])),(l()(),r._19(null,["\n\n"]))],null,null)}function a(l){return r._16(0,[(l()(),r._17(0,null,null,1,"app-resume",[],null,null,null,t,s)),r._18(49152,null,0,i.a,[],null,null)],null,null)}var e=u("iyU+"),r=u("/oeL"),i=u("aL9Y");u.d(n,"b",function(){return s}),n.a=t;var o=[e.a],s=r._15({encapsulation:0,styles:o,data:{}});r._20("app-resume",i.a,a,{},{},[])},A7Ts:function(l,n,u){"use strict";var t=u("CPp0"),a=u("Dqrr"),e=(u.n(a),u("p5Ee"));u.d(n,"a",function(){return r});var r=function(){function l(l){this.whenFetchedSkills=l.get(e.a.server.uri+"/skills").map(function(l){return l.json()})}return Object.defineProperty(l.prototype,"WhenFetchedSkills",{get:function(){return this.whenFetchedSkills},enumerable:!0,configurable:!0}),l.ctorParameters=function(){return[{type:t.i}]},l}()},BdJT:function(l,n,u){"use strict";function t(l){return r._16(0,[(l()(),r._17(0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),r._19(null,["Portfolio"])),(l()(),r._19(null,["\n"]))],null,null)}function a(l){return r._16(0,[(l()(),r._17(0,null,null,1,"app-portfolio",[],null,null,null,t,s)),r._18(49152,null,0,i.a,[],null,null)],null,null)}var e=u("5W53"),r=u("/oeL"),i=u("M6md");u.d(n,"b",function(){return s}),n.a=t;var o=[e.a],s=r._15({encapsulation:0,styles:o,data:{}});r._20("app-portfolio",i.a,a,{},{},[])},Bg0C:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},C6IX:function(l,n,u){"use strict";var t=u("aleG");u.d(n,"a",function(){return a});var a=function(){function l(l){this.githubService=l,this.github=this.githubService.WhenFetchedGithub}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[{type:t.a}]},l}()},D39X:function(l,n,u){"use strict";function t(l){return o._16(0,[(l()(),o._17(0,null,null,46,"div",[],null,null,null,null,null)),(l()(),o._19(null,["\n        "])),(l()(),o._17(0,null,null,43,"div",[["class","row text-right"]],null,null,null,null,null)),(l()(),o._19(null,["\n            "])),(l()(),o._17(0,null,null,4,"div",[["class","col-lg-5 col-md-3 col-sm-12 col-xs-12 text-left"]],null,null,null,null,null)),(l()(),o._19(null,["\n                "])),(l()(),o._17(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o._19(null,["GitHub"])),(l()(),o._19(null,["\n            "])),(l()(),o._19(null,["\n            "])),(l()(),o._17(0,null,null,10,"div",[["class","col-lg-3 col-md-3 col-sm-3 col-xs-3"]],null,null,null,null,null)),(l()(),o._19(null,["\n                "])),(l()(),o._17(0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),o._17(0,null,null,0,"i",[["class","fa fa-code"]],null,null,null,null,null)),(l()(),o._19(null,[" ",""])),(l()(),o._19(null,["\n                "])),(l()(),o._17(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o._19(null,["\n                "])),(l()(),o._17(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o._19(null,["Lines of code"])),(l()(),o._19(null,["\n            "])),(l()(),o._19(null,["\n            "])),(l()(),o._17(0,null,null,10,"div",[["class","col-lg-2 col-md-2 col-sm-3 col-xs-3"]],null,null,null,null,null)),(l()(),o._19(null,["\n                "])),(l()(),o._17(0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),o._17(0,null,null,0,"i",[["class","fa fa-code-fork"]],null,null,null,null,null)),(l()(),o._19(null,[" ",""])),(l()(),o._19(null,["\n                "])),(l()(),o._17(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o._19(null,["\n                "])),(l()(),o._17(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o._19(null,["Commits"])),(l()(),o._19(null,["\n            "])),(l()(),o._19(null,["\n            "])),(l()(),o._17(0,null,null,10,"div",[["class","col-lg-2 col-md-2 col-sm-3 col-xs-3"]],null,null,null,null,null)),(l()(),o._19(null,["\n                "])),(l()(),o._17(0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),o._17(0,null,null,0,"i",[["class","fa fa-github-alt"]],null,null,null,null,null)),(l()(),o._19(null,[" ",""])),(l()(),o._19(null,["\n                "])),(l()(),o._17(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o._19(null,["\n                "])),(l()(),o._17(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o._19(null,["Repos"])),(l()(),o._19(null,["\n            "])),(l()(),o._19(null,["\n        "])),(l()(),o._19(null,["\n    "]))],null,function(l,n){l(n,14,0,n.context.$implicit.lineCount),l(n,26,0,n.context.$implicit.contributionCount),l(n,38,0,n.context.$implicit.repoCount)})}function a(l){return o._16(0,[(l()(),o._19(null,["\n            "])),(l()(),o._17(0,null,null,6,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),o._19(null,["\n                "])),(l()(),o._17(0,null,null,0,"i",[["class","fa fa-cog fa-spin fa-3x"]],null,null,null,null,null)),(l()(),o._19(null,["\n                "])),(l()(),o._17(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o._19(null,["Fetching data from GitHub"])),(l()(),o._19(null,["\n            "])),(l()(),o._19(null,["\n        "]))],null,null)}function e(l){return o._16(0,[(l()(),o._17(0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(l()(),o._19(null,["\n    "])),(l()(),o._21(16777216,null,null,2,null,t)),o._18(16384,null,0,s.g,[o._2,o._3],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),o._22(131072,s.h,[o._10]),(l()(),o._19(null,["\n    "])),(l()(),o._17(0,null,null,3,"div",[],null,null,null,null,null)),(l()(),o._19(null,["\n        "])),(l()(),o._21(0,[["loading",2]],null,0,null,a)),(l()(),o._19(null,["\n    "])),(l()(),o._19(null,["\n"])),(l()(),o._19(null,["\n"]))],function(l,n){var u=n.component;l(n,3,0,o._23(n,3,0,o._24(n,4).transform(u.github)),o._24(n,8))},null)}function r(l){return o._16(0,[(l()(),o._17(0,null,null,1,"app-github",[],null,null,null,e,f)),o._18(114688,null,0,c.a,[_.a],null,null)],function(l,n){l(n,1,0)},null)}var i=u("Gjy2"),o=u("/oeL"),s=u("qbdv"),c=u("C6IX"),_=u("aleG");u.d(n,"b",function(){return f}),n.a=e;var d=[i.a],f=o._15({encapsulation:0,styles:d,data:{}});o._20("app-github",c.a,r,{},{},[])},DAfB:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["[_nghost-%COMP%]{display:block;height:300px;pointer-events:none;z-index:-10}"]},EDHd:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["[_nghost-%COMP%]{display:block;height:100vh}"]},"EXs+":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["[_nghost-%COMP%]{-webkit-filter:blur(4px);filter:blur(4px);position:fixed;-webkit-transform:scale(1.03);transform:scale(1.03);z-index:-100}"]},Gjy2:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["[_nghost-%COMP%]{background-color:#f5f5f5;display:block;padding:100px 0}@media screen and (max-width:992px){h2[_ngcontent-%COMP%]{font-size:16px}}"]},JXXr:function(l,n,u){"use strict";var t=u("XOmO"),a=(u.n(t),u("A7Ts"));u.d(n,"a",function(){return e});var e=function(){function l(l){this.skillsService=l,this.game=new t.Game}return l.prototype.ngOnInit=function(){var l=this;this.skillsService.WhenFetchedSkills.subscribe(function(n){l.game.run("skills-container",function(){l.game.setItemsArray(n)})})},l.ctorParameters=function(){return[{type:a.a}]},l}()},M6md:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l.ctorParameters=function(){return[]},l}()},NOBd:function(l,n,u){"use strict";function t(l){return r._16(0,[(l()(),r._17(0,null,null,21,"div",[["class","container"]],null,null,null,null,null)),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-facebook"]],null,null,null,null,null)),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-linkedin"]],null,null,null,null,null)),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-github"]],null,null,null,null,null)),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-youtube"]],null,null,null,null,null)),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-bitbucket"]],null,null,null,null,null)),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-soundcloud"]],null,null,null,null,null)),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),r._19(null,["I made this website for fun so I don't have to update my LinkedIn and my CV at the same time."])),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,3,"p",[],null,null,null,null,null)),(l()(),r._17(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-copyright"]],null,null,null,null,null)),(l()(),r._19(null,[" Dolan Miu ",". Much love "])),(l()(),r._17(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-heart"]],null,null,null,null,null)),(l()(),r._19(null,["\n"]))],null,function(l,n){l(n,19,0,n.component.year)})}function a(l){return r._16(0,[(l()(),r._17(0,null,null,1,"app-footer",[],null,null,null,t,s)),r._18(49152,null,0,i.a,[],null,null)],null,null)}var e=u("DAfB"),r=u("/oeL"),i=u("nVho");u.d(n,"b",function(){return s}),n.a=t;var o=[e.a],s=r._15({encapsulation:0,styles:o,data:{}});r._20("app-footer",i.a,a,{},{},[])},NUHc:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l.ctorParameters=function(){return[]},l}()},OsIe:function(l,n,u){"use strict";function t(l){return r._16(0,[(l()(),r._17(0,null,null,71,"div",[["class","container"]],null,null,null,null,null)),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),r._19(null,["Dolan Miu"])),(l()(),r._19(null,["\n\n    "])),(l()(),r._17(0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(l()(),r._19(null,["Java, C#, TypeScript and JS software developer. Ok-ish at web design too."])),(l()(),r._19(null,["\n\n    "])),(l()(),r._17(0,null,null,41,"div",[["class","row"]],null,null,null,null,null)),(l()(),r._19(null,["\n        "])),(l()(),r._17(0,null,null,3,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),r._19(null,["\n            "])),(l()(),r._17(0,null,null,0,"img",[["class","img-fluid rounded"],["src","/assets/me.jpg"]],null,null,null,null,null)),(l()(),r._19(null,["\n        "])),(l()(),r._19(null,["\n\n        "])),(l()(),r._17(0,null,null,33,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),r._19(null,["\n            "])),(l()(),r._17(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),r._19(null,["NodeJS / TypeScript / JavaScript"])),(l()(),r._19(null,["\n            "])),(l()(),r._17(0,null,null,3,"div",[["class","progress"]],null,null,null,null,null)),(l()(),r._19(null,["\n                "])),(l()(),r._17(0,null,null,0,"div",[["class","progress-bar progress-bar-striped progress-bar-animated bg-info"],["role","progressbar"],["style","width: 94%"]],null,null,null,null,null)),(l()(),r._19(null,["\n            "])),(l()(),r._19(null,["\n\n            "])),(l()(),r._17(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),r._19(null,["C#"])),(l()(),r._19(null,["\n            "])),(l()(),r._17(0,null,null,3,"div",[["class","progress"]],null,null,null,null,null)),(l()(),r._19(null,["\n                "])),(l()(),r._17(0,null,null,0,"div",[["class","progress-bar progress-bar-striped progress-bar-animated bg-info"],["role","progressbar"],["style","width: 80%"]],null,null,null,null,null)),(l()(),r._19(null,["\n            "])),(l()(),r._19(null,["\n\n            "])),(l()(),r._17(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),r._19(null,["Java"])),(l()(),r._19(null,["\n            "])),(l()(),r._17(0,null,null,3,"div",[["class","progress"]],null,null,null,null,null)),(l()(),r._19(null,["\n                "])),(l()(),r._17(0,null,null,0,"div",[["class","progress-bar progress-bar-striped progress-bar-animated bg-info"],["role","progressbar"],["style","width: 70%"]],null,null,null,null,null)),(l()(),r._19(null,["\n            "])),(l()(),r._19(null,["\n\n            "])),(l()(),r._17(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),r._19(null,["Fundemental Computer Science"])),(l()(),r._19(null,["\n            "])),(l()(),r._17(0,null,null,3,"div",[["class","progress"]],null,null,null,null,null)),(l()(),r._19(null,["\n                "])),(l()(),r._17(0,null,null,0,"div",[["class","progress-bar progress-bar-striped progress-bar-animated bg-info"],["role","progressbar"],["style","width: 75%"]],null,null,null,null,null)),(l()(),r._19(null,["\n            "])),(l()(),r._19(null,["\n        "])),(l()(),r._19(null,["\n    "])),(l()(),r._19(null,["\n\n    "])),(l()(),r._17(0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(l()(),r._19(null,["\n        "])),(l()(),r._17(0,null,null,16,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),r._19(null,["\n            "])),(l()(),r._17(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),r._19(null,["Summary"])),(l()(),r._19(null,["\n\n            "])),(l()(),r._17(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),r._19(null,["\n                I have been involving myself with the JavaScript stack from top to bottom, and have learnt a plethora of knowledge in the\n                process. I was there when Backbone was the hype. Then came AngularJS and Grunt. People decided Grunt was\n                too verbose, so Gulp came along. Multiple configuration files weren't good enough, so NPM Scripts saved the\n                day. Currently, Angular/React + TypeScript and Webpack is what early 2017 is like. Who knows what late 2017\n                brings. Some people hate this ever-changing landscape. I love this about JavaScript. It gives me a sense\n                of growth and desire to improve in the community. I love learning new things.\n            "])),(l()(),r._19(null,["\n\n            "])),(l()(),r._17(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),r._19(null,["\n                I like to program in my spare time for personal projects or contributing to open source projects. I have contributed to Angular2\n                to fix a bug; and DefinitelyTyped to add many TypeScript definitions for popular NPM modules. I also release\n                a few packages on NPM, each of them getting around 400 downloads per month. Last month, I created a multi-player\n                socket.io browser based Flappy Bird game with security in mind. Earlier, I released an app for LaMetric smart\n                clock which shows player data for the online game League of Legends. Currently I am making an open source\n                Git GUI tool to compete with SourceTree and GitKraken.\n            "])),(l()(),r._19(null,["\n\n            "])),(l()(),r._17(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),r._19(null,["\n                I always strive to be better at my craft and never go 'stale'. Technology is ever changing and growing, and I am too. My\n                mantra is: \"If you are not growing, you are dying\". I always try to read books and blogs to keep up to date\n                with my ability and best practices, but also re-read academic materials to polish up the fundamentals of\n                what I already learnt in university.\n            "])),(l()(),r._19(null,["\n\n            "])),(l()(),r._17(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),r._19(null,["\n                Since having chickens as pets, I have became extremely extremely knowledgeable about chickens\n            "])),(l()(),r._19(null,["\n        "])),(l()(),r._19(null,["\n    "])),(l()(),r._19(null,["\n"])),(l()(),r._19(null,["\n"]))],null,null)}function a(l){return r._16(0,[(l()(),r._17(0,null,null,1,"app-summary",[],null,null,null,t,s)),r._18(49152,null,0,i.a,[],null,null)],null,null)}var e=u("pArF"),r=u("/oeL"),i=u("c++U");u.d(n,"b",function(){return s}),n.a=t;var o=[e.a],s=r._15({encapsulation:0,styles:o,data:{}});r._20("app-summary",i.a,a,{},{},[])},WoUC:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["[_nghost-%COMP%]{display:block;height:0}.navbar[_ngcontent-%COMP%]{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.navbar-fixed[_ngcontent-%COMP%]{position:fixed;top:0;-webkit-transform:translateY(0);transform:translateY(0);width:100%;z-index:100}"]},aL9Y:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l.ctorParameters=function(){return[]},l}()},"aR8+":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},aleG:function(l,n,u){"use strict";var t=u("CPp0"),a=u("p5Ee");u.d(n,"a",function(){return e});var e=function(){function l(l){this.whenFetchedGithub=l.get(a.a.server.uri+"/github/profile").map(function(l){return l.json()}).publish().refCount()}return Object.defineProperty(l.prototype,"WhenFetchedGithub",{get:function(){return this.whenFetchedGithub},enumerable:!0,configurable:!0}),l.ctorParameters=function(){return[{type:t.i}]},l}()},atYR:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},"c++U":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l.ctorParameters=function(){return[]},l}()},cDNt:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("/oeL"),a=u("p5Ee"),e=u("+h1B"),r=u("fc+i");a.a.production&&u.i(t.a)(),u.i(r.a)().bootstrapModuleFactory(e.a)},eEtY:function(l,n,u){"use strict";function t(l){return r._16(0,[(l()(),r._17(0,null,null,0,"div",[["class","skills-container"],["id","skills-container"]],null,null,null,null,null)),(l()(),r._19(null,["\n"]))],null,null)}function a(l){return r._16(0,[(l()(),r._17(0,null,null,1,"app-skills",[],null,null,null,t,c)),r._18(114688,null,0,i.a,[o.a],null,null)],function(l,n){l(n,1,0)},null)}var e=u("xQrn"),r=u("/oeL"),i=u("JXXr"),o=u("A7Ts");u.d(n,"b",function(){return c}),n.a=t;var s=[e.a],c=r._15({encapsulation:0,styles:s,data:{}});r._20("app-skills",i.a,a,{},{},[])},"iqT/":function(l,n,u){"use strict";function t(l){return r._16(0,[(l()(),r._19(null,["\n"]))],null,null)}function a(l){return r._16(0,[(l()(),r._17(0,null,null,1,"app-three-d",[],null,null,null,t,s)),r._18(114688,null,0,i.a,[r.Z],null,null)],function(l,n){l(n,1,0)},null)}var e=u("EXs+"),r=u("/oeL"),i=u("lhNK");u.d(n,"b",function(){return s}),n.a=t;var o=[e.a],s=r._15({encapsulation:0,styles:o,data:{}});r._20("app-three-d",i.a,a,{},{},[])},"iyU+":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["[_nghost-%COMP%]{display:block}"]},jjwp:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["[_nghost-%COMP%]{background-color:#fff;display:block}hr[_ngcontent-%COMP%]{margin-bottom:0}"]},k7ea:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".full-span[_ngcontent-%COMP%]{bottom:0;position:absolute}.container-block[_ngcontent-%COMP%]{background-color:#fff;position:relative}"]},lF9t:function(l,n,u){"use strict";function t(l){return o._16(0,[(l()(),o._17(0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),o._19(null,["(current)"]))],null,null)}function a(l){return o._16(0,[(l()(),o._17(0,null,null,8,"li",[["class","nav-item"]],null,null,null,null,null)),o._18(278528,null,0,s.i,[o.m,o.o,o.Z,o._0],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._25({active:0}),(l()(),o._19(null,["\n                    "])),(l()(),o._17(0,null,null,3,"a",[["class","nav-link"]],[[8,"href",4]],null,null,null,null)),(l()(),o._19(null,[""," "])),(l()(),o._21(16777216,null,null,1,null,t)),o._18(16384,null,0,s.g,[o._2,o._3],{ngIf:[0,"ngIf"]},null),(l()(),o._19(null,["\n                "]))],function(l,n){l(n,1,0,"nav-item",l(n,2,0,!0));l(n,7,0,!0)},function(l,n){l(n,4,0,o._26(1,"",n.context.$implicit.link,"")),l(n,5,0,n.context.$implicit.title)})}function e(l){return o._16(0,[o._27(402653184,1,{nav:0}),(l()(),o._17(0,[[1,0],["nav",1]],null,33,"nav",[["class","navbar navbar-toggleable-md navbar-dark bg-faded"]],null,null,null,null,null)),o._18(278528,null,0,s.i,[o.m,o.o,o.Z,o._0],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._22(131072,s.h,[o._10]),o._25({"navbar-fixed":0}),(l()(),o._19(null,["\n    "])),(l()(),o._17(0,null,null,27,"div",[["class","container"]],null,null,null,null,null)),(l()(),o._19(null,["\n        "])),(l()(),o._17(0,null,null,1,"button",[["aria-controls","navbarSupportedContent"],["aria-expanded","false"],["aria-label","Toggle navigation"],["class","navbar-toggler navbar-toggler-right"],["data-target","#navbarSupportedContent"],["data-toggle","collapse"],["type","button"]],null,null,null,null,null)),(l()(),o._17(0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(l()(),o._19(null,["\n        "])),(l()(),o._17(0,null,null,1,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(l()(),o._19(null,["dolan.bio"])),(l()(),o._19(null,["\n\n        "])),(l()(),o._17(0,null,null,18,"div",[["class","collapse navbar-collapse"],["id","navbarSupportedContent"]],null,null,null,null,null)),(l()(),o._19(null,["\n            "])),(l()(),o._17(0,null,null,4,"ul",[["class","navbar-nav mr-auto"]],null,null,null,null,null)),(l()(),o._19(null,["\n                "])),(l()(),o._21(16777216,null,null,1,null,a)),o._18(802816,null,0,s.j,[o._2,o._3,o.m],{ngForOf:[0,"ngForOf"]},null),(l()(),o._19(null,["\n            "])),(l()(),o._19(null,["\n\n            "])),(l()(),o._17(0,null,null,9,"form",[["class","form-inline my-2 my-lg-0"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;if("submit"===n){t=!1!==o._24(l,24).onSubmit(u)&&t}if("reset"===n){t=!1!==o._24(l,24).onReset()&&t}return t},null,null)),o._18(16384,null,0,c.d,[],null,null),o._18(16384,null,0,c.e,[[8,null],[8,null]],null,null),o._28(2048,null,c.f,null,[c.e]),o._18(16384,null,0,c.g,[c.f],null,null),(l()(),o._19(null,["\n                "])),(l()(),o._17(0,null,null,2,"button",[["class","btn btn-outline-success my-2 my-sm-0"],["type","submit"]],null,null,null,null,null)),(l()(),o._19(null,["Geneate CV "])),(l()(),o._17(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-file-word-o"]],null,null,null,null,null)),(l()(),o._19(null,["\n            "])),(l()(),o._19(null,["\n        "])),(l()(),o._19(null,["\n    "])),(l()(),o._19(null,["\n"])),(l()(),o._19(null,["\n"]))],function(l,n){var u=n.component;l(n,2,0,"navbar navbar-toggleable-md navbar-dark bg-faded",l(n,4,0,o._23(n,2,1,o._24(n,3).transform(u.whenUserScrolledPast)))),l(n,19,0,u.menu)},function(l,n){l(n,22,0,o._24(n,26).ngClassUntouched,o._24(n,26).ngClassTouched,o._24(n,26).ngClassPristine,o._24(n,26).ngClassDirty,o._24(n,26).ngClassValid,o._24(n,26).ngClassInvalid,o._24(n,26).ngClassPending)})}function r(l){return o._16(0,[(l()(),o._17(0,null,null,1,"app-navbar",[],null,null,null,e,f)),o._18(114688,null,0,_.a,[],null,null)],function(l,n){l(n,1,0)},null)}var i=u("WoUC"),o=u("/oeL"),s=u("qbdv"),c=u("bm2B"),_=u("75cc");u.d(n,"b",function(){return f}),n.a=e;var d=[i.a],f=o._15({encapsulation:0,styles:d,data:{}});o._20("app-navbar",_.a,r,{},{},[])},lhNK:function(l,n,u){"use strict";var t=u("/oeL"),a=u("Z0iT");u.n(a);u.d(n,"a",function(){return e});var e=function(){function l(l){this.el=l,this.stage=new a.Stage}return l.prototype.ngOnInit=function(){var l=this;this.stage.run(this.el.nativeElement),this.stage.setSize(document.body.clientWidth,window.innerHeight),window.addEventListener("scroll",function(){var n=window.scrollY,u=l.tiltCalculator(n);l.stage.tilt(u)},!1)},l.prototype.tiltCalculator=function(l){var n=l/170;return 70*Math.exp(-n)+.1},l.ctorParameters=function(){return[{type:t.Z}]},l}()},nVho:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.year=(new Date).getFullYear()}return l.ctorParameters=function(){return[]},l}()},nh4x:function(l,n,u){"use strict";function t(l){return r._16(0,[(l()(),r._17(0,null,null,54,"div",[["class","container"]],null,null,null,null,null)),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,51,"div",[["class","row"]],null,null,null,null,null)),(l()(),r._19(null,["\n        "])),(l()(),r._17(0,null,null,11,"div",[["class","col-lg"]],null,null,null,null,null)),(l()(),r._19(null,["\n            "])),(l()(),r._17(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-envelope-o fa-3x"]],null,null,null,null,null)),(l()(),r._19(null,["\n            "])),(l()(),r._17(0,null,null,6,"p",[],null,null,null,null,null)),(l()(),r._17(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),r._19(null,["E-mail:"])),(l()(),r._19(null,[" "])),(l()(),r._17(0,null,null,2,"a",[["href","mailto:dolan_miu@hotmail.com"],["target","_blank"]],null,null,null,null,null)),(l()(),r._17(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),r._19(null,["dolan_miu@hotmail.com"])),(l()(),r._19(null,["\n        "])),(l()(),r._19(null,["\n        "])),(l()(),r._17(0,null,null,9,"div",[["class","col-lg"]],null,null,null,null,null)),(l()(),r._19(null,["\n            "])),(l()(),r._17(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-phone fa-3x"]],null,null,null,null,null)),(l()(),r._19(null,["\n            "])),(l()(),r._17(0,null,null,4,"p",[],null,null,null,null,null)),(l()(),r._17(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),r._19(null,["Mobile:"])),(l()(),r._17(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),r._19(null,["(+44) 7595 672 701"])),(l()(),r._19(null,["\n        "])),(l()(),r._19(null,["\n        "])),(l()(),r._17(0,null,null,11,"div",[["class","col-lg"]],null,null,null,null,null)),(l()(),r._19(null,["\n            "])),(l()(),r._17(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-linkedin fa-3x"]],null,null,null,null,null)),(l()(),r._19(null,["\n            "])),(l()(),r._17(0,null,null,6,"p",[],null,null,null,null,null)),(l()(),r._17(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),r._19(null,["LinkedIn:"])),(l()(),r._19(null,[" "])),(l()(),r._17(0,null,null,2,"a",[["href","https://www.linkedin.com/in/dolan1"],["target","_blank"]],null,null,null,null,null)),(l()(),r._17(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),r._19(null,["https://www.linkedin.com/in/dolan1"])),(l()(),r._19(null,["\n        "])),(l()(),r._19(null,["\n\n        "])),(l()(),r._17(0,null,null,11,"div",[["class","col-lg"]],null,null,null,null,null)),(l()(),r._19(null,["\n            "])),(l()(),r._17(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-github fa-3x"]],null,null,null,null,null)),(l()(),r._19(null,["\n            "])),(l()(),r._17(0,null,null,6,"p",[],null,null,null,null,null)),(l()(),r._17(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),r._19(null,["GitHub:"])),(l()(),r._19(null,[" "])),(l()(),r._17(0,null,null,2,"a",[["href","https://www.linkedin.com/in/dolan1"],["target","_blank"]],null,null,null,null,null)),(l()(),r._17(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),r._19(null,["https://github.com/dolanmiu"])),(l()(),r._19(null,["\n        "])),(l()(),r._19(null,["\n\n    "])),(l()(),r._19(null,["\n"])),(l()(),r._19(null,["\n\n"])),(l()(),r._17(0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),r._19(null,["\n"]))],null,null)}function a(l){return r._16(0,[(l()(),r._17(0,null,null,1,"app-contact-details",[],null,null,null,t,s)),r._18(49152,null,0,i.a,[],null,null)],null,null)}var e=u("jjwp"),r=u("/oeL"),i=u("NUHc");u.d(n,"b",function(){return s}),n.a=t;var o=[e.a],s=r._15({encapsulation:0,styles:o,data:{}});r._20("app-contact-details",i.a,a,{},{},[])},niEy:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l.ctorParameters=function(){return[]},l}()},p5Ee:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t={production:!0,server:{uri:"https://dolan-bio.herokuapp.com"}}},pArF:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["[_nghost-%COMP%]{display:block}"]},q4dy:function(l,n,u){"use strict";function t(l){return r._16(0,[(l()(),r._17(0,null,null,1,"app-three-d",[],null,null,null,i.a,i.b)),r._18(114688,null,0,o.a,[r.Z],null,null),(l()(),r._19(null,["\n\n"])),(l()(),r._17(0,null,null,1,"app-hero",[],null,null,null,s.a,s.b)),r._18(49152,null,0,c.a,[],null,null),(l()(),r._19(null,["\n"])),(l()(),r._17(0,null,null,1,"app-navbar",[],null,null,null,_.a,_.b)),r._18(114688,null,0,d.a,[],null,null),(l()(),r._19(null,["\n"])),(l()(),r._17(0,null,null,1,"app-contact-details",[],null,null,null,f.a,f.b)),r._18(49152,null,0,p.a,[],null,null),(l()(),r._19(null,["\n\n"])),(l()(),r._17(0,null,null,19,"div",[["class","container-block"]],null,null,null,null,null)),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,1,"app-skills",[["class","full-span"]],null,null,null,h.a,h.b)),r._18(114688,null,0,g.a,[b.a],null,null),(l()(),r._19(null,["\n\n    "])),(l()(),r._17(0,null,null,1,"app-summary",[],null,null,null,v.a,v.b)),r._18(49152,null,0,m.a,[],null,null),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,1,"app-github",[],null,null,null,y.a,y.b)),r._18(114688,null,0,k.a,[w.a],null,null),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,1,"app-resume",[],null,null,null,C.a,C.b)),r._18(49152,null,0,x.a,[],null,null),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,1,"app-portfolio",[],null,null,null,P.a,P.b)),r._18(49152,null,0,I.a,[],null,null),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,1,"app-footer",[],null,null,null,S.a,S.b)),r._18(49152,null,0,M.a,[],null,null),(l()(),r._19(null,["\n"])),(l()(),r._19(null,["\n"]))],function(l,n){l(n,1,0),l(n,7,0),l(n,15,0),l(n,21,0)},null)}function a(l){return r._16(0,[(l()(),r._17(0,null,null,1,"app-root",[],null,null,null,t,G)),r._18(49152,null,0,O.a,[],null,null)],null,null)}var e=u("k7ea"),r=u("/oeL"),i=u("iqT/"),o=u("lhNK"),s=u("qCm9"),c=u("niEy"),_=u("lF9t"),d=u("75cc"),f=u("nh4x"),p=u("NUHc"),h=u("eEtY"),g=u("JXXr"),b=u("A7Ts"),v=u("OsIe"),m=u("c++U"),y=u("D39X"),k=u("C6IX"),w=u("aleG"),C=u("998V"),x=u("aL9Y"),P=u("BdJT"),I=u("M6md"),S=u("NOBd"),M=u("nVho"),O=u("wQAS");u.d(n,"a",function(){return E});var L=[e.a],G=r._15({encapsulation:0,styles:L,data:{}}),E=r._20("app-root",O.a,a,{},{},[])},qCm9:function(l,n,u){"use strict";function t(l){return r._16(0,[(l()(),r._17(0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,1,"h1",[["class","display-1"]],null,null,null,null,null)),(l()(),r._19(null,["My name is Dolan"])),(l()(),r._19(null,["\n    "])),(l()(),r._17(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),r._19(null,["TypeScript, JS, C# and Java Developer"])),(l()(),r._19(null,["\n"]))],null,null)}function a(l){return r._16(0,[(l()(),r._17(0,null,null,1,"app-hero",[],null,null,null,t,s)),r._18(49152,null,0,i.a,[],null,null)],null,null)}var e=u("EDHd"),r=u("/oeL"),i=u("niEy");u.d(n,"b",function(){return s}),n.a=t;var o=[e.a],s=r._15({encapsulation:0,styles:o,data:{}});r._20("app-hero",i.a,a,{},{},[])},qtrl:function(l,n){function u(l){throw new Error("Cannot find module '"+l+"'.")}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="qtrl"},wQAS:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.title="app works!"}return l}()},xQrn:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["[_nghost-%COMP%]{display:block}.skills-container[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;width:100%}"]}},[1]);