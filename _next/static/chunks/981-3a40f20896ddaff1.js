"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[981],{3193:function(e,s,t){t.d(s,{Z:function(){return f}});var r=t(5893),l=t(7294);function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,s){for(var t=0;t<s.length;t++){var r=s[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,s){return!s||"object"!==d(s)&&"function"!==typeof s?n(e):s}function a(e,s){return(a=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e})(e,s)}var d=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=o(e);if(s){var l=o(this).constructor;t=Reflect.construct(r,arguments,l)}else t=r.apply(this,arguments);return c(this,t)}}var f=function(e){!function(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&a(e,s)}(c,e);var s,t,l,o=h(c);function c(){var e,s,t,r;return function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,c),e=o.call(this),s=n(e),r=function(){window.scrollTo(0,0)},(t="scrollTop")in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,e.state={scrollBtn:!1},e.handleScroll=e.handleScroll.bind(n(e)),e.scrollTop=e.scrollTop.bind(n(e)),e}return s=c,(t=[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){window.scrollY>70?this.setState({scrollBtn:!0}):window.scrollY<70&&this.setState({scrollBtn:!1})}},{key:"render",value:function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("footer",{className:"site-footer",children:(0,r.jsx)("div",{className:"site-footer__upper",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-3",children:(0,r.jsxs)("div",{className:"footer-widget footer-widget__about",children:[(0,r.jsx)("img",{src:"/assets/images/resources/logo-dark.png",width:"119",alt:"",className:"footer-widget__logo"}),(0,r.jsx)("p",{className:"footer-widget__contact",children:(0,r.jsx)("a",{href:"tel:888-666-0000",children:"888 666 0000"})}),(0,r.jsx)("p",{className:"footer-widget__contact",children:(0,r.jsx)("a",{href:"mailto:needhelp@example.com",children:"needhelp@example.com"})}),(0,r.jsxs)("p",{className:"footer-widget__contact",children:["855 road, broklyn street ",(0,r.jsx)("br",{})," new york 600"]})]})}),(0,r.jsxs)("div",{className:"col-lg-6 d-flex justify-content-between footer-widget__links-wrap",children:[(0,r.jsxs)("div",{className:"footer-widget",children:[(0,r.jsx)("h3",{className:"footer-widget__title",children:"Explore"}),(0,r.jsxs)("ul",{className:"footer-widget__links list-unstyled",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:"About"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:"Our Team"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:"Features"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:"Blog"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:"How It Works"})})]})]}),(0,r.jsxs)("div",{className:"footer-widget",children:[(0,r.jsx)("h3",{className:"footer-widget__title",children:"Services"}),(0,r.jsxs)("ul",{className:"footer-widget__links list-unstyled",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:"Speed Optimization "})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:"Marketing Analysis "})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:"SEO and Backlinks "})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:"Content Marketing"})})]})]}),(0,r.jsxs)("div",{className:"footer-widget",children:[(0,r.jsx)("h3",{className:"footer-widget__title",children:"Links"}),(0,r.jsxs)("ul",{className:"footer-widget__links list-unstyled",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:"Help "})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:"Support "})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:"Clients "})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:"Contact"})})]})]})]}),(0,r.jsx)("div",{className:"col-lg-3",children:(0,r.jsx)("div",{className:"footer-widget",children:(0,r.jsxs)("div",{className:"site-footer__social",children:[(0,r.jsx)("a",{href:"#",className:"fa fa-facebook-square"}),(0,r.jsx)("a",{href:"#",className:"fa fa-twitter"}),(0,r.jsx)("a",{href:"#",className:"fa fa-instagram"}),(0,r.jsx)("a",{href:"#",className:"fa fa-pinterest-p"})]})})})]})})})}),(0,r.jsx)("div",{onClick:this.scrollTop,className:"scroll-to-target scroll-to-top",style:{display:this.state.scrollBtn?"block":"none"},children:(0,r.jsx)("i",{className:"fa fa-angle-up"})})]})}}])&&i(s.prototype,t),l&&i(s,l),c}(l.Component)},5789:function(e,s,t){var r=t(5893),l=(t(7294),t(9008));s.Z=function(e){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("title",{children:e.pageTitle}),(0,r.jsx)("meta",{charSet:"UTF-8"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"ie=edge"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&display=swap",rel:"stylesheet"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/assets/css/animate.min.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/assets/css/bootstrap.min.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/assets/css/font-awesome.min.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/assets/plugins/dimon-icons/style.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/assets/css/style.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/assets/css/responsive.css"})]}),(0,r.jsx)("div",{className:"page-wrapper",children:e.children})]})}}}]);