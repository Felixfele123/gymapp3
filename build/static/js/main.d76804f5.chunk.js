(this["webpackJsonpmaterial-ui-react"]=this["webpackJsonpmaterial-ui-react"]||[]).push([[0],{146:function(e,t,n){},224:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n(0),c=n.n(r),s=n(37),i=n.n(s),a=(n(146),n(35)),u=n.n(a),l=n(72),d=n(21),x=n(28),p=n(9),j=n(8),h=n(17),b=n(276),m=n(278),g=n(279),k=n(245),f=n(27),w=n.n(f),O=Object(b.a)((function(e){return{success:{backgroundColor:"#4F8A10",color:"white"},closed:{backgroundColor:"#068701",color:"white"},paper:{paddingY:e.spacing(2),margin:"auto",marginTop:"20px"},open:{backgroundColor:"#F5F5F5"},description:{margin:"10px 0 10px 0",textAlign:"center"}}})),v=function(e){e.workoutIndex;var t=e.excerciseIndex,n=e.setIndex,r=e.set,c=(e.workouts,e.workout,e.exercise,e.setWorkouts,e.newWorkout),s=e.setNewWorkout,i=e.myElement,a=O(),u=Object(p.f)();return Object(o.jsx)(k.a,{variant:"outlined",square:!1,className:"".concat(a.paper," ").concat("closed"===r.status&&"/"!==u.location.pathname?a.closed:a.open),onDoubleClick:function(){return function(){if("/ActiveWorkout"===u.location.pathname){var e=w()(c),o=e.excirceses[t].sets[n].status;e.excirceses[t].sets[n].status="open"===o?"closed":"open",s(e),console.log("double click")}}()},children:Object(o.jsxs)(m.a,{container:!0,direction:"row",children:[Object(o.jsx)(m.a,{item:!0,xs:6,children:Object(o.jsxs)(g.a,{className:a.description,gutterBottom:!0,variant:"subtitle2",children:[Object(o.jsxs)("span",{id:"my-element",onClick:function(){return function(e){if("/ActiveWorkout"===u.location.pathname&&e){var o=document.createElement("input");o.pattern="[0-9]*",o.inputmode="decimal",o.style.position="absolute",o.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",o.style.left=e.offsetLeft+"px",o.style.height=0,o.style.opacity=0,document.body.appendChild(o),o.focus(),o.addEventListener("input",(function(){if(""===o.value){var e=w()(c);e.excirceses[t].sets[n].resistence=0,s(e)}else{var r=w()(c);r.excirceses[t].sets[n].resistence=o.value,s(r)}}),{preventScroll:!0}),u.push("/ActiveWorkout")}}(i)},children:[" ",r.resistence," "]}),r.resistencePrefix]})}),Object(o.jsx)(m.a,{item:!0,xs:6,children:Object(o.jsxs)(g.a,{className:a.description,variant:"subtitle2",children:[Object(o.jsxs)("span",{id:"my-element",onClick:function(){return function(e){if("/ActiveWorkout"===u.location.pathname){if(document.getElementsByTagName("input")&&(document.body.getElementsByTagName("input").innerHTML=""),e){var o=document.createElement("input");o.pattern="[0-9]*",o.inputmode="decimal",o.style.position="absolute",o.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",o.style.left=e.offsetLeft+"px",o.style.height=0,o.style.opacity=0,document.body.appendChild(o),o.id="temp",o.focus(),o.addEventListener("input",(function(){if(""===o.value){var e=w()(c);e.excirceses[t].sets[n].duration=0,s(e)}else{var r=w()(c);r.excirceses[t].sets[n].duration=o.value,s(r)}})),o.addEventListener("focusout",(function(){document.body.removeChild(o)}))}u.push("/ActiveWorkout")}}(i)},children:[" ",r.duration," "]}),r.durationPrefix]})})]})})},W=n(127),y=n.n(W),C=Object(b.a)((function(e){return{success:{backgroundColor:"#4F8A10",color:"white"},fail:{backgroundColor:"#D8000C",color:"white"},paper:{paddingY:e.spacing(2),margin:"auto",marginTop:"20px",maxHeight:"41px"},open:{backgroundColor:"#C0C0C0"},description:{margin:"10px 0 10px 0",textAlign:"center"}}})),N=function(e){e.set,e.workouts,e.workout,e.exercise,e.setWorkouts;var t=e.newWorkout,n=e.excerciseIndex,r=e.setNewWorkout,c=C(),s=Object(p.f)(),i=w()(t);return Object(o.jsx)(k.a,{onClick:function(){console.log(i.excirceses[n]),i.excirceses[n].sets.push({duration:i.excirceses[n].sets[0].duration,resistence:i.excirceses[n].sets[0].resistence,durationPrefix:i.excirceses[n].sets[0].durationPrefix,resistencePrefix:i.excirceses[n].sets[0].resistencePrefix,status:"open"}),r(i),s.push("/ActiveWorkout")},variant:"outlined",square:!1,className:"".concat(c.paper," ").concat(c.open),children:Object(o.jsx)(m.a,{container:!0,direction:"row",children:Object(o.jsx)(m.a,{item:!0,xs:12,children:Object(o.jsx)(g.a,{className:c.description,gutterBottom:!0,variant:"subtitle2",children:Object(o.jsx)(y.a,{style:{height:"20px",inline:!1},inline:"true"})})})})})},A=n(128),I=n.n(A),E=Object(b.a)((function(e){return{success:{backgroundColor:"#4F8A10",color:"white"},fail:{backgroundColor:"#D8000C",color:"white"},paper:{paddingY:e.spacing(2),margin:"auto",marginTop:"20px",maxHeight:"41px"},open:{backgroundColor:"#C0C0C0"},description:{margin:"10px 0 10px 0",textAlign:"center"}}})),T=function(e){e.set,e.workouts,e.workout,e.exercise,e.setWorkouts;var t=e.newWorkout,n=e.excerciseIndex,r=e.setNewWorkout,c=E(),s=Object(p.f)(),i=w()(t);return Object(o.jsx)(k.a,{onClick:function(){console.log(i.excirceses[n]),i.excirceses[n].sets.length>1&&i.excirceses[n].sets.pop(),r(i),s.push("/ActiveWorkout")},variant:"outlined",square:!1,className:"".concat(c.paper," ").concat(c.open),children:Object(o.jsx)(m.a,{container:!0,direction:"row",children:Object(o.jsx)(m.a,{item:!0,xs:12,children:Object(o.jsx)(g.a,{className:c.description,gutterBottom:!0,variant:"subtitle2",children:Object(o.jsx)(I.a,{style:{height:"20px",inline:!1},inline:"true"})})})})})},S=Object(b.a)((function(e){return{setWrapper:{paddingBottom:"30px"},exercise:{marginTop:"5px",paddingTop:"10px"},exerciseName:{textAlign:"center",margin:"auto"},root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:0}},success:{backgroundColor:"#4F8A10",color:"white"},fail:{backgroundColor:"#D8000C",color:"white"},changeset:{paddingLeft:"60px",paddingRight:"60px"}}})),F=function(e){var t=e.workoutIndex,n=e.excerciseIndex,r=e.value,c=e.setValue,s=e.exercise,i=e.workout,a=e.setWorkouts,u=e.workouts,l=e.newWorkout,d=e.setNewWorkout,x=(e.newWorkoutExerciseIndex,s.sets),j=S(),h=Object(p.f)(),b=document.getElementById("my-element");return Object(o.jsxs)(m.a,{className:j.exercise,container:!0,children:[Object(o.jsx)(m.a,{xs:4,item:!0,className:j.exerciseName,children:Object(o.jsx)(g.a,{variant:"body2",color:"textSecondary",children:s.name})}),Object(o.jsxs)(m.a,{className:j.setWrapper,container:!0,alignItems:"center",justify:"center",children:[x.map((function(e,x){return Object(o.jsx)(m.a,{item:!0,xs:11,children:Object(o.jsx)(v,{myElement:b,setNewWorkout:d,workoutIndex:t,excerciseIndex:n,setIndex:x,newWorkout:l,value:r,setValue:c,set:e,workout:i,workouts:u,setWorkouts:a,exercise:s})},x)})),"/"!==h.location.pathname&&Object(o.jsx)(m.a,{xs:11,item:!0,children:Object(o.jsxs)(m.a,{container:!0,direction:"row",children:[Object(o.jsx)(m.a,{xs:6,item:!0,className:j.changeset,children:Object(o.jsx)(T,{newWorkout:l,setNewWorkout:d,workoutIndex:t,excerciseIndex:n,workout:i,workouts:u,setWorkouts:a,exercise:s},s.exerciseID)}),Object(o.jsx)(m.a,{xs:6,item:!0,className:j.changeset,children:Object(o.jsx)(N,{newWorkout:l,setNewWorkout:d,workoutIndex:t,excerciseIndex:n,workout:i,workouts:u,setWorkouts:a,exercise:s},s.exerciseID)})]})})]})]})},B=n(292),L=n(295),D=n(296),P=n(130),Y=n(71),G=n(293),H=(Object(P.a)({palette:{mode:"dark"}}),Object(P.a)({palette:{mode:"light"}})),M=Object(b.a)((function(e){return{root:{flexGrow:1,margin:0},paper:{paddingY:e.spacing(2),marginX:0},workoutName:{textAlign:"center"},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"},timer:{textAlign:"center"}}})),V=Object(Y.a)(L.a)((function(e){var t=e.theme;return Object(h.a)(Object(h.a)({},t.typography.body2),{},{textAlign:"left",padding:20,color:t.palette.text.secondary,height:80,lineHeight:"10px"})})),q=function(e){e.workoutIndex,e.value,e.setValue;var t=e.workout,n=e.workouts,r=(e.setWorkouts,e.setTodos,e.key,e.setNewWorkout,M(),t.excirceses,Object(p.f)()),c=function(){r.push("/newWorkout")};Object(j.a)(n);return Object(o.jsx)(B.a,{container:!0,spacing:2,children:[H].map((function(e,t){return Object(o.jsx)(B.a,{item:!0,xs:12,children:Object(o.jsx)(G.a,{theme:e,children:Object(o.jsx)(D.a,{sx:{p:2,bgcolor:"background.default",display:"grid",gridTemplateColumns:{md:"2fr 2fr",xs:"2fr 2fr"},gap:2},children:["tre i rad","fem i rad","tetriss"].map((function(e,t){return Object(o.jsx)(V,{elevation:5,onClick:c,children:Object(o.jsxs)("p",{children:[" ",e]})},t)}))})})},t)}))})},R=function(e){var t=e.value,n=e.setValue,r=e.workouts,c=e.setWorkouts,s=e.setNewWorkout;return Object(o.jsx)("div",{style:{marginTop:"70px"},id:"wolist",children:["game"].map((function(e,i){return Object(o.jsx)("div",{children:Object(o.jsx)(q,{workoutIndex:i,value:t,setValue:n,setNewWorkout:s,setWorkouts:c,workouts:r,workout:e})},i)}))})},J=n(286),z=function(e){var t=e.setStatus,n=(e.status,e.workouts),c=e.setWorkouts,s=(e.newWorkout,e.setNewWorkout);return Object(r.useEffect)((function(){t("Start workout")}),[t]),Object(o.jsx)(J.a,{style:{width:"100%",padding:"0",marginBottom:"120px",marginTop:"70px"},children:Object(o.jsx)(R,{workouts:n,setWorkouts:c,setNewWorkout:s},n._id)})},X=(n(224),Object(b.a)((function(e){return{success:{backgroundColor:"#4F8A10",color:"white"},fail:{backgroundColor:"#D8000C",color:"white"},paper:{paddingY:e.spacing(2),margin:"auto",marginTop:"20px"},open:{backgroundColor:"#F5F5F5"},description:{margin:"20px 0 20px 0"},headline:{marginY:"10px"},button:{textAlign:"center",marginTop:"30px"},Lowerbody:{borderColor:"#3f51b5"}}}))),_=function(e){e.workouts,e.setWorkouts,e.newWorkout,e.setNewWorkout,e.newWorkoutList,e.setNewWorkoutList,X();return Object(o.jsx)(J.a,{style:{padding:"0",marginTop:"56px"},children:Object(o.jsxs)("section",{id:"game",children:[Object(o.jsxs)("div",{id:"tic",children:[Object(o.jsx)("canvas",{id:"canvas1",width:"75",height:"75"}),Object(o.jsx)("canvas",{id:"canvas2",width:"75",height:"75"}),Object(o.jsx)("canvas",{id:"canvas3",width:"75",height:"75"}),Object(o.jsx)("br",{}),Object(o.jsx)("canvas",{id:"canvas4",width:"75",height:"75"}),Object(o.jsx)("canvas",{id:"canvas5",width:"75",height:"75"}),Object(o.jsx)("canvas",{id:"canvas6",width:"75",height:"75"}),Object(o.jsx)("br",{}),Object(o.jsx)("canvas",{id:"canvas7",width:"75",height:"75"}),Object(o.jsx)("canvas",{id:"canvas8",width:"75",height:"75"}),Object(o.jsx)("canvas",{id:"canvas9",width:"75",height:"75"})]}),Object(o.jsxs)("div",{id:"rules",children:[Object(o.jsx)("h2",{children:"Rules"}),Object(o.jsx)("p",{children:"Each player has to take turns"}),Object(o.jsx)("p",{children:"The player who fills 3 consecutive rows first wins"}),Object(o.jsx)("center",{children:Object(o.jsx)("button",{id:"new",children:"NEW GAME"})})]})]})})},K=n(74),Q=n.n(K),U=n(287),Z=n(288),$=n(289),ee=Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},timer:{textAlign:"right"},button:{textAlign:"end",color:"white"}}})),te=function(e){var t=e.AppStatus,n=e.putWorkouts,r=ee(),c=Object(p.f)();return Object(o.jsx)(U.a,{position:"fixed",children:Object(o.jsx)(Z.a,{children:Object(o.jsx)(m.a,{container:!0,children:Object(o.jsxs)(m.a,{container:!0,direction:"row",children:[Object(o.jsx)(m.a,{item:!0,xs:6,children:Object(o.jsx)(g.a,{onClick:function(){c.push("/")},variant:"subtitle1",className:r.title,children:"Enkla spel"})}),Object(o.jsx)(m.a,{item:!0,xs:6,className:r.button,children:Object(o.jsx)($.a,{onClick:n,disabled:!t,size:"small",variant:"contained",children:"Save changes"})})]})})})})},ne=(Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:{},title:{flexGrow:1},buttom:{width:"100%",textAlign:"center",height:"56px",margin:0,padding:0},appBar:{height:"auto",top:"auto",bottom:0,margin:0,paddingBottom:"30px"},toolbar:{height:"40px",textAlign:"center",margin:0,padding:0}}})),function(){var e=Object(r.useState)(1),t=Object(d.a)(e,2),n=t[0],s=t[1];c.a.useEffect((function(){var e=n>0&&setInterval((function(){s(n+1)}),1e3);return function(){return clearInterval(e)}}),[n]);return Object(o.jsx)("span",{children:function(e){var t=parseInt(e,10),n=Math.floor(t/3600),o=Math.floor((t-3600*n)/60),r=t-3600*n-60*o;return n<10&&(n="0"+n),o<10&&(o="0"+o),r<10&&(r="0"+r),n+":"+o+":"+r}(n)})}),oe=Object(b.a)((function(e){return{success:{backgroundColor:"#4F8A10",color:"white"},fail:{backgroundColor:"#D8000C",color:"white"},paper:{margin:"60px 10px 10px 10px"},open:{backgroundColor:"#F5F5F5"},description:{margin:"30px 0 30px 0",textAlign:"center"},container:{padding:0,width:"100%",alignItems:"center",justifyContent:"center"}}})),re=function(e){var t=e.setStatus,n=(e.status,e.newWorkout),c=e.setNewWorkout,s=e.setWorkouts;Object(r.useEffect)((function(){t("Save")}),[t]);var i=[n],a=n.excirceses,u=oe();return Object(o.jsxs)(m.a,{container:!0,direction:"column",alignItems:"center",justify:"center",style:{width:"100%",padding:"0",marginBottom:"120px"},children:[Object(o.jsx)(m.a,{container:!0,children:Object(o.jsx)(m.a,{xs:12,item:!0,className:u.exerciseName,children:Object(o.jsx)(k.a,{variant:"outlined",className:u.paper,children:Object(o.jsxs)(m.a,{container:!0,children:[Object(o.jsx)(m.a,{item:!0,xs:6,style:{padding:"10px"},children:n.name}),Object(o.jsx)(m.a,{item:!0,xs:6,style:{textAlign:"right",padding:"10px"},children:Object(o.jsx)(ne,{})})]})})})}),a.map((function(e,t){return Object(o.jsx)(F,{workoutIndex:0,newWorkout:n,setNewWorkout:c,workout:n,workouts:i,excirceses:a,exercise:e,setWorkouts:s,excerciseIndex:t},t)}))]})};function ce(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!1),i=Object(d.a)(s,2),a=i[0],j=i[1],h=Object(r.useState)({}),b=Object(d.a)(h,2),m=b[0],g=b[1],k=Object(r.useState)([]),f=Object(d.a)(k,2),w=f[0],O=f[1],v=Object(r.useState)(!1),W=Object(d.a)(v,2),y=W[0],C=W[1],N=Object(r.useState)("start workout"),A=Object(d.a)(N,2),I=A[0],E=A[1],T=Object(r.useCallback)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!1),e.next=3,Q()({method:"put",url:"https://api-mygym.herokuapp.com/schema/5ff0601c4542a80429c9c2f4",withCredentials:!0,data:{workouts:n}});case 3:case"end":return e.stop()}}),e)}))),[n]);Object(r.useEffect)((function(){S(),F()}),[]),Object(r.useEffect)((function(){C(!0)}),[n]);var S=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q()({method:"get",url:"https://api-mygym.herokuapp.com/schema",withCredentials:!0});case 2:t=e.sent,n=t.data,c(n[0].workouts);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q()({method:"get",url:"https://api-mygym.herokuapp.com/workout",withCredentials:!0});case 2:t=e.sent,n=t.data,O(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)(x.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(te,{activeWorkout:a,setActiveWorkout:j,putWorkouts:T,AppStatus:y}),Object(o.jsxs)(p.c,{children:[Object(o.jsx)(p.a,{path:"/",exact:!0,component:function(){return Object(o.jsx)(z,{status:I,setStatus:E,activeWorkout:a,setActiveWorkout:j,workouts:n,setWorkouts:c,newWorkout:m})}}),Object(o.jsx)(p.a,{path:"/ActiveWorkout",exact:!0,component:function(){return Object(o.jsx)(re,{status:I,setStatus:E,activeWorkout:a,setActiveWorkout:j,workouts:n,setWorkouts:c,newWorkout:m,setNewWorkout:g})}}),Object(o.jsx)(p.a,{path:"/NewWorkout",exact:!0,component:function(){return Object(o.jsx)(_,{style:{marginTop:"70px"},workouts:n,setWorkouts:c,newWorkout:m,setNewWorkout:g,newWorkoutList:w,setNewWorkoutList:O})}})]})]})})}var se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,297)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),o(e),r(e),c(e),s(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(ce,{})}),document.getElementById("root")),se()}},[[243,1,2]]]);
//# sourceMappingURL=main.d76804f5.chunk.js.map