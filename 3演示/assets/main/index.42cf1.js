window.__require=function t(e,o,n){function r(i,p){if(!o[i]){if(!e[i]){var u=i.split("/");if(u=u[u.length-1],!e[u]){var l="function"==typeof __require&&__require;if(!p&&l)return l(u,!0);if(c)return c(u,!0);throw new Error("Cannot find module '"+i+"'")}i=u}var a=o[i]={exports:{}};e[i][0].call(a.exports,function(t){return r(e[i][1][t]||t)},a,a.exports,t,e,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({"1 - 001":[function(t,e,o){"use strict";cc._RF.push(e,"81993uJv8tJ2act9pIsIMcl","1 - 001");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=i.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return r(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_END,function(){cc.director.loadScene("scene/bird")})},c([u(cc.Label)],e.prototype,"label",void 0),c([u],e.prototype,"text",void 0),c([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],"1 - 002":[function(t,e,o){"use strict";cc._RF.push(e,"3a6f3mOLdJOoa5nE7t2Jsao","1 - 002");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=i.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return r(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_END,function(){cc.director.loadScene("beginBirdGame")})},c([u(cc.Label)],e.prototype,"label",void 0),c([u],e.prototype,"text",void 0),c([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],1:[function(t,e,o){"use strict";cc._RF.push(e,"025d0cftKZA4qnz+d712rZE","1");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=i.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return r(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_END,function(){cc.director.loadScene("beginPlane")})},c([u(cc.Label)],e.prototype,"label",void 0),c([u],e.prototype,"text",void 0),c([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],beginGame:[function(t,e,o){"use strict";cc._RF.push(e,"1245a5p/C5MK7rJNRQHhdxT","beginGame");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=i.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return r(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_END,function(){cc.director.loadScene("hitbird")})},c([u(cc.Label)],e.prototype,"label",void 0),c([u],e.prototype,"text",void 0),c([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],bgControl:[function(t,e,o){"use strict";cc._RF.push(e,"6885dh2T4VJ9aJ3CYgukY5j","bgControl");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.start=function(){},e.prototype.update=function(t){for(var e=0,o=this.node.children;e<o.length;e++){var n=o[e];n.y-=200*t,n.y<-1624&&(n.y+=3248)}},c([p],e)}(cc.Component));o.default=u,cc._RF.pop()},{}],bgC:[function(t,e,o){"use strict";cc._RF.push(e,"342afVCIF9ACYZ2KQKAN31S","bgC");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./birdC"),p=cc._decorator,u=p.ccclass,l=p.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e.speed=4,e.width=288,e.bird=null,e}return r(e,t),e.prototype.start=function(){for(var t=this,e=0,o=this.node.children;e<o.length;e++)o[e].on(cc.Node.EventType.TOUCH_START,function(){t.bird.fly()})},e.prototype.update=function(t){for(var e=0,o=this.node.children;e<o.length;e++){var n=o[e];n.x-=this.speed*t,n.x<-this.width&&(n.x+=2*this.width)}},c([l(cc.Label)],e.prototype,"label",void 0),c([l],e.prototype,"text",void 0),c([l],e.prototype,"speed",void 0),c([l],e.prototype,"width",void 0),c([l(i.default)],e.prototype,"bird",void 0),c([u],e)}(cc.Component);o.default=a,cc._RF.pop()},{"./birdC":"birdC"}],birdControl:[function(t,e,o){"use strict";cc._RF.push(e,"794f0/XM2NMzapjFzrhHdby","birdControl");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=(i.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.hp=1,e.speed=180,e.biFlyY=195,e.OneScore=100,e}return r(e,t),e.prototype.start=function(){var t=this;this.fly(),this.node.on(cc.Node.EventType.TOUCH_START,function(){if(1==t.hp){t.hp--;var e=cc.find("Canvas/Fraction/string").getComponent(cc.Label),o=(parseInt(e.string)+t.OneScore).toString();e.string=o}t.die()})},e.prototype.fly=function(){var t=this,e=Math.floor(220*Math.random()-110),o=cc.v2(e,this.biFlyY),n=o.sub(cc.v2(this.node.position)).mag();o.x>this.node.position.x&&(this.node.scaleX=-1);var r=cc.sequence(cc.moveBy(n/this.speed,o),cc.callFunc(function(){(t.node.position.y=t.biFlyY)&&(t.node.destroy(),cc.find("Canvas/endGame").active=!0)}));this.node.runAction(r)},e.prototype.die=function(){var t=this;this.node.stopAllActions(),this.node.getComponent(cc.Animation).stop(),cc.loader.loadRes("hitbird/birddie",cc.SpriteFrame,function(t,e){t?cc.error(t.message||t):this.node.getComponent(cc.Sprite).spriteFrame=e}.bind(this));var e=cc.moveTo(this.node.position.y/this.speed*2,cc.v2(this.node.position.x,0)),o=cc.sequence(e,cc.callFunc(function(){t.node.destroy()}));this.node.runAction(o)},c([p],e)}(cc.Component));o.default=u,cc._RF.pop()},{}],birdC:[function(t,e,o){"use strict";cc._RF.push(e,"218e82lSm1LUKRvbEM/eSia","birdC");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=i.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return r(e,t),e.prototype.onLoad=function(){cc.director.getPhysicsManager().enabled=!0},e.prototype.start=function(){},e.prototype.fly=function(){this.getComponent(cc.RigidBody).linearVelocity=cc.v2(0,150)},e.prototype.onBeginContact=function(t,e,o){1==o.tag?console.log("\u52a0\u5206"):console.log("\u6b7b\u4ea1")},c([u(cc.Label)],e.prototype,"label",void 0),c([u],e.prototype,"text",void 0),c([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],birdManager:[function(t,e,o){"use strict";cc._RF.push(e,"d0a31lILllD3JmRKyajzfAj","birdManager");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=i.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.birdPre=null,e.fraction=null,e}return r(e,t),e.prototype.start=function(){var t=this;this.schedule(function(){var e=cc.instantiate(t.birdPre);e.setParent(t.node),e.x=200*Math.random()-100,e.y=0},1)},c([u(cc.Prefab)],e.prototype,"birdPre",void 0),c([u(cc.Label)],e.prototype,"fraction",void 0),c([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],bulletControl:[function(t,e,o){"use strict";cc._RF.push(e,"be1e8iBo9JJ16LEnCbWnbIm","bulletControl");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.start=function(){},e.prototype.update=function(t){this.node.y+=800*t,this.node.y>1700&&this.node.destroy()},e.prototype.die=function(){this.node.destroy()},c([p],e)}(cc.Component));o.default=u,cc._RF.pop()},{}],"endGame ":[function(t,e,o){"use strict";cc._RF.push(e,"c837bRCz41Bg5FUVCzvATMH","endGame ");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=i.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return r(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_END,function(){cc.director.loadScene("beginBirdGame")})},c([u(cc.Label)],e.prototype,"label",void 0),c([u],e.prototype,"text",void 0),c([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],endPlane:[function(t,e,o){"use strict";cc._RF.push(e,"95769Cew+xGqIh7EhMn1jub","endPlane");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=i.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return r(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_END,function(){cc.director.loadScene("scene/beginPlane")})},c([u(cc.Label)],e.prototype,"label",void 0),c([u],e.prototype,"text",void 0),c([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],enemyControl:[function(t,e,o){"use strict";cc._RF.push(e,"3240dDnhqBL8a5ABI6Qow0q","enemyControl");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./bulletControl"),p=t("./playerControl"),u=cc._decorator,l=u.ccclass,a=(u.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.hp=1,e}return r(e,t),e.prototype.start=function(){},e.prototype.update=function(t){this.node.y-=300*t,this.node.y<-56&&this.node.destroy()},e.prototype.onCollisionEnter=function(t){if(1==t.tag){if(1==this.hp){this.hp--,t.getComponent(i.default).die(),this.node.getComponent(cc.Animation).play("dies"),this.node.getComponent(cc.AudioSource).play();var e=cc.find("Label").getComponent(cc.Label),o=(parseInt(e.string)+1).toString();e.string=o,this.scheduleOnce(function(){this.node.destroy()},1.5)}}else 0==t.tag&&(this.node.getComponent(cc.Animation).play("dies"),this.node.getComponent(cc.AudioSource).play(),this.scheduleOnce(function(){this.node.destroy()},1.5),t.getComponent(p.default).die())},c([l],e)}(cc.Component));o.default=a,cc._RF.pop()},{"./bulletControl":"bulletControl","./playerControl":"playerControl"}],enemyManager:[function(t,e,o){"use strict";cc._RF.push(e,"a7b17KumCNLDYiA6ZGgMFwz","enemyManager");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=i.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.enemy=null,e}return r(e,t),e.prototype.start=function(){var t=this;this.schedule(function(){var e=cc.instantiate(t.enemy);e.setParent(cc.director.getScene()),e.y=1690,e.x=700*Math.random()+100},2)},c([u(cc.Prefab)],e.prototype,"enemy",void 0),c([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],pipeC:[function(t,e,o){"use strict";cc._RF.push(e,"5abe8QiuqRBgYLfPfTosuoI","pipeC");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=i.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e.speed=50,e}return r(e,t),e.prototype.start=function(){},e.prototype.update=function(t){for(var e=0,o=this.node.children;e<o.length;e++){var n=o[e];n.x-=this.speed*t,n.x<-50&&(n.x+=576,n.y=150*Math.random()+450)}},c([u(cc.Label)],e.prototype,"label",void 0),c([u],e.prototype,"text",void 0),c([u],e.prototype,"speed",void 0),c([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],playerControl:[function(t,e,o){"use strict";cc._RF.push(e,"64fbaXvKWJL56dLAaRD/Jtu","playerControl");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,u=i.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bullet=null,e}return r(e,t),e.prototype.start=function(){var t=this;cc.director.getCollisionManager().enabled=!0,this.node.on(cc.Node.EventType.TOUCH_MOVE,function(e){t.node.setPosition(e.getLocation())}),this.schedule(function(){var e=cc.instantiate(t.bullet);e.setParent(cc.director.getScene()),e.x=t.node.x,e.y=t.node.y+60,t.node.getComponent(cc.AudioSource).play()},.3)},e.prototype.update=function(){},e.prototype.die=function(){cc.find("enemys").getComponent("enemyManager").enabled=!1,this.schedule(function(){cc.director.loadScene("scene/endPlane")},2)},c([u(cc.Prefab)],e.prototype,"bullet",void 0),c([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{}]},{},["bgC","birdC","pipeC","beginGame","birdControl","birdManager","endGame ","1 - 001","1 - 002","1","bgControl","bulletControl","endPlane","enemyControl","enemyManager","playerControl"]);