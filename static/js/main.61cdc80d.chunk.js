(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(82),i=a.n(r),o=a(3),c=a(4),s=a(6),u=a(5),m=a(7),d=(a(101),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"header",className:"nav-wrapper"},l.a.createElement("h5",null,"FROST",l.a.createElement("i",{className:"fa fa-snowflake-o"}),"FITNESS"),l.a.createElement("div",null,l.a.createElement("button",{className:"active",id:"home"},l.a.createElement("a",{href:"https://www.instagram.com/5050ifbbpro_frosthardny/"},l.a.createElement("i",{className:"fa fa-instagram "}))),l.a.createElement("button",{id:"ser-a",onClick:this.handleServices},l.a.createElement("a",{href:"https://www.facebook.com/aaron.a.harvey.50 "},l.a.createElement("i",{className:"fa fa-facebook-square "}))),l.a.createElement("button",{id:"contact"},l.a.createElement("a",{href:"mailto:doroskaterina@gmail.com?Subject=Hello%20again"},l.a.createElement("i",{className:"fa fa-envelope"})))))}}]),t}(n.Component)),h=a(83),f=a.n(h),b=a(84),p=a.n(b),g=function(){return l.a.createElement("section",{id:"main-services"},l.a.createElement("h1",null,"Services"),l.a.createElement("br",null),l.a.createElement("h2",null,"TRAINING"),l.a.createElement("section",{id:"training",className:"services"},l.a.createElement("p",null,"1 on 1 training will allow you to work closely with me to set and achieve goals as efficiently as possible. A fitness assessment will be provided prior to starting to better understand your current fitness level. Each workout is structured to help you work towards achieving specific results, ensure that you are consistently making progress, and learn how to properly structure exercise routines to fit your body type. Nutritional guidance is also provided to complement workouts and overall goals. Designed to be progressive and challenging, the plan will take you through all facets of fitness development, making sure that you are not just leaner, but also stronger, more flexible, more stable and agile."),l.a.createElement("img",{src:p.a,alt:""})),l.a.createElement("h2",null,"NUTRITION"),l.a.createElement("section",{id:"diet",className:"services"},l.a.createElement("p",null,"To maximize the benefits of your workout plan, I do Nutrition Coaching. You will understand and learn how to eat for your body type, fitness level and for the goals you have set for yourself. I help you by coaching and educating you on enjoying what you eat \u2013 about common sense nourishment and health \u2013 not starvation and diet pills. Your program will be tailored to support your exercise program and facilitate the outcome you desire \u2013 fat loss or muscle gain, or both. I will give you the practical, real-life tools and concepts you need to make wise decisions about your personal nutrition, and how to fuel your body to achieve the results you want, faster."),l.a.createElement("img",{src:f.a,alt:"",className:"card-image"})))},E=a(85),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleColor=function(e){return"white"},a.handleLabel=function(e){var t=Number(e.index);return 0===t?"Very severely underweight":1===t?"Severely underweight":2===t?"Underweight":3===t?"Normal":4===t?"Overweight":5===t?"Moderately obese":6===t?"Severely obese":7===t?"Very severely obese":void 0},a.state={chartData:{labels:["Severely underweight: < 15","Underweight: 16-18.5","Normal: 18.5-25","Overweight: 25-30","Moderately obese: 30-35","Severely obese: > 35"],datasets:[{label:"BMI chart",backgroundColor:["white","yellow","green","blue","purple","red"],borderColor:"white",data:[10,10,10,10,10,10]}]},chartOptions:{animateScale:!0,easing:"easeInOutQuad",tooltips:{callbacks:{labelTextColor:a.handleColor,label:a.handleLabel}}}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"bmi-chart"},l.a.createElement("h2",null,"BMI chart"),l.a.createElement(E.a,{data:this.state.chartData,options:this.state.chartOptions}))}}]),t}(n.Component),v=a(87),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={lb:"",ft:"",inch:"",result:""},a.handleChange=function(e){e.preventDefault(),a.setState(Object(v.a)({},e.target.name,e.target.value))},a.handleClick=function(){var e,t=parseInt(a.state.result);t=(parseInt(a.state.lb)/((e=12*parseInt(a.state.ft)+(e=""===e?0:parseInt(a.state.inch)))*e)*703).toFixed(1),a.setState({result:t})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"bmi-section"},l.a.createElement("form",{id:"bmi-form"},l.a.createElement("label",{htmlFor:"weight"},"lb"),l.a.createElement("input",{type:"number",name:"lb",id:"weight",value:this.state.lb,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"feet"},"ft"),l.a.createElement("input",{type:"number",name:"ft",id:"feet",value:this.state.ft,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"inches"},"inch"),l.a.createElement("input",{type:"number",name:"inch",id:"inches",value:this.state.inch,onChange:this.handleChange})),l.a.createElement("button",{type:"button",value:"count",id:"bmi-submit",onClick:this.handleClick},"count"),l.a.createElement("span",{id:"userBmi",name:"result",onChange:this.handleChange}," Your BMI: ",this.state.result))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"main-bmi"},l.a.createElement("h1",null,"Calculate your BMI"),l.a.createElement("p",null,"Body uses weight and height to determine whether an adult is within the healthy weight range, underweight, overweight or obese. It provides an estimate of total body fat and your risk of developing weight-related diseases. Use the healthdirect BMI calculator to work out your BMI."),l.a.createElement("section",{id:"showBmi"},l.a.createElement(y,null),l.a.createElement(w,null)))}}]),t}(n.Component),j=a(13),O=a(271),C=a(270),N=a(88),I=a.n(N),S=a(89),x=a.n(S),B=a(90),T=a.n(B),F=function(e){function t(e,a){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).handleSelect=n.handleSelect.bind(Object(j.a)(n)),n.state={index:0,direction:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleSelect",value:function(e,t){this.setState({index:e,direction:t.direction})}},{key:"render",value:function(){var e=this.state,t=e.index,a=e.direction;return l.a.createElement(O.a,{activeIndex:t,direction:a,onSelect:this.handleSelect},l.a.createElement(O.a.Item,null,l.a.createElement(C.a,{className:"d-block w-100",src:I.a,alt:"First slide",rounded:!0}),l.a.createElement(O.a.Caption,null,l.a.createElement("h3",null,"Jeff / 36, accounter"),l.a.createElement("p",null,'"Aaron developed a specialized program for me and while he does not let me slack off, he never pushes me past my abilities."'))),l.a.createElement(O.a.Item,null,l.a.createElement(C.a,{className:"d-block w-100",src:T.a,alt:"Third slide",rounded:!0}),l.a.createElement(O.a.Caption,null,l.a.createElement("h3",null,"Liza / 30, dancer"),l.a.createElement("p",null,'"Definitely the best personal training in New York. Aaron will get you the result! His meal plan and training plans are amazing."'))),l.a.createElement(O.a.Item,null,l.a.createElement(C.a,{className:"d-block w-100",src:x.a,alt:"Third slide",rounded:!0}),l.a.createElement(O.a.Caption,null,l.a.createElement("h3",null,"Mark / 25, blogger"),l.a.createElement("p",null,'"Amazing trainer! I definitely reached my fitness goals with his help and guidance. The exercises were challenging, but he made it fun at the same time!"'))))}}]),t}(n.Component),M=function(){return l.a.createElement("section",{id:"main-reviews"},l.a.createElement("h1",null,"Reviews"),l.a.createElement("section",{className:"wrapper"},l.a.createElement("section",{className:"rightPlace"},l.a.createElement("p",null,"If you\u2019re looking for a personal trainer in NYC or simply need a good nutritionist, you have come to the right place. After personally facing debilitating health issues of my own that threatened my life, my ability to work, and my happiness, I have dedicated myself to a higher calling: helping people make their own lives better, easier, and healthier.")),l.a.createElement(F,null)))},A=a(94),D=a.n(A),z=function(e){function t(e,a){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).handleSelect=n.handleSelect.bind(Object(j.a)(n)),n.state={items:[],index:0,direction:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;D.a.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=1575675725.7884846.dc59284ffc014984837da29901e99087").then(function(t){console.log(t),e.setState({items:t.data.data.slice(0,9)})})}},{key:"handleSelect",value:function(e,t){this.setState({index:e,direction:t.direction})}},{key:"render",value:function(){var e=this.state.items,t=this.state,a=t.index,n=t.direction,r=e.length?e.map(function(e){return l.a.createElement(O.a.Item,{key:e.id},l.a.createElement(C.a,{className:"d-block w-100",src:e.images.standard_resolution.url,alt:"First slide",id:"insta-img",thumbnail:!0,rounded:!0}))}):l.a.createElement("div",null,"no posts");return l.a.createElement(O.a,{activeIndex:a,direction:n,onSelect:this.handleSelect,id:"insta"},r)}}]),t}(n.Component),Y=function(){return l.a.createElement("section",{id:"api-results"},l.a.createElement("h1",null,"Follow me on instagram",l.a.createElement("a",{href:"https://www.instagram.com/5050ifbbpro_frosthardny/"},l.a.createElement("i",{className:"fa fa-instagram "}))),l.a.createElement(z,null))},H=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("b",null,"\xa9 2019 Frost Fitness")),l.a.createElement("ul",{id:"footer-ul"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/aaron.a.harvey.50 "},l.a.createElement("i",{className:"fa fa-facebook-square "}))),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:doroskaterina@gmail.com?Subject=Hello%20again"},l.a.createElement("i",{className:"fa fa-envelope"})))))},R=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"landing"},l.a.createElement("section",{id:"headline"},l.a.createElement("span",null,"Personal Training,",l.a.createElement("br",null)," Nutrition Coaching & ",l.a.createElement("br",null),"Competitive Bodybuilding")))}}]),t}(n.Component),U=function(){return l.a.createElement("section",{id:"main-advice"},l.a.createElement("h1",null,"Get your free fitness and nutrition advice today"),l.a.createElement("button",{variant:"success",className:"button-free"},l.a.createElement("a",{href:"mailto:doroskaterina@gmail.com?Subject=Hello%20again"},"Start Today")))},_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement(R,null),l.a.createElement(g,null),l.a.createElement("h1",null,"Over the past 10 years, I have helped countless clients create the body they\u2019ve always dreamt of."),l.a.createElement("div",{id:"fruit"}),l.a.createElement(k,null),l.a.createElement("div",{id:"sport"}),l.a.createElement(M,null),l.a.createElement(U,null),l.a.createElement("div",{id:"dumbbells"}),l.a.createElement(Y,null),l.a.createElement(H,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,a){e.exports=a.p+"static/media/plate.6a27a7f9.png"},84:function(e,t,a){e.exports=a.p+"static/media/crossfit.5e35abb8.png"},88:function(e,t,a){e.exports=a.p+"static/media/client1.0604884e.jpg"},89:function(e,t,a){e.exports=a.p+"static/media/client2.fbef4bda.jpg"},90:function(e,t,a){e.exports=a.p+"static/media/client3.6c28430a.jpg"},96:function(e,t,a){e.exports=a(269)}},[[96,1,2]]]);
//# sourceMappingURL=main.61cdc80d.chunk.js.map