(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(7),s=a(1),i=a.n(s),r=a(16),c=a.n(r),o=(a(83),a(61)),l=a(62),d=a(63),h=a(42),j=a(68),u=a(67),m=a(150),g=a(149),b=a(140),p=a(144),x=a(138),O=a(148),f=a(64),y=a.n(f),C=a(102),v=a(57);v.a.initializeApp({apiKey:"AIzaSyDYdwZc1XvhmTedGOB2ALV1D6HjzqeQfrw",authDomain:"secrets-91dd7.firebaseapp.com",projectId:"secrets-91dd7"});var w=v.a,S=a(139),W=a(146),T=a(141),A=a(142),D=a(147),I=a(143);function k(){return Object(n.jsxs)(C.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(x.a,{color:"inherit",href:"https://material-ui.com/",children:"Tandon-Kulkarni"})," ",(new Date).getFullYear(),"."]})}var E=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).createUser=function(){n.setState({creating:!0});var e=w.firestore(),t=Object(h.a)(n);w.auth().createUserWithEmailAndPassword(n.state.email,n.state.password).then((function(a){e.collection("users").doc(a.uid).set({desire:n.state.desire,name:n.state.name,person:"",personDesire:"",email:n.state.email}).then((function(){t.setState({creating:!1})})).catch((function(e){console.error("Error writing document: ",e)}))})).catch((function(e){e.code,e.message}))},n.login=function(){n.setState({creating:!0});var e=Object(h.a)(n);w.auth().signInWithEmailAndPassword(n.state.email,n.state.password).then((function(t){e.setState({creating:!1})})).catch((function(e){e.code,e.message}))},n.handleChange=function(e){n.setState(Object(o.a)({},e.target.name,e.target.value))},n.state={email:"",password:"",authed:!1,desire:"",creating:!1,drawState:"",name:"",userData:""},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=w.firestore();w.auth().onAuthStateChanged((function(a){if(a){console.log("hihihi",a.email);var n=null;Promise.all([t.collection("users").where("email","==",a.email).get().then((function(e){e.forEach((function(e){e.exists&&(console.log("EXITS"),n=e.data(),console.log("THE USER",a))}))})).catch((function(e){console.log("Error getting documents: ",e)}))]).then((function(){e.setState({authed:!0}),e.setState({userData:n})}))}})),t.collection("commands").doc("commandCenter").onSnapshot((function(t){e.setState({drawState:t.data().state})}))}},{key:"render",value:function(){return!this.state.authed||this.state.creating?Object(n.jsxs)(S.a,{component:"main",maxWidth:"xs",style:{marginTop:"200px"},children:[Object(n.jsx)(b.a,{}),Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(y.a,{})}),Object(n.jsx)(C.a,{component:"h1",variant:"h5",children:"Secret Santa"}),Object(n.jsx)(W.a.Container,{id:"left-tabs-example",defaultActiveKey:"first",style:{marginTop:"25px"},children:Object(n.jsxs)(T.a,{style:{marginTop:"35px"},children:[Object(n.jsx)(A.a,{sm:3,children:Object(n.jsxs)(D.a,{variant:"pills",className:"flex-column",children:[Object(n.jsx)(D.a.Item,{children:Object(n.jsx)(D.a.Link,{eventKey:"first",children:"Create Account"})}),Object(n.jsx)(D.a.Item,{children:Object(n.jsx)(D.a.Link,{eventKey:"second",children:"Log In"})})]})}),Object(n.jsx)(A.a,{sm:9,children:Object(n.jsxs)(W.a.Content,{children:[Object(n.jsx)(W.a.Pane,{eventKey:"first",children:Object(n.jsxs)("form",{noValidate:!0,children:[Object(n.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"name",autoFocus:!0,onChange:this.handleChange}),Object(n.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:this.handleChange}),Object(n.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password (10+ chars)",type:"password",id:"password",autoComplete:"current-password",onChange:this.handleChange}),Object(n.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"desire",label:"What You Want/ Do Not Want",name:"desire",autoComplete:"email",autoFocus:!0,onChange:this.handleChange}),Object(n.jsx)(T.a,{style:{marginTop:"25px"},children:Object(n.jsx)(g.a,{fullWidth:!0,variant:"contained",color:"secondary",onClick:this.createUser,children:this.state.creating?"Creating":"Create Account"})})]})}),Object(n.jsx)(W.a.Pane,{eventKey:"second",children:Object(n.jsxs)("form",{noValidate:!0,children:[Object(n.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:this.handleChange}),Object(n.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:this.handleChange}),Object(n.jsx)(T.a,{style:{marginTop:"25px"},children:Object(n.jsx)(g.a,{fullWidth:!0,variant:"contained",color:"secondary",onClick:this.login,children:this.state.creating?"Logging In":"Log In"})})]})})]})})]})})]}),Object(n.jsx)(O.a,{mt:8,children:Object(n.jsx)(k,{})})]}):Object(n.jsxs)(S.a,{className:"justify-content-center",style:{justifyContent:"center",textAlign:"center",marginTop:"300px"},children:[Object(n.jsx)(I.a,{color:"secondary"}),"wait"==this.state.drawState&&Object(n.jsx)("h2",{children:"The drawing has not started."}),"started"==this.state.drawState&&Object(n.jsx)("h2",{children:"Pairing..."}),"released"==this.state.drawState&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(T.a,{className:"justify-content-center",style:{marginTop:"20px"},children:Object(n.jsx)("h2",{children:"Here's who you got. Sucks to suck."})}),Object(n.jsx)(T.a,{className:"justify-content-center",children:Object(n.jsxs)("h5",{children:["Person : ",this.state.userData.person]})}),Object(n.jsx)(T.a,{className:"justify-content-center",children:Object(n.jsxs)("h5",{children:["What They Want : ",this.state.userData.personDesire]})})]})]})}}]),a}(i.a.Component);var P=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)(E,{})})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,153)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root")),F()},83:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.16c30ac8.chunk.js.map