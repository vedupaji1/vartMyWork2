(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{37:function(e,t,a){},50:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(38),i=a.n(n),c=(a(50),a(10)),l=a(19),o=a(0),r=function(){var e=Object(s.useContext)(S),t=function(e){document.getElementsByTagName("li")[e].style="font-size: 2.06rem;margin-right: 0;\n        background-color: #20232a;\n        color: #61dafb;"},a=function(e){var t;t=1===e?"font-size: 1.8rem;\n            margin-right: 1.1rem;\n            background-color: white;\n            color: black;":"font-size: 1.8rem;\n            margin-right: 1rem;\n            background-color: white;\n            color: black;",document.getElementsByTagName("li")[e].style=t};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"navbarHead",children:Object(o.jsx)("div",{className:"navbarHeadChild",children:Object(o.jsx)("div",{className:"navbarlists",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)(l.b,{to:!0===e.isActive?"/":"/addWork",children:Object(o.jsx)("li",{onMouseOver:function(){return t(0)},onMouseOut:function(){return a(0)},children:"My Work"})}),Object(o.jsx)(l.b,{to:"/addWork",children:Object(o.jsx)("li",{style:{marginRight:"1.1rem"},onMouseOver:function(){return t(1)},onMouseOut:function(){return a(1)},children:"Add Work"})}),Object(o.jsx)(l.b,{to:"/user",children:Object(o.jsx)("li",{onMouseOver:function(){return t(2)},onMouseOut:function(){return a(2)},children:"User"})})]})})})})})},d=a(8),m=a(30),u=a(34),j=a.n(u),b=a(41),h=function(e){return new Promise((function(t,a){setTimeout((function(){t()}),e)}))},g=function(e){var t=Object(s.useState)({valid:!0,formComplete:!1,message:"Form Is Empty"}),a=Object(c.a)(t,2),n=a[0],i=a[1],l=Object(s.useContext)(S),r=function(t){var a=JSON.parse(localStorage.getItem("VARtMyWorkData"));null===a||0===a.length?(t.id=1,localStorage.setItem("VARtMyWorkData",JSON.stringify([t]))):(t.id=a[a.length-1].id+1,a.push(t),localStorage.setItem("VARtMyWorkData",JSON.stringify(a))),a=JSON.parse(localStorage.getItem("VARtMyWorkData")),e.addNewTodoFunction()},d=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,s,c,o,d,m,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.changeNavFunc(!1),""!==(a={taskName:document.getElementsByClassName("taskNameInput")[0].value.trim(),taskDetails:document.getElementById("taskDesc").value,taskTime:document.getElementById("taskTime").value,taskCompleted:!1,taskExpired:!1}).taskName&&""!==a.taskDetails&&""!==a.taskTime){e.next=7;break}s={valid:!1,formComplete:n.formComplete,message:n.message},i(s),e.next=33;break;case 7:if(c=new Date,o=new Date(a.taskTime),!(c.getTime()>=o.getTime())){e.next=14;break}d={valid:!1,formComplete:n.formComplete,message:"Invalid Date"},i(d),e.next=33;break;case 14:if(!(a.taskName.length>32)){e.next=19;break}m={valid:!1,formComplete:n.formComplete,message:"Maximum Length Of Task Name Is 32"},i(m),e.next=33;break;case 19:return i({valid:!0,formComplete:!0,message:"Todo Created"}),e.next=23,h(2e3);case 23:document.getElementsByClassName("taskNameInput")[0].value="",document.getElementById("taskDesc").value="",document.getElementById("taskTime").value="",document.getElementById("taskDesc").style.height="3rem",i({valid:!0,formComplete:!1,message:"Form Is Empty"}),u=new Date(a.taskTime),a.taskTime=u.getTime(),r(a),l.changeNavFunc(!0);case 33:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"getDetailsMainDiv",children:Object(o.jsxs)("div",{className:"getDetailsMainChid",children:[Object(o.jsx)("div",{className:"createTodo",children:Object(o.jsxs)("div",{className:"getDetailsText",children:[" ",Object(o.jsx)("span",{children:"Create Todo"})]})}),!1===n.valid?Object(o.jsxs)("div",{className:"warningDiv",children:[" ",n.message]}):!0===n.formComplete?Object(o.jsxs)("div",{style:{backgroundColor:"#c3ffc3",color:"#3c3c3c"},className:"warningDiv",children:[" ",n.message]}):Object(o.jsx)(o.Fragment,{}),Object(o.jsxs)("div",{className:"getDetailsMainDivChild",children:[Object(o.jsx)("input",{type:"text",className:"taskNameInput",placeholder:"Task Name"}),Object(o.jsx)("br",{}),Object(o.jsx)("textarea",{onChange:function(){document.getElementById("taskDesc").style.height="auto";var e=document.getElementById("taskDesc").scrollHeight;document.getElementById("taskDesc").style.height=e-12+"px"},name:"taskDesc",id:"taskDesc",placeholder:"Task Description"}),Object(o.jsx)("input",{type:"datetime-local",name:"taskTime",id:"taskTime"}),Object(o.jsx)("button",{onMouseOver:function(){document.getElementsByClassName("dataSubmit")[0].style.backgroundColor="#1955a4"},onMouseOut:function(){document.getElementsByClassName("dataSubmit")[0].style.backgroundColor="#1b61bf"},onClick:function(e){return d(e.target.value,!0)},className:"dataSubmit",children:"Create Todo"})]})]})})})},O=function(e){var t=new Array(e.todoData.length).fill(null),a=Object(s.useState)(t),n=Object(c.a)(a,2),i=n[0],l=n[1],r=function(t){var a=i.slice();if(null==a[t]){var s,n=new Date(e.todoData[t].taskTime),c=new Date;c.getDate()===n.getDate()&&c.getMonth()===n.getMonth()&&c.getFullYear()===n.getFullYear()?s=n.getHours()+":"+n.getMinutes():(s=n.getHours()+":"+n.getMinutes()+"     "+n.getDate()+"/"+n.getMonth()+"/"+n.getFullYear(),document.getElementsByClassName("showTodoTime")[t].style.width="15rem"),a[t]=s}else a[t]=null,150===document.getElementsByClassName("showTodoTime")[t].clientWidth&&(document.getElementsByClassName("showTodoTime")[t].style.width="10rem");l(a)},d=setInterval((function(){for(var t=0;t<e.todoData.length;t++){var a=new Date(e.todoData[t].taskTime),s=new Date;!1===e.todoData[t].taskCompleted&&!1===e.todoData[t].taskExpired&&a.getTime()<s.getTime()&&(e.taskExpiredFunc(t),clearInterval(d))}}),6e4);return Object(o.jsx)(o.Fragment,{children:e.todoData.map((function(t,a){return Object(o.jsxs)("div",{className:"bodyDivChild",children:[Object(o.jsxs)("div",{className:"todoModifier",children:[Object(o.jsx)("div",{onClick:function(){return e.taskCompleteFunc(a)},style:!1===t.taskCompleted?{visibility:"visible"}:{visibility:"hidden"},className:"todoDone todoModifierButtons",children:Object(o.jsx)("span",{children:"Complete"})}),Object(o.jsx)("div",{onClick:function(){return function(t){e.taskDeleteFunc(t);var a=i;document.getElementsByClassName("todoModifier")[t].style.opacity="0",document.getElementsByClassName("todoModifier")[t].style.visibility="hidden",document.getElementsByClassName("transIcon")[t].style.marginTop="-2rem",a.splice(t,1),l(a)}(a)},className:"todoDelete todoModifierButtons",children:Object(o.jsx)("span",{children:"Delete"})})]}),Object(o.jsxs)("div",{className:"todoTaskBar",children:[Object(o.jsx)("div",{className:"todoTitleDiv",children:Object(o.jsx)("span",{children:t.taskName})}),Object(o.jsxs)("div",{className:"taskCompletedSign",children:[Object(o.jsx)("i",{style:!0===t.taskCompleted?{display:"block",color:"#04AA6D"}:{display:"none",color:"#04AA6D"},className:"fa fa-check","aria-hidden":"true"}),Object(o.jsx)("i",{style:!0===t.taskExpired?{display:"block",color:"red"}:{display:"none",color:"red"},className:"fa fa-exclamation-circle","aria-hidden":"true"})]}),Object(o.jsx)("div",{onMouseOver:function(){return r(a)},onMouseOut:function(){return r(a)},className:"showTodoTime",children:Object(o.jsx)("span",{children:null==i[a]?"Time":i[a]})}),Object(o.jsx)("div",{className:"iconHead",children:Object(o.jsxs)("div",{onClick:function(){return function(e){"-1rem"===document.getElementsByClassName("transIcon")[e].style.marginTop?(document.getElementsByClassName("transIcon")[e].style.marginTop="-2rem",document.getElementsByClassName("todoModifier")[e].style.opacity="0",document.getElementsByClassName("todoModifier")[e].style.visibility="hidden"):(document.getElementsByClassName("transIcon")[e].style.marginTop="-1rem",document.getElementsByClassName("todoModifier")[e].style.visibility="visible",document.getElementsByClassName("todoModifier")[e].style.opacity="1")}(a)},className:"iconChild",children:[Object(o.jsx)("i",{className:"fa fa-angle-down","aria-hidden":"true"}),Object(o.jsx)("i",{className:"fa fa-angle-down transIcon","aria-hidden":"true"})]})})]}),Object(o.jsx)("div",{className:"todoTaskDescription",children:Object(o.jsx)("span",{children:t.taskDetails})})]},a)}))})},f=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"div1",children:[Object(o.jsxs)("div",{className:"div2",children:[Object(o.jsx)("div",{className:"op40 err1",children:Object(o.jsx)("h1",{children:"4"})}),Object(o.jsx)("div",{className:"op41 err1",children:Object(o.jsx)("h1",{children:"0"})}),Object(o.jsx)("div",{className:"op42 err1",children:Object(o.jsx)("h1",{children:"4"})})]}),Object(o.jsx)("div",{className:"message1",children:Object(o.jsx)("h1",{children:"Something Went Wrong"})})]})})},v=(a(37),function(e){var t=function(t){for(var a=0,s=0;s<(null!==e.todoData?e.todoData.length:0);s++)!0===e.todoData[s][t]&&a++;return a},a=[{reqDetail:"Total Tasks",resDetail:null!==e.todoData?e.todoData.length:0},{reqDetail:"Task Completed",resDetail:t("taskCompleted")},{reqDetail:"Task Incomplete",resDetail:0},{reqDetail:"Task Expired",resDetail:t("taskExpired")}];return a[2].resDetail=a[0].resDetail-a[1].resDetail,Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"getDetailsMainDiv",children:Object(o.jsxs)("div",{className:"getDetailsMainChid",children:[Object(o.jsx)("div",{className:"createTodo",children:Object(o.jsxs)("div",{style:null===e.userMisc.email?{}:{marginTop:"5.5rem"},className:"getDetailsText",children:[Object(o.jsx)("div",{className:"userNameText",children:null===e.userMisc.userName?"Todo Details":e.userMisc.userName}),Object(o.jsx)("div",{style:{fontSize:"1.2rem",color:"white",display:null===e.userMisc.email?"none":"block"},className:"emailText",children:e.userMisc.email})]})}),Object(o.jsxs)("div",{className:"getDetailsMainDivChild",children:[a.map((function(e,t){return Object(o.jsxs)("div",{id:"resDetails"+t,onMouseOver:function(){return document.getElementById("resDetails"+t).style.height="7rem"},onMouseOut:function(){return document.getElementById("resDetails"+t).style.height="4rem"},className:"detailListHead",children:[Object(o.jsx)("div",{className:"detailChild",children:e.reqDetail}),Object(o.jsx)("div",{className:"detailAns",children:e.resDetail})]},t)})),Object(o.jsx)("button",{onMouseOver:function(){document.getElementsByClassName("dataSubmit")[0].style.backgroundColor="rgb(193 2 2)"},onMouseOut:function(){document.getElementsByClassName("dataSubmit")[0].style.backgroundColor="rgb(237 18 18)"},onClick:function(){fetch("/user",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).then((function(e){console.log(e),window.location.reload()}))},className:"dataSubmit logoutBut",children:"Log Out"})]})]})})})}),x=a(2),p=function(e){var t=Object(s.useState)({valid:!0,message:"Form Is Empty"}),a=Object(c.a)(t,2),n=a[0],i=a[1],l=Object(x.f)(),r=function(e){140===document.getElementsByClassName("serveInfoChild")[e].clientWidth?(document.getElementsByClassName("trans")[e].style.transform="rotate(0deg)",document.getElementsByClassName("serveInfoChild")[e].style.width="0rem"):(document.getElementsByClassName("trans")[e].style.transform="rotate(90deg)",document.getElementsByClassName("serveInfoChild")[e].style.width="13rem")};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"getDetailsMainDiv",children:Object(o.jsxs)("div",{className:"getDetailsMainChid",children:[Object(o.jsx)("div",{className:"createTodo",children:Object(o.jsxs)("div",{className:"getDetailsText",children:[" ",Object(o.jsx)("span",{children:"Services"})]})}),!1===n.valid?Object(o.jsxs)("div",{className:"warningDiv",children:[" ",n.message]}):Object(o.jsx)(o.Fragment,{}),Object(o.jsxs)("div",{className:"getDetailsMainDivChild",children:[Object(o.jsxs)("div",{className:"inpRadioHead",children:[Object(o.jsx)("span",{children:"Simple "}),Object(o.jsx)("input",{className:"dataTaker",style:{marginLeft:"5rem"},type:"radio",name:"serviceInp",id:"simpleServe"}),Object(o.jsxs)("div",{className:"infoOfServe",children:[Object(o.jsx)("div",{className:"serveInfoChild",children:"No Notification"}),Object(o.jsx)("div",{className:"showInfoIcon",children:Object(o.jsx)("i",{onClick:function(){return r(0)},className:"fa fa-angle-down trans","aria-hidden":"true"})})]})]}),Object(o.jsxs)("div",{className:"inpRadioHead",children:[Object(o.jsx)("span",{children:"Advance "}),Object(o.jsx)("input",{className:"dataTaker",style:{marginLeft:"4rem"},type:"radio",name:"serviceInp",id:"advServe"}),Object(o.jsxs)("div",{className:"infoOfServe",children:[Object(o.jsx)("div",{className:"serveInfoChild",children:"Notification Via Mail"}),Object(o.jsx)("div",{className:"showInfoIcon",children:Object(o.jsx)("i",{onClick:function(){return r(1)},className:"fa fa-angle-down trans","aria-hidden":"true"})})]})]}),Object(o.jsx)("button",{onClick:function(){return function(){var t=document.getElementsByClassName("dataTaker");if(!1===t[0].checked&&!1===t[1].checked)i({valid:!1,message:"Form Is Empty"});else if(!0===t[0].checked&&!0===t[1].checked)i({valid:!1,message:"Invalid Input"});else if(!0===t[0].checked){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({isSimple:!0,userName:null,email:null,isNull:!1})};fetch("/userRealData",a).then((function(t){e.dataReceived({isSimple:!0,userName:null,email:null,isNull:!1})}))}else l.replace("/emailVerification")}()},style:{width:"27rem",marginTop:"2rem",boxShadow:" 0rem 0rem 0.4rem 0.01rem #b0b0b0"},onMouseOver:function(){document.getElementsByClassName("dataSubmit")[0].style.backgroundColor="#1955a4"},onMouseOut:function(){document.getElementsByClassName("dataSubmit")[0].style.backgroundColor="#1b61bf"},className:"dataSubmit",children:"Submit"})]})]})})})},N=function(e){var t=Object(x.f)(),a=Object(s.useState)({valid:!0,formComplete:!1,message:"Form Is Empty"}),n=Object(c.a)(a,2),i=n[0],l=n[1],r=Object(s.useState)(!1),d=Object(c.a)(r,2),m=d[0],u=d[1],j=Object(s.useState)(null),b=Object(c.a)(j,2),h=b[0],g=b[1];Object(s.useEffect)((function(){fetch("/userRealData").then((function(e){return e.json()})).then((function(e){!1===e.isNull&&t.replace("/")}),[])}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"getDetailsMainDiv",children:Object(o.jsxs)("div",{className:"getDetailsMainChid",children:[Object(o.jsx)("div",{className:"createTodo",children:Object(o.jsxs)("div",{className:"getDetailsText",children:[" ",Object(o.jsx)("span",{children:"Register"})]})}),!1===i.valid?Object(o.jsxs)("div",{className:"warningDiv",children:[" ",i.message]}):!0===i.formComplete?Object(o.jsxs)("div",{style:{backgroundColor:"#c3ffc3",color:"#3c3c3c"},className:"warningDiv",children:[" ",i.message]}):Object(o.jsx)(o.Fragment,{}),Object(o.jsx)("div",{className:"getDetailsMainDivChild",children:!1===m?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{type:"text",name:"userName",className:"userName",placeholder:"Username"}),Object(o.jsx)("input",{type:"email",name:"userMail",id:"userMail",className:"userMail",placeholder:"Gmail ID"}),Object(o.jsx)("button",{onMouseOver:function(){document.getElementsByClassName("dataSubmit")[0].style.backgroundColor="#1955a4"},onMouseOut:function(){document.getElementsByClassName("dataSubmit")[0].style.backgroundColor="#1b61bf"},onClick:function(e){return function(){var e={isSimple:!1,userName:document.getElementsByClassName("userName")[0].value,email:document.getElementsByClassName("userMail")[0].value,isNull:!1},t={valid:!0,formComplete:!1,message:"Form Is Empty"};if(""===e.userName||""===e.userName)t.valid=!1,l(t);else if(e.email.length<11||"@gmail.com"!==e.email.slice(e.email.length-10)||e.email.indexOf(" ")>=0)t.valid=!1,t.message="Invalid Gmail Id",l(t);else{t.valid=!0,t.formComplete=!0,t.message="Receiving Your Details",e.pp=null,g(e),l(t);var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("/getMailData",a).then((function(e){l({valid:!0,formComplete:!1,message:"Form Is Empty"}),u(!0)}))}}()},className:"dataSubmit",children:"Submit"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{type:"number",name:"otpNum",className:"otpNum",placeholder:"Enter OTP"}),Object(o.jsx)("button",{onMouseOver:function(){document.getElementsByClassName("dataSubmit")[0].style.backgroundColor="#1955a4"},onMouseOut:function(){document.getElementsByClassName("dataSubmit")[0].style.backgroundColor="#1b61bf"},onClick:function(a){return function(){var a={otp:document.getElementsByClassName("otpNum")[0].value},s={valid:!0,formComplete:!1,message:"Form Is Empty"};if(""===a.otp)s.valid=!1,l(s);else if(6!==a.otp.length)s.valid=!1,s.message="Invalid OTP",l(s);else{var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};fetch("/getValOTP",n).then((function(a){201===a.status?(s.valid=!0,s.formComplete=!0,s.message="Valid OTP",l(s),e.dataReceived(h),t.replace("/")):(s.valid=!1,s.message="Invalid OTP",l(s))}))}}()},className:"dataSubmit",children:"Submit"})]})})]})})})},y=a(45),k=Object(y.a)("/"),D=function(){var e=Object(s.useState)(null),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(null),l=Object(c.a)(i,2),r=l[0],u=l[1];try{var j=JSON.parse(localStorage.getItem("VARtMyWorkData"));JSON.stringify(j)!==JSON.stringify(a)&&n(j)}catch(S){if(localStorage.clear(),n(null),!1===r.isSimple){var b={email_op_10:r.email,subjectText:"Deleted Your Task Data",otp_op_10:"Hi ".concat(r.userName,", We Have Found Immoral Activity From Your Side.\n  We Are Sorry To But Because Of Your Immoral Activity We Have To Delete Your All Task Data And We Have Deleted Your Task Data.\n  Please Don't Repeat Such Type Of Mistake In Future.\n      \n        Thanks")};k.emit("sendMessage",b)}}Object(s.useEffect)((function(){null!==r&&0!==r.length||fetch("/userRealData").then((function(e){return e.json()})).then((function(e){u(e)}))}));var h=function(){var e=JSON.parse(localStorage.getItem("VARtMyWorkData"));n(e)},y=function(e){var t=a;if(t[e].taskCompleted=!0,t[e].taskExpired=!1,localStorage.setItem("VARtMyWorkData",JSON.stringify(t)),n(Object(m.a)(t)),!1===r.isSimple){var s={email_op_10:r.email,subjectText:"".concat(a[e].taskName," Task Completed"),otp_op_10:"Hi ".concat(r.userName,", Your Task ").concat(a[e].taskName," Is Completed.\n\n        Task Details:-\n   ").concat(a[e].taskDetails," \n\n        Thanks")};k.emit("sendMessage",s)}},D=function(e){var t,s=a;!1===r.isSimple&&(t={email_op_10:r.email,subjectText:"".concat(a[e].taskName," Task Deleted"),otp_op_10:"Hi ".concat(r.userName,", Your Task ").concat(a[e].taskName," Is Deleted.\n\n        Task Details:-\n   ").concat(a[e].taskDetails," \n\n        Thanks")}),s.splice(e,1),localStorage.setItem("VARtMyWorkData",JSON.stringify(s)),n(Object(m.a)(s)),!1===r.isSimple&&k.emit("sendMessage",t)},C=function(e){var t=a;if(t[e].taskExpired=!0,localStorage.setItem("VARtMyWorkData",JSON.stringify(t)),n(Object(m.a)(t)),!1===r.isSimple){var s={email_op_10:r.email,subjectText:"".concat(a[e].taskName," Task Expired"),otp_op_10:"Hi ".concat(r.userName,", Your Task ").concat(a[e].taskName," Is Expired.\n\n        Task Details:-\n   ").concat(a[e].taskDetails," \n\n        Thanks")};k.emit("sendMessage",s)}},T=function(e){u(e)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"mainBodyDiv",children:Object(o.jsx)("div",{className:"bodyDiv",children:Object(o.jsxs)(x.c,{children:[Object(o.jsx)(x.a,{exact:!0,path:"/emailVerification",render:function(e){return Object(o.jsx)(N,Object(d.a)(Object(d.a)({},e),{},{dataReceived:T}))}}),null===r?Object(o.jsx)(o.Fragment,{}):Object(o.jsxs)(x.c,{children:[Object(o.jsx)(x.a,{exact:!0,path:"/addWork",render:function(e){return!0===r.isNull?Object(o.jsx)(p,Object(d.a)(Object(d.a)({},e),{},{dataReceived:T})):Object(o.jsx)(g,Object(d.a)(Object(d.a)({},e),{},{addNewTodoFunction:h}))}}),Object(o.jsx)(x.a,{exact:!0,path:"/user",render:function(e){return!0===r.isNull?Object(o.jsx)(p,Object(d.a)(Object(d.a)({},e),{},{dataReceived:T})):Object(o.jsx)(v,Object(d.a)(Object(d.a)({},e),{},{userMisc:r,todoData:a}))}}),Object(o.jsx)(x.a,{exact:!0,path:"/",render:function(e){return!0===r.isNull?Object(o.jsx)(p,Object(d.a)(Object(d.a)({},e),{},{dataReceived:T})):null===a||0===a.length?Object(o.jsx)(g,Object(d.a)(Object(d.a)({},e),{},{addNewTodoFunction:h})):Object(o.jsx)(O,Object(d.a)(Object(d.a)({},e),{},{todoData:a,taskCompleteFunc:y,taskDeleteFunc:D,taskExpiredFunc:C}))}}),Object(o.jsx)(x.a,{component:f})]})]})})})})},C=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("footer",{children:[Object(o.jsx)("div",{className:"lococo",children:[{link:"https://www.youtube.com/channel/UCLYh239Pl56prNR5YGZWxHw",newClass:"fa fa-2x fa-youtube-play",style:{color:"#FF0000",backgroundColor:"white "}},{link:"https://www.facebook.com/panchal.vedant.96",newClass:"fa fa-2x fa-facebook",style:{backgroundColor:"#4267B2"}},{link:"https://www.instagram.com/vedupaji/",newClass:"fa fa-2x fa-instagram",style:{backgroundColor:"#cd486b"}},{link:"https://twitter.com/Vedupaji4",newClass:"fa fa-2x fa-twitter",style:{backgroundColor:"#1DA1F2"}}].map((function(e,t){return Object(o.jsx)("a",{href:e.link,children:Object(o.jsx)("div",{style:e.style,id:"ffo"+(t+1),className:"ffo",children:Object(o.jsx)("i",{className:e.newClass})})},t)}))}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{style:{color:" white",fontSize:"150%",fontFamily:"Arial, Helvetica, sans-serif",marginBottom:"3rem"},children:"By, Vedupaji"})})]})})},T=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"headerPart",children:[Object(o.jsx)("div",{className:"headerTextDiv",children:Object(o.jsx)("div",{className:"tempDivForDesign",children:Object(o.jsxs)("h1",{className:"headerName",children:[Object(o.jsx)("span",{className:"subHeaderName",style:{color:"red",fontSize:"125%"},children:"VARt"}),e.headerName]})})}),Object(o.jsx)("div",{className:"headerBackground"}),Object(o.jsx)("div",{onClick:function(){70===document.getElementsByClassName("navbarHead")[0].clientHeight?document.getElementsByClassName("navbarHead")[0].style.height="19.3rem":document.getElementsByClassName("navbarHead")[0].style.height="7rem"},className:"newTempDivForDesign",children:Object(o.jsx)("i",{className:"fa fa-bars","aria-hidden":"true"})})]})})},S=Object(s.createContext)();var M=function(){var e=Object(s.useState)(!0),t=Object(c.a)(e,2),a=t[0],n=t[1],i="MyWork",l="Cholo Score Dekhe";return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(T,{headerName:i,slogan:l,isSlogan:!1}),Object(o.jsxs)(S.Provider,{value:{isActive:a,changeNavFunc:function(e){n(e)}},children:[Object(o.jsx)(r,{}),Object(o.jsx)(D,{})]}),Object(o.jsx)(C,{})]})};i.a.render(Object(o.jsx)(l.a,{children:Object(o.jsx)(M,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.b6177548.chunk.js.map