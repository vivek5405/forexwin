import{C as N,p as c}from"./svgCode-578657f3.js";import{L as w}from"./Loader-c974dc40.js";import{B as y}from"./Bottombar-b8936e1b.js";import{s as C}from"./Svg-26c94c6a.js";import{_ as u,f as s,g as p,j as d,k as f,m as o,A as l,t as _,l as i,v as k,x as H}from"./index-71ed4c92.js";import{f as I}from"./fetchDataFromApi-7cabb98a.js";import{A as M}from"./index-4031f567.js";/* empty css                                               */const T={props:{route:String,name:String,className:String,className2:String,iconname:String},components:{}},A=["innerHTML"],V={class:"button-text"};function F(t,h,e,g,n,v){const r=s("router-link");return p(),d(r,{to:e.route},{default:f(()=>[o("div",{class:l(`button ${e.className}`)},[o("div",{innerHTML:e.iconname,class:l(`button-eclipse ${e.className2}`)},null,10,A),o("p",V,_(e.name),1)],2)]),_:1},8,["to"])}const W=u(T,[["render",F],["__scopeId","data-v-4643d1af"]]);const P={props:{route:String,name:String,className:String,className2:String,iconname:String,iconname2:String},components:{}},R=["innerHTML"],j={class:"button-text"},z=["innerHTML"];function E(t,h,e,g,n,v){const r=s("router-link");return p(),d(r,{to:e.route},{default:f(()=>[o("div",{class:l(`button ${e.className}`)},[o("div",{innerHTML:e.iconname,class:l(` ${e.className2}`)},null,10,R),o("p",j,_(e.name),1),o("div",{innerHTML:e.iconname2,class:l(`ml-auto ${e.className2}`)},null,10,z)],2)]),_:1},8,["to"])}const O=u(P,[["render",E],["__scopeId","data-v-d6b9ae06"]]),U="/assets/avatar-f61c3505.png";const q=M({}),G={components:{ContentWrapper:N,Bottombar:y,Loader:w,svgVue:C,Button3:W,Button4:O},data(){return{userDetail:null,loadingStatus:!1,icon1:c.icon1,icon2:c.icon2,icon3:c.icon3,icon4:c.icon4,icon5:c.icon5,icon6:c.icon6,icon7:c.icon7,icon8:c.icon8,icon9:c.icon9,icon10:c.icon10,icon11:c.icon11,icon12:c.icon12}},mounted(){this.fetchData()},methods:{async fetchData(){try{const t=await I("/api/profile");t.status===!0?this.userDetail=t.userDetail:q.error(t.message,{position:"top",duration:1500,max:1500})}catch(t){console.error("Error fetching data:",t)}}}},S=t=>(k("data-v-33a540bf"),t=t(),H(),t),J={class:"profile-wrapper p-[15px]"},K={class:"profile-section"},Q=S(()=>o("img",{src:U,alt:""},null,-1)),X={class:"details"},Y={class:"phone"},Z={class:"referal"},$={class:"available-balance-section"},nn=S(()=>o("p",{class:"title"},"Available Balance",-1)),on={class:"balance"},en={class:"button-section1 p-[15px]"},tn={class:"button-section2 mt-[35px] mb-[80px]"};function cn(t,h,e,g,n,v){const r=s("Loader"),B=s("svgVue"),m=s("Button3"),a=s("Button4"),D=s("Bottombar"),L=s("ContentWrapper");return p(),d(L,null,{default:f(()=>{var b,x;return[i(r,{isLoading:n.loadingStatus},null,8,["isLoading"]),o("div",J,[o("div",K,[Q,o("div",X,[o("p",Y," +91"+_((b=n.userDetail)==null?void 0:b.phone),1),o("p",Z,_((x=n.userDetail)==null?void 0:x.referalCode),1)])]),o("div",$,[i(B,{iconname:n.icon1,className:"ml-[10px]"},null,8,["iconname"]),nn,o("p",on,"₹ "+_(n.userDetail&&n.userDetail.balance?n.userDetail.balance.toFixed(2):0),1)]),o("div",en,[i(m,{route:"/recharge",name:"Recharge",iconname:n.icon2},null,8,["iconname"]),i(m,{route:"/withdraw",name:"Withdraw",iconname:n.icon3},null,8,["iconname"]),i(m,{route:"/order-records",name:"Records",iconname:n.icon4,className2:"pl-[5px]"},null,8,["iconname"])]),o("div",tn,[i(a,{route:"/financial-details",name:"Financial Details",iconname:n.icon5,iconname2:n.icon12},null,8,["iconname","iconname2"]),i(a,{route:"/change-password",name:"Change Password",iconname:n.icon7,iconname2:n.icon12},null,8,["iconname","iconname2"]),i(a,{route:"/r",name:"Download",iconname:n.icon8,iconname2:n.icon12},null,8,["iconname","iconname2"]),i(a,{route:"/r",name:"Follow Us",iconname:n.icon9,iconname2:n.icon12},null,8,["iconname","iconname2"]),i(a,{route:"/r",name:"Support",iconname:n.icon10,iconname2:n.icon12},null,8,["iconname","iconname2"]),i(a,{route:"/r",name:"Log Out",iconname:n.icon11,iconname2:n.icon12},null,8,["iconname","iconname2"])])]),i(D,{data:3})]}),_:1})}const dn=u(G,[["render",cn],["__scopeId","data-v-33a540bf"]]);export{dn as default};
