(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),c=n(8),i=n.n(c),a=(n(14),n(2)),s=n(3),l=n(4),u=n(5),f=n(1),h=n(6);n(16);function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var d=function(t){Object(l.a)(n,t);var e=p(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("i",{className:"Die fas fa-dice-".concat(this.props.face," ").concat(this.props.rolling&&"shaking")})}}]),n}(r.Component);n(18);function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var m=function(t){Object(l.a)(n,t);var e=v(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).state={die1:"one",die2:"one",rolling:!1},r.roll=r.roll.bind(Object(h.a)(r)),r}return Object(s.a)(n,[{key:"roll",value:function(){var t=this,e=this.props.sides[Math.floor(Math.random()*this.props.sides.length)],n=this.props.sides[Math.floor(Math.random()*this.props.sides.length)];this.setState({die1:e,die2:n,rolling:!0}),setTimeout(function(){t.setState({rolling:!1})},1e3)}},{key:"render",value:function(){return o.a.createElement("div",{className:"RollDice"},o.a.createElement("div",{className:"RollDice-container"},o.a.createElement(d,{face:this.state.die1,rolling:this.state.rolling}),o.a.createElement(d,{face:this.state.die2,rolling:this.state.rolling})),o.a.createElement("button",{onClick:this.roll,disabled:this.state.rolling},this.state.rolling?"Rolling...":"Roll Dice!"))}}]),n}(r.Component);m.defaultProps={sides:["one","two","three","four","five","six"]};var y=m;n(20);function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var g=function(t){Object(l.a)(n,t);var e=b(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(y,null))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(22)}},[[9,2,1]]]);
//# sourceMappingURL=main.80f5ab97.chunk.js.map