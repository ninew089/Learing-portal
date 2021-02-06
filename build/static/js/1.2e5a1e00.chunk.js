(this["webpackJsonplearning-app"]=this["webpackJsonplearning-app"]||[]).push([[1],{716:function(e,t,a){"use strict";function i(e){return Math.abs(e)>999999?Math.sign(e)*(Math.abs(e)/1e6).toFixed(2)+"\u0e25\u0e49\u0e32\u0e19":Math.abs(e)>99999?Math.sign(e)*(Math.abs(e)/1e5).toFixed(2)+"\u0e41\u0e2a\u0e19":Math.abs(e)>9999?Math.sign(e)*(Math.abs(e)/1e4).toFixed(2)+"\u0e2b\u0e21\u0e37\u0e48\u0e19":Math.abs(e)>999?Math.sign(e)*(Math.abs(e)/1e3).toFixed(2)+"\u0e1e\u0e31\u0e19":Math.sign(e)*Math.abs(e)}a.d(t,"a",(function(){return i}))},866:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var i=a(11),n=a(20),r=a(0),o=a.n(r),c=a(264),l=a(622),d=a(112),s=a(317),m=a(716),p=a(634),g=a(8),b=Object(r.lazy)((function(){return a.e(3).then(a.bind(null,722))})),u=Object(r.lazy)((function(){return a.e(14).then(a.bind(null,715))})),h=Object(c.a)((function(e){return{container:{},root:{borderRadius:"0.5rem",padding:10,"&:hover":{background:"#cccccc8a"},height:"100%"},card:Object(n.a)({width:"100%",borderRadius:"0.5rem"},e.breakpoints.up("sm"),{transition:"0.4s","&:hover":{transform:"translateY(-4px)"}}),main:{overflow:"hidden",borderTopLeftRadius:"0.5rem",borderTopRightRadius:"0.5rem",zIndex:1},avatar:{width:48,height:48},tag:{display:"inline-block",fontFamily:"'Sen', sans-serif",backgroundColor:"#ff5dac",borderRadius:"0.5rem",padding:"2px 0.5rem",color:"#fff",marginBottom:"0.5rem"},title:{marginTop:2,maxWidth:"220px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",WebkitLineClamp:1,WebkitBoxOrient:"vertical",fontSize:"1.2rem",fontWeight:700,color:"#132740",paddingLeft:8,marginRight:8,marginBottom:10},subtitle:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",WebkitLineClamp:1,WebkitBoxOrient:"vertical",fontSize:"1rem",fontWeight:500,color:"#132740",paddingLeft:8,marginRight:8,marginBottom:10},author:{overflow:"hidden",display:"-webkit-box",textOverflow:"ellipsis",WebkitLineClamp:1,WebkitBoxOrient:"vertical",fontSize:"14px",fontWeight:700,color:"#132740",padding:3,maxWidth:190,marginLeft:8,marginBottom:2},box:{padding:8,marginLeft:6},view:{marginRight:10},dot:{height:"10px",width:"10px",backgroundColor:"#cfcde6",borderRadius:"50%",display:"inline-block",marginLeft:8,marginRight:4},rating:{paddingLeft:8},logo:{margin:8},caption:{overflow:"hidden",display:"-webkit-box",textOverflow:"ellipsis",WebkitLineClamp:3,WebkitBoxOrient:"vertical",fontSize:"12px",color:"#434a54",paddingLeft:14,paddingRight:14},category:{overflow:"hidden",display:"-webkit-box",textOverflow:"ellipsis",WebkitLineClamp:1,WebkitBoxOrient:"vertical",maxWidth:"200px"},detail:{marginBottom:14},submit:{padding:0,float:"right",width:"100%",margin:0},boxshadow:{backgroundPosition:"center center",boxShadow:"1px -24px 0px -14px #aaaaaa,4px -45px 1px -25px  #999999",marginTop:30,borderRadius:"px"},cardMedia:{paddingTop:"75%",borderRadius:e.shape.borderRadius,boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"}}}));function x(e){var t=e.platformlogo,a=e.learningObjective,n=e.viewCount,c=e.point,x=e.platformName,f=e.satisfactionCount,v=e.code,k=e.thumbNail,w=e.name,E=e.courseCategory,y=h(),O=Object(r.useState)(!1),M=Object(i.a)(O,2),W=M[0],N=M[1],R=Object(g.e)((function(e){return e.course})).colorName;return o.a.createElement(r.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement("div",{className:y.root},o.a.createElement("div",{className:y.card,onClick:function(){N(!0)}},o.a.createElement(l.a,{container:!0,direction:"column",justify:"flex-start"},o.a.createElement("div",{style:{display:"block"}},o.a.createElement("div",{style:{width:"100%",backgroundSize:"cover",backgroundPosition:"center center",borderRadius:"10px"}}),o.a.createElement(p.a,{style:{background:"url('".concat(k,"')"),backgroundSize:"cover",backgroundPosition:"center center"},image:k,className:y.cardMedia,title:w}),o.a.createElement(d.a,{variant:"h2",className:y.title},w),o.a.createElement(d.a,{variant:"h4",className:y.subtitle},v),o.a.createElement(l.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",className:y.detail},o.a.createElement("div",{className:y.dot,style:{background:R[0][void 0!==E?E:0]}}),o.a.createElement(s.a,{fontWeight:500,className:y.category},E),o.a.createElement(l.a,{item:!0,xs:12},o.a.createElement("div",null,void 0!==a&&o.a.createElement("div",{className:y.caption,dangerouslySetInnerHTML:{__html:a}}))),o.a.createElement(l.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},o.a.createElement("div",{className:y.logo},o.a.createElement("div",{style:{backgroundImage:"url('".concat(t),backgroundSize:"cover",padding:"30px",backgroundPosition:" center center"}})),o.a.createElement(l.a,{item:!0},o.a.createElement("div",{className:y.author},x),o.a.createElement("div",{className:y.rating},o.a.createElement(u,{vote:f,point:c})),o.a.createElement(l.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",className:y.box},o.a.createElement(d.a,{variant:"caption",align:"left",component:"span",color:"textSecondary"},"\u0e01\u0e32\u0e23\u0e14\u0e39 ",Object(m.a)(n)," \u0e04\u0e23\u0e31\u0e49\u0e07")))))))),o.a.createElement(b,{open:W,setOpen:N,data:e,isCurriculum:!1})))}}}]);
//# sourceMappingURL=1.2e5a1e00.chunk.js.map