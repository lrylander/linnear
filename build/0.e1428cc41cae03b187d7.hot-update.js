webpackHotUpdate(0,{"./src/components/Header/Header.js":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n("./node_modules/react/react.js"),d=function(e){return e&&e.__esModule?e:{default:e}}(i),u=n("./node_modules/reactstrap/dist/reactstrap.es.js"),c=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggle=n.toggle.bind(n),n.state={dropdownOpen:!1,isDesktop:!1},n.updatePredicate=n.updatePredicate.bind(n),n}return r(t,e),l(t,[{key:"componentDidMount",value:function(){this.updatePredicate(),window.addEventListener("resize",this.updatePredicate)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updatePredicate)}},{key:"updatePredicate",value:function(){this.setState({isDesktop:window.innerWidth>1450})}},{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"sidebarToggle",value:function(e){e.preventDefault(),document.body.classList.toggle("sidebar-hidden")}},{key:"sidebarMinimize",value:function(e){e.preventDefault(),document.body.classList.toggle("sidebar-minimized")}},{key:"mobileSidebarToggle",value:function(e){e.preventDefault(),document.body.classList.toggle("sidebar-mobile-show")}},{key:"asideToggle",value:function(e){e.preventDefault(),document.body.classList.toggle("aside-menu-hidden")}},{key:"render",value:function(){var e=this.state.isDesktop;return d.default.createElement("header",{className:"app-header navbar"},d.default.createElement(u.NavbarToggler,{className:"d-lg-none",onClick:this.mobileSidebarToggle},"☰"),d.default.createElement(u.NavbarBrand,{href:"#"}),d.default.createElement(u.NavbarToggler,{className:"d-md-down-none",onClick:this.sidebarToggle},"☰"),d.default.createElement(u.Nav,{className:"d-md-down-none",navbar:!0}),d.default.createElement(u.Nav,{className:"ml-auto",navbar:!0}),d.default.createElement("div",null,e?d.default.createElement("div",null,d.default.createElement("a",{href:"https://www.linkedin.com/in/linnearylander"},d.default.createElement("button",{className:"btn-linkedin icon btn btn-secondary"},d.default.createElement("span",null," LinkedIn "))),d.default.createElement("a",{href:"https://github.com/lrylander"},d.default.createElement("button",{className:"btn-github icon btn btn-secondary"},d.default.createElement("span",null,"Github"))),d.default.createElement("a",{href:"mailto: linnearylander@gmail.com"},d.default.createElement("button",{onclick:"sendEmail();",className:"btn-vimeo icon btn btn-secondary"},d.default.createElement("span",null,"Mail")))):d.default.createElement("div",null,"I show on 1450px or lower")))}}]),t}(i.Component);t.default=c}});