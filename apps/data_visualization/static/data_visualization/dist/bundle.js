/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={d:(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{add:()=>Z,adjoint:()=>M,clone:()=>u,copy:()=>s,create:()=>i,determinant:()=>v,equals:()=>tt,exactEquals:()=>$,frob:()=>X,fromQuat:()=>U,fromQuat2:()=>I,fromRotation:()=>S,fromRotationTranslation:()=>T,fromRotationTranslationScale:()=>O,fromRotationTranslationScaleOrigin:()=>q,fromScaling:()=>L,fromTranslation:()=>E,fromValues:()=>c,fromXRotation:()=>A,fromYRotation:()=>P,fromZRotation:()=>R,frustum:()=>j,getRotation:()=>D,getScaling:()=>F,getTranslation:()=>_,identity:()=>f,invert:()=>d,lookAt:()=>Y,mul:()=>nt,multiply:()=>w,multiplyScalar:()=>K,multiplyScalarAndAdd:()=>J,ortho:()=>H,orthoNO:()=>C,orthoZO:()=>V,perspective:()=>G,perspectiveFromFieldOfView:()=>z,perspectiveNO:()=>B,perspectiveZO:()=>N,rotate:()=>m,rotateX:()=>y,rotateY:()=>b,rotateZ:()=>x,scale:()=>g,set:()=>h,str:()=>W,sub:()=>rt,subtract:()=>Q,targetTo:()=>k,translate:()=>p,transpose:()=>l});var r={};t.r(r),t.d(r,{add:()=>jt,calculateW:()=>vt,clone:()=>Dt,conjugate:()=>xt,copy:()=>qt,create:()=>it,dot:()=>Nt,equals:()=>Xt,exactEquals:()=>Wt,exp:()=>wt,fromEuler:()=>Lt,fromMat3:()=>Et,fromValues:()=>Ot,getAngle:()=>ht,getAxisAngle:()=>ct,identity:()=>ut,invert:()=>bt,len:()=>Ht,length:()=>Ct,lerp:()=>zt,ln:()=>pt,mul:()=>Bt,multiply:()=>ft,normalize:()=>kt,pow:()=>gt,random:()=>yt,rotateX:()=>lt,rotateY:()=>dt,rotateZ:()=>Mt,rotationTo:()=>Zt,scale:()=>Gt,set:()=>Ut,setAxes:()=>Kt,setAxisAngle:()=>st,slerp:()=>mt,sqlerp:()=>Qt,sqrLen:()=>Yt,squaredLength:()=>Vt,str:()=>St});var e=1e-6,o="undefined"!=typeof Float32Array?Float32Array:Array,a=Math.random;function i(){var t=new o(16);return o!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function u(t){var n=new o(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function s(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function c(t,n,r,e,a,i,u,s,c,h,f,l,d,M,v,w){var p=new o(16);return p[0]=t,p[1]=n,p[2]=r,p[3]=e,p[4]=a,p[5]=i,p[6]=u,p[7]=s,p[8]=c,p[9]=h,p[10]=f,p[11]=l,p[12]=d,p[13]=M,p[14]=v,p[15]=w,p}function h(t,n,r,e,o,a,i,u,s,c,h,f,l,d,M,v,w){return t[0]=n,t[1]=r,t[2]=e,t[3]=o,t[4]=a,t[5]=i,t[6]=u,t[7]=s,t[8]=c,t[9]=h,t[10]=f,t[11]=l,t[12]=d,t[13]=M,t[14]=v,t[15]=w,t}function f(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function l(t,n){if(t===n){var r=n[1],e=n[2],o=n[3],a=n[6],i=n[7],u=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=e,t[9]=a,t[11]=n[14],t[12]=o,t[13]=i,t[14]=u}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function d(t,n){var r=n[0],e=n[1],o=n[2],a=n[3],i=n[4],u=n[5],s=n[6],c=n[7],h=n[8],f=n[9],l=n[10],d=n[11],M=n[12],v=n[13],w=n[14],p=n[15],g=r*u-e*i,m=r*s-o*i,y=r*c-a*i,b=e*s-o*u,x=e*c-a*u,E=o*c-a*s,L=h*v-f*M,S=h*w-l*M,A=h*p-d*M,P=f*w-l*v,R=f*p-d*v,T=l*p-d*w,I=g*T-m*R+y*P+b*A-x*S+E*L;return I?(I=1/I,t[0]=(u*T-s*R+c*P)*I,t[1]=(o*R-e*T-a*P)*I,t[2]=(v*E-w*x+p*b)*I,t[3]=(l*x-f*E-d*b)*I,t[4]=(s*A-i*T-c*S)*I,t[5]=(r*T-o*A+a*S)*I,t[6]=(w*y-M*E-p*m)*I,t[7]=(h*E-l*y+d*m)*I,t[8]=(i*R-u*A+c*L)*I,t[9]=(e*A-r*R-a*L)*I,t[10]=(M*x-v*y+p*g)*I,t[11]=(f*y-h*x-d*g)*I,t[12]=(u*S-i*P-s*L)*I,t[13]=(r*P-e*S+o*L)*I,t[14]=(v*m-M*b-w*g)*I,t[15]=(h*b-f*m+l*g)*I,t):null}function M(t,n){var r=n[0],e=n[1],o=n[2],a=n[3],i=n[4],u=n[5],s=n[6],c=n[7],h=n[8],f=n[9],l=n[10],d=n[11],M=n[12],v=n[13],w=n[14],p=n[15];return t[0]=u*(l*p-d*w)-f*(s*p-c*w)+v*(s*d-c*l),t[1]=-(e*(l*p-d*w)-f*(o*p-a*w)+v*(o*d-a*l)),t[2]=e*(s*p-c*w)-u*(o*p-a*w)+v*(o*c-a*s),t[3]=-(e*(s*d-c*l)-u*(o*d-a*l)+f*(o*c-a*s)),t[4]=-(i*(l*p-d*w)-h*(s*p-c*w)+M*(s*d-c*l)),t[5]=r*(l*p-d*w)-h*(o*p-a*w)+M*(o*d-a*l),t[6]=-(r*(s*p-c*w)-i*(o*p-a*w)+M*(o*c-a*s)),t[7]=r*(s*d-c*l)-i*(o*d-a*l)+h*(o*c-a*s),t[8]=i*(f*p-d*v)-h*(u*p-c*v)+M*(u*d-c*f),t[9]=-(r*(f*p-d*v)-h*(e*p-a*v)+M*(e*d-a*f)),t[10]=r*(u*p-c*v)-i*(e*p-a*v)+M*(e*c-a*u),t[11]=-(r*(u*d-c*f)-i*(e*d-a*f)+h*(e*c-a*u)),t[12]=-(i*(f*w-l*v)-h*(u*w-s*v)+M*(u*l-s*f)),t[13]=r*(f*w-l*v)-h*(e*w-o*v)+M*(e*l-o*f),t[14]=-(r*(u*w-s*v)-i*(e*w-o*v)+M*(e*s-o*u)),t[15]=r*(u*l-s*f)-i*(e*l-o*f)+h*(e*s-o*u),t}function v(t){var n=t[0],r=t[1],e=t[2],o=t[3],a=t[4],i=t[5],u=t[6],s=t[7],c=t[8],h=t[9],f=t[10],l=t[11],d=t[12],M=t[13],v=t[14],w=t[15];return(n*i-r*a)*(f*w-l*v)-(n*u-e*a)*(h*w-l*M)+(n*s-o*a)*(h*v-f*M)+(r*u-e*i)*(c*w-l*d)-(r*s-o*i)*(c*v-f*d)+(e*s-o*u)*(c*M-h*d)}function w(t,n,r){var e=n[0],o=n[1],a=n[2],i=n[3],u=n[4],s=n[5],c=n[6],h=n[7],f=n[8],l=n[9],d=n[10],M=n[11],v=n[12],w=n[13],p=n[14],g=n[15],m=r[0],y=r[1],b=r[2],x=r[3];return t[0]=m*e+y*u+b*f+x*v,t[1]=m*o+y*s+b*l+x*w,t[2]=m*a+y*c+b*d+x*p,t[3]=m*i+y*h+b*M+x*g,m=r[4],y=r[5],b=r[6],x=r[7],t[4]=m*e+y*u+b*f+x*v,t[5]=m*o+y*s+b*l+x*w,t[6]=m*a+y*c+b*d+x*p,t[7]=m*i+y*h+b*M+x*g,m=r[8],y=r[9],b=r[10],x=r[11],t[8]=m*e+y*u+b*f+x*v,t[9]=m*o+y*s+b*l+x*w,t[10]=m*a+y*c+b*d+x*p,t[11]=m*i+y*h+b*M+x*g,m=r[12],y=r[13],b=r[14],x=r[15],t[12]=m*e+y*u+b*f+x*v,t[13]=m*o+y*s+b*l+x*w,t[14]=m*a+y*c+b*d+x*p,t[15]=m*i+y*h+b*M+x*g,t}function p(t,n,r){var e,o,a,i,u,s,c,h,f,l,d,M,v=r[0],w=r[1],p=r[2];return n===t?(t[12]=n[0]*v+n[4]*w+n[8]*p+n[12],t[13]=n[1]*v+n[5]*w+n[9]*p+n[13],t[14]=n[2]*v+n[6]*w+n[10]*p+n[14],t[15]=n[3]*v+n[7]*w+n[11]*p+n[15]):(e=n[0],o=n[1],a=n[2],i=n[3],u=n[4],s=n[5],c=n[6],h=n[7],f=n[8],l=n[9],d=n[10],M=n[11],t[0]=e,t[1]=o,t[2]=a,t[3]=i,t[4]=u,t[5]=s,t[6]=c,t[7]=h,t[8]=f,t[9]=l,t[10]=d,t[11]=M,t[12]=e*v+u*w+f*p+n[12],t[13]=o*v+s*w+l*p+n[13],t[14]=a*v+c*w+d*p+n[14],t[15]=i*v+h*w+M*p+n[15]),t}function g(t,n,r){var e=r[0],o=r[1],a=r[2];return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=n[7]*o,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=n[11]*a,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function m(t,n,r,o){var a,i,u,s,c,h,f,l,d,M,v,w,p,g,m,y,b,x,E,L,S,A,P,R,T=o[0],I=o[1],_=o[2],F=Math.hypot(T,I,_);return F<e?null:(T*=F=1/F,I*=F,_*=F,a=Math.sin(r),u=1-(i=Math.cos(r)),s=n[0],c=n[1],h=n[2],f=n[3],l=n[4],d=n[5],M=n[6],v=n[7],w=n[8],p=n[9],g=n[10],m=n[11],y=T*T*u+i,b=I*T*u+_*a,x=_*T*u-I*a,E=T*I*u-_*a,L=I*I*u+i,S=_*I*u+T*a,A=T*_*u+I*a,P=I*_*u-T*a,R=_*_*u+i,t[0]=s*y+l*b+w*x,t[1]=c*y+d*b+p*x,t[2]=h*y+M*b+g*x,t[3]=f*y+v*b+m*x,t[4]=s*E+l*L+w*S,t[5]=c*E+d*L+p*S,t[6]=h*E+M*L+g*S,t[7]=f*E+v*L+m*S,t[8]=s*A+l*P+w*R,t[9]=c*A+d*P+p*R,t[10]=h*A+M*P+g*R,t[11]=f*A+v*P+m*R,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function y(t,n,r){var e=Math.sin(r),o=Math.cos(r),a=n[4],i=n[5],u=n[6],s=n[7],c=n[8],h=n[9],f=n[10],l=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=a*o+c*e,t[5]=i*o+h*e,t[6]=u*o+f*e,t[7]=s*o+l*e,t[8]=c*o-a*e,t[9]=h*o-i*e,t[10]=f*o-u*e,t[11]=l*o-s*e,t}function b(t,n,r){var e=Math.sin(r),o=Math.cos(r),a=n[0],i=n[1],u=n[2],s=n[3],c=n[8],h=n[9],f=n[10],l=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=a*o-c*e,t[1]=i*o-h*e,t[2]=u*o-f*e,t[3]=s*o-l*e,t[8]=a*e+c*o,t[9]=i*e+h*o,t[10]=u*e+f*o,t[11]=s*e+l*o,t}function x(t,n,r){var e=Math.sin(r),o=Math.cos(r),a=n[0],i=n[1],u=n[2],s=n[3],c=n[4],h=n[5],f=n[6],l=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=a*o+c*e,t[1]=i*o+h*e,t[2]=u*o+f*e,t[3]=s*o+l*e,t[4]=c*o-a*e,t[5]=h*o-i*e,t[6]=f*o-u*e,t[7]=l*o-s*e,t}function E(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function L(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function S(t,n,r){var o,a,i,u=r[0],s=r[1],c=r[2],h=Math.hypot(u,s,c);return h<e?null:(u*=h=1/h,s*=h,c*=h,o=Math.sin(n),i=1-(a=Math.cos(n)),t[0]=u*u*i+a,t[1]=s*u*i+c*o,t[2]=c*u*i-s*o,t[3]=0,t[4]=u*s*i-c*o,t[5]=s*s*i+a,t[6]=c*s*i+u*o,t[7]=0,t[8]=u*c*i+s*o,t[9]=s*c*i-u*o,t[10]=c*c*i+a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function A(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function P(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=e,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function R(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=e,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function T(t,n,r){var e=n[0],o=n[1],a=n[2],i=n[3],u=e+e,s=o+o,c=a+a,h=e*u,f=e*s,l=e*c,d=o*s,M=o*c,v=a*c,w=i*u,p=i*s,g=i*c;return t[0]=1-(d+v),t[1]=f+g,t[2]=l-p,t[3]=0,t[4]=f-g,t[5]=1-(h+v),t[6]=M+w,t[7]=0,t[8]=l+p,t[9]=M-w,t[10]=1-(h+d),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function I(t,n){var r=new o(3),e=-n[0],a=-n[1],i=-n[2],u=n[3],s=n[4],c=n[5],h=n[6],f=n[7],l=e*e+a*a+i*i+u*u;return l>0?(r[0]=2*(s*u+f*e+c*i-h*a)/l,r[1]=2*(c*u+f*a+h*e-s*i)/l,r[2]=2*(h*u+f*i+s*a-c*e)/l):(r[0]=2*(s*u+f*e+c*i-h*a),r[1]=2*(c*u+f*a+h*e-s*i),r[2]=2*(h*u+f*i+s*a-c*e)),T(t,n,r),t}function _(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function F(t,n){var r=n[0],e=n[1],o=n[2],a=n[4],i=n[5],u=n[6],s=n[8],c=n[9],h=n[10];return t[0]=Math.hypot(r,e,o),t[1]=Math.hypot(a,i,u),t[2]=Math.hypot(s,c,h),t}function D(t,n){var r=new o(3);F(r,n);var e=1/r[0],a=1/r[1],i=1/r[2],u=n[0]*e,s=n[1]*a,c=n[2]*i,h=n[4]*e,f=n[5]*a,l=n[6]*i,d=n[8]*e,M=n[9]*a,v=n[10]*i,w=u+f+v,p=0;return w>0?(p=2*Math.sqrt(w+1),t[3]=.25*p,t[0]=(l-M)/p,t[1]=(d-c)/p,t[2]=(s-h)/p):u>f&&u>v?(p=2*Math.sqrt(1+u-f-v),t[3]=(l-M)/p,t[0]=.25*p,t[1]=(s+h)/p,t[2]=(d+c)/p):f>v?(p=2*Math.sqrt(1+f-u-v),t[3]=(d-c)/p,t[0]=(s+h)/p,t[1]=.25*p,t[2]=(l+M)/p):(p=2*Math.sqrt(1+v-u-f),t[3]=(s-h)/p,t[0]=(d+c)/p,t[1]=(l+M)/p,t[2]=.25*p),t}function O(t,n,r,e){var o=n[0],a=n[1],i=n[2],u=n[3],s=o+o,c=a+a,h=i+i,f=o*s,l=o*c,d=o*h,M=a*c,v=a*h,w=i*h,p=u*s,g=u*c,m=u*h,y=e[0],b=e[1],x=e[2];return t[0]=(1-(M+w))*y,t[1]=(l+m)*y,t[2]=(d-g)*y,t[3]=0,t[4]=(l-m)*b,t[5]=(1-(f+w))*b,t[6]=(v+p)*b,t[7]=0,t[8]=(d+g)*x,t[9]=(v-p)*x,t[10]=(1-(f+M))*x,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function q(t,n,r,e,o){var a=n[0],i=n[1],u=n[2],s=n[3],c=a+a,h=i+i,f=u+u,l=a*c,d=a*h,M=a*f,v=i*h,w=i*f,p=u*f,g=s*c,m=s*h,y=s*f,b=e[0],x=e[1],E=e[2],L=o[0],S=o[1],A=o[2],P=(1-(v+p))*b,R=(d+y)*b,T=(M-m)*b,I=(d-y)*x,_=(1-(l+p))*x,F=(w+g)*x,D=(M+m)*E,O=(w-g)*E,q=(1-(l+v))*E;return t[0]=P,t[1]=R,t[2]=T,t[3]=0,t[4]=I,t[5]=_,t[6]=F,t[7]=0,t[8]=D,t[9]=O,t[10]=q,t[11]=0,t[12]=r[0]+L-(P*L+I*S+D*A),t[13]=r[1]+S-(R*L+_*S+O*A),t[14]=r[2]+A-(T*L+F*S+q*A),t[15]=1,t}function U(t,n){var r=n[0],e=n[1],o=n[2],a=n[3],i=r+r,u=e+e,s=o+o,c=r*i,h=e*i,f=e*u,l=o*i,d=o*u,M=o*s,v=a*i,w=a*u,p=a*s;return t[0]=1-f-M,t[1]=h+p,t[2]=l-w,t[3]=0,t[4]=h-p,t[5]=1-c-M,t[6]=d+v,t[7]=0,t[8]=l+w,t[9]=d-v,t[10]=1-c-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function j(t,n,r,e,o,a,i){var u=1/(r-n),s=1/(o-e),c=1/(a-i);return t[0]=2*a*u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*a*s,t[6]=0,t[7]=0,t[8]=(r+n)*u,t[9]=(o+e)*s,t[10]=(i+a)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=i*a*2*c,t[15]=0,t}function B(t,n,r,e,o){var a,i=1/Math.tan(n/2);return t[0]=i/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=o&&o!==1/0?(a=1/(e-o),t[10]=(o+e)*a,t[14]=2*o*e*a):(t[10]=-1,t[14]=-2*e),t}Math.PI,Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)});var G=B;function N(t,n,r,e,o){var a,i=1/Math.tan(n/2);return t[0]=i/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=o&&o!==1/0?(a=1/(e-o),t[10]=o*a,t[14]=o*e*a):(t[10]=-1,t[14]=-e),t}function z(t,n,r,e){var o=Math.tan(n.upDegrees*Math.PI/180),a=Math.tan(n.downDegrees*Math.PI/180),i=Math.tan(n.leftDegrees*Math.PI/180),u=Math.tan(n.rightDegrees*Math.PI/180),s=2/(i+u),c=2/(o+a);return t[0]=s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(i-u)*s*.5,t[9]=(o-a)*c*.5,t[10]=e/(r-e),t[11]=-1,t[12]=0,t[13]=0,t[14]=e*r/(r-e),t[15]=0,t}function C(t,n,r,e,o,a,i){var u=1/(n-r),s=1/(e-o),c=1/(a-i);return t[0]=-2*u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(n+r)*u,t[13]=(o+e)*s,t[14]=(i+a)*c,t[15]=1,t}var H=C;function V(t,n,r,e,o,a,i){var u=1/(n-r),s=1/(e-o),c=1/(a-i);return t[0]=-2*u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=c,t[11]=0,t[12]=(n+r)*u,t[13]=(o+e)*s,t[14]=a*c,t[15]=1,t}function Y(t,n,r,o){var a,i,u,s,c,h,l,d,M,v,w=n[0],p=n[1],g=n[2],m=o[0],y=o[1],b=o[2],x=r[0],E=r[1],L=r[2];return Math.abs(w-x)<e&&Math.abs(p-E)<e&&Math.abs(g-L)<e?f(t):(l=w-x,d=p-E,M=g-L,a=y*(M*=v=1/Math.hypot(l,d,M))-b*(d*=v),i=b*(l*=v)-m*M,u=m*d-y*l,(v=Math.hypot(a,i,u))?(a*=v=1/v,i*=v,u*=v):(a=0,i=0,u=0),s=d*u-M*i,c=M*a-l*u,h=l*i-d*a,(v=Math.hypot(s,c,h))?(s*=v=1/v,c*=v,h*=v):(s=0,c=0,h=0),t[0]=a,t[1]=s,t[2]=l,t[3]=0,t[4]=i,t[5]=c,t[6]=d,t[7]=0,t[8]=u,t[9]=h,t[10]=M,t[11]=0,t[12]=-(a*w+i*p+u*g),t[13]=-(s*w+c*p+h*g),t[14]=-(l*w+d*p+M*g),t[15]=1,t)}function k(t,n,r,e){var o=n[0],a=n[1],i=n[2],u=e[0],s=e[1],c=e[2],h=o-r[0],f=a-r[1],l=i-r[2],d=h*h+f*f+l*l;d>0&&(h*=d=1/Math.sqrt(d),f*=d,l*=d);var M=s*l-c*f,v=c*h-u*l,w=u*f-s*h;return(d=M*M+v*v+w*w)>0&&(M*=d=1/Math.sqrt(d),v*=d,w*=d),t[0]=M,t[1]=v,t[2]=w,t[3]=0,t[4]=f*w-l*v,t[5]=l*M-h*w,t[6]=h*v-f*M,t[7]=0,t[8]=h,t[9]=f,t[10]=l,t[11]=0,t[12]=o,t[13]=a,t[14]=i,t[15]=1,t}function W(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function X(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function Z(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t[9]=n[9]+r[9],t[10]=n[10]+r[10],t[11]=n[11]+r[11],t[12]=n[12]+r[12],t[13]=n[13]+r[13],t[14]=n[14]+r[14],t[15]=n[15]+r[15],t}function Q(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t[9]=n[9]-r[9],t[10]=n[10]-r[10],t[11]=n[11]-r[11],t[12]=n[12]-r[12],t[13]=n[13]-r[13],t[14]=n[14]-r[14],t[15]=n[15]-r[15],t}function K(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=n[11]*r,t[12]=n[12]*r,t[13]=n[13]*r,t[14]=n[14]*r,t[15]=n[15]*r,t}function J(t,n,r,e){return t[0]=n[0]+r[0]*e,t[1]=n[1]+r[1]*e,t[2]=n[2]+r[2]*e,t[3]=n[3]+r[3]*e,t[4]=n[4]+r[4]*e,t[5]=n[5]+r[5]*e,t[6]=n[6]+r[6]*e,t[7]=n[7]+r[7]*e,t[8]=n[8]+r[8]*e,t[9]=n[9]+r[9]*e,t[10]=n[10]+r[10]*e,t[11]=n[11]+r[11]*e,t[12]=n[12]+r[12]*e,t[13]=n[13]+r[13]*e,t[14]=n[14]+r[14]*e,t[15]=n[15]+r[15]*e,t}function $(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]}function tt(t,n){var r=t[0],o=t[1],a=t[2],i=t[3],u=t[4],s=t[5],c=t[6],h=t[7],f=t[8],l=t[9],d=t[10],M=t[11],v=t[12],w=t[13],p=t[14],g=t[15],m=n[0],y=n[1],b=n[2],x=n[3],E=n[4],L=n[5],S=n[6],A=n[7],P=n[8],R=n[9],T=n[10],I=n[11],_=n[12],F=n[13],D=n[14],O=n[15];return Math.abs(r-m)<=e*Math.max(1,Math.abs(r),Math.abs(m))&&Math.abs(o-y)<=e*Math.max(1,Math.abs(o),Math.abs(y))&&Math.abs(a-b)<=e*Math.max(1,Math.abs(a),Math.abs(b))&&Math.abs(i-x)<=e*Math.max(1,Math.abs(i),Math.abs(x))&&Math.abs(u-E)<=e*Math.max(1,Math.abs(u),Math.abs(E))&&Math.abs(s-L)<=e*Math.max(1,Math.abs(s),Math.abs(L))&&Math.abs(c-S)<=e*Math.max(1,Math.abs(c),Math.abs(S))&&Math.abs(h-A)<=e*Math.max(1,Math.abs(h),Math.abs(A))&&Math.abs(f-P)<=e*Math.max(1,Math.abs(f),Math.abs(P))&&Math.abs(l-R)<=e*Math.max(1,Math.abs(l),Math.abs(R))&&Math.abs(d-T)<=e*Math.max(1,Math.abs(d),Math.abs(T))&&Math.abs(M-I)<=e*Math.max(1,Math.abs(M),Math.abs(I))&&Math.abs(v-_)<=e*Math.max(1,Math.abs(v),Math.abs(_))&&Math.abs(w-F)<=e*Math.max(1,Math.abs(w),Math.abs(F))&&Math.abs(p-D)<=e*Math.max(1,Math.abs(p),Math.abs(D))&&Math.abs(g-O)<=e*Math.max(1,Math.abs(g),Math.abs(O))}var nt=w,rt=Q;function et(){var t=new o(3);return o!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function ot(t,n,r){var e=new o(3);return e[0]=t,e[1]=n,e[2]=r,e}function at(t,n,r){var e=n[0],o=n[1],a=n[2],i=r[0],u=r[1],s=r[2];return t[0]=o*s-a*u,t[1]=a*i-e*s,t[2]=e*u-o*i,t}function it(){var t=new o(4);return o!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function ut(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function st(t,n,r){r*=.5;var e=Math.sin(r);return t[0]=e*n[0],t[1]=e*n[1],t[2]=e*n[2],t[3]=Math.cos(r),t}function ct(t,n){var r=2*Math.acos(n[3]),o=Math.sin(r/2);return o>e?(t[0]=n[0]/o,t[1]=n[1]/o,t[2]=n[2]/o):(t[0]=1,t[1]=0,t[2]=0),r}function ht(t,n){var r=Nt(t,n);return Math.acos(2*r*r-1)}function ft(t,n,r){var e=n[0],o=n[1],a=n[2],i=n[3],u=r[0],s=r[1],c=r[2],h=r[3];return t[0]=e*h+i*u+o*c-a*s,t[1]=o*h+i*s+a*u-e*c,t[2]=a*h+i*c+e*s-o*u,t[3]=i*h-e*u-o*s-a*c,t}function lt(t,n,r){r*=.5;var e=n[0],o=n[1],a=n[2],i=n[3],u=Math.sin(r),s=Math.cos(r);return t[0]=e*s+i*u,t[1]=o*s+a*u,t[2]=a*s-o*u,t[3]=i*s-e*u,t}function dt(t,n,r){r*=.5;var e=n[0],o=n[1],a=n[2],i=n[3],u=Math.sin(r),s=Math.cos(r);return t[0]=e*s-a*u,t[1]=o*s+i*u,t[2]=a*s+e*u,t[3]=i*s-o*u,t}function Mt(t,n,r){r*=.5;var e=n[0],o=n[1],a=n[2],i=n[3],u=Math.sin(r),s=Math.cos(r);return t[0]=e*s+o*u,t[1]=o*s-e*u,t[2]=a*s+i*u,t[3]=i*s-a*u,t}function vt(t,n){var r=n[0],e=n[1],o=n[2];return t[0]=r,t[1]=e,t[2]=o,t[3]=Math.sqrt(Math.abs(1-r*r-e*e-o*o)),t}function wt(t,n){var r=n[0],e=n[1],o=n[2],a=n[3],i=Math.sqrt(r*r+e*e+o*o),u=Math.exp(a),s=i>0?u*Math.sin(i)/i:0;return t[0]=r*s,t[1]=e*s,t[2]=o*s,t[3]=u*Math.cos(i),t}function pt(t,n){var r=n[0],e=n[1],o=n[2],a=n[3],i=Math.sqrt(r*r+e*e+o*o),u=i>0?Math.atan2(i,a)/i:0;return t[0]=r*u,t[1]=e*u,t[2]=o*u,t[3]=.5*Math.log(r*r+e*e+o*o+a*a),t}function gt(t,n,r){return pt(t,n),Gt(t,t,r),wt(t,t),t}function mt(t,n,r,o){var a,i,u,s,c,h=n[0],f=n[1],l=n[2],d=n[3],M=r[0],v=r[1],w=r[2],p=r[3];return(i=h*M+f*v+l*w+d*p)<0&&(i=-i,M=-M,v=-v,w=-w,p=-p),1-i>e?(a=Math.acos(i),u=Math.sin(a),s=Math.sin((1-o)*a)/u,c=Math.sin(o*a)/u):(s=1-o,c=o),t[0]=s*h+c*M,t[1]=s*f+c*v,t[2]=s*l+c*w,t[3]=s*d+c*p,t}function yt(t){var n=a(),r=a(),e=a(),o=Math.sqrt(1-n),i=Math.sqrt(n);return t[0]=o*Math.sin(2*Math.PI*r),t[1]=o*Math.cos(2*Math.PI*r),t[2]=i*Math.sin(2*Math.PI*e),t[3]=i*Math.cos(2*Math.PI*e),t}function bt(t,n){var r=n[0],e=n[1],o=n[2],a=n[3],i=r*r+e*e+o*o+a*a,u=i?1/i:0;return t[0]=-r*u,t[1]=-e*u,t[2]=-o*u,t[3]=a*u,t}function xt(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function Et(t,n){var r,e=n[0]+n[4]+n[8];if(e>0)r=Math.sqrt(e+1),t[3]=.5*r,r=.5/r,t[0]=(n[5]-n[7])*r,t[1]=(n[6]-n[2])*r,t[2]=(n[1]-n[3])*r;else{var o=0;n[4]>n[0]&&(o=1),n[8]>n[3*o+o]&&(o=2);var a=(o+1)%3,i=(o+2)%3;r=Math.sqrt(n[3*o+o]-n[3*a+a]-n[3*i+i]+1),t[o]=.5*r,r=.5/r,t[3]=(n[3*a+i]-n[3*i+a])*r,t[a]=(n[3*a+o]+n[3*o+a])*r,t[i]=(n[3*i+o]+n[3*o+i])*r}return t}function Lt(t,n,r,e){var o=.5*Math.PI/180;n*=o,r*=o,e*=o;var a=Math.sin(n),i=Math.cos(n),u=Math.sin(r),s=Math.cos(r),c=Math.sin(e),h=Math.cos(e);return t[0]=a*s*h-i*u*c,t[1]=i*u*h+a*s*c,t[2]=i*s*c-a*u*h,t[3]=i*s*h+a*u*c,t}function St(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}et(),function(){var t;t=new o(4),o!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0)}();var At,Pt,Rt,Tt,It,_t,Ft,Dt=function(t){var n=new o(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n},Ot=function(t,n,r,e){var a=new o(4);return a[0]=t,a[1]=n,a[2]=r,a[3]=e,a},qt=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},Ut=function(t,n,r,e,o){return t[0]=n,t[1]=r,t[2]=e,t[3]=o,t},jt=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t},Bt=ft,Gt=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t},Nt=function(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]},zt=function(t,n,r,e){var o=n[0],a=n[1],i=n[2],u=n[3];return t[0]=o+e*(r[0]-o),t[1]=a+e*(r[1]-a),t[2]=i+e*(r[2]-i),t[3]=u+e*(r[3]-u),t},Ct=function(t){var n=t[0],r=t[1],e=t[2],o=t[3];return Math.hypot(n,r,e,o)},Ht=Ct,Vt=function(t){var n=t[0],r=t[1],e=t[2],o=t[3];return n*n+r*r+e*e+o*o},Yt=Vt,kt=function(t,n){var r=n[0],e=n[1],o=n[2],a=n[3],i=r*r+e*e+o*o+a*a;return i>0&&(i=1/Math.sqrt(i)),t[0]=r*i,t[1]=e*i,t[2]=o*i,t[3]=a*i,t},Wt=function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]},Xt=function(t,n){var r=t[0],o=t[1],a=t[2],i=t[3],u=n[0],s=n[1],c=n[2],h=n[3];return Math.abs(r-u)<=e*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(o-s)<=e*Math.max(1,Math.abs(o),Math.abs(s))&&Math.abs(a-c)<=e*Math.max(1,Math.abs(a),Math.abs(c))&&Math.abs(i-h)<=e*Math.max(1,Math.abs(i),Math.abs(h))},Zt=(At=et(),Pt=ot(1,0,0),Rt=ot(0,1,0),function(t,n,r){var e=function(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}(n,r);return e<-.999999?(at(At,Pt,n),function(t){var n=t[0],r=t[1],e=t[2];return Math.hypot(n,r,e)}(At)<1e-6&&at(At,Rt,n),function(t,n){var r=n[0],e=n[1],o=n[2],a=r*r+e*e+o*o;a>0&&(a=1/Math.sqrt(a)),t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a}(At,At),st(t,At,Math.PI),t):e>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(at(At,n,r),t[0]=At[0],t[1]=At[1],t[2]=At[2],t[3]=1+e,kt(t,t))}),Qt=(Tt=it(),It=it(),function(t,n,r,e,o,a){return mt(Tt,n,o,a),mt(It,r,e,a),mt(t,Tt,It,2*a*(1-a)),t}),Kt=(_t=new o(9),o!=Float32Array&&(_t[1]=0,_t[2]=0,_t[3]=0,_t[5]=0,_t[6]=0,_t[7]=0),_t[0]=1,_t[4]=1,_t[8]=1,Ft=_t,function(t,n,r,e){return Ft[0]=r[0],Ft[3]=r[1],Ft[6]=r[2],Ft[1]=e[0],Ft[4]=e[1],Ft[7]=e[2],Ft[2]=-n[0],Ft[5]=-n[1],Ft[8]=-n[2],kt(t,Et(t,Ft))});function Jt(t,n,r){var e=t.createShader(n);if(t.shaderSource(e,r),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS)){var o=n===t.VERTEX_SHADER?"VERTEX_SHADER":"FRAGMENT_SHADER";return console.error("An error occurred compiling the ".concat(o,": ").concat(t.getShaderInfoLog(e))),console.error("Shader source that failed to compile:\n".concat(r)),t.deleteShader(e),null}return e}function $t(t,n,r){var e=Jt(t,t.VERTEX_SHADER,n),o=Jt(t,t.FRAGMENT_SHADER,r),a=t.createProgram();return t.attachShader(a,e),t.attachShader(a,o),t.linkProgram(a),t.getProgramParameter(a,t.LINK_STATUS)?a:(console.error("Unable to initialize the shader program: "+t.getProgramInfoLog(a)),null)}var tn="\n    attribute vec3 aVertexPosition;\n    uniform mat4 uModelViewMatrix;\n    uniform mat4 uProjectionMatrix;\n\n    void main(void) {\n        gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);\n    }\n",nn="\n    precision mediump float;\n    uniform vec4 uColor; // Add this uniform for dynamic color control\n\n    void main(void) {\n        gl_FragColor = uColor; // Use the uniform color\n    }\n";function rn(t){if(!t)return console.error("WebGL context is not available."),null;var n=t.createBuffer();if(!n)return console.error("Failed to create a position buffer."),null;t.bindBuffer(t.ARRAY_BUFFER,n),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),t.STATIC_DRAW);var r=t.createBuffer();if(!r)return console.error("Failed to create an index buffer."),null;t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r);var e=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23];t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(e),t.STATIC_DRAW);var o=[0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7,8,9,9,10,10,11,11,8,12,13,13,14,14,15,15,12,16,17,17,18,18,19,19,16,20,21,21,22,22,23,23,20],a=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,a),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(o),t.STATIC_DRAW),{position:n,indices:r,edgeIndices:a,indexCount:e.length,edgeCount:o.length/2}}function en(t,n,r,e){if(t){t.useProgram(n.program);var o=45*Math.PI/180,a=t.canvas.clientWidth/t.canvas.clientHeight,u=i();G(u,o,a,.1,100);var s=i();p(s,s,[0,0,-6]),w(s,s,e),t.clearColor(.5,.5,.5,1),t.clearDepth(1),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.bindBuffer(t.ARRAY_BUFFER,r.position),t.vertexAttribPointer(n.attribLocations.vertexPosition,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(n.attribLocations.vertexPosition),t.uniformMatrix4fv(n.uniformLocations.projectionMatrix,!1,u),t.uniformMatrix4fv(n.uniformLocations.modelViewMatrix,!1,s),t.uniform4f(n.uniformLocations.uColor,0,0,0,1),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r.indices),t.drawElements(t.TRIANGLES,r.indexCount,t.UNSIGNED_SHORT,0),t.drawElements(t.LINES,r.edgeCount,t.UNSIGNED_SHORT,0)}else console.error("WebGL context is not available.")}var on=function(t){return t*Math.PI/180},an={isDragging:!1,previousMousePosition:{x:0,y:0},axis:[0,1,0],angle:0,handleMouseDown:function(t){this.isDragging=!0,this.previousMousePosition={x:t.clientX/window.innerWidth*2-1,y:-t.clientY/window.innerHeight*2+1},console.log("MouseDown Event Triggered",this.previousMousePosition)},handleMouseUp:function(t){this.isDragging&&(this.isDragging=!1,console.log("MouseUp Event Triggered",{isDragging:this.isDragging}),window.webGLInteraction.axis=this.axis,window.webGLInteraction.angle=this.angle)},handleMouseMove:function(t){if(console.log("Mouse Move Detected"),this.isDragging){console.log("MouseMove with drag detected");var n,r,e={x:t.clientX/window.innerWidth*2-1,y:-t.clientY/window.innerHeight*2+1},o=this.mapToSphere(this.previousMousePosition.x,this.previousMousePosition.y),a=this.mapToSphere(e.x,e.y);this.axis=(r=a,{x:(n=o).y*r.z-n.z*r.y,y:n.z*r.x-n.x*r.z,z:n.x*r.y-n.y*r.x}),this.angle=Math.acos(Math.min(1,function(t,n){return t.x*n.x+t.y*n.y+t.z*n.z}(o,a))),console.log("MouseMove Event Triggered",{axis:this.axis,angle:this.angle}),"function"==typeof window.updateScene&&window.updateScene(this.axis,this.angle),this.previousMousePosition=e}else console.log("MouseMove without drag detected")},mapToSphere:function(t,n){var r={x:t,y:n,z:0},e=t*t+n*n;return e<=1?r.z=Math.sqrt(1-e):r=function(t){var n=function(t){return Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)}(t);return{x:t.x/n,y:t.y/n,z:t.z/n}}(r),r},setupInteractionHandlers:function(t){t.addEventListener("mousedown",this.handleMouseDown.bind(this),!1),t.addEventListener("mousemove",this.handleMouseMove.bind(this),!1),t.addEventListener("mouseup",this.handleMouseUp.bind(this),!1),t.addEventListener("mouseleave",this.handleMouseUp.bind(this),!1),console.log("Event handlers attached to canvas.")}};function un(t){return un="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},un(t)}function sn(){sn=function(){return n};var t,n={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,n,r){t[n]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{c({},"")}catch(t){c=function(t,n,r){return t[n]=r}}function h(t,n,r,e){var a=n&&n.prototype instanceof p?n:p,i=Object.create(a.prototype),u=new I(e||[]);return o(i,"_invoke",{value:A(t,r,u)}),i}function f(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var l="suspendedStart",d="suspendedYield",M="executing",v="completed",w={};function p(){}function g(){}function m(){}var y={};c(y,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(_([])));x&&x!==r&&e.call(x,i)&&(y=x);var E=m.prototype=p.prototype=Object.create(y);function L(t){["next","throw","return"].forEach((function(n){c(t,n,(function(t){return this._invoke(n,t)}))}))}function S(t,n){function r(o,a,i,u){var s=f(t[o],t,a);if("throw"!==s.type){var c=s.arg,h=c.value;return h&&"object"==un(h)&&e.call(h,"__await")?n.resolve(h.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):n.resolve(h).then((function(t){c.value=t,i(c)}),(function(t){return r("throw",t,i,u)}))}u(s.arg)}var a;o(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}})}function A(n,r,e){var o=l;return function(a,i){if(o===M)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(e.method=a,e.arg=i;;){var u=e.delegate;if(u){var s=P(u,e);if(s){if(s===w)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===l)throw o=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=M;var c=f(n,r,e);if("normal"===c.type){if(o=e.done?v:d,c.arg===w)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(o=v,e.method="throw",e.arg=c.arg)}}}function P(n,r){var e=r.method,o=n.iterator[e];if(o===t)return r.delegate=null,"throw"===e&&n.iterator.return&&(r.method="return",r.arg=t,P(n,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),w;var a=f(o,n.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,w;var i=a.arg;return i?i.done?(r[n.resultName]=i.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,w):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,w)}function R(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function T(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function _(n){if(n||""===n){var r=n[i];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,a=function r(){for(;++o<n.length;)if(e.call(n,o))return r.value=n[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(un(n)+" is not iterable")}return g.prototype=m,o(E,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=c(m,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},L(S.prototype),c(S.prototype,u,(function(){return this})),n.AsyncIterator=S,n.async=function(t,r,e,o,a){void 0===a&&(a=Promise);var i=new S(h(t,r,e,o),a);return n.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(E),c(E,s,"Generator"),c(E,i,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=_,I.prototype={constructor:I,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(e,o){return u.type="throw",u.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,w):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),w},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),w}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:_(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),w}},n}function cn(t,n,r,e,o,a,i){try{var u=t[a](i),s=u.value}catch(t){return void r(t)}u.done?n(s):Promise.resolve(s).then(e,o)}function hn(){return fn.apply(this,arguments)}function fn(){var t;return t=sn().mark((function t(){var n,r,e;return sn().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=document.getElementById("webgl-canvas"),r=n.getContext("webgl")){t.next=5;break}return console.error("Unable to initialize WebGL."),t.abrupt("return");case 5:return window.gl=r,window.rotationMatrix=i(),window.loadShader=Jt,window.initShaderProgram=$t,window.initBuffers=rn,window.drawScene=en,window.toRadians=on,window.webGLInteraction=an,window.vsSource=tn,window.fsSource=nn,window.rotationAngles={x:0,y:0,z:0},window.lastRotationAngles={x:0,y:0,z:0},t.next=19,window.initShaderProgram(r,window.vsSource,window.fsSource);case 19:if(e=t.sent){t.next=25;break}return console.error("Initializing shader program failed."),t.abrupt("return");case 25:console.log("Shader program initialized successfully.");case 26:return window.shaderProgram=e,console.log("Shader program:",window.shaderProgram),window.programInfo={program:e,attribLocations:{vertexPosition:r.getAttribLocation(e,"aVertexPosition")},uniformLocations:{projectionMatrix:r.getUniformLocation(e,"uProjectionMatrix"),modelViewMatrix:r.getUniformLocation(e,"uModelViewMatrix"),uColor:r.getUniformLocation(e,"uColor")}},console.log("Attribute and Uniform Locations:",window.programInfo.attribLocations,window.programInfo.uniformLocations),t.next=32,window.initBuffers(r);case 32:if(window.buffers=t.sent,window.buffers){t.next=38;break}return console.error("Initializing buffers failed."),t.abrupt("return");case 38:console.log("Buffers initialized successfully.");case 39:an.setupInteractionHandlers(n),window.projectionMatrix=i(),G(window.projectionMatrix,45*Math.PI/180,r.canvas.clientWidth/r.canvas.clientHeight,.1,100),window.renderLoop=function(){window.drawScene(window.gl,window.programInfo,window.buffers,window.rotationMatrix),requestAnimationFrame(window.renderLoop)},window.drawScene(window.gl,window.programInfo,window.buffers,window.rotationAngles),window.renderLoop();case 45:case"end":return t.stop()}}),t)})),fn=function(){var n=this,r=arguments;return new Promise((function(e,o){var a=t.apply(n,r);function i(t){cn(a,e,o,i,u,"next",t)}function u(t){cn(a,e,o,i,u,"throw",t)}i(void 0)}))},fn.apply(this,arguments)}window.updateScene=function(){if(window.webGLInteraction&&void 0!==window.webGLInteraction.axis&&void 0!==window.webGLInteraction.angle){var t=it();st(t,window.webGLInteraction.axis,window.webGLInteraction.angle),U(window.rotationMatrix,t),window.drawScene(window.gl,window.programInfo,window.buffers,window.rotationMatrix)}},document.addEventListener("DOMContentLoaded",(function(){window.main=hn,window.main()})),window.mat4=n,window.quat=r})();
//# sourceMappingURL=bundle.js.map