!function(r,n,e,t){e=r.createElement(n),e.async=1,e.src="//"+(location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t=r.getElementsByTagName(n)[0],t.parentNode.insertBefore(e,t)}(document,"script");var starter=function(r){"use strict";function n(r,n,e){for(var t=new Array(e),u=0,i=n;e>u;)t[u]=r[i],u=u+1|0,i=i+1|0;return t}function e(r,n,e){if(0>n||n>=r.length)throw[Ce,"index out of bounds"];return r[n]=e,0}function t(r,n){if(0>n||n>=r.length)throw[Ce,"index out of bounds"];return r[n]}function u(r,n){for(var e=new Array(r),t=0,u=r-1|0;u>=t;++t)e[t]=n;return e}function i(r,n,e,t,u){if(n>=t){for(var i=0,a=u-1|0;a>=i;++i)e[i+t|0]=r[i+n|0];return 0}for(var o=u-1|0;o>=0;--o)e[o+t|0]=r[o+n|0];return 0}function a(r,e){for(;;){var t=e,u=r,i=u.length,o=i?i:1,f=t.length,c=o-f|0;if(c){if(0>c){e=n(t,o,0|-c),r=u.apply(null,n(t,0,o));continue}return function(r,n){return function(e){return a(r,n.concat([e]))}}(u,t)}return u.apply(null,t)}}function o(r,n,e){if(e>7||0>e)return a(r,[n]);switch(e){case 0:case 1:return r(n);case 2:return function(e){return r(n,e)};case 3:return function(e,t){return r(n,e,t)};case 4:return function(e,t,u){return r(n,e,t,u)};case 5:return function(e,t,u,i){return r(n,e,t,u,i)};case 6:return function(e,t,u,i,a){return r(n,e,t,u,i,a)};case 7:return function(e,t,u,i,a,o){return r(n,e,t,u,i,a,o)}}}function f(r,n){var e=r.length;return 1===e?r(n):o(r,n,e)}function c(r,n,e,t){if(t>7||0>t)return a(r,[n,e]);switch(t){case 0:case 1:return a(r(n),[e]);case 2:return r(n,e);case 3:return function(t){return r(n,e,t)};case 4:return function(t,u){return r(n,e,t,u)};case 5:return function(t,u,i){return r(n,e,t,u,i)};case 6:return function(t,u,i,a){return r(n,e,t,u,i,a)};case 7:return function(t,u,i,a,o){return r(n,e,t,u,i,a,o)}}}function s(r,n,e){var t=r.length;return 2===t?r(n,e):c(r,n,e,t)}function v(r,n,e,t,u){var i=0;if(u>7||0>u)return a(r,[n,e,t]);switch(u){case 0:case 1:i=1;break;case 2:return a(r(n,e),[t]);case 3:return r(n,e,t);case 4:return function(u){return r(n,e,t,u)};case 5:return function(u,i){return r(n,e,t,u,i)};case 6:return function(u,i,a){return r(n,e,t,u,i,a)};case 7:return function(u,i,a,o){return r(n,e,t,u,i,a,o)}}return 1===i?a(r(n),[e,t]):void 0}function l(r,n,e,t){var u=r.length;return 3===u?r(n,e,t):v(r,n,e,t,u)}function h(r,n){return n.tag=r,n}function d(r,n){return n>r?-1:r===n?0:1}function g(r,n){for(;;){var e=n,t=r;if(t===e)return 0;var u=typeof t,i=typeof e;if("string"===u){var a=t,o=e;return o>a?-1:a===o?0:1}var f=+("number"===u),c=+("number"===i);if(0!==f)return 0!==c?d(t,e):-1;if(0!==c)return 1;if("boolean"===u||"undefined"===u||null===t){var s=t,v=e;return s===v?0:v>s?-1:1}if("function"===u||"function"===i)throw[Ce,"compare: functional value"];var l=0|t.tag,h=0|e.tag;if(250!==l)if(250!==h){if(248===l)return d(t[1],e[1]);if(251===l)throw[Ce,"equal: abstract value"];if(l!==h)return h>l?-1:1;var m=0|t.length,w=0|e.length;if(m===w)for(var p=t,b=e,y=0,A=m;;){var _=y;if(_===A)return 0;var k=g(p[_],b[_]);if(0!==k)return k;y=_+1|0}else if(w>m)for(var C=t,N=e,M=0,D=m;;){var O=M;if(O===D)return-1;var S=g(C[O],N[O]);if(0!==S)return S;M=O+1|0}else for(var T=t,q=e,F=0,E=w;;){var L=F;if(L===E)return 1;var I=g(T[L],q[L]);if(0!==I)return I;F=L+1|0}}else n=e[0];else r=t[0]}}function m(r,n){for(;;){var e=n,t=r;if(t===e)return 1;var u=typeof t;if("string"===u||"number"===u||"boolean"===u||"undefined"===u||null===t)return 0;var i=typeof e;if("function"===u||"function"===i)throw[Ce,"equal: functional value"];if("number"===i||"undefined"===i||null===e)return 0;var a=0|t.tag,o=0|e.tag;if(250!==a)if(250!==o){if(248===a)return+(t[1]===e[1]);if(251===a)throw[Ce,"equal: abstract value"];if(a!==o)return 0;var f=0|t.length,c=0|e.length;if(f!==c)return 0;for(var s=t,v=e,l=0,h=f;;){var d=l;if(d===h)return 1;{if(!m(s[d],v[d]))return 0;l=d+1|0}}}else n=e[0];else r=t[0]}}function w(r,n){return+(g(r,n)>=0)}function p(r,n){return+(g(r,n)<=0)}function b(){return[(4294967295^(0|Date.now()))*Math.random()|0]}function y(){var r="undefined"==typeof process?void 0:process;return void 0!==r?null==r.argv?["",[""]]:[r.argv[0],r.argv]:["",[""]]}function A(r){return+(0!==(2147483648&r))}function _(r,n){var e=n[1],t=r[1],u=t+e&4294967295,i=A(t)&&(A(e)||!A(u))||A(e)&&!A(u)?1:0,a=r[0]+n[0]+i&4294967295;return[a,u>>>0]}function k(r){var n=-1^r[0],e=-1^r[1];return[n,e>>>0]}function C(r,n){return r[0]===n[0]?+(r[1]===n[1]):0}function N(r){return C(r,Le)?Le:_(k(r),xe)}function M(r,n){return _(r,N(n))}function D(r,n){if(n){var e=r[1];if(n>=32)return[e<<(n-32|0),0];var t=e>>>(32-n|0)|r[0]<<n;return[t,e<<n>>>0]}return r}function O(r,n){if(n){var e=r[0];if(32>n){var t=e>>n,u=e<<(32-n|0)|r[1]>>>n;return[t,u>>>0]}var i=e>>(n-32|0);return[e>=0?0:-1,i>>>0]}return r}function S(r){return 0!==r[0]||0!==r[1]?0:1}function T(r,n){for(;;){var e,t=n,u=r,i=0,a=u[0],o=0,f=0,c=0;if(0!==a)c=4;else{if(0===u[1])return Pe;c=4}if(4===c)if(0!==t[0])f=3;else{if(0===t[1])return Pe;f=3}if(3===f&&(-2147483648!==a?o=2:0!==u[1]?o=2:(e=t[1],i=1)),2===o){var s=t[0],v=u[1],l=0;if(-2147483648!==s?l=3:0!==t[1]?l=3:(e=v,i=1),3===l){var h=t[1];if(0>a){if(0>s){n=N(t),r=N(u);continue}return N(T(N(u),t))}if(0>s)return N(T(u,N(t)));var d=a>>>16,g=65535&a,m=v>>>16,w=65535&v,p=s>>>16,b=65535&s,y=h>>>16,A=65535&h,_=0,k=0,C=0,M=w*A;C=(M>>>16)+m*A,k=C>>>16,C=(65535&C)+w*y,k=k+(C>>>16)+g*A,_=k>>>16,k=(65535&k)+m*y,_+=k>>>16,k=(65535&k)+w*b,_+=k>>>16,k=65535&k,_=_+(d*A+g*y+m*b+w*p)&65535;var D=k|_<<16,O=65535&M|(65535&C)<<16;return[D,O>>>0]}}if(1===i)return 0===(1&e)?Pe:Le}}function q(r,n){return[r[0]|n[0],(r[1]|n[1])>>>0]}function F(r,n){var e=n[0],t=r[0];return t>e?1:e>t?0:+(r[1]>=n[1])}function E(r,n){return r[0]>n[0]?1:r[0]<n[0]?0:+(r[1]>n[1])}function L(r,n){return 1-E(r,n)}function I(r){return 4294967296*r[0]+r[1]}function x(r){if(isNaN(r)||!isFinite(r))return Pe;if(Be>=r)return Le;if(r+1>=Ve)return Ie;if(0>r)return N(x(-r));var n=r/Re|0,e=r%Re|0;return[n,e>>>0]}function P(r,n){for(;;){var e=n,t=r,u=t[0],i=0,a=0;if(0!==e[0])a=2;else{if(0===e[1])throw Me;a=2}if(2===a)if(-2147483648!==u)if(0!==u)i=1;else{if(0===t[1])return Pe;i=1}else if(0!==t[1])i=1;else{if(C(e,xe)||C(e,Ue))return t;if(C(e,Le))return xe;var o=e[0],f=O(t,1),c=D(P(f,e),1),s=0;if(0!==c[0])s=3;else{if(0===c[1])return 0>o?xe:N(xe);s=3}if(3===s){var v=T(e,c),l=_(t,N(v));return _(c,P(l,e))}}if(1===i){var h=e[0],d=0;if(-2147483648!==h)d=2;else{if(0===e[1])return Pe;d=2}if(2===d){if(0>u){if(0>h){n=N(e),r=N(t);continue}return N(P(N(t),e))}if(0>h)return N(P(t,N(e)));for(var g=Pe,m=t;F(m,e);){for(var w=Math.max(1,Math.floor(I(m)/I(e))),p=Math.ceil(Math.log(w)/Math.LN2),b=48>=p?1:Math.pow(2,p-48),y=x(w),A=T(y,e);A[0]<0||E(A,m);)w-=b,y=x(w),A=T(y,e);S(y)&&(y=xe),g=_(g,y),m=_(m,N(A))}return g}}}}function U(r,n){var e=T(P(r,n),n);return _(r,N(e))}function R(r){return[0>r?-1:0,r>>>0]}function V(r){if(0>r)throw[Ce,"String.create"];return new Array(r)}function B(r,n,e,t,u){if(u>0){var i=r.length-n|0;if(i>=u){for(var a=0,o=u-1|0;o>=a;++a)e[t+a|0]=r.charCodeAt(n+a|0);return 0}for(var f=0,c=i-1|0;c>=f;++f)e[t+f|0]=r.charCodeAt(n+f|0);for(var s=i,v=u-1|0;v>=s;++s)e[t+s|0]=0;return 0}return 0}function z(r,n,e,t,u){if(u>0){if(r===e){var i=r,a=n,o=t,f=u;if(o>a){for(var c=(i.length-o|0)-1|0,s=f-1|0,v=c>s?s:c,l=v;l>=0;--l)i[o+l|0]=i[a+l|0];return 0}if(a>o){for(var h=(i.length-a|0)-1|0,d=f-1|0,g=h>d?d:h,m=0;g>=m;++m)i[o+m|0]=i[a+m|0];return 0}return 0}var w=r.length-n|0;if(w>=u){for(var p=0,b=u-1|0;b>=p;++p)e[t+p|0]=r[n+p|0];return 0}for(var y=0,A=w-1|0;A>=y;++y)e[t+y|0]=r[n+y|0];for(var _=w,k=u-1|0;k>=_;++_)e[t+_|0]=0;return 0}return 0}function j(r){var n=r,e=0,t=r.length,u="",i=t;if(0===e&&4096>=t&&t===n.length)return String.fromCharCode.apply(null,n);for(var a=0;i>0;){var o=1024>i?i:1024,f=new Array(o);z(n,a,f,0,o),u+=String.fromCharCode.apply(null,f),i=i-o|0,a=a+o|0}return u}function H(r,n){if(0>n||n>=r.length)throw[Ce,"index out of bounds"];return r.charCodeAt(n)}function J(){return ze[0]+=1,ze[0]}function G(r){var n=J(0),e=[r,n];return e.tag=248,e}function K(r,n){return p(r,n)?r:n}function Q(r,n){return w(r,n)?r:n}function W(r,n){return r?[r[0],W(r[1],n)]:n}function X(r){for(var n=0,e=r;;){var t=e,u=n;if(!t)return u;e=t[1],n=u+1|0}}function Y(r,n){if(0>n)throw[Ce,"List.nth"];for(var e=r,t=n;;){var u=t,i=e;if(i){if(u){t=u-1|0,e=i[1];continue}return i[0]}throw[ke,"nth"]}}function Z(r,n){for(;;){var e=n,t=r;if(!t)return e;n=[t[0],e],r=t[1]}}function $(r){return Z(r,0)}function rr(r){return r?W(r[0],rr(r[1])):0}function nr(r,n){if(n){var e=f(r,n[0]);return[e,nr(r,n[1])]}return 0}function er(r,n,e){if(e){var t=s(n,r,e[0]);return[t,er(r+1|0,n,e[1])]}return 0}function tr(r,n){return er(0,r,n)}function ur(r,n){for(;;){var e=n;{if(!e)return 0;f(r,e[0]),n=e[1]}}}function ir(r,n,e){for(;;){var t=e,u=n;if(!t)return u;e=t[1],n=s(r,u,t[0])}}function ar(r,n,e,t){for(;;){var u=t,i=e,a=n;if(i){if(u){t=u[1],e=i[1],n=l(r,a,i[0],u[0]);continue}throw[Ce,"List.fold_left2"]}if(u)throw[Ce,"List.fold_left2"];return a}}function or(r,n){for(;;){var e=n;if(e){if(g(e[0],r)){n=e[1];continue}return 1}return 0}}function fr(r){return function(n){for(var e=0,t=n;;){var u=t,i=e;if(!u)return Z(i,0);var a=u[1],o=u[0];f(r,o)?(t=a,e=[o,i]):t=a}}}function cr(r,n,e){for(var t=u(r,[]),i=0,a=r-1|0;a>=i;++i)t[i]=u(n,e);return t}function sr(r){var e=r.length;return e?n(r,0,e):[]}function vr(r,n,e,t,u){if(0>u||0>n||n>(r.length-u|0)||0>t||t>(e.length-u|0))throw[Ce,"Array.blit"];return i(r,n,e,t,u)}function lr(r,n){for(var e=0,t=n.length-1|0;t>=e;++e)s(r,e,n[e]);return 0}function hr(r,n){if(n){var e=n[0],t=[0],u=[0];ur(function(r){return t[0]=t[0]+1|0,u[0]=u[0]+r.length|0,0},n);var i=V(u[0]+Ee(r.length,t[0]-1|0)|0);B(e,0,i,0,e.length);var a=[e.length];return ur(function(n){return B(r,0,i,a[0],r.length),a[0]=a[0]+r.length|0,B(n,0,i,a[0],n.length),a[0]=a[0]+n.length|0,0},n[1]),j(i)}return""}function dr(r,n){return r[10]===n[10]&&r[1]===n[1]&&m(r[2],n[2])&&m(r[3],n[3])&&m(r[4],n[4])?m(r[0],n[0]):0}function gr(r,n,e){for(;;){var t=e,u=n;if(0>=t)return 1;if(t<<1>u[6])return 0;var i=u[5];if(!i)return 0;var a=i[0];dr(r,a)?(e=t-1|0,n=a):n=a}}function mr(r){return r[6]>=100?1:gr(r,r,2)}function wr(r){return 0!==r?0:1}function pr(r,n,u){return e(t(Je,r),n,[[u,1]]),e(t(Je,r),7-n|0,[[u,0]])}function br(r){return r>=0?+(7>=r):0}function yr(r){return br(r[0])?br(r[1]):0}function Ar(r){var n=sr(r);return lr(function(r,t){return e(n,r,sr(t))},r),n}function _r(r){return[r[0],0]}function kr(r){return[0,r[1]]}function Cr(r,n,u){var i,a=Ar(r[0]),o=function(r,n,u,i){return e(t(a,u),i,t(t(a,r),n)),e(t(a,r),n,0)},f=wr(r[1]),c=r[2],s=r[3],v=[r],l=r[6],h=r[7],d=r[8],g=r[9]+1|0,m=(0|-r[10])+u|0,w=[a,f,c,s,0,v,l,h,d,g,m],p=r[1],b=0;if("number"==typeof n)if(n)if(0!==p){o(0,0,3,0),o(4,0,2,0);var y=w.slice();y[2]=[0,0],y[7]=[2,0],i=y}else{o(0,7,3,7),o(4,7,2,7);var A=w.slice();A[3]=[0,0],A[8]=[2,7],i=A}else if(0!==p){o(7,0,5,0),o(4,0,6,0);var _=w.slice();_[2]=[0,0],_[7]=[6,0],i=_}else{o(7,7,5,7),o(4,7,6,7);var k=w.slice();k[3]=[0,0],k[8]=[6,7],i=k}else if(n.tag){var C=n[2];b=1;var N=0!==p?[6,7]:[1,0],M=N[1];o(n[1],N[0],C,M),e(t(a,C),M,[[n[0],r[1]]]),i=w}else{var D=n[3],O=n[2],S=n[1],T=n[0],q=t(t(r[0],O),D);q||(b=0),o(T,S,O,D);var F,E=t(t(a,O),D);if(!E)throw Ze;switch(F=E[0][0]){case 0:var L=r[1];if(0!==L){var I=w.slice();I[2]=[0,0],I[7]=[O,D],i=I}else{var x=w.slice();x[3]=[0,0],x[8]=[O,D],i=x}break;case 2:var P=r[1];if(0!==P)if(0!==T)if(7!==T)i=w;else if(0!==S)i=w;else{var U=w.slice();U[2]=_r(r[3]),i=U}else if(0!==S)i=w;else{var R=w.slice();R[2]=kr(r[2]),i=R}else if(0!==T)if(7!==T)i=w;else if(7!==S)i=w;else{var V=w.slice();V[3]=_r(r[3]),i=V}else if(7!==S)i=w;else{var B=w.slice();B[3]=kr(r[2]),i=B}break;case 1:case 3:case 4:i=w;break;case 5:b=1;var z,j=t(t(a,O),D),H=r[1];if(j){var J=j[0];z=J[0]>=5?0!==J[1]?0!==H&&T===O&&1===S&&3===D?[T]:0:0!==H||T!==O||6!==S||4!==D?0:[T]:0}else z=0;var G=r[4];if(G){var K=G[0];if(K===O){var Q=r[1];0!==Q?5===D&&e(t(a,K),4,0):2===D&&e(t(a,K),3,0)}}var W=w.slice();W[4]=z,i=W}}var X=i.slice();return X[6]=b?0:r[6]+1|0,X}function Nr(r,n){return[r[0]+n[0]|0,r[1]+n[1]|0]}function Mr(r,n,e,u,i,a,o,f,c){for(;;){var s=c,v=f,l=i,d=u;if(1>v)return s;var g=Nr([d,l],[a,o]),m=g[1],w=g[0];if(!yr([w,m]))return s;var p=t(t(r[0],w),m);if(p)return p[0][1]!==r[1]?[h(0,[n,e,w,m]),s]:s;c=[h(0,[n,e,w,m]),s],f=v-1|0,i=m,u=w}}function Dr(r,n,e,t,u){return rr(nr(function(t){return Mr(r,n,e,n,e,t[0],t[1],u,0)},t))}function Or(r,n,e,u,i,a,o,f){for(;;){var c=f,s=i,v=u;if(1>c)return 0;var l=Nr([v,s],[a,o]),h=l[1],d=l[0];if(!yr([d,h]))return 0;var g=t(t(r[0],d),h);if(g){var m=g[0];return m[1]!==n?or(m[0],e):0}f=c-1|0,i=h,u=d}}function Sr(r,n,e,t,u,i,a){for(;;){var o=i;{if(!o)return 0;var f=o[0];if(Or(r,n,e,t,u,f[0],f[1],a))return 1;i=o[1]}}}function Tr(r,n,e,t){if(Sr(r,n,[2,[1,0]],e,t,rt,10))return 1;if(Sr(r,n,[3,[1,0]],e,t,nt,10))return 1;if(Sr(r,n,[4,0],e,t,$e,1))return 1;if(Sr(r,n,[0,0],e,t,et,1))return 1;var u=1===n?tt:ut;return Sr(r,n,[5,0],e,t,u,1)}function qr(r,n){return[0!==n?r[7]:r[8]]}function Fr(r,n){var e=qr(r,n);if(e){var t=e[0];return Tr(r,n,t[0],t[1])}return 0}function Er(r,n,e,u){for(;;){var i=e;if(i>u)return 1;if(0!==t(t(r[0],i),n))return 0;e=i+1|0}}function Lr(r,n,u,i,a,o){if(n){if(m(t(t(r[0],o),u),[[2,r[1]]])){if(Er(r,u,K(i,a),Q(i,a))){if(Tr(r,r[1],4,u))return 0;var f=Ar(r[0]);e(t(f,4),u,0),e(t(f,i),u,[[0,r[1]]]);var c=r.slice();return 1-Tr((c[0]=f,c),r[1],i,u)}return 0}return 0}return 0}function Ir(r){var n=r[1],e=0!==n?[r[2],0]:[r[3],7],t=e[1],u=e[0];return W(Lr(r,u[0],t,3,1,0)?[1,0]:0,Lr(r,u[1],t,5,6,7)?[0,0]:0)}function xr(r,n,e){var u=function(t){return Dr(r,n,e,t,1)},i=function(t){return Dr(r,n,e,t,10)},a=t(t(r[0],n),e);if(!a)return 0;var o=a[0],f=o[1];if(f!==r[1])return 0;switch(o[0]){case 0:return W(Ir(r),u(et));case 1:return i(et);case 2:return i(rt);case 3:return i(nt);case 4:return u($e);case 5:var c=0!==f?e+1|0:e-1|0,s=[0],v=function(r){return s[0]=[r,s[0]],0},l=[3,[4,[2,[1,0]]]];if(7===c&&1===f||0===c&&0===f){var d=t(t(r[0],n),c);d||ur(function(r){return v(h(1,[r,n,n]))},l),ur(function(e){if(br(e)){var u=t(t(r[0],e),c);return u&&u[0][1]!==f?ur(function(r){return v(h(1,[r,n,e]))},l):0}return 0},[n-1|0,[n+1|0,0]])}else{var g=t(t(r[0],n),c);g||v(h(0,[n,e,n,c])),ur(function(u){if(br(u)){var i=t(t(r[0],u),c);return i&&i[0][1]!==f?v(h(0,[n,e,u,c])):0}return 0},[n-1|0,[n+1|0,0]])}if(1!==e){if(6===e&&!f){var m=t(t(r[0],n),5),w=t(t(r[0],n),4);m||w||v(h(0,[n,e,n,4]))}}else if(0!==f){var p=t(t(r[0],n),2),b=t(t(r[0],n),3);p||b||v(h(0,[n,e,n,3]))}var y=r[4];if(y){var A=y[0],_=0!==f?5:2;ur(function(r){return br(r)&&r===A&&c===_?v(h(0,[n,e,r,c])):0},[n-1|0,[n+1|0,0]])}return s[0]}}function Pr(r){for(var n=0,e=0;7>=e;++e)for(var t=0;7>=t;++t)n=W(xr(r,e,t),n);return n}function Ur(r,n){return 0!==r?n:7-n|0}function Rr(r,n,e,u){var i,a=Ur(u,e);switch(r){case 0:i=1e6-Ee(5,t(t(it,n),a))|0;break;case 1:i=9e3+Ee(10,t(t(it,n),a))|0;break;case 2:i=5e3+Ee(10,t(t(it,n),a))|0;break;case 3:i=3200+Ee(20,t(t(it,n),a))|0;break;case 4:i=3e3+Ee(30,t(t(it,n),a))|0;break;case 5:i=1e3+Ee(30,t(t(it,n),a))|0}return i+Ee(5,a)|0}function Vr(r){return je(function(n){var e=Cr(r,n,0);return 1-Fr(e,r[1])})(Pr(r))}function Br(r){if(mr(r))return 0;var n=Vr(r);return n?h(1,[n]):Fr(r,r[1])?h(0,[wr(r[1])]):0}function zr(r){switch(r){case 0:return"king";case 1:return"queen";case 2:return"rook";case 3:return"bishop";case 4:return"knight";case 5:return"pawn"}}function jr(r){return 0!==r?"white":"black"}function Hr(r,n,e){return r.style[n]=e,0}function Jr(r,n,e,t){var u=n?n[0]:0,i=r.style,a=i.setProperty;return void 0!==a?i.setProperty(e,t,u?"important":null):Hr(r,e,t)}function Gr(r,n,e){return r.insertBefore(n,e)}function Kr(r,n,e,t){return""===n?r.setAttribute(e,t):r.setAttributeNS(n,e,t)}function Qr(r,n,e){return""===n?r.removeAttribute(e):r.removeAttributeNS(n,e)}function Wr(r,n,e,t){return r.addEventListener(n,e,t)}function Xr(r,n,e,t){return r.removeEventListener(n,e,t)}function Yr(r,n){return""===r?document.createElement(n):document.createElementNS(r,n)}function Zr(r,n,e,t,u,i){return h(2,[r,n,e,t,u,i])}function $r(r,n){return h(3,[r,h(1,[n]),[0]])}function rn(r){for(;;){var n=r;switch(0|n.tag){case 0:return"<!-- "+(n[0]+" -->");case 1:return n[0];case 2:var e=n[1],t=n[0];return hr("",["<",[t,[""===t?"":":",[e,[hr("",nr(function(r){var n=r;if("number"==typeof n)return"";switch(0|n.tag){case 0:return hr("",[" ",[n[0],['="',[n[1],['"',0]]]]]);case 1:return hr("",[" ",[n[1],['="',[n[2],['"',0]]]]]);case 2:return hr("",[" data-",[n[0],['="',[n[1],['"',0]]]]]);case 3:return"";case 4:return hr("",[' style="',[hr(";",nr(function(r){return hr("",[r[0],[":",[r[1],[";",0]]]])},n[0])),['"',0]]])}},n[4])),[">",[hr("",nr(rn,n[5])),["</",[e,[">",0]]]]]]]]]]);case 3:r=f(n[1],0);continue;case 4:r=n[1];continue}}}function nn(r,n){return function(e){var t=f(n[0],e);return t?f(r[0][0],t[0]):0}}function en(r){if(r.tag){var n=r[0];return function(){return[n]}}return r[1]}function tn(r,n){return n.tag?r.tag&&m(n[0],r[0])?1:0:r.tag||n[0]!==r[0]?0:1}function un(r,n,e,t){var u=[en(t)],i=nn(r,u);return Wr(n,e,i,0),[[i,u]]}function an(r,n,e){return e?(Xr(r,n,e[0][0],0),0):0}function on(r,n,e,t,u,i,a,o){var f=a[0];if(f){if(e===t){if(o[0]=a[0],tn(u,i))return 0;var c=en(i);return f[0][1][0]=c,0}return a[0]=an(n,e,a[0]),o[0]=un(r,n,t,i),0}return o[0]=un(r,n,t,i),0}function fn(r,n,e,t){if("number"==typeof t)return 0;switch(0|t.tag){case 0:return n[t[0]]=t[1],0;case 1:return Kr(n,t[0],t[1],t[2]);case 2:throw console.log(["TODO:  Add Data Unhandled",t[0],t[1]]),[ke,"TODO:  Add Data Unhandled"];case 3:return t[2][0]=un(r,n,t[0],t[1]),0;case 4:return ir(function(r,e){return Jr(n,0,e[0],e[1])},0,t[0])}}function cn(r,n,e,t){if("number"==typeof t)return 0;switch(0|t.tag){case 0:return n[t[0]]=void 0,0;case 1:return Qr(n,t[0],t[1]);case 2:throw console.log(["TODO:  Remove Data Unhandled",t[0],t[1]]),[ke,"TODO:  Remove Data Unhandled"];case 3:var u=t[2];return u[0]=an(n,t[0],u[0]),0;case 4:return ir(function(r,e){return Jr(n,0,e[0],null)},0,t[0])}}function sn(r,n,e,t,u){return cn(r,n,e,t),fn(r,n,e,u),0}function vn(r,n,e,t,u){if("number"==typeof u)throw[ke,"This should never be called as all entries through NoProp are gated."];switch(0|u.tag){case 0:return n[u[0]]=u[1],0;case 1:return Kr(n,u[0],u[1],u[2]);case 2:throw console.log(["TODO:  Mutate Data Unhandled",u[0],u[1]]),[ke,"TODO:  Mutate Data Unhandled"];case 3:throw[ke,"This will never be called because it is gated"];case 4:if("number"==typeof t)throw[ke,"Passed a non-Style to a new Style as a Mutations while the old Style is not actually a style!"];if(4===t.tag)return ar(function(r,e,t){var u=t[1],i=t[0],a=e[0];return a===i?e[1]===u?0:Jr(n,0,i,u):(Jr(n,0,a,null),Jr(n,0,i,u))},0,t[0],u[0]);throw[ke,"Passed a non-Style to a new Style as a Mutations while the old Style is not actually a style!"]}}function ln(r,n,e,t,u){for(;;){var i=u,a=t,o=e;if(!a)return i?0:1;var f=a[0],c=0;if(!i)return 0;if("number"==typeof f){if("number"==typeof i[0]){u=i[1],t=a[1],e=o+1|0;continue}c=1}else switch(0|f.tag){case 0:var s=i[0];if("number"==typeof s)c=1;else{if(!s.tag){(f[0]!==s[0]||f[1]!==s[1])&&vn(r,n,o,f,s),u=i[1],t=a[1],e=o+1|0;continue}c=1}break;case 1:var v=i[0];if("number"==typeof v)c=1;else{if(1===v.tag){(f[0]!==v[0]||f[1]!==v[1]||f[2]!==v[2])&&vn(r,n,o,f,v),u=i[1],t=a[1],e=o+1|0;continue}c=1}break;case 2:var l=i[0];if("number"==typeof l)c=1;else{if(2===l.tag){(f[0]!==l[0]||f[1]!==l[1])&&vn(r,n,o,f,l),u=i[1],t=a[1],e=o+1|0;continue}c=1}break;case 3:var h=i[0];if("number"==typeof h)c=1;else{if(3===h.tag){on(r,n,f[0],h[0],f[1],h[1],f[2],h[2]),u=i[1],t=a[1],e=o+1|0;continue}c=1}break;case 4:var d=i[0];if("number"==typeof d)c=1;else{if(4===d.tag){m(f[0],d[0])||vn(r,n,o,f,d),u=i[1],t=a[1],e=o+1|0;continue}c=1}}1!==c||(sn(r,n,o,f,i[0]),u=i[1],t=a[1],e=o+1|0)}}function hn(r,n,e,t){return ln(r,n,0,e,t)}function dn(r,n,e,u,i){if(2===i.tag){var a=i[4],o=t(e,u),f=Yr(i[0],i[1]),c=hn(r,f,nr(function(){return 0},a),a);if(0!==c){var s=f.childNodes;return wn(r,f,s,0,0,i[5]),Gr(n,f,o),n.removeChild(o),0}throw[Oe,["/Users/daniel/Playground/tea-chess/node_modules/bucklescript-tea/src/vdom.ml",319,30]]}throw[ke,"Node replacement should never be passed anything but a node itself"]}function gn(r,n){for(;;){var e=n,t=r;switch(0|e.tag){case 0:var u=e[0];return document.createComment(u);case 1:var i=e[0];return document.createTextNode(i);case 2:var a=e[4],o=Yr(e[0],e[1]),c=hn(t,o,nr(function(){return 0},a),a);if(0!==c){var s=o.childNodes;return wn(t,o,s,0,0,e[5]),o}throw[Oe,["/Users/daniel/Playground/tea-chess/node_modules/bucklescript-tea/src/vdom.ml",333,30]];case 3:var v=f(e[1],0);e[2][0]=v,n=v;continue;case 4:n=e[1],r=f(e[0],t);continue}}}function mn(r,n,e,u,i,a){if(2===i.tag){if(2===a.tag){if(i[3]!==a[3]||i[1]!==a[1])return dn(r,n,e,u,a);var o=t(e,u),f=o.childNodes;return hn(r,o,i[4],a[4])||(console.log("VDom:  Failed swapping properties because the property list length changed, use `noProp` to swap properties instead, not by altering the list structure.  This is a massive inefficiency until this issue is resolved."),dn(r,n,e,u,a)),wn(r,o,f,0,i[5],a[5])}throw[ke,"Non-node passed to patchVNodesOnElems_MutateNode"]}throw[ke,"Non-node passed to patchVNodesOnElems_MutateNode"]}function wn(r,n,e,u,i,a){for(;;){var o=a,c=i,s=u;if(!c){if(o){var v=gn(r,o[0]);n.appendChild(v),a=o[1],i=0,u=s+1|0;continue}return 0}var l=c[0],h=0;switch(0|l.tag){case 0:if(o){var d=o[0];if(d.tag)h=1;else{if(l[0]===d[0]){a=o[1],i=c[1],u=s+1|0;continue}h=1}}else h=1;break;case 1:if(o){var g=o[0];if(1===g.tag){var m=g[0];if(l[0]!==m){var w=t(e,s);w.nodeValue=m}a=o[1],i=c[1],u=s+1|0;continue}h=1}else h=1;break;case 2:if(o){var p=o[0];if(2===p.tag){var b=o[1],y=p[2],A=p[1],_=p[0],k=c[1],C=l[2],N=l[1],M=l[0];if(C===y&&""!==C){a=b,i=k,u=s+1|0;continue}if(""===C||""===y){mn(r,n,e,s,l,p),a=b,i=k,u=s+1|0;continue}var D=0,O=0;if(k){var S=k[0];if(2===S.tag){var T=k[1],q=S[2],F=S[1],E=S[0],L=0;if(b){var I=b[0];if(2===I.tag){if(E===_&&F===A&&q===y&&M===I[0]&&N===I[1]&&C===I[2]){var x=t(e,s),P=t(e,s+1|0);n.removeChild(P),Gr(n,P,x),a=b[1],i=T,u=s+2|0;continue}L=4}else L=4}else L=4;if(4===L){if(E===_&&F===A&&q===y){var U=t(e,s);n.removeChild(U),a=b,i=T,u=s+1|0;continue}O=3}}else O=3}else O=3;if(3===O)if(b){var R=b[0];if(2===R.tag){if(M===R[0]&&N===R[1]&&C===R[2]){var V=t(e,s),B=gn(r,p);Gr(n,B,V),a=b,u=s+1|0;continue}D=2}else D=2}else D=2;if(2===D){mn(r,n,e,s,l,p),a=b,i=k,u=s+1|0;continue}}else h=1}else h=1;break;case 3:if(o){var z=o[0];if(3===z.tag){var j=o[1],H=z[2],J=z[1],G=z[0],K=c[1],Q=l[2],W=l[0];if(W===G){H[0]=Q[0],a=j,i=K,u=s+1|0;continue}var X=0,Y=0;if(K){var Z=K[0];if(3===Z.tag){var $=K[1],rr=Z[0],nr=0;if(j){var er=j[0];if(3===er.tag){if(rr===G&&W===er[0]){var tr=t(e,s),ur=t(e,s+1|0);n.removeChild(ur),Gr(n,ur,tr),a=j[1],i=$,u=s+2|0;continue}nr=4}else nr=4}else nr=4;if(4===nr){if(rr===G){var ir=t(e,s);n.removeChild(ir);var ar=Z[2][0];H[0]=ar,a=j,i=$,u=s+1|0;continue}Y=3}}else Y=3}else Y=3;if(3===Y)if(j){var or=j[0];if(3===or.tag){if(or[0]===W){var fr=t(e,s),cr=f(J,0);H[0]=cr;var sr=gn(r,cr);Gr(n,sr,fr),a=j,u=s+1|0;continue}X=2}else X=2}else X=2;if(2===X){var vr=Q[0],lr=f(J,0);H[0]=lr,a=[lr,j],i=[vr,K];continue}}else h=1}else h=1;break;case 4:i=[l[1],c[1]];continue}if(1!==h);else{var hr=c[1];if(o){var dr=o[0];if(4===dr.tag){wn(f(dr[0],r),n,e,s,[l,0],[dr[1],0]),a=o[1],i=hr,u=s+1|0;continue}var gr=t(e,s),mr=gn(r,dr);Gr(n,mr,gr),n.removeChild(gr),a=o[1],i=hr,u=s+1|0;continue}var wr=t(e,s);n.removeChild(wr),a=0,i=hr}}}function pn(r,n,e,t){var u=n.childNodes;return wn(r,n,u,0,e,t),t}function bn(r,n){return[[function(e){return f(n[0][0],f(r,e))}]]}function yn(r,n){var e=function(n){return[[function(e){return f(n[0][0],f(r,e))}]]};return h(4,[e,n])}function An(r,n){if("number"==typeof n)return 0;switch(0|n.tag){case 1:return ir(function(n,e){return An(r,e)},0,n[0]);case 0:case 2:return f(n[0],r)}}function _n(r,n){return h(0,[function(e){return An(bn(r,e),n)}])}function kn(r){return h(1,[r])}function Cn(r,n,e,t,u,i){var a=r?r[0]:"",o=e?e[0]:"",f=t?t[0]:"";return Zr(a,n,o,f,u,i)}function Nn(r,n,e,t){var u=r?r[0]:"",i=n?n[0]:"";return Zr("","div",u,i,e,t)}function Mn(r,n,e,t){var u=r?r[0]:"",i=n?n[0]:"";return Zr("","p",u,i,e,t)}function Dn(r,n,e,t){var u=r?r[0]:"",i=n?n[0]:"";return Zr("","button",u,i,e,t)}function On(r){var n=hr(" ",nr(function(r){return r[0]},je(function(r){return r[1]})(r)));return h(0,["className",n])}function Sn(r){return $r("click",r)}function Tn(){return[1]}function qn(r){var n=at(r[0]);return[[n],vt]}function Fn(r,n){var e=n[0],u=0!==e?[[0,[1,[2,[3,[4,[5,[6,[7,0]]]]]]]],[7,[6,[5,[4,[3,[2,[1,[0,0]]]]]]]]]:[[7,[6,[5,[4,[3,[2,[1,[0,0]]]]]]]],[0,[1,[2,[3,[4,[5,[6,[7,0]]]]]]]]],i=u[0],a=function(n){return Cn(0,"cb-row",0,0,0,nr(function(e){var u,i=n,a=e,o=t(t(r,a),i);if(o){var f=o[0];u=Cn(0,"cb-piece",0,0,[On([[jr(f[1]),1],[[zr(f[0]),1],0]]),0],0)}else u=lt;return Cn(0,"cb-square",0,0,0,[u,0])},i))};return Cn(0,"cb-board",0,0,0,nr(a,u[1]))}function En(){return function(){"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),function(){for(var r=0,n=["ms","moz","webkit","o"],e=0;e<n.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[n[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[e]+"CancelAnimationFrame"]||window[n[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n){var e=(new Date).getTime(),t=Math.max(0,16-(e-r)),u=window.setTimeout(function(){n(e+t)},t);return r=e+t,u}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(r){clearTimeout(r)})}(),0}function Ln(r,n,e,t){var u=function(r,n){for(;;){var e=n,t=r;if("number"==typeof e)return 0;switch(0|e.tag){case 0:var i=e[0];return i?ur(function(r){return function(n){return u(r,n)}}(t),i):0;case 1:return e[2][0]=[f(e[1],t)],0;case 2:var a=f(e[0],t);n=e[1],r=a;continue}}},i=function(r,n){for(;;){var e=n,t=r;if("number"==typeof e)return 0;switch(0|e.tag){case 0:var u=e[0];return u?ur(function(r){return function(n){return i(r,n)}}(t),u):0;case 1:var a=e[2],o=a[0];return o?(a[0]=0,f(o[0],0)):0;case 2:var c=f(e[0],t);n=e[1],r=c;continue}}},a=0;if("number"==typeof e){if("number"==typeof t)return t;a=1}else switch(0|e.tag){case 0:if("number"==typeof t)a=1;else{if(!t.tag){var o=function(e,t){for(;;){var a=t,o=e;if(o){var f=o[1],c=o[0];if(a){Ln(r,n,c,a[0]),t=a[1],e=f;continue}i(r,c),t=0,e=f}else{if(!a)return 0;u(n,a[0]),t=a[1],e=0}}};return o(e[0],t[0]),t}a=1}break;case 1:if("number"==typeof t)a=1;else if(1===t.tag){if(e[0]===t[0])return t[2][0]=e[2][0],t;a=1}else a=1;break;case 2:if("number"==typeof t)a=1;else{if(2===t.tag){var c=f(e[0],r),s=f(t[0],n);return Ln(c,s,e[1],t[1]),t}a=1}}return 1===a?(i(r,e),u(n,t),t):void 0}function In(r,n,e){var t=[r],u=[[function(){return console.log("INVALID enqueue CALL!"),0}]],i=f(n,u),a=[0],o=function(r){var n=a[0];if(n)return a[0]=[[r,n[0]]],0;a[0]=[0];var e=s(i[2],t[0],r);t[0]=e;var u=a[0];if(u){var f=u[0];return f?(a[0]=0,ur(o,$(f))):(a[0]=0,0)}throw[ke,"INVALID message queue state, should never be None during message processing!"]},c=[o];u[0]=c;var v=function(){u[0]=[function(){return console.log("INVALID message enqueued when shut down"),0}];var r=f(e,t[0]);return f(i[3],r),0},l=function(){return f(i[1],t[0])};return f(i[0],0),{pushMsg:o,shutdown:v,getHtmlString:l}}function xn(r,n,e,t,u,i){if(i){var a=i[0];return function(i){var o=[0],c=[t],v=[0],l=function(){var r=v[0];if(r){var e=f(n,c[0]),t=[e,0],u=pn(i,a,o[0],t);return o[0]=u,v[0]=0,0}return 0},h=function(){var r=v[0];return r?0:(v[0]=[-1],l(16))},d=function(){for(;a.childNodes.length>0;){var r=a.firstChild;null!==r&&a.removeChild(r)}return 0},g=[0],m=function(r){var n=f(e,r);return g[0]=Ln(i,i,g[0],n),0},w=function(){return d(0),An(i,u),m(c[0]),v[0]=[-1],l(16),0},p=function(r){return rn(f(n,r))},b=function(n,e){var t=s(r,n,e),u=t[0];return c[0]=u,An(i,t[1]),h(0),m(u),u},y=function(r){return v[0]=0,An(i,r),g[0]=Ln(i,i,g[0],0),o[0]=0,d(0),0};return[w,p,b,y]}}return function(i){var a=[0],o=function(r){var n=f(e,r);return a[0]=Ln(i,i,a[0],n),0};return[function(){return An(i,u),o(t),0},function(r){return rn(f(n,r))},function(n,e){var t=s(r,n,e),u=t[0];return An(i,t[1]),o(u),u},function(r){return An(i,r),a[0]=Ln(i,i,a[0],0),0}]}}function Pn(r,n,e){En(0);var t=f(r[0],e),u=t[0],i=null==n?0:[n],a=xn(r[1],r[2],r[3],u,t[1],i);return In(u,a,r[4])}function Un(r,n,e){return Pn([r[0],r[1],r[2],r[3],function(){return 0}],n,e)}function Rn(r,n,e,t,u,i){var a=((n+r|0)+t|0)+i|0;return(a<<u|a>>>(32-u|0)|0)+e|0}function Vn(r,n,e,t,u,i,a){return Rn(n&e|(-1^n)&t,r,n,u,i,a)}function Bn(r,n,e,t,u,i,a){return Rn(n&t|e&(-1^t),r,n,u,i,a)}function zn(r,n,e,t,u,i,a){return Rn(n^e^t,r,n,u,i,a)}function jn(r,n,e,t,u,i,a){return Rn(e^(n|-1^t),r,n,u,i,a)}function Hn(r,n){var e=r[0],t=r[1],u=r[2],i=r[3];return e=Vn(e,t,u,i,n[0],7,-680876936),i=Vn(i,e,t,u,n[1],12,-389564586),u=Vn(u,i,e,t,n[2],17,606105819),t=Vn(t,u,i,e,n[3],22,-1044525330),e=Vn(e,t,u,i,n[4],7,-176418897),i=Vn(i,e,t,u,n[5],12,1200080426),u=Vn(u,i,e,t,n[6],17,-1473231341),t=Vn(t,u,i,e,n[7],22,-45705983),e=Vn(e,t,u,i,n[8],7,1770035416),i=Vn(i,e,t,u,n[9],12,-1958414417),u=Vn(u,i,e,t,n[10],17,-42063),t=Vn(t,u,i,e,n[11],22,-1990404162),e=Vn(e,t,u,i,n[12],7,1804603682),i=Vn(i,e,t,u,n[13],12,-40341101),u=Vn(u,i,e,t,n[14],17,-1502002290),t=Vn(t,u,i,e,n[15],22,1236535329),e=Bn(e,t,u,i,n[1],5,-165796510),i=Bn(i,e,t,u,n[6],9,-1069501632),u=Bn(u,i,e,t,n[11],14,643717713),t=Bn(t,u,i,e,n[0],20,-373897302),e=Bn(e,t,u,i,n[5],5,-701558691),i=Bn(i,e,t,u,n[10],9,38016083),u=Bn(u,i,e,t,n[15],14,-660478335),t=Bn(t,u,i,e,n[4],20,-405537848),e=Bn(e,t,u,i,n[9],5,568446438),i=Bn(i,e,t,u,n[14],9,-1019803690),u=Bn(u,i,e,t,n[3],14,-187363961),t=Bn(t,u,i,e,n[8],20,1163531501),e=Bn(e,t,u,i,n[13],5,-1444681467),i=Bn(i,e,t,u,n[2],9,-51403784),u=Bn(u,i,e,t,n[7],14,1735328473),t=Bn(t,u,i,e,n[12],20,-1926607734),e=zn(e,t,u,i,n[5],4,-378558),i=zn(i,e,t,u,n[8],11,-2022574463),u=zn(u,i,e,t,n[11],16,1839030562),t=zn(t,u,i,e,n[14],23,-35309556),e=zn(e,t,u,i,n[1],4,-1530992060),i=zn(i,e,t,u,n[4],11,1272893353),u=zn(u,i,e,t,n[7],16,-155497632),t=zn(t,u,i,e,n[10],23,-1094730640),e=zn(e,t,u,i,n[13],4,681279174),i=zn(i,e,t,u,n[0],11,-358537222),u=zn(u,i,e,t,n[3],16,-722521979),t=zn(t,u,i,e,n[6],23,76029189),e=zn(e,t,u,i,n[9],4,-640364487),i=zn(i,e,t,u,n[12],11,-421815835),u=zn(u,i,e,t,n[15],16,530742520),t=zn(t,u,i,e,n[2],23,-995338651),e=jn(e,t,u,i,n[0],6,-198630844),i=jn(i,e,t,u,n[7],10,1126891415),u=jn(u,i,e,t,n[14],15,-1416354905),t=jn(t,u,i,e,n[5],21,-57434055),e=jn(e,t,u,i,n[12],6,1700485571),i=jn(i,e,t,u,n[3],10,-1894986606),u=jn(u,i,e,t,n[10],15,-1051523),t=jn(t,u,i,e,n[1],21,-2054922799),e=jn(e,t,u,i,n[8],6,1873313359),i=jn(i,e,t,u,n[15],10,-30611744),u=jn(u,i,e,t,n[6],15,-1560198380),t=jn(t,u,i,e,n[13],21,1309151649),e=jn(e,t,u,i,n[4],6,-145523070),i=jn(i,e,t,u,n[11],10,-1120210379),u=jn(u,i,e,t,n[2],15,718787259),t=jn(t,u,i,e,n[9],21,-343485551),r[0]=e+r[0]|0,r[1]=t+r[1]|0,r[2]=u+r[2]|0,r[3]=i+r[3]|0,0}function Jn(r,n,e){var t=r.slice(n,e),u=t.length;bt[0]=1732584193,bt[1]=-271733879,bt[2]=-1732584194,bt[3]=271733878;for(var i=0;15>=i;++i)yt[i]=0;for(var a=u/64|0,o=1;a>=o;++o){for(var f=0;15>=f;++f){var c=((o<<6)-64|0)+(f<<2)|0;yt[f]=((t.charCodeAt(c)+(t.charCodeAt(c+1|0)<<8)|0)+(t.charCodeAt(c+2|0)<<16)|0)+(t.charCodeAt(c+3|0)<<24)|0}Hn(bt,yt)}for(var s=t.slice(a<<6),v=0;15>=v;++v)yt[v]=0;for(var l=s.length-1|0,h=0;l>=h;++h)yt[h/4|0]=yt[h/4|0]|s.charCodeAt(h)<<(h%4<<3);var d=l+1|0;if(yt[d/4|0]=yt[d/4|0]|128<<(d%4<<3),d>55){Hn(bt,yt);for(var g=0;15>=g;++g)yt[g]=0}return yt[14]=u<<3,Hn(bt,yt),String.fromCharCode(255&bt[0],bt[0]>>8&255,bt[0]>>16&255,bt[0]>>24&255,255&bt[1],bt[1]>>8&255,bt[1]>>16&255,bt[1]>>24&255,255&bt[2],bt[2]>>8&255,bt[2]>>16&255,bt[2]>>24&255,255&bt[3],bt[3]>>8&255,bt[3]>>16&255,bt[3]>>24&255)}function Gn(r){return Jn(r,0,r.length)}function Kn(r,n){return vr(n[0],0,r[0],0,55),r[1]=n[1],0}function Qn(r,n){for(var u=function(r,n){return Gn(r+n)},i=function(r){return((H(r,0)+(H(r,1)<<8)|0)+(H(r,2)<<16)|0)+(H(r,3)<<24)|0;

},a=n.length?n:[0],o=a.length,f=0;54>=f;++f)e(r[0],f,f);for(var c="x",s=0,v=54+Q(55,o)|0;v>=s;++s){var l=s%55,h=s%o;c=u(c,t(a,h)),e(r[0],l,1073741823&(t(r[0],l)^i(c)))}return r[1]=0,0}function Wn(r){var n=[u(55,0),0];return Qn(n,r),n}function Xn(){return Wn(b(0))}function Yn(r){var n=[u(55,0),0];return Kn(n,r),n}function Zn(r){r[1]=(r[1]+1|0)%55;var n=t(r[0],r[1]),u=t(r[0],(r[1]+24|0)%55)+(n^n>>>25&31)|0,i=1073741823&u;return e(r[0],r[1],i),i}function $n(r,n){if(n>1073741823||0>=n)throw[Ce,"Random.int"];for(var e=r,t=n;;){var u=Zn(e),i=u%t;if(!((u-i|0)>((1073741823-t|0)+1|0)))return i}}function re(r,n){if(0>=n)throw[Ce,"Random.int32"];for(var e=r,t=n;;){var u=Zn(e),i=(1&Zn(e))<<30,a=u|i,o=a%t;if(!((a-o|0)>((wt-t|0)+1|0)))return o}}function ne(r,n){if(L(n,[0,0]))throw[Ce,"Random.int64"];for(var e=r,t=n;;){var u=R(Zn(e)),i=D(R(Zn(e)),30),a=D(R(7&Zn(e)),60),o=q(u,[i[0]|a[0],(i[1]|a[1])>>>0]),f=U(o,t);if(!E(M(o,f),_(M(pt,t),[0,1])))return f}}function ee(r){var n=Zn(r),e=Zn(r);return(n/1073741824+e)/1073741824}function te(r,n){return ee(r)*n}function ue(r){return+(0===(1&Zn(r)))}function ie(r){return Qn(kt,r)}function ae(){return ie(b(0))}function oe(){return Yn(kt)}function fe(r){return Kn(kt,r)}function ce(r,n){return[function(e){return r+Ct[4](e,n)|0}]}function se(r,n){var e=n[0];return h(2,[function(n){var t=oe(0),u=f(e,t);return fe(t),f(n[0][0],f(r,u))}])}function ve(r,n){return h(0,[r,n])}function le(r){return h(1,[r])}function he(r){return h(2,[r])}function de(){return[[ot,[Tn(0),0]],vt]}function ge(r,n,e){return tr(function(e,t){return e===r?n:t},e)}function me(r,n){if(n){var e=n[1];return r?[n[0],me(r-1|0,e)]:e}return 0}function we(r,n){if("number"==typeof n){if(n)return[[r[0],[Tn(0),r[1]]],vt];var e,t=ct(r[0]);if("number"==typeof t)e=vt;else if(t.tag){var u=t[0];e=se(function(r){return h(1,[Y(u,r)])},ce(0,X(u)))}else e=vt;return[r,e]}switch(0|n.tag){case 0:var i=n[0],a=qn(Y(r[1],i),n[1]);return[[r[0],ge(i,a[0],r[1])],_n(function(r){return h(0,[i,r])},a[1])];case 1:return[[ft(r[0],n[0],0),r[1]],vt];case 2:return[[r[0],me(n[0],r[1])],vt]}}function pe(r){var n=function(n,e){return Nn(0,0,0,[mt(function(r){return h(0,[n,r])},Fn(r[0][0],e)),[Mn(0,0,0,[Dn(0,0,[Sn(h(2,[n])),0],[kn("delete board"),0]),nr(function(r){return mt(function(r){return h(0,[n,r])},r)},dt)]),0]])};return Nn(0,0,0,[Mn(0,0,0,[Dn(0,0,[Sn(0),0],[kn("random move"),0]),[Dn(0,0,[Sn(1),0],[kn("add board"),0]),0]]),tr(n,r[1])])}function be(){return gt}function ye(r,n){return Un(Nt,r,n)}var Ae=["Out_of_memory",0],_e=["Sys_error",-1],ke=["Failure",-2],Ce=["Invalid_argument",-3],Ne=["End_of_file",-4],Me=["Division_by_zero",-5],De=["Not_found",-6],Oe=["Match_failure",-7],Se=["Stack_overflow",-8],Te=["Sys_blocked_io",-9],qe=["Assert_failure",-10],Fe=["Undefined_recursive_module",-11];Ae.tag=248,_e.tag=248,ke.tag=248,Ce.tag=248,Ne.tag=248,Me.tag=248,De.tag=248,Oe.tag=248,Se.tag=248,Te.tag=248,qe.tag=248,Fe.tag=248;for(var Ee=Math.imul||function(r,n){return n|=0,((r>>16)*n<<16)+(65535&r)*n|0},Le=[-2147483648,0],Ie=[134217727,1],xe=[0,1],Pe=[0,0],Ue=[-1,4294967295],Re=Math.pow(2,32),Ve=Math.pow(2,63),Be=-Math.pow(2,63),ze=[0],je=(G("Pervasives.Exit"),fr),He=y(0),Je=(G("Sys.Break"),He[1],He[0],G("Js_exn.Error"),G("Array.Bottom"),G("CamlinternalFormat.Type_mismatch"),cr(8,8,0)),Ge=0;7>=Ge;++Ge)pr(Ge,1,5);pr(0,0,2),pr(7,0,2),pr(1,0,4),pr(6,0,4),pr(2,0,3),pr(5,0,3),pr(3,0,1),pr(4,0,0);var Ke=[1,1],Qe=[1,1],We=[4,0],Xe=[4,7],Ye=[Je,1,Ke,Qe,0,0,0,We,Xe,0,0],Ze=G("Ochess.Illegal_move"),$e=[[1,2],[[1,-2],[[2,1],[[2,-1],[[-1,2],[[-1,-2],[[-2,1],[[-2,-1],0]]]]]]]],rt=[[-1,0],[[0,-1],[[0,1],[[1,0],0]]]],nt=[[-1,-1],[[-1,1],[[1,-1],[[1,1],0]]]],et=W(nt,rt),tt=[[-1,1],[[1,1],0]],ut=[[-1,-1],[[1,-1],0]],it=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,3,5,5,3,0,0],[0,0,5,9,9,5,0,0],[0,0,5,9,9,5,0,0],[0,0,3,5,5,3,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],at=(Rr(0,0,0,1)/2|0,G("Ochess.Interrupt"),G("Ochess.Illegal_position"),wr),ot=Ye,ft=Cr,ct=Br,st=h(0,[""]),vt=0,lt=st,ht=Dn(0,0,[Sn(0),0],[kn("flip board"),0]),dt=[ht,0],gt=0,mt=yn,wt=2147483647,pt=[2147483647,4294967295],bt=[1732584193,-271733879,-1732584194,271733878],yt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],At=54,_t=32===At?re:function(r,n){return 0|ne(r,R(n))[1]},kt=[[987910699,495797812,364182224,414272206,318284740,990407751,383018966,270373319,840823159,24560019,536292337,512266505,189156120,730249596,143776328,51606627,140166561,366354223,1003410265,700563762,981890670,913149062,526082594,1021425055,784300257,667753350,630144451,949649812,48546892,415514493,258888527,511570777,89983870,283659902,308386020,242688715,482270760,865188196,1027664170,207196989,193777847,619708188,671350186,149669678,257044018,87658204,558145612,183450813,28133145,901332182,710253903,510646120,652377910,409934019,801085050],0],Ct=[Wn,Xn,Yn,Zn,$n,re,_t,ne,te,ue];ae(0);var Nt=[de,we,pe,be],Mt=0,Dt=1;return r.board_msg=ve,r.random_button=Mt,r.random_move=le,r.add_board=Dt,r.delete_board=he,r.init=de,r.replace_nth=ge,r.delete_nth=me,r.update=we,r.view=pe,r.subscriptions=be,r.main=ye,r}({});