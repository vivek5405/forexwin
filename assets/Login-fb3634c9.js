import{C as w,a as c}from"./svgCode-578657f3.js";import{H as b,T as L,_ as k}from"./triangle-pattern1-cf1c1ec8.js";import{L as T}from"./Loader-c974dc40.js";import{f as y}from"./fetchDataFromApi-7cabb98a.js";import{A as N}from"./index-4031f567.js";import{a as d}from"./js.cookie-edb2da2a.js";import{_ as I,f as a,g as C,j as S,k as l,l as i,m as t,y as u,z as m,q as H,v as M,x as B}from"./index-71ed4c92.js";/* empty css                                               */const g=N({}),A={components:{ContentWrapper:w,Heading1:b,Title1:L,Loader:T,Cookies:d},data(){return{toastMessage:"",loadingStatus:!1,iconphone:c.phone,iconpassword:c.password,login:!1,user:{phone:null,password:null}}},beforeCreate:function(){d.get("token")&&this.$router.replace("/")},methods:{check(){document.getElementById("mob").value.length==10&&document.getElementById("password").value.length>5?(document.getElementById("btn-login").className="btn1 active mt-[57px]",this.login=!0):(document.getElementById("btn-login").className="btn1 mt-[57px]",this.login=!1)},showToast(){this.toastMessage="This is a toast message!"},async Login(){if(this.login==!0){this.loadingStatus=!0;try{const e=await y("/api/login",{phone:this.user.phone,password:this.user.password});e.status===!0?(g.success(e.message,{position:"top",duration:1500,max:1500}),this.$router.replace("/")):g.error(e.message,{position:"top",duration:1500,max:1500}),this.loadingStatus=!1}catch(e){console.error("Error fetching data:",e),this.loadingStatus=!1}}}}},_=e=>(M("data-v-dceefc71"),e=e(),B(),e),E={class:"login-wrapper"},V=_(()=>t("img",{src:k,alt:"",class:"traingle-pattern-login"},null,-1)),W={class:"form"},D={className:"input1-container mt-[57px]"},F={className:"input1-icon"},U=["innerHTML"],j={className:"input1-container mt-[25px]"},q={className:"input1-icon",class:"auth-svg"},z=["innerHTML"],P={class:"forget-password-text text-right mt-[32px]"},R=_(()=>t("button",{class:"btn2 mt-[17px]"},"Register Now",-1));function Y(e,o,G,J,s,r){const h=a("Loader"),f=a("Heading1"),v=a("Title1"),p=a("router-link"),x=a("ContentWrapper");return C(),S(x,null,{default:l(()=>[i(h,{isLoading:s.loadingStatus},null,8,["isLoading"]),t("div",E,[V,i(f,{headingText:"Welcome back"}),i(v,{titleText:"Sign in to Access Your Account"}),t("div",W,[t("div",D,[t("div",F,[t("div",{innerHTML:s.iconphone,class:"auth-svg"},null,8,U)]),u(t("input",{type:"tel",class:"auth-input","onUpdate:modelValue":o[0]||(o[0]=n=>s.user.phone=n),onInput:o[1]||(o[1]=n=>r.check()),id:"mob",maxlength:"10",placeholder:"Mobile Number",autocomplete:"off"},null,544),[[m,s.user.phone]])]),t("div",j,[t("div",q,[t("div",{innerHTML:s.iconpassword},null,8,z)]),u(t("input",{type:"password",class:"auth-input","onUpdate:modelValue":o[2]||(o[2]=n=>s.user.password=n),onInput:o[3]||(o[3]=n=>r.check()),id:"password",maxlength:"20",placeholder:"Login Password",autocomplete:"off"},null,544),[[m,s.user.password]])]),t("div",P,[i(p,{to:"forget"},{default:l(()=>[H("Forget password ?")]),_:1})]),t("button",{type:"submit",class:"btn1 mt-[57px]",id:"btn-login",onClick:o[4]||(o[4]=n=>r.Login())}," Login ")]),i(p,{to:"/register"},{default:l(()=>[R]),_:1})])]),_:1})}const ot=I(A,[["render",Y],["__scopeId","data-v-dceefc71"]]);export{ot as default};
