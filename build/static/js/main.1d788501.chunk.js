(this["webpackJsonpmaterial-ui-react"]=this["webpackJsonpmaterial-ui-react"]||[]).push([[0],{116:function(e,t,s){},151:function(e,t,s){},229:function(e,t,s){},230:function(e,t,s){},249:function(e,t,s){"use strict";s.r(t);var i=s(0),c=s(1),o=s.n(c),n=s(43),r=s.n(n),j=(s(151),s(37)),a=s.n(j),d=s(77),x=s(21),u=s(32),b=s(10),l=s(9),O=s(4),v=s(282),p=s(284),h=s(285),g=s(251),m=s(29),k=s.n(m),w=Object(v.a)((function(e){return{success:{backgroundColor:"#4F8A10",color:"white"},closed:{backgroundColor:"#068701",color:"white"},paper:{paddingY:e.spacing(2),margin:"auto",marginTop:"20px"},open:{backgroundColor:"#F5F5F5"},description:{margin:"10px 0 10px 0",textAlign:"center"}}})),f=function(e){e.workoutIndex;var t=e.excerciseIndex,s=e.setIndex,c=e.set,o=(e.workouts,e.workout,e.exercise,e.setWorkouts,e.newWorkout),n=e.setNewWorkout,r=e.myElement,j=w(),a=Object(b.f)();return Object(i.jsx)(g.a,{variant:"outlined",square:!1,className:"".concat(j.paper," ").concat("closed"===c.status&&"/"!==a.location.pathname?j.closed:j.open),onDoubleClick:function(){return function(){if("/ActiveWorkout"===a.location.pathname){var e=k()(o),i=e.excirceses[t].sets[s].status;e.excirceses[t].sets[s].status="open"===i?"closed":"open",n(e),console.log("double click")}}()},children:Object(i.jsxs)(p.a,{container:!0,direction:"row",children:[Object(i.jsx)(p.a,{item:!0,xs:6,children:Object(i.jsxs)(h.a,{className:j.description,gutterBottom:!0,variant:"subtitle2",children:[Object(i.jsxs)("span",{id:"my-element",onClick:function(){return function(e){if("/ActiveWorkout"===a.location.pathname&&e){var i=document.createElement("input");i.pattern="[0-9]*",i.inputmode="decimal",i.style.position="absolute",i.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",i.style.left=e.offsetLeft+"px",i.style.height=0,i.style.opacity=0,document.body.appendChild(i),i.focus(),i.addEventListener("input",(function(){if(""===i.value){var e=k()(o);e.excirceses[t].sets[s].resistence=0,n(e)}else{var c=k()(o);c.excirceses[t].sets[s].resistence=i.value,n(c)}}),{preventScroll:!0}),a.push("/ActiveWorkout")}}(r)},children:[" ",c.resistence," "]}),c.resistencePrefix]})}),Object(i.jsx)(p.a,{item:!0,xs:6,children:Object(i.jsxs)(h.a,{className:j.description,variant:"subtitle2",children:[Object(i.jsxs)("span",{id:"my-element",onClick:function(){return function(e){if("/ActiveWorkout"===a.location.pathname){if(document.getElementsByTagName("input")&&(document.body.getElementsByTagName("input").innerHTML=""),e){var i=document.createElement("input");i.pattern="[0-9]*",i.inputmode="decimal",i.style.position="absolute",i.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",i.style.left=e.offsetLeft+"px",i.style.height=0,i.style.opacity=0,document.body.appendChild(i),i.id="temp",i.focus(),i.addEventListener("input",(function(){if(""===i.value){var e=k()(o);e.excirceses[t].sets[s].duration=0,n(e)}else{var c=k()(o);c.excirceses[t].sets[s].duration=i.value,n(c)}})),i.addEventListener("focusout",(function(){document.body.removeChild(i)}))}a.push("/ActiveWorkout")}}(r)},children:[" ",c.duration," "]}),c.durationPrefix]})})]})})},W=s(129),y=s.n(W),N=Object(v.a)((function(e){return{success:{backgroundColor:"#4F8A10",color:"white"},fail:{backgroundColor:"#D8000C",color:"white"},paper:{paddingY:e.spacing(2),margin:"auto",marginTop:"20px",maxHeight:"41px"},open:{backgroundColor:"#C0C0C0"},description:{margin:"10px 0 10px 0",textAlign:"center"}}})),C=function(e){e.set,e.workouts,e.workout,e.exercise,e.setWorkouts;var t=e.newWorkout,s=e.excerciseIndex,c=e.setNewWorkout,o=N(),n=Object(b.f)(),r=k()(t);return Object(i.jsx)(g.a,{onClick:function(){console.log(r.excirceses[s]),r.excirceses[s].sets.push({duration:r.excirceses[s].sets[0].duration,resistence:r.excirceses[s].sets[0].resistence,durationPrefix:r.excirceses[s].sets[0].durationPrefix,resistencePrefix:r.excirceses[s].sets[0].resistencePrefix,status:"open"}),c(r),n.push("/ActiveWorkout")},variant:"outlined",square:!1,className:"".concat(o.paper," ").concat(o.open),children:Object(i.jsx)(p.a,{container:!0,direction:"row",children:Object(i.jsx)(p.a,{item:!0,xs:12,children:Object(i.jsx)(h.a,{className:o.description,gutterBottom:!0,variant:"subtitle2",children:Object(i.jsx)(y.a,{style:{height:"20px",inline:!1},inline:"true"})})})})})},A=s(130),T=s.n(A),I=Object(v.a)((function(e){return{success:{backgroundColor:"#4F8A10",color:"white"},fail:{backgroundColor:"#D8000C",color:"white"},paper:{paddingY:e.spacing(2),margin:"auto",marginTop:"20px",maxHeight:"41px"},open:{backgroundColor:"#C0C0C0"},description:{margin:"10px 0 10px 0",textAlign:"center"}}})),E=function(e){e.set,e.workouts,e.workout,e.exercise,e.setWorkouts;var t=e.newWorkout,s=e.excerciseIndex,c=e.setNewWorkout,o=I(),n=Object(b.f)(),r=k()(t);return Object(i.jsx)(g.a,{onClick:function(){console.log(r.excirceses[s]),r.excirceses[s].sets.length>1&&r.excirceses[s].sets.pop(),c(r),n.push("/ActiveWorkout")},variant:"outlined",square:!1,className:"".concat(o.paper," ").concat(o.open),children:Object(i.jsx)(p.a,{container:!0,direction:"row",children:Object(i.jsx)(p.a,{item:!0,xs:12,children:Object(i.jsx)(h.a,{className:o.description,gutterBottom:!0,variant:"subtitle2",children:Object(i.jsx)(T.a,{style:{height:"20px",inline:!1},inline:"true"})})})})})},F=Object(v.a)((function(e){return{setWrapper:{paddingBottom:"30px"},exercise:{marginTop:"5px",paddingTop:"10px"},exerciseName:{textAlign:"center",margin:"auto"},root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:0}},success:{backgroundColor:"#4F8A10",color:"white"},fail:{backgroundColor:"#D8000C",color:"white"},changeset:{paddingLeft:"60px",paddingRight:"60px"}}})),L=function(e){var t=e.workoutIndex,s=e.excerciseIndex,c=e.value,o=e.setValue,n=e.exercise,r=e.workout,j=e.setWorkouts,a=e.workouts,d=e.newWorkout,x=e.setNewWorkout,u=(e.newWorkoutExerciseIndex,n.sets),l=F(),O=Object(b.f)(),v=document.getElementById("my-element");return Object(i.jsxs)(p.a,{className:l.exercise,container:!0,children:[Object(i.jsx)(p.a,{xs:4,item:!0,className:l.exerciseName,children:Object(i.jsx)(h.a,{variant:"body2",color:"textSecondary",children:n.name})}),Object(i.jsxs)(p.a,{className:l.setWrapper,container:!0,alignItems:"center",justify:"center",children:[u.map((function(e,u){return Object(i.jsx)(p.a,{item:!0,xs:11,children:Object(i.jsx)(f,{myElement:v,setNewWorkout:x,workoutIndex:t,excerciseIndex:s,setIndex:u,newWorkout:d,value:c,setValue:o,set:e,workout:r,workouts:a,setWorkouts:j,exercise:n})},u)})),"/"!==O.location.pathname&&Object(i.jsx)(p.a,{xs:11,item:!0,children:Object(i.jsxs)(p.a,{container:!0,direction:"row",children:[Object(i.jsx)(p.a,{xs:6,item:!0,className:l.changeset,children:Object(i.jsx)(E,{newWorkout:d,setNewWorkout:x,workoutIndex:t,excerciseIndex:s,workout:r,workouts:a,setWorkouts:j,exercise:n},n.exerciseID)}),Object(i.jsx)(p.a,{xs:6,item:!0,className:l.changeset,children:Object(i.jsx)(C,{newWorkout:d,setNewWorkout:x,workoutIndex:t,excerciseIndex:s,workout:r,workouts:a,setWorkouts:j,exercise:n},n.exerciseID)})]})})]})]})},S=s(298),B=s(301),Y=s(302),D=s(136),R=s(76),P=s(299),M=Object(D.a)({palette:{mode:"dark"}}),G=(Object(D.a)({palette:{mode:"light"}}),Object(v.a)((function(e){return{root:{flexGrow:1,margin:0},paper:{paddingY:e.spacing(2),marginX:0},workoutName:{textAlign:"center"},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"},timer:{textAlign:"center"}}}))),z=Object(R.a)(B.a)((function(e){var t=e.theme;return Object(O.a)(Object(O.a)({},t.typography.body2),{},{textAlign:"left",padding:20,color:t.palette.text.secondary,height:80,lineHeight:"10px"})})),H=function(e){e.workoutIndex,e.value,e.setValue;var t=e.workout,s=e.workouts,c=(e.setWorkouts,e.setTodos,e.key,e.setNewWorkout,G(),t.excirceses,Object(b.f)());Object(l.a)(s);return Object(i.jsx)(S.a,{container:!0,children:[M].map((function(e,t){return Object(i.jsx)(S.a,{item:!0,xs:12,children:Object(i.jsx)(P.a,{theme:e,children:Object(i.jsx)(Y.a,{sx:{p:2,bgcolor:"background.default",display:"grid",gridTemplateColumns:{md:"2fr 2fr",xs:"2fr 2fr"},gap:2},children:[{title:"TRE I RAD",elevation:8},{title:"BREAKOUT",elevation:8},{title:"TETRIS",elevation:8},{title:"MINESWEEPER",elevation:8},{title:"SOLITAIRE",elevation:8}].map((function(e,t){return Object(i.jsx)(z,{id:"game"+t,elevation:e.elevation,onClick:function(){return function(e){console.log(e),"TRE I RAD"==e.title&&c.push("/newWorkout"),"BREAKOUT"==e.title&&c.push("/Breakout"),"TETRIS"==e.title&&c.push("/Tetris"),"MINESWEEPER"==e.title&&c.push("/Minesweeper"),"SOLITAIRE"==e.title&&c.push("/Solitaire")}(e)},children:Object(i.jsx)("a",{children:e.title})},t)}))})})},t)}))})},V=function(e){var t=e.value,s=e.setValue,c=e.workouts,o=e.setWorkouts,n=e.setNewWorkout;return Object(i.jsx)("div",{style:{marginTop:"70px"},id:"wolist",children:["game"].map((function(e,r){return Object(i.jsx)("div",{children:Object(i.jsx)(H,{workoutIndex:r,value:t,setValue:s,setNewWorkout:n,setWorkouts:o,workouts:c,workout:e})},r)}))})},q=s(292),J=function(e){var t=e.setStatus,s=(e.status,e.workouts),o=e.setWorkouts,n=(e.newWorkout,e.setNewWorkout);return Object(c.useEffect)((function(){t("Start workout")}),[t]),Object(i.jsx)(q.a,{style:{width:"100%",padding:"0",marginBottom:"120px",marginTop:"70px"},children:Object(i.jsx)(V,{workouts:s,setWorkouts:o,setNewWorkout:n},s._id)})},K=(s(116),Object(v.a)((function(e){return{success:{backgroundColor:"#4F8A10",color:"white"},fail:{backgroundColor:"#D8000C",color:"white"},paper:{paddingY:e.spacing(2),margin:"auto",marginTop:"20px"},open:{backgroundColor:"#F5F5F5"},description:{margin:"20px 0 20px 0"},headline:{marginY:"10px"},button:{textAlign:"center",marginTop:"30px"},Lowerbody:{borderColor:"#3f51b5"}}}))),U=function(e){e.workouts,e.setWorkouts,e.newWorkout,e.setNewWorkout,e.newWorkoutList,e.setNewWorkoutList,K();return Object(i.jsx)(q.a,{style:{padding:"0",marginTop:"56px"},children:Object(i.jsxs)("section",{id:"game",children:[Object(i.jsxs)("div",{id:"tic",children:[Object(i.jsx)("canvas",{id:"canvas1",width:"75",height:"75"}),Object(i.jsx)("canvas",{id:"canvas2",width:"75",height:"75"}),Object(i.jsx)("canvas",{id:"canvas3",width:"75",height:"75"}),Object(i.jsx)("br",{}),Object(i.jsx)("canvas",{id:"canvas4",width:"75",height:"75"}),Object(i.jsx)("canvas",{id:"canvas5",width:"75",height:"75"}),Object(i.jsx)("canvas",{id:"canvas6",width:"75",height:"75"}),Object(i.jsx)("br",{}),Object(i.jsx)("canvas",{id:"canvas7",width:"75",height:"75"}),Object(i.jsx)("canvas",{id:"canvas8",width:"75",height:"75"}),Object(i.jsx)("canvas",{id:"canvas9",width:"75",height:"75"})]}),Object(i.jsxs)("div",{id:"rules",children:[Object(i.jsx)("h2",{children:"Rules"}),Object(i.jsx)("p",{children:"Each player has to take turns"}),Object(i.jsx)("p",{children:"The player who fills 3 consecutive rows first wins"}),Object(i.jsx)("center",{children:Object(i.jsx)("button",{id:"new321",children:"NEW GAME"})})]})]})})},X=Object(v.a)((function(e){return{success:{backgroundColor:"#4F8A10",color:"white"},fail:{backgroundColor:"#D8000C",color:"white"},paper:{paddingY:e.spacing(2),margin:"auto",marginTop:"20px"},open:{backgroundColor:"#F5F5F5"},description:{margin:"20px 0 20px 0"},headline:{marginY:"10px"},button:{textAlign:"center",marginTop:"30px"},Lowerbody:{borderColor:"#3f51b5"}}})),_=function(e){e.workouts,e.setWorkouts,e.newWorkout,e.setNewWorkout,e.newWorkoutList,e.setNewWorkoutList,X();return Object(i.jsx)(q.a,{style:{padding:"0",marginTop:"56px"},children:Object(i.jsx)("section",{id:"game",children:Object(i.jsx)("canvas",{id:"breakoutCanvas",width:"320",height:"240",style:{position:"relative"}})})})},Q=(s(229),s(132)),Z=s.n(Q),$=s(135),ee=s.n($),te=s(134),se=s.n(te),ie=s(133),ce=s.n(ie),oe=Object(v.a)((function(e){return{success:{backgroundColor:"#4F8A10",color:"white"},fail:{backgroundColor:"#D8000C",color:"white"},paper:{paddingY:e.spacing(2),margin:"auto",marginTop:"20px"},open:{backgroundColor:"#F5F5F5"},description:{margin:"20px 0 20px 0"},headline:{marginY:"10px"},button:{textAlign:"center",marginTop:"30px"},Lowerbody:{borderColor:"#3f51b5"}}})),ne=function(e){e.workouts,e.setWorkouts,e.newWorkout,e.setNewWorkout,e.newWorkoutList,e.setNewWorkoutList,oe();return Object(i.jsx)(q.a,{style:{padding:"0",marginTop:"56px"},children:Object(i.jsxs)("section",{id:"game",children:[Object(i.jsxs)("h3",{style:{color:"white",textAlign:"right",padding:"5px"},children:["Score:",Object(i.jsx)("span",{id:"score",children:"0"})]}),Object(i.jsxs)("div",{className:"tcontainer",id:"tetris",children:[Object(i.jsxs)("div",{className:"tgrid",id:"tgrid",children:[Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{className:"taken"}),Object(i.jsx)("div",{className:"taken"}),Object(i.jsx)("div",{className:"taken"}),Object(i.jsx)("div",{className:"taken"}),Object(i.jsx)("div",{className:"taken"}),Object(i.jsx)("div",{className:"taken"}),Object(i.jsx)("div",{className:"taken"}),Object(i.jsx)("div",{className:"taken"}),Object(i.jsx)("div",{className:"taken"}),Object(i.jsx)("div",{className:"taken"})]}),Object(i.jsxs)("div",{className:"tmini-grid",children:[Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("button",{id:"start-button",children:"Pause"}),Object(i.jsx)(Z.a,{id:"tetris-up",style:{height:"70px",width:"100%",inline:!1,color:"white"},fontSize:"smal",inline:"false"}),Object(i.jsx)(ce.a,{id:"tetris-back",style:{height:"70px",width:"100%",inline:!1,color:"white"},fontSize:"smal",inline:"false"}),Object(i.jsx)(se.a,{id:"tetris-forward",style:{height:"70px",width:"100%",inline:!1,color:"white"},fontSize:"smal",inline:"false"}),Object(i.jsx)(ee.a,{id:"tetris-down",style:{height:"70px",width:"100%",inline:!1,color:"white"},fontSize:"smal",inline:"false"})]})]})]})})},re=(s(230),Object(v.a)((function(e){return{success:{backgroundColor:"#4F8A10",color:"white"},fail:{backgroundColor:"#D8000C",color:"white"},paper:{paddingY:e.spacing(2),margin:"auto",marginTop:"20px"},open:{backgroundColor:"#F5F5F5"},description:{margin:"20px 0 20px 0"},headline:{marginY:"10px"},button:{textAlign:"center",marginTop:"30px"},Lowerbody:{borderColor:"#3f51b5"}}}))),je=function(e){e.workouts,e.setWorkouts,e.newWorkout,e.setNewWorkout,e.newWorkoutList,e.setNewWorkoutList,re();return Object(i.jsx)(q.a,{style:{padding:"0",marginTop:"56px"},children:Object(i.jsx)("section",{id:"game",children:Object(i.jsxs)("div",{className:"mcontainer",id:"mcontainer",children:[Object(i.jsx)("div",{className:"grid"}),Object(i.jsxs)("div",{children:["Flags left: ",Object(i.jsx)("span",{id:"flags-left"})]}),Object(i.jsx)("div",{id:"result"})]})})})},ae=Object(v.a)((function(e){return{success:{backgroundColor:"#4F8A10",color:"white"},fail:{backgroundColor:"#D8000C",color:"white"},paper:{paddingY:e.spacing(2),margin:"auto",marginTop:"20px"},open:{backgroundColor:"#F5F5F5"},description:{margin:"20px 0 20px 0"},headline:{marginY:"10px"},button:{textAlign:"center",marginTop:"30px"},Lowerbody:{borderColor:"#3f51b5"}}})),de=function(e){e.workouts,e.setWorkouts,e.newWorkout,e.setNewWorkout,e.newWorkoutList,e.setNewWorkoutList,ae();return Object(i.jsx)(q.a,{style:{padding:"0",marginTop:"56px"},children:Object(i.jsx)("section",{id:"game",children:Object(i.jsx)("div",{id:"spidersolitaire"})})})},xe=s(79),ue=s.n(xe),be=s(293),le=s(294),Oe=s(295),ve=Object(v.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},timer:{textAlign:"right"},button:{textAlign:"end",color:"white"}}})),pe=function(e){var t=e.AppStatus,s=e.putWorkouts,c=ve(),o=Object(b.f)();return Object(i.jsx)(be.a,{position:"fixed",children:Object(i.jsx)(le.a,{children:Object(i.jsx)(p.a,{container:!0,children:Object(i.jsxs)(p.a,{container:!0,direction:"row",children:[Object(i.jsx)(p.a,{item:!0,xs:6,children:Object(i.jsx)(h.a,{onClick:function(){o.push("/")},variant:"subtitle1",className:c.title,children:"Enkla spel"})}),Object(i.jsx)(p.a,{item:!0,xs:6,className:c.button,children:Object(i.jsx)(Oe.a,{onClick:s,disabled:!t,size:"small",variant:"contained",children:"Save changes"})})]})})})})},he=(Object(v.a)((function(e){return{root:{flexGrow:1},menuButton:{},title:{flexGrow:1},buttom:{width:"100%",textAlign:"center",height:"56px",margin:0,padding:0},appBar:{height:"auto",top:"auto",bottom:0,margin:0,paddingBottom:"30px"},toolbar:{height:"40px",textAlign:"center",margin:0,padding:0}}})),function(){var e=Object(c.useState)(1),t=Object(x.a)(e,2),s=t[0],n=t[1];o.a.useEffect((function(){var e=s>0&&setInterval((function(){n(s+1)}),1e3);return function(){return clearInterval(e)}}),[s]);return Object(i.jsx)("span",{children:function(e){var t=parseInt(e,10),s=Math.floor(t/3600),i=Math.floor((t-3600*s)/60),c=t-3600*s-60*i;return s<10&&(s="0"+s),i<10&&(i="0"+i),c<10&&(c="0"+c),s+":"+i+":"+c}(s)})}),ge=Object(v.a)((function(e){return{success:{backgroundColor:"#4F8A10",color:"white"},fail:{backgroundColor:"#D8000C",color:"white"},paper:{margin:"60px 10px 10px 10px"},open:{backgroundColor:"#F5F5F5"},description:{margin:"30px 0 30px 0",textAlign:"center"},container:{padding:0,width:"100%",alignItems:"center",justifyContent:"center"}}})),me=function(e){var t=e.setStatus,s=(e.status,e.newWorkout),o=e.setNewWorkout,n=e.setWorkouts;Object(c.useEffect)((function(){t("Save")}),[t]);var r=[s],j=s.excirceses,a=ge();return Object(i.jsxs)(p.a,{container:!0,direction:"column",alignItems:"center",justify:"center",style:{width:"100%",padding:"0",marginBottom:"120px"},children:[Object(i.jsx)(p.a,{container:!0,children:Object(i.jsx)(p.a,{xs:12,item:!0,className:a.exerciseName,children:Object(i.jsx)(g.a,{variant:"outlined",className:a.paper,children:Object(i.jsxs)(p.a,{container:!0,children:[Object(i.jsx)(p.a,{item:!0,xs:6,style:{padding:"10px"},children:s.name}),Object(i.jsx)(p.a,{item:!0,xs:6,style:{textAlign:"right",padding:"10px"},children:Object(i.jsx)(he,{})})]})})})}),j.map((function(e,t){return Object(i.jsx)(L,{workoutIndex:0,newWorkout:s,setNewWorkout:o,workout:s,workouts:r,excirceses:j,exercise:e,setWorkouts:n,excerciseIndex:t},t)}))]})};function ke(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),s=t[0],o=t[1],n=Object(c.useState)(!1),r=Object(x.a)(n,2),j=r[0],l=r[1],O=Object(c.useState)({}),v=Object(x.a)(O,2),p=v[0],h=v[1],g=Object(c.useState)([]),m=Object(x.a)(g,2),k=m[0],w=m[1],f=Object(c.useState)(!1),W=Object(x.a)(f,2),y=W[0],N=W[1],C=Object(c.useState)("start workout"),A=Object(x.a)(C,2),T=A[0],I=A[1],E=Object(c.useCallback)(Object(d.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!1),e.next=3,ue()({method:"put",url:"https://api-mygym.herokuapp.com/schema/5ff0601c4542a80429c9c2f4",withCredentials:!0,data:{workouts:s}});case 3:case"end":return e.stop()}}),e)}))),[s]);Object(c.useEffect)((function(){F(),L()}),[]),Object(c.useEffect)((function(){N(!0)}),[s]);var F=function(){var e=Object(d.a)(a.a.mark((function e(){var t,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue()({method:"get",url:"https://api-mygym.herokuapp.com/schema",withCredentials:!0});case 2:t=e.sent,s=t.data,o(s[0].workouts);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(a.a.mark((function e(){var t,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue()({method:"get",url:"https://api-mygym.herokuapp.com/workout",withCredentials:!0});case 2:t=e.sent,s=t.data,w(s);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsx)(u.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(pe,{activeWorkout:j,setActiveWorkout:l,putWorkouts:E,AppStatus:y}),Object(i.jsxs)(b.c,{children:[Object(i.jsx)(b.a,{path:"/",exact:!0,component:function(){return Object(i.jsx)(J,{status:T,setStatus:I,activeWorkout:j,setActiveWorkout:l,workouts:s,setWorkouts:o,newWorkout:p})}}),Object(i.jsx)(b.a,{path:"/ActiveWorkout",exact:!0,component:function(){return Object(i.jsx)(me,{status:T,setStatus:I,activeWorkout:j,setActiveWorkout:l,workouts:s,setWorkouts:o,newWorkout:p,setNewWorkout:h})}}),Object(i.jsx)(b.a,{path:"/NewWorkout",exact:!0,component:function(){return Object(i.jsx)(U,{style:{marginTop:"70px"},workouts:s,setWorkouts:o,newWorkout:p,setNewWorkout:h,newWorkoutList:k,setNewWorkoutList:w})}}),Object(i.jsx)(b.a,{path:"/Breakout",exact:!0,component:function(){return Object(i.jsx)(_,{style:{marginTop:"70px"},workouts:s,setWorkouts:o,newWorkout:p,setNewWorkout:h,newWorkoutList:k,setNewWorkoutList:w})}}),Object(i.jsx)(b.a,{path:"/Tetris",exact:!0,component:function(){return Object(i.jsx)(ne,{style:{marginTop:"70px"},workouts:s,setWorkouts:o,newWorkout:p,setNewWorkout:h,newWorkoutList:k,setNewWorkoutList:w})}}),Object(i.jsx)(b.a,{path:"/Minesweeper",exact:!0,component:function(){return Object(i.jsx)(je,{style:{marginTop:"70px"},workouts:s,setWorkouts:o,newWorkout:p,setNewWorkout:h,newWorkoutList:k,setNewWorkoutList:w})}}),Object(i.jsx)(b.a,{path:"/Solitaire",exact:!0,component:function(){return Object(i.jsx)(de,{style:{marginTop:"70px"},workouts:s,setWorkouts:o,newWorkout:p,setNewWorkout:h,newWorkoutList:k,setNewWorkoutList:w})}})]})]})})}var we=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,303)).then((function(t){var s=t.getCLS,i=t.getFID,c=t.getFCP,o=t.getLCP,n=t.getTTFB;s(e),i(e),c(e),o(e),n(e)}))};r.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(ke,{})}),document.getElementById("root")),we()}},[[249,1,2]]]);
//# sourceMappingURL=main.1d788501.chunk.js.map