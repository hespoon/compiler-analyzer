(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{310:function(t,e,n){"use strict";n(309),n(74),n(75);var r=n(307),o=(n(50),n(25),n(111),n(311),n(305)),c=n(306),l=n(314),f=n(316),h=n(308),d=n.n(h),v=n(312),y=n(315),m=function(){function t(){Object(o.a)(this,t),this.productions=[],this.signs=new Map,this.firstSet=new v.a,this.followSet=new v.a,this.PPT=new y.a,this.startSign=null,this.getEmptySign(),this.getStackBottomSign()}return Object(c.a)(t,[{key:"clone",value:function(){var e=new t,n=!0,o=!1,c=void 0;try{for(var l,f=this.signs.keys()[Symbol.iterator]();!(n=(l=f.next()).done);n=!0){var h=l.value;e.signs.set(h,this.signs.get(h))}}catch(t){o=!0,c=t}finally{try{n||null==f.return||f.return()}finally{if(o)throw c}}return e.productions=Object(r.a)(this.productions),e.firstSet=this.firstSet.clone(),e.followSet=this.followSet.clone(),e.PPT=this.PPT.clone(),e.startSign=this.startSign,e}},{key:"setFirstSet",value:function(t){this.firstSet=t}},{key:"setFollowSet",value:function(t){this.followSet=t}},{key:"setPPT",value:function(t){this.PPT=t}},{key:"setStartSign",value:function(t){d.a.strictEqual(this.checkSignsExist([t]),!0,"Sign should be added first"),this.startSign=this.getSign(t)}},{key:"getStartSign",value:function(){return d.a.notStrictEqual(this.startSign,null,"Start Sign has not been defined."),this.startSign}},{key:"getSign",value:function(symbol){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(symbol instanceof f.a){var e=symbol;symbol=e.symbol,t=e.type}return this.signs.has(symbol)?void 0!==t&&d.a.strictEqual(t,this.signs.get(symbol).type,"type should be the same"):this.signs.set(symbol,new f.a(symbol,t)),this.signs.get(symbol)}},{key:"hasSymbol",value:function(symbol){return this.signs.has(symbol)}},{key:"printProductions",value:function(){var t=!0,e=!1,n=void 0;try{for(var r,o=this.productions[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var c=r.value;console.log(c.getString())}}catch(t){e=!0,n=t}finally{try{t||null==o.return||o.return()}finally{if(e)throw n}}}},{key:"getSignUnusedAlias",value:function(t){for(var e=t.getString();;)if(e+="'",!this.hasSymbol(e))return this.getSign(e,t.type)}},{key:"getEmptySign",value:function(){return this.getSign("ε","Empty")}},{key:"getStackBottomSign",value:function(){return this.getSign("$","StackBottom")}},{key:"checkSignsExist",value:function(t){var e=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var l=o.value;if("string"==typeof l){if(!this.signs.has(l)||this.signs.get(l).symbol!==l)return!1}else if(!this.signs.has(l.symbol)||this.signs.get(l.symbol)!==l)return!1;return!0}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}},{key:"addProduction",value:function(head,body){d.a.strictEqual(this.checkSignsExist([head].concat(Object(r.a)(body))),!0,"All Sign should be add first");var t=new l.a(head,body);return this.productions.push(t),t}},{key:"getProductions",value:function(){return this.productions}},{key:"getDerivations",value:function(head){return"string"==typeof head&&(d.a.strictEqual(this.signs.has(head),!0),head=this.signs.get(head)),this.productions.filter(function(t){return t.head.symbol===head.symbol})}},{key:"deleteProduction",value:function(head,body){for(var a=0;a<this.productions.length;a++){if(this.productions[a].isSameOf(head,body))return this.productions.splice(a,1),!0}return!1}},{key:"getTerminals",value:function(){return Object(r.a)(this.signs.values()).filter(function(t){return"Terminal"===t.type})}},{key:"getNonterminals",value:function(){return Object(r.a)(this.signs.values()).filter(function(t){return"Nonterminal"===t.type})}},{key:"getSignFirstSet",value:function(t){return d.a.strictEqual(this.signs.has(t.symbol),!0),t.isNonterminal()?(t=this.getSign(t.symbol),this.firstSet.has(t)?Object(r.a)(this.firstSet.get(t)):[]):[t]}},{key:"getProductionBodyFirstSet",value:function(t){return this.getSignsFirstSet(t.getBody())}},{key:"getSignsFirstSet",value:function(t){var e=new Set,n=!0,o=this.getEmptySign(),c=!0,l=!1,f=void 0;try{for(var h,d=t[Symbol.iterator]();!(c=(h=d.next()).done);c=!0){var v=h.value;!0===n&&this.getSignFirstSet(v).filter(function(t){return t.isTerminal()}).forEach(function(t){return e.add(t)}),new Set(this.getSignFirstSet(v)).has(o)||(n=!1)}}catch(t){l=!0,f=t}finally{try{c||null==d.return||d.return()}finally{if(l)throw f}}return n&&t.length>0&&e.add(o),Object(r.a)(e)}},{key:"getSignFollowSet",value:function(t){return d.a.strictEqual(this.signs.has(t.symbol),!0),t=this.getSign(t.symbol),this.followSet.has(t)?Object(r.a)(this.followSet.get(t)):[]}}]),t}();e.a=m},312:function(t,e,n){"use strict";var r=n(307),o=(n(74),n(75),n(309),n(50),n(25),n(111),n(311),n(305)),c=n(306),l=n(308),f=n.n(l),h=function(){function t(){Object(o.a)(this,t),this.map=new Map,this.dirty=!1}return Object(c.a)(t,[{key:"get",value:function(t){return!1===this.map.has(t)&&(console.log(t),console.log(this)),f.a.strictEqual(this.map.has(t),!0),this.map.get(t)}},{key:"add",value:function(t,e){this.map.has(t)||this.map.set(t,new Set),this.map.get(t).has(e)||(this.map.get(t).add(e),this.setDirty())}},{key:"has",value:function(t){return this.map.has(t)}},{key:"setDirty",value:function(){this.dirty=!0}},{key:"clearDirty",value:function(){this.dirty=!1}},{key:"isDirty",value:function(){return this.dirty}},{key:"print",value:function(){var t=!0,e=!1,n=void 0;try{for(var o,c=this.map.keys()[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){var l=o.value;console.log(l.getString(),"->",Object(r.a)(this.map.get(l)).map(function(t){return t.getString()}).join(" "))}}catch(t){e=!0,n=t}finally{try{t||null==c.return||c.return()}finally{if(e)throw n}}}},{key:"clone",value:function(){var e=new t,n=!0,r=!1,o=void 0;try{for(var c,l=this.map.keys()[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var f=c.value,h=!0,d=!1,v=void 0;try{for(var y,m=this.get(f)[Symbol.iterator]();!(h=(y=m.next()).done);h=!0){var S=y.value;e.add(f,S)}}catch(t){d=!0,v=t}finally{try{h||null==m.return||m.return()}finally{if(d)throw v}}}}catch(t){r=!0,o=t}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return e}}]),t}();e.a=h},314:function(t,e,n){"use strict";var r=n(305),o=n(306),c=function(){function t(head,body){Object(r.a)(this,t),this.head=head,this.body=body}return Object(o.a)(t,[{key:"getString",value:function(){return this.head.getString()+" → "+this.body.map(function(t){return t.getString()}).join(" ")}},{key:"getTerminals",value:function(){return this.body.filter(function(t){return"Terminal"===t.type})}},{key:"getNonterminals",value:function(){return this.body.filter(function(t){return"Nonterminal"===t.type})}},{key:"getHeadString",value:function(){return this.head.getString()}},{key:"getBodyString",value:function(){return this.body.map(function(t){return t.getString()}).join(" ")}},{key:"getHead",value:function(){return this.head}},{key:"getBody",value:function(){return this.body}},{key:"isSameOf",value:function(head,body){if(this.head===head&&body.length===this.body.length){for(var t=!0,i=0;i<body.length;i++)if(body[i]!==this.body[i]){t=!1;break}return t}return!1}}]),t}();e.a=c},315:function(t,e,n){"use strict";n(74),n(75);var r=n(307),o=(n(309),n(50),n(25),n(111),n(311),n(305)),c=n(306),l=n(308),f=n.n(l),h=function(){function t(){Object(o.a)(this,t),this.map=new Map,this.nonterminals=new Set,this.terminals=new Set,this.modify={nonterminal:"",terminal:""}}return Object(c.a)(t,[{key:"clone",value:function(){var e=new t,n=!0,o=!1,c=void 0;try{for(var l,f=this.map.keys()[Symbol.iterator]();!(n=(l=f.next()).done);n=!0){var h=l.value;e.map.set(h,this.map.get(h))}}catch(t){o=!0,c=t}finally{try{n||null==f.return||f.return()}finally{if(o)throw c}}return e.nonterminals=new Set(Object(r.a)(this.nonterminals)),e.terminals=new Set(Object(r.a)(this.terminals)),e}},{key:"get",value:function(t,e){if(!this.map.has(t))return null;var n=this.map.get(t);return n.has(e)?n.get(e):null}},{key:"set",value:function(t,e,n){this.map.has(t)||this.map.set(t,new Map);var r=this.map.get(t);r.has(e)&&(console.log(t.getString(),e.getString(),n.getString()),console.log(r.get(e).getString(),n.getString()),f.a.strictEqual(r.get(e).getString(),n.getString(),"has more than one item")),r.set(e,n),this.modify={nonterminal:t,terminal:e},this.nonterminals.add(t),this.terminals.add(e)}},{key:"getModifyPosition",value:function(){return this.modify}},{key:"getTableData",value:function(){var t=Object(r.a)(this.nonterminals),e=Object(r.a)(this.terminals),table=[],n=!0,o=!1,c=void 0;try{for(var l,f=t[Symbol.iterator]();!(n=(l=f.next()).done);n=!0){var h=l.value,d=[],v=!0,y=!1,m=void 0;try{for(var S,k=e[Symbol.iterator]();!(v=(S=k.next()).done);v=!0){var w=S.value;d.push(this.get(h,w))}}catch(t){y=!0,m=t}finally{try{v||null==k.return||k.return()}finally{if(y)throw m}}table.push(d)}}catch(t){o=!0,c=t}finally{try{n||null==f.return||f.return()}finally{if(o)throw c}}return{nonterminals:t,terminals:e,table:table}}}]),t}();e.a=h},316:function(t,e,n){"use strict";var r=n(305),o=n(306),c=n(308),l={Terminal:1,Nonterminal:2,Empty:3,StackBottom:4},i=0,f=function(){function t(symbol,e){Object(r.a)(this,t),c.notEqual(l[e],void 0,"type is not defined"),this.symbol=symbol,this.type=e,this.i=i++}return Object(o.a)(t,[{key:"getString",value:function(){return this.symbol}},{key:"isTerminal",value:function(){return"Terminal"===this.type}},{key:"isNonterminal",value:function(){return"Nonterminal"===this.type}},{key:"isEmpty",value:function(){return"Empty"===this.type}},{key:"isStackBottom",value:function(){return"StackBottom"===this.type}}]),t}();e.a=f},317:function(t,e,n){var content=n(323);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("3dd52918",content,!0,{sourceMap:!1})},318:function(t,e,n){"use strict";var r=n(307),o=(n(309),n(74),n(75),n(50),n(25),n(111),n(311),n(305)),c=n(306),l=n(308),f=n.n(l),h=function(){function t(){Object(o.a)(this,t),this.cnt=0,this.map=new Map}return Object(c.a)(t,[{key:"add",value:function(t){return this.map.has(t)||this.map.set(t,this.cnt++),this.map.get(t)}},{key:"get",value:function(t){return f.a.strictEqual(this.map.has(t),!0,"should add before"),this.map.get(t)}},{key:"changeId",value:function(t,e){var n=!0,r=!1,o=void 0;try{for(var c,l=this.map.keys()[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var f=c.value;this.map.get(f)===t&&this.map.set(f,e)}}catch(t){r=!0,o=t}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}}},{key:"reSetId",value:function(){var t=this,e=new Set(Object(r.a)(this.map.keys()).map(function(e){return t.map.get(e)})),n=0,o=!0,c=!1,l=void 0;try{for(var f,h=e[Symbol.iterator]();!(o=(f=h.next()).done);o=!0){var d=f.value;this.changeId(d,n++)}}catch(t){c=!0,l=t}finally{try{o||null==h.return||h.return()}finally{if(c)throw l}}this.cnt=n}},{key:"disjoint",value:function(t,e){if(this.map.has(t)&&this.map.has(e)){var n=this.get(t),r=this.get(e);return this.changeId(r,n),n}if(this.map.has(t))return this.map.set(e,this.get(t)),this.get(t);if(this.map.has(e))return this.map.set(t,this.get(e)),this.get(e);var o=this.add(t);return this.map.set(e,o),o}},{key:"del",value:function(t){this.map.delete(t)}},{key:"print",value:function(){var t=this,e=Object(r.a)(this.map.keys()).sort(function(a,b){return t.map.get(a)-t.map.get(b)}),n=!0,o=!1,c=void 0;try{for(var l,f=e[Symbol.iterator]();!(n=(l=f.next()).done);n=!0){var h=l.value;console.log(h.getString(),this.map.get(h))}}catch(t){o=!0,c=t}finally{try{n||null==f.return||f.return()}finally{if(o)throw c}}}}]),t}();e.a=h},321:function(t,e,n){"use strict";n(318);var r=["#f44336","#ab47bc","#7986cb","#81d4fa","#b2dfdb","#827717","#ff8f00","#e64a19","#757575","#e53935","#9c27b0","#5c6bc0","#4fc3f7","#80cbc4","#dcedc8","#ff6f00","#d84315","#616161","#d32f2f","#8e24aa","#3f51b5","#29b6f6","#4db6ac","#c5e1a5","#fff9c4","#fff3e0","#bf360c","#424242","#c62828","#7b1fa2","#3949ab","#03a9f4","#26a69a","#aed581","#fff59d","#ffe0b2","#efebe9","#212121","#b71c1c","#6a1b9a","#303f9f","#039be5","#009688","#9ccc65","#fff176","#ffcc80","#d7ccc8","#eceff1","#fce4ec","#4a148c","#283593","#0288d1","#00897b","#8bc34a","#ffee58","#ffb74d","#bcaaa4","#cfd8dc","#f8bbd0","#ede7f6","#1a237e","#0277bd","#00796b","#7cb342","#ffeb3b","#ffa726","#a1887f","#b0bec5","#f48fb1","#d1c4e9","#e3f2fd","#01579b","#00695c","#689f38","#fdd835","#ff9800","#8d6e63","#90a4ae","#f06292","#b39ddb","#bbdefb","#e0f7fa","#004d40","#558b2f","#fbc02d","#fb8c00","#795548","#78909c","#ec407a","#9575cd","#90caf9","#b2ebf2","#e8f5e9","#33691e","#f9a825","#f57c00","#6d4c41","#607d8b","#e91e63","#7e57c2","#64b5f6","#80deea","#c8e6c9","#f9fbe7","#f57f17","#ef6c00","#5d4037","#546e7a","#d81b60","#673ab7","#42a5f5","#4dd0e1","#a5d6a7","#f0f4c3","#fff8e1","#e65100","#4e342e","#455a64","#c2185b","#5e35b1","#2196f3","#26c6da","#81c784","#e6ee9c","#ffecb3","#fbe9e7","#3e2723","#37474f","#ad1457","#512da8","#1e88e5","#00bcd4","#66bb6a","#dce775","#ffe082","#ffccbc","#fafafa","#263238"],o={props:["productions","disjointSet","title"],data:function(){return{}},methods:{getColor:function(t){if(!this.disjointSet)return"";var e=this.disjointSet.get(t);return r[e]}},computed:{orderedProductions:function(){var t=this;return this.disjointSet?this.productions.sort(function(a,b){return t.disjointSet.get(a)-t.disjointSet.get(b)}):this.productions}}},c=(n(322),n(11)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"highlight-production"},[n("h3",[t._v(t._s(t.title))]),t._v(" "),t._l(t.orderedProductions,function(e,r){return n("div",{key:r,staticClass:"production",style:"color: "+t.getColor(e)+";"},[t._v(t._s(e.getString()))])})],2)},[],!1,null,"02c6ae84",null);e.a=component.exports},322:function(t,e,n){"use strict";var r=n(317);n.n(r).a},323:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,".highlight-production[data-v-02c6ae84]{height:100%;width:100%;display:flex;align-items:center;flex-direction:column}.highlight-production .title[data-v-02c6ae84]{font-size:28px}.highlight-production .production[data-v-02c6ae84]{border-radius:5px;font-size:30px;padding:5px 10px;margin:2px}.highlight-production .production[data-v-02c6ae84]:hover{background-color:#b2d4f7;color:#fff!important;cursor:pointer}.highlight-production .production.active[data-v-02c6ae84]{background-color:#66aef7}",""])},325:function(t,e,n){"use strict";var r=n(116),o=(n(76),n(307)),c=(n(74),n(75),n(50),n(305)),l=n(306),f=n(318),h=function(){function t(e){Object(c.a)(this,t),this.grammar=e}return Object(l.a)(t,[{key:"getInitContext",value:function(){var t=new f.a,e=!0,n=!1,r=void 0;try{for(var o,c=this.grammar.getProductions()[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var l=o.value;t.add(l)}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}return{newGrammar:this.grammar.clone(),disjointSet:t}}},{key:"getCommonPrefix",value:function(t){var e=t.reduce(function(a,b){var t=b.length;return a>t?a:t},0);function n(t,e){var n=[],r=!0,o=!1,c=void 0;try{for(var l,f=t[Symbol.iterator]();!(r=(l=f.next()).done);r=!0){var body=l.value;if(!(body.length<e.length)){for(var h=!0,i=0;i<e.length;i++)if(body[i]!==e[i]){h=!1;break}h&&n.push(body)}}}catch(t){o=!0,c=t}finally{try{r||null==f.return||f.return()}finally{if(o)throw c}}return n}for(var r=[],c=[],i=1;i<=e;i++){var l=!1,f=!0,h=!1,d=void 0;try{for(var v,y=t[Symbol.iterator]();!(f=(v=y.next()).done);f=!0){var body=v.value;if(!(body.length<i)&&(c=n(t,r=body.slice(0,i))).length>1){l=!0;break}}}catch(t){h=!0,d=t}finally{try{f||null==y.return||y.return()}finally{if(h)throw d}}if(l)break}if(0===c.length)return[[],[]];for(var m=c[0],S=r.length;S<m.length;S++){var k=m[S],w=[].concat(Object(o.a)(r),[k]),x=n(c,w);if(x.length!==c.length)break;c=x,r=w}return[r,c]}},{key:"epoch",value:regeneratorRuntime.mark(function t(e){var n,c,l,f,h,d,v,y,m,head,S,k,w,x,j,P,O,E,T,_,C,N,B,body,F,A,D,M,I,G,H,R,$,z,J,U,K,L,Q,V,W,X,Y,Z,tt;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.newGrammar,c=e.disjointSet,l=!1,f=n.getNonterminals(),h=!0,d=!1,v=void 0,t.prev=6,y=f[Symbol.iterator]();case 8:if(h=(m=y.next()).done){t.next=99;break}if(head=m.value,S=n.getDerivations(head),k=S.map(function(t){return t.getBody()}),w=this.getCommonPrefix(k),x=Object(r.a)(w,2),j=x[0],!((P=x[1]).length<2)){t.next=15;break}return t.abrupt("continue",96);case 15:for(O=n.getSignUnusedAlias(head),E=n.addProduction(head,[].concat(Object(o.a)(j),[O])),T=!0,_=!1,C=void 0,t.prev=20,N=P[Symbol.iterator]();!(T=(B=N.next()).done);T=!0)body=B.value,n.deleteProduction(head,body);t.next=28;break;case 24:t.prev=24,t.t0=t.catch(20),_=!0,C=t.t0;case 28:t.prev=28,t.prev=29,T||null==N.return||N.return();case 31:if(t.prev=31,!_){t.next=34;break}throw C;case 34:return t.finish(31);case 35:return t.finish(28);case 36:F=null,A=!0,D=!1,M=void 0,t.prev=40,I=P[Symbol.iterator]();case 42:if(A=(G=I.next()).done){t.next=78;break}H=G.value,0===(R=H.slice(j.length)).length&&R.push(n.getEmptySign()),$=n.addProduction(O,Object(o.a)(R)),z=!0,J=!1,U=void 0,t.prev=50,K=S[Symbol.iterator]();case 52:if(z=(L=K.next()).done){t.next=60;break}if(!(Q=L.value).isSameOf(head,H)){t.next=57;break}return c.disjoint(Q,$),t.abrupt("break",60);case 57:z=!0,t.next=52;break;case 60:t.next=66;break;case 62:t.prev=62,t.t1=t.catch(50),J=!0,U=t.t1;case 66:t.prev=66,t.prev=67,z||null==K.return||K.return();case 69:if(t.prev=69,!J){t.next=72;break}throw U;case 72:return t.finish(69);case 73:return t.finish(66);case 74:null!==F?c.disjoint(F,$):F=$;case 75:A=!0,t.next=42;break;case 78:t.next=84;break;case 80:t.prev=80,t.t2=t.catch(40),D=!0,M=t.t2;case 84:t.prev=84,t.prev=85,A||null==I.return||I.return();case 87:if(t.prev=87,!D){t.next=90;break}throw M;case 90:return t.finish(87);case 91:return t.finish(84);case 92:return c.disjoint(F,E),t.next=95,{};case 95:l=!0;case 96:h=!0,t.next=8;break;case 99:t.next=105;break;case 101:t.prev=101,t.t3=t.catch(6),d=!0,v=t.t3;case 105:t.prev=105,t.prev=106,h||null==y.return||y.return();case 108:if(t.prev=108,!d){t.next=111;break}throw v;case 111:return t.finish(108);case 112:return t.finish(105);case 113:if(!1!==l){t.next=134;break}for(V=!0,W=!1,X=void 0,t.prev=117,Y=n.getProductions()[Symbol.iterator]();!(V=(Z=Y.next()).done);V=!0)tt=Z.value,c.add(tt);t.next=125;break;case 121:t.prev=121,t.t4=t.catch(117),W=!0,X=t.t4;case 125:t.prev=125,t.prev=126,V||null==Y.return||Y.return();case 128:if(t.prev=128,!W){t.next=131;break}throw X;case 131:return t.finish(128);case 132:return t.finish(125);case 133:c.reSetId();case 134:return t.abrupt("return",[!l,{newGrammar:n,disjointSet:c}]);case 135:case"end":return t.stop()}},t,this,[[6,101,105,113],[20,24,28,36],[29,,31,35],[40,80,84,92],[50,62,66,74],[67,,69,73],[85,,87,91],[106,,108,112],[117,121,125,133],[126,,128,132]])})},{key:"getCurResult",value:function(t){return{newGrammar:t.newGrammar,disjointSet:t.disjointSet}}},{key:"getResultFromContext",value:function(){}},{key:"runEpoch",value:function(t){var e=this.epoch(t),n=null;do{n=e.next()}while(!1===n.done);return n.value}},{key:"run",value:function(){for(var t=[!1,this.getInitContext()];!1===t[0];)t=this.runEpoch(t[1]);return console.log(t[1]),t[1].disjointSet.print(),this.getCurResult(t[1])}}]),t}();e.a=h},329:function(t,e,n){var content=n(352);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("3d8a8fd6",content,!0,{sourceMap:!1})},351:function(t,e,n){"use strict";var r=n(329);n.n(r).a},352:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,".elf .tips h2[data-v-0ed944ea]{text-align:center}.elf .main[data-v-0ed944ea]{display:flex}",""])},381:function(t,e,n){"use strict";n.r(e);var r=n(310),o=n(325),c={layout:"grammar",components:{HightlightProduction:n(321).a},data:function(){return{grammar:null,disjointSet:"",leftProductions:[],rightProductions:[]}},mounted:function(){var t=new r.a,e=t.getSign("A","Nonterminal"),n=t.getSign("B","Nonterminal"),c=t.getSign("C","Nonterminal"),l=t.getSign("D","Nonterminal"),f=(t.getSign("E","Nonterminal"),t.getSign("+","Terminal")),a=(t.getSign("*","Terminal"),t.getSign("id","Terminal"),t.getSign("(","Terminal"),t.getSign(")","Terminal"),t.getSign("a","Terminal")),b=t.getSign("b","Terminal"),h=t.getSign("c","Terminal"),d=t.getSign("d","Terminal"),v=t.getSign("e","Terminal");t.addProduction(l,[e,f,n,f,c]),t.addProduction(e,[a,b,h]),t.addProduction(e,[a,b,d]),t.addProduction(e,[a,b,v]),t.addProduction(e,[a,h]),t.addProduction(e,[a,a]),t.addProduction(e,[b,a]),t.addProduction(e,[b,h]),t.addProduction(n,[b,b]),t.addProduction(n,[b,h,d]),t.addProduction(n,[b,h,b,d]),t.addProduction(c,[h,a,b,a,h,h,h]),t.addProduction(c,[h,a,b,a,d,d,d]),t.addProduction(c,[h,a,b,a,v,d,d]),t.setStartSign(l),t.printProductions();var y=new o.a(t).run(),m=y.newGrammar,S=y.disjointSet;console.log(m),m.printProductions(),this.disjointSet=S,this.leftProductions=t.getProductions(),this.rightProductions=m.getProductions()}},l=(n(351),n(11)),component=Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"elf"},[this._m(0),this._v(" "),e("div",{staticClass:"main"},[e("HightlightProduction",{attrs:{disjointSet:this.disjointSet,productions:this.leftProductions,title:"当前文法"}}),this._v(" "),e("HightlightProduction",{attrs:{disjointSet:this.disjointSet,productions:this.rightProductions,title:"提取左因子后的文法"}})],1)])},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tips"},[n("h2",[t._v("将形如 ")]),t._v(" "),n("h2",[t._v("A→αβ1|αβ2|…|αβn")]),t._v(" "),n("h2",[t._v("的产生式重写为")]),t._v(" "),n("h2",[t._v("A→αA’")]),t._v(" "),n("h2",[t._v("A’→ β1|β2|…|βn")])])}],!1,null,"0ed944ea",null);e.default=component.exports}}]);