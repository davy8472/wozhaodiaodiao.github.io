var MovePoint=cc.Class({ctor:function(){this.pos=new Array,this.angle=0,this.pos.x=0,this.pos.y=0}});window.M_PI=3.1415926;var CGameLogic=cc.Class({ctor:function(){},CalcDistance:function(n,t,a,o){return Math.sqrt((n-a)*(n-a)+(t-o)*(t-o))},Combination:function(n,t){return this.Factorial(n)/(this.Factorial(t)*this.Factorial(n-t))},Factorial:function(n){for(var t=1,a=n,o=0;o<n;++o)t*=a,--a;return t},ActionLine:function(n,t,a){var o=cc.v2();o.x=a.x-t.x,o.y=a.y-t.y;var r,i=Math.sqrt(o.x*o.x+o.y*o.y);0<i&&(r=0<=o.y?Math.acos(o.x/i):-Math.acos(o.x/i));var c=i/n,e=new MovePoint;e.pos.x=t.x,e.pos.y=t.y,e.angle=r;var s=new MovePoint;return s.pos.x=a.x,s.pos.y=a.y,s.angle=r,cc.moveTo(c,cc.p(a.x,a.y))},GetAngleByTouchPoint:function(n,t){var a=1366-t.x,o=768-t.y,r=1366-n.x,i=768-n.y;return this.CalcAngle(r,i,a,o)},GetAngleByRadian:function(n){return 1*(57.3*n).toFixed(2)},GetRadianByAngle:function(n){return 1*(.018*n).toFixed(2)+300},CalcAngle:function(n,t,a,o){var r=this.CalcDistance(n,t,a,o);if(0==r)return 0;var i=(n-a)/r,c=Math.acos(i);return t<o&&(c=2*M_PI-c),c+=2*M_PI},CalcAngle3:function(n,t,a,o){var r=this.CalcDistance(n,t,a,o);if(0==r)return 0;var i=Math.abs(n-a)/r,c=Math.asin(i);return n<=a?t<=o?c=c:o<t&&(c=M_PI-c):a<n&&(o<t?c=M_PI+c:t<=o&&(c=-c)),c},CalcAngle2:function(n,t,a,o){var r=0,i=this.CalcDistance(n,t,a,o),c=null;return 0!=i?(c=(n-a)/i,r=0<=t-o?Math.acos(c):-Math.acos(c)):r=0,r},SwitchFishAngle:function(n){var t=n.getRotation();t<0&&(t+=360),n.scaleY=90<=t&&t<=270?-1:1},GetAngleByTouchPoint:function(n,t){var a=768-t.x,o=768-t.y,r=1366-n.x,i=768-n.y;return this.CalcAngle(r,i,a,o)},GetRandomNum:function(n){return parseInt(Math.random()*n)},GetRandomIndexArray:function(n){var t,a,o,r=[n];for(n=void 0===n?9:n,t=0;t<n;t++)r[t]=t;for(t=0;t<n;t++)(a=parseInt(Math.random()*(n-t))+t)!=t&&(o=r[t],r[t]=r[a],r[a]=o);return r}});window.g_GameLogic=new CGameLogic;