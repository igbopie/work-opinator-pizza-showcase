/*
  Copyright 2010, 2011 Genuitec, LLC
  Licensed under the MobiOne Studio End User License, (the "License");
  This header will appear in all HTML files generated by MobiOne Studio(tm)
  operating in "trial" mode.  While in trial mode, you may only use
  MobiOne for evaluation.  You may not use the trial version of MobiOne
  for any commercial, enterprise or corporate (for profit or nonprofit)
  purpose unless expressly licensed to do otherwise.  You may not modify
  or remove this header for any reason prior to purchasing and activating
  a license for MobiOne.  Upon activation,  MobiOne will not generate
  this header.  You may obtain a copy of the MobiOne License at
  
  http://genuitec.com/mobile/mobione/1.0/LICENSE.html
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var m1Design = function() { m1Design = {}; var e="m1-";var f=function(d){return e+d};var g="http://www.opinator.net/opi";var h="_self";var i={action0:function(){window.open(g,h)}};var j="Opinator5";var k="Opinator5.html";var l="Opinator5.css";var m="Opinator5_custom.js";var n="e2";var o="e1";var p="e0";var q="m1-Opinator5-image1";var r="px";var s="e3";var t="m1-Opinator5-custom1";var u="e4";var v="m1-Opinator5-image3";
var w={Opinator5:{id:j,anchor_id:"#m1-Opinator5",dynamic:false,html_url:function(){return k},css_url:function(){return l},js_url:function(){return m},resize:function(d,c){var a;var b={};var Y;a=b[n]={w:d,h:c,py:0};a=b[o]={w:d,h:c,py:0};try{a=b[p]={e:document.getElementById(q),w:0,h:0,py:0,p:b[o]};a.e.style.left=Math.max((a.p.w-320)*1,0)+r;a.w=320;a.e.style.top=Math.max((a.p.h-200)*0.5154,0)-a.p.py+r;a.h=200;a.p.py+=Math.max(200,0)}catch(Z){}try{a=b[s]={e:document.getElementById(t),w:0,h:0,py:0,p:b[o]};
a.e.style.left=Math.max((a.p.w-100)*0.4955,0)+r;a.w=100;a.e.style.top=Math.max((a.p.h-30)*0.9744,0)-a.p.py+r;a.h=30;a.p.py+=Math.max(30,2)}catch($){}try{a=b[u]={e:document.getElementById(v),w:0,h:0,py:0,p:b[o]};a.e.style.left=Math.max((a.p.w-320)*1,0)+r;a.w=320;a.e.style.top=Math.max((a.p.h-60)*0,0)-a.p.py+r;a.h=60;a.p.py+=Math.max(60,0)}catch(aa){}}}};var x="document";var y="body";var z="createElement";var A="a";var B="innerText";var C="";var D="href";
var E="";var F="style";var G="position";var H="absolute";var I="fontFamily";var J="Helvetica";var K="fontSize";var L="9px";var M="color";var N="red";var O="top";var P="0px";var Q="left";var R="width";var S="98%";var T="textAlign";var U="right";var V="zIndex";var W="1000";var X="appendChild";
window["addEventListener"]("load",function(){var d=window[x][y];var c=window[x][z](A);c[B]=C;c[D]=E;var a=c[F];a[G]=H;a[I]=J;a[K]=L;a[M]=N;a[O]=P;a[Q]=P;a[R]=S;a[T]=U;a[V]=W;d[X](c)});m1Design["css"]=f;m1Design["pages"]=w;m1Design["actions"]=i;m1Design["shouldHideAddressBar"]=true;m1Design["root"]=function(){return j}; return m1Design; }();