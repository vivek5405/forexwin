import{C as n}from"./svgCode-578657f3.js";import{W as p}from"./WithdrawRecordCard-ef9500df.js";import{T as c}from"./Topbar-892e236a.js";import{s as m}from"./Svg-26c94c6a.js";/* empty css                                               */import{_ as d,f as o,g as _,j as u,k as l,l as a,m as f}from"./index-71ed4c92.js";import{f as h}from"./fetchDataFromApi-7cabb98a.js";import{A as g}from"./index-4031f567.js";const r=g({}),w={components:{ContentWrapper:n,Topbar:c,svgVue:m,WithdrawListCard:p},data(){return{}},methods:{async Submit(){try{const t=await h("/api/payment/bindUpi",{name:this.user.name,upi:this.user.upi,upic:this.user.upic});t.status===!0?r.success(t.message,{position:"top",duration:1500,max:1500}):(console.log(t.message),r.error(t.message,{position:"top",duration:1500,max:1500})),this.loading=!1}catch(t){console.error("Error fetching data:",t),this.loading=!1}},goBack(){this.$router.go(-1)}}},C={class:"withdraw-wrapper mt-[5px] overflow-y-auto"};function W(t,x,y,b,v,k){const e=o("Topbar"),s=o("WithdrawListCard"),i=o("ContentWrapper");return _(),u(i,null,{default:l(()=>[a(e,{title:"Withdraw History",mainClass:"mt-[10px]",className:"back"}),f("div",C,[a(s),a(s)])]),_:1})}const j=d(w,[["render",W],["__scopeId","data-v-a48bcc37"]]);export{j as default};
