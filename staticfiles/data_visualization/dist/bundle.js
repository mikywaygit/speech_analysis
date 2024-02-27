/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={d:(r,n)=>{for(var e in n)t.o(n,e)&&!t.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{add:()=>z,adjoint:()=>l,clone:()=>a,copy:()=>i,create:()=>o,determinant:()=>d,equals:()=>J,exactEquals:()=>K,frob:()=>W,fromQuat:()=>j,fromQuat2:()=>_,fromRotation:()=>E,fromRotationTranslation:()=>R,fromRotationTranslationScale:()=>I,fromRotationTranslationScaleOrigin:()=>O,fromScaling:()=>x,fromTranslation:()=>g,fromValues:()=>u,fromXRotation:()=>L,fromYRotation:()=>A,fromZRotation:()=>S,frustum:()=>N,getRotation:()=>P,getScaling:()=>T,getTranslation:()=>F,identity:()=>s,invert:()=>h,lookAt:()=>q,mul:()=>$,multiply:()=>p,multiplyScalar:()=>Z,multiplyScalarAndAdd:()=>Q,ortho:()=>k,orthoNO:()=>G,orthoZO:()=>V,perspective:()=>U,perspectiveFromFieldOfView:()=>C,perspectiveNO:()=>B,perspectiveZO:()=>D,rotate:()=>M,rotateX:()=>w,rotateY:()=>b,rotateZ:()=>y,scale:()=>m,set:()=>c,str:()=>H,sub:()=>tt,subtract:()=>X,targetTo:()=>Y,translate:()=>v,transpose:()=>f});var n=1e-6,e="undefined"!=typeof Float32Array?Float32Array:Array;function o(){var t=new e(16);return e!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function a(t){var r=new e(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}function i(t,r){return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t}function u(t,r,n,o,a,i,u,c,s,f,h,l,d,p,v,m){var M=new e(16);return M[0]=t,M[1]=r,M[2]=n,M[3]=o,M[4]=a,M[5]=i,M[6]=u,M[7]=c,M[8]=s,M[9]=f,M[10]=h,M[11]=l,M[12]=d,M[13]=p,M[14]=v,M[15]=m,M}function c(t,r,n,e,o,a,i,u,c,s,f,h,l,d,p,v,m){return t[0]=r,t[1]=n,t[2]=e,t[3]=o,t[4]=a,t[5]=i,t[6]=u,t[7]=c,t[8]=s,t[9]=f,t[10]=h,t[11]=l,t[12]=d,t[13]=p,t[14]=v,t[15]=m,t}function s(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function f(t,r){if(t===r){var n=r[1],e=r[2],o=r[3],a=r[6],i=r[7],u=r[11];t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=n,t[6]=r[9],t[7]=r[13],t[8]=e,t[9]=a,t[11]=r[14],t[12]=o,t[13]=i,t[14]=u}else t[0]=r[0],t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=r[1],t[5]=r[5],t[6]=r[9],t[7]=r[13],t[8]=r[2],t[9]=r[6],t[10]=r[10],t[11]=r[14],t[12]=r[3],t[13]=r[7],t[14]=r[11],t[15]=r[15];return t}function h(t,r){var n=r[0],e=r[1],o=r[2],a=r[3],i=r[4],u=r[5],c=r[6],s=r[7],f=r[8],h=r[9],l=r[10],d=r[11],p=r[12],v=r[13],m=r[14],M=r[15],w=n*u-e*i,b=n*c-o*i,y=n*s-a*i,g=e*c-o*u,x=e*s-a*u,E=o*s-a*c,L=f*v-h*p,A=f*m-l*p,S=f*M-d*p,R=h*m-l*v,_=h*M-d*v,F=l*M-d*m,T=w*F-b*_+y*R+g*S-x*A+E*L;return T?(T=1/T,t[0]=(u*F-c*_+s*R)*T,t[1]=(o*_-e*F-a*R)*T,t[2]=(v*E-m*x+M*g)*T,t[3]=(l*x-h*E-d*g)*T,t[4]=(c*S-i*F-s*A)*T,t[5]=(n*F-o*S+a*A)*T,t[6]=(m*y-p*E-M*b)*T,t[7]=(f*E-l*y+d*b)*T,t[8]=(i*_-u*S+s*L)*T,t[9]=(e*S-n*_-a*L)*T,t[10]=(p*x-v*y+M*w)*T,t[11]=(h*y-f*x-d*w)*T,t[12]=(u*A-i*R-c*L)*T,t[13]=(n*R-e*A+o*L)*T,t[14]=(v*b-p*g-m*w)*T,t[15]=(f*g-h*b+l*w)*T,t):null}function l(t,r){var n=r[0],e=r[1],o=r[2],a=r[3],i=r[4],u=r[5],c=r[6],s=r[7],f=r[8],h=r[9],l=r[10],d=r[11],p=r[12],v=r[13],m=r[14],M=r[15];return t[0]=u*(l*M-d*m)-h*(c*M-s*m)+v*(c*d-s*l),t[1]=-(e*(l*M-d*m)-h*(o*M-a*m)+v*(o*d-a*l)),t[2]=e*(c*M-s*m)-u*(o*M-a*m)+v*(o*s-a*c),t[3]=-(e*(c*d-s*l)-u*(o*d-a*l)+h*(o*s-a*c)),t[4]=-(i*(l*M-d*m)-f*(c*M-s*m)+p*(c*d-s*l)),t[5]=n*(l*M-d*m)-f*(o*M-a*m)+p*(o*d-a*l),t[6]=-(n*(c*M-s*m)-i*(o*M-a*m)+p*(o*s-a*c)),t[7]=n*(c*d-s*l)-i*(o*d-a*l)+f*(o*s-a*c),t[8]=i*(h*M-d*v)-f*(u*M-s*v)+p*(u*d-s*h),t[9]=-(n*(h*M-d*v)-f*(e*M-a*v)+p*(e*d-a*h)),t[10]=n*(u*M-s*v)-i*(e*M-a*v)+p*(e*s-a*u),t[11]=-(n*(u*d-s*h)-i*(e*d-a*h)+f*(e*s-a*u)),t[12]=-(i*(h*m-l*v)-f*(u*m-c*v)+p*(u*l-c*h)),t[13]=n*(h*m-l*v)-f*(e*m-o*v)+p*(e*l-o*h),t[14]=-(n*(u*m-c*v)-i*(e*m-o*v)+p*(e*c-o*u)),t[15]=n*(u*l-c*h)-i*(e*l-o*h)+f*(e*c-o*u),t}function d(t){var r=t[0],n=t[1],e=t[2],o=t[3],a=t[4],i=t[5],u=t[6],c=t[7],s=t[8],f=t[9],h=t[10],l=t[11],d=t[12],p=t[13],v=t[14],m=t[15];return(r*i-n*a)*(h*m-l*v)-(r*u-e*a)*(f*m-l*p)+(r*c-o*a)*(f*v-h*p)+(n*u-e*i)*(s*m-l*d)-(n*c-o*i)*(s*v-h*d)+(e*c-o*u)*(s*p-f*d)}function p(t,r,n){var e=r[0],o=r[1],a=r[2],i=r[3],u=r[4],c=r[5],s=r[6],f=r[7],h=r[8],l=r[9],d=r[10],p=r[11],v=r[12],m=r[13],M=r[14],w=r[15],b=n[0],y=n[1],g=n[2],x=n[3];return t[0]=b*e+y*u+g*h+x*v,t[1]=b*o+y*c+g*l+x*m,t[2]=b*a+y*s+g*d+x*M,t[3]=b*i+y*f+g*p+x*w,b=n[4],y=n[5],g=n[6],x=n[7],t[4]=b*e+y*u+g*h+x*v,t[5]=b*o+y*c+g*l+x*m,t[6]=b*a+y*s+g*d+x*M,t[7]=b*i+y*f+g*p+x*w,b=n[8],y=n[9],g=n[10],x=n[11],t[8]=b*e+y*u+g*h+x*v,t[9]=b*o+y*c+g*l+x*m,t[10]=b*a+y*s+g*d+x*M,t[11]=b*i+y*f+g*p+x*w,b=n[12],y=n[13],g=n[14],x=n[15],t[12]=b*e+y*u+g*h+x*v,t[13]=b*o+y*c+g*l+x*m,t[14]=b*a+y*s+g*d+x*M,t[15]=b*i+y*f+g*p+x*w,t}function v(t,r,n){var e,o,a,i,u,c,s,f,h,l,d,p,v=n[0],m=n[1],M=n[2];return r===t?(t[12]=r[0]*v+r[4]*m+r[8]*M+r[12],t[13]=r[1]*v+r[5]*m+r[9]*M+r[13],t[14]=r[2]*v+r[6]*m+r[10]*M+r[14],t[15]=r[3]*v+r[7]*m+r[11]*M+r[15]):(e=r[0],o=r[1],a=r[2],i=r[3],u=r[4],c=r[5],s=r[6],f=r[7],h=r[8],l=r[9],d=r[10],p=r[11],t[0]=e,t[1]=o,t[2]=a,t[3]=i,t[4]=u,t[5]=c,t[6]=s,t[7]=f,t[8]=h,t[9]=l,t[10]=d,t[11]=p,t[12]=e*v+u*m+h*M+r[12],t[13]=o*v+c*m+l*M+r[13],t[14]=a*v+s*m+d*M+r[14],t[15]=i*v+f*m+p*M+r[15]),t}function m(t,r,n){var e=n[0],o=n[1],a=n[2];return t[0]=r[0]*e,t[1]=r[1]*e,t[2]=r[2]*e,t[3]=r[3]*e,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=r[7]*o,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=r[11]*a,t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t}function M(t,r,e,o){var a,i,u,c,s,f,h,l,d,p,v,m,M,w,b,y,g,x,E,L,A,S,R,_,F=o[0],T=o[1],P=o[2],I=Math.hypot(F,T,P);return I<n?null:(F*=I=1/I,T*=I,P*=I,a=Math.sin(e),u=1-(i=Math.cos(e)),c=r[0],s=r[1],f=r[2],h=r[3],l=r[4],d=r[5],p=r[6],v=r[7],m=r[8],M=r[9],w=r[10],b=r[11],y=F*F*u+i,g=T*F*u+P*a,x=P*F*u-T*a,E=F*T*u-P*a,L=T*T*u+i,A=P*T*u+F*a,S=F*P*u+T*a,R=T*P*u-F*a,_=P*P*u+i,t[0]=c*y+l*g+m*x,t[1]=s*y+d*g+M*x,t[2]=f*y+p*g+w*x,t[3]=h*y+v*g+b*x,t[4]=c*E+l*L+m*A,t[5]=s*E+d*L+M*A,t[6]=f*E+p*L+w*A,t[7]=h*E+v*L+b*A,t[8]=c*S+l*R+m*_,t[9]=s*S+d*R+M*_,t[10]=f*S+p*R+w*_,t[11]=h*S+v*R+b*_,r!==t&&(t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t)}function w(t,r,n){var e=Math.sin(n),o=Math.cos(n),a=r[4],i=r[5],u=r[6],c=r[7],s=r[8],f=r[9],h=r[10],l=r[11];return r!==t&&(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[4]=a*o+s*e,t[5]=i*o+f*e,t[6]=u*o+h*e,t[7]=c*o+l*e,t[8]=s*o-a*e,t[9]=f*o-i*e,t[10]=h*o-u*e,t[11]=l*o-c*e,t}function b(t,r,n){var e=Math.sin(n),o=Math.cos(n),a=r[0],i=r[1],u=r[2],c=r[3],s=r[8],f=r[9],h=r[10],l=r[11];return r!==t&&(t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[0]=a*o-s*e,t[1]=i*o-f*e,t[2]=u*o-h*e,t[3]=c*o-l*e,t[8]=a*e+s*o,t[9]=i*e+f*o,t[10]=u*e+h*o,t[11]=c*e+l*o,t}function y(t,r,n){var e=Math.sin(n),o=Math.cos(n),a=r[0],i=r[1],u=r[2],c=r[3],s=r[4],f=r[5],h=r[6],l=r[7];return r!==t&&(t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[0]=a*o+s*e,t[1]=i*o+f*e,t[2]=u*o+h*e,t[3]=c*o+l*e,t[4]=s*o-a*e,t[5]=f*o-i*e,t[6]=h*o-u*e,t[7]=l*o-c*e,t}function g(t,r){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function x(t,r){return t[0]=r[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=r[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function E(t,r,e){var o,a,i,u=e[0],c=e[1],s=e[2],f=Math.hypot(u,c,s);return f<n?null:(u*=f=1/f,c*=f,s*=f,o=Math.sin(r),i=1-(a=Math.cos(r)),t[0]=u*u*i+a,t[1]=c*u*i+s*o,t[2]=s*u*i-c*o,t[3]=0,t[4]=u*c*i-s*o,t[5]=c*c*i+a,t[6]=s*c*i+u*o,t[7]=0,t[8]=u*s*i+c*o,t[9]=c*s*i-u*o,t[10]=s*s*i+a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function L(t,r){var n=Math.sin(r),e=Math.cos(r);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function A(t,r){var n=Math.sin(r),e=Math.cos(r);return t[0]=e,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function S(t,r){var n=Math.sin(r),e=Math.cos(r);return t[0]=e,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function R(t,r,n){var e=r[0],o=r[1],a=r[2],i=r[3],u=e+e,c=o+o,s=a+a,f=e*u,h=e*c,l=e*s,d=o*c,p=o*s,v=a*s,m=i*u,M=i*c,w=i*s;return t[0]=1-(d+v),t[1]=h+w,t[2]=l-M,t[3]=0,t[4]=h-w,t[5]=1-(f+v),t[6]=p+m,t[7]=0,t[8]=l+M,t[9]=p-m,t[10]=1-(f+d),t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function _(t,r){var n=new e(3),o=-r[0],a=-r[1],i=-r[2],u=r[3],c=r[4],s=r[5],f=r[6],h=r[7],l=o*o+a*a+i*i+u*u;return l>0?(n[0]=2*(c*u+h*o+s*i-f*a)/l,n[1]=2*(s*u+h*a+f*o-c*i)/l,n[2]=2*(f*u+h*i+c*a-s*o)/l):(n[0]=2*(c*u+h*o+s*i-f*a),n[1]=2*(s*u+h*a+f*o-c*i),n[2]=2*(f*u+h*i+c*a-s*o)),R(t,r,n),t}function F(t,r){return t[0]=r[12],t[1]=r[13],t[2]=r[14],t}function T(t,r){var n=r[0],e=r[1],o=r[2],a=r[4],i=r[5],u=r[6],c=r[8],s=r[9],f=r[10];return t[0]=Math.hypot(n,e,o),t[1]=Math.hypot(a,i,u),t[2]=Math.hypot(c,s,f),t}function P(t,r){var n=new e(3);T(n,r);var o=1/n[0],a=1/n[1],i=1/n[2],u=r[0]*o,c=r[1]*a,s=r[2]*i,f=r[4]*o,h=r[5]*a,l=r[6]*i,d=r[8]*o,p=r[9]*a,v=r[10]*i,m=u+h+v,M=0;return m>0?(M=2*Math.sqrt(m+1),t[3]=.25*M,t[0]=(l-p)/M,t[1]=(d-s)/M,t[2]=(c-f)/M):u>h&&u>v?(M=2*Math.sqrt(1+u-h-v),t[3]=(l-p)/M,t[0]=.25*M,t[1]=(c+f)/M,t[2]=(d+s)/M):h>v?(M=2*Math.sqrt(1+h-u-v),t[3]=(d-s)/M,t[0]=(c+f)/M,t[1]=.25*M,t[2]=(l+p)/M):(M=2*Math.sqrt(1+v-u-h),t[3]=(c-f)/M,t[0]=(d+s)/M,t[1]=(l+p)/M,t[2]=.25*M),t}function I(t,r,n,e){var o=r[0],a=r[1],i=r[2],u=r[3],c=o+o,s=a+a,f=i+i,h=o*c,l=o*s,d=o*f,p=a*s,v=a*f,m=i*f,M=u*c,w=u*s,b=u*f,y=e[0],g=e[1],x=e[2];return t[0]=(1-(p+m))*y,t[1]=(l+b)*y,t[2]=(d-w)*y,t[3]=0,t[4]=(l-b)*g,t[5]=(1-(h+m))*g,t[6]=(v+M)*g,t[7]=0,t[8]=(d+w)*x,t[9]=(v-M)*x,t[10]=(1-(h+p))*x,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function O(t,r,n,e,o){var a=r[0],i=r[1],u=r[2],c=r[3],s=a+a,f=i+i,h=u+u,l=a*s,d=a*f,p=a*h,v=i*f,m=i*h,M=u*h,w=c*s,b=c*f,y=c*h,g=e[0],x=e[1],E=e[2],L=o[0],A=o[1],S=o[2],R=(1-(v+M))*g,_=(d+y)*g,F=(p-b)*g,T=(d-y)*x,P=(1-(l+M))*x,I=(m+w)*x,O=(p+b)*E,j=(m-w)*E,N=(1-(l+v))*E;return t[0]=R,t[1]=_,t[2]=F,t[3]=0,t[4]=T,t[5]=P,t[6]=I,t[7]=0,t[8]=O,t[9]=j,t[10]=N,t[11]=0,t[12]=n[0]+L-(R*L+T*A+O*S),t[13]=n[1]+A-(_*L+P*A+j*S),t[14]=n[2]+S-(F*L+I*A+N*S),t[15]=1,t}function j(t,r){var n=r[0],e=r[1],o=r[2],a=r[3],i=n+n,u=e+e,c=o+o,s=n*i,f=e*i,h=e*u,l=o*i,d=o*u,p=o*c,v=a*i,m=a*u,M=a*c;return t[0]=1-h-p,t[1]=f+M,t[2]=l-m,t[3]=0,t[4]=f-M,t[5]=1-s-p,t[6]=d+v,t[7]=0,t[8]=l+m,t[9]=d-v,t[10]=1-s-h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function N(t,r,n,e,o,a,i){var u=1/(n-r),c=1/(o-e),s=1/(a-i);return t[0]=2*a*u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*a*c,t[6]=0,t[7]=0,t[8]=(n+r)*u,t[9]=(o+e)*c,t[10]=(i+a)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=i*a*2*s,t[15]=0,t}function B(t,r,n,e,o){var a,i=1/Math.tan(r/2);return t[0]=i/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=o&&o!==1/0?(a=1/(e-o),t[10]=(o+e)*a,t[14]=2*o*e*a):(t[10]=-1,t[14]=-2*e),t}Math.random,Math.PI,Math.hypot||(Math.hypot=function(){for(var t=0,r=arguments.length;r--;)t+=arguments[r]*arguments[r];return Math.sqrt(t)});var U=B;function D(t,r,n,e,o){var a,i=1/Math.tan(r/2);return t[0]=i/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=o&&o!==1/0?(a=1/(e-o),t[10]=o*a,t[14]=o*e*a):(t[10]=-1,t[14]=-e),t}function C(t,r,n,e){var o=Math.tan(r.upDegrees*Math.PI/180),a=Math.tan(r.downDegrees*Math.PI/180),i=Math.tan(r.leftDegrees*Math.PI/180),u=Math.tan(r.rightDegrees*Math.PI/180),c=2/(i+u),s=2/(o+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=-(i-u)*c*.5,t[9]=(o-a)*s*.5,t[10]=e/(n-e),t[11]=-1,t[12]=0,t[13]=0,t[14]=e*n/(n-e),t[15]=0,t}function G(t,r,n,e,o,a,i){var u=1/(r-n),c=1/(e-o),s=1/(a-i);return t[0]=-2*u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*s,t[11]=0,t[12]=(r+n)*u,t[13]=(o+e)*c,t[14]=(i+a)*s,t[15]=1,t}var k=G;function V(t,r,n,e,o,a,i){var u=1/(r-n),c=1/(e-o),s=1/(a-i);return t[0]=-2*u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=s,t[11]=0,t[12]=(r+n)*u,t[13]=(o+e)*c,t[14]=a*s,t[15]=1,t}function q(t,r,e,o){var a,i,u,c,f,h,l,d,p,v,m=r[0],M=r[1],w=r[2],b=o[0],y=o[1],g=o[2],x=e[0],E=e[1],L=e[2];return Math.abs(m-x)<n&&Math.abs(M-E)<n&&Math.abs(w-L)<n?s(t):(l=m-x,d=M-E,p=w-L,a=y*(p*=v=1/Math.hypot(l,d,p))-g*(d*=v),i=g*(l*=v)-b*p,u=b*d-y*l,(v=Math.hypot(a,i,u))?(a*=v=1/v,i*=v,u*=v):(a=0,i=0,u=0),c=d*u-p*i,f=p*a-l*u,h=l*i-d*a,(v=Math.hypot(c,f,h))?(c*=v=1/v,f*=v,h*=v):(c=0,f=0,h=0),t[0]=a,t[1]=c,t[2]=l,t[3]=0,t[4]=i,t[5]=f,t[6]=d,t[7]=0,t[8]=u,t[9]=h,t[10]=p,t[11]=0,t[12]=-(a*m+i*M+u*w),t[13]=-(c*m+f*M+h*w),t[14]=-(l*m+d*M+p*w),t[15]=1,t)}function Y(t,r,n,e){var o=r[0],a=r[1],i=r[2],u=e[0],c=e[1],s=e[2],f=o-n[0],h=a-n[1],l=i-n[2],d=f*f+h*h+l*l;d>0&&(f*=d=1/Math.sqrt(d),h*=d,l*=d);var p=c*l-s*h,v=s*f-u*l,m=u*h-c*f;return(d=p*p+v*v+m*m)>0&&(p*=d=1/Math.sqrt(d),v*=d,m*=d),t[0]=p,t[1]=v,t[2]=m,t[3]=0,t[4]=h*m-l*v,t[5]=l*p-f*m,t[6]=f*v-h*p,t[7]=0,t[8]=f,t[9]=h,t[10]=l,t[11]=0,t[12]=o,t[13]=a,t[14]=i,t[15]=1,t}function H(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function W(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function z(t,r,n){return t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t[3]=r[3]+n[3],t[4]=r[4]+n[4],t[5]=r[5]+n[5],t[6]=r[6]+n[6],t[7]=r[7]+n[7],t[8]=r[8]+n[8],t[9]=r[9]+n[9],t[10]=r[10]+n[10],t[11]=r[11]+n[11],t[12]=r[12]+n[12],t[13]=r[13]+n[13],t[14]=r[14]+n[14],t[15]=r[15]+n[15],t}function X(t,r,n){return t[0]=r[0]-n[0],t[1]=r[1]-n[1],t[2]=r[2]-n[2],t[3]=r[3]-n[3],t[4]=r[4]-n[4],t[5]=r[5]-n[5],t[6]=r[6]-n[6],t[7]=r[7]-n[7],t[8]=r[8]-n[8],t[9]=r[9]-n[9],t[10]=r[10]-n[10],t[11]=r[11]-n[11],t[12]=r[12]-n[12],t[13]=r[13]-n[13],t[14]=r[14]-n[14],t[15]=r[15]-n[15],t}function Z(t,r,n){return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=r[3]*n,t[4]=r[4]*n,t[5]=r[5]*n,t[6]=r[6]*n,t[7]=r[7]*n,t[8]=r[8]*n,t[9]=r[9]*n,t[10]=r[10]*n,t[11]=r[11]*n,t[12]=r[12]*n,t[13]=r[13]*n,t[14]=r[14]*n,t[15]=r[15]*n,t}function Q(t,r,n,e){return t[0]=r[0]+n[0]*e,t[1]=r[1]+n[1]*e,t[2]=r[2]+n[2]*e,t[3]=r[3]+n[3]*e,t[4]=r[4]+n[4]*e,t[5]=r[5]+n[5]*e,t[6]=r[6]+n[6]*e,t[7]=r[7]+n[7]*e,t[8]=r[8]+n[8]*e,t[9]=r[9]+n[9]*e,t[10]=r[10]+n[10]*e,t[11]=r[11]+n[11]*e,t[12]=r[12]+n[12]*e,t[13]=r[13]+n[13]*e,t[14]=r[14]+n[14]*e,t[15]=r[15]+n[15]*e,t}function K(t,r){return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}function J(t,r){var e=t[0],o=t[1],a=t[2],i=t[3],u=t[4],c=t[5],s=t[6],f=t[7],h=t[8],l=t[9],d=t[10],p=t[11],v=t[12],m=t[13],M=t[14],w=t[15],b=r[0],y=r[1],g=r[2],x=r[3],E=r[4],L=r[5],A=r[6],S=r[7],R=r[8],_=r[9],F=r[10],T=r[11],P=r[12],I=r[13],O=r[14],j=r[15];return Math.abs(e-b)<=n*Math.max(1,Math.abs(e),Math.abs(b))&&Math.abs(o-y)<=n*Math.max(1,Math.abs(o),Math.abs(y))&&Math.abs(a-g)<=n*Math.max(1,Math.abs(a),Math.abs(g))&&Math.abs(i-x)<=n*Math.max(1,Math.abs(i),Math.abs(x))&&Math.abs(u-E)<=n*Math.max(1,Math.abs(u),Math.abs(E))&&Math.abs(c-L)<=n*Math.max(1,Math.abs(c),Math.abs(L))&&Math.abs(s-A)<=n*Math.max(1,Math.abs(s),Math.abs(A))&&Math.abs(f-S)<=n*Math.max(1,Math.abs(f),Math.abs(S))&&Math.abs(h-R)<=n*Math.max(1,Math.abs(h),Math.abs(R))&&Math.abs(l-_)<=n*Math.max(1,Math.abs(l),Math.abs(_))&&Math.abs(d-F)<=n*Math.max(1,Math.abs(d),Math.abs(F))&&Math.abs(p-T)<=n*Math.max(1,Math.abs(p),Math.abs(T))&&Math.abs(v-P)<=n*Math.max(1,Math.abs(v),Math.abs(P))&&Math.abs(m-I)<=n*Math.max(1,Math.abs(m),Math.abs(I))&&Math.abs(M-O)<=n*Math.max(1,Math.abs(M),Math.abs(O))&&Math.abs(w-j)<=n*Math.max(1,Math.abs(w),Math.abs(j))}var $=p,tt=X;function rt(t,r,n){var e=t.createShader(r);if(t.shaderSource(e,n),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS)){var o=r===t.VERTEX_SHADER?"VERTEX_SHADER":"FRAGMENT_SHADER";return console.error("An error occurred compiling the ".concat(o,": ").concat(t.getShaderInfoLog(e))),console.error("Shader source that failed to compile:\n".concat(n)),t.deleteShader(e),null}return e}function nt(t,r,n){var e=rt(t,t.VERTEX_SHADER,r),o=rt(t,t.FRAGMENT_SHADER,n),a=t.createProgram();return t.attachShader(a,e),t.attachShader(a,o),t.linkProgram(a),t.getProgramParameter(a,t.LINK_STATUS)?a:(console.error("Unable to initialize the shader program: "+t.getProgramInfoLog(a)),null)}function et(t){if(!t)return console.error("WebGL context is not available."),null;var r=t.createBuffer();if(!r)return console.error("Failed to create a position buffer."),null;t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),t.STATIC_DRAW);var n=t.createBuffer();if(!n)return console.error("Failed to create an index buffer."),null;t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),t.STATIC_DRAW);var e=[0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7,8,9,9,10,10,11,11,8,12,13,13,14,14,15,15,12,16,17,17,18,18,19,19,16,20,21,21,22,22,23,23,20],o=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,o),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(e),t.STATIC_DRAW),{position:r,indices:n,edgeIndices:o,edgeCount:e.length/2}}function ot(t,r,n,e){if(t){t.clearColor(.5,.5,.5,1),t.clearDepth(1),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);var a=45*Math.PI/180,i=t.canvas.clientWidth/t.canvas.clientHeight,u=o();U(u,a,i,.1,100);var c=o();v(c,c,[-0,0,-6]);var s=45*Math.PI/180,f=35*Math.PI/180;M(c,c,s,[0,1,0]),M(c,c,f,[1,0,0]),t.useProgram(r.program),t.uniformMatrix4fv(r.uniformLocations.projectionMatrix,!1,u),t.uniformMatrix4fv(r.uniformLocations.modelViewMatrix,!1,c),t.uniform4f(r.uniformLocations.uColor,1,1,1,1),t.bindBuffer(t.ARRAY_BUFFER,n.position),t.vertexAttribPointer(r.attribLocations.vertexPosition,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(r.attribLocations.vertexPosition),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.indices),t.drawElements(t.TRIANGLES,36,t.UNSIGNED_SHORT,0),t.uniform4f(r.uniformLocations.uColor,0,0,0,1),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.edgeIndices),t.drawElements(t.LINES,n.edgeCount,t.UNSIGNED_SHORT,0)}else console.error("WebGL context is not available.")}function at(t){return at="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(t)}function it(){it=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,n){return t[r]=n}}function f(t,r,n,e){var a=r&&r.prototype instanceof M?r:M,i=Object.create(a.prototype),u=new T(e||[]);return o(i,"_invoke",{value:S(t,n,u)}),i}function h(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var l="suspendedStart",d="suspendedYield",p="executing",v="completed",m={};function M(){}function w(){}function b(){}var y={};s(y,i,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(P([])));x&&x!==n&&e.call(x,i)&&(y=x);var E=b.prototype=M.prototype=Object.create(y);function L(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function A(t,r){function n(o,a,i,u){var c=h(t[o],t,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==at(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,i,u)}),(function(t){n("throw",t,i,u)})):r.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,u)}))}u(c.arg)}var a;o(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}})}function S(r,n,e){var o=l;return function(a,i){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(e.method=a,e.arg=i;;){var u=e.delegate;if(u){var c=R(u,e);if(c){if(c===m)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===l)throw o=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=p;var s=h(r,n,e);if("normal"===s.type){if(o=e.done?v:d,s.arg===m)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=v,e.method="throw",e.arg=s.arg)}}}function R(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,R(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),m;var a=h(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var i=a.arg;return i?i.done?(n[r.resultName]=i.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function F(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(r){if(r||""===r){var n=r[i];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(at(r)+" is not iterable")}return w.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:w,configurable:!0}),w.displayName=s(b,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},L(A.prototype),s(A.prototype,u,(function(){return this})),r.AsyncIterator=A,r.async=function(t,n,e,o,a){void 0===a&&(a=Promise);var i=new A(f(t,n,e,o),a);return r.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(E),s(E,c,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=P,T.prototype={constructor:T,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return u.type="throw",u.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),F(n),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;F(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:P(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),m}},r}function ut(t,r,n,e,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?r(c):Promise.resolve(c).then(e,o)}function ct(){if(window.gl&&window.programInfo&&window.buffers){var t=o();v(t,t,[-0,0,-6]),M(t,t,window.rotationAngles.x,[1,0,0]),M(t,t,window.rotationAngles.y,[0,1,0]),ot(window.gl,window.programInfo,window.buffers,window.projectionMatrix)}else console.error("WebGL context, programInfo, or buffers are not initialized.")}function st(){var t;return t=it().mark((function t(){var r,n,e,a,i;return it().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=function(){a(),requestAnimationFrame(i)},a=function(){if(window.gl&&window.programInfo&&window.buffers){var t=o();v(t,t,[-0,0,-6]),M(t,t,window.rotationAngles.x,[1,0,0]),M(t,t,window.rotationAngles.y,[0,1,0]),ot(n,window.programInfo,window.buffers,window.projectionMatrix)}else console.error("WebGL context, programInfo, or buffers are not initialized.")},r=document.getElementById("webgl-canvas"),n=r.getContext("webgl")){t.next=7;break}return console.error("Unable to initialize WebGL."),t.abrupt("return");case 7:return t.next=9,nt(n,window.vsSource,window.fsSource);case 9:if(e=t.sent){t.next=13;break}return console.error("Initializing shader program failed."),t.abrupt("return");case 13:return window.programInfo={program:e,attribLocations:{vertexPosition:n.getAttribLocation(e,"aVertexPosition")},uniformLocations:{projectionMatrix:n.getUniformLocation(e,"uProjectionMatrix"),modelViewMatrix:n.getUniformLocation(e,"uModelViewMatrix"),uColor:n.getUniformLocation(e,"uColor")}},t.next=16,et(n);case 16:if(window.buffers=t.sent,window.buffers){t.next=20;break}return console.error("Initializing buffers failed."),t.abrupt("return");case 20:setupInteractionHandlers(r),window.projectionMatrix=o(),U(window.projectionMatrix,45*Math.PI/180,n.canvas.clientWidth/n.canvas.clientHeight,.1,100),window.updateScene=a,i();case 25:case"end":return t.stop()}}),t)})),st=function(){var r=this,n=arguments;return new Promise((function(e,o){var a=t.apply(r,n);function i(t){ut(a,e,o,i,u,"next",t)}function u(t){ut(a,e,o,i,u,"throw",t)}i(void 0)}))},st.apply(this,arguments)}window.loadShader=rt,window.initShaderProgram=nt,window.initBuffers=et,window.drawScene=ot,window.render=function t(r,n,e,a){requestAnimationFrame((function(i){if(i){i*=.001,a.value,a.value=i;var u=o(),c=o();u&&c?(ot(r,n,e),requestAnimationFrame(t.bind(null,r,n,e,a))):console.error("Failed to create matrix.")}else console.error("RequestAnimationFrame did not provide a timestamp.")}))},window.mat4=r,window.vsSource="\n    attribute vec4 aVertexPosition;\n    uniform mat4 uModelViewMatrix;\n    uniform mat4 uProjectionMatrix;\n    void main() {\n        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n    }\n",window.fsSource="\n    precision mediump float;\n    uniform vec4 uColor; // Ensure this matches your shader's uniform name\n\n    void main() {\n        gl_FragColor = uColor; // Use the uniform color\n    }\n",window.rotationAngles={x:0,y:0,z:0},window.updateScene=ct,document.addEventListener("DOMContentLoaded",(function(){window.rotationAngles=window.rotationAngles||{x:0,y:0,z:0},ct()})),document.addEventListener("DOMContentLoaded",(function(){return st.apply(this,arguments)}))})();
//# sourceMappingURL=bundle.js.map