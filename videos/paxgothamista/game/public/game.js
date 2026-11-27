(()=>{var is=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var yr=is((dv,cc)=>{"use strict";var Zi=[{id:"morticia",name:"Morticia Belladonna",stone:"A",color:"#F37079",glow:"#ff5f72",emblem:"horns",girl:"girl_1",face:"face_nft_01",power:"Drop Dead Gorgeous",powerDesc:"SCORE \xD72",zone:{x:400,y:450,r:150},impact:{x:400,y:380},rise:{x:398,base:860,h:800,ground:650},depth:22},{id:"vera",name:"Vera Locks",stone:"B",color:"#FFD2F3",glow:"#ff9fdc",emblem:"heart",girl:"girl_3",face:"face_nft_06",power:"Heartstrings",powerDesc:"SOUL MAGNET",zone:{x:778,y:470,r:140},impact:{x:778,y:395},rise:{x:782,base:720,h:660,ground:560},depth:24},{id:"rowena",name:"Rowena Inkgrave",stone:"C",color:"#B79CFF",glow:"#a77dff",emblem:"crown",girl:"girl_5",face:"face_nft_02",power:"Bad Influence",powerDesc:"BOTS TURN INTO SOULS",zone:{x:870,y:760,r:160},impact:{x:870,y:705},rise:{x:985,base:965,h:700,ground:872},depth:20},{id:"odette",name:"Odette Noir",stone:"D",color:"#8899E7",glow:"#7f93ff",emblem:"rose",girl:"girl_4",face:"face_nft_03",power:"Thorn Veil",powerDesc:"THORNS SHRED BOTS",zone:{x:1255,y:560,r:150},impact:{x:1255,y:485},rise:{x:1262,base:880,h:760,ground:700},depth:22.5},{id:"falon",name:"Falon St Clair",stone:"E",color:"#8ED4E8",glow:"#7fe3ff",emblem:"halo",girl:"girl_2",face:"face_nft_05",power:"Halo Hour",powerDesc:"TIME SLOWS",zone:{x:1540,y:700,r:155},impact:{x:1540,y:620},rise:{x:1545,base:965,h:800,ground:830},depth:20.5}],Pg=[1,0,3,2,4],$i=5,st={RISE:.55,LEAVE:.75,DIVE:.28,STAY:4.2,POWER:5,CATCH_R:78,MAXC:3,SLASH_R:185,SLASH_T:.24,SLASH_CD:.5,BOT_R:58,INVULN:1.3,GROUND:960,MAXV:1050,ACC:5200,COMBO_T:2.3,THORN_R:115,INFL_R:230,FH_CD:9};function tu(n){let e=n>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}var oi=(n,e,t)=>Math.max(e,Math.min(t,n)),Vn=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y);function nu(n={}){let e={t:n.t0||0,shift:n.shift||60,cfg:n,R:tu(n.seed||1),idc:1,mort:{x:n.mortX??960,y:n.mortY??300,vx:0,vy:0,slashT:-9,hitT:-9,trail:[]},souls:[],bots:[],cups:[],carried:[],graves:Zi.map(()=>({state:"empty",riseT:-9,endT:-9,leaveT:-9,pops:[],fh:!1})),powers:{morticia:-9,vera:-9,rowena:-9,odette:-9,falon:-9},score:n.score||0,combo:n.combo||0,lastDeliver:-9,best:n.combo||0,reborn:n.reborn||0,banished:0,coffee:n.coffee??5,spawns:(n.spawns||[]).slice().sort((t,i)=>t.t-i.t),gen:n.endless?{next:(n.t0||0)+.4,botNext:(n.t0||0)+7,cupNext:(n.t0||0)+18,massNext:(n.t0||0)+24,rareNext:(n.t0||0)+30}:null,events:[],over:!1,fullHouseT:-9,lastMass:-9};return(n.preset||[]).forEach(t=>{let i=e.graves[t.g];i.state="risen",i.riseT=e.t-(t.age||1),i.endT=e.t+t.remaining,t.power!==!1&&(e.powers[Zi[t.g].id]=e.t+(t.power??3))}),(n.carry||[]).forEach(t=>{let i=Yi(e,t,e.mort.x,e.mort.y);i.state="carried",i.catchT=e.t-1,e.carried.push(i.id)}),(n.presetSouls||[]).forEach(t=>Yi(e,t.type,t.x,t.y,t)),(n.presetBots||[]).forEach(t=>Oa(e,t.x,t.y)),e}function bt(n,e,t){let i=Object.assign({type:e,t:n.t,id:n.idc++},t||{});return n.events.push(i),i}function Yi(n,e,t,i,s={}){let r={id:n.idc++,type:e,x:t,y:i,x0:t,vy:s.vy||70+n.R()*55,sway:30+n.R()*40,ph:n.R()*6.28,f:.8+n.R()*.8,state:"fall",spawnT:n.t,trail:[],mass:!!s.mass};return n.souls.push(r),r}function Oa(n,e,t,i={}){let s=i.speed||150+n.R()*70,r=n.mort.x-e,o=n.mort.y-t,a=Math.hypot(r,o)||1,l={id:n.idc++,x:e,y:t,vx:r/a*s*.8,vy:o/a*s*.8,speed:s,state:"hunt",spawnT:n.t,ph:n.R()*6.28,trail:[]};return n.bots.push(l),l}function Vs(n,e){return n.powers[e]>n.t}function iu(n,e){return(n.state==="rising"||n.state==="risen")&&e<n.endT}function Ai(n){return Math.min(8,1+Math.floor(n.combo/2))*(Vs(n,"morticia")?2:1)}function Ig(n){for(;n.spawns.length&&n.spawns[0].t<=n.t;){let i=n.spawns.shift();if(i.kind==="soul"||i.kind==="rare"){i.mass&&n.t-n.lastMass>4&&bt(n,"mass",{}),i.mass&&(n.lastMass=n.t);let s=i.near!=null?oi(n.mort.x+i.near,120,1800):i.x??240+n.R()*1440,r=i.near!=null?oi(n.mort.y+(i.ny||-160),60,700):i.y??-60,o=Yi(n,i.kind==="rare"?$i:i.type,s,r,i);bt(n,"spawn",{soul:o.id,st:o.type})}if(i.kind==="bot"&&i.ahead){let s=n.mort,r=Math.hypot(s.vx,s.vy)||1,o=Oa(n,s.x+s.vx/r*i.ahead,s.y+s.vy/r*i.ahead,i);bt(n,"botspawn",{bot:o.id});continue}if(i.kind==="bot"){let s=i.near!=null?n.mort.x+i.near:i.x??(n.R()<.5?-60:1980),r=i.near!=null?n.mort.y+(i.ny||0):i.y??120+n.R()*400,o=Oa(n,s,r,i);bt(n,"botspawn",{bot:o.id})}i.kind==="cup"&&n.cups.push({id:n.idc++,x:i.x??300+n.R()*1300,y:-60,vy:95,state:"fall",spawnT:n.t})}let e=n.gen;if(!e||n.over)return;let t=oi((n.t-(n.cfg.t0||0))/n.shift,0,1);if(n.t>=e.next){let i=Yi(n,Math.floor(n.R()*5),240+n.R()*1440,-60);i.vy*=1+t*.6,e.next=n.t+Hs(1.15,.55,t)*(.7+n.R()*.6)}if(n.t>=e.botNext){let i=1+(t>.3?1:0)+(t>.65?1:0);for(let s=0;s<i;s++)Oa(n,n.R()<.5?-60:1980,100+n.R()*500,{speed:175+t*120});bt(n,"botspawn",{}),e.botNext=n.t+Hs(4.6,2.2,t)}if(n.t>=e.cupNext&&(n.cups.push({id:n.idc++,x:300+n.R()*1300,y:-60,vy:95,state:"fall",spawnT:n.t}),e.cupNext=n.t+15+n.R()*6),n.t>=e.massNext){bt(n,"mass",{});for(let i=0;i<7;i++){let s=Yi(n,Math.floor(n.R()*5),200+i*240+n.R()*60,-60-i*40);s.mass=!0}e.massNext=n.t+22}n.t>=e.rareNext&&(Yi(n,$i,400+n.R()*1100,-60),e.rareNext=n.t+26)}var Hs=(n,e,t)=>n+(e-n)*t;function Lg(n,e,t){e.state="dive",e.diveT=n.t,e.dx=e.x,e.dy=e.y,e.target=t,e.impactT=n.t+st.DIVE}function Dg(n,e){let t=e.target,i=n.graves[t];if(e.state="done",n.combo=n.t-n.lastDeliver<st.COMBO_T?n.combo+1:1,n.lastDeliver=n.t,n.best=Math.max(n.best,n.combo),n.reborn++,e.type===$i){n.score+=6666,bt(n,"special",{g:t,delta:6666,score:n.score});return}let s=100*Ai(n);n.score+=s;let r=i.state==="rising"||i.state==="risen";if(r?(i.pops.push(n.t),i.endT=Math.max(i.endT,n.t+st.STAY),bt(n,"pop",{g:t,delta:s,mult:Ai(n),combo:n.combo,score:n.score})):(i.state="rising",i.riseT=n.t,i.pops=[],i.endT=n.t+st.RISE+st.STAY,bt(n,"rise",{g:t,delta:s,mult:Ai(n),combo:n.combo,score:n.score})),!r){let o=Zi[t].id,a=Vs(n,o);n.powers[o]=Math.max(n.powers[o],n.t+st.POWER),a||bt(n,"power",{g:t})}if(n.graves.every(o=>iu(o,n.t+.001))&&n.t-n.fullHouseT>st.FH_CD){n.fullHouseT=n.t,n.score+=5e3,bt(n,"fullhouse",{delta:5e3,score:n.score}),n.graves.forEach(o=>{o.endT=n.t+(n.cfg.fhHold||2.6),o.fh=!0});for(let o of n.bots)o.state==="hunt"&&(o.state="dead",o.deadT=n.t,o.by="fullhouse",n.banished++,bt(n,"botkill",{bot:o.id,x:o.x,y:o.y,by:"fullhouse"}));for(let o in n.powers)n.powers[o]=Math.max(n.powers[o],n.t+3)}}function su(n){let e=n.mort,t={x:e.x,y:e.y,slash:!1},s=n.bots.filter(h=>h.state==="hunt"&&h.x>-40&&h.x<1960).map(h=>({b:h,d:Vn(h,e)})).sort((h,d)=>h.d-d.d)[0],r=(n.cfg.aiBlind||[]).some(([h,d])=>n.t>=h&&n.t<d);!r&&s&&s.d<st.SLASH_R*(n.cfg.aiReach||.8)&&n.t-e.slashT>st.SLASH_CD&&(t.slash=!0);let o=n.carried.map(h=>n.souls.find(d=>d.id===h)).filter(Boolean),a=n.souls.filter(h=>h.state==="fall"&&h.y>40&&h.y<st.GROUND-20),l=h=>{let d=Vn(h,e),g=(st.GROUND-h.y)/Math.max(40,h.vy),v=o.some(m=>m.type===h.type)?-120:0;return d+(g<3?-200:0)+v+(h.type===$i?-400:0)},c=null,u=a.slice().sort((h,d)=>l(h)-l(d))[0];if(o.length&&(o.length>=st.MAXC||!u||Vn(u,e)>520)){let h=null;for(let d of o)for(let g=0;g<5;g++){if(d.type!==$i&&d.type!==g)continue;let v=Zi[g].zone,m=Vn(v,e);(!h||m<h.d)&&(h={d:m,z:v})}h&&(c={x:h.z.x,y:h.z.y})}if(!c&&u){let h=oi(Vn(u,e)/900,0,.8);c={x:u.x,y:u.y+u.vy*h}}let f=n.cups.find(h=>h.state==="fall"&&n.coffee<5);return f&&(!c||Vn(f,e)<360)&&(c={x:f.x,y:f.y+60}),c||(c={x:960+Math.sin(n.t*.7)*280,y:300+Math.sin(n.t*1.1)*60}),!r&&s&&s.d<120&&n.t-e.slashT<st.SLASH_CD&&(c={x:e.x+(e.x-s.b.x)*2,y:e.y+(e.y-s.b.y)*2}),!r&&s&&s.d<330&&n.t-e.slashT>st.SLASH_CD*.8&&(c={x:Hs(c.x,s.b.x,.55),y:Hs(c.y,s.b.y,.55)}),t.x=c.x,t.y=c.y,t}function ru(n,e,t){n.t+=e;let i=n.t;if(n.over){jh(n,e,i,!0);return}Ig(n);let s=n.mort,r=t||(n.cfg.autoplay?su(n):null);if(r){let o=oi(r.x,80,1840),a=oi(r.y,90,900),l=o-s.x,c=a-s.y,u=14,f=l*5.2,h=c*5.2;s.vx+=(f-s.vx)*Math.min(1,u*e),s.vy+=(h-s.vy)*Math.min(1,u*e);let d=Math.hypot(s.vx,s.vy);d>st.MAXV&&(s.vx*=st.MAXV/d,s.vy*=st.MAXV/d),r.slash&&i-s.slashT>st.SLASH_CD&&(s.slashT=i,bt(n,"slash",{x:s.x,y:s.y}))}s.x+=s.vx*e,s.y+=s.vy*e,s.x=oi(s.x,60,1860),s.y=oi(s.y,70,920),vr(s,i),jh(n,e,i,!1),i>=(n.cfg.t0||0)+n.shift&&(n.over=!0,bt(n,"dawn",{score:n.score}))}function vr(n,e){let t=n.trail;(!t.length||e-t[t.length-1].t>=1/30)&&(t.push({x:n.x,y:n.y,t:e}),t.length>36&&t.shift())}function au(n,e,t){let i=n.trail,s=e-t;for(let r=i.length-1;r>=0;r--)if(i[r].t<=s)return i[r];return i[0]||n}function jh(n,e,t,i){let s=n.mort,r=Vs(n,"falon")?.45:1,o=e*r,a=t-s.slashT<st.SLASH_T;for(let l of n.souls)if(l.state==="fall"){if(l.y+=l.vy*o,l.x=l.x0+Math.sin((t-l.spawnT)*l.f+l.ph)*l.sway,!i&&Vs(n,"vera")){let c=Vn(l,s);if(c<420){let u=(1-c/420)*520*e;l.x0+=(s.x-l.x)/c*u,l.y+=(s.y-l.y)/c*u}}vr(l,t),!i&&n.carried.length<st.MAXC&&Vn(l,s)<st.CATCH_R?(l.state="carried",l.catchT=t,n.carried.push(l.id),bt(n,"catch",{soul:l.id,st:l.type,n:n.carried.length})):l.y>st.GROUND&&(l.state="lost",l.lostT=t,i||(n.combo=0,bt(n,"lost",{soul:l.id,x:l.x})))}else if(l.state==="carried"){let c=n.carried.indexOf(l.id),u=au(s,t,.1+c*.11);l.x+=(u.x+Math.sin(t*6+c)*10-l.x)*Math.min(1,18*e),l.y+=(u.y+30+Math.cos(t*5+c)*8-l.y)*Math.min(1,18*e),vr(l,t)}else if(l.state==="dive"){let c=Zi[l.target].impact,u=oi((t-l.diveT)/st.DIVE,0,1),f=u*u;l.x=Hs(l.dx,c.x,f)+Math.sin(u*Math.PI)*40,l.y=Hs(l.dy,c.y,f)-Math.sin(u*Math.PI)*60,vr(l,t),t>=l.impactT&&Dg(n,l)}if(!i)for(let l=0;l<5;l++){let c=Zi[l].zone;if(!(Vn(c,s)>c.r))for(let u of n.carried.slice()){let f=n.souls.find(h=>h.id===u);f&&(f.type===l||f.type===$i)&&(n.carried.splice(n.carried.indexOf(u),1),Lg(n,f,l),bt(n,"deliver",{soul:f.id,g:l,st:f.type}))}}for(let l of n.bots){if(l.state!=="hunt")continue;let c=n.carried[n.carried.length-1],u=c&&n.souls.find(p=>p.id===c),f=u||s,h=f.x-l.x,d=f.y-l.y,g=Math.hypot(h,d)||1,v=Math.hypot(s.x-l.x,s.y-l.y)||1,m=Math.sin((t-l.spawnT)*3+l.ph)*60;if(l.vx+=(h/g*l.speed-l.vx+-d/g*m)*Math.min(1,2.4*o),l.vy+=(d/g*l.speed-l.vy+h/g*m)*Math.min(1,2.4*o),l.x+=l.vx*o,l.y+=l.vy*o,vr(l,t),!i){if(Vs(n,"rowena")&&v<st.INFL_R){l.state="converted",l.deadT=t;let p=Yi(n,Math.floor(n.R()*5),l.x,l.y,{vy:60});bt(n,"convert",{bot:l.id,soul:p.id,x:l.x,y:l.y});continue}if(Vs(n,"odette")&&v<st.THORN_R){l.state="dead",l.deadT=t,l.by="thorns",n.banished++,n.score+=50*Ai(n),bt(n,"botkill",{bot:l.id,x:l.x,y:l.y,by:"thorns",delta:50*Ai(n),score:n.score});continue}if(a&&v<st.SLASH_R){l.state="dead",l.deadT=t,l.by="scythe",n.banished++,n.score+=50*Ai(n),bt(n,"botkill",{bot:l.id,x:l.x,y:l.y,by:"scythe",delta:50*Ai(n),score:n.score});continue}if(u&&Math.hypot(u.x-l.x,u.y-l.y)<48&&t-s.hitT>st.INVULN*.5){n.carried.pop(),u.state="stolen",u.lostT=t,n.combo=0,l.state="fled",l.deadT=t,s.hitT=t-st.INVULN*.5,bt(n,"steal",{bot:l.id,x:u.x,y:u.y});continue}if(v<st.BOT_R&&t-s.hitT>st.INVULN){s.hitT=t,n.coffee=Math.max(0,n.coffee-1),n.combo=0,s.vx+=-h/v*900,s.vy+=-d/v*900;let p=n.carried.pop();if(p){let E=n.souls.find(w=>w.id===p);E.state="stolen",E.lostT=t}l.state="fled",l.deadT=t,bt(n,"hit",{bot:l.id,x:s.x,y:s.y,coffee:n.coffee,stolen:!!p}),n.coffee===0&&(n.over=!0,bt(n,"passout",{score:n.score}))}}}for(let l of n.cups)l.state==="fall"&&(l.y+=l.vy*o,!i&&Vn(l,s)<80?(l.state="got",l.gotT=t,n.coffee=Math.min(5,n.coffee+1),bt(n,"coffee",{x:l.x,y:l.y,coffee:n.coffee})):l.y>st.GROUND+40&&(l.state="gone"));n.graves.forEach((l,c)=>{l.state==="rising"&&t>=l.riseT+st.RISE&&(l.state="risen"),(l.state==="risen"||l.state==="rising")&&t>=l.endT&&(l.state="leaving",l.leaveT=t,bt(n,"leave",{g:c,fh:l.fh})),l.state==="leaving"&&t>=l.leaveT+st.LEAVE&&(l.state="empty",l.fh=!1)}),n.souls=n.souls.filter(l=>!(l.state==="done"&&t-l.impactT>.5||(l.state==="lost"||l.state==="stolen")&&t-l.lostT>1.2)),n.bots=n.bots.filter(l=>l.state==="hunt"?l.x>-400&&l.x<2320&&l.y>-400&&l.y<1500:t-l.deadT<1),n.cups=n.cups.filter(l=>l.state==="fall"||l.state==="got"&&t-l.gotT<.8)}function lc(n){let e=t=>Object.assign({},t,{trail:t.trail?t.trail.slice(-12):void 0});return{t:n.t,t0:n.cfg.t0||0,shift:n.shift,mort:e(n.mort),souls:n.souls.map(e),bots:n.bots.map(e),cups:n.cups.map(t=>Object.assign({},t)),carried:n.carried.slice(),graves:n.graves.map(t=>({state:t.state,riseT:t.riseT,endT:t.endT,leaveT:t.leaveT,pops:t.pops.slice(),fh:t.fh})),powers:Object.assign({},n.powers),score:n.score,combo:n.combo,best:n.best,reborn:n.reborn,banished:n.banished,coffee:n.coffee,over:n.over,mult:Ai(n)}}function Ug(n,e,t=60){let i=nu(Object.assign({autoplay:!0},n)),s=[lc(i)],r=2;for(let o=1;o<=Math.round(e*t);o++){for(let a=0;a<r;a++)ru(i,1/(t*r));s.push(lc(i))}return{frames:s,events:i.events,game:i,fps:t}}var eu={GRAVES:Zi,DEPTH:Pg,RARE:$i,C:st,newGame:nu,step:ru,snapshot:lc,runTake:Ug,ai:su,isUp:iu,powerOn:(n,e)=>n.powers[e]>n.t,rng:tu,trailAt:au};typeof cc<"u"?cc.exports=eu:globalThis.RebornEngine2=eu});var ou=is((pv,hc)=>{"use strict";(function(n){let e=[{id:"morticia",name:"Morticia Belladonna",first:"Morticia",last:"Belladonna",stone:"A",color:"#F37079",glow:"#ff5f72",emblem:"horns",girl:"girl_1",face:"face_nft_01",nft:"nft_01_900",fact:"Just because you\u2019re dead doesn\u2019t mean you can\u2019t be beautiful.",drop:{x:395,y:245},impact:{x:400,y:380},rise:{x:398,base:860,h:800,ground:650}},{id:"vera",name:"Vera Locks",first:"Vera",last:"Locks",stone:"B",color:"#FFD2F3",glow:"#ff9fdc",emblem:"heart",girl:"girl_3",face:"face_nft_06",nft:"nft_06_900",fact:"Hearts are her specialty. Handle yours carefully.",drop:{x:778,y:250},impact:{x:778,y:395},rise:{x:782,base:720,h:660,ground:560}},{id:"rowena",name:"Rowena Inkgrave",first:"Rowena",last:"Inkgrave",stone:"C",color:"#B79CFF",glow:"#a77dff",emblem:"crown",girl:"girl_5",face:"face_nft_02",nft:"nft_02_900",fact:"A bad influence? She prefers trendsetter.",drop:{x:880,y:520},impact:{x:870,y:705},rise:{x:985,base:965,h:700,ground:872}},{id:"odette",name:"Odette Noir",first:"Odette",last:"Noir",stone:"D",color:"#8899E7",glow:"#7f93ff",emblem:"rose",girl:"girl_4",face:"face_nft_03",nft:"nft_03_900",fact:"A little romance. A lot of thorns.",drop:{x:1255,y:300},impact:{x:1255,y:485},rise:{x:1262,base:880,h:760,ground:700}},{id:"falon",name:"Falon St Clair",first:"Falon",last:"St Clair",stone:"E",color:"#8ED4E8",glow:"#7fe3ff",emblem:"halo",girl:"girl_2",face:"face_nft_05",nft:"nft_05_900",fact:"Dressed like an angel. Filed under suspicious.",drop:{x:1540,y:440},impact:{x:1540,y:620},rise:{x:1545,base:965,h:800,ground:830}}],t=[1,0,3,2,4],i={x:-98,y:58},s={x:960,y:200},r=.55,o=.75,a=.26,l=15;function c(_){let x=_>>>0||1;return()=>(x^=x<<13,x>>>=0,x^=x>>>17,x^=x<<5,x>>>=0,x/4294967296)}function u(_){return _=Math.max(0,Math.min(1,_)),_<.5?4*_*_*_:1-Math.pow(-2*_+2,3)/2}function f(_={}){let x=c(_.seed||7),y={t:_.t0||0,shift:_.shift||60,R:x,cfg:_,mort:{x:_.mortX||960,y:_.mortY||250,fx:0,fy:0,tx:0,ty:0,ms:-1,md:0,target:-1,dropAt:-1},queue:(_.script||[]).map(T=>typeof T=="number"?{type:T}:Object.assign({},T)),held:null,incoming:null,souls:[],nextSpawn:(_.t0||0)+(_.firstSpawn??.2),lastMass:-9,graves:e.map(()=>({state:"empty",riseT:-9,endT:-9,leaveT:-9,pops:[],fh:!1})),score:_.score||0,streak:_.streak||0,best:_.streak||0,reborn:_.reborn||0,coffee:_.coffee??5,events:[],over:!1,idc:0,fullHouseT:-9,specialT:-9,mass:[]};return(_.preset||[]).forEach(T=>{let B=y.graves[T.g];B.state="risen",B.riseT=y.t-(T.age||1),B.endT=y.t+T.remaining}),y}function h(_,x,y){let T=Object.assign({type:x,t:_.t,id:_.idc++},y||{});return _.events.push(T),T}function d(_,x){let y=g(_,x);return{x:y.x+i.x,y:y.y+i.y+Math.sin(x*5.1)*6}}function g(_,x){let y=_.mort,T=y.x,B=y.y;if(y.ms>=0&&x>=y.ms){let P=u((x-y.ms)/y.md);T=y.fx+(y.tx-y.fx)*P,B=y.fy+(y.ty-y.fy)*P}return{x:T,y:B+Math.sin(x*2.3)*9}}function v(_){return _.mort.ms>=0&&_.t<_.mort.ms+_.mort.md}function m(_,x){return(_.state==="rising"||_.state==="risen")&&x<_.endT}function p(_,x){if(!_.held||v(_)&&!_.mort.ret||_.mort.dropAt>=0||_.over)return!1;let y=_.mort,T=g(_,_.t),B=e[x].drop,P=Math.hypot(B.x-T.x,B.y-T.y);return y.fx=y.x=T.x,y.fy=y.y=T.y-Math.sin(_.t*2.3)*9,y.tx=B.x,y.ty=B.y,y.ms=_.t,y.md=.16+P/2900,y.target=x,y.dropAt=_.t+y.md,y.ret=!1,h(_,"tap",{g:x}),!0}function E(_){let x=_.queue.shift();if(!x)return;let y=Math.min(1,_.t/_.shift);x.mass&&_.t-_.lastMass>4&&h(_,"mass",{}),x.mass&&(_.lastMass=_.t);let T={id:_.idc++,type:x.type,mistake:x.mistake,react:x.react,mass:!!x.mass,sx:x.x??260+_.R()*1400,sy:-90,spawnT:_.t,arriveT:_.t+(x.flight||.52-y*.16),state:"incoming",heldT:-1,patience:x.patience||3.6-y*1.4};_.incoming=T,_.souls.push(T),h(_,"spawn",{soul:T.id,st:T.type,mass:T.mass})}function w(_,x){let y=x.target,T=_.graves[y],B=y===x.type;if(x.impactT=_.t,x.correct=B,!B){x.state="bounce",_.streak=0,_.coffee=Math.max(0,_.coffee-1),h(_,"error",{g:y,soul:x.id,want:x.type,coffee:_.coffee}),_.coffee===0&&(_.over=!0,h(_,"gameover",{}));return}x.state="done",_.streak++,_.best=Math.max(_.best,_.streak),_.reborn++;let P=Math.min(8,1+Math.floor(_.streak/3)),z=100*P+(x.quick?50:0);_.score+=z,T.state==="rising"||T.state==="risen"?(T.pops.push(_.t),T.endT=Math.max(T.endT,_.t+(_.cfg.stay||4.6)),h(_,"pop",{g:y,delta:z,mult:P,streak:_.streak,score:_.score})):(T.state="rising",T.riseT=_.t,T.pops=[],T.endT=_.t+r+(_.cfg.stay||4.6)-Math.min(1.2,_.t/_.shift*1.2),h(_,"rise",{g:y,delta:z,mult:P,streak:_.streak,score:_.score})),_.streak===l&&(_.score+=6666,_.specialT=_.t,h(_,"special",{g:y,delta:6666,score:_.score})),_.graves.every(W=>m(W,_.t+.001))&&_.t-_.fullHouseT>3&&(_.fullHouseT=_.t,_.score+=5e3,h(_,"fullhouse",{delta:5e3,score:_.score}),_.graves.forEach(W=>{W.endT=_.t+(_.cfg.fhHold||2.3),W.fh=!0}))}function b(_,x,y){if(_.over&&_.t>_.shift+3){_.t+=x;return}_.t+=x;let T=_.t;if(!_.held&&!_.incoming&&!_.over&&T>=_.nextSpawn&&_.queue.length&&E(_),_.incoming&&T>=_.incoming.arriveT&&(_.held=_.incoming,_.held.state="held",_.held.heldT=T,_.incoming=null,h(_,"catch",{soul:_.held.id,st:_.held.type})),y&&y.tap!=null)p(_,y.tap);else if(_.cfg.autoplay&&_.held&&_.mort.dropAt<0&&(!v(_)||_.mort.ret)){let P=_.held,z=P.react??.16+_.R()*.12;T>=P.heldT+z&&p(_,P.mistake??P.type)}let B=_.mort;if(B.dropAt>=0&&T>=B.dropAt&&(B.x=B.fx=B.tx,B.y=B.fy=B.ty,B.dropAt=-1,B.ret=!0,B.tx=s.x,B.ty=s.y,B.ms=T+.14,B.md=.55,_.held)){let P=_.held,z=d(_,T);P.state="falling",P.dropT=T,P.dx=z.x,P.dy=z.y,P.target=B.target,P.impactT=T+a,P.quick=T-P.heldT<.75,_.held=null,h(_,"drop",{soul:P.id,g:P.target}),_.nextSpawn=T+(P.mass?.02:.08)}if(_.held&&!_.over&&T-_.held.heldT>_.held.patience&&B.dropAt<0){let P=_.held;P.state="lost",P.lostT=T;let z=d(_,T);P.dx=z.x,P.dy=z.y,_.held=null,_.streak=0,_.coffee=Math.max(0,_.coffee-1),h(_,"lost",{soul:P.id,coffee:_.coffee}),_.nextSpawn=T+.4,_.coffee===0&&(_.over=!0,h(_,"gameover",{}))}for(let P of _.souls)P.state==="falling"&&T>=P.impactT&&w(_,P);if(_.graves.forEach((P,z)=>{P.state==="rising"&&T>=P.riseT+r&&(P.state="risen"),(P.state==="risen"||P.state==="rising")&&T>=P.endT&&(P.state="leaving",P.leaveT=T,h(_,"leave",{g:z,fh:P.fh})),P.state==="leaving"&&T>=P.leaveT+o&&(P.state="empty",P.fh=!1)}),!_.over&&T>=_.shift&&(_.over=!0,h(_,"dawn",{score:_.score}),_.held)){_.held.state="lost",_.held.lostT=T;let P=d(_,T);_.held.dx=P.x,_.held.dy=P.y,_.held=null}}function D(_){return{t:_.t,mort:Object.assign({},_.mort),heldId:_.held?_.held.id:null,graves:_.graves.map(x=>({state:x.state,riseT:x.riseT,endT:x.endT,leaveT:x.leaveT,pops:x.pops.slice(),fh:x.fh})),souls:_.souls.filter(x=>x.state!=="done"||_.t-x.impactT<.6).filter(x=>!(x.state==="bounce"&&_.t-x.impactT>1.2)&&!(x.state==="lost"&&_.t-x.lostT>1.4)).map(x=>Object.assign({},x)),queue:_.queue.slice(0,4).map(x=>x.type),score:_.score,streak:_.streak,best:_.best,reborn:_.reborn,coffee:_.coffee,over:_.over,shift:_.shift}}function R(_,x,y=60){let T=f(Object.assign({autoplay:!0},_)),B=[D(T)],P=2,z=Math.round(x*y);for(let W=1;W<=z;W++){for(let H=0;H<P;H++)b(T,1/(y*P));B.push(D(T))}return{frames:B,events:T.events,game:T,fps:y}}let I={GRAVES:e,DEPTH:t,HAND:i,RISE_DUR:r,LEAVE_DUR:o,FALL_DUR:a,SPECIAL_STREAK:l,newGame:f,step:b,tap:p,snapshot:D,runTake:R,mortPos:g,handPos:d,isUp:m,easeInOut:u,rng:c};typeof hc<"u"?hc.exports=I:n.RebornEngine=I})(typeof window<"u"?window:globalThis)});var Xs=is((mv,dc)=>{"use strict";var Pi=ou(),{GRAVES:an,DEPTH:Ng,RISE_DUR:Og,LEAVE_DUR:lu,FALL_DUR:Fg}=Pi,Vt={ink:"#120c26",plum:"#1b1233",panel:"rgba(20,12,40,0.78)",line:"rgba(183,156,255,0.42)",lav:"#c9b8ff",gold:"#f6d860",pink:"#f04a9e",white:"#fbf8ff",stoneDark:"#2b2550",stoneHi:"#e7e4f5",navy:"#1c2663",red:"#ff3d6e"},Ke=(n,e=0,t=1)=>Math.max(e,Math.min(t,n)),mn=(n,e,t)=>n+(e-n)*t,Ji=n=>1-Math.pow(1-Ke(n),3),Sn=n=>Ke(n)*Ke(n),Ws=n=>{n=Ke(n);let e=1.70158;return 1+(e+1)*Math.pow(n-1,3)+e*Math.pow(n-1,2)},fu=n=>(n=Ke(n),n===0||n===1?n:Math.pow(2,-10*n)*Math.sin((n*10-.75)*(2*Math.PI)/3)+1);function Ut(n,e=0){let t=Math.imul(n|0,374761393)+Math.imul(e|0,668265263)>>>0;return t=Math.imul(t^t>>>13,1274126177)>>>0,((t^t>>>16)>>>0)/4294967296}function Hn(n,e){let t=parseInt(n.slice(1),16);return`rgba(${t>>16&255},${t>>8&255},${t&255},${e})`}function Mr(n,e,t){let i=parseInt(n.slice(1),16),s=parseInt(e.slice(1),16),r=Math.round(mn(i>>16&255,s>>16&255,t)),o=Math.round(mn(i>>8&255,s>>8&255,t)),a=Math.round(mn(i&255,s&255,t));return"#"+((1<<24)+(r<<16)+(o<<8)+a).toString(16).slice(1)}function Bg(n,e,t){if(n.beginPath(),e==="heart")n.moveTo(0,t*.42),n.bezierCurveTo(-t*.62,0,-t*.55,-t*.5,-t*.25,-t*.48),n.bezierCurveTo(-t*.08,-t*.47,0,-t*.32,0,-t*.22),n.bezierCurveTo(0,-t*.32,t*.08,-t*.47,t*.25,-t*.48),n.bezierCurveTo(t*.55,-t*.5,t*.62,0,0,t*.42),n.closePath();else if(e==="horns")for(let i of[-1,1])n.moveTo(i*t*.5,t*.34),n.bezierCurveTo(i*t*.62,-t*.05,i*t*.5,-t*.36,i*t*.16,-t*.52),n.bezierCurveTo(i*t*.3,-t*.3,i*t*.3,-t*.02,i*t*.1,t*.34),n.closePath();else if(e==="crown"){let i=[-.46,-.23,0,.23,.46],s=[.24,.4,.54,.4,.24];n.moveTo(-t*.5,t*.38),n.lineTo(-t*.5,t*.14),i.forEach((r,o)=>{n.lineTo(t*(r-.085),t*.14),n.lineTo(t*r,-t*s[o]),n.lineTo(t*(r+.085),t*.14)}),n.lineTo(t*.5,t*.14),n.lineTo(t*.5,t*.38),n.closePath()}else if(e==="rose")n.moveTo(-t*.36,-t*.2),n.bezierCurveTo(-t*.36,t*.12,-t*.16,t*.2,0,t*.2),n.bezierCurveTo(t*.16,t*.2,t*.36,t*.12,t*.36,-t*.2),n.quadraticCurveTo(t*.3,-t*.5,t*.14,-t*.3),n.quadraticCurveTo(t*.05,-t*.58,-t*.07,-t*.32),n.quadraticCurveTo(-t*.3,-t*.52,-t*.36,-t*.2),n.closePath(),n.moveTo(-t*.05,t*.18),n.lineTo(t*.05,t*.18),n.lineTo(t*.045,t*.56),n.lineTo(-t*.045,t*.56),n.closePath(),n.moveTo(t*.04,t*.34),n.quadraticCurveTo(t*.34,t*.2,t*.42,t*.36),n.quadraticCurveTo(t*.24,t*.46,t*.04,t*.41),n.closePath(),n.moveTo(-t*.04,t*.28),n.lineTo(-t*.2,t*.24),n.lineTo(-t*.04,t*.36),n.closePath(),n.moveTo(-t*.04,t*.44),n.lineTo(-t*.18,t*.44),n.lineTo(-t*.04,t*.51),n.closePath();else if(e==="halo"){n.ellipse(0,-t*.3,t*.34,t*.12,0,0,Math.PI*2),n.ellipse(0,-t*.3,t*.22,t*.055,0,0,Math.PI*2,!0);for(let i of[-1,1])n.moveTo(i*t*.06,t*.02),n.bezierCurveTo(i*t*.25,-t*.12,i*t*.5,-t*.05,i*t*.55,t*.05),n.bezierCurveTo(i*t*.45,t*.1,i*t*.5,t*.18,i*t*.4,t*.22),n.bezierCurveTo(i*t*.38,t*.3,i*t*.2,t*.36,i*t*.06,t*.26),n.closePath()}}function Sr(n,e,t,i,s,r,o,a=3){n.save(),n.translate(t,i),Bg(n,e,s),o&&(n.lineJoin="round",n.lineWidth=a,n.strokeStyle=o,n.stroke()),n.fillStyle=r,n.fill("evenodd"),e==="rose"&&(n.strokeStyle=o||"#0008",n.lineWidth=Math.max(1.2,s*.05),n.beginPath(),n.moveTo(-s*.2,-s*.12),n.quadraticCurveTo(0,s*.06,s*.2,-s*.12),n.stroke(),n.beginPath(),n.moveTo(-s*.06,-s*.26),n.quadraticCurveTo(s*.02,-s*.12,s*.1,-s*.24),n.stroke()),n.restore()}var zg=null;function kg(n,e){zg=e,dc.exports.makeCanvas=e;let t={glow:{},stones:{}},i=(d,g=256,v=0)=>{let m=e(g,g),p=m.getContext("2d"),E=p.createRadialGradient(g/2,g/2,0,g/2,g/2,g/2);return E.addColorStop(0,Hn(d,1)),E.addColorStop(.18+v,Hn(d,.55)),E.addColorStop(.5,Hn(d,.16)),E.addColorStop(1,Hn(d,0)),p.fillStyle=E,p.fillRect(0,0,g,g),m};for(let d of an)t.glow[d.id]=i(d.glow);t.glow.white=i("#ffffff"),t.glow.warm=i("#ffcf8a"),t.glow.moon=i("#cfe6ff"),t.glow.pink=i("#ff4fae"),t.glow.violet=i("#8b5cff"),t.glow.gold=i("#f6d860");{let v=e(328,328),m=v.getContext("2d"),p=e(300,300),E=p.getContext("2d");E.drawImage(n.mort,0,0,300,300),E.globalCompositeOperation="source-in",E.fillStyle="#d9ccff",E.fillRect(0,0,300,300);for(let w=0;w<16;w++)m.globalAlpha=.9,m.drawImage(p,14+Math.cos(w/16*Math.PI*2)*4.5,14+Math.sin(w/16*Math.PI*2)*4.5);m.globalAlpha=1,m.drawImage(n.mort,14,14,300,300),t.mort=v,t.mortPad=14/300}let s=e(1920,1080),r=s.getContext("2d"),o=r.createRadialGradient(960,560,380,960,560,1150);o.addColorStop(0,"rgba(6,4,20,0)"),o.addColorStop(.7,"rgba(6,4,20,0.22)"),o.addColorStop(1,"rgba(6,4,20,0.7)"),r.fillStyle=o,r.fillRect(0,0,1920,1080),t.vignette=s;let a=e(512,512),l=a.getContext("2d"),c=l.createImageData(512,512),u=Pi.rng(99);for(let d=0;d<c.data.length;d+=4){let g=110+u()*40|0;c.data[d]=c.data[d+1]=c.data[d+2]=g,c.data[d+3]=255}l.putImageData(c,0,0),t.grain=a;let f=e(1920,1080),h=f.getContext("2d");h.filter="blur(10px)",h.drawImage(n.cemetery,-20,-20,1960,1104),h.filter="none",t.bgBlur=f;for(let[d,g]of an.entries())t.stones[g.stone]=Vg(n,e,d);return t.spiral=(()=>{let d=e(1400,1400),g=d.getContext("2d");g.fillStyle="#f4f1ea",g.fillRect(0,0,1400,1400),g.translate(700,700),g.fillStyle="#0b0b0f",g.beginPath();for(let v=0;v<Math.PI*2*9;v+=.02){let m=8+v*12.5;g.lineTo(Math.cos(v)*m,Math.sin(v)*m)}for(let v=Math.PI*2*9;v>0;v-=.02){let m=8+v*12.5+38;g.lineTo(Math.cos(v)*m,Math.sin(v)*m)}return g.closePath(),g.fill(),d})(),t}var uc={A:[198,350],B:[605,366],C:[629,680],D:[1071,464],E:[1331,602]},fc={A:{cam:[436,636,60,74],crest:[434,548,50],n1:[462,752,38,"Morticia"],n2:[466,790,24,"Belladonna"],rot:.045},B:{cam:[797,548,50,62],crest:[797,474,34],n1:[799,652,38,"Vera Locks"],rot:0},C:{cam:[726,846,40,47],crest:[1062,846,36],n1:[906,838,32,"Rowena Inkgrave"],n2:[906,878,17,"REST IN PAX","caps"],rot:-.01},D:{cam:[1338,596,46,56],crest:[1338,522,32],n1:[1325,822,32,"Odette Noir"],rot:.03},E:{cam:[1515,800,52,60],crest:[1408,800,34],n1:[1505,880,29,"Falon St Clair"],rot:0}};function Vg(n,e,t){let i=an[t],s=n["stone_"+i.stone],[r,o]=uc[i.stone],a=fc[i.stone],l=e(s.width,s.height),c=l.getContext("2d");c.drawImage(s,0,0),c.globalCompositeOperation="source-atop",c.translate(-r,-o);let[u,f,h,d]=a.cam;c.save(),c.translate(u,f),c.rotate(a.rot),c.translate(-u,-f),c.beginPath(),c.ellipse(u+2,f+3,h+10,d+10,0,0,Math.PI*2),c.fillStyle="rgba(232,229,246,0.55)",c.fill(),c.beginPath(),c.ellipse(u-1,f-1,h+10,d+10,0,0,Math.PI*2),c.fillStyle="#2a2450",c.fill(),c.beginPath(),c.ellipse(u,f,h+5,d+5,0,0,Math.PI*2),c.fillStyle=i.color,c.fill(),c.save(),c.beginPath(),c.ellipse(u,f,h,d,0,0,Math.PI*2),c.clip();let g=n[i.face],v=Math.max(h,d)*2.15;c.drawImage(g,u-v/2,f-v/2+d*.06,v,v);let m=c.createRadialGradient(u,f,d*.5,u,f,d*1.1);m.addColorStop(0,"rgba(20,10,40,0)"),m.addColorStop(1,"rgba(20,10,40,0.45)"),c.fillStyle=m,c.fillRect(u-h,f-d,h*2,d*2),c.restore(),c.lineWidth=2,c.strokeStyle="rgba(255,255,255,0.55)",c.beginPath(),c.ellipse(u,f,h+1,d+1,0,Math.PI*1.1,Math.PI*1.75),c.stroke();let[p,E,w]=a.crest;Sr(c,i.emblem,p+1.5,E+2,w,"rgba(235,232,248,0.6)"),Sr(c,i.emblem,p,E,w,i.color,"#231d45",3.5);let b=(D,R,I,_,x)=>{c.font=x?`800 ${_}px Montserrat`:`${_}px Fraktur`,c.textAlign="center",c.textBaseline="middle",c.letterSpacing=x?"4px":"0px",c.fillStyle="rgba(240,238,250,0.55)",c.fillText(D,R+1.2,I+1.8),c.fillStyle="#2a2450",c.fillText(D,R,I),c.letterSpacing="0px"};return b(a.n1[3],a.n1[0],a.n1[1],a.n1[2],a.n1[4]==="caps"),a.n2&&b(a.n2[3],a.n2[0],a.n2[1],a.n2[2],a.n2[4]==="caps"),c.restore(),l}function cu(n,e,t){if(e.state==="incoming"){let s=Pi.handPos(n,t),r=Ji((t-e.spawnT)/(e.arriveT-e.spawnT)),o=mn(e.sx,s.x,.25),a=Math.min(e.sy,s.y)-120,l=1-r;return{x:l*l*e.sx+2*l*r*o+r*r*s.x,y:l*l*e.sy+2*l*r*a+r*r*s.y,a:1}}if(e.state==="held")return Object.assign(Pi.handPos(n,t),{a:1});let i=an[e.target??e.type]?.impact;if(e.state==="falling"||e.state==="done"){let s=Sn((t-e.dropT)/Fg);return{x:mn(e.dx,i.x,s)+Math.sin(s*Math.PI)*30,y:mn(e.dy,i.y,s),a:e.state==="done"?0:1}}if(e.state==="bounce"){let s=Ke((t-e.impactT)/1),r=e.id%2?1:-1;return{x:i.x+r*220*s,y:i.y-260*s+300*s*s,a:1-s}}if(e.state==="lost"){let s=Ke((t-e.lostT)/1.3);return{x:e.dx+Math.sin(s*9)*40*s,y:e.dy-380*s,a:1-s}}return{x:0,y:0,a:0}}function hu(n,e,t,i,s,r=1){let o=an[i.type],a=cu(t,i,s);if(a.a<=.01)return;n.save(),n.globalCompositeOperation="lighter";for(let h=9;h>=1;h--){let d=cu(t,i,s-h*.022);if(d.a<=0)continue;let g=(58-h*4.2)*r;n.globalAlpha=a.a*(.3-h*.026),n.drawImage(e.glow[o.id],d.x-g,d.y-g,g*2,g*2)}let l=1+Math.sin(s*9+i.id)*.05;n.globalAlpha=a.a*.75;let c=120*r*l;n.drawImage(e.glow[o.id],a.x-c,a.y-c,c*2,c*2),n.globalAlpha=a.a*.45,c=60*r,n.drawImage(e.glow.white,a.x-c,a.y-c,c*2,c*2),n.restore(),n.save(),n.globalAlpha=a.a;let u=31*r*l,f=n.createRadialGradient(a.x-u*.3,a.y-u*.35,u*.1,a.x,a.y,u);f.addColorStop(0,"#ffffff"),f.addColorStop(.35,Mr(o.color,"#ffffff",.35)),f.addColorStop(1,Mr(o.color,"#3a1f6b",.35)),n.beginPath(),n.arc(a.x,a.y,u,0,Math.PI*2),n.fillStyle=f,n.fill(),n.lineWidth=2.5*r,n.strokeStyle="rgba(255,255,255,0.9)",n.stroke(),Sr(n,o.emblem,a.x,a.y+1,34*r,"#ffffff","#1d1238",3.2*r),n.restore()}function Hg(n,e,t,i,s){n.drawImage(e.cemetery,0,0,1920,1081),n.save(),n.globalCompositeOperation="screen",n.globalAlpha=(.28+.06*Math.sin(i*1.3))*(1-s*.85),n.drawImage(t.glow.moon,1082,-80,520,520);for(let[r,o,a]of[[532,272,0],[607,272,2.1]])n.globalAlpha=.35+.15*Math.sin(i*7+a)*Math.sin(i*3.1+a),n.drawImage(t.glow.warm,r-70,o-70,140,140);if(n.restore(),s>.001){n.save();let r=s*s;n.globalCompositeOperation="multiply";let o=n.createLinearGradient(0,0,0,700);o.addColorStop(0,Hn("#ffb3d9",.45*r)),o.addColorStop(1,Hn("#ffd2b0",.2*r)),n.fillStyle=o,n.fillRect(0,0,1920,700),n.globalCompositeOperation="screen",o=n.createLinearGradient(0,150,0,640),o.addColorStop(0,Hn("#ff5fa8",0)),o.addColorStop(.7,Hn("#ff7a6b",.38*r)),o.addColorStop(1,Hn("#ffb35c",.12*r)),n.fillStyle=o,n.fillRect(0,0,1920,680),n.globalAlpha=.8*r,n.drawImage(t.glow.warm,980,220,1040,600),n.globalAlpha=.45*r,n.drawImage(t.glow.pink,-200,220,1e3,520),n.restore()}}function uu(n,e,t,i,s){if(n.save(),s){n.globalCompositeOperation="screen";for(let r=0;r<4;r++){let o=(t*(22+r*9)+r*640)%2600-340,a=900+r*40+Math.sin(t*.4+r)*12;n.globalAlpha=.1+i*.05;let l=n.createRadialGradient(o,a,10,o,a,420);l.addColorStop(0,"#9aa0ff"),l.addColorStop(1,"rgba(154,160,255,0)"),n.fillStyle=l,n.beginPath(),n.ellipse(o,a,520,90,0,0,Math.PI*2),n.fill()}}else{for(let r=0;r<6;r++){let o=120+Ut(r,1)*140,a=2400,l=(t*o+Ut(r,2)*a)%a-240,c=70+Ut(r,3)*260+Math.sin(t*1.7+r)*18,u=14+Ut(r,4)*14;du(n,l,c,u,t*(9+Ut(r,5)*4)+r,"rgba(12,10,36,0.9)")}n.globalCompositeOperation="lighter";for(let r=0;r<26;r++){let o=18+Ut(r,7)*30,a=9+Ut(r,8)*6,l=(t+Ut(r,9)*a)%a/a,c=120+Ut(r,10)*1680+Math.sin(t*.7+r)*30,u=1020-l*(600+o*4);n.globalAlpha=Math.sin(l*Math.PI)*.55;let f=7+Ut(r,11)*9;n.drawImage(e.glow[an[r%5].id],c-f,u-f,f*2,f*2)}}n.restore()}function du(n,e,t,i,s,r){let o=Math.sin(s)*.9;n.save(),n.translate(e,t),n.fillStyle=r,n.beginPath(),n.moveTo(0,-i*.15),n.quadraticCurveTo(-i*.6,-i*(.5+o*.6),-i*1.4,-i*(.1+o*.7)),n.quadraticCurveTo(-i*1,i*.05,-i*.95,i*.25),n.quadraticCurveTo(-i*.6,i*.05,-i*.45,i*.3),n.quadraticCurveTo(-i*.25,i*.1,0,i*.35),n.quadraticCurveTo(i*.25,i*.1,i*.45,i*.3),n.quadraticCurveTo(i*.6,i*.05,i*.95,i*.25),n.quadraticCurveTo(i*1,i*.05,i*1.4,-i*(.1+o*.7)),n.quadraticCurveTo(i*.6,-i*(.5+o*.6),0,-i*.15),n.fill(),n.beginPath(),n.arc(0,-i*.12,i*.2,0,Math.PI*2),n.fill(),n.restore()}function Gg(n,e){if(n.state==="empty"&&!(e<n.leaveT+lu&&n.leaveT>-9))return null;let t=1,i=1,s=0,r=0,o=0;if((n.state==="rising"||n.state==="risen")&&(t=Ke((e-n.riseT)/Og),o=1-Ke((e-n.riseT-.2)/.9)*.65),n.state==="leaving"){let a=Ke((e-n.leaveT)/lu);i=1-Sn(a),s=(n.fh?160:60)*Sn(a),o=.4+a*.8}if(n.state==="empty")return null;for(let a of n.pops){let l=e-a;l>=0&&l<.45&&(r=Math.max(r,Math.sin(l/.45*Math.PI)*(1-l/.45))),l>=0&&l<.6&&(o=Math.max(o,.9-l))}return{rise:t,alpha:i,lift:s,pop:r,light:o}}function Wg(n,e,t,i,s,r){let o=an[i],a=e[o.girl],l=o.rise.h,c=l*a.width/a.height,u=o.rise.base,f=u-l,h=o.rise.ground-f+30,d=Ws(s.rise),g=(1-d)*h-s.lift,v=Math.sin(r*2.4+i*1.7),m=1+(1-s.rise)*-.07+s.pop*.05,p=1+Math.sin(s.rise*Math.PI)*.07+v*.006+s.pop*.04;n.save(),n.globalCompositeOperation="lighter",n.globalAlpha=Ke(s.alpha*(.35+s.light*.6)),n.drawImage(t.glow[o.id],o.rise.x-260,f+80+g*.3-120,520,620),n.restore(),n.save(),n.beginPath(),n.rect(0,-400,1920,o.rise.ground+400),n.clip(),n.globalAlpha=s.alpha,n.translate(o.rise.x,u+g),n.rotate(Math.sin(r*1.3+i)*.008),n.scale(m,p),n.drawImage(a,-c/2,-l,c,l),s.light>.05&&(n.globalCompositeOperation="lighter",n.globalAlpha=s.alpha*s.light*.32,n.drawImage(a,-c/2,-l,c,l)),n.restore()}function Xg(n,e,t,i,s,r,o,a=26,l=1){if(o<0||o>1.4)return;n.save(),n.globalCompositeOperation="lighter";let c=Ji(o/.5);n.globalAlpha=(1-c)*.9,n.strokeStyle=s,n.lineWidth=10*(1-c)+1,n.beginPath(),n.ellipse(t,i,30+c*190*l,12+c*70*l,0,0,Math.PI*2),n.stroke(),n.globalAlpha=Ke(1-o/.35)*.9;let u=160*l;n.drawImage(e.glow.white,t-u,i-u,u*2,u*2);for(let f=0;f<a;f++){let h=-Math.PI*(.05+.9*Ut(r,f)),d=(260+Ut(r,f+50)*520)*l,g=.7+Ut(r,f+90)*.6;if(o>g)continue;let v=t+Math.cos(h)*d*o,m=i+Math.sin(h)*d*o+620*o*o,p=(6+Ut(r,f+130)*10)*(1-o/g);n.globalAlpha=1-o/g,n.drawImage(f%3?e.glow[an[r%5].id]:e.glow.white,v-p*2,m-p*2,p*4,p*4)}n.restore(),n.save();for(let f=0;f<12;f++){let h=-Math.PI*(.15+.7*Ut(r,f+300)),d=240+Ut(r,f+320)*300,g=.8;if(o>g)continue;let v=t+Math.cos(h)*d*o,m=i+10+Math.sin(h)*d*o+1300*o*o,p=5+Ut(r,f+340)*7;n.globalAlpha=1-o/g,n.fillStyle=f%2?"#2a2046":"#4a3a6a",n.save(),n.translate(v,m),n.rotate(o*9+f),n.fillRect(-p/2,-p/2,p,p*.8),n.restore()}n.restore()}function xr(n,e,t,i,s,r={}){let o=r.dur||1;if(s<0||s>o)return;let a=s/o,l=Ws(Ke(s/.18))*(r.size||1);n.save(),n.translate(t,i-70*Ji(a)),n.scale(l,l),n.globalAlpha=1-Sn(Ke((a-.6)/.4)),n.font=r.font||"900 46px Montserrat",n.textAlign="center",n.textBaseline="middle",n.letterSpacing=r.ls||"0px",n.lineJoin="round",n.lineWidth=r.lw||9,n.strokeStyle=r.stroke||"#160c2e",n.strokeText(e,0,0),n.fillStyle=r.fill||"#fff",n.fillText(e,0,0),n.letterSpacing="0px",n.restore()}function qg(n,e,t,i,s,r=-.12){if(s<0||s>1.3)return;let o=(s<.12?mn(1.9,1,Sn(s/.12)):1)*.78,a=1-Sn(Ke((s-.9)/.4));n.save(),n.translate(t,i),n.rotate(r),n.scale(o,o),n.globalAlpha=a,n.font="900 40px Montserrat",n.letterSpacing="3px";let l=n.measureText(e).width+50;n.fillStyle="rgba(30,6,20,0.55)",n.fillRect(-l/2,-40,l,80),n.strokeStyle=Vt.red,n.lineWidth=5,n.strokeRect(-l/2,-40,l,80),n.lineWidth=2,n.strokeRect(-l/2+8,-32,l-16,64),n.fillStyle=Vt.red,n.textAlign="center",n.textBaseline="middle",n.fillText(e,0,2),n.letterSpacing="0px",n.restore()}function Yg(n,e,t,i,s,r){let o=r?1.2:1.6;if(s<0||s>o)return;let a=an[e],l=Ke(s/.15)*(1-Sn(Ke((s-o+.35)/.35))),c=Ws(Ke(s/.25));n.save(),n.translate(t,i),n.scale(c,c),n.globalAlpha=l,n.textAlign="center",n.textBaseline="middle",n.font="800 17px Montserrat",n.letterSpacing="6px",n.lineWidth=6,n.strokeStyle="#150b2c",n.strokeText("REBORN",0,-44),n.fillStyle=a.color,n.fillText("REBORN",0,-44),n.letterSpacing="0px",n.font="58px Fraktur",n.lineJoin="round",n.lineWidth=10,n.strokeStyle="#150b2c",n.strokeText(a.name,0,4),n.fillStyle="#ffffff",n.fillText(a.name,0,4),Gs(n,-n.measureText(a.name).width/2-26,-6,13,s*4),Gs(n,n.measureText(a.name).width/2+26,-6,13,s*4+1),n.restore()}function Gs(n,e,t,i,s=0,r="#ffffff"){let o=.75+.25*Math.sin(s*3);i*=o,n.save(),n.translate(e,t),n.fillStyle=r,n.beginPath(),n.moveTo(0,-i),n.quadraticCurveTo(i*.12,-i*.12,i,0),n.quadraticCurveTo(i*.12,i*.12,0,i),n.quadraticCurveTo(-i*.12,i*.12,-i,0),n.quadraticCurveTo(-i*.12,-i*.12,0,-i),n.fill(),n.restore()}function Zg(n,e,t,i,s,r,o={}){let a=i.frames[Math.max(0,Math.min(i.frames.length-1,s))],l=i.events,c=a.t,u=o.dawn!=null?o.dawn:Ke((c/a.shift-.45)/.55);Hg(n,e,t,c,u),uu(n,t,c,u,!1);let f={};for(let h of l)if(h.type==="error"&&c-h.t>=0&&c-h.t<.45){let d=c-h.t;f[h.g]=Math.sin(d*70)*9*(1-d/.45)}for(let h of Ng){let d=an[h],g=Gg(a.graves[h],c);g&&Wg(n,e,t,h,g,c);let[v,m]=uc[d.stone],p=f[h]||0;n.drawImage(t.stones[d.stone],v+p,m);let E=a.graves[h];if(Pi.isUp(E,c)||E.state==="leaving"||g&&g.light>.1){let b=fc[d.stone];n.save(),n.globalCompositeOperation="lighter",n.globalAlpha=.55+.2*Math.sin(c*5);let D=b.cam[3]*2.6;n.drawImage(t.glow[d.id],b.cam[0]-D+p,b.cam[1]-D,D*2,D*2),n.restore()}}uu(n,t,c,u,!0);for(let h of l){let d=c-h.t;if(!(d<0||d>2.4)){if(h.type==="rise"||h.type==="pop"){let g=an[h.g];if(Xg(n,t,g.impact.x,g.impact.y+10,g.glow,h.id,d,h.type==="rise"?26:14,h.type==="rise"?1:.7),xr(n,"+"+h.delta,g.impact.x,g.impact.y-70,d,{fill:g.color,dur:.95}),h.mult>1&&xr(n,"\xD7"+h.mult,g.impact.x+92,g.impact.y-112,d-.05,{fill:Vt.gold,size:.7,dur:.85}),h.type==="rise"&&o.names!==!1){let v=Math.max(230,g.rise.base-g.rise.h*.6);Yg(n,h.g,Ke(g.rise.x,400,1520),v,d-.25,o.names==="small")}}if(h.type==="error"){let g=an[h.g];qg(n,"PAPERWORK ERROR",g.impact.x,g.impact.y+60,d),xr(n,"WRONG GRAVE",g.impact.x,g.impact.y-30,d-.1,{fill:"#ffd1e3",size:.6,dur:1.1})}h.type==="lost"&&xr(n,"LOST SOUL",960,300,d,{fill:"#ffd1e3",size:.8})}}for(let h of a.souls)h.state!=="held"&&hu(n,t,a,h,c);$g(n,e,t,a,l,c);for(let h of a.souls)h.state==="held"&&hu(n,t,a,h,c);return{snap:a,dawn:u}}function $g(n,e,t,i,s,r){let o=Pi.mortPos(i,r),a=Pi.mortPos(i,r-.02),l=Pi.mortPos(i,r+.02),c=(l.x-a.x)/.04,u=(l.y-a.y)/.04,f=0;for(let v of s)v.type==="drop"&&r-v.t>=0&&r-v.t<.3&&(f=Math.sin((r-v.t)/.3*Math.PI)*(1-(r-v.t)/.3));let h=Ke(c/4200,-.28,.28),d=270;n.save(),n.globalCompositeOperation="lighter",n.globalAlpha=.35,n.drawImage(t.glow.violet,o.x-210,o.y-190,420,420),n.restore(),n.save(),n.translate(o.x,o.y),n.rotate(h),n.scale(1+f*.12-Math.abs(u)/3e4,1-f*.14+Math.abs(u)/3e4);let g=d*(1+2*t.mortPad);n.drawImage(t.mort,-g/2,-g/2,g,g),n.restore()}function Jg(n,e,t){let i=t,s=t,r=-9;for(let a of n)a.score==null||a.t>e||(i=s,s=a.score,r=a.t);let o=Ji((e-r)/.4);return Math.round(mn(i,s,o))}function Ri(n,e,t,i,s,r=18,o=Vt.panel,a=Vt.line){n.beginPath(),n.roundRect(e,t,i,s,r),n.fillStyle=o,n.fill(),a&&(n.lineWidth=1.5,n.strokeStyle=a,n.stroke())}function Ci(n,e,t,i,s,r,o="left",a=3,l=800){n.font=`${l} ${s}px Montserrat`,n.letterSpacing=a+"px",n.textAlign=o,n.textBaseline="middle",n.fillStyle=r,n.fillText(e,t,i),n.letterSpacing="0px"}function pu(n,e,t,i,s,r,o=1){let a=an[t];n.save(),n.globalAlpha=o,n.globalCompositeOperation="lighter",n.globalAlpha=o*.5,n.drawImage(e.glow[a.id],i-r*2.2,s-r*2.2,r*4.4,r*4.4),n.restore(),n.save(),n.globalAlpha=o;let l=n.createRadialGradient(i-r*.3,s-r*.35,r*.1,i,s,r);l.addColorStop(0,"#fff"),l.addColorStop(.4,Mr(a.color,"#ffffff",.3)),l.addColorStop(1,Mr(a.color,"#3a1f6b",.3)),n.beginPath(),n.arc(i,s,r,0,Math.PI*2),n.fillStyle=l,n.fill(),n.lineWidth=2,n.strokeStyle="#fff",n.stroke(),Sr(n,a.emblem,i,s+1,r*1.1,"#fff","#1d1238",2.4),n.restore()}function Kg(n,e,t,i,s,r,o={}){let a=i.events,l=o.w||1920,c=o.scale||1;n.save(),n.scale(c,c);let u=l/c,f=o.regX??40,h=o.regY??32;Ri(n,f,h,360,118),Ci(n,"DEATH REGISTRY",f+22,h+26,15,Vt.gold,"left",3.5),Ci(n,"NEXT SOULS",f+338,h+26,11,"rgba(201,184,255,0.75)","right",2,700);let d=s.souls.find(T=>T.state==="held"||T.state==="incoming");(d?[d.type]:[]).concat(s.queue).slice(0,5).forEach((T,B)=>pu(n,t,T,f+48+B*64,h+76,B===0?27:21,B===0?1:.8)),d&&(n.save(),n.strokeStyle=Vt.gold,n.lineWidth=2.5,n.beginPath(),n.arc(f+48,h+76,33,0,Math.PI*2),n.stroke(),n.restore());let v=520,m=u/2-v/2,p=o.dawnY??48,E=Ke(s.t/s.shift);Ri(n,m-70,p-26,v+140,74);let w=Math.max(0,s.shift-s.t),b=w<10&&!s.over;Ci(n,s.over?"DAWN \u2014 SHIFT COMPLETE":`DAWN IN 0:${String(Math.ceil(w)).padStart(2,"0")}`,u/2,p-3,15,b?"#ffb36b":Vt.white,"center",4),n.beginPath(),n.roundRect(m,p+18,v,12,6),n.fillStyle="rgba(255,255,255,0.12)",n.fill();let D=n.createLinearGradient(m,0,m+v,0);D.addColorStop(0,"#5b4bff"),D.addColorStop(.6,Vt.pink),D.addColorStop(1,"#ffc46b"),n.beginPath(),n.roundRect(m,p+18,Math.max(12,v*E),12,6),n.fillStyle=D,n.fill(),n.beginPath(),n.arc(m-34,p+12,15,0,Math.PI*2),n.fillStyle="#dfe9ff",n.fill(),n.beginPath(),n.arc(m-27,p+7,13,0,Math.PI*2),n.fillStyle="#1b1233",n.fill(),n.save(),n.translate(m+v+34,p+12),n.fillStyle="#ffc46b";for(let T=0;T<8;T++)n.rotate(Math.PI/4),n.fillRect(-2,-21,4,7);n.beginPath(),n.arc(0,0,11,0,Math.PI*2),n.fill(),n.restore();let R=u-(o.scoreR??40);Ri(n,R-330,32,330,118),Ci(n,"SCORE",R-22,58,15,Vt.gold,"right",3.5);let I=Jg(a,s.t,i.frames[0].score);if(n.font="900 54px Montserrat",n.textAlign="right",n.textBaseline="middle",n.fillStyle="#fff",n.fillText(I.toLocaleString("en-US"),R-22,104),s.streak>1){let T=[...a].reverse().find(P=>P.t<=s.t&&P.streak),B=T?Math.max(0,1-(s.t-T.t)/.25):0;n.save(),n.translate(R-252,58),n.scale(1+B*.25,1+B*.25),Ri(n,-56,-16,112,32,16,Vt.pink,null),Ci(n,`STREAK \xD7${s.streak}`,0,1,12,"#fff","center",1.5,900),n.restore()}let _=o.cofX??40,x=o.cofY??960;Ri(n,_,x,392,92),Ci(n,"MORT'S COFFEE",_+22,x+22,13,Vt.gold,"left",3);let y=[...a].reverse().find(T=>(T.type==="error"||T.type==="lost")&&T.t<=s.t&&s.t-T.t<.9);for(let T=0;T<5;T++){let B=T<s.coffee,P=_+30+T*70,z=x+34;if(n.save(),n.globalAlpha=B?1:.22,y&&T===y.coffee){let W=(s.t-y.t)/.9;n.globalAlpha=1-W*.78,n.translate(P+28,z+50),n.rotate(Math.min(1,W*3)*.9),n.translate(-P-28,-z-50),n.save(),n.globalAlpha=1-W,n.fillStyle="#6b3b22";for(let H=0;H<6;H++){let j=-1.2+H*.35,G=W*70;n.beginPath(),n.arc(P+50+Math.cos(j)*G,z+30+Math.sin(j)*G+W*W*60,5-W*3,0,Math.PI*2),n.fill()}n.restore()}n.drawImage(e.mug,P-4,z-4,58,62),n.restore()}o.encoreTag!==!1&&Ci(n,"CONCEPT BY ENCORE STUDIO",u-40,o.tagY??1050,12,"rgba(232,224,255,0.62)","right",3,700),n.restore()}function Qg(n,e,t,i,s,r,o=1920,a=1080){for(let l of i.events){let c=s.t-l.t;if(!(c<0)){if(l.type==="fullhouse"&&c<2.2){n.save(),n.globalCompositeOperation="lighter",n.globalAlpha=Ke(1-c/.18)*.14,n.fillStyle="#ffe6f6",n.fillRect(0,0,o,a),n.restore();let u=Ke(c/.12)*(1-Sn(Ke((c-1.75)/.45))),f=mn(1.35,1,fu(Ke(c/.7)));n.save(),n.translate(o/2,a*.43),n.scale(f,f),n.globalAlpha=u,n.save(),n.globalCompositeOperation="lighter",n.globalAlpha=u*.7,n.drawImage(t.glow.pink,-700,-260,1400,520),n.restore(),n.textAlign="center",n.textBaseline="middle",n.font="800 22px Montserrat",n.letterSpacing="10px",n.lineWidth=7,n.strokeStyle="#140a2a",n.strokeText("ALL FIVE RISEN",0,-112),n.fillStyle=Vt.gold,n.fillText("ALL FIVE RISEN",0,-112),n.letterSpacing="0px",n.font="132px Fraktur",n.lineJoin="round",n.lineWidth=18,n.strokeStyle="#140a2a",n.strokeText("The Gothly Departed",0,0),n.fillStyle="#fff",n.fillText("The Gothly Departed",0,0);let h=n.measureText("The Gothly Departed").width;Gs(n,-h/2-40,-20,24,c*3),Gs(n,h/2+40,-20,24,c*3+1),Gs(n,h/2+10,-70,12,c*4),n.font="900 34px Montserrat",n.lineWidth=8,n.strokeText("+5,000",0,98),n.fillStyle=Vt.pink,n.fillText("+5,000",0,98),n.restore()}if(l.type==="special"&&c<2.6){let u=Ji(c/.28),f=Sn(Ke((c-2.15)/.45)),h=u*(1-f);n.save(),n.globalAlpha=h*.92,n.translate(o/2,a/2),n.rotate(c*2.2);let d=Math.max(o,a)*1.5*(.6+.4*u);n.drawImage(t.spiral,-d/2,-d/2,d,d),n.restore();let g=250*Ws(Ke((c-.12)/.45))*(1-f*.3);g>1&&(n.save(),n.globalAlpha=1-f,n.beginPath(),n.arc(o/2,a*.46,g+12,0,Math.PI*2),n.fillStyle="#0b0b0f",n.fill(),n.beginPath(),n.arc(o/2,a*.46,g,0,Math.PI*2),n.clip(),n.drawImage(e.bella,o/2-g*1.25,a*.46-g*1.15,g*2.5,g*2.5),n.restore(),n.save(),n.globalAlpha=1-f,n.lineWidth=8,n.strokeStyle="#e8213c",n.beginPath(),n.arc(o/2,a*.46,g+8,0,Math.PI*2),n.stroke(),n.restore());let v=Ke((c-.35)/.2)*(1-f);n.save(),n.globalAlpha=v,n.textAlign="center",n.textBaseline="middle",Ri(n,o/2-330,a*.46+262,660,132,22,"rgba(10,8,14,0.9)","#e8213c"),n.font="900 22px Montserrat",n.letterSpacing="8px",n.fillStyle="#ff4060",n.fillText("1/1 HORROR RISEN",o/2,a*.46+296),n.letterSpacing="0px",n.font="64px Fraktur",n.fillStyle="#fff",n.fillText("Bella Saw",o/2-70,a*.46+350),n.font="900 36px Montserrat",n.fillStyle=Vt.gold,n.fillText("+6,666",o/2+190,a*.46+352),n.restore()}if(l.type==="mass"&&c<1.9){let u=Ke(c/.15)*(1-Sn(Ke((c-1.45)/.45))),f=mn(-1,0,Ji(c/.35))+mn(0,1,Sn(Ke((c-1.5)/.4)));n.save(),n.globalAlpha=u,n.translate(o/2+f*300,a*.27),n.rotate(-.04),Ri(n,-470,-62,940,124,22,"rgba(18,10,36,0.92)",Vt.gold),n.textAlign="center",n.textBaseline="middle",n.font="800 17px Montserrat",n.letterSpacing="8px",n.fillStyle=Vt.pink,n.fillText("COLLAB WAVE INCOMING",0,-30),n.letterSpacing="0px",n.font="68px Fraktur",n.fillStyle="#fff",n.fillText("Mass Death Registry",0,18),n.restore()}if(l.type==="dawn"&&c<99){let u=Ke((c-.3)/.3);n.save(),n.globalCompositeOperation="lighter",n.globalAlpha=Ke(1-c/.6)*.4,n.fillStyle="#ffd9a8",n.fillRect(0,0,o,a),n.restore(),n.save(),n.globalAlpha=u,n.translate(o/2,a*.5);let f=mn(1.25,1,Ws(Ke((c-.3)/.5)));n.scale(f,f),n.textAlign="center",n.textBaseline="middle",n.font="800 22px Montserrat",n.letterSpacing="10px",n.lineWidth=7,n.strokeStyle="#2a0f2a",n.strokeText("THE SUN IS UP",0,-80),n.fillStyle="#ffd38a",n.fillText("THE SUN IS UP",0,-80),n.letterSpacing="0px",n.font="120px Fraktur",n.lineWidth=16,n.strokeText("Shift Complete",0,10),n.fillStyle="#fff",n.fillText("Shift Complete",0,10),n.restore()}}}}function jg(n,e,t,i,s){n.drawImage(e.vignette,0,0,t,i),n.save(),n.globalCompositeOperation="overlay",n.globalAlpha=.07;let r=-(Ut(Math.floor(s*60),3)*400|0),o=-(Ut(Math.floor(s*60),4)*400|0);for(let a=o;a<i;a+=512)for(let l=r;l<t;l+=512)n.drawImage(e.grain,l,a);n.restore()}dc.exports={PAL:Vt,GRAVES:an,buildSprites:kg,drawWorld:Zg,drawHUD:Kg,drawMoments:Qg,drawPost:jg,drawEmblem:Sr,drawBat:du,sparkle:Gs,panel:Ri,label:Ci,soulChip:pu,floatText:xr,hexA:Hn,mix:Mr,clamp:Ke,lerp:mn,easeOut:Ji,easeIn:Sn,easeOutBack:Ws,easeOutElastic:fu,hash:Ut,STONE_BOX:uc,ENGRAVE:fc}});var Tu=is((Tv,bu)=>{"use strict";var Qi=Xs(),{PAL:hi,clamp:Pt,lerp:ln,easeOut:cn,easeIn:o_,easeOutBack:yu,sparkle:Ys,panel:Wn,label:Sv,hexA:bv}=Qi;function ji(n,e,t,i,s,r="#fff",o="#140a2a",a=0,l="center"){return n.font=`${s}px Fraktur`,n.textAlign=l,n.textBaseline="middle",n.lineJoin="round",a&&(n.lineWidth=a,n.strokeStyle=o,n.strokeText(e,t,i)),n.fillStyle=r,n.fillText(e,t,i),n.measureText(e).width}function Rt(n,e,t,i,s,r,o=800,a="center",l=0){n.font=`${o} ${s}px Montserrat`,n.letterSpacing=l+"px",n.textAlign=a,n.textBaseline="middle",n.fillStyle=r,n.fillText(e,t,i);let c=n.measureText(e).width;return n.letterSpacing="0px",c}function Yt(n,e,t,i,s,r,o=500,a="center"){return n.font=`${o} ${s}px Inter, Emoji`,n.textAlign=a,n.textBaseline="middle",n.fillStyle=r,n.fillText(e,t,i),n.measureText(e).width}function Tr(n,e,t=.25,i=.25){return Pt(n/t)*(1-Pt((n-e+i)/i))}function l_(n,e,t,i,s,r=1920,o=1080,a=!1){let l=Tr(i,s,.2,.3);n.save(),n.globalAlpha=l*.72,n.fillStyle="#0c0720",n.fillRect(0,0,r,o),n.restore(),n.save(),n.globalAlpha=l,n.globalCompositeOperation="lighter",n.globalAlpha=l*.55,n.drawImage(t.glow.violet,r/2-800,o*.48-330,1600,660),n.restore(),n.save(),n.globalAlpha=l;let c=a?o*.42:o*.47,u=a?.78:1,f=e.wordmark,h=430*u,d=h*f.height/f.width,g=c-250*u;n.drawImage(f,r/2-h/2,g-d/2+(1-cn(i/.5))*20,h,d);let v=ln(1.12,1,yu(Pt((i-.08)/.55)));n.save(),n.translate(r/2,c),n.scale(v*u,v*u);let m=ji(n,"Reborn by Dawn",0,0,190,"#ffffff","#150a2c",22);Ys(n,-m/2-46,-30,30,i*2),Ys(n,m/2+46,-30,30,i*2+1),Ys(n,m/2-20,-112,15,i*3),Ys(n,-m/2+60,92,12,i*3+2),n.strokeStyle="rgba(255,255,255,0.75)",n.lineWidth=2;for(let E of[-1,1])n.beginPath(),n.moveTo(E*(m/2+46),0),n.lineTo(E*(m/2+46),70),n.stroke(),n.beginPath(),n.arc(E*(m/2+46),76,5,0,Math.PI*2),n.fillStyle="#fff",n.fill();n.restore();let p=Pt((i-.45)/.35);n.globalAlpha=l*p,n.font=`600 ${a?30:34}px Montserrat Italic`,n.textAlign="center",n.fillStyle="#efe7ff",n.fillText("Buried in one world. Reborn in another.",r/2,c+150*u),Rt(n,"A GAME FOR THE GOTHAMISTAS",r/2,c+205*u,a?17:18,hi.gold,800,"center",8),n.restore()}function c_(n,e,t,i,s=1920,r=996,o=40,a){let l=Tr(t,i,.2,.25);if(l<=0)return;n.save(),n.globalAlpha=l;let c=(1-cn(t/.3))*18;n.font=`800 ${o}px Montserrat`;let u=n.measureText(e).width+80,f=o*1.9;if(Wn(n,s/2-u/2,r-f/2+c,u,f,f/2,"rgba(18,10,36,0.88)","rgba(246,216,96,0.65)"),Rt(n,e,s/2,r+c+2,o,"#fff",800,"center"),a){n.font="800 15px Montserrat",n.letterSpacing="6px";let h=n.measureText(a).width+40;n.letterSpacing="0px",Wn(n,s/2-h/2,r-f/2-22+c,h,32,16,hi.pink,null),Rt(n,a,s/2+3,r-f/2-6+c,15,"#fff",800,"center",6)}n.restore()}function h_(n,e,t,i,s,r,o,a="left",l=64){let c=Tr(i,s,.25,.3);if(c<=0)return;n.save(),n.globalAlpha=c*Pt(i/.25),Rt(n,e,r,o,l*.62,"#e9e1ff",700,a);let u=Pt((i-.55)/.3);n.globalAlpha=c*u;let f=ln(1.08,1,cn((i-.55)/.4));n.save(),n.translate(r,o+l*1.25),n.scale(f,f),ji(n,t,0,0,l*1.45,"#ffffff","#140a2a",14,a),n.restore(),n.restore()}function u_(n,e,t,i,s,r,o){let a=Tr(e,t,.25,.3);if(a<=0)return;n.save(),n.globalAlpha=a*Pt(e/.25),Rt(n,"Bots can like a post.",i,s,44*o,"#efe7ff",700,r);let l=Pt((e-.6)/.3),c=ln(1.1,1,cn((e-.6)/.45));n.globalAlpha=a*l,n.save(),n.translate(i,s+120*o),n.scale(c,c),ji(n,"They can't",0,0,118*o,"#ffffff","#140a2a",16,r),ji(n,"raise the dead.",0,118*o,118*o,"#ffffff","#140a2a",16,r),n.restore();let u=Pt((e-1.3)/.3);n.globalAlpha=a*u,Rt(n,"ONLY HOLDERS WHO PLAY CLIMB THE REGISTRY",i,s+330*o,17*o,"#f6d860",800,r,4),n.restore()}function xu(n,e,t,i,s,r=22){n.save(),n.globalCompositeOperation="lighter";for(let o=0;o<r;o++){let a=4+Qi.hash(o,21)*3,l=(t+Qi.hash(o,22)*a)%a/a,c=Qi.hash(o,23)*i+Math.sin(t*.8+o)*20,u=s*(1.05-l*1.1),f=6+Qi.hash(o,24)*12;n.globalAlpha=Math.sin(l*Math.PI)*.5,n.drawImage(e.glow[Qi.GRAVES[o%5].id],c-f,u-f,f*2,f*2)}n.restore()}function Mu(n,e,t,i,s){let r=1.06+t*.006,o=Math.sin(t*.35)*18;n.drawImage(e.bgBlur,(i-i*r)/2+o,(s-s*r)/2,i*r,s*r)}function f_(n){let e=n/3e4;return[36880,29240,27410,25120,22760,20940,18310,16450,14080].map(t=>Math.round(t*e/10)*10)}function Su(n,e){let t=f_(e).map((i,s)=>({name:`holder_${String(s+1).padStart(2,"0")}`,score:i,you:!1,face:s}));return t.push({name:"holder_you",score:n,you:!0,face:9}),t.sort((i,s)=>s.score-i.score)}function d_(n,e,t,i,s,r=1920,o=1080,a=!1,l=2.6){Mu(n,t,i,r,o),n.save(),n.fillStyle="rgba(14,8,30,0.62)",n.fillRect(0,0,r,o),n.globalCompositeOperation="soft-light";let c=n.createLinearGradient(0,0,0,o);c.addColorStop(0,"rgba(255,111,181,0.7)"),c.addColorStop(1,"rgba(255,179,107,0.25)"),n.fillStyle=c,n.fillRect(0,0,r,o),n.restore(),xu(n,t,i,r,o);let u=a?960:980,f=a?1180:940,h=a?(r-u)/2:110,d=a?420:(o-f)/2,g=cn(i/.45);n.save(),n.globalAlpha=g,n.translate(0,(1-g)*40),Wn(n,h,d,u,f,30,"rgba(22,12,44,0.93)","rgba(246,216,96,0.55)");let v=e.mortuary,m=330,p=m*v.height/v.width;n.drawImage(v,h+u/2-m/2,d+22,m,p),Rt(n,"DEATH REGISTRY \xB7 WL LEADERBOARD",h+u/2,d+p+46,19,hi.gold,800,"center",5),Wn(n,h+u-140,d+30,104,30,15,hi.pink,null),Rt(n,"SAMPLE",h+u-88,d+46,13,"#fff",900,"center",3);let E=cn(Pt((i-(a?.25:.5))/l)),w=Math.round(ln(s*.45,s,E)),b=Su(w,s),D=d+p+92,R=a?66:62;Rt(n,"RANK",h+52,D-4,12,"rgba(201,184,255,0.7)",800,"left",3),Rt(n,"GOTHAMISTA",h+190,D-4,12,"rgba(201,184,255,0.7)",800,"left",3),Rt(n,"SCORE",h+u-52,D-4,12,"rgba(201,184,255,0.7)",800,"right",3);let I=["face_nft_01","face_nft_02","face_nft_03","face_nft_04","face_nft_05","face_nft_06","face_nft_04","face_nft_02","face_nft_06","face_nft_05"];b.forEach((x,y)=>{let T=D+34+y*R,B=Pt((i-.15-y*.04)/.25);if(n.save(),n.globalAlpha=g*B,x.you){let P=n.createLinearGradient(h+30,0,h+u-30,0);P.addColorStop(0,"rgba(240,74,158,0.95)"),P.addColorStop(1,"rgba(139,92,255,0.9)"),Wn(n,h+28,T-R*.44,u-56,R*.88,16,P,"#ffffff");let z=i*.7%1.4/1.4,W=h+28+(u-56)*(z*1.4-.2);n.save(),n.beginPath(),n.roundRect(h+28,T-R*.44,u-56,R*.88,16),n.clip();let H=n.createLinearGradient(W-90,0,W+90,0);H.addColorStop(0,"rgba(255,255,255,0)"),H.addColorStop(.5,"rgba(255,255,255,0.35)"),H.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=H,n.fillRect(W-90,T-R*.44,180,R*.88),n.restore()}else y%2===0&&Wn(n,h+28,T-R*.44,u-56,R*.88,14,"rgba(255,255,255,0.04)",null);Rt(n,String(y+1).padStart(2,"0"),h+60,T,24,x.you?"#fff":y<3?hi.gold:"#c9b8ff",900,"left"),n.save(),n.beginPath(),n.arc(h+150,T,23,0,Math.PI*2),n.clip(),n.drawImage(e[I[x.face]],h+127,T-23,46,46),n.restore(),n.beginPath(),n.arc(h+150,T,23,0,Math.PI*2),n.lineWidth=2,n.strokeStyle=x.you?"#fff":"rgba(201,184,255,0.5)",n.stroke(),Rt(n,x.name,h+190,T,25,"#fff",x.you?900:600,"left"),x.you&&(Wn(n,h+352,T-14,64,28,14,"#ffffff",null),Rt(n,"YOU",h+384,T+1,13,"#c0267a",900,"center",2)),Rt(n,x.score.toLocaleString("en-US"),h+u-52,T,26,"#fff",800,"right"),n.restore()});let _=b.findIndex(x=>x.you)+1;return Rt(n,`YOUR RANK  #${_}`,h+u/2,d+f-34,16,"#efe7ff",800,"center",4),n.restore(),_}function p_(n,e,t,i,s,r=1920,o=1080,a=!0){n.fillStyle="#000",n.fillRect(0,0,r,o);let l=cn(i/.4),c=ln(1.04,1,l)*(1+Math.max(0,i-.4)*.008);n.save(),n.globalAlpha=l,n.translate(r/2,o/2),n.scale(c*r/1920,c*r/1920),n.translate(-960,-540),n.drawImage(e.orbituary,0,0,1920,1080),n.save(),n.fillStyle="rgba(0,0,0,0.55)",n.fillRect(690,575,160,80),n.restore();let u=Pt((i-.45)/.25);if(u>0){n.save(),n.globalCompositeOperation="lighter",n.globalAlpha=u*(.7+.2*Math.sin(i*5)),n.drawImage(t.glow.pink,956,498,380,240),n.restore(),n.save(),n.translate(1146,618);let v=ln(1.6,1,o_(u));n.scale(v,v),n.globalAlpha=u,n.strokeStyle=hi.pink,n.lineWidth=6,n.beginPath(),n.ellipse(0,0,112,52,-.06,0,Math.PI*2),n.stroke(),n.lineWidth=2.5,n.beginPath(),n.ellipse(0,0,122,60,-.06,0,Math.PI*2),n.stroke(),n.restore()}let f=Pt((i-.75)/.3);n.save(),n.globalAlpha=f,Rt(n,"HOLDER_YOU  \xB7  REBORN BY DAWN",960,692,18,hi.gold,800,"center",5),ji(n,`${s.reborn} Souls Reborn`,960,742,58,"#ffffff"),n.restore();let h=Pt((i-1.05)/.3);n.save(),n.globalAlpha=h;let d=[[`SCORE ${s.score.toLocaleString("en-US")}`],[`BEST STREAK \xD7${s.best}`],[`COFFEES LEFT ${s.coffee}/5`],[`WL RANK #${s.rank}`]],g=960-1.5*250;if(d.forEach(([v],m)=>{let p=960+(m-1.5)*262;Wn(n,p-122,826,244,44,22,"rgba(25,14,50,0.95)","rgba(201,184,255,0.6)"),Rt(n,v,p,849,14,"#fff",800,"center",2)}),n.restore(),a){let v=Pt((i-1.35)/.3),m=i>2.45&&i<2.7?.93:1,p=1+Math.sin(i*6)*.02*(i<2.45?1:0);if(n.save(),n.globalAlpha=v,n.translate(960,935),n.scale(m*p,m*p),Wn(n,-170,-36,340,72,36,hi.gold,null),Rt(n,"SHARE ON X",0,2,22,"#1b1233",900,"center",4),n.restore(),i>2.2){let E=Pt((i-2.2)/.2),w=ln(1180,1010,cn((i-2.2)/.3)),b=ln(1040,955,cn((i-2.2)/.3));if(n.save(),n.globalAlpha=E*v,i>2.45){let D=(i-2.45)*220;n.strokeStyle="rgba(255,255,255,"+Math.max(0,.8-(i-2.45)*2)+")",n.lineWidth=4,n.beginPath(),n.arc(w,b,D,0,Math.PI*2),n.stroke()}n.beginPath(),n.arc(w,b,22,0,Math.PI*2),n.fillStyle="rgba(255,255,255,0.85)",n.fill(),n.lineWidth=3,n.strokeStyle="#1b1233",n.stroke(),n.restore()}}n.restore()}function m_(n,e,t,i,s,r,o=1920,a=1080,l=!1){Mu(n,t,i,o,a),n.fillStyle="rgba(8,5,18,0.78)",n.fillRect(0,0,o,a),xu(n,t,i,o,a,16);let c=l?960:860,u=l?980:900,f=(o-c)/2,h=(a-u)/2+(l?40:0),d=yu(Pt(i/.5));n.save(),n.translate(o/2,a/2),n.scale(ln(.9,1,d)*(1+i*.01),ln(.9,1,d)*(1+i*.01)),n.translate(-o/2,-a/2),n.globalAlpha=Pt(i/.25),Wn(n,f,h,c,u,28,"#000000","#2f3336"),n.save(),n.beginPath(),n.arc(f+70,h+72,32,0,Math.PI*2),n.clip(),n.drawImage(e.face_nft_04,f+38,h+40,64,64),n.restore(),Yt(n,"holder_you",f+118,h+60,26,"#e7e9ea",700,"left"),Yt(n,"@holder_you \xB7 1m",f+118,h+92,21,"#71767b",400,"left"),Yt(n,"\u{1D54F}",f+c-50,h+64,30,"#e7e9ea",700,"center"),[`Got ${s.reborn} Gothamistas reborn before dawn \u{1F5A4}`,`Mort survived on ${s.coffee} coffees. Rank #${s.rank} on the`,"Death Registry. Your turn, Gothamista \u26B0\uFE0F","#PaxGothamista #RestInPax"].forEach((D,R)=>Yt(n,D,f+40,h+150+R*38,26,R===3?"#1d9bf0":"#e7e9ea",400,"left"));let v=c-80,m=v*1080/1920,p=h+320;n.save(),n.beginPath(),n.roundRect(f+40,p,v,m,18),n.clip(),n.drawImage(r,f+40,p,v,m),n.restore(),n.beginPath(),n.roundRect(f+40,p,v,m,18),n.lineWidth=1.5,n.strokeStyle="#2f3336",n.stroke();let E=Math.round(ln(3,666,cn(Pt((i-.4)/2.4)))),w=Math.round(ln(0,128,cn(Pt((i-.5)/2.3)))),b=p+m+46;[["\u{1F4AC}","42"],["\u{1F501}",String(w)],["\u{1F5A4}",String(E)],["\u{1F4CA}",(E*31).toLocaleString("en-US")]].forEach(([D,R],I)=>{Yt(n,D+"  "+R,f+70+I*(c-120)/4,b,22,"#71767b",500,"left")}),n.restore(),Rt(n,"POST PREVIEW \xB7 MOCK-UP",o/2,h+u+(l?46:34),13,"rgba(232,224,255,0.6)",700,"center",4)}function g_(n,e,t,i,s=1920,r=1080,o=!1){let a=Pt(i/.3);n.save(),n.globalAlpha=.78*a,n.fillStyle="#0c0720",n.fillRect(0,0,s,r),n.restore(),n.save(),n.globalAlpha=a;let l=o?.8:1,c=o?r*.36:r*.42,u=e.wordmark,f=560*l,h=f*u.height/u.width;n.drawImage(u,s/2-f/2,c-250*l-h/2,f,h),n.save(),n.translate(s/2,c);let d=ln(1.06,1,cn(i/.6))*l;n.scale(d,d);let g=ji(n,"Reborn by Dawn",0,0,170,"#fff","#150a2c",20);Ys(n,-g/2-40,-28,26,i*2),Ys(n,g/2+40,-28,26,i*2+1),n.restore(),Rt(n,"A GAME CONCEPT FOR PAX GOTHAMISTA",s/2,c+128*l,o?20:22,hi.gold,800,"center",8),n.font=`600 ${o?26:28}px Montserrat Italic`,n.textAlign="center",n.fillStyle="#efe7ff",n.fillText("Welcome to your second life. Try not to waste this one.",s/2,c+186*l),n.restore()}function za(n,e,t,i=1920,s=1080,r=!1,o=!1){n.fillStyle="#000",n.fillRect(0,0,i,s);let a=b=>Pt((t-b)/.35),l=r?i/1920*1.55:1,c=i/2,u=r?s*.26:160;r||(n.save(),n.globalAlpha=a(0)*.8,n.font="400 21px JBMono",n.textBaseline="middle",n.textAlign="left",n.fillStyle="#8e86a8",n.letterSpacing="1px",n.fillText("ENCORE STUDIO  /  GAME CONCEPT FILM",96,30),n.textAlign="right",n.fillText("PAX GOTHAMISTA",i-96,30),n.letterSpacing="0px",n.restore()),n.save(),n.globalAlpha=a(0);let f=300*l*(1+t*.006),h=f*e.encore.height/e.encore.width,d=u+(1-cn(t/.5))*14;n.drawImage(e.encore,c-f/2,d,f,h),n.restore();for(let b of[.9,2.7]){let D=(t-b)/.8;if(D<0||D>1)continue;za.tmp||(za.tmp=Qi.makeCanvas(e.encore.width,e.encore.height));let R=za.tmp,I=R.getContext("2d");I.globalCompositeOperation="source-over",I.clearRect(0,0,R.width,R.height),I.drawImage(e.encore,0,0);let _=-R.width*.4+D*R.width*1.8,x=I.createLinearGradient(_-70,0,_+70,R.height*.4);x.addColorStop(0,"#000"),x.addColorStop(.5,"#fff"),x.addColorStop(1,"#000"),I.globalCompositeOperation="multiply",I.fillStyle=x,I.fillRect(0,0,R.width,R.height),n.save(),n.globalCompositeOperation="lighter",n.globalAlpha=.55*Math.sin(D*Math.PI),n.drawImage(R,c-f/2,d,f,h),n.restore()}let g=u+h+60*l;n.save(),n.globalAlpha=a(.15),Yt(n,"REBORN BY DAWN \u2014 a game concept for Pax Gothamista",c,g,(r?30:38)*1,"#ffffff",500),n.restore(),g+=r?58:60,n.save(),n.globalAlpha=a(.25),n.font=`400 ${r?22:24}px JBMono`,n.letterSpacing="9px",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#a7a7a7",n.fillText("BY ENCORE STUDIO",c,g),n.letterSpacing="0px",n.restore(),g+=r?110:96,n.save(),n.globalAlpha=a(.4);let v=ln(1.04,1,cn((t-.4)/.5));n.translate(c,g),n.scale(v,v),r?(Yt(n,"One crew for",0,-40,76,"#f4f4f4",700),Yt(n,"your whole launch.",0,46,76,"#f4f4f4",700)):Yt(n,"One crew for your whole launch.",0,0,72,"#f4f4f4",700),n.restore(),g+=r?200:110,n.save(),n.globalAlpha=a(.6),r?(Yt(n,"Book a free 30-min call",c,g,34,"#f0f0f0",500),Yt(n,"encorestudio.xyz \xB7 @EncoreStudiohq",c,g+54,34,"#f0f0f0",500),g+=54):Yt(n,"Book a free 30-min call \xB7 encorestudio.xyz \xB7 @EncoreStudiohq",c,g,38,"#f0f0f0",500),n.restore(),g+=r?110:104,n.save(),n.globalAlpha=a(.75),n.strokeStyle="#2a2a2a",n.lineWidth=2,n.beginPath(),n.moveTo(c-(r?420:520),g),n.lineTo(c+(r?420:520),g),n.stroke();let m="Unofficial concept by Encore Studio. Not affiliated with or endorsed by Pax Gothamista.",p="Pax Gothamista characters and art \xA9 Pax Gothamista.";r?(Yt(n,"Unofficial concept by Encore Studio.",c,g+56,24,"#b5b5b5",400),Yt(n,"Not affiliated with or endorsed by Pax Gothamista.",c,g+92,24,"#b5b5b5",400),Yt(n,p,c,g+128,24,"#b5b5b5",400)):(Yt(n,m,c,g+50,26,"#b5b5b5",400),Yt(n,p,c,g+92,26,"#b5b5b5",400)),n.restore(),n.save(),n.globalAlpha=a(.9);let E=r?c-255:i-566,w=r?s-170:s-88;n.fillStyle="#05060d",n.fillRect(E,w,510,52),n.strokeStyle="#3a3f5a",n.lineWidth=2,n.strokeRect(E,w,510,52),n.fillStyle="#e8213c",n.fillRect(E+14,w+22,8,8),n.font="400 34px Silkscreen",n.textAlign="left",n.textBaseline="middle",n.fillStyle="#f2f2f2",n.fillText("CONCEPT",E+32,w+27),n.fillRect(E+236,w+22,8,8),n.fillText("UNOFFICIAL",E+254,w+27),n.restore()}bu.exports={botsLine:u_,titleCard:l_,caption:c_,bigLine:h_,leaderboard:d_,resultCard:p_,xPost:m_,gameCard:g_,encoreCard:za,fraktur:ji,mont:Rt,rows:Su,fadeInOut:Tr}});var Iu=is((Ev,Pu)=>{var wr=Xs(),Eu=yr(),{PAL:es,clamp:Ii,lerp:__,easeOut:v_,easeIn:y_,easeOutBack:Au,panel:ts,label:ui,floatText:Xn,sparkle:wu,drawEmblem:wv}=wr,{GRAVES:gc,C:ka}=Eu;function Cu(n,e,t,i,s,r,o=1){if(t===Eu.RARE){n.save(),n.globalAlpha=o,n.beginPath(),n.arc(i,s,r,0,7),n.fillStyle="#f4f1ea",n.fill(),n.clip(),n.translate(i,s),n.fillStyle="#0b0b0f",n.beginPath();for(let a=0;a<24;a+=.1)n.lineTo(Math.cos(a)*a*r/24,Math.sin(a)*a*r/24);n.lineWidth=r*.18,n.strokeStyle="#0b0b0f",n.stroke(),n.restore(),n.save(),n.globalAlpha=o,n.lineWidth=2.5,n.strokeStyle="#e8213c",n.beginPath(),n.arc(i,s,r,0,7),n.stroke(),n.restore();return}wr.soulChip(n,e,t,i,s,r,o)}function Ru(n,e,t){let i=t,s=t,r=-9;for(let o of n)o.score==null||o.t>e||(i=s,s=o.score,r=o.t);return Math.round(__(i,s,v_((e-r)/.4)))}function x_(n,e,t,i,s,r={}){let o=r.w||1920,a=r.scale||1,l=i.t;n.save(),n.scale(a,a);let c=o/a,u=r.regX??40,f=r.regY??32;ts(n,u,f,360,118),ui(n,"CARRYING",u+22,f+26,15,es.gold,"left",3.5),ui(n,`BOTS BANISHED ${i.banished}`,u+338,f+26,11,"rgba(201,184,255,0.8)","right",2,700);let h=i.carried.map(P=>i.souls.find(z=>z.id===P)).filter(Boolean);for(let P=0;P<ka.MAXC;P++){let z=u+52+P*74,W=f+76,H=h[P];if(H){let j=l-(H.catchT||0),G=1+Math.max(0,1-j/.25)*.3;n.save(),n.translate(z,W),n.scale(G,G),Cu(n,t,H.type,0,0,26),n.restore()}else n.save(),n.setLineDash([5,6]),n.lineWidth=2,n.strokeStyle="rgba(201,184,255,0.45)",n.beginPath(),n.arc(z,W,24,0,7),n.stroke(),n.restore()}ui(n,`${h.length}/${ka.MAXC}`,u+300,f+78,22,"#fff","center",1,900);let d=520,g=c/2-d/2,v=r.dawnY??48,m=Ii((l-i.t0)/i.shift),p=Math.max(0,i.t0+i.shift-l),E=p<10&&!i.over;ts(n,g-70,v-26,d+140,74),ui(n,i.over?"DAWN \u2014 SHIFT COMPLETE":`DAWN IN 0:${String(Math.ceil(p)).padStart(2,"0")}`,c/2,v-3,15,E?"#ffb36b":es.white,"center",4),n.beginPath(),n.roundRect(g,v+18,d,12,6),n.fillStyle="rgba(255,255,255,0.12)",n.fill();let w=n.createLinearGradient(g,0,g+d,0);w.addColorStop(0,"#5b4bff"),w.addColorStop(.6,es.pink),w.addColorStop(1,"#ffc46b"),n.beginPath(),n.roundRect(g,v+18,Math.max(12,d*m),12,6),n.fillStyle=w,n.fill(),n.beginPath(),n.arc(g-34,v+12,15,0,7),n.fillStyle="#dfe9ff",n.fill(),n.beginPath(),n.arc(g-27,v+7,13,0,7),n.fillStyle="#1b1233",n.fill(),n.save(),n.translate(g+d+34,v+12),n.fillStyle="#ffc46b";for(let P=0;P<8;P++)n.rotate(Math.PI/4),n.fillRect(-2,-21,4,7);n.beginPath(),n.arc(0,0,11,0,7),n.fill(),n.restore();let b=c-(r.scoreR??40);if(ts(n,b-330,32,330,118),ui(n,"SCORE",b-22,58,15,es.gold,"right",3.5),n.font="900 54px Montserrat",n.textAlign="right",n.textBaseline="middle",n.fillStyle=i.powers.morticia>l?"#ffd27a":"#fff",n.fillText(Ru(s,l,r.baseScore||0).toLocaleString("en-US"),b-22,104),i.combo>1){let P=[...s].reverse().find(W=>W.t<=l&&W.combo),z=P?Math.max(0,1-(l-P.t)/.25):0;n.save(),n.translate(b-246,58),n.scale(1+z*.25,1+z*.25),ts(n,-62,-16,124,32,16,es.pink,null),ui(n,`COMBO \xD7${i.mult}`,0,1,12,"#fff","center",1.5,900),n.restore()}let D=r.cofX??40,R=r.cofY??960;ts(n,D,R,392,92),ui(n,"MORT'S COFFEE",D+22,R+22,13,es.gold,"left",3);let I=[...s].reverse().find(P=>P.type==="hit"&&P.t<=l&&l-P.t<.9),_=[...s].reverse().find(P=>P.type==="coffee"&&P.t<=l&&l-P.t<.5);for(let P=0;P<5;P++){let z=P<i.coffee,W=D+30+P*70,H=R+34;if(n.save(),n.globalAlpha=z?1:.22,I&&P===I.coffee){let j=(l-I.t)/.9;n.globalAlpha=1-j*.78,n.translate(W+28,H+50),n.rotate(Math.min(1,j*3)*.9),n.translate(-W-28,-H-50)}if(_&&P===_.coffee-1){let j=(l-_.t)/.5;n.translate(W+26,H+30),n.scale(1+(1-j)*.4,1+(1-j)*.4),n.translate(-W-26,-H-30)}n.drawImage(e.mug,W-4,H-4,58,62),n.restore()}let x=gc.map((P,z)=>({g:P,i:z,left:i.powers[P.id]-l})).filter(P=>P.left>0),y=200,T=c/2-x.length*y/2+y/2,B=r.powY??1e3;x.forEach((P,z)=>{let W=T+z*y,H=ka.POWER-P.left,j=Au(Ii(H/.35)),G=Ii(P.left/.3);n.save(),n.globalAlpha=G,n.translate(W,B),n.scale(j,j),ts(n,-96,-34,192,68,34,"rgba(18,10,36,0.86)",wr.hexA(P.g.color,.8)),n.save(),n.beginPath(),n.arc(-62,0,25,0,7),n.clip(),n.drawImage(e[P.g.face],-87,-25,50,50),n.restore(),n.lineWidth=4,n.strokeStyle="rgba(255,255,255,0.15)",n.beginPath(),n.arc(-62,0,29,0,7),n.stroke(),n.strokeStyle=P.g.color,n.beginPath(),n.arc(-62,0,29,-Math.PI/2,-Math.PI/2+Math.PI*2*(P.left/ka.POWER)),n.stroke(),n.font="21px Fraktur",n.textAlign="left",n.textBaseline="middle",n.fillStyle="#fff",n.fillText(P.g.power,-28,-8,120),ui(n,P.g.powerDesc.length>14?P.g.powerDesc.replace("BOTS TURN INTO SOULS","BOTS \u2192 SOULS").replace("THORNS SHRED BOTS","SHREDS BOTS"):P.g.powerDesc,-28,16,9,P.g.color,"left",1.2,800),n.restore()}),r.encoreTag!==!1&&ui(n,"CONCEPT BY ENCORE STUDIO",c-40,r.tagY??1050,12,"rgba(232,224,255,0.62)","right",3,700),n.restore()}function M_(n,e,t,i,s){if(s<0||s>1.7)return;let o=Ii(s/.15)*(1-y_(Ii((s-1.7+.35)/.35))),a=Au(Ii(s/.25));n.save(),n.translate(t,i),n.scale(a,a),n.globalAlpha=o,n.textAlign="center",n.textBaseline="middle",n.font="800 16px Montserrat",n.letterSpacing="6px",n.lineWidth=6,n.strokeStyle="#150b2c",n.strokeText("REBORN",0,-50),n.fillStyle=e.color,n.fillText("REBORN",0,-50),n.letterSpacing="0px",n.font="56px Fraktur",n.lineJoin="round",n.lineWidth=10,n.strokeText(e.name,0,-2),n.fillStyle="#fff",n.fillText(e.name,0,-2);let l=n.measureText(e.name).width;wu(n,-l/2-24,-10,12,s*4),wu(n,l/2+24,-10,12,s*4+1),n.font="900 19px Montserrat",n.letterSpacing="3px";let c=`POWER \xB7 ${e.power.toUpperCase()}`,u=n.measureText(c).width+36;ts(n,-u/2,30,u,36,18,wr.hexA(e.color,.92),null),n.fillStyle="#1b1233",n.fillText(c,0,49),n.letterSpacing="0px",n.restore()}function S_(n,e,t,i,s={}){let r=t.t,o=(a,l,c)=>e.project(a,l,c);for(let a of i){let l=r-a.t;if(!(l<0||l>2)){if(a.type==="rise"||a.type==="pop"){let c=gc[a.g],u=e.STONE_D[c.stone],f=o(c.impact.x,c.impact.y-70,u);if(Xn(n,"+"+a.delta,f.x,f.y,l,{fill:c.color,dur:.95}),a.mult>1&&Xn(n,"\xD7"+a.mult,f.x+92,f.y-42,l-.05,{fill:es.gold,size:.7,dur:.85}),a.type==="rise"&&s.names!==!1&&!i.some(h=>h.type==="fullhouse"&&Math.abs(h.t-a.t)<.06)){let h=o(Ii(c.rise.x,420,1500),Math.max(250,c.rise.base-c.rise.h*.62),u+.8);M_(n,c,h.x,h.y,l-.25)}}if(a.type==="botkill"&&a.by!=="fullhouse"){let c=o(a.x,a.y-40,e.PLAY_D);Xn(n,a.by==="thorns"?"SHREDDED":"BANISHED",c.x,c.y,l,{fill:"#9ff3ff",size:.62,dur:.8}),a.delta&&Xn(n,"+"+a.delta,c.x,c.y+40,l-.05,{fill:"#fff",size:.55,dur:.7})}if(a.type==="convert"){let c=o(a.x,a.y-40,e.PLAY_D);Xn(n,"BAD INFLUENCE!",c.x,c.y,l,{fill:gc[2].color,size:.62,dur:.9})}if(a.type==="hit"){let c=o(a.x,a.y-80,e.PLAY_D);wr.floatText(n,a.stolen?"SOUL STOLEN!":"OUCH!",c.x,c.y,l,{fill:"#ff6b8e",size:.9,dur:1.1}),Xn(n,"\u22121 COFFEE",c.x,c.y+52,l-.1,{fill:"#ffd1e3",size:.55,dur:1})}if(a.type==="steal"){let c=o(a.x,a.y-50,e.PLAY_D);Xn(n,"STOLEN!",c.x,c.y,l,{fill:"#ff6b8e",size:.75,dur:1})}if(a.type==="coffee"){let c=o(a.x,a.y-50,e.PLAY_D);Xn(n,"+1 COFFEE",c.x,c.y,l,{fill:"#ffcf8a",size:.7,dur:.9})}if(a.type==="lost"){let c=o(a.x,900,e.PLAY_D);Xn(n,"LOST SOUL",c.x,c.y,l,{fill:"#c9b8ff",size:.55,dur:.9})}if(a.type==="catch"&&s.catchText){let c=o(t.mort.x,t.mort.y-120,e.PLAY_D);Xn(n,`${a.n}/3`,c.x,c.y,l,{fill:"#fff",size:.5,dur:.5})}}}}function b_(n,e,t,i,s){let r=e.find(l=>l.type==="passout");if(!r)return;let o=t-r.t;if(o<0)return;let a=Ii(o/.4);n.save(),n.globalAlpha=a*.55,n.fillStyle="#0a0518",n.fillRect(0,0,i,s),n.globalAlpha=a,n.textAlign="center",n.textBaseline="middle",n.font="800 22px Montserrat",n.letterSpacing="10px",n.fillStyle="#ffb3c8",n.fillText("OUT OF COFFEE",i/2,s*.42-80),n.letterSpacing="0px",n.font="120px Fraktur",n.lineWidth=16,n.strokeStyle="#140a2a",n.strokeText("Mort Passed Out",i/2,s*.45),n.fillStyle="#fff",n.fillText("Mort Passed Out",i/2,s*.45),n.restore()}Pu.exports={drawHUD2:x_,drawWorldText:S_,drawPassout:b_,chip:Cu,scoreAt:Ru}});var Fu=is((Av,Ou)=>{var Va=yr(),qn=(n,e,t)=>Math.max(e,Math.min(t,n)),gn=(n,e,t)=>n+(e-n)*t,bn=n=>(n=qn(n,0,1),n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2),Lu=2*17*Math.tan(15*Math.PI/180)/1080;function Du(){let n=[],e=(a,l,c,u={})=>n.push(Object.assign({t:a,kind:"soul",type:l,x:c},u)),t=(a,l,c,u={})=>n.push(Object.assign({t:a,kind:"bot",x:l,y:c},u));e(.3,1,700,{vy:85}),e(1.1,0,430,{vy:80}),e(1.9,1,880,{vy:90}),e(3.2,3,1290,{vy:90}),e(4,4,1560,{vy:95}),e(4.8,3,1150,{vy:95}),e(6,0,560),e(6.8,1,820),e(7.6,4,1420),t(8.2,1990,300),t(8.4,1990,470),e(8.6,0,520),t(9.5,-70,260),e(9.4,1,900),e(10.2,4,1380),t(10.6,1990,380),e(11,0,640),n.push({t:11.55,kind:"bot",near:300,ny:-80,speed:560}),n.push({t:11.9,kind:"bot",ahead:330,speed:420}),e(12,2,960),e(12.9,3,1250),n.push({t:13.6,kind:"cup",x:900}),e(13.9,1,760);let i=Va.rng(404),s=[0,1,3,1,0,3],r=[1,0,1,0,1,3];for(let a=14.8,l=0;a<20;a+=.82+i()*.25,l++)e(a,s[l%s.length],300+i()*1300);for(let a=20.2,l=0;a<25.6;a+=.82+i()*.25,l++)e(a,r[l%r.length],300+i()*1300);for(let a=15.5;a<25;a+=2.3+i()*.8)t(a,i()<.5?-70:1990,150+i()*450);[2,4,2,1,4,1,4].forEach((a,l)=>e(26+l*.12,a,330+l*210,{mass:!0,vy:120})),e(28.6,1,600),e(29.4,4,1200),t(28.5,1990,300),t(29.8,-70,350),n.push({t:31.4,kind:"rare",x:1e3,vy:95});let o=[0,1,3,0,1,3,1,0];for(let a=33.6,l=0;a<40;a+=.9+i()*.2,l++)e(a,o[l%o.length],350+i()*1200);for(let a=33.8;a<40;a+=2.4+i()*.6)t(a,i()<.5?-70:1990,150+i()*400);return[[4,-170],[2,0],[0,170]].forEach(([a,l],c)=>n.push({t:40.3+c*.08,kind:"soul",type:a,near:l,ny:-150,vy:60})),[[1,-150],[3,150]].forEach(([a,l],c)=>n.push({t:41.9+c*.08,kind:"soul",type:a,near:l,ny:-150,vy:60})),t(41,1990,250),t(41.2,-70,300),t(41.8,1990,450),e(43.6,1,800),e(44.2,4,1400),n}function Uu(){let n=Va.runTake({seed:11,shift:60,t0:30.4,score:48210,combo:9,coffee:5,mortX:230,mortY:300,carry:[2,4],fhHold:2.8,preset:[{g:0,remaining:4.2,age:2.2,power:2.5},{g:1,remaining:3.9,age:1.6,power:3},{g:3,remaining:4.5,age:1,power:3.5}],presetBots:[{x:1700,y:300},{x:600,y:330},{x:1100,y:860}],spawns:[{t:31,kind:"soul",type:1,x:780},{t:31.4,kind:"soul",type:0,x:500},{t:32,kind:"bot",x:1990,y:380},{t:32.4,kind:"soul",type:3,x:1300},{t:33.2,kind:"soul",type:4,x:1500},{t:33.9,kind:"soul",type:1,x:900}]},7),e=Va.runTake({seed:5,shift:45,mortX:960,mortY:320,spawns:Du(),aiBlind:[[11.4,13]]},49),t=Va.runTake({seed:2,shift:45,t0:45.3,mortX:1720,mortY:170,preset:[0,1,2,3,4].map(i=>({g:i,remaining:99,age:3,power:!1})),spawns:[]},4);return{hook:n,main:e,tableau:t}}var Zs=(n,e,t=0,i=-1)=>{let s=n.events.filter(r=>r.type===e&&r.t-n.frames[0].t>i);return s[t]?s[t].t-n.frames[0].t:null};function Nu(n){let e=n.main,t=Zs(e,"hit")??Zs(e,"steal")??12,i=Zs(e,"mass")??26,s=Zs(e,"special")??33,r=Zs(e,"fullhouse",0,38)??43,o=[{s:0,e:3,type:"game",take:"hook",from:.2,cam:"hook"},{s:3,e:5,type:"title",take:"hook",from:3.2,cam:"push"},{s:5,e:12,type:"game",take:"main",from:.5,cam:"establish",caps:[[5.3,8.6,"Fly Mort. Catch the falling souls.","HOW TO PLAY"],[8.75,11.9,"Bring each soul to her grave."]]},{s:12,e:15,type:"game",take:"main",from:t-1.9,cam:"close",caps:[[12.15,14.95,"Bots steal souls. Spin the scythe."]]},{s:15,e:19,type:"game",take:"main",from:i-.4,cam:"wide",caps:[[15.6,18.95,"Every girl you raise grants her power."]]},{s:19,e:22.5,type:"game",take:"main",from:s-.9,cam:"punch"},{s:22.5,e:26.8,type:"game",take:"main",from:r-.8,cam:"finale"},{s:26.8,e:32,type:"board"},{s:32,e:35.1,type:"result"},{s:35.1,e:38,type:"post"},{s:38,e:41,type:"gamecard",take:"tableau",from:0,cam:"tableau"},{s:41,e:45,type:"encore"}],a=[{s:0,e:2.6,type:"game",take:"hook",from:.2,cam:"pfollow"},{s:2.6,e:6.6,type:"game",take:"main",from:1.6,cam:"pfollow",caps:[[2.7,6.55,"Fly Mort. Bring the souls home.","HOW TO PLAY"]]},{s:6.6,e:8.8,type:"game",take:"main",from:t-1.4,cam:"pfollow",caps:[[6.65,8.75,"Spin the scythe. Banish bots."]]},{s:8.8,e:10.2,type:"game",take:"main",from:r-.3,cam:"pfollow"},{s:10.2,e:12,type:"board"},{s:12,e:13.1,type:"result"},{s:13.1,e:15,type:"encore"}];return{MAIN:o,SHORT:a}}function T_(n,e,t,i){let s=n.e-n.s,r=e/s,o=t.mort,a=o.trail&&o.trail.length?o.trail:[o],l=a.reduce((h,d)=>h+d.x,0)/a.length,c=a.reduce((h,d)=>h+d.y,0)/a.length,u=(l-960)*Lu,f=(540-c)*Lu;if(i)return{x:qn(u*.92,-7.4,7.4),y:qn(f*.25,-.6,.6)+.1,z:-.5,fov:33};switch(n.cam){case"hook":return{x:u*.22+Math.sin(e*.7)*.1,y:f*.12+.1,z:gn(-2.2,-.6,bn(r)),roll:gn(.02,0,r)};case"push":return{x:.1,y:.15,z:gn(-.4,-1.4,bn(r))};case"establish":return{x:gn(-.6,u*.14,bn(r)),y:gn(.6,f*.08,bn(r))+.05,z:gn(.8,-.4,bn(Math.min(1,r*1.4)))};case"close":return{x:qn(u*.55,-2.6,2.6),y:qn(f*.4,-1,1),z:-3.4};case"wide":return{x:u*.1+Math.sin(e*.5)*.15,y:f*.06+.1,z:gn(.6,0,bn(r))};case"punch":return{x:qn(u*.45,-2.2,2.2),y:qn(f*.3,-.8,.8),z:gn(-1.2,-3.8,bn(r))};case"finale":return{x:gn(qn(u*.4,-2,2),0,bn(r)),y:gn(qn(f*.3,-.8,.8),.5,bn(r)),z:gn(-2.6,.9,bn(r)),ly:gn(0,.9,bn(r))};case"tableau":return{x:Math.sin(e*.5)*.4,y:.3,z:gn(.2,-1.2,bn(r))}}return{x:u*.1,y:f*.06,z:0}}function w_(n,e,t,i){let{A:s,S:r,sc3:o,ctx:a,W:l,H:c,renderer:u}=n,f=Xs(),h=e==="short",d=Uu(),g=Nu(d),v=h?g.SHORT:g.MAIN,m=d.main.events.find(R=>R.type==="dawn"),p=d.main.frames[Math.round((m.t-d.main.frames[0].t)*60)],E={score:m.score,reborn:p.reborn,best:p.best,coffee:p.coffee};E.rank=i.rows(E.score,E.score).findIndex(R=>R.you)+1;let w=document.createElement("canvas");w.width=1920,w.height=1080,i.resultCard(w.getContext("2d"),s,r,3,E,1920,1080,!1);let b=h?{w:l,scale:1.32,regX:22,regY:60,scoreR:22,dawnY:232,cofX:(l/1.32-392)/2,cofY:1300,powY:1180,tagY:1432}:{};function D(R){let I=v.find(y=>R>=y.s&&R<y.e)||v[v.length-1],_=R-I.s;if(a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,l,c),a.globalAlpha=1,a.globalCompositeOperation="source-over",I.type==="game"||I.type==="title"||I.type==="gamecard"){let y=d[I.take],T=Math.min(y.frames.length-1,Math.max(0,Math.round((I.from+_)*60))),B=y.frames[T];if(o.update(B,y.events,R,{camera:T_(I,_,B,h),dawn:I.type==="gamecard"?1:void 0}),o.render(),I.type==="gamecard")i.gameCard(a,s,r,_,l,c,h);else{t.drawWorldText(a,o,B,y.events,{names:I.type==="game"}),h?(a.save(),a.translate(l/2,c*.44),a.scale(.56,.56),a.translate(-960,-540),f.drawMoments(a,s,r,y,B,B.t,1920,1080),a.restore()):f.drawMoments(a,s,r,y,B,B.t,l,c),t.drawHUD2(a,s,r,B,y.events,Object.assign({baseScore:y.frames[0].score},b)),I.type==="title"&&i.titleCard(a,s,r,_,I.e-I.s,l,c,h);for(let[P,z,W,H]of I.caps||[])R>=P&&R<z&&i.caption(a,W,R-P,z-P,l,h?1620:900,40,H)}}else u.setClearColor(0,1),u.clear(),I.type==="board"&&(i.leaderboard(a,s,r,_,E.score,l,c,h,h?1.1:2.6),h?i.botsLine(a,_-.15,I.e-I.s-.15,l/2,130,"center",.78):i.botsLine(a,_-1,I.e-I.s-1,1150,400,"left",1)),I.type==="result"&&(h?(a.fillStyle="#000",a.fillRect(0,0,l,c),a.save(),a.translate(0,(c-1080*l/1920)/2-120),i.resultCard(a,s,r,_+.6,E,l,1080*l/1920,!1),a.restore(),i.caption(a,"Orbituary status: Dead. You\u2019re in.",_+.2,I.e-I.s+.5,l,1330,40)):(i.resultCard(a,s,r,_,E,l,c,!0),_>2.75&&(a.fillStyle=`rgba(0,0,0,${qn((_-2.75)/.35,0,1)*.9})`,a.fillRect(0,0,l,c)))),I.type==="post"&&i.xPost(a,s,r,_,E,w,l,c,h),I.type==="encore"&&i.encoreCard(a,s,_,l,c,h,h);return v.indexOf(I)>0&&_<.1&&["game","board","result"].includes(I.type)&&(a.save(),a.globalCompositeOperation="lighter",a.globalAlpha=(1-_/.1)*.25,a.fillStyle="#fff",a.fillRect(0,0,l,c),a.restore()),!0}return{frame:D,duration:v[v.length-1].e,RES:E,list:v.map(R=>({s:R.s,e:R.e,type:R.type,take:R.take,from:R.from}))}}Ou.exports={takes:Uu,shots:Nu,makeCapture:w_,mainSpawns:Du,evT:Zs}});var Wl="170";var zu=0,yc=1,ku=2;var Ah=1,Vu=2,jn=3,Bn=0,sn=1,ei=2,On=0,tn=1,si=2,xc=3,Mc=4,Hu=5,zi=100,Gu=101,Wu=102,Xu=103,qu=104,Yu=200,Zu=201,$u=202,Ju=203,To=204,wo=205,Ku=206,Qu=207,ju=208,ef=209,tf=210,nf=211,sf=212,rf=213,af=214,Eo=0,Ao=1,Co=2,As=3,Ro=4,Po=5,Io=6,Lo=7,Xl=0,of=1,lf=2,Fn=0,ql=1,Yl=2,Zl=3,$l=4,cf=5,Jl=6,Kl=7;var Ch=300,Cs=301,Rs=302,Do=303,Uo=304,Ca=306,No=1e3,Vi=1001,Oo=1002,Rn=1003,hf=1004;var Ar=1005;var Nn=1006,Wa=1007;var Hi=1008;var ri=1009,Rh=1010,Ph=1011,lr=1012,Ql=1013,Gi=1014,ti=1015,dn=1016,jl=1017,ec=1018,Ps=1020,Ih=35902,Lh=1021,Dh=1022,Cn=1023,Uh=1024,Nh=1025,Ts=1026,Is=1027,Oh=1028,tc=1029,Fh=1030,nc=1031;var ic=1033,ea=33776,ta=33777,na=33778,ia=33779,Fo=35840,Bo=35841,zo=35842,ko=35843,Vo=36196,Ho=37492,Go=37496,Wo=37808,Xo=37809,qo=37810,Yo=37811,Zo=37812,$o=37813,Jo=37814,Ko=37815,Qo=37816,jo=37817,el=37818,tl=37819,nl=37820,il=37821,sa=36492,sl=36494,rl=36495,Bh=36283,al=36284,ol=36285,ll=36286;var ra=2300,cl=2301,Xa=2302,Sc=2400,bc=2401,Tc=2402;var uf=3200,ff=3201;var zh=0,df=1,xi="",Jt="srgb",Fs="srgb-linear",Ra="linear",dt="srgb";var ss=7680;var wc=519,pf=512,mf=513,gf=514,kh=515,_f=516,vf=517,yf=518,xf=519,hl=35044;var Ec="300 es",ni=2e3,aa=2001,bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qa=Math.PI/180,ul=180/Math.PI;function Si(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function nn(n,e,t){return Math.max(e,Math.min(t,n))}function Mf(n,e){return(n%e+e)%e}function Ya(n,e,t){return(1-t)*n+t*e}function Un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ce=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],E=s[1],w=s[4],b=s[7],D=s[2],R=s[5],I=s[8];return r[0]=o*v+a*E+l*D,r[3]=o*m+a*w+l*R,r[6]=o*p+a*b+l*I,r[1]=c*v+u*E+f*D,r[4]=c*m+u*w+f*R,r[7]=c*p+u*b+f*I,r[2]=h*v+d*E+g*D,r[5]=h*m+d*w+g*R,r[8]=h*p+d*b+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=t*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Za.makeScale(e,t)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Za=new We;function Vh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sf(){let n=oa("canvas");return n.style.display="block",n}var Ac={};function rr(n){n in Ac||(Ac[n]=!0,console.warn(n))}function bf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Tf(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wf(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var nt={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===dt&&(n.r=ii(n.r),n.g=ii(n.g),n.b=ii(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===dt&&(n.r=ws(n.r),n.g=ws(n.g),n.b=ws(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===xi?Ra:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Cc=[.64,.33,.3,.6,.15,.06],Rc=[.2126,.7152,.0722],Pc=[.3127,.329],Ic=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[Fs]:{primaries:Cc,whitePoint:Pc,transfer:Ra,toXYZ:Ic,fromXYZ:Lc,luminanceCoefficients:Rc,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:Cc,whitePoint:Pc,transfer:dt,toXYZ:Ic,fromXYZ:Lc,luminanceCoefficients:Rc,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}});var rs,fl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=oa("canvas")),rs.width=e.width,rs.height=e.height;let i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=oa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ii(t[i]/255)*255):t[i]=ii(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ef=0,la=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($a(s[o].image)):r.push($a(s[o]))}else r=$a(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function $a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Af=0,Qt=class n extends bi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Vi,s=Vi,r=Nn,o=Hi,a=Cn,l=ri,c=n.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Si(),this.name="",this.source=new la(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case No:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case No:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Ch;Qt.DEFAULT_ANISOTROPY=1;var vt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,b=(d+1)/2,D=(p+1)/2,R=(u+h)/4,I=(f+v)/4,_=(g+m)/4;return w>b&&w>D?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=R/i,r=I/i):b>D?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=R/s,r=_/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=I/r,s=_/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-v)/E,this.z=(h-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Qt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new la(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends dl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ca=class extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pl=class extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==g){let m=1-a,p=l*h+c*d+u*g+f*v,E=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let D=Math.sqrt(w),R=Math.atan2(D,p*E);m=Math.sin(m*R)/D,a=Math.sin(a*R)/D}let b=a*E;if(l=l*m+h*b,c=c*m+d*b,u=u*m+g*b,f=f*m+v*b,m===1-a){let D=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=D,c*=D,u*=D,f*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ja=new O,Dc=new Ti,Wi=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cr.copy(i.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Rr.subVectors(this.max,Ks),as.subVectors(e.a,Ks),os.subVectors(e.b,Ks),ls.subVectors(e.c,Ks),pi.subVectors(os,as),mi.subVectors(ls,os),Li.subVectors(as,ls);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Li.z,Li.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Li.z,0,-Li.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Li.y,Li.x,0];return!Ka(t,as,os,ls,Rr)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,as,os,ls,Rr))?!1:(Pr.crossVectors(pi,mi),t=[Pr.x,Pr.y,Pr.z],Ka(t,as,os,ls,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Zn=[new O,new O,new O,new O,new O,new O,new O,new O],wn=new O,Cr=new Wi,as=new O,os=new O,ls=new O,pi=new O,mi=new O,Li=new O,Ks=new O,Rr=new O,Pr=new O,Di=new O;function Ka(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Di.fromArray(n,r);let a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),u=i.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Cf=new Wi,Qs=new O,Qa=new O,Ls=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Cf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);let t=Qs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Qa)),this.expandByPoint(Qs.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},$n=new O,ja=new O,Ir=new O,gi=new O,eo=new O,Lr=new O,to=new O,cr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ja.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(ja);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ir),a=gi.dot(this.direction),l=-gi.dot(Ir),c=gi.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){let v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ja).addScaledVector(Ir,h),d}intersectSphere(e,t){$n.subVectors(e.center,this.origin);let i=$n.dot(this.direction),s=$n.dot($n)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,s,r){eo.subVectors(t,e),Lr.subVectors(i,e),to.crossVectors(eo,Lr);let o=this.direction.dot(to),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);let l=a*this.direction.dot(Lr.crossVectors(gi,Lr));if(l<0)return null;let c=a*this.direction.dot(eo.cross(gi));if(c<0||l+c>o)return null;let u=-a*gi.dot(to);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class n{constructor(e,t,i,s,r,o,a,l,c,u,f,h,d,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,d,g,v,m)}set(e,t,i,s,r,o,a,l,c,u,f,h,d,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=o*u,d=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,d=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){let h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rf,e,Pf)}lookAt(e,t,i){let s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),_i.crossVectors(i,un),_i.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),_i.crossVectors(i,un)),_i.normalize(),Dr.crossVectors(un,_i),s[0]=_i.x,s[4]=Dr.x,s[8]=un.x,s[1]=_i.y,s[5]=Dr.y,s[9]=un.y,s[2]=_i.z,s[6]=Dr.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],E=i[3],w=i[7],b=i[11],D=i[15],R=s[0],I=s[4],_=s[8],x=s[12],y=s[1],T=s[5],B=s[9],P=s[13],z=s[2],W=s[6],H=s[10],j=s[14],G=s[3],de=s[7],ye=s[11],we=s[15];return r[0]=o*R+a*y+l*z+c*G,r[4]=o*I+a*T+l*W+c*de,r[8]=o*_+a*B+l*H+c*ye,r[12]=o*x+a*P+l*j+c*we,r[1]=u*R+f*y+h*z+d*G,r[5]=u*I+f*T+h*W+d*de,r[9]=u*_+f*B+h*H+d*ye,r[13]=u*x+f*P+h*j+d*we,r[2]=g*R+v*y+m*z+p*G,r[6]=g*I+v*T+m*W+p*de,r[10]=g*_+v*B+m*H+p*ye,r[14]=g*x+v*P+m*j+p*we,r[3]=E*R+w*y+b*z+D*G,r[7]=E*I+w*T+b*W+D*de,r[11]=E*_+w*B+b*H+D*ye,r[15]=E*x+w*P+b*j+D*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*d-i*l*d)+v*(+t*l*d-t*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+t*c*f-t*a*d-r*o*f+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],E=f*m*c-v*h*c+v*l*d-a*m*d-f*l*p+a*h*p,w=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,b=u*v*c-g*f*c+g*a*d-o*v*d-u*a*p+o*f*p,D=g*f*l-u*v*l-g*a*h+o*v*h+u*a*m-o*f*m,R=t*E+i*w+s*b+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return e[0]=E*I,e[1]=(v*h*r-f*m*r-v*s*d+i*m*d+f*s*p-i*h*p)*I,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*I,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*d-i*l*d)*I,e[4]=w*I,e[5]=(u*m*r-g*h*r+g*s*d-t*m*d-u*s*p+t*h*p)*I,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*I,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*d+t*l*d)*I,e[8]=b*I,e[9]=(g*f*r-u*v*r-g*i*d+t*v*d+u*i*p-t*f*p)*I,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*p+t*a*p)*I,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*d-t*a*d)*I,e[12]=D*I,e[13]=(u*v*s-g*f*s+g*i*h-t*v*h-u*i*m+t*f*m)*I,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*I,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,v=o*u,m=o*f,p=a*f,E=l*c,w=l*u,b=l*f,D=i.x,R=i.y,I=i.z;return s[0]=(1-(v+p))*D,s[1]=(d+b)*D,s[2]=(g-w)*D,s[3]=0,s[4]=(d-b)*R,s[5]=(1-(h+p))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+w)*I,s[9]=(m-E)*I,s[10]=(1-(h+v))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=cs.set(s[0],s[1],s[2]).length(),o=cs.set(s[4],s[5],s[6]).length(),a=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);let c=1/r,u=1/o,f=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,t.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ni){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s),d,g;if(a===ni)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===aa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ni){let l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),h=(t+e)*c,d=(i+s)*u,g,v;if(a===ni)g=(o+r)*f,v=-2*f;else if(a===aa)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},cs=new O,En=new St,Rf=new O(0,0,0),Pf=new O(1,1,1),_i=new O,Dr=new O,un=new O,Uc=new St,Nc=new Ti,zn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var hr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},If=0,Oc=new O,hs=new Ti,Jn=new St,Ur=new O,js=new O,Lf=new O,Df=new Ti,Fc=new O(1,0,0),Bc=new O(0,1,0),zc=new O(0,0,1),kc={type:"added"},Uf={type:"removed"},us={type:"childadded",child:null},no={type:"childremoved",child:null},Xt=class n extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new zn,i=new Ti,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new We}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Bc,e)}rotateZ(e){return this.rotateOnAxis(zc,e)}translateOnAxis(e,t){return Oc.copy(e).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Bc,e)}translateZ(e){return this.translateOnAxis(zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ur.copy(e):Ur.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(js,Ur,this.up):Jn.lookAt(Ur,js,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Jn),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kc),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uf),no.child=e,this.dispatchEvent(no),no.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kc),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,Lf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,Df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Xt.DEFAULT_UP=new O(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new O,Kn=new O,io=new O,Qn=new O,fs=new O,ds=new O,Vc=new O,so=new O,ro=new O,ao=new O,oo=new vt,lo=new vt,co=new vt,Mi=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),An.subVectors(e,t),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){An.subVectors(s,t),Kn.subVectors(i,t),io.subVectors(e,t);let o=An.dot(An),a=An.dot(Kn),l=An.dot(io),c=Kn.dot(Kn),u=Kn.dot(io),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return oo.setScalar(0),lo.setScalar(0),co.setScalar(0),oo.fromBufferAttribute(e,t),lo.fromBufferAttribute(e,i),co.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(oo,r.x),o.addScaledVector(lo,r.y),o.addScaledVector(co,r.z),o}static isFrontFacing(e,t,i,s){return An.subVectors(i,t),Kn.subVectors(e,t),An.cross(Kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),An.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;fs.subVectors(s,i),ds.subVectors(r,i),so.subVectors(e,i);let l=fs.dot(so),c=ds.dot(so);if(l<=0&&c<=0)return t.copy(i);ro.subVectors(e,s);let u=fs.dot(ro),f=ds.dot(ro);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(fs,o);ao.subVectors(e,r);let d=fs.dot(ao),g=ds.dot(ao);if(g>=0&&d<=g)return t.copy(r);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ds,a);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Vc.subVectors(r,s),a=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(Vc,a);let p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(fs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function ho(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Mf(e,1),t=nn(t,0,1),i=nn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ho(o,r,e+1/3),this.g=ho(o,r,e),this.b=ho(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Jt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let i=Hh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return nt.fromWorkingColorSpace($t.copy(this),e),Math.round(nn($t.r*255,0,255))*65536+Math.round(nn($t.g*255,0,255))*256+Math.round(nn($t.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace($t.copy(this),t);let i=$t.r,s=$t.g,r=$t.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Jt){nt.fromWorkingColorSpace($t.copy(this),e);let t=$t.r,i=$t.g,s=$t.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Nr);let i=Ya(vi.h,Nr.h,t),s=Ya(vi.s,Nr.s,t),r=Ya(vi.l,Nr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new De;De.NAMES=Hh;var Nf=0,ai=class extends bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Si(),this.name="",this.blending=tn,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=wo,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tn&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==To&&(i.blendSrc=this.blendSrc),this.blendDst!==wo&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},kn=class extends ai{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Lt=new O,Or=new Ce,Dt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hl,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hl&&(e.usage=this.usage),e}};var ha=class extends Dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ua=class extends Dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var xn=class extends Dt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Of=0,vn=new St,uo=new Xt,ps=new O,fn=new Wi,er=new Wi,kt=new O,rn=class n extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vh(e)?ua:ha)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xn(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(fn.min,er.min),fn.expandByPoint(kt),kt.addVectors(fn.max,er.max),fn.expandByPoint(kt)):(fn.expandByPoint(er.min),fn.expandByPoint(er.max))}fn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),kt.add(ps)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new O,l[_]=new O;let c=new O,u=new O,f=new O,h=new Ce,d=new Ce,g=new Ce,v=new O,m=new O;function p(_,x,y){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,x),f.fromBufferAttribute(i,y),h.fromBufferAttribute(r,_),d.fromBufferAttribute(r,x),g.fromBufferAttribute(r,y),u.sub(c),f.sub(c),d.sub(h),g.sub(h);let T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(T),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(T),a[_].add(v),a[x].add(v),a[y].add(v),l[_].add(m),l[x].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let _=0,x=E.length;_<x;++_){let y=E[_],T=y.start,B=y.count;for(let P=T,z=T+B;P<z;P+=3)p(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let w=new O,b=new O,D=new O,R=new O;function I(_){D.fromBufferAttribute(s,_),R.copy(D);let x=a[_];w.copy(x),w.sub(D.multiplyScalar(D.dot(x))).normalize(),b.crossVectors(R,x);let T=b.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,T)}for(let _=0,x=E.length;_<x;++_){let y=E[_],T=y.start,B=y.count;for(let P=T,z=T+B;P<z;P+=3)I(e.getX(P+0)),I(e.getX(P+1)),I(e.getX(P+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,d=e.count;h<d;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Dt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hc=new St,Ui=new cr,Fr=new Ls,Gc=new O,Br=new O,zr=new O,kr=new O,fo=new O,Vr=new O,Wc=new O,Hr=new O,It=class extends Xt{constructor(e=new rn,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&(fo.fromBufferAttribute(f,e),o?Vr.addScaledVector(fo,u):Vr.addScaledVector(fo.sub(t),u))}t.add(Vr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(Fr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Fr,Gc)===null||Ui.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(Hc.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(Hc),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=E,D=w;b<D;b+=3){let R=a.getX(b),I=a.getX(b+1),_=a.getX(b+2);s=Gr(this,p,e,i,c,u,f,R,I,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let E=a.getX(m),w=a.getX(m+1),b=a.getX(m+2);s=Gr(this,o,e,i,c,u,f,E,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=E,D=w;b<D;b+=3){let R=b,I=b+1,_=b+2;s=Gr(this,p,e,i,c,u,f,R,I,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let E=m,w=m+1,b=m+2;s=Gr(this,o,e,i,c,u,f,E,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ff(n,e,t,i,s,r,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Bn,a),l===null)return null;Hr.copy(a),Hr.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Hr);return c<t.near||c>t.far?null:{distance:c,point:Hr.clone(),object:n}}function Gr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Br),n.getVertexPosition(l,zr),n.getVertexPosition(c,kr);let u=Ff(n,e,t,i,Br,zr,kr,Wc);if(u){let f=new O;Mi.getBarycoord(Wc,Br,zr,kr,f),s&&(u.uv=Mi.getInterpolatedAttribute(s,a,l,c,f,new Ce)),r&&(u.uv1=Mi.getInterpolatedAttribute(r,a,l,c,f,new Ce)),o&&(u.normal=Mi.getInterpolatedAttribute(o,a,l,c,f,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new O,materialIndex:0};Mi.getNormal(Br,zr,kr,h.normal),u.face=h,u.barycoord=f}return u}var ur=class n extends rn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(f,2));function g(v,m,p,E,w,b,D,R,I,_,x){let y=b/I,T=D/_,B=b/2,P=D/2,z=R/2,W=I+1,H=_+1,j=0,G=0,de=new O;for(let ye=0;ye<H;ye++){let we=ye*T-P;for(let qe=0;qe<W;qe++){let pt=qe*y-B;de[v]=pt*E,de[m]=we*w,de[p]=z,c.push(de.x,de.y,de.z),de[v]=0,de[m]=0,de[p]=R>0?1:-1,u.push(de.x,de.y,de.z),f.push(qe/I),f.push(1-ye/_),j+=1}}for(let ye=0;ye<_;ye++)for(let we=0;we<I;we++){let qe=h+we+W*ye,pt=h+we+W*(ye+1),Z=h+(we+1)+W*(ye+1),ae=h+(we+1)+W*ye;l.push(qe,pt,ae),l.push(pt,Z,ae),G+=6}a.addGroup(d,G,x),d+=G,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ds(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function en(n){let e={};for(let t=0;t<n.length;t++){let i=Ds(n[t]);for(let s in i)e[s]=i[s]}return e}function Bf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var wi={clone:Ds,merge:en},zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,At=class extends ai{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zf,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=Bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},fa=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yi=new O,Xc=new Ce,qc=new Ce,Kt=class extends fa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ul*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,Xc,qc),t.subVectors(qc,Xc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ms=-90,gs=1,ml=class extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(ms,gs,e,t);s.layers=this.layers,this.add(s);let r=new Kt(ms,gs,e,t);r.layers=this.layers,this.add(r);let o=new Kt(ms,gs,e,t);o.layers=this.layers,this.add(o);let a=new Kt(ms,gs,e,t);a.layers=this.layers,this.add(a);let l=new Kt(ms,gs,e,t);l.layers=this.layers,this.add(l);let c=new Kt(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},da=class extends Qt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gl=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new da(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ur(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:On});r.uniforms.tEquirect.value=t;let o=new It(s,r),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Nn),new ml(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},po=new O,Vf=new O,Hf=new We,yn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=po.subVectors(i,t).cross(Vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(po),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Hf.getNormalMatrix(e),s=this.coplanarPoint(po).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ni=new Ls,Wr=new O,fr=class{constructor(e=new yn,t=new yn,i=new yn,s=new yn,r=new yn,o=new yn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],E=s[13],w=s[14],b=s[15];if(i[0].setComponents(l-r,h-c,m-d,b-p).normalize(),i[1].setComponents(l+r,h+c,m+d,b+p).normalize(),i[2].setComponents(l+o,h+u,m+g,b+E).normalize(),i[3].setComponents(l-o,h-u,m-g,b-E).normalize(),i[4].setComponents(l-a,h-f,m-v,b-w).normalize(),t===ni)i[5].setComponents(l+a,h+f,m+v,b+w).normalize();else if(t===aa)i[5].setComponents(a,f,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Wr.x=s.normal.x>0?e.max.x:e.min.x,Wr.y=s.normal.y>0?e.max.y:e.min.y,Wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Gf(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Mn=class n extends rn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let E=p*h-o;for(let w=0;w<c;w++){let b=w*f-r;g.push(b,-E,0),v.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let w=E+c*p,b=E+c*(p+1),D=E+1+c*(p+1),R=E+1+c*p;d.push(w,b,R),d.push(b,D,R)}this.setIndex(d),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(v,3)),this.setAttribute("uv",new xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,id=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,md=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Md=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Td=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Id=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Od=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,um=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Wf,alphahash_pars_fragment:Xf,alphamap_fragment:qf,alphamap_pars_fragment:Yf,alphatest_fragment:Zf,alphatest_pars_fragment:$f,aomap_fragment:Jf,aomap_pars_fragment:Kf,batching_pars_vertex:Qf,batching_vertex:jf,begin_vertex:ed,beginnormal_vertex:td,bsdfs:nd,iridescence_fragment:id,bumpmap_pars_fragment:sd,clipping_planes_fragment:rd,clipping_planes_pars_fragment:ad,clipping_planes_pars_vertex:od,clipping_planes_vertex:ld,color_fragment:cd,color_pars_fragment:hd,color_pars_vertex:ud,color_vertex:fd,common:dd,cube_uv_reflection_fragment:pd,defaultnormal_vertex:md,displacementmap_pars_vertex:gd,displacementmap_vertex:_d,emissivemap_fragment:vd,emissivemap_pars_fragment:yd,colorspace_fragment:xd,colorspace_pars_fragment:Md,envmap_fragment:Sd,envmap_common_pars_fragment:bd,envmap_pars_fragment:Td,envmap_pars_vertex:wd,envmap_physical_pars_fragment:Od,envmap_vertex:Ed,fog_vertex:Ad,fog_pars_vertex:Cd,fog_fragment:Rd,fog_pars_fragment:Pd,gradientmap_pars_fragment:Id,lightmap_pars_fragment:Ld,lights_lambert_fragment:Dd,lights_lambert_pars_fragment:Ud,lights_pars_begin:Nd,lights_toon_fragment:Fd,lights_toon_pars_fragment:Bd,lights_phong_fragment:zd,lights_phong_pars_fragment:kd,lights_physical_fragment:Vd,lights_physical_pars_fragment:Hd,lights_fragment_begin:Gd,lights_fragment_maps:Wd,lights_fragment_end:Xd,logdepthbuf_fragment:qd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:Zd,logdepthbuf_vertex:$d,map_fragment:Jd,map_pars_fragment:Kd,map_particle_fragment:Qd,map_particle_pars_fragment:jd,metalnessmap_fragment:ep,metalnessmap_pars_fragment:tp,morphinstance_vertex:np,morphcolor_vertex:ip,morphnormal_vertex:sp,morphtarget_pars_vertex:rp,morphtarget_vertex:ap,normal_fragment_begin:op,normal_fragment_maps:lp,normal_pars_fragment:cp,normal_pars_vertex:hp,normal_vertex:up,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:dp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,opaque_fragment:_p,packing:vp,premultiplied_alpha_fragment:yp,project_vertex:xp,dithering_fragment:Mp,dithering_pars_fragment:Sp,roughnessmap_fragment:bp,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:wp,shadowmap_pars_vertex:Ep,shadowmap_vertex:Ap,shadowmask_pars_fragment:Cp,skinbase_vertex:Rp,skinning_pars_vertex:Pp,skinning_vertex:Ip,skinnormal_vertex:Lp,specularmap_fragment:Dp,specularmap_pars_fragment:Up,tonemapping_fragment:Np,tonemapping_pars_fragment:Op,transmission_fragment:Fp,transmission_pars_fragment:Bp,uv_pars_fragment:zp,uv_pars_vertex:kp,uv_vertex:Vp,worldpos_vertex:Hp,background_vert:Gp,background_frag:Wp,backgroundCube_vert:Xp,backgroundCube_frag:qp,cube_vert:Yp,cube_frag:Zp,depth_vert:$p,depth_frag:Jp,distanceRGBA_vert:Kp,distanceRGBA_frag:Qp,equirect_vert:jp,equirect_frag:em,linedashed_vert:tm,linedashed_frag:nm,meshbasic_vert:im,meshbasic_frag:sm,meshlambert_vert:rm,meshlambert_frag:am,meshmatcap_vert:om,meshmatcap_frag:lm,meshnormal_vert:cm,meshnormal_frag:hm,meshphong_vert:um,meshphong_frag:fm,meshphysical_vert:dm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:gm,points_vert:_m,points_frag:vm,shadow_vert:ym,shadow_frag:xm,sprite_vert:Mm,sprite_frag:Sm},ce={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Dn={basic:{uniforms:en([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:en([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new De(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:en([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:en([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:en([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new De(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:en([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:en([ce.points,ce.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:en([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:en([ce.common,ce.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:en([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:en([ce.sprite,ce.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:en([ce.common,ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:en([ce.lights,ce.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Dn.physical={uniforms:en([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Xr={r:0,b:0,g:0},Oi=new zn,bm=new St;function Tm(n,e,t,i,s,r,o){let a=new De(0),l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?t:e).get(w)),w}function v(E){let w=!1,b=g(E);b===null?p(a,l):b&&b.isColor&&(p(b,1),w=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,w){let b=g(w);b&&(b.isCubeTexture||b.mapping===Ca)?(u===void 0&&(u=new It(new ur(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Ds(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Oi.copy(w.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bm.makeRotationFromEuler(Oi)),u.material.toneMapped=nt.getTransfer(b.colorSpace)!==dt,(f!==b||h!==b.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,d=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new It(new Mn(2,2),new At({name:"BackgroundMaterial",uniforms:Ds(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=nt.getTransfer(b.colorSpace)!==dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,w){E.getRGB(Xr,Gh(n)),i.buffers.color.setClear(Xr.r,Xr.g,Xr.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:v,addToRenderList:m}}function wm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(y,T,B,P,z){let W=!1,H=f(P,B,T);r!==H&&(r=H,c(r.object)),W=d(y,P,B,z),W&&g(y,P,B,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,b(y,T,B,P),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,T,B){let P=B.wireframe===!0,z=i[y.id];z===void 0&&(z={},i[y.id]=z);let W=z[T.id];W===void 0&&(W={},z[T.id]=W);let H=W[P];return H===void 0&&(H=h(l()),W[P]=H),H}function h(y){let T=[],B=[],P=[];for(let z=0;z<t;z++)T[z]=0,B[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:B,attributeDivisors:P,object:y,attributes:{},index:null}}function d(y,T,B,P){let z=r.attributes,W=T.attributes,H=0,j=B.getAttributes();for(let G in j)if(j[G].location>=0){let ye=z[G],we=W[G];if(we===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(we=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(we=y.instanceColor)),ye===void 0||ye.attribute!==we||we&&ye.data!==we.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(y,T,B,P){let z={},W=T.attributes,H=0,j=B.getAttributes();for(let G in j)if(j[G].location>=0){let ye=W[G];ye===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor));let we={};we.attribute=ye,ye&&ye.data&&(we.data=ye.data),z[G]=we,H++}r.attributes=z,r.attributesNum=H,r.index=P}function v(){let y=r.newAttributes;for(let T=0,B=y.length;T<B;T++)y[T]=0}function m(y){p(y,0)}function p(y,T){let B=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;B[y]=1,P[y]===0&&(n.enableVertexAttribArray(y),P[y]=1),z[y]!==T&&(n.vertexAttribDivisor(y,T),z[y]=T)}function E(){let y=r.newAttributes,T=r.enabledAttributes;for(let B=0,P=T.length;B<P;B++)T[B]!==y[B]&&(n.disableVertexAttribArray(B),T[B]=0)}function w(y,T,B,P,z,W,H){H===!0?n.vertexAttribIPointer(y,T,B,z,W):n.vertexAttribPointer(y,T,B,P,z,W)}function b(y,T,B,P){v();let z=P.attributes,W=B.getAttributes(),H=T.defaultAttributeValues;for(let j in W){let G=W[j];if(G.location>=0){let de=z[j];if(de===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),de!==void 0){let ye=de.normalized,we=de.itemSize,qe=e.get(de);if(qe===void 0)continue;let pt=qe.buffer,Z=qe.type,ae=qe.bytesPerElement,Me=Z===n.INT||Z===n.UNSIGNED_INT||de.gpuType===Ql;if(de.isInterleavedBufferAttribute){let le=de.data,Ue=le.stride,Oe=de.offset;if(le.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)p(G.location+ke,le.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ke=0;ke<G.locationSize;ke++)m(G.location+ke);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let ke=0;ke<G.locationSize;ke++)w(G.location+ke,we/G.locationSize,Z,ye,Ue*ae,(Oe+we/G.locationSize*ke)*ae,Me)}else{if(de.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)p(G.location+le,de.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let le=0;le<G.locationSize;le++)m(G.location+le);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let le=0;le<G.locationSize;le++)w(G.location+le,we/G.locationSize,Z,ye,we*ae,we/G.locationSize*le*ae,Me)}}else if(H!==void 0){let ye=H[j];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(G.location,ye);break;case 3:n.vertexAttrib3fv(G.location,ye);break;case 4:n.vertexAttrib4fv(G.location,ye);break;default:n.vertexAttrib1fv(G.location,ye)}}}}E()}function D(){_();for(let y in i){let T=i[y];for(let B in T){let P=T[B];for(let z in P)u(P[z].object),delete P[z];delete T[B]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;let T=i[y.id];for(let B in T){let P=T[B];for(let z in P)u(P[z].object),delete P[z];delete T[B]}delete i[y.id]}function I(y){for(let T in i){let B=i[T];if(B[y.id]===void 0)continue;let P=B[y.id];for(let z in P)u(P[z].object),delete P[z];delete B[y.id]}}function _(){x(),o=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:_,resetDefaultState:x,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function Em(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*h[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Am(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Cn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let _=I===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ri&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ti&&!_)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:D,maxSamples:R}}function Cm(n){let e=this,t=null,i=0,s=!1,r=!1,o=new yn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let E=r?0:i,w=E*4,b=p.clippingState||null;l.value=b,b=u(g,h,w,d);for(let D=0;D!==w;++D)b[D]=t[D];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=d+v*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,b=d;w!==v;++w,b+=4)o.copy(f[w]).applyMatrix4(E,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Rm(n){let e=new WeakMap;function t(o,a){return a===Do?o.mapping=Cs:a===Uo&&(o.mapping=Rs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Do||a===Uo)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new gl(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Us=class extends fa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ss=4,Yc=[.125,.215,.35,.446,.526,.582],ki=20,mo=new Us,Zc=new De,go=null,_o=0,vo=0,yo=!1,Bi=(1+Math.sqrt(5))/2,_s=1/Bi,$c=[new O(-Bi,_s,0),new O(Bi,_s,0),new O(-_s,0,Bi),new O(_s,0,Bi),new O(0,Bi,-_s),new O(0,Bi,_s),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],pa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(go,_o,vo),this._renderer.xr.enabled=yo,e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:dn,format:Cn,colorSpace:Fs,depthBuffer:!1},s=Jc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pm(r)),this._blurMaterial=Im(r,e,t)}return s}_compileMaterial(e){let t=new It(this._lodPlanes[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,i,s){let a=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Zc),u.toneMapping=Fn,u.autoClear=!1;let d=new kn({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new It(new ur,d),v=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(Zc),v=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let w=this._cubeSize;qr(s,E*w,p>2?w:0,w,w),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Cs||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;qr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,mo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$c[(s-r-1)%$c.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new It(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ki-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);let p=[],E=0;for(let I=0;I<ki;++I){let _=I/v,x=Math.exp(-_*_/2);p.push(x),I===0?E+=x:I<m&&(E+=2*x)}for(let I=0;I<p.length;I++)p[I]=p[I]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-i;let b=this._sizeLods[s],D=3*b*(s>w-Ss?s-w+Ss:0),R=4*(this._cubeSize-b);qr(t,D,R,3*b,2*b),l.setRenderTarget(t),l.render(f,mo)}};function Pm(n){let e=[],t=[],i=[],s=n,r=n-Ss+1+Yc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ss?l=Yc[o-n+Ss-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,m=2,p=1,E=new Float32Array(v*g*d),w=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let R=0;R<d;R++){let I=R%3*2/3-1,_=R>2?0:-1,x=[I,_,0,I+2/3,_,0,I+2/3,_+1,0,I,_,0,I+2/3,_+1,0,I,_+1,0];E.set(x,v*g*R),w.set(h,m*g*R);let y=[R,R,R,R,R,R];b.set(y,p*g*R)}let D=new rn;D.setAttribute("position",new Dt(E,v)),D.setAttribute("uv",new Dt(w,m)),D.setAttribute("faceIndex",new Dt(b,p)),e.push(D),s>Ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jc(n,e,t){let i=new Wt(n,e,t);return i.texture.mapping=Ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Im(n,e,t){let i=new Float32Array(ki),s=new O(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Kc(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Qc(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lm(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Do||l===Uo,u=l===Cs||l===Rs;if(c||u){let f=e.get(a),h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new pa(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new pa(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Dm(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&rr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Um(n,e,t,i){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){let h=[],d=f.index,g=f.attributes.position,v=0;if(d!==null){let E=d.array;v=d.version;for(let w=0,b=E.length;w<b;w+=3){let D=E[w+0],R=E[w+1],I=E[w+2];h.push(D,R,R,I,I,D)}}else if(g!==void 0){let E=g.array;v=g.version;for(let w=0,b=E.length/3-1;w<b;w+=3){let D=w+0,R=w+1,I=w+2;h.push(D,R,R,I,I,D)}}else return;let m=new(Vh(h)?ua:ha)(h,1);m.version=v;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Nm(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,v,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*v[E];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Om(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Fm(n,e,t){let i=new WeakMap,s=new vt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==f){let x=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",x)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],w=0;d===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let b=a.attributes.position.count*w,D=1;b>e.maxTextureSize&&(D=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let R=new Float32Array(b*D*4*f),I=new ca(R,b,D,f);I.type=ti,I.needsUpdate=!0;let _=w*4;for(let y=0;y<f;y++){let T=m[y],B=p[y],P=E[y],z=b*D*4*y;for(let W=0;W<T.count;W++){let H=W*_;d===!0&&(s.fromBufferAttribute(T,W),R[z+H+0]=s.x,R[z+H+1]=s.y,R[z+H+2]=s.z,R[z+H+3]=0),g===!0&&(s.fromBufferAttribute(B,W),R[z+H+4]=s.x,R[z+H+5]=s.y,R[z+H+6]=s.z,R[z+H+7]=0),v===!0&&(s.fromBufferAttribute(P,W),R[z+H+8]=s.x,R[z+H+9]=s.y,R[z+H+10]=s.z,R[z+H+11]=P.itemSize===4?s.w:1)}}h={count:f,texture:I,size:new Ce(b,D)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Bm(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var ma=class extends Qt{constructor(e,t,i,s,r,o,a,l,c,u=Ts){if(u!==Ts&&u!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ts&&(i=Gi),i===void 0&&u===Is&&(i=Ps),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xh=new Qt,jc=new ma(1,1),qh=new ca,Yh=new pl,Zh=new da,eh=[],th=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function Bs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=eh[s];if(r===void 0&&(r=new Float32Array(s),eh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pa(n,e){let t=th[e];t===void 0&&(t=new Int32Array(e),th[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function km(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function Vm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function Hm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function Gm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;sh.set(i),n.uniformMatrix2fv(this.addr,!1,sh),Ot(t,i)}}function Wm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;ih.set(i),n.uniformMatrix3fv(this.addr,!1,ih),Ot(t,i)}}function Xm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;nh.set(i),n.uniformMatrix4fv(this.addr,!1,nh),Ot(t,i)}}function qm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ym(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function Zm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function $m(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function Jm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Km(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function Qm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function jm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function e0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(jc.compareFunction=kh,r=jc):r=Xh,t.setTexture2D(e||r,s)}function t0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Yh,s)}function n0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Zh,s)}function i0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||qh,s)}function s0(n){switch(n){case 5126:return zm;case 35664:return km;case 35665:return Vm;case 35666:return Hm;case 35674:return Gm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return qm;case 35667:case 35671:return Ym;case 35668:case 35672:return Zm;case 35669:case 35673:return $m;case 5125:return Jm;case 36294:return Km;case 36295:return Qm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}function r0(n,e){n.uniform1fv(this.addr,e)}function a0(n,e){let t=Bs(e,this.size,2);n.uniform2fv(this.addr,t)}function o0(n,e){let t=Bs(e,this.size,3);n.uniform3fv(this.addr,t)}function l0(n,e){let t=Bs(e,this.size,4);n.uniform4fv(this.addr,t)}function c0(n,e){let t=Bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function h0(n,e){let t=Bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function u0(n,e){let t=Bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function f0(n,e){n.uniform1iv(this.addr,e)}function d0(n,e){n.uniform2iv(this.addr,e)}function p0(n,e){n.uniform3iv(this.addr,e)}function m0(n,e){n.uniform4iv(this.addr,e)}function g0(n,e){n.uniform1uiv(this.addr,e)}function _0(n,e){n.uniform2uiv(this.addr,e)}function v0(n,e){n.uniform3uiv(this.addr,e)}function y0(n,e){n.uniform4uiv(this.addr,e)}function x0(n,e,t){let i=this.cache,s=e.length,r=Pa(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Xh,r[o])}function M0(n,e,t){let i=this.cache,s=e.length,r=Pa(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Yh,r[o])}function S0(n,e,t){let i=this.cache,s=e.length,r=Pa(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Zh,r[o])}function b0(n,e,t){let i=this.cache,s=e.length,r=Pa(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||qh,r[o])}function T0(n){switch(n){case 5126:return r0;case 35664:return a0;case 35665:return o0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return f0;case 35667:case 35671:return d0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return _0;case 36295:return v0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return b0}}var _l=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=s0(t.type)}},vl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T0(t.type)}},yl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},xo=/(\w+)(\])?(\[|\.)?/g;function rh(n,e){n.seq.push(e),n.map[e.id]=e}function w0(n,e,t){let i=n.name,s=i.length;for(xo.lastIndex=0;;){let r=xo.exec(i),o=xo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rh(t,c===void 0?new _l(a,n,e):new vl(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new yl(a),rh(t,f)),t=f}}}var Es=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);w0(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function ah(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var E0=37297,A0=0;function C0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var oh=new We;function R0(n){nt._getMatrix(oh,nt.workingColorSpace,n);let e=`mat3( ${oh.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Ra:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function lh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+C0(n.getShaderSource(e),o)}else return s}function P0(n,e){let t=R0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function I0(n,e){let t;switch(e){case ql:t="Linear";break;case Yl:t="Reinhard";break;case Zl:t="Cineon";break;case $l:t="ACESFilmic";break;case Jl:t="AgX";break;case Kl:t="Neutral";break;case cf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Yr=new O;function L0(){nt.getLuminanceCoefficients(Yr);let n=Yr.x.toFixed(4),e=Yr.y.toFixed(4),t=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function U0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function N0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ar(n){return n!==""}function ch(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(n){return n.replace(O0,B0)}var F0=new Map;function B0(n,e){let t=Xe[e];if(t===void 0){let i=F0.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xl(t)}var z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(n){return n.replace(z0,k0)}function k0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ah?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function H0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cs:case Rs:e="ENVMAP_TYPE_CUBE";break;case Ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function W0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xl:e="ENVMAP_BLENDING_MULTIPLY";break;case of:e="ENVMAP_BLENDING_MIX";break;case lf:e="ENVMAP_BLENDING_ADD";break}return e}function X0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function q0(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=V0(t),c=H0(t),u=G0(t),f=W0(t),h=X0(t),d=D0(t),g=U0(r),v=s.createProgram(),m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),p.length>0&&(p+=`
`)):(m=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),p=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Fn?I0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,P0("linearToOutputTexel",t.outputColorSpace),L0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),o=xl(o),o=ch(o,t),o=hh(o,t),a=xl(a),a=ch(a,t),a=hh(a,t),o=uh(o),a=uh(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=E+m+o,b=E+p+a,D=ah(s,s.VERTEX_SHADER,w),R=ah(s,s.FRAGMENT_SHADER,b);s.attachShader(v,D),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(T){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(v).trim(),P=s.getShaderInfoLog(D).trim(),z=s.getShaderInfoLog(R).trim(),W=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,D,R);else{let j=lh(s,D,"vertex"),G=lh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+B+`
`+j+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(P===""||z==="")&&(H=!1);H&&(T.diagnostics={runnable:W,programLog:B,vertexShader:{log:P,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(D),s.deleteShader(R),_=new Es(s,v),x=N0(s,v)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let x;this.getAttributes=function(){return x===void 0&&I(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,E0)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=R,this}var Y0=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Sl(e),t.set(e,i)),i}},Sl=class{constructor(e){this.id=Y0++,this.code=e,this.usedTimes=0}};function Z0(n,e,t,i,s,r,o){let a=new hr,l=new Ml,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,y,T,B,P){let z=B.fog,W=P.geometry,H=x.isMeshStandardMaterial?B.environment:null,j=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),G=j&&j.mapping===Ca?j.image.height:null,de=g[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let ye=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,we=ye!==void 0?ye.length:0,qe=0;W.morphAttributes.position!==void 0&&(qe=1),W.morphAttributes.normal!==void 0&&(qe=2),W.morphAttributes.color!==void 0&&(qe=3);let pt,Z,ae,Me;if(de){let lt=Dn[de];pt=lt.vertexShader,Z=lt.fragmentShader}else pt=x.vertexShader,Z=x.fragmentShader,l.update(x),ae=l.getVertexShaderID(x),Me=l.getFragmentShaderID(x);let le=n.getRenderTarget(),Ue=n.state.buffers.depth.getReversed(),Oe=P.isInstancedMesh===!0,ke=P.isBatchedMesh===!0,ct=!!x.map,Qe=!!x.matcap,Tt=!!j,F=!!x.aoMap,Ft=!!x.lightMap,Ve=!!x.bumpMap,Je=!!x.normalMap,Ie=!!x.displacementMap,gt=!!x.emissiveMap,Re=!!x.metalnessMap,A=!!x.roughnessMap,M=x.anisotropy>0,k=x.clearcoat>0,J=x.dispersion>0,te=x.iridescence>0,$=x.sheen>0,Te=x.transmission>0,he=M&&!!x.anisotropyMap,xe=k&&!!x.clearcoatMap,je=k&&!!x.clearcoatNormalMap,ie=k&&!!x.clearcoatRoughnessMap,Se=te&&!!x.iridescenceMap,Le=te&&!!x.iridescenceThicknessMap,Fe=$&&!!x.sheenColorMap,me=$&&!!x.sheenRoughnessMap,$e=!!x.specularMap,Ne=!!x.specularColorMap,ot=!!x.specularIntensityMap,N=Te&&!!x.transmissionMap,ue=Te&&!!x.thicknessMap,q=!!x.gradientMap,K=!!x.alphaMap,se=x.alphaTest>0,pe=!!x.alphaHash,He=!!x.extensions,wt=Fn;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(wt=n.toneMapping);let Bt={shaderID:de,shaderType:x.type,shaderName:x.name,vertexShader:pt,fragmentShader:Z,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:ke,batchingColor:ke&&P._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&P.instanceColor!==null,instancingMorph:Oe&&P.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Fs,alphaToCoverage:!!x.alphaToCoverage,map:ct,matcap:Qe,envMap:Tt,envMapMode:Tt&&j.mapping,envMapCubeUVHeight:G,aoMap:F,lightMap:Ft,bumpMap:Ve,normalMap:Je,displacementMap:h&&Ie,emissiveMap:gt,normalMapObjectSpace:Je&&x.normalMapType===df,normalMapTangentSpace:Je&&x.normalMapType===zh,metalnessMap:Re,roughnessMap:A,anisotropy:M,anisotropyMap:he,clearcoat:k,clearcoatMap:xe,clearcoatNormalMap:je,clearcoatRoughnessMap:ie,dispersion:J,iridescence:te,iridescenceMap:Se,iridescenceThicknessMap:Le,sheen:$,sheenColorMap:Fe,sheenRoughnessMap:me,specularMap:$e,specularColorMap:Ne,specularIntensityMap:ot,transmission:Te,transmissionMap:N,thicknessMap:ue,gradientMap:q,opaque:x.transparent===!1&&x.blending===tn&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:se,alphaHash:pe,combine:x.combine,mapUv:ct&&v(x.map.channel),aoMapUv:F&&v(x.aoMap.channel),lightMapUv:Ft&&v(x.lightMap.channel),bumpMapUv:Ve&&v(x.bumpMap.channel),normalMapUv:Je&&v(x.normalMap.channel),displacementMapUv:Ie&&v(x.displacementMap.channel),emissiveMapUv:gt&&v(x.emissiveMap.channel),metalnessMapUv:Re&&v(x.metalnessMap.channel),roughnessMapUv:A&&v(x.roughnessMap.channel),anisotropyMapUv:he&&v(x.anisotropyMap.channel),clearcoatMapUv:xe&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(x.sheenRoughnessMap.channel),specularMapUv:$e&&v(x.specularMap.channel),specularColorMapUv:Ne&&v(x.specularColorMap.channel),specularIntensityMapUv:ot&&v(x.specularIntensityMap.channel),transmissionMapUv:N&&v(x.transmissionMap.channel),thicknessMapUv:ue&&v(x.thicknessMap.channel),alphaMapUv:K&&v(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Je||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!W.attributes.uv&&(ct||K),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ue,skinning:P.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:qe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:wt,decodeVideoTexture:ct&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:gt&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ei,flipSided:x.side===sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:He&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&x.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function p(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let T in x.defines)y.push(T),y.push(x.defines[T]);return x.isRawShaderMaterial===!1&&(E(y,x),w(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function E(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function w(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function b(x){let y=g[x.type],T;if(y){let B=Dn[y];T=wi.clone(B.uniforms)}else T=x.uniforms;return T}function D(x,y){let T;for(let B=0,P=u.length;B<P;B++){let z=u[B];if(z.cacheKey===y){T=z,++T.usedTimes;break}}return T===void 0&&(T=new q0(n,y,x,r),u.push(T)),T}function R(x){if(--x.usedTimes===0){let y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function I(x){l.remove(x)}function _(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:D,releaseProgram:R,releaseShaderCache:I,programs:u,dispose:_}}function $0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function J0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function dh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ph(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,d,g,v,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,h,d,g,v,m){let p=o(f,h,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,h,d,g,v,m){let p=o(f,h,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||J0),i.length>1&&i.sort(h||dh),s.length>1&&s.sort(h||dh)}function u(){for(let f=e,h=n.length;f<h;f++){let d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function K0(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new ph,n.set(i,[o])):s>=r.length?(o=new ph,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Q0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new De};break;case"SpotLight":t={position:new O,direction:new O,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function j0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var eg=0;function tg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ng(n){let e=new Q0,t=j0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,r=new St,o=new St;function a(c){let u=0,f=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,E=0,w=0,b=0,D=0,R=0,I=0;c.sort(tg);for(let x=0,y=c.length;x<y;x++){let T=c[x],B=T.color,P=T.intensity,z=T.distance,W=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=B.r*P,f+=B.g*P,h+=B.b*P;else if(T.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(T.sh.coefficients[H],P);I++}else if(T.isDirectionalLight){let H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let j=T.shadow,G=t.get(T);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=T.shadow.matrix,E++}i.directional[d]=H,d++}else if(T.isSpotLight){let H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(B).multiplyScalar(P),H.distance=z,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,i.spot[v]=H;let j=T.shadow;if(T.map&&(i.spotLightMap[D]=T.map,D++,j.updateMatrices(T),T.castShadow&&R++),i.spotLightMatrix[v]=j.matrix,T.castShadow){let G=t.get(T);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=W,b++}v++}else if(T.isRectAreaLight){let H=e.get(T);H.color.copy(B).multiplyScalar(P),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=H,m++}else if(T.isPointLight){let H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){let j=T.shadow,G=t.get(T);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=T.shadow.matrix,w++}i.point[g]=H,g++}else if(T.isHemisphereLight){let H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(P),H.groundColor.copy(T.groundColor).multiplyScalar(P),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let _=i.hash;(_.directionalLength!==d||_.pointLength!==g||_.spotLength!==v||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==E||_.numPointShadows!==w||_.numSpotShadows!==b||_.numSpotMaps!==D||_.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,_.directionalLength=d,_.pointLength=g,_.spotLength=v,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=E,_.numPointShadows=w,_.numSpotShadows=b,_.numSpotMaps=D,_.numLightProbes=I,i.version=eg++)}function l(c,u){let f=0,h=0,d=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let w=c[p];if(w.isDirectionalLight){let b=i.directional[f];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(w.isSpotLight){let b=i.spot[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(w.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let b=i.point[h];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){let b=i.hemi[v];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function mh(n){let e=new ng(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ig(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new mh(n),e.set(s,[a])):r>=o.length?(a=new mh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var bl=class extends ai{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tl=class extends ai{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ag(n,e,t){let i=new fr,s=new Ce,r=new Ce,o=new vt,a=new bl({depthPacking:ff}),l=new Tl,c={},u=t.maxTextureSize,f={[Bn]:sn,[sn]:Bn,[ei]:ei},h=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:sg,fragmentShader:rg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new rn;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new It(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let p=this.type;this.render=function(R,I,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let x=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),B=n.state;B.setBlending(On),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let P=p!==jn&&this.type===jn,z=p===jn&&this.type!==jn;for(let W=0,H=R.length;W<H;W++){let j=R[W],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let de=G.getFrameExtents();if(s.multiply(de),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/de.x),s.x=r.x*de.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/de.y),s.y=r.y*de.y,G.mapSize.y=r.y)),G.map===null||P===!0||z===!0){let we=this.type!==jn?{minFilter:Rn,magFilter:Rn}:{};G.map!==null&&G.map.dispose(),G.map=new Wt(s.x,s.y,we),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let ye=G.getViewportCount();for(let we=0;we<ye;we++){let qe=G.getViewport(we);o.set(r.x*qe.x,r.y*qe.y,r.x*qe.z,r.y*qe.w),B.viewport(o),G.updateMatrices(j,we),i=G.getFrustum(),b(I,_,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===jn&&E(G,_),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,y,T)};function E(R,I){let _=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Wt(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(I,null,_,h,v,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(I,null,_,d,v,null)}function w(R,I,_,x){let y=null,T=_.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)y=T;else if(y=_.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let B=y.uuid,P=I.uuid,z=c[B];z===void 0&&(z={},c[B]=z);let W=z[P];W===void 0&&(W=y.clone(),z[P]=W,I.addEventListener("dispose",D)),y=W}if(y.visible=I.visible,y.wireframe=I.wireframe,x===jn?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:f[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,_.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let B=n.properties.get(y);B.light=_}return y}function b(R,I,_,x,y){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===jn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,R.matrixWorld);let P=e.update(R),z=R.material;if(Array.isArray(z)){let W=P.groups;for(let H=0,j=W.length;H<j;H++){let G=W[H],de=z[G.materialIndex];if(de&&de.visible){let ye=w(R,de,x,y);R.onBeforeShadow(n,R,I,_,P,ye,G),n.renderBufferDirect(_,null,P,ye,R,G),R.onAfterShadow(n,R,I,_,P,ye,G)}}}else if(z.visible){let W=w(R,z,x,y);R.onBeforeShadow(n,R,I,_,P,W,null),n.renderBufferDirect(_,null,P,W,R,null),R.onAfterShadow(n,R,I,_,P,W,null)}}let B=R.children;for(let P=0,z=B.length;P<z;P++)b(B[P],I,_,x,y)}function D(R){R.target.removeEventListener("dispose",D);for(let _ in c){let x=c[_],y=R.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}var og={[Eo]:Ao,[Co]:Io,[Ro]:Lo,[As]:Po,[Ao]:Eo,[Io]:Co,[Lo]:Ro,[Po]:As};function lg(n,e){function t(){let N=!1,ue=new vt,q=null,K=new vt(0,0,0,0);return{setMask:function(se){q!==se&&!N&&(n.colorMask(se,se,se,se),q=se)},setLocked:function(se){N=se},setClear:function(se,pe,He,wt,Bt){Bt===!0&&(se*=wt,pe*=wt,He*=wt),ue.set(se,pe,He,wt),K.equals(ue)===!1&&(n.clearColor(se,pe,He,wt),K.copy(ue))},reset:function(){N=!1,q=null,K.set(-1,0,0,0)}}}function i(){let N=!1,ue=!1,q=null,K=null,se=null;return{setReversed:function(pe){if(ue!==pe){let He=e.get("EXT_clip_control");ue?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);let wt=se;se=null,this.setClear(wt)}ue=pe},getReversed:function(){return ue},setTest:function(pe){pe?le(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(pe){q!==pe&&!N&&(n.depthMask(pe),q=pe)},setFunc:function(pe){if(ue&&(pe=og[pe]),K!==pe){switch(pe){case Eo:n.depthFunc(n.NEVER);break;case Ao:n.depthFunc(n.ALWAYS);break;case Co:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case Ro:n.depthFunc(n.EQUAL);break;case Po:n.depthFunc(n.GEQUAL);break;case Io:n.depthFunc(n.GREATER);break;case Lo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=pe}},setLocked:function(pe){N=pe},setClear:function(pe){se!==pe&&(ue&&(pe=1-pe),n.clearDepth(pe),se=pe)},reset:function(){N=!1,q=null,K=null,se=null,ue=!1}}}function s(){let N=!1,ue=null,q=null,K=null,se=null,pe=null,He=null,wt=null,Bt=null;return{setTest:function(lt){N||(lt?le(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(lt){ue!==lt&&!N&&(n.stencilMask(lt),ue=lt)},setFunc:function(lt,Y,ee){(q!==lt||K!==Y||se!==ee)&&(n.stencilFunc(lt,Y,ee),q=lt,K=Y,se=ee)},setOp:function(lt,Y,ee){(pe!==lt||He!==Y||wt!==ee)&&(n.stencilOp(lt,Y,ee),pe=lt,He=Y,wt=ee)},setLocked:function(lt){N=lt},setClear:function(lt){Bt!==lt&&(n.clearStencil(lt),Bt=lt)},reset:function(){N=!1,ue=null,q=null,K=null,se=null,pe=null,He=null,wt=null,Bt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},f={},h=new WeakMap,d=[],g=null,v=!1,m=null,p=null,E=null,w=null,b=null,D=null,R=null,I=new De(0,0,0),_=0,x=!1,y=null,T=null,B=null,P=null,z=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=j>=2);let de=null,ye={},we=n.getParameter(n.SCISSOR_BOX),qe=n.getParameter(n.VIEWPORT),pt=new vt().fromArray(we),Z=new vt().fromArray(qe);function ae(N,ue,q,K){let se=new Uint8Array(4),pe=n.createTexture();n.bindTexture(N,pe),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<q;He++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ue+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return pe}let Me={};Me[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(n.DEPTH_TEST),o.setFunc(As),Ve(!1),Je(yc),le(n.CULL_FACE),F(On);function le(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Ue(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Oe(N,ue){return f[N]!==ue?(n.bindFramebuffer(N,ue),f[N]=ue,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ue),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function ke(N,ue){let q=d,K=!1;if(N){q=h.get(ue),q===void 0&&(q=[],h.set(ue,q));let se=N.textures;if(q.length!==se.length||q[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,He=se.length;pe<He;pe++)q[pe]=n.COLOR_ATTACHMENT0+pe;q.length=se.length,K=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,K=!0);K&&n.drawBuffers(q)}function ct(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let Qe={[zi]:n.FUNC_ADD,[Gu]:n.FUNC_SUBTRACT,[Wu]:n.FUNC_REVERSE_SUBTRACT};Qe[Xu]=n.MIN,Qe[qu]=n.MAX;let Tt={[Yu]:n.ZERO,[Zu]:n.ONE,[$u]:n.SRC_COLOR,[To]:n.SRC_ALPHA,[tf]:n.SRC_ALPHA_SATURATE,[ju]:n.DST_COLOR,[Ku]:n.DST_ALPHA,[Ju]:n.ONE_MINUS_SRC_COLOR,[wo]:n.ONE_MINUS_SRC_ALPHA,[ef]:n.ONE_MINUS_DST_COLOR,[Qu]:n.ONE_MINUS_DST_ALPHA,[nf]:n.CONSTANT_COLOR,[sf]:n.ONE_MINUS_CONSTANT_COLOR,[rf]:n.CONSTANT_ALPHA,[af]:n.ONE_MINUS_CONSTANT_ALPHA};function F(N,ue,q,K,se,pe,He,wt,Bt,lt){if(N===On){v===!0&&(Ue(n.BLEND),v=!1);return}if(v===!1&&(le(n.BLEND),v=!0),N!==Hu){if(N!==m||lt!==x){if((p!==zi||b!==zi)&&(n.blendEquation(n.FUNC_ADD),p=zi,b=zi),lt)switch(N){case tn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case si:n.blendFunc(n.ONE,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case tn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case si:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,w=null,D=null,R=null,I.set(0,0,0),_=0,m=N,x=lt}return}se=se||ue,pe=pe||q,He=He||K,(ue!==p||se!==b)&&(n.blendEquationSeparate(Qe[ue],Qe[se]),p=ue,b=se),(q!==E||K!==w||pe!==D||He!==R)&&(n.blendFuncSeparate(Tt[q],Tt[K],Tt[pe],Tt[He]),E=q,w=K,D=pe,R=He),(wt.equals(I)===!1||Bt!==_)&&(n.blendColor(wt.r,wt.g,wt.b,Bt),I.copy(wt),_=Bt),m=N,x=!1}function Ft(N,ue){N.side===ei?Ue(n.CULL_FACE):le(n.CULL_FACE);let q=N.side===sn;ue&&(q=!q),Ve(q),N.blending===tn&&N.transparent===!1?F(On):F(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let K=N.stencilWrite;a.setTest(K),K&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),gt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(N){y!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),y=N)}function Je(N){N!==zu?(le(n.CULL_FACE),N!==T&&(N===yc?n.cullFace(n.BACK):N===ku?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),T=N}function Ie(N){N!==B&&(H&&n.lineWidth(N),B=N)}function gt(N,ue,q){N?(le(n.POLYGON_OFFSET_FILL),(P!==ue||z!==q)&&(n.polygonOffset(ue,q),P=ue,z=q)):Ue(n.POLYGON_OFFSET_FILL)}function Re(N){N?le(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function A(N){N===void 0&&(N=n.TEXTURE0+W-1),de!==N&&(n.activeTexture(N),de=N)}function M(N,ue,q){q===void 0&&(de===null?q=n.TEXTURE0+W-1:q=de);let K=ye[q];K===void 0&&(K={type:void 0,texture:void 0},ye[q]=K),(K.type!==N||K.texture!==ue)&&(de!==q&&(n.activeTexture(q),de=q),n.bindTexture(N,ue||Me[N]),K.type=N,K.texture=ue)}function k(){let N=ye[de];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(N){pt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),pt.copy(N))}function me(N){Z.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function $e(N,ue){let q=c.get(ue);q===void 0&&(q=new WeakMap,c.set(ue,q));let K=q.get(N);K===void 0&&(K=n.getUniformBlockIndex(ue,N.name),q.set(N,K))}function Ne(N,ue){let K=c.get(ue).get(N);l.get(ue)!==K&&(n.uniformBlockBinding(ue,K,N.__bindingPointIndex),l.set(ue,K))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},de=null,ye={},f={},h=new WeakMap,d=[],g=null,v=!1,m=null,p=null,E=null,w=null,b=null,D=null,R=null,I=new De(0,0,0),_=0,x=!1,y=null,T=null,B=null,P=null,z=null,pt.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:Ue,bindFramebuffer:Oe,drawBuffers:ke,useProgram:ct,setBlending:F,setMaterial:Ft,setFlipSided:Ve,setCullFace:Je,setLineWidth:Ie,setPolygonOffset:gt,setScissorTest:Re,activeTexture:A,bindTexture:M,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:Se,texImage3D:Le,updateUBOMapping:$e,uniformBlockBinding:Ne,texStorage2D:je,texStorage3D:ie,texSubImage2D:$,texSubImage3D:Te,compressedTexSubImage2D:he,compressedTexSubImage3D:xe,scissor:Fe,viewport:me,reset:ot}}function gh(n,e,t,i){let s=cg(i);switch(t){case Lh:return n*e;case Uh:return n*e;case Nh:return n*e*2;case Oh:return n*e/s.components*s.byteLength;case tc:return n*e/s.components*s.byteLength;case Fh:return n*e*2/s.components*s.byteLength;case nc:return n*e*2/s.components*s.byteLength;case Dh:return n*e*3/s.components*s.byteLength;case Cn:return n*e*4/s.components*s.byteLength;case ic:return n*e*4/s.components*s.byteLength;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bo:case ko:return Math.max(n,16)*Math.max(e,8)/4;case Fo:case zo:return Math.max(n,8)*Math.max(e,8)/2;case Vo:case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case qo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $o:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case sa:case sl:case rl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Bh:case al:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ol:case ll:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cg(n){switch(n){case ri:case Rh:return{byteLength:1,components:1};case lr:case Ph:case dn:return{byteLength:2,components:1};case jl:case ec:return{byteLength:2,components:4};case Gi:case Ql:case ti:return{byteLength:4,components:1};case Ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function hg(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,u=new WeakMap,f,h=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return d?new OffscreenCanvas(A,M):oa("canvas")}function v(A,M,k){let J=1,te=Re(A);if((te.width>k||te.height>k)&&(J=k/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let $=Math.floor(J*te.width),Te=Math.floor(J*te.height);f===void 0&&(f=g($,Te));let he=M?g($,Te):f;return he.width=$,he.height=Te,he.getContext("2d").drawImage(A,0,0,$,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+Te+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(A,M,k,J,te=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=M;if(M===n.RED&&(k===n.FLOAT&&($=n.R32F),k===n.HALF_FLOAT&&($=n.R16F),k===n.UNSIGNED_BYTE&&($=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.R8UI),k===n.UNSIGNED_SHORT&&($=n.R16UI),k===n.UNSIGNED_INT&&($=n.R32UI),k===n.BYTE&&($=n.R8I),k===n.SHORT&&($=n.R16I),k===n.INT&&($=n.R32I)),M===n.RG&&(k===n.FLOAT&&($=n.RG32F),k===n.HALF_FLOAT&&($=n.RG16F),k===n.UNSIGNED_BYTE&&($=n.RG8)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RG8UI),k===n.UNSIGNED_SHORT&&($=n.RG16UI),k===n.UNSIGNED_INT&&($=n.RG32UI),k===n.BYTE&&($=n.RG8I),k===n.SHORT&&($=n.RG16I),k===n.INT&&($=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGB8UI),k===n.UNSIGNED_SHORT&&($=n.RGB16UI),k===n.UNSIGNED_INT&&($=n.RGB32UI),k===n.BYTE&&($=n.RGB8I),k===n.SHORT&&($=n.RGB16I),k===n.INT&&($=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGBA8UI),k===n.UNSIGNED_SHORT&&($=n.RGBA16UI),k===n.UNSIGNED_INT&&($=n.RGBA32UI),k===n.BYTE&&($=n.RGBA8I),k===n.SHORT&&($=n.RGBA16I),k===n.INT&&($=n.RGBA32I)),M===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),M===n.RGBA){let Te=te?Ra:nt.getTransfer(J);k===n.FLOAT&&($=n.RGBA32F),k===n.HALF_FLOAT&&($=n.RGBA16F),k===n.UNSIGNED_BYTE&&($=Te===dt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(A,M){let k;return A?M===null||M===Gi||M===Ps?k=n.DEPTH24_STENCIL8:M===ti?k=n.DEPTH32F_STENCIL8:M===lr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gi||M===Ps?k=n.DEPTH_COMPONENT24:M===ti?k=n.DEPTH_COMPONENT32F:M===lr&&(k=n.DEPTH_COMPONENT16),k}function D(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Rn&&A.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){let M=A.target;M.removeEventListener("dispose",R),_(M),M.isVideoTexture&&u.delete(M)}function I(A){let M=A.target;M.removeEventListener("dispose",I),y(M)}function _(A){let M=i.get(A);if(M.__webglInit===void 0)return;let k=A.source,J=h.get(k);if(J){let te=J[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&x(A),Object.keys(J).length===0&&h.delete(k)}i.remove(A)}function x(A){let M=i.get(A);n.deleteTexture(M.__webglTexture);let k=A.source,J=h.get(k);delete J[M.__cacheKey],o.memory.textures--}function y(A){let M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let te=0;te<M.__webglFramebuffer[J].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[J][te]);else n.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)n.deleteFramebuffer(M.__webglFramebuffer[J]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=A.textures;for(let J=0,te=k.length;J<te;J++){let $=i.get(k[J]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(k[J])}i.remove(A)}let T=0;function B(){T=0}function P(){let A=T;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),T+=1,A}function z(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function W(A,M){let k=i.get(A);if(A.isVideoTexture&&Ie(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){let J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,A,M);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function H(A,M){let k=i.get(A);if(A.version>0&&k.__version!==A.version){Z(k,A,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function j(A,M){let k=i.get(A);if(A.version>0&&k.__version!==A.version){Z(k,A,M);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function G(A,M){let k=i.get(A);if(A.version>0&&k.__version!==A.version){ae(k,A,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}let de={[No]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[Oo]:n.MIRRORED_REPEAT},ye={[Rn]:n.NEAREST,[hf]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[Wa]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},we={[pf]:n.NEVER,[xf]:n.ALWAYS,[mf]:n.LESS,[kh]:n.LEQUAL,[gf]:n.EQUAL,[yf]:n.GEQUAL,[_f]:n.GREATER,[vf]:n.NOTEQUAL};function qe(A,M){if(M.type===ti&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===Wa||M.magFilter===Ar||M.magFilter===Hi||M.minFilter===Nn||M.minFilter===Wa||M.minFilter===Ar||M.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,de[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,de[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,de[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ye[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ye[M.minFilter]),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,we[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Rn||M.minFilter!==Ar&&M.minFilter!==Hi||M.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function pt(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));let J=M.source,te=h.get(J);te===void 0&&(te={},h.set(J,te));let $=z(M);if($!==A.__cacheKey){te[$]===void 0&&(te[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[$].usedTimes++;let Te=te[A.__cacheKey];Te!==void 0&&(te[A.__cacheKey].usedTimes--,Te.usedTimes===0&&x(M)),A.__cacheKey=$,A.__webglTexture=te[$].texture}return k}function Z(A,M,k){let J=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=n.TEXTURE_3D);let te=pt(A,M),$=M.source;t.bindTexture(J,A.__webglTexture,n.TEXTURE0+k);let Te=i.get($);if($.version!==Te.__version||te===!0){t.activeTexture(n.TEXTURE0+k);let he=nt.getPrimaries(nt.workingColorSpace),xe=M.colorSpace===xi?null:nt.getPrimaries(M.colorSpace),je=M.colorSpace===xi||he===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ie=v(M.image,!1,s.maxTextureSize);ie=gt(M,ie);let Se=r.convert(M.format,M.colorSpace),Le=r.convert(M.type),Fe=w(M.internalFormat,Se,Le,M.colorSpace,M.isVideoTexture);qe(J,M);let me,$e=M.mipmaps,Ne=M.isVideoTexture!==!0,ot=Te.__version===void 0||te===!0,N=$.dataReady,ue=D(M,ie);if(M.isDepthTexture)Fe=b(M.format===Is,M.type),ot&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,Fe,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Fe,ie.width,ie.height,0,Se,Le,null));else if(M.isDataTexture)if($e.length>0){Ne&&ot&&t.texStorage2D(n.TEXTURE_2D,ue,Fe,$e[0].width,$e[0].height);for(let q=0,K=$e.length;q<K;q++)me=$e[q],Ne?N&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,me.width,me.height,Se,Le,me.data):t.texImage2D(n.TEXTURE_2D,q,Fe,me.width,me.height,0,Se,Le,me.data);M.generateMipmaps=!1}else Ne?(ot&&t.texStorage2D(n.TEXTURE_2D,ue,Fe,ie.width,ie.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,Se,Le,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,ie.width,ie.height,0,Se,Le,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Fe,$e[0].width,$e[0].height,ie.depth);for(let q=0,K=$e.length;q<K;q++)if(me=$e[q],M.format!==Cn)if(Se!==null)if(Ne){if(N)if(M.layerUpdates.size>0){let se=gh(me.width,me.height,M.format,M.type);for(let pe of M.layerUpdates){let He=me.data.subarray(pe*se/me.data.BYTES_PER_ELEMENT,(pe+1)*se/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,pe,me.width,me.height,1,Se,He)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,ie.depth,Se,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Fe,me.width,me.height,ie.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,ie.depth,Se,Le,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Fe,me.width,me.height,ie.depth,0,Se,Le,me.data)}else{Ne&&ot&&t.texStorage2D(n.TEXTURE_2D,ue,Fe,$e[0].width,$e[0].height);for(let q=0,K=$e.length;q<K;q++)me=$e[q],M.format!==Cn?Se!==null?Ne?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,me.width,me.height,Se,me.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Fe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?N&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,me.width,me.height,Se,Le,me.data):t.texImage2D(n.TEXTURE_2D,q,Fe,me.width,me.height,0,Se,Le,me.data)}else if(M.isDataArrayTexture)if(Ne){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Fe,ie.width,ie.height,ie.depth),N)if(M.layerUpdates.size>0){let q=gh(ie.width,ie.height,M.format,M.type);for(let K of M.layerUpdates){let se=ie.data.subarray(K*q/ie.data.BYTES_PER_ELEMENT,(K+1)*q/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,Se,Le,se)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Se,Le,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,ie.width,ie.height,ie.depth,0,Se,Le,ie.data);else if(M.isData3DTexture)Ne?(ot&&t.texStorage3D(n.TEXTURE_3D,ue,Fe,ie.width,ie.height,ie.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Se,Le,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,ie.width,ie.height,ie.depth,0,Se,Le,ie.data);else if(M.isFramebufferTexture){if(ot)if(Ne)t.texStorage2D(n.TEXTURE_2D,ue,Fe,ie.width,ie.height);else{let q=ie.width,K=ie.height;for(let se=0;se<ue;se++)t.texImage2D(n.TEXTURE_2D,se,Fe,q,K,0,Se,Le,null),q>>=1,K>>=1}}else if($e.length>0){if(Ne&&ot){let q=Re($e[0]);t.texStorage2D(n.TEXTURE_2D,ue,Fe,q.width,q.height)}for(let q=0,K=$e.length;q<K;q++)me=$e[q],Ne?N&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Se,Le,me):t.texImage2D(n.TEXTURE_2D,q,Fe,Se,Le,me);M.generateMipmaps=!1}else if(Ne){if(ot){let q=Re(ie);t.texStorage2D(n.TEXTURE_2D,ue,Fe,q.width,q.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Le,ie)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Se,Le,ie);m(M)&&p(J),Te.__version=$.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ae(A,M,k){if(M.image.length!==6)return;let J=pt(A,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);let $=i.get(te);if(te.version!==$.__version||J===!0){t.activeTexture(n.TEXTURE0+k);let Te=nt.getPrimaries(nt.workingColorSpace),he=M.colorSpace===xi?null:nt.getPrimaries(M.colorSpace),xe=M.colorSpace===xi||Te===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let je=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let K=0;K<6;K++)!je&&!ie?Se[K]=v(M.image[K],!0,s.maxCubemapSize):Se[K]=ie?M.image[K].image:M.image[K],Se[K]=gt(M,Se[K]);let Le=Se[0],Fe=r.convert(M.format,M.colorSpace),me=r.convert(M.type),$e=w(M.internalFormat,Fe,me,M.colorSpace),Ne=M.isVideoTexture!==!0,ot=$.__version===void 0||J===!0,N=te.dataReady,ue=D(M,Le);qe(n.TEXTURE_CUBE_MAP,M);let q;if(je){Ne&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,$e,Le.width,Le.height);for(let K=0;K<6;K++){q=Se[K].mipmaps;for(let se=0;se<q.length;se++){let pe=q[se];M.format!==Cn?Fe!==null?Ne?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,pe.width,pe.height,Fe,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,$e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,pe.width,pe.height,Fe,me,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,$e,pe.width,pe.height,0,Fe,me,pe.data)}}}else{if(q=M.mipmaps,Ne&&ot){q.length>0&&ue++;let K=Re(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,$e,K.width,K.height)}for(let K=0;K<6;K++)if(ie){Ne?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Se[K].width,Se[K].height,Fe,me,Se[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,Se[K].width,Se[K].height,0,Fe,me,Se[K].data);for(let se=0;se<q.length;se++){let He=q[se].image[K].image;Ne?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,He.width,He.height,Fe,me,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,$e,He.width,He.height,0,Fe,me,He.data)}}else{Ne?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Fe,me,Se[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,Fe,me,Se[K]);for(let se=0;se<q.length;se++){let pe=q[se];Ne?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,Fe,me,pe.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,$e,Fe,me,pe.image[K])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),$.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Me(A,M,k,J,te,$){let Te=r.convert(k.format,k.colorSpace),he=r.convert(k.type),xe=w(k.internalFormat,Te,he,k.colorSpace),je=i.get(M),ie=i.get(k);if(ie.__renderTarget=M,!je.__hasExternalTextures){let Se=Math.max(1,M.width>>$),Le=Math.max(1,M.height>>$);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,$,xe,Se,Le,M.depth,0,Te,he,null):t.texImage2D(te,$,xe,Se,Le,0,Te,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Je(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,te,ie.__webglTexture,0,Ve(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,te,ie.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(A,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer){let J=M.depthTexture,te=J&&J.isDepthTexture?J.type:null,$=b(M.stencilBuffer,te),Te=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=Ve(M);Je(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,$,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,$,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,$,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,A)}else{let J=M.textures;for(let te=0;te<J.length;te++){let $=J[te],Te=r.convert($.format,$.colorSpace),he=r.convert($.type),xe=w($.internalFormat,Te,he,$.colorSpace),je=Ve(M);k&&Je(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,xe,M.width,M.height):Je(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,xe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,xe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);let te=J.__webglTexture,$=Ve(M);if(M.depthTexture.format===Ts)Je(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(M.depthTexture.format===Is)Je(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Oe(A){let M=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let J=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=J}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ue(M.__webglFramebuffer,A)}else if(k){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=n.createRenderbuffer(),le(M.__webglDepthbuffer[J],A,!1);else{let te=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),le(M.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(A,M,k){let J=i.get(A);M!==void 0&&Me(J.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Oe(A)}function ct(A){let M=A.texture,k=i.get(A),J=i.get(M);A.addEventListener("dispose",I);let te=A.textures,$=A.isWebGLCubeRenderTarget===!0,Te=te.length>1;if(Te||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=M.version,o.memory.textures++),$){k.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[he]=[];for(let xe=0;xe<M.mipmaps.length;xe++)k.__webglFramebuffer[he][xe]=n.createFramebuffer()}else k.__webglFramebuffer[he]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)k.__webglFramebuffer[he]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Te)for(let he=0,xe=te.length;he<xe;he++){let je=i.get(te[he]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&Je(A)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){let xe=te[he];k.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[he]);let je=r.convert(xe.format,xe.colorSpace),ie=r.convert(xe.type),Se=w(xe.internalFormat,je,ie,xe.colorSpace,A.isXRRenderTarget===!0),Le=Ve(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Se,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,k.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),le(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),qe(n.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Me(k.__webglFramebuffer[he][xe],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,xe);else Me(k.__webglFramebuffer[he],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let he=0,xe=te.length;he<xe;he++){let je=te[he],ie=i.get(je);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),qe(n.TEXTURE_2D,je),Me(k.__webglFramebuffer,A,je,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),m(je)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,J.__webglTexture),qe(he,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Me(k.__webglFramebuffer[xe],A,M,n.COLOR_ATTACHMENT0,he,xe);else Me(k.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,he,0);m(M)&&p(he),t.unbindTexture()}A.depthBuffer&&Oe(A)}function Qe(A){let M=A.textures;for(let k=0,J=M.length;k<J;k++){let te=M[k];if(m(te)){let $=E(A),Te=i.get(te).__webglTexture;t.bindTexture($,Te),p($),t.unbindTexture()}}}let Tt=[],F=[];function Ft(A){if(A.samples>0){if(Je(A)===!1){let M=A.textures,k=A.width,J=A.height,te=n.COLOR_BUFFER_BIT,$=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(A),he=M.length>1;if(he)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);let je=i.get(M[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,je,0)}n.blitFramebuffer(0,0,k,J,0,0,k,J,te,n.NEAREST),l===!0&&(Tt.length=0,F.length=0,Tt.push(n.COLOR_ATTACHMENT0+xe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Tt.push($),F.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);let je=i.get(M[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ve(A){return Math.min(s.maxSamples,A.samples)}function Je(A){let M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(A){let M=o.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function gt(A,M){let k=A.colorSpace,J=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Fs&&k!==xi&&(nt.getTransfer(k)===dt?(J!==Cn||te!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=ke,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Je}function ug(n,e){function t(i,s=xi){let r,o=nt.getTransfer(s);if(i===ri)return n.UNSIGNED_BYTE;if(i===jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ec)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ih)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rh)return n.BYTE;if(i===Ph)return n.SHORT;if(i===lr)return n.UNSIGNED_SHORT;if(i===Ql)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===ti)return n.FLOAT;if(i===dn)return n.HALF_FLOAT;if(i===Lh)return n.ALPHA;if(i===Dh)return n.RGB;if(i===Cn)return n.RGBA;if(i===Uh)return n.LUMINANCE;if(i===Nh)return n.LUMINANCE_ALPHA;if(i===Ts)return n.DEPTH_COMPONENT;if(i===Is)return n.DEPTH_STENCIL;if(i===Oh)return n.RED;if(i===tc)return n.RED_INTEGER;if(i===Fh)return n.RG;if(i===nc)return n.RG_INTEGER;if(i===ic)return n.RGBA_INTEGER;if(i===ea||i===ta||i===na||i===ia)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fo||i===Bo||i===zo||i===ko)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vo||i===Ho||i===Go)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vo||i===Ho)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Go)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wo||i===Xo||i===qo||i===Yo||i===Zo||i===$o||i===Jo||i===Ko||i===Qo||i===jo||i===el||i===tl||i===nl||i===il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wo)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xo)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qo)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yo)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zo)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$o)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jo)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ko)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qo)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jo)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===el)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===il)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sa||i===sl||i===rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===sa)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bh||i===al||i===ol||i===ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===sa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var wl=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},bs=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},fg={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new bs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,El=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new At({vertexShader:dg,fragmentShader:pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Mn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Al=class extends bi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null,v=new El,m=t.getContextAttributes(),p=null,E=null,w=[],b=[],D=new Ce,R=null,I=new Kt;I.viewport=new vt;let _=new Kt;_.viewport=new vt;let x=[I,_],y=new wl,T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=w[Z];return ae===void 0&&(ae=new or,w[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=w[Z];return ae===void 0&&(ae=new or,w[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=w[Z];return ae===void 0&&(ae=new or,w[Z]=ae),ae.getHandSpace()};function P(Z){let ae=b.indexOf(Z.inputSource);if(ae===-1)return;let Me=w[ae];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,c||o),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",W);for(let Z=0;Z<w.length;Z++){let ae=b[Z];ae!==null&&(b[Z]=null,w[Z].disconnect(ae))}T=null,B=null,v.reset(),e.setRenderTarget(p),d=null,h=null,f=null,s=null,E=null,pt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",z),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Wt(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Me=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Is:Ts,Me=m.stencil?Ps:Gi);let Ue={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(Ue),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new Wt(h.textureWidth,h.textureHeight,{format:Cn,type:ri,depthTexture:new ma(h.textureWidth,h.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(Z){for(let ae=0;ae<Z.removed.length;ae++){let Me=Z.removed[ae],le=b.indexOf(Me);le>=0&&(b[le]=null,w[le].disconnect(Me))}for(let ae=0;ae<Z.added.length;ae++){let Me=Z.added[ae],le=b.indexOf(Me);if(le===-1){for(let Oe=0;Oe<w.length;Oe++)if(Oe>=b.length){b.push(Me),le=Oe;break}else if(b[Oe]===null){b[Oe]=Me,le=Oe;break}if(le===-1)break}let Ue=w[le];Ue&&Ue.connect(Me)}}let H=new O,j=new O;function G(Z,ae,Me){H.setFromMatrixPosition(ae.matrixWorld),j.setFromMatrixPosition(Me.matrixWorld);let le=H.distanceTo(j),Ue=ae.projectionMatrix.elements,Oe=Me.projectionMatrix.elements,ke=Ue[14]/(Ue[10]-1),ct=Ue[14]/(Ue[10]+1),Qe=(Ue[9]+1)/Ue[5],Tt=(Ue[9]-1)/Ue[5],F=(Ue[8]-1)/Ue[0],Ft=(Oe[8]+1)/Oe[0],Ve=ke*F,Je=ke*Ft,Ie=le/(-F+Ft),gt=Ie*-F;if(ae.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(gt),Z.translateZ(Ie),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ue[10]===-1)Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let Re=ke+Ie,A=ct+Ie,M=Ve-gt,k=Je+(le-gt),J=Qe*ct/A*Re,te=Tt*ct/A*Re;Z.projectionMatrix.makePerspective(M,k,J,te,Re,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function de(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ae=Z.near,Me=Z.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),y.near=_.near=I.near=ae,y.far=_.far=I.far=Me,(T!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,B=y.far),I.layers.mask=Z.layers.mask|2,_.layers.mask=Z.layers.mask|4,y.layers.mask=I.layers.mask|_.layers.mask;let le=Z.parent,Ue=y.cameras;de(y,le);for(let Oe=0;Oe<Ue.length;Oe++)de(Ue[Oe],le);Ue.length===2?G(y,I,_):y.projectionMatrix.copy(I.projectionMatrix),ye(Z,y,le)};function ye(Z,ae,Me){Me===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ul*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let we=null;function qe(Z,ae){if(u=ae.getViewerPose(c||o),g=ae,u!==null){let Me=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let le=!1;Me.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let Oe=0;Oe<Me.length;Oe++){let ke=Me[Oe],ct=null;if(d!==null)ct=d.getViewport(ke);else{let Tt=f.getViewSubImage(h,ke);ct=Tt.viewport,Oe===0&&(e.setRenderTargetTextures(E,Tt.colorTexture,h.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(E))}let Qe=x[Oe];Qe===void 0&&(Qe=new Kt,Qe.layers.enable(Oe),Qe.viewport=new vt,x[Oe]=Qe),Qe.matrix.fromArray(ke.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(ke.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(ct.x,ct.y,ct.width,ct.height),Oe===0&&(y.matrix.copy(Qe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(Qe)}let Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){let Oe=f.getDepthInformation(Me[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,s.renderState)}}for(let Me=0;Me<w.length;Me++){let le=b[Me],Ue=w[Me];le!==null&&Ue!==void 0&&Ue.update(le,ae,c||o)}we&&we(Z,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}let pt=new Wh;pt.setAnimationLoop(qe),this.setAnimationLoop=function(Z){we=Z},this.dispose=function(){}}},Fi=new zn,mg=new St;function gg(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Gh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,w,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=e.get(p),w=E.envMap,b=E.envMapRotation;w&&(m.envMap.value=w,Fi.copy(b),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(Fi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _g(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,w){let b=w.program;i.uniformBlockBinding(E,b)}function c(E,w){let b=s[E.id];b===void 0&&(g(E),b=u(E),s[E.id]=b,E.addEventListener("dispose",m));let D=w.program;i.updateUBOMapping(E,D);let R=e.render.frame;r[E.id]!==R&&(h(E),r[E.id]=R)}function u(E){let w=f();E.__bindingPointIndex=w;let b=n.createBuffer(),D=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){let w=s[E.id],b=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let R=0,I=b.length;R<I;R++){let _=Array.isArray(b[R])?b[R]:[b[R]];for(let x=0,y=_.length;x<y;x++){let T=_[x];if(d(T,R,x,D)===!0){let B=T.__offset,P=Array.isArray(T.value)?T.value:[T.value],z=0;for(let W=0;W<P.length;W++){let H=P[W],j=v(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,B+z,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,z),z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,w,b,D){let R=E.value,I=w+"_"+b;if(D[I]===void 0)return typeof R=="number"||typeof R=="boolean"?D[I]=R:D[I]=R.clone(),!0;{let _=D[I];if(typeof R=="number"||typeof R=="boolean"){if(_!==R)return D[I]=R,!0}else if(_.equals(R)===!1)return _.copy(R),!0}return!1}function g(E){let w=E.uniforms,b=0,D=16;for(let I=0,_=w.length;I<_;I++){let x=Array.isArray(w[I])?w[I]:[w[I]];for(let y=0,T=x.length;y<T;y++){let B=x[y],P=Array.isArray(B.value)?B.value:[B.value];for(let z=0,W=P.length;z<W;z++){let H=P[z],j=v(H),G=b%D,de=G%j.boundary,ye=G+de;b+=de,ye!==0&&D-ye<j.storage&&(b+=D-ye),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=j.storage}}}let R=b%D;return R>0&&(b+=D-R),E.__size=b,E.__cache={},this}function v(E){let w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function m(E){let w=E.target;w.removeEventListener("dispose",m);let b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ga=class{constructor(e={}){let{canvas:t=Sf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,E=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this.toneMapping=Fn,this.toneMappingExposure=1;let b=this,D=!1,R=0,I=0,_=null,x=-1,y=null,T=new vt,B=new vt,P=null,z=new De(0),W=0,H=t.width,j=t.height,G=1,de=null,ye=null,we=new vt(0,0,H,j),qe=new vt(0,0,H,j),pt=!1,Z=new fr,ae=!1,Me=!1,le=new St,Ue=new St,Oe=new O,ke=new vt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function Tt(){return _===null?G:1}let F=i;function Ft(S,U){return t.getContext(S,U)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wl}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",pe,!1),F===null){let U="webgl2";if(F=Ft(U,S),F===null)throw Ft(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ve,Je,Ie,gt,Re,A,M,k,J,te,$,Te,he,xe,je,ie,Se,Le,Fe,me,$e,Ne,ot,N;function ue(){Ve=new Dm(F),Ve.init(),Ne=new ug(F,Ve),Je=new Am(F,Ve,e,Ne),Ie=new lg(F,Ve),Je.reverseDepthBuffer&&h&&Ie.buffers.depth.setReversed(!0),gt=new Om(F),Re=new $0,A=new hg(F,Ve,Ie,Re,Je,Ne,gt),M=new Rm(b),k=new Lm(b),J=new Gf(F),ot=new wm(F,J),te=new Um(F,J,gt,ot),$=new Bm(F,te,J,gt),Fe=new Fm(F,Je,A),ie=new Cm(Re),Te=new Z0(b,M,k,Ve,Je,ot,ie),he=new gg(b,Re),xe=new K0,je=new ig(Ve),Le=new Tm(b,M,k,Ie,$,d,l),Se=new ag(b,$,Je),N=new _g(F,gt,Je,Ie),me=new Em(F,Ve,gt),$e=new Nm(F,Ve,gt),gt.programs=Te.programs,b.capabilities=Je,b.extensions=Ve,b.properties=Re,b.renderLists=xe,b.shadowMap=Se,b.state=Ie,b.info=gt}ue();let q=new Al(b,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=Ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(H,j,!1))},this.getSize=function(S){return S.set(H,j)},this.setSize=function(S,U,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,j=U,t.width=Math.floor(S*G),t.height=Math.floor(U*G),V===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(H*G,j*G).floor()},this.setDrawingBufferSize=function(S,U,V){H=S,j=U,G=V,t.width=Math.floor(S*V),t.height=Math.floor(U*V),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(we)},this.setViewport=function(S,U,V,L){S.isVector4?we.set(S.x,S.y,S.z,S.w):we.set(S,U,V,L),Ie.viewport(T.copy(we).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(qe)},this.setScissor=function(S,U,V,L){S.isVector4?qe.set(S.x,S.y,S.z,S.w):qe.set(S,U,V,L),Ie.scissor(B.copy(qe).multiplyScalar(G).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(S){Ie.setScissorTest(pt=S)},this.setOpaqueSort=function(S){de=S},this.setTransparentSort=function(S){ye=S},this.getClearColor=function(S){return S.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(S=!0,U=!0,V=!0){let L=0;if(S){let C=!1;if(_!==null){let X=_.texture.format;C=X===ic||X===nc||X===tc}if(C){let X=_.texture.type,Q=X===ri||X===Gi||X===lr||X===Ps||X===jl||X===ec,oe=Le.getClearColor(),ge=Le.getClearAlpha(),Ae=oe.r,Pe=oe.g,fe=oe.b;Q?(g[0]=Ae,g[1]=Pe,g[2]=fe,g[3]=ge,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Ae,v[1]=Pe,v[2]=fe,v[3]=ge,F.clearBufferiv(F.COLOR,0,v))}else L|=F.COLOR_BUFFER_BIT}U&&(L|=F.DEPTH_BUFFER_BIT),V&&(L|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),xe.dispose(),je.dispose(),Re.dispose(),M.dispose(),k.dispose(),$.dispose(),ot.dispose(),N.dispose(),Te.dispose(),q.dispose(),q.removeEventListener("sessionstart",_e),q.removeEventListener("sessionend",ve),ne.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let S=gt.autoReset,U=Se.enabled,V=Se.autoUpdate,L=Se.needsUpdate,C=Se.type;ue(),gt.autoReset=S,Se.enabled=U,Se.autoUpdate=V,Se.needsUpdate=L,Se.type=C}function pe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function He(S){let U=S.target;U.removeEventListener("dispose",He),wt(U)}function wt(S){Bt(S),Re.remove(S)}function Bt(S){let U=Re.get(S).programs;U!==void 0&&(U.forEach(function(V){Te.releaseProgram(V)}),S.isShaderMaterial&&Te.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,V,L,C,X){U===null&&(U=ct);let Q=C.isMesh&&C.matrixWorld.determinant()<0,oe=yt(S,U,V,L,C);Ie.setMaterial(L,Q);let ge=V.index,Ae=1;if(L.wireframe===!0){if(ge=te.getWireframeAttribute(V),ge===void 0)return;Ae=2}let Pe=V.drawRange,fe=V.attributes.position,ze=Pe.start*Ae,et=(Pe.start+Pe.count)*Ae;X!==null&&(ze=Math.max(ze,X.start*Ae),et=Math.min(et,(X.start+X.count)*Ae)),ge!==null?(ze=Math.max(ze,0),et=Math.min(et,ge.count)):fe!=null&&(ze=Math.max(ze,0),et=Math.min(et,fe.count));let mt=et-ze;if(mt<0||mt===1/0)return;ot.setup(C,L,oe,V,ge);let zt,tt=me;if(ge!==null&&(zt=J.get(ge),tt=$e,tt.setIndex(zt)),C.isMesh)L.wireframe===!0?(Ie.setLineWidth(L.wireframeLinewidth*Tt()),tt.setMode(F.LINES)):tt.setMode(F.TRIANGLES);else if(C.isLine){let Ee=L.linewidth;Ee===void 0&&(Ee=1),Ie.setLineWidth(Ee*Tt()),C.isLineSegments?tt.setMode(F.LINES):C.isLineLoop?tt.setMode(F.LINE_LOOP):tt.setMode(F.LINE_STRIP)}else C.isPoints?tt.setMode(F.POINTS):C.isSprite&&tt.setMode(F.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)tt.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))tt.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{let Ee=C._multiDrawStarts,Yn=C._multiDrawCounts,ft=C._multiDrawCount,Tn=ge?J.get(ge).bytesPerElement:1,ns=Re.get(L).currentProgram.getUniforms();for(let hn=0;hn<ft;hn++)ns.setValue(F,"_gl_DrawID",hn),tt.render(Ee[hn]/Tn,Yn[hn])}else if(C.isInstancedMesh)tt.renderInstances(ze,mt,C.count);else if(V.isInstancedBufferGeometry){let Ee=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Yn=Math.min(V.instanceCount,Ee);tt.renderInstances(ze,mt,Yn)}else tt.render(ze,mt)};function lt(S,U,V){S.transparent===!0&&S.side===ei&&S.forceSinglePass===!1?(S.side=sn,S.needsUpdate=!0,be(S,U,V),S.side=Bn,S.needsUpdate=!0,be(S,U,V),S.side=ei):be(S,U,V)}this.compile=function(S,U,V=null){V===null&&(V=S),p=je.get(V),p.init(U),w.push(p),V.traverseVisible(function(C){C.isLight&&C.layers.test(U.layers)&&(p.pushLight(C),C.castShadow&&p.pushShadow(C))}),S!==V&&S.traverseVisible(function(C){C.isLight&&C.layers.test(U.layers)&&(p.pushLight(C),C.castShadow&&p.pushShadow(C))}),p.setupLights();let L=new Set;return S.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;let X=C.material;if(X)if(Array.isArray(X))for(let Q=0;Q<X.length;Q++){let oe=X[Q];lt(oe,V,C),L.add(oe)}else lt(X,V,C),L.add(X)}),w.pop(),p=null,L},this.compileAsync=function(S,U,V=null){let L=this.compile(S,U,V);return new Promise(C=>{function X(){if(L.forEach(function(Q){Re.get(Q).currentProgram.isReady()&&L.delete(Q)}),L.size===0){C(S);return}setTimeout(X,10)}Ve.get("KHR_parallel_shader_compile")!==null?X():setTimeout(X,10)})};let Y=null;function ee(S){Y&&Y(S)}function _e(){ne.stop()}function ve(){ne.start()}let ne=new Wh;ne.setAnimationLoop(ee),typeof self<"u"&&ne.setContext(self),this.setAnimationLoop=function(S){Y=S,q.setAnimationLoop(S),S===null?ne.stop():ne.start()},q.addEventListener("sessionstart",_e),q.addEventListener("sessionend",ve),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,U,_),p=je.get(S,w.length),p.init(U),w.push(p),Ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(Ue),Me=this.localClippingEnabled,ae=ie.init(this.clippingPlanes,Me),m=xe.get(S,E.length),m.init(),E.push(m),q.enabled===!0&&q.isPresenting===!0){let X=b.xr.getDepthSensingMesh();X!==null&&Be(X,U,-1/0,b.sortObjects)}Be(S,U,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(de,ye),Qe=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Qe&&Le.addToRenderList(m,S),this.info.render.frame++,ae===!0&&ie.beginShadows();let V=p.state.shadowsArray;Se.render(V,S,U),ae===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let L=m.opaque,C=m.transmissive;if(p.setupLights(),U.isArrayCamera){let X=U.cameras;if(C.length>0)for(let Q=0,oe=X.length;Q<oe;Q++){let ge=X[Q];ht(L,C,S,ge)}Qe&&Le.render(S);for(let Q=0,oe=X.length;Q<oe;Q++){let ge=X[Q];it(m,S,ge,ge.viewport)}}else C.length>0&&ht(L,C,S,U),Qe&&Le.render(S),it(m,S,U);_!==null&&(A.updateMultisampleRenderTarget(_),A.updateRenderTargetMipmap(_)),S.isScene===!0&&S.onAfterRender(b,S,U),ot.resetDefaultState(),x=-1,y=null,w.pop(),w.length>0?(p=w[w.length-1],ae===!0&&ie.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Be(S,U,V,L){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){L&&ke.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ue);let Q=$.update(S),oe=S.material;oe.visible&&m.push(S,Q,oe,V,ke.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Z.intersectsObject(S))){let Q=$.update(S),oe=S.material;if(L&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ke.copy(S.boundingSphere.center)):(Q.boundingSphere===null&&Q.computeBoundingSphere(),ke.copy(Q.boundingSphere.center)),ke.applyMatrix4(S.matrixWorld).applyMatrix4(Ue)),Array.isArray(oe)){let ge=Q.groups;for(let Ae=0,Pe=ge.length;Ae<Pe;Ae++){let fe=ge[Ae],ze=oe[fe.materialIndex];ze&&ze.visible&&m.push(S,Q,ze,V,ke.z,fe)}}else oe.visible&&m.push(S,Q,oe,V,ke.z,null)}}let X=S.children;for(let Q=0,oe=X.length;Q<oe;Q++)Be(X[Q],U,V,L)}function it(S,U,V,L){let C=S.opaque,X=S.transmissive,Q=S.transparent;p.setupLightsView(V),ae===!0&&ie.setGlobalState(b.clippingPlanes,V),L&&Ie.viewport(T.copy(L)),C.length>0&&Ye(C,U,V),X.length>0&&Ye(X,U,V),Q.length>0&&Ye(Q,U,V),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function ht(S,U,V,L){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[L.id]===void 0&&(p.state.transmissionRenderTarget[L.id]=new Wt(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?dn:ri,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let X=p.state.transmissionRenderTarget[L.id],Q=L.viewport||T;X.setSize(Q.z,Q.w);let oe=b.getRenderTarget();b.setRenderTarget(X),b.getClearColor(z),W=b.getClearAlpha(),W<1&&b.setClearColor(16777215,.5),b.clear(),Qe&&Le.render(V);let ge=b.toneMapping;b.toneMapping=Fn;let Ae=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),p.setupLightsView(L),ae===!0&&ie.setGlobalState(b.clippingPlanes,L),Ye(S,V,L),A.updateMultisampleRenderTarget(X),A.updateRenderTargetMipmap(X),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let fe=0,ze=U.length;fe<ze;fe++){let et=U[fe],mt=et.object,zt=et.geometry,tt=et.material,Ee=et.group;if(tt.side===ei&&mt.layers.test(L.layers)){let Yn=tt.side;tt.side=sn,tt.needsUpdate=!0,re(mt,V,L,zt,tt,Ee),tt.side=Yn,tt.needsUpdate=!0,Pe=!0}}Pe===!0&&(A.updateMultisampleRenderTarget(X),A.updateRenderTargetMipmap(X))}b.setRenderTarget(oe),b.setClearColor(z,W),Ae!==void 0&&(L.viewport=Ae),b.toneMapping=ge}function Ye(S,U,V){let L=U.isScene===!0?U.overrideMaterial:null;for(let C=0,X=S.length;C<X;C++){let Q=S[C],oe=Q.object,ge=Q.geometry,Ae=L===null?Q.material:L,Pe=Q.group;oe.layers.test(V.layers)&&re(oe,U,V,ge,Ae,Pe)}}function re(S,U,V,L,C,X){S.onBeforeRender(b,U,V,L,C,X),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),C.onBeforeRender(b,U,V,L,S,X),C.transparent===!0&&C.side===ei&&C.forceSinglePass===!1?(C.side=sn,C.needsUpdate=!0,b.renderBufferDirect(V,U,L,C,S,X),C.side=Bn,C.needsUpdate=!0,b.renderBufferDirect(V,U,L,C,S,X),C.side=ei):b.renderBufferDirect(V,U,L,C,S,X),S.onAfterRender(b,U,V,L,C,X)}function be(S,U,V){U.isScene!==!0&&(U=ct);let L=Re.get(S),C=p.state.lights,X=p.state.shadowsArray,Q=C.state.version,oe=Te.getParameters(S,C.state,X,U,V),ge=Te.getProgramCacheKey(oe),Ae=L.programs;L.environment=S.isMeshStandardMaterial?U.environment:null,L.fog=U.fog,L.envMap=(S.isMeshStandardMaterial?k:M).get(S.envMap||L.environment),L.envMapRotation=L.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ae===void 0&&(S.addEventListener("dispose",He),Ae=new Map,L.programs=Ae);let Pe=Ae.get(ge);if(Pe!==void 0){if(L.currentProgram===Pe&&L.lightsStateVersion===Q)return rt(S,oe),Pe}else oe.uniforms=Te.getUniforms(S),S.onBeforeCompile(oe,b),Pe=Te.acquireProgram(oe,ge),Ae.set(ge,Pe),L.uniforms=oe.uniforms;let fe=L.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(fe.clippingPlanes=ie.uniform),rt(S,oe),L.needsLights=Gt(S),L.lightsStateVersion=Q,L.needsLights&&(fe.ambientLightColor.value=C.state.ambient,fe.lightProbe.value=C.state.probe,fe.directionalLights.value=C.state.directional,fe.directionalLightShadows.value=C.state.directionalShadow,fe.spotLights.value=C.state.spot,fe.spotLightShadows.value=C.state.spotShadow,fe.rectAreaLights.value=C.state.rectArea,fe.ltc_1.value=C.state.rectAreaLTC1,fe.ltc_2.value=C.state.rectAreaLTC2,fe.pointLights.value=C.state.point,fe.pointLightShadows.value=C.state.pointShadow,fe.hemisphereLights.value=C.state.hemi,fe.directionalShadowMap.value=C.state.directionalShadowMap,fe.directionalShadowMatrix.value=C.state.directionalShadowMatrix,fe.spotShadowMap.value=C.state.spotShadowMap,fe.spotLightMatrix.value=C.state.spotLightMatrix,fe.spotLightMap.value=C.state.spotLightMap,fe.pointShadowMap.value=C.state.pointShadowMap,fe.pointShadowMatrix.value=C.state.pointShadowMatrix),L.currentProgram=Pe,L.uniformsList=null,Pe}function Ge(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Es.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function rt(S,U){let V=Re.get(S);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function yt(S,U,V,L,C){U.isScene!==!0&&(U=ct),A.resetTextureUnits();let X=U.fog,Q=L.isMeshStandardMaterial?U.environment:null,oe=_===null?b.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Fs,ge=(L.isMeshStandardMaterial?k:M).get(L.envMap||Q),Ae=L.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pe=!!V.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),fe=!!V.morphAttributes.position,ze=!!V.morphAttributes.normal,et=!!V.morphAttributes.color,mt=Fn;L.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(mt=b.toneMapping);let zt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,tt=zt!==void 0?zt.length:0,Ee=Re.get(L),Yn=p.state.lights;if(ae===!0&&(Me===!0||S!==y)){let _n=S===y&&L.id===x;ie.setState(L,S,_n)}let ft=!1;L.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Yn.state.version||Ee.outputColorSpace!==oe||C.isBatchedMesh&&Ee.batching===!1||!C.isBatchedMesh&&Ee.batching===!0||C.isBatchedMesh&&Ee.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&Ee.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&Ee.instancing===!1||!C.isInstancedMesh&&Ee.instancing===!0||C.isSkinnedMesh&&Ee.skinning===!1||!C.isSkinnedMesh&&Ee.skinning===!0||C.isInstancedMesh&&Ee.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&Ee.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&Ee.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&Ee.instancingMorph===!1&&C.morphTexture!==null||Ee.envMap!==ge||L.fog===!0&&Ee.fog!==X||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Pe||Ee.morphTargets!==fe||Ee.morphNormals!==ze||Ee.morphColors!==et||Ee.toneMapping!==mt||Ee.morphTargetsCount!==tt)&&(ft=!0):(ft=!0,Ee.__version=L.version);let Tn=Ee.currentProgram;ft===!0&&(Tn=be(L,U,C));let ns=!1,hn=!1,$s=!1,Mt=Tn.getUniforms(),Ln=Ee.uniforms;if(Ie.useProgram(Tn.program)&&(ns=!0,hn=!0,$s=!0),L.id!==x&&(x=L.id,hn=!0),ns||y!==S){Ie.buffers.depth.getReversed()?(le.copy(S.projectionMatrix),Tf(le),wf(le),Mt.setValue(F,"projectionMatrix",le)):Mt.setValue(F,"projectionMatrix",S.projectionMatrix),Mt.setValue(F,"viewMatrix",S.matrixWorldInverse);let fi=Mt.map.cameraPosition;fi!==void 0&&fi.setValue(F,Oe.setFromMatrixPosition(S.matrixWorld)),Je.logarithmicDepthBuffer&&Mt.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&Mt.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,hn=!0,$s=!0)}if(C.isSkinnedMesh){Mt.setOptional(F,C,"bindMatrix"),Mt.setOptional(F,C,"bindMatrixInverse");let _n=C.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Mt.setValue(F,"boneTexture",_n.boneTexture,A))}C.isBatchedMesh&&(Mt.setOptional(F,C,"batchingTexture"),Mt.setValue(F,"batchingTexture",C._matricesTexture,A),Mt.setOptional(F,C,"batchingIdTexture"),Mt.setValue(F,"batchingIdTexture",C._indirectTexture,A),Mt.setOptional(F,C,"batchingColorTexture"),C._colorsTexture!==null&&Mt.setValue(F,"batchingColorTexture",C._colorsTexture,A));let Js=V.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0)&&Fe.update(C,V,Tn),(hn||Ee.receiveShadow!==C.receiveShadow)&&(Ee.receiveShadow=C.receiveShadow,Mt.setValue(F,"receiveShadow",C.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(Ln.envMap.value=ge,Ln.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&U.environment!==null&&(Ln.envMapIntensity.value=U.environmentIntensity),hn&&(Mt.setValue(F,"toneMappingExposure",b.toneMappingExposure),Ee.needsLights&&ut(Ln,$s),X&&L.fog===!0&&he.refreshFogUniforms(Ln,X),he.refreshMaterialUniforms(Ln,L,G,j,p.state.transmissionRenderTarget[S.id]),Es.upload(F,Ge(Ee),Ln,A)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Es.upload(F,Ge(Ee),Ln,A),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&Mt.setValue(F,"center",C.center),Mt.setValue(F,"modelViewMatrix",C.modelViewMatrix),Mt.setValue(F,"normalMatrix",C.normalMatrix),Mt.setValue(F,"modelMatrix",C.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){let _n=L.uniformsGroups;for(let fi=0,di=_n.length;fi<di;fi++){let vc=_n[fi];N.update(vc,Tn),N.bind(vc,Tn)}}return Tn}function ut(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Gt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(S,U,V){Re.get(S.texture).__webglTexture=U,Re.get(S.depthTexture).__webglTexture=V;let L=Re.get(S);L.__hasExternalTextures=!0,L.__autoAllocateDepthBuffer=V===void 0,L.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){let V=Re.get(S);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,V=0){_=S,R=U,I=V;let L=!0,C=null,X=!1,Q=!1;if(S){let ge=Re.get(S);if(ge.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(F.FRAMEBUFFER,null),L=!1;else if(ge.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(ge.__hasExternalTextures)A.rebindTextures(S,Re.get(S.texture).__webglTexture,Re.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let fe=S.depthTexture;if(ge.__boundDepthTexture!==fe){if(fe!==null&&Re.has(fe)&&(S.width!==fe.image.width||S.height!==fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}let Ae=S.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Q=!0);let Pe=Re.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?C=Pe[U][V]:C=Pe[U],X=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?C=Re.get(S).__webglMultisampledFramebuffer:Array.isArray(Pe)?C=Pe[V]:C=Pe,T.copy(S.viewport),B.copy(S.scissor),P=S.scissorTest}else T.copy(we).multiplyScalar(G).floor(),B.copy(qe).multiplyScalar(G).floor(),P=pt;if(Ie.bindFramebuffer(F.FRAMEBUFFER,C)&&L&&Ie.drawBuffers(S,C),Ie.viewport(T),Ie.scissor(B),Ie.setScissorTest(P),X){let ge=Re.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,V)}else if(Q){let ge=Re.get(S.texture),Ae=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ge.__webglTexture,V||0,Ae)}x=-1},this.readRenderTargetPixels=function(S,U,V,L,C,X,Q){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let oe=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Q!==void 0&&(oe=oe[Q]),oe){Ie.bindFramebuffer(F.FRAMEBUFFER,oe);try{let ge=S.texture,Ae=ge.format,Pe=ge.type;if(!Je.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-L&&V>=0&&V<=S.height-C&&F.readPixels(U,V,L,C,Ne.convert(Ae),Ne.convert(Pe),X)}finally{let ge=_!==null?Re.get(_).__webglFramebuffer:null;Ie.bindFramebuffer(F.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(S,U,V,L,C,X,Q){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let oe=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Q!==void 0&&(oe=oe[Q]),oe){let ge=S.texture,Ae=ge.format,Pe=ge.type;if(!Je.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-L&&V>=0&&V<=S.height-C){Ie.bindFramebuffer(F.FRAMEBUFFER,oe);let fe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.bufferData(F.PIXEL_PACK_BUFFER,X.byteLength,F.STREAM_READ),F.readPixels(U,V,L,C,Ne.convert(Ae),Ne.convert(Pe),0);let ze=_!==null?Re.get(_).__webglFramebuffer:null;Ie.bindFramebuffer(F.FRAMEBUFFER,ze);let et=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await bf(F,et,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,X),F.deleteBuffer(fe),F.deleteSync(et),X}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,V=0){S.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);let L=Math.pow(2,-V),C=Math.floor(S.image.width*L),X=Math.floor(S.image.height*L),Q=U!==null?U.x:0,oe=U!==null?U.y:0;A.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,Q,oe,C,X),Ie.unbindTexture()},this.copyTextureToTexture=function(S,U,V=null,L=null,C=0){S.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),L=arguments[0]||null,S=arguments[1],U=arguments[2],C=arguments[3]||0,V=null);let X,Q,oe,ge,Ae,Pe,fe,ze,et,mt=S.isCompressedTexture?S.mipmaps[C]:S.image;V!==null?(X=V.max.x-V.min.x,Q=V.max.y-V.min.y,oe=V.isBox3?V.max.z-V.min.z:1,ge=V.min.x,Ae=V.min.y,Pe=V.isBox3?V.min.z:0):(X=mt.width,Q=mt.height,oe=mt.depth||1,ge=0,Ae=0,Pe=0),L!==null?(fe=L.x,ze=L.y,et=L.z):(fe=0,ze=0,et=0);let zt=Ne.convert(U.format),tt=Ne.convert(U.type),Ee;U.isData3DTexture?(A.setTexture3D(U,0),Ee=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Ee=F.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Ee=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Yn=F.getParameter(F.UNPACK_ROW_LENGTH),ft=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Tn=F.getParameter(F.UNPACK_SKIP_PIXELS),ns=F.getParameter(F.UNPACK_SKIP_ROWS),hn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ge),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ae),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pe);let $s=S.isDataArrayTexture||S.isData3DTexture,Mt=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Ln=Re.get(S),Js=Re.get(U),_n=Re.get(Ln.__renderTarget),fi=Re.get(Js.__renderTarget);Ie.bindFramebuffer(F.READ_FRAMEBUFFER,_n.__webglFramebuffer),Ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let di=0;di<oe;di++)$s&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.get(S).__webglTexture,C,Pe+di),S.isDepthTexture?(Mt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.get(U).__webglTexture,C,et+di),F.blitFramebuffer(ge,Ae,X,Q,fe,ze,X,Q,F.DEPTH_BUFFER_BIT,F.NEAREST)):Mt?F.copyTexSubImage3D(Ee,C,fe,ze,et+di,ge,Ae,X,Q):F.copyTexSubImage2D(Ee,C,fe,ze,et+di,ge,Ae,X,Q);Ie.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Mt?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Ee,C,fe,ze,et,X,Q,oe,zt,tt,mt.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ee,C,fe,ze,et,X,Q,oe,zt,mt.data):F.texSubImage3D(Ee,C,fe,ze,et,X,Q,oe,zt,tt,mt):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,C,fe,ze,X,Q,zt,tt,mt.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,C,fe,ze,mt.width,mt.height,zt,mt.data):F.texSubImage2D(F.TEXTURE_2D,C,fe,ze,X,Q,zt,tt,mt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Yn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Tn),F.pixelStorei(F.UNPACK_SKIP_ROWS,ns),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hn),C===0&&U.generateMipmaps&&F.generateMipmap(Ee),Ie.unbindTexture()},this.copyTextureToTexture3D=function(S,U,V=null,L=null,C=0){return S.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,L=arguments[1]||null,S=arguments[2],U=arguments[3],C=arguments[4]||0),rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,V,L,C)},this.initRenderTarget=function(S){Re.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Ie.unbindTexture()},this.resetState=function(){R=0,I=0,_=null,Ie.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var _a=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Cl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hl,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},jt=new O,va=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dr=class extends ai{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vs,tr=new O,ys=new O,xs=new O,Ms=new Ce,nr=new Ce,$h=new St,Zr=new O,ir=new O,$r=new O,_h=new Ce,Mo=new Ce,vh=new Ce,ya=class extends Xt{constructor(e=new dr){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new rn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Cl(t,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new va(i,3,0,!1)),vs.setAttribute("uv",new va(i,2,3,!1))}this.geometry=vs,this.material=e,this.center=new Ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),$h.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-xs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Jr(Zr.set(-.5,-.5,0),xs,o,ys,s,r),Jr(ir.set(.5,-.5,0),xs,o,ys,s,r),Jr($r.set(.5,.5,0),xs,o,ys,s,r),_h.set(0,0),Mo.set(1,0),vh.set(1,1);let a=e.ray.intersectTriangle(Zr,ir,$r,!1,tr);if(a===null&&(Jr(ir.set(-.5,.5,0),xs,o,ys,s,r),Mo.set(0,1),a=e.ray.intersectTriangle(Zr,$r,ir,!1,tr),a===null))return;let l=e.ray.origin.distanceTo(tr);l<e.near||l>e.far||t.push({distance:l,point:tr.clone(),uv:Mi.getInterpolation(tr,Zr,ir,$r,_h,Mo,vh,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jr(n,e,t,i,s,r){Ms.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(nr.x=r*Ms.x-s*Ms.y,nr.y=s*Ms.x+r*Ms.y):nr.copy(Ms),n.copy(e),n.x+=nr.x,n.y+=nr.y,n.applyMatrix4($h)}var Rl=class extends ai{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yh=new St,Pl=new cr,Kr=new Ls,Qr=new O,pr=class extends Xt{constructor(e=new rn,t=new Rl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;yh.copy(s).invert(),Pl.copy(e.ray).applyMatrix4(yh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,v=d;g<v;g++){let m=c.getX(g);Qr.fromBufferAttribute(f,m),xh(Qr,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,v=d;g<v;g++)Qr.fromBufferAttribute(f,g),xh(Qr,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xh(n,e,t,i,s,r,o){let a=Pl.distanceSqToPoint(n);if(a<t){let l=new O;Pl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var xa=class extends Qt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ma=class extends At{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}};var Sa=class extends ai{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function jr(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function vg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ns=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Il=class extends Ns{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bc:r=e,a=2*t-i;break;case Tc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:o=e,l=2*i-t;break;case Tc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,E=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,w=(-1-d)*m+(1.5+d)*v+.5*g,b=d*m-d*v;for(let D=0;D!==a;++D)r[D]=p*o[u+D]+E*o[c+D]+w*o[l+D]+b*o[f+D];return r}},Ll=class extends Ns{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}},Dl=class extends Ns{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jr(t,this.TimeBufferType),this.values=jr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:jr(e.times,Array),values:jr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Il(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ra:t=this.InterpolantFactoryMethodDiscrete;break;case cl:t=this.InterpolantFactoryMethodLinear;break;case Xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return cl;case this.InterpolantFactoryMethodSmooth:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&vg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,h=f-i,d=f+i;for(let g=0;g!==i;++g){let v=t[f+g];if(v!==t[h+g]||v!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,h=o*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=cl;var Xi=class extends Pn{constructor(e,t,i){super(e,t,i)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=ra;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends Pn{};Ul.prototype.ValueTypeName="color";var Nl=class extends Pn{};Nl.prototype.ValueTypeName="number";var Ol=class extends Ns{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Ti.slerpFlat(r,0,o,c-a,o,c,l);return r}},ba=class extends Pn{InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}};ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Pn{constructor(e,t,i){super(e,t,i)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=ra;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends Pn{};Fl.prototype.ValueTypeName="vector";var Bl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},yg=new Bl,zl=class{constructor(e){this.manager=e!==void 0?e:yg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};zl.DEFAULT_MATERIAL_NAME="__DEFAULT";var mr=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ta=class extends mr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},So=new St,Mh=new O,Sh=new O,wa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Mh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mh),Sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sh),t.updateMatrixWorld(),So.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(So)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var bh=new St,sr=new O,bo=new O,kl=class extends wa{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),sr.setFromMatrixPosition(e.matrixWorld),i.position.copy(sr),bo.copy(i.position),bo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bo),i.updateMatrixWorld(),s.makeTranslation(-sr.x,-sr.y,-sr.z),bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh)}},Os=class extends mr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new kl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Vl=class extends wa{constructor(){super(new Us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gr=class extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ea=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Th(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Th();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Th(){return performance.now()}var rc="\\[\\]\\.:\\/",xg=new RegExp("["+rc+"]","g"),ac="[^"+rc+"]",Mg="[^"+rc.replace("\\.","")+"]",Sg=/((?:WC+[\/:])*)/.source.replace("WC",ac),bg=/(WCOD+)?/.source.replace("WCOD",Mg),Tg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),wg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),Eg=new RegExp("^"+Sg+bg+Tg+wg+"$"),Ag=["material","materials","bones","map"],Hl=class{constructor(e,t,i){let s=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xg,"")}static parseTrackName(e){let t=Eg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ag.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Hl;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F_=new Float32Array(1);var wh=new St,Aa=class{constructor(e,t,i=0,s=1/0){this.ray=new cr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wh),this}intersectObject(e,t=!0,i=[]){return Gl(e,this,i,t),i.sort(Eh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Gl(e[s],this,i,t);return i.sort(Eh),i}};function Eh(n,e){return n.distance-e.distance}function Gl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Gl(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);var Ia={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Cg=new Us(-1,1,1,-1,0,1),oc=class extends rn{constructor(){super(),this.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xn([0,2,0,0,2,0],2))}},Rg=new oc,Ei=class{constructor(e){this._mesh=new It(Rg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Cg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var zs=class extends pn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wi.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ei(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _r=class extends pn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},La=class extends pn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Da=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ce);this._width=i.width,this._height=i.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zs(Ia),this.copyPass.material.blending=On,this.clock=new Ea}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_r!==void 0&&(o instanceof _r?i=!0:o instanceof La&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ua=class extends pn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Kh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ks=class n extends pn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new De(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,o,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let h=new Wt(r,o,{type:dn});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Wt(r,o,{type:dn});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Kh;this.highPassUniforms=wi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Ia;this.copyUniforms=wi.clone(u.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:si,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new De,this.oldClearAlpha=1,this.basic=new kn,this.fsQuad=new Ei(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new At({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ks.BlurDirectionX=new Ce(1,0);ks.BlurDirectionY=new Ce(0,1);var Qh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Na=class extends pn{constructor(){super();let e=Qh;this.uniforms=wi.clone(e.uniforms),this.material=new Ma({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ei(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ql?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$l?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Jl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ci=yr(),Ki=Xs(),{GRAVES:on,DEPTH:e_,C:Gn}=ci,mc=30,Ba=Math.tan(mc/2*Math.PI/180),xt=n=>2*n*Ba/1080,qt=(n,e,t,i=new O)=>i.set((n-960)*xt(t),(540-e)*xt(t),-t),at=17,pc=12.5,qs={A:22,B:24,C:20,D:22.5,E:20.5},t_=Ki.STONE_BOX,Ht=(n,e=0,t=1)=>Math.max(e,Math.min(t,n)),br=(n,e,t)=>n+(e-n)*t,Fa=n=>1-Math.pow(1-Ht(n),3),mu=n=>Ht(n)*Ht(n),n_=n=>{n=Ht(n);let e=1.70158;return 1+(e+1)*Math.pow(n-1,3)+e*Math.pow(n-1,2)},Ze=Ki.hash;function i_(n,e){let t=Ht((e-300)/780);return 19.6+50.4*Math.pow(1-t,1.6)}function Ct(n,e=!0){let t=n instanceof Qt?n:n.getContext?new xa(n):new Qt(n);return t.needsUpdate=!0,e&&(t.colorSpace=Jt),t.anisotropy=4,t}function In(n,e){let t=document.createElement("canvas");return t.width=n,t.height=e,t}function li(n="#ffffff",e=128,t=0){let i=In(e,e),s=i.getContext("2d"),r=s.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);return r.addColorStop(0,n),r.addColorStop(.15+t,n+"aa"),r.addColorStop(.45,n+"30"),r.addColorStop(1,n+"00"),s.fillStyle=r,s.fillRect(0,0,e,e),Ct(i)}function vu(n,e,t,i,s){let r=new _a;r.background=new De("#05061a");let o=new Kt(mc,i/s,.1,300),a=(Y,ee,_e=.64,ve={})=>new Sa(Object.assign({map:Y,normalMap:ee||null,normalScale:new Ce(1,1),emissive:new De(1,1,1),emissiveMap:Y,emissiveIntensity:_e,transparent:!0,alphaTest:.03,depthWrite:!1,side:Bn},ve)),l={},c=Y=>l[Y]||(l[Y]=Ct(e[Y]));{let _e=new Mn(1,1,96,54),ve=_e.attributes.position,ne=new O;for(let ht=0;ht<ve.count;ht++){let Ye=ht%97,re=Math.floor(ht/97),be=Ye/96*1920,Ge=re/54*1081;qt(be,Ge,i_(be,Ge),ne),ve.setXYZ(ht,ne.x,ne.y,ne.z)}_e.computeVertexNormals();let Be=_e.attributes.normal;for(let ht=0;ht<Be.count;ht++)Be.setXYZ(ht,0,0,1);let it=window.__plate=new It(_e,a(c("plate"),Ct(e.plate_n,!1),.8,{transparent:!1,alphaTest:0,depthWrite:!0}));it.material.normalScale.set(.6,.6),it.renderOrder=0,r.add(it)}let u=li("#ffffff"),f=li("#cfe6ff"),h=(Y,ee)=>(Y.renderOrder=ee,r.add(Y),Y),d=(Y,ee="#ffffff",_e=si,ve=1)=>new ya(new dr({map:Y,color:new De(ee),blending:_e,transparent:!0,depthWrite:!1,depthTest:!0,opacity:ve})),g=h(d(f,"#9fc4ff"),2);qt(1342,182,69,g.position),g.scale.setScalar(560*xt(69));let v=(()=>{let Y=In(256,128),ee=Y.getContext("2d");for(let _e=0;_e<26;_e++){let ve=ee.createRadialGradient(0,0,0,0,0,1);ve.addColorStop(0,"rgba(70,80,160,0.55)"),ve.addColorStop(1,"rgba(70,80,160,0)"),ee.save(),ee.translate(30+Ze(_e,1)*196,50+Ze(_e,2)*40),ee.scale(28+Ze(_e,3)*40,14+Ze(_e,4)*18),ee.fillStyle=ve,ee.beginPath(),ee.arc(0,0,1,0,7),ee.fill(),ee.restore()}return Ct(Y)})(),m=[0,1,2,3].map(Y=>h(d(v,"#ffffff",tn,.75),3)),p=new kn({transparent:!0,blending:si,depthWrite:!1,color:new De(2.2,2.2,3)}),E=h(new It(new Mn(1,1),p),2);E.visible=!1;let w=In(256,512);p.map=Ct(w);let b={};for(let Y of on){let ee=t.stones[Y.stone],[_e,ve]=t_[Y.stone],ne=qs[Y.stone],Be=ee.width,it=ee.height,ht=new It(new Mn(Be*xt(ne),it*xt(ne)),a(Ct(ee),Ct(e["stone_"+Y.stone+"_n"],!1),.76));qt(_e+Be/2,ve+it/2,ne,ht.position),ht.renderOrder=100-ne*2,r.add(ht),b[Y.stone]={m:ht,d:ne,ox:_e,oy:ve,w:Be,h:it}}let D=on.map((Y,ee)=>{let _e=e[Y.girl],ve=qs[Y.stone]+.8,ne=Y.rise.h,Be=ne*_e.width/_e.height,it=new Mn(Be*xt(ve),ne*xt(ve));it.translate(0,ne*xt(ve)/2,0);let ht=new yn(new O(0,1,0),-(540-Y.rise.ground)*xt(ve)),Ye=a(Ct(_e),Ct(e[Y.girl+"_n"],!1),.8,{clippingPlanes:[ht]}),re=new It(it,Ye);re.renderOrder=100-ve*2+.5,re.visible=!1,r.add(re);let be=h(d(li(Y.glow,128),"#ffffff"),100-ve*2+.4);return be.material.opacity=0,{mesh:re,mat:Ye,d:ve,w:Be,h:ne,beam:be}}),R=a(Ct(e.mort),Ct(e.mort_n,!1),.82),I=290,_=new It(new Mn(I*xt(at),I*xt(at)),R);_.renderOrder=300,r.add(_);let x=h(d(li("#8b5cff"),"#ffffff"),299);x.material.opacity=.3;let y=(()=>{let Y=In(256,256),ee=Y.getContext("2d");ee.translate(128,128);for(let _e=0;_e<40;_e++){let ve=-Math.PI*.1+_e*.045;ee.strokeStyle=`rgba(230,215,255,${_e/40*.9})`,ee.lineWidth=6+_e*.35,ee.beginPath(),ee.arc(0,0,104,ve,ve+.05),ee.stroke()}return ee.strokeStyle="rgba(255,255,255,0.9)",ee.lineWidth=3,ee.beginPath(),ee.arc(0,0,108,Math.PI*.9,Math.PI*1.95),ee.stroke(),Ct(Y)})(),T=h(new It(new Mn(1,1),new kn({map:y,transparent:!0,blending:si,depthWrite:!1,color:new De(1.6,1.4,2.2)})),305);T.visible=!1;let B=[0,1,2,3,4,5].map(()=>h(d(Ct(gu("rose",on[3].color,96)),"#ffffff",tn),306)),P=h(d(Ct(gu("halo","#ffe08a",128)),"#ffffff",tn),306),z=(()=>{let Y=In(256,256),ee=Y.getContext("2d"),_e=ee.createRadialGradient(128,128,90,128,128,128);return _e.addColorStop(0,"rgba(255,255,255,0)"),_e.addColorStop(.7,"rgba(255,255,255,0.55)"),_e.addColorStop(1,"rgba(255,255,255,0)"),ee.fillStyle=_e,ee.fillRect(0,0,256,256),Ct(Y)})(),W=h(d(z,on[1].glow),290),H=h(d(z,on[2].glow),290),j=h(d(z,"#ffd9f2"),400),G={};on.forEach((Y,ee)=>{G[ee]=Ct(_u(ee))}),G[ci.RARE]=Ct(_u(ci.RARE));let de=Ct(r_()),ye=on.map(Y=>li(Y.glow));ye[ci.RARE]=li("#ffffff");let we=li("#ff3355"),qe=li("#33e1ff"),pt=li("#ffcf8a"),Z=(Y,ee)=>{let _e=[];for(let ve=0;ve<Y;ve++)_e.push(ee());return{arr:_e,i:0,reset(){this.i=0},get(){let ve=this.arr[this.i++]||(this.arr.push(ee()),this.arr[this.i-1]);return ve.visible=!0,ve},finish(){for(let ve=this.i;ve<this.arr.length;ve++)this.arr[ve].visible=!1}}},ae=Z(24,()=>h(d(G[0],"#ffffff",tn),320)),Me=Z(260,()=>h(d(u,"#ffffff"),318)),le=Z(12,()=>h(d(de,"#ffffff",tn),321)),Ue=Z(4,()=>h(d(Ct(e.mug),"#ffffff",tn),321)),Oe=new Ta(11121919,2364980,.35);r.add(Oe);let ke=new gr(12375807,.55);ke.position.set(8,9,4),ke.target.position.set(0,0,-20),r.add(ke,ke.target);let ct=new gr(16754804,0);ct.position.set(-9,1.5,3),ct.target.position.set(0,0,-20),r.add(ct,ct.target);let Qe=[0,1,2,3,4,5].map(()=>{let Y=new Os(16777215,0,7,1.6);return r.add(Y),Y}),Tt=on.map(Y=>{let ee=new Os(new De(Y.glow),0,9,1.4);return r.add(ee),ee}),F=new Os(10189823,2,5,1.6);r.add(F);let Ft=2400,Ve=new rn,Je=new Float32Array(Ft*3),Ie=new Float32Array(Ft*4),gt=new Float32Array(Ft);Ve.setAttribute("position",new Dt(Je,3)),Ve.setAttribute("color",new Dt(Ie,4)),Ve.setAttribute("size",new Dt(gt,1));let Re=new At({transparent:!0,depthWrite:!1,blending:si,uniforms:{scale:{value:s/(2*Ba)}},vertexShader:"attribute float size; attribute vec4 color; varying vec4 vC; uniform float scale; void main(){ vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize = size*scale/-mv.z; gl_Position=projectionMatrix*mv; }",fragmentShader:"varying vec4 vC; void main(){ vec2 p=gl_PointCoord-.5; float d=length(p); float a=smoothstep(.5,.0,d); a*=a; gl_FragColor=vec4(vC.rgb*a*vC.a, a*vC.a); }"}),A=h(new pr(Ve,Re),330);A.frustumCulled=!1;let M=new rn,k=new Float32Array(600*3),J=new Float32Array(600*4),te=new Float32Array(600);M.setAttribute("position",new Dt(k,3)),M.setAttribute("color",new Dt(J,4)),M.setAttribute("size",new Dt(te,1));let $=new At({transparent:!0,depthWrite:!1,uniforms:{scale:{value:s/(2*Ba)}},vertexShader:Re.vertexShader,fragmentShader:"varying vec4 vC; void main(){ vec2 p=abs(gl_PointCoord-.5); if(max(p.x,p.y)>.42) discard; gl_FragColor=vec4(vC.rgb, vC.a); }"}),Te=h(new pr(M,$),329);Te.frustumCulled=!1;let he=[0,1,2,3].map(Y=>{let ee=In(128,64),_e=ee.getContext("2d");return Ki.drawBat(_e,64,34,40,Y/4*Math.PI*2,"#090820"),Ct(ee)}),xe=[0,1,2,3,4,5,6].map(()=>h(d(he[0],"#ffffff",tn),5)),je=(()=>{let Y=In(512,256),ee=Y.getContext("2d");for(let ne=0;ne<40;ne++){let Be=ee.createRadialGradient(0,0,0,0,0,1);Be.addColorStop(0,"rgba(160,165,255,0.16)"),Be.addColorStop(1,"rgba(160,165,255,0)"),ee.save(),ee.translate(40+Ze(ne,5)*430,90+Ze(ne,6)*80),ee.scale(60+Ze(ne,7)*90,30+Ze(ne,8)*40),ee.fillStyle=Be,ee.beginPath(),ee.arc(0,0,1,0,7),ee.fill(),ee.restore()}ee.globalCompositeOperation="destination-in";let _e=ee.createLinearGradient(0,0,512,0);_e.addColorStop(0,"rgba(0,0,0,0)"),_e.addColorStop(.22,"#000"),_e.addColorStop(.78,"#000"),_e.addColorStop(1,"rgba(0,0,0,0)"),ee.fillStyle=_e,ee.fillRect(0,0,512,256);let ve=ee.createLinearGradient(0,0,0,256);return ve.addColorStop(0,"rgba(0,0,0,0)"),ve.addColorStop(.3,"#000"),ve.addColorStop(.7,"#000"),ve.addColorStop(1,"rgba(0,0,0,0)"),ee.fillStyle=ve,ee.fillRect(0,0,512,256),Ct(Y)})(),ie=[0,1,2,3,4,5].map(Y=>h(d(je,"#ffffff",tn,.8),Y<3?4:335)),Se=(()=>{let Y=In(2048,256),ee=Y.getContext("2d"),_e=ci.rng(9);ee.fillStyle="#070a24";for(let ve=0;ve<420;ve++){let ne=_e()*2048,Be=60+_e()*190,it=6+_e()*16,ht=(_e()-.5)*60;ee.beginPath(),ee.moveTo(ne-it,256),ee.quadraticCurveTo(ne+ht*.4,256-Be*.6,ne+ht,256-Be),ee.quadraticCurveTo(ne+ht*.4+it*.3,256-Be*.5,ne+it,256),ee.fill()}return ee.fillRect(0,236,2048,20),Ct(Y)})(),Le=h(new It(new Mn(2600*xt(pc),190*xt(pc)),new kn({map:Se,transparent:!0,depthWrite:!1,color:new De(.9,.9,1.1)})),500),Fe=new Wt(i,s,{type:dn,samples:0}),me=new Da(n,Fe);me.setSize(i,s),me.addPass(new Ua(r,o));let $e=new ks(new Ce(i/2,s/2),.62,.5,.96);me.addPass($e);let Ne=new zs({uniforms:{tDiffuse:{value:null},moon:{value:new Ce(.7,.83)},time:{value:0},dawn:{value:0},flash:{value:0},slow:{value:0},ca:{value:.0012},rays:{value:.45},vig:{value:.38},aspect:{value:i/s}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 moon; uniform float time,dawn,flash,slow,ca,rays,vig,aspect; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
      void main(){
        vec2 c = vUv-.5; vec2 off = c*ca*(1.+length(c)*2.);
        vec3 col = vec3(texture2D(tDiffuse, vUv+off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv-off).b);
        // moon god rays
        vec2 dlt = (vUv-moon)*(1./22.)*.92; vec2 uv=vUv; float decay=1., ill=0.;
        for(int i=0;i<22;i++){ uv-=dlt; vec3 s=texture2D(tDiffuse, uv).rgb; ill += max(0., dot(s, vec3(.3,.59,.11))-.62)*decay; decay*=.93; }
        col += mix(vec3(.55,.68,1.), vec3(1.,.7,.45), dawn) * ill * rays/22.;
        // grade: cool night, warm dawn, halo-hour slow motion tint
        float l = dot(col, vec3(.3,.59,.11));
        col = mix(col, col*vec3(.97,.97,1.04)+vec3(.004,.0,.012), .6*(1.-dawn));
        col = mix(col, col*vec3(1.1,.96,.86), dawn*.75); col = mix(col, (col-.5)*1.08+.5, dawn*.6);
        col = mix(col, mix(vec3(l), col, .7)*vec3(.95,1.,1.08), slow*.22);
        col += flash*vec3(.4,.4,.52);
        float v = smoothstep(.95, .25, length(c*vec2(aspect*.62, 1.))); col *= mix(1.-vig, 1., v);
        col += (h(vUv*vec2(1920.,1080.)+time)-.5)*.035;
        gl_FragColor = vec4(col, 1.);
      }`});me.addPass(Ne),me.addPass(new Na);for(let Y of[g,...m,...xe,...ie,E,A,Te,j])Y.material.depthTest=!1;let ot={lightning:[]};window.__dbg={girls:D,stones:b,mortAura:x,magnetRing:W,influence:H,P_glow:Me,fogs:ie,clouds:m,fg:Le,bats:xe,points:A,debris:Te,hemi:Oe,moonLight:ke,dawnLight:ct,scene:r,grade:Ne,bloom:$e};for(let Y=0;Y<40;Y++)ot.lightning.push(6+Y*9.3+Ze(Y,77)*4);function N(Y){o.aspect=i/s,o.fov=Y.fov||mc,o.updateProjectionMatrix(),o.position.set(Y.x||0,Y.y||0,Y.z||0),o.lookAt(Y.lx??(Y.x||0)*.55,Y.ly??(Y.y||0)*.55,-22),o.rotateZ(Y.roll||0)}function ue(Y,ee,_e,ve={x:0,y:0}){let ne=qt(Y,ee,_e);return ne.project(o),ve.x=(ne.x*.5+.5)*i,ve.y=(-ne.y*.5+.5)*s,ve}function q(Y,ee){let _e=new Ce(Y/i*2-1,-(ee/s)*2+1),ve=new Aa;ve.setFromCamera(_e,o);let ne=new yn(new O(0,0,1),at),Be=new O;return ve.ray.intersectPlane(ne,Be)?{x:Be.x/xt(at)+960,y:540-Be.y/xt(at)}:null}let K=new O;function se(Y,ee,_e,ve,ne){qt(ee,_e,ve,Y.position),Y.scale.set(ne*xt(ve),ne*xt(ve),1)}function pe(Y,ee,_e,ve={}){let ne=Y.t,Be=ve.dawn!=null?ve.dawn:Ht(((ne-Y.t0)/Y.shift-.45)/.55);Oe.intensity=br(.35,.36,Be),Oe.color.setHSL(br(.64,.05,Be),.55,br(.78,.78,Be)),ke.intensity=br(.55,.25,Be),ct.intensity=Be*Be*.75,g.material.opacity=(.55+.08*Math.sin(ne*1.3))*(1-Be*.8),m.forEach((L,C)=>{let X=(ne*(14+C*6)+C*520)%2400-240;se(L,X,150+C*38+Math.sin(ne*.2+C)*6,66-C,520+C*60),L.material.opacity=.55*(1-Be*.5)}),xe.forEach((L,C)=>{let X=110+Ze(C,1)*150,Q=(ne*X+Ze(C,2)*2600)%2600-340,oe=80+Ze(C,3)*300+Math.sin(ne*1.7+C)*20;se(L,Q,oe,40+Ze(C,4)*20,70+Ze(C,5)*40),L.material.map=he[Math.floor((ne*(8+Ze(C,6)*4)+C)%4)]}),ie.forEach((L,C)=>{let X=C>=3,Q=(ne*(18+C*7)+C*700)%2800-440,oe=X?15+C:26+C*4;se(L,Q,X?990+(C-3)*30:760+C*40,oe,X?1300:1700),L.scale.y*=.5,L.material.opacity=(X?.2:.38)*(1-Be*.7)});let it=0;E.visible=!1;for(let L of ot.lightning){let C=ne-L;if(C>=0&&C<.45&&(it=Math.max(it,(C<.06?1:C<.12?.25:C<.18?.8:Math.max(0,.5-C))*.6),C<.3)){E.visible=!0,ot.boltId!==L&&(a_(w,Ze(Math.floor(L),9)*1e3),p.map.needsUpdate=!0,ot.boltId=L);let X=150+Ze(Math.floor(L),3)*1100;qt(X,200,68,E.position),E.scale.set(260*xt(68),520*xt(68),1),p.opacity=C<.06||C>.12&&C<.2?1:.3}}Oe.intensity+=it*1.2;let ht=ee;for(let L of e_){let C=on[L],X=Y.graves[L],Q=D[L],oe=s_(X,ne),ge=oe?oe.light:0;if(Tt[L].intensity=oe?oe.alpha*(.5+ge*2.6):0,qt(C.impact.x,C.impact.y+120,qs[C.stone]-2.2,Tt[L].position),!oe){Q.mesh.visible=!1,Q.beam.material.opacity=0;continue}let Ae=C.rise.base-C.rise.h,Pe=C.rise.ground-Ae+30,fe=n_(oe.rise),ze=(1-fe)*Pe-oe.lift,et=Math.sin(ne*2.4+L*1.7);Q.mesh.visible=!0,qt(C.rise.x,C.rise.base+ze,Q.d,Q.mesh.position),Q.mesh.position.y=(540-(C.rise.base+ze))*xt(Q.d),Q.mesh.scale.set(1+(1-oe.rise)*-.07+oe.pop*.05,1+Math.sin(oe.rise*Math.PI)*.07+et*.006+oe.pop*.04,1),Q.mesh.rotation.z=Math.sin(ne*1.3+L)*.008,Q.mat.opacity=oe.alpha,Q.mat.emissiveIntensity=.8+ge*.22,se(Q.beam,C.rise.x,C.rise.ground-260,Q.d+.15,900),Q.beam.scale.y*=1.5,Q.beam.material.opacity=Ht(oe.alpha*(.12+ge*.5))}let Ye=Y.mort,re=(ne-Ye.slashT)/Gn.SLASH_T,be=ne-Ye.hitT,Ge=Ht(Ye.vx/3800,-.3,.3),rt=re>=0&&re<1?Fa(re)*Math.PI*2:0;qt(Ye.x,Ye.y+Math.sin(ne*2.3)*8,at,_.position),_.rotation.z=-Ge-rt;let yt=Math.abs(Ye.vy)/3e4;if(_.scale.set(1-yt+(re>=0&&re<1?.12*Math.sin(re*Math.PI):0),1+yt,1),R.emissiveIntensity=.82+(be>=0&&be<Gn.INVULN&&Math.sin(be*40)>0?.6:0),R.opacity=be>=0&&be<Gn.INVULN&&Math.sin(be*40)>0?.45:1,se(x,Ye.x,Ye.y,at+.2,520),qt(Ye.x,Ye.y,at-1.5,F.position),F.intensity=1.1,T.visible=re>=0&&re<1.2,T.visible){qt(Ye.x,Ye.y,at-.05,T.position);let L=Gn.SLASH_R*2.1*xt(at)*(.7+.4*Fa(re));T.scale.set(L,L,1),T.rotation.z=-Fa(re)*Math.PI*2.6,T.material.opacity=1-Ht((re-.6)/.6)}let ut=L=>Y.powers[L]>ne,Gt=L=>Y.powers[L]-ne;B.forEach((L,C)=>{if(L.visible=ut("odette"),!L.visible)return;let X=ne*3.2+C/6*Math.PI*2,Q=Ht(Gt("odette")/.4);se(L,Ye.x+Math.cos(X)*Gn.THORN_R*Q,Ye.y+Math.sin(X)*Gn.THORN_R*Q,at-.1,64),L.material.rotation=X}),P.visible=ut("falon"),P.visible&&se(P,Ye.x,Ye.y-150+Math.sin(ne*3)*6,at-.1,150),W.visible=ut("vera"),W.visible&&(se(W,Ye.x,Ye.y,at+.1,840*(.92+.08*Math.sin(ne*6))),W.material.opacity=.16),H.visible=ut("rowena"),H.visible&&(se(H,Ye.x,Ye.y,at+.1,Gn.INFL_R*2.2*(.95+.05*Math.sin(ne*7))),H.material.opacity=.3),ae.reset(),Me.reset(),le.reset(),Ue.reset();let S=[];for(let L of Y.souls){let C=1,X=at;if((L.state==="lost"||L.state==="stolen")&&(C=1-Ht((ne-L.lostT)/1)),L.state==="done")continue;if(L.state==="dive"){let et=Ht((ne-L.diveT)/Gn.DIVE);X=br(at,qs[on[L.target].stone]-.4,et*et)}if(C<=.01)continue;let Q=L.type===ci.RARE?"#ffffff":on[L.type].glow,oe=1+Math.sin(ne*9+L.id)*.06,ge=L.state==="stolen"?L.y-(ne-L.lostT)*200:L.y,Ae=L.trail||[];for(let et=0;et<Ae.length;et++){let mt=Ae[et],zt=ne-mt.t;if(zt>.4)continue;let tt=Me.get();tt.material.map=ye[L.type],se(tt,mt.x,mt.y,X+.05,(60-zt*90)*oe),tt.material.opacity=C*(.5-zt),tt.material.color.setRGB(1,1,1)}let Pe=Me.get();Pe.material.map=ye[L.type],se(Pe,L.x,ge,X+.02,230*oe),Pe.material.opacity=.9*C,Pe.material.color.setRGB(1.3,1.3,1.3);let fe=Me.get();fe.material.map=u,se(fe,L.x,ge,X+.01,110),fe.material.opacity=.6*C,fe.material.color.setRGB(1.4,1.4,1.4);let ze=ae.get();ze.material.map=G[L.type],se(ze,L.x,ge,X,78*oe),ze.material.opacity=C,ze.material.rotation=L.type===ci.RARE?ne*3:0,S.push({x:L.x,y:ge,d:X,c:Q,w:(L.state==="carried"?2:1)*C})}for(let L of Y.bots){let C=L.state!=="hunt",X=C?1-Ht((ne-L.deadT)/.35):1;if(X<=.01)continue;let Q=Ze(Math.floor(ne*24),L.id)-.5,oe=L.trail||[];for(let Ae=0;Ae<oe.length;Ae+=2){let Pe=oe[Ae],fe=ne-Pe.t;if(fe>.35)continue;let ze=Me.get();ze.material.map=we,se(ze,Pe.x,Pe.y,at+.05,70-fe*120),ze.material.opacity=X*(.35-fe),ze.material.color.setRGB(1,1,1)}for(let[Ae,Pe]of[[we,-5],[qe,5]]){let fe=Me.get();fe.material.map=Ae,se(fe,L.x+Pe+Q*10,L.y,at+.03,150),fe.material.opacity=.55*X,fe.material.color.setRGB(1.2,1.2,1.2)}let ge=le.get();se(ge,L.x+Q*6,L.y,at,84*(C?1+(1-X)*.6:1)),ge.material.opacity=X,ge.material.rotation=Q*.15,S.push({x:L.x,y:L.y,d:at,c:"#ff3a5a",w:.6*X})}for(let L of Y.cups){let C=L.state==="got"?1-Ht((ne-L.gotT)/.5):1,X=Ue.get();se(X,L.x,L.y-(L.state==="got"?(ne-L.gotT)*120:0),at,74),X.material.opacity=C,X.material.rotation=Math.sin(ne*3+L.id)*.2;let Q=Me.get();Q.material.map=pt,se(Q,L.x,L.y,at+.02,160),Q.material.opacity=.6*C,Q.material.color.setRGB(1,1,1)}ae.finish(),Me.finish(),le.finish(),Ue.finish(),S.sort((L,C)=>C.w-L.w),Qe.forEach((L,C)=>{let X=S[C];if(!X){L.intensity=0;return}qt(X.x,X.y,X.d-1.2,L.position),L.color.set(X.c),L.intensity=2.2*X.w}),wt(Y,ht,ne),j.visible=!1;for(let L of ht){let C=ne-L.t;L.type==="fullhouse"&&C>=0&&C<.9&&(j.visible=!0,se(j,960,560,at+1,200+Fa(C/.9)*3e3),j.material.opacity=(1-C/.9)*.35,it=Math.max(it,(1-C/.3)*.22))}qt(960,1025,pc,Le.position),Le.position.x+=Math.sin(ne*.6)*.02,N(ve.camera||He(Y,ne));let U=new O;qt(1342,182,69,U).project(o),Ne.uniforms.moon.value.set(U.x*.5+.5,U.y*.5+.5),Ne.uniforms.time.value=_e*60%1e3,Ne.uniforms.dawn.value=Be,Ne.uniforms.flash.value=it,Ne.uniforms.slow.value=ut("falon")?Ht(Gt("falon")/.3):0;let V=0;for(let L of ht){let C=ne-L.t;(L.type==="hit"||L.type==="steal")&&C>=0&&C<.4&&(V=Math.max(V,1-C/.4)),(L.type==="fullhouse"||L.type==="special")&&C>=0&&C<.5&&(V=Math.max(V,.7*(1-C/.5)))}return Ne.uniforms.ca.value=.001+V*.0035,{dawn:Be,flash:it}}function He(Y,ee){let _e=Y.mort;return{x:(_e.x-960)*xt(at)*.1,y:(540-_e.y)*xt(at)*.06+.05,z:0}}function wt(Y,ee,_e){let ve=0,ne=0,Be=new O,it=(re,be,Ge,rt,yt,ut,Gt,S)=>{ve>=Ft||(qt(re,be,Ge,Be),Je.set([Be.x,Be.y,Be.z],ve*3),Ie.set([rt,yt,ut,Gt],ve*4),gt[ve]=S*xt(Ge),ve++)},ht=(re,be,Ge,rt,yt,ut,Gt,S)=>{ne>=600||(qt(re,be,Ge,Be),k.set([Be.x,Be.y,Be.z],ne*3),J.set([rt,yt,ut,Gt],ne*4),te[ne]=S*xt(Ge),ne++)},Ye=new De;for(let re of ee){let be=_e-re.t;if(!(be<0||be>1.6)){if(re.type==="rise"||re.type==="pop"||re.type==="special"){let Ge=on[re.g],rt=qs[Ge.stone]-.5,yt=re.type==="pop"?26:60;Ye.set(Ge.glow);for(let ut=0;ut<yt;ut++){let Gt=-Math.PI*(.05+.9*Ze(re.id,ut)),S=260+Ze(re.id,ut+50)*620,U=.7+Ze(re.id,ut+90)*.7;if(be>U)continue;let V=1-be/U,L=Ge.impact.x+Math.cos(Gt)*S*be,C=Ge.impact.y+10+Math.sin(Gt)*S*be+640*be*be,X=ut%4===0;it(L,C,rt,X?1.6:Ye.r*1.6,X?1.6:Ye.g*1.6,X?1.6:Ye.b*1.6,V,16+Ze(re.id,ut+130)*22)}if(re.type!=="pop")for(let ut=0;ut<26;ut++){let Gt=-Math.PI*(.15+.7*Ze(re.id,ut+300)),S=240+Ze(re.id,ut+320)*330;be>.9||ht(Ge.impact.x+Math.cos(Gt)*S*be,Ge.impact.y+Math.sin(Gt)*S*be+1300*be*be,rt,.16,.12,.28,1-be/.9,9+Ze(re.id,ut+340)*9)}}if(re.type==="botkill"||re.type==="convert"){let Ge=re.type==="convert";for(let rt=0;rt<34;rt++){let yt=Ze(re.id,rt)*Math.PI*2,ut=200+Ze(re.id,rt+9)*520,Gt=.5+Ze(re.id,rt+19)*.4;if(be>Gt)continue;let S=1-be/Gt,U=rt%2;Ge?it(re.x+Math.cos(yt)*ut*be,re.y+Math.sin(yt)*ut*be,at,.9,.6,1.8,S,18):ht(re.x+Math.cos(yt)*ut*be,re.y+Math.sin(yt)*ut*be+300*be*be,at,U?.2:1,U?1:.2,U?1:.55,S,10+Ze(re.id,rt+29)*10)}be<.25&&it(re.x,re.y,at,2,2,2.4,1-be/.25,260)}if(re.type==="hit"||re.type==="steal")for(let Ge=0;Ge<20;Ge++){let rt=Ze(re.id,Ge)*Math.PI*2,yt=300+Ze(re.id,Ge+9)*300;be>.6||it(re.x+Math.cos(rt)*yt*be,re.y+Math.sin(rt)*yt*be,at,1.8,.3,.5,1-be/.6,20)}if(re.type==="coffee")for(let Ge=0;Ge<18;Ge++){let rt=Ze(re.id,Ge)*Math.PI*2,yt=160+Ze(re.id,Ge+9)*200;be>.7||it(re.x+Math.cos(rt)*yt*be,re.y+Math.sin(rt)*yt*be,at,1.7,1.2,.6,1-be/.7,18)}if(re.type==="catch"){let Ge=Y.mort;if(be<.3)for(let rt=0;rt<10;rt++){let yt=rt/10*Math.PI*2;it(Ge.x+Math.cos(yt)*120*be/.3,Ge.y+Math.sin(yt)*120*be/.3,at,1.5,1.5,1.8,1-be/.3,16)}}}}for(let re=0;re<70;re++){let be=8+Ze(re,8)*6,Ge=(_e+Ze(re,9)*be)%be/be,rt=80+Ze(re,10)*1760+Math.sin(_e*.7+re)*30,yt=1040-Ge*820;Ye.set(on[re%5].glow),it(rt,yt,18+Ze(re,12)*14,Ye.r*1.4,Ye.g*1.4,Ye.b*1.4,Math.sin(Ge*Math.PI)*.7,10+Ze(re,11)*14)}if(Y.powers.morticia>_e)for(let re=0;re<24;re++){let be=_e*2+re*1.7,Ge=90+Ze(re,3)*80,rt=.5+.5*Math.sin(_e*9+re);it(Y.mort.x+Math.cos(be)*Ge,Y.mort.y+Math.sin(be)*Ge*.7,at-.2,1.8,1.4,.8,rt,12)}for(let re=ve;re<Ft;re++)Ie[re*4+3]=0;for(let re=ne;re<600;re++)J[re*4+3]=0;Ve.attributes.position.needsUpdate=Ve.attributes.color.needsUpdate=Ve.attributes.size.needsUpdate=!0,Ve.setDrawRange(0,Math.max(ve,1)),M.attributes.position.needsUpdate=M.attributes.color.needsUpdate=M.attributes.size.needsUpdate=!0,M.setDrawRange(0,Math.max(ne,1))}function Bt(){me.render()}function lt(Y,ee){i=Y,s=ee,n.setSize(Y,ee,!1),me.setSize(Y,ee),$e.resolution.set(Y/2,ee/2),Ne.uniforms.aspect.value=Y/ee,Re.uniforms.scale.value=$.uniforms.scale.value=ee/(2*Ba),o.aspect=Y/ee,o.updateProjectionMatrix()}return{scene:r,camera:o,update:pe,render:Bt,resize:lt,project:ue,screenToPlay:q,setCamera:N,u:xt,wp:qt,PLAY_D:at,STONE_D:qs,get W(){return i},get H(){return s}}}function s_(n,e){if(n.state==="empty")return null;let t=1,i=1,s=0,r=0,o=0;if((n.state==="rising"||n.state==="risen")&&(t=Ht((e-n.riseT)/Gn.RISE),o=1-Ht((e-n.riseT-.2)/.9)*.7),n.state==="leaving"){let a=Ht((e-n.leaveT)/Gn.LEAVE);i=1-mu(a),s=(n.fh?160:60)*mu(a),o=.4+a*.8}for(let a of n.pops){let l=e-a;l>=0&&l<.45&&(r=Math.max(r,Math.sin(l/.45*Math.PI)*(1-l/.45))),l>=0&&l<.6&&(o=Math.max(o,.9-l))}return{rise:t,alpha:i,lift:s,pop:r,light:o}}function gu(n,e,t){let i=In(t,t),s=i.getContext("2d");return Ki.drawEmblem(s,n,t/2,t/2,t*.8,e,"#160c2e",t*.05),i}function _u(n){let t=In(128,128),i=t.getContext("2d"),s=56;if(n===ci.RARE){i.save(),i.beginPath(),i.arc(64,64,s,0,7),i.clip(),i.fillStyle="#f4f1ea",i.fillRect(0,0,128,128),i.translate(64,64),i.fillStyle="#0b0b0f",i.beginPath();for(let a=0;a<28;a+=.08)i.lineTo(Math.cos(a)*(2+a*2.1),Math.sin(a)*(2+a*2.1));for(let a=28;a>0;a-=.08)i.lineTo(Math.cos(a)*(8+a*2.1),Math.sin(a)*(8+a*2.1));return i.fill(),i.restore(),i.lineWidth=5,i.strokeStyle="#e8213c",i.beginPath(),i.arc(64,64,s,0,7),i.stroke(),t}let r=on[n],o=i.createRadialGradient(64-s*.3,64-s*.35,s*.1,64,64,s);return o.addColorStop(0,"#ffffff"),o.addColorStop(.38,Ki.mix(r.color,"#ffffff",.35)),o.addColorStop(1,Ki.mix(r.color,"#3a1f6b",.35)),i.beginPath(),i.arc(64,64,s,0,7),i.fillStyle=o,i.fill(),i.lineWidth=4,i.strokeStyle="rgba(255,255,255,0.95)",i.stroke(),Ki.drawEmblem(i,r.emblem,64,66,62,"#ffffff","#1d1238",5),t}function r_(){let e=In(128,128),t=e.getContext("2d"),i=54,s=t.createRadialGradient(54,50,6,64,64,i);s.addColorStop(0,"#9aa3b8"),s.addColorStop(.6,"#4a5068"),s.addColorStop(1,"#1d2030"),t.beginPath(),t.arc(64,64,i,0,7),t.fillStyle=s,t.fill(),t.lineWidth=4,t.strokeStyle="#ff3a5a",t.stroke(),t.fillStyle="rgba(0,0,0,0.25)";for(let o=14;o<118;o+=6)t.fillRect(10,o,108,2);let r=[[0,1,1,0,1,1,0],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,1,1,1,1,1,0],[0,0,1,1,1,0,0],[0,0,0,1,0,0,0]];return t.fillStyle="#ff3a5a",r.forEach((o,a)=>o.forEach((l,c)=>{l&&t.fillRect(36+c*8,34+a*8,7,7)})),t.font="900 20px Montserrat",t.textAlign="center",t.fillStyle="#e8ecff",t.fillText("BOT",64,104),e}function a_(n,e){let t=n.getContext("2d");t.clearRect(0,0,n.width,n.height);let i=ci.rng(Math.floor(e)+1),s=[[128+(i()-.5)*40,0]],r=s[0][0];for(let o=24;o<=512;o+=24)r+=(i()-.5)*46,s.push([r,o]);for(let[o,a]of[[16,.12],[7,.35],[2.5,1]])t.strokeStyle=`rgba(220,225,255,${a})`,t.lineWidth=o,t.lineJoin="round",t.beginPath(),s.forEach(([l,c],u)=>u?t.lineTo(l,c):t.moveTo(l,c)),t.stroke()}var Ha=yr(),Bu=Xs(),Ga=Tu(),Er=Iu(),E_=Fu(),A_=["plate","plate_n","cemetery","mort","mort_n","mug","bella_900","wordmark","mortuary","orbituary","encore_logo","girl_1","girl_2","girl_3","girl_4","girl_5","girl_1_n","girl_2_n","girl_3_n","girl_4_n","girl_5_n","face_nft_01","face_nft_02","face_nft_03","face_nft_04","face_nft_05","face_nft_06","face_bella","stone_A","stone_B","stone_C","stone_D","stone_E","stone_A_n","stone_B_n","stone_C_n","stone_D_n","stone_E_n"],C_={plate:"jpg",plate_n:"jpg",cemetery:"jpg"},R_=[["Montserrat","montserrat-latin-600-normal","600"],["Montserrat","montserrat-latin-700-normal","700"],["Montserrat","montserrat-latin-800-normal","800"],["Montserrat","montserrat-latin-900-normal","900"],["Montserrat","montserrat-latin-500-normal","500"],["Montserrat Italic","montserrat-latin-600-italic","600"],["Fraktur","unifrakturmaguntia-latin-400-normal","400"],["Inter","inter-latin-400-normal","400"],["Inter","inter-latin-500-normal","500"],["Inter","inter-latin-700-normal","700"],["Silkscreen","silkscreen-latin-400-normal","400"],["JBMono","jetbrains-mono-latin-400-normal","400"]],P_=window.REBORN_BASE||".",_c=n=>window.REBORN_INLINE&&window.REBORN_INLINE[n]||`${P_}/${n}`;async function I_(){await Promise.all(R_.map(async([e,t,i])=>{let s=new FontFace(e,`url(${_c(`fonts/${t}.ttf`)})`,{weight:i});await s.load(),document.fonts.add(s)}));let n={};return await Promise.all(A_.map(e=>new Promise((t,i)=>{let s=new Image;s.onload=()=>{n[e]=s,t()},s.onerror=()=>i(new Error("missing "+e)),s.src=_c(`assets/${e}.${C_[e]||"png"}`)}))),n.bella=n.bella_900,n.encore=n.encore_logo,n.cemetery=n.cemetery||n.plate,n}var L_=(n,e)=>{let t=document.createElement("canvas");return t.width=n,t.height=e,t};async function D_(){let n=await I_(),e=Bu.buildSprites(n,L_),t=new URLSearchParams(location.search),i=t.get("capture"),s=i==="short",r=s?1080:1920,o=s?1920:1080,a=document.getElementById("gl"),l=document.getElementById("ui");a.width=l.width=r,a.height=l.height=o;let c=new ga({canvas:a,antialias:!0,preserveDrawingBuffer:!!i,powerPreference:"high-performance"});c.setPixelRatio(1),c.setSize(r,o,!1),c.localClippingEnabled=!0,c.toneMapping=Fn,c.outputColorSpace=Jt;let u=vu(c,n,e,r,o),f=l.getContext("2d"),h={A:n,S:e,sc3:u,ctx:f,W:r,H:o,renderer:c};if(i){window.CAPTURE=E_.makeCapture(h,i,Er,Ga),document.body.classList.add("capture"),window.READY=!0;return}U_(h)}function U_(n){let{A:e,S:t,sc3:i,ctx:s,W:r,H:o}=n,a=document.getElementById("ui"),l="title",c=Ha.newGame({seed:77,endless:!0,shift:9999,autoplay:!0}),u=0,f=performance.now(),h=0,d={x:960,y:320,slash:!1,keys:{}},g=!1,v=D=>document.getElementById(D),m=N_();function p(){c=Ha.newGame({seed:Math.random()*1e9|0,endless:!0,shift:60,mortX:960,mortY:320}),d.x=960,d.y=320,l="play",u=0,g=!1,v("title").hidden=!0,v("results").hidden=!0,m.start()}v("play").onclick=()=>{p()},v("again").onclick=()=>p(),v("board").onclick=()=>{g=!g,v("board").textContent=g?"Orbituary":"Leaderboard"},v("share").onclick=async()=>{let D=c.score,R=`I raised ${c.reborn} Gothamistas before dawn in REBORN BY DAWN \u{1F5A4} Score ${D.toLocaleString("en-US")} \xB7 ${c.banished} bots banished. #PaxGothamista #RestInPax`;try{await navigator.clipboard.writeText(R),v("share").textContent="Copied!"}catch{v("share").textContent="Copy failed"}setTimeout(()=>v("share").textContent="Copy result",1500)};let E=D=>{let R=a.getBoundingClientRect();return{sx:(D.clientX-R.left)/R.width*r,sy:(D.clientY-R.top)/R.height*o}},w=null;a.addEventListener("pointermove",D=>{if(l!=="play")return;let{sx:R,sy:I}=E(D),_=i.screenToPlay(R,I);_&&(d.x=_.x,d.y=_.y)}),a.addEventListener("pointerdown",D=>{if(l!=="play")return;let R=E(D);w={...R,t:performance.now(),type:D.pointerType};let I=i.screenToPlay(R.sx,R.sy);I&&(d.x=I.x,d.y=I.y),D.pointerType==="mouse"&&(d.slash=!0)}),a.addEventListener("pointerup",D=>{l!=="play"||!w||(w.type!=="mouse"&&performance.now()-w.t<220&&(d.slash=!0),w=null)}),addEventListener("keydown",D=>{d.keys[D.code]=!0,D.code==="Space"&&(D.preventDefault(),l==="play"?d.slash=!0:l==="title"&&p()),D.code==="KeyM"&&m.toggle()}),addEventListener("keyup",D=>{d.keys[D.code]=!1});function b(D){let R=Math.min(.05,(D-f)/1e3);for(f=D,u+=R;u>=1/120;){u-=1/120;let _=null;if(l==="play"){let y=d.keys,T=(y.KeyD||y.ArrowRight?1:0)-(y.KeyA||y.ArrowLeft?1:0),B=(y.KeyS||y.ArrowDown?1:0)-(y.KeyW||y.ArrowUp?1:0);(T||B)&&(d.x=c.mort.x+T*260,d.y=c.mort.y+B*260),_={x:d.x,y:d.y,slash:d.slash},d.slash=!1}let x=c.events.length;Ha.step(c,1/120,_);for(let y=x;y<c.events.length;y++)m.sfx(c.events[y])}l==="play"&&c.over&&!h&&(h=D),l==="play"&&h&&D-h>2600&&(l="over",h=0,v("results").hidden=!1,m.stop());let I=Ha.snapshot(c);if(i.update(I,c.events,I.t,{}),i.render(),s.setTransform(1,0,0,1,0,0),s.clearRect(0,0,r,o),l==="play")Er.drawWorldText(s,i,I,c.events,{}),Bu.drawMoments(s,e,t,{events:c.events},I,I.t,r,o),Er.drawHUD2(s,e,t,I,c.events),Er.drawPassout(s,c.events,I.t,r,o);else if(l==="over"){let _=Ga.rows(c.score,Math.max(c.score,4e4)).findIndex(y=>y.you)+1,x={score:c.score,reborn:c.reborn,best:c.best,coffee:c.coffee,rank:_};g?Ga.leaderboard(s,e,t,5,c.score,r,o,!1):Ga.resultCard(s,e,t,4,x,r,o,!1)}else Er.drawWorldText(s,i,I,c.events,{names:!1});requestAnimationFrame(b)}requestAnimationFrame(b)}function N_(){let n=null,e={},t=null,i=!0,s=null,r=["music-loop","catch","rise","pop","slash","botkill","hit","coffee","fullhouse","special","mass","dawn","convert","steal"];async function o(){n||(n=new(window.AudioContext||window.webkitAudioContext),s=n.createGain(),s.connect(n.destination),await Promise.all(r.map(async l=>{try{let c=await fetch(_c(`audio/${l}.mp3`));e[l]=await n.decodeAudioData(await c.arrayBuffer())}catch{}})))}function a(l,c=1,u=1){if(!n||!i||!e[l])return;let f=n.createBufferSource();f.buffer=e[l],f.playbackRate.value=u;let h=n.createGain();return h.gain.value=c,f.connect(h).connect(s),f.start(),f}return{async start(){await o(),t&&t.stop(),t=a("music-loop",.55),t&&(t.loop=!0)},stop(){t&&(t.stop(),t=null),a("dawn",.8)},toggle(){i=!i,s&&(s.gain.value=i?1:0)},sfx(l){let c={catch:["catch",.5],rise:["rise",.9],pop:["pop",.7],slash:["slash",.6],botkill:["botkill",.7],hit:["hit",.9],steal:["steal",.8],coffee:["coffee",.8],fullhouse:["fullhouse",1],special:["special",1],mass:["mass",.8],convert:["convert",.7]}[l.type];c&&a(c[0],c[1],(l.type==="rise"||l.type==="pop")&&[1,1.12,1.26,1.33,1.5][l.g]||1)}}}D_().catch(n=>{console.error(n),document.body.insertAdjacentHTML("beforeend",`<pre style="color:#fff">${n.stack}</pre>`)});})();
