(this["webpackJsonpour-cal"]=this["webpackJsonpour-cal"]||[]).push([[0],{116:function(e,t,a){e.exports=a.p+"static/media/CodeWitchLogo.a6b16278.png"},118:function(e,t,a){e.exports=a(295)},123:function(e,t,a){},295:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(51),c=a.n(l),o=a(4),i=a(5),u=a(7),s=a(6),m=(a(123),a(9)),p=a(24),d=function(){return r.a.createElement("h1",null,r.a.createElement(p.b,{to:"/"},"OurCal: Community Graphghan"))},b=function(){return r.a.createElement("div",{className:"block-header"},r.a.createElement("h2",null,"Create A Block"),r.a.createElement("ol",null,r.a.createElement("li",null,"Use the color pickers to set your colors. You may use up to 6 colors in your block, and you can change the colors at any time."),r.a.createElement("li",null,"Select a color radio button to set your active color."),r.a.createElement("li",null,"Click on a box to fill it in with your chosen color. Click it again to revert to the background color."),r.a.createElement("li",null,"Fill in the block details form and submit your creation!")))},f=a(21),h=a(15),v=a(10);var E=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t,a){if(""===t)alert("Please select a pen first!");else{var n,r=a.target;r.className==="pixel ".concat(t)?(r.className="pixel bg",n=e.props.colors.bg):(r.className="pixel ".concat(t),n=e.props.colors[t]),r.style.backgroundColor=n,e.props.colorPixel(r.id.split("-")[1],t,n)}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e={x:this.props.column+1,y:25-this.props.row,color:this.props.colors.bg,color_variable:"bg"};"Template"===this.props.location&&this.props.addPixel(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.location,n=t.column,l=t.row,c=t.pen,o=t.colors,i=t.color;return"Template"===a?r.a.createElement("div",{className:"pixel bg",id:a+"-"+(n+1)+", "+(25-l),style:{backgroundColor:o["".concat(i)]},onClick:function(t){e.handleClick(c,t)}}):r.a.createElement("div",{className:"pixel bg",id:a+"-"+(n+1)+","+(25-l)})}}]),a}(n.Component),y=Object(v.b)((function(e,t){var a=e.blockTemplate.blockTemplate.find((function(e){return e.x===t.column+1&&e.y===25-t.row})),n="bg";return a&&(n=a.color_variable),{colors:e.palette.colors,pen:e.palette.pen,color:n}}),{addPixel:function(e){return{type:"ADD_PIXEL",payload:e}},colorPixel:function(e,t,a){return{type:"COLOR_PIXEL",payload:{id:e,pen:t,color:a}}}})(E),k=function(){var e=function(e){var t,a=new Array(25),n=[],l=Object(h.a)(a.entries());try{for(l.s();!(t=l.n()).done;){var c=Object(f.a)(t.value,1)[0],o=r.a.createElement(y,{key:c,row:e,column:c,location:"Template"});n.push(o)}}catch(i){l.e(i)}finally{l.f()}return n};return r.a.createElement("div",{className:"template block"},function(){var t,a=new Array(25),n=[],l=Object(h.a)(a.entries());try{for(l.s();!(t=l.n()).done;){var c=Object(f.a)(t.value,1)[0];n.push(r.a.createElement("div",{key:c,className:"row",id:"row-"+(c+1)},e(c)))}}catch(o){l.e(o)}finally{l.f()}return n}())},O=a(33);var j=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=document.getElementById(e.state.blockName);return""===e.state.blockName?alert("Please name your block"):a?alert("Block name must be unique"):""===e.state.difficulty?alert("Please select a difficulty rating"):""===e.state.username?alert("Please enter your username"):""===e.state.email?alert("Please enter your email"):(e.props.postBlock(e.state,e.props.block),e.props.clearBlock(e.props.block),e.setState({blockName:"",difficulty:"",username:"",email:""}),void alert("Success!"))},e.state={blockName:"",difficulty:"",username:"",email:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"block-details"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"block-form"},r.a.createElement("h2",null,"Block Details"),"Block name:",r.a.createElement("br",null),r.a.createElement("input",{onChange:function(t){return e.handleChange(t)},type:"text",name:"blockName",value:this.state.blockName}),r.a.createElement("br",null),r.a.createElement("input",{onChange:function(t){return e.handleChange(t)},type:"radio",checked:"Beginner"===this.state.difficulty,name:"difficulty",value:"Beginner"}),"Beginner",r.a.createElement("br",null),r.a.createElement("input",{onChange:function(t){return e.handleChange(t)},type:"radio",checked:"Intermediate"===this.state.difficulty,name:"difficulty",value:"Intermediate"}),"Intermediate",r.a.createElement("br",null),r.a.createElement("input",{onChange:function(t){return e.handleChange(t)},type:"radio",checked:"Advanced"===this.state.difficulty,name:"difficulty",value:"Advanced"}),"Advanced",r.a.createElement("br",null),r.a.createElement("br",null),"Username:",r.a.createElement("br",null),r.a.createElement("input",{onChange:function(t){return e.handleChange(t)},type:"text",name:"username",value:this.state.username}),r.a.createElement("br",null),"Email:",r.a.createElement("br",null),r.a.createElement("input",{onChange:function(t){return e.handleChange(t)},type:"email",name:"email",value:this.state.email}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{id:"create",type:"submit",value:"Create Block"})))}}]),a}(n.Component),C=Object(v.b)((function(e){return{block:e.blockTemplate.blockTemplate}}),{postBlock:function(e,t){console.log(e);var a={block:{name:e.blockName,pixels_attributes:t},difficulty:e.difficulty,user:{email:e.email,username:e.username}};return console.log(a),function(e){return fetch("/blocks",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(t){e(function(e){return{type:"CREATE_BLOCK",block:e}}(t))}))}},clearBlock:function(e){return{type:"CLEAR_BLOCK",block:e}}})(j),g=a(113);var w=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={displayColorPicker:!1},e.handleClick=function(t){t.preventDefault(),e.setState({displayColorPicker:!e.state.displayColorPicker})},e.handleClose=function(){e.setState({displayColorPicker:!1})},e.handleChangeComplete=function(t){var a="background"===e.props.id?"bg":"c".concat(e.props.id);e.props.changeColor(a,t.hex)},e}return Object(i.a)(a,[{key:"render",value:function(){var e="background"===this.props.id?"bg":"c".concat(this.props.id);return r.a.createElement("div",null,r.a.createElement("button",{id:"Color "+this.props.id,onClick:this.handleClick,style:{backgroundColor:this.props.colors[e]}},"background"===this.props.id?"Background Color":"Color ".concat(this.props.id)),this.state.displayColorPicker?r.a.createElement("div",{style:{position:"absolute",zIndex:"2"}},r.a.createElement("div",{style:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},onClick:this.handleClose}),r.a.createElement(g.ChromePicker,{color:this.props.colors[e],onChangeComplete:this.handleChangeComplete})):null)}}]),a}(r.a.Component),N=Object(v.b)((function(e){return{colors:e.palette.colors}}),{changeColor:function(e,t){return{type:"CHANGE_COLOR",data:{button:e,color:t}}}})(w);var A=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).handlePenSelect=function(t){e.props.setPen(t)},e.createPenSelector=function(){var t,a=new Array(5),n=[],l=Object(h.a)(a.entries());try{var c=function(){var a=Object(f.a)(t.value,1)[0];n.push(r.a.createElement("li",{key:a},r.a.createElement(N,{id:a+1}),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"pen",id:"pen "+(a+1),onClick:function(){return e.handlePenSelect("c"+(a+1))}})))};for(l.s();!(t=l.n()).done;)c()}catch(o){l.e(o)}finally{l.f()}return n},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"palette-form"},r.a.createElement("ul",{id:"palette"},r.a.createElement("li",null,r.a.createElement(N,{id:"background"}),r.a.createElement("br",null),"Select your pen:"),this.createPenSelector())),r.a.createElement("div",{id:"pen"}))}}]),a}(n.Component),B=Object(v.b)(null,{setPen:function(e){return{type:"SET_PEN",penNumber:e}}})(A),x=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"block-container"},r.a.createElement(b,null),r.a.createElement(k,null),r.a.createElement(C,null),r.a.createElement(B,null))}}]),a}(n.Component),T=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).createColumns=function(e,t){var a,n=new Array(25),l=[],c=Object(h.a)(n.entries());try{for(c.s();!(a=c.n()).done;){var o=Object(f.a)(a.value,1)[0],i=r.a.createElement(y,{key:o,row:e,column:o,location:t});l.push(i)}}catch(u){c.e(u)}finally{c.f()}return l},e.createBlock=function(t){var a,n=new Array(25),l=[],c=Object(h.a)(n.entries());try{for(c.s();!(a=c.n()).done;){var o=Object(f.a)(a.value,1)[0];l.push(r.a.createElement("div",{key:o,className:"row",id:"row-"+(o+1)},e.createColumns(o,t.name)))}}catch(i){c.e(i)}finally{c.f()}return l},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){!function(e,t){var a,n=Object(h.a)(t);try{for(n.s();!(a=n.n()).done;){var r=a.value,l=document.getElementById("".concat(e.id,"-").concat(r.x,",").concat(r.y));l.style.backgroundColor=r.color,l.className="pixel ".concat(r.color_variable)}}catch(c){n.e(c)}finally{n.f()}}(document.getElementById(this.props.block.name),this.props.block.pixels)}},{key:"render",value:function(){return r.a.createElement("div",{className:"block",id:this.props.block.name},this.createBlock(this.props.block))}}]),a}(n.Component);var _=a(53),P=a(114),L=function(e){var t=e.destroyBlock,a=e.id;return r.a.createElement("button",{onClick:function(e){return function(e){t(e)}(a)},className:"fa-times-circle"},r.a.createElement(_.a,{icon:P.a}))},S=a(115),D=function(){return r.a.createElement("button",{className:"viewButton"},r.a.createElement(_.a,{icon:S.a})," View Larger")},I=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card",id:this.props.block.id+"-"+this.props.block.attributes.name},r.a.createElement(L,{destroyBlock:this.props.destroyBlock,id:this.props.block.id}),r.a.createElement("h3",null,this.props.block.attributes.name),r.a.createElement("div",{className:"block"},r.a.createElement(T,{block:this.props.block.attributes})),r.a.createElement("ul",null,r.a.createElement("li",null,this.props.block.attributes.difficulty.rating),r.a.createElement("li",null,this.props.block.attributes.user.username),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/blocks/".concat(this.props.block.id)},r.a.createElement(D,null)))))}}]),a}(n.Component),R=Object(v.b)(null,{destroyBlock:function(e){return function(t){fetch("/blocks/".concat(e),{method:"DELETE"}).then(t(function(e){return{type:"DELETE_BLOCK",id:e}}(e)))}}})(I);var H=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).createCards=function(e){return e.map((function(e){return r.a.createElement(R,{block:e,key:e.id})}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchBlocks()}},{key:"render",value:function(){return r.a.createElement("div",{className:"card-container"},r.a.createElement("h2",null,"View Blocks"),r.a.createElement("div",{className:"cards"},this.createCards(this.props.cards)))}}]),a}(n.Component),K=Object(v.b)((function(e){return{cards:e.cards.all}}),{fetchBlocks:function(){return function(e){fetch("/blocks").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_BLOCKS",payload:t.data})}))}}})(H),V=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(x,null),r.a.createElement("br",null),r.a.createElement(K,null))}}]),a}(r.a.Component),U=function(e){return r.a.createElement("div",{className:"block-header"},r.a.createElement("h2",null,e.name))},X=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).createColumns=function(e,t){var a,n=new Array(25),l=[],c=Object(h.a)(n.entries());try{for(c.s();!(a=c.n()).done;){var o=Object(f.a)(a.value,1)[0],i=r.a.createElement(y,{key:o,row:e,column:o,location:"View"+t});l.push(i)}}catch(u){c.e(u)}finally{c.f()}return l},e.createBlock=function(t){var a,n=new Array(25),l=[],c=Object(h.a)(n.entries());try{for(c.s();!(a=c.n()).done;){var o=Object(f.a)(a.value,1)[0];l.push(r.a.createElement("div",{key:o,className:"row",id:"row-"+(o+1)},e.createColumns(o,t.name)))}}catch(i){c.e(i)}finally{c.f()}return l},e.colorPixels=function(e,t){var a,n=Object(h.a)(t);try{for(n.s();!(a=n.n()).done;){var r=a.value,l=document.getElementById("".concat(e.id,"-").concat(r.x,",").concat(r.y));l.style.backgroundColor=r.color,l.className="pixel ".concat(r.color_variable)}}catch(c){n.e(c)}finally{n.f()}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("View"+this.props.block.name);this.colorPixels(e,this.props.block.pixels)}},{key:"componentDidUpdate",value:function(e){var t=document.getElementById("View"+this.props.block.name);this.colorPixels(t,this.props.block.pixels)}},{key:"render",value:function(){var e="View"+this.props.block.name;return r.a.createElement("div",{className:"block",id:e},this.createBlock(this.props.block))}}]),a}(n.Component),F=function(e){return r.a.createElement("div",{className:"block-details"},r.a.createElement("h3",null,"Designed by: ",e.username),r.a.createElement("h3",null,"Difficulty: ",e.difficulty))},G=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.block;return void 0!==e?r.a.createElement("div",{className:"block-container"},r.a.createElement(U,{name:e.attributes.name}),r.a.createElement(X,{block:e.attributes}),r.a.createElement(F,{username:e.attributes.user.username,difficulty:e.attributes.difficulty.rating})):r.a.createElement("h2",null,"Your block is loading.")}}]),a}(n.Component),M=Object(v.b)((function(e,t){return{block:e.cards.all.find((function(e){return e.id===t.id}))}}))(G),W=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(M,{id:this.props.id}),r.a.createElement("br",null),r.a.createElement(K,null))}}]),a}(r.a.Component),J=Object(v.b)((function(e,t){return{id:t.match.params.id}}))(W),q=function(){return r.a.createElement("div",{className:"About"},r.a.createElement("h2",null,"About OurCal"),r.a.createElement("p",null,"OurCal is a community-generated Crochet-Along (CAL). Anyone can design a block using the graphghan generator and submit it to our database. Users can then view one another's blocks and implement their favorites in a one-of-a-kind blanket!"),r.a.createElement("h2",null,"Future Features"),r.a.createElement("p",null,"Before we launch, there are a few more odds and ends to tie up:",r.a.createElement("ul",null,r.a.createElement("li",null,"Add user sessions"),r.a.createElement("li",null,"Add the ability to edit one's submitted patterns"),r.a.createElement("li",null,"Add the ability to view patterns by designer")),"After launch, we'll add some additional features:",r.a.createElement("ul",null,r.a.createElement("li",null,"View other's patterns in your color scheme"),r.a.createElement("li",null,"Arrange selected blocks on a blanket template"),r.a.createElement("li",null,"Generate written instructions for patterns"),r.a.createElement("li",null,"Add a print-friendly view of patterns with instructions"),r.a.createElement("li",null,"Have an idea?"," ",r.a.createElement("a",{href:"https://github.com/AudTheCodeWitch/OurCAL/issues/new"},"Submit a feature request!")))))},Y=a(116),z=a.n(Y),$=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,"\xa92019 Audrea Cook"),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/about"},"About Us")),r.a.createElement("li",null,r.a.createElement("img",{src:z.a,alt:"AudTheCodeWitch Logo",height:"50px"})))},Q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(d,null)),r.a.createElement(m.a,{exact:!0,path:"/",component:V}),r.a.createElement(m.a,{exact:!0,path:"/about",component:q}),r.a.createElement(m.a,{path:"/blocks/:id",component:J}),r.a.createElement("footer",null,r.a.createElement($,null)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=a(26),ee=a(117),te=a(27);var ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{all:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BLOCKS":return{all:t.payload};case"CREATE_BLOCK":return{all:[].concat(Object(te.a)(e.all),[t.block.data])};case"DELETE_BLOCK":var a=e.all.find((function(e){return e.id===t.id})),n=e.all.indexOf(a);return{all:[].concat(Object(te.a)(e.all.slice(0,n)),Object(te.a)(e.all.slice(n+1)))};default:return e}},ne=a(11);var re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{blockTemplate:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PIXEL":return{blockTemplate:[].concat(Object(te.a)(e.blockTemplate),[t.payload])};case"COLOR_PIXEL":var a=e.blockTemplate.find((function(e){return e.x===parseInt(t.payload.id.split(", ")[0])&&e.y===parseInt(t.payload.id.split(", ")[1])})),n=e.blockTemplate.indexOf(a);return a.color=t.payload.color,a.color_variable=t.payload.pen,{blockTemplate:[].concat(Object(te.a)(e.blockTemplate.slice(0,n)),[a],Object(te.a)(e.blockTemplate.slice(n+1)))};case"CHANGE_COLOR":var r=e.blockTemplate.map((function(e){return e.color_variable===t.data.button?Object(ne.a)(Object(ne.a)({},e),{},{color:t.data.color}):e}));return Object(ne.a)(Object(ne.a)({},e),{},{blockTemplate:r});case"CLEAR_BLOCK":var l=t.block.find((function(e){return"bg"===e.color_variable}));l=l.color;var c=e.blockTemplate.map((function(e){return Object(ne.a)(Object(ne.a)({},e),{},{color:l,color_variable:"bg"})}));return Object(ne.a)(Object(ne.a)({},e),{},{blockTemplate:c});default:return e}};var le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{colors:{bg:"#fff",c1:"#fff",c2:"#fff",c3:"#fff",c4:"#fff",c5:"#fff"},pen:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_COLOR":var a=t.data.button,n=t.data.color;return Object(ne.a)(Object(ne.a)({},e),{},{colors:Object(ne.a)(Object(ne.a)({},e.colors),{},Object(O.a)({},a,n))});case"SET_PEN":return Object(ne.a)(Object(ne.a)({},e),{},{pen:t.penNumber});default:return e}},ce=Object(Z.c)({cards:ae,blockTemplate:re,palette:le}),oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,ie=Object(Z.e)(ce,oe(Object(Z.a)(ee.a)));c.a.render(r.a.createElement(v.a,{store:ie},r.a.createElement(p.a,null,r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[118,1,2]]]);
//# sourceMappingURL=main.996280fe.chunk.js.map