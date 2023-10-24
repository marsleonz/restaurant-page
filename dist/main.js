(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbutton {\n  border-radius: 10px;\n  border-bottom: 2px solid black;\n  background-color: RGB(\n    0,\n    128,\n    128\n  ); /* Use the RGB value of your chosen accent color */\n  color: white; /* Text color */\n  padding: 10px 20px;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\nbutton:hover {\n  background-color: RGB(0, 160, 160);\n}\nli {\n  list-style: none;\n}\n#content {\n  background-color: black;\n  height: 100vh;\n  text-align: center;\n  color: white;\n}\n.header {\n  height: 15%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  font-size: 38px;\n  font-weight: 900;\n  padding: 10px;\n}\n.body {\n  height: 80%;\n  border-top: solid 1px white;\n  overflow: auto;\n  font-size: 18px;\n  padding: 10px;\n}\n.footer {\n  height: 5%;\n  font-size: 18px;\n  border-top: solid 1px white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.buttons {\n  display: flex;\n  column-gap: 20px;\n  justify-content: center;\n}\n.image {\n  width: 300px;\n  border-radius: 50%;\n}\n.active {\n  background-color: RGB(0, 90, 90);\n}\n.home-section {\n  padding: 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  border-bottom: solid 1px white;\n}\n.home-section h2 {\n  margin-bottom: 10px;\n}\n.home-section:last-child {\n  border-bottom: none;\n}\n.contact-section {\n  margin: 0 auto;\n  max-width: 600px;\n}\n.section {\n  border-bottom: solid 1px white;\n  padding: 10px;\n}\n.section:last-child {\n  border-bottom: none;\n}\n.menu-section {\n  margin: 0 auto;\n  max-width: 600px;\n  border-bottom: solid 3px white;\n  padding: 10px;\n  margin-bottom: 20px;\n}\n.menu-section h2 {\n  font-size: 38px;\n}\n.menu-section p {\n  font-size: 24px;\n  padding: 10px;\n}\n.menu-section:last-child {\n  border-bottom: none;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  max-width: 250px;\n  margin: 0 auto;\n  padding-bottom: 10px;\n}\ninput {\n  margin-top: 10px;\n  font-size: 18px;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 15px;\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,o);o.byIndex=s,n.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=t(r[i]);n[s].references--}for(var c=o(e,a),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),r=t(569),i=t.n(r),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),h={};function f(e){const n=document.createElement("p");return n.textContent=e,n}function g(e){const n=document.createElement("h2");return n.textContent=e,n}function b(){return document.createElement("ul")}function v(e){const n=document.createElement("li");return n.textContent=e,n}function y(){return document.createElement("form")}function x(e){const n=document.createElement("input");for(const t in e)n.setAttribute(t,e[t]);return n}h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const C=[{title:"Welcome to Manik's Restaurant",content:"At Manik's Restaurant, we're dedicated to providing you with an exceptional dining experience. Our restaurant is a perfect blend of culinary art and ambiance, making it the ideal destination for food enthusiasts."},{title:"About Us",content:"Established in 2023, Manik's Restaurant has been serving our community with delicious and memorable meals. Our mission is to create a cozy, welcoming environment where you can savor exceptional cuisine and create lasting memories with friends and family."},{title:"Special Offers",content:"Discover our mouthwatering daily specials, exclusive promotions, and seasonal events. Don't miss out on our Happy Hour deals and special holiday menus."},{title:"Customer Reviews",content:"Our customers love us! Here's what they're saying:\n- 'The food here is incredible. I keep coming back for more!'\n- 'A wonderful place to celebrate special occasions.'\n- 'Friendly staff and top-notch service.'"},{title:"Reserve Your Table",content:"Ready to enjoy an exquisite dining experience? Make a reservation now and secure your spot at Manik's Restaurant."},{title:"Follow Us",content:"Stay connected with us on social media to receive the latest updates, promotions, and special offers."}],w=(()=>{const e=document.createElement("div");return C.forEach((n=>e.appendChild((e=>{const n=document.createElement("div");return n.appendChild(g(e.title)),n.appendChild(f(e.content)),n.classList.add("home-section"),n})(n)))),e})(),E=[{title:"Appetizers",items:[{name:"Vegetable Spring Rolls",description:"Crispy rolls filled with fresh vegetables.",imageSrc:t.p+"aee524a1ed355265bd05.png"},{name:"Spinach and Artichoke Dip",description:"Creamy dip with spinach and artichokes.",imageSrc:t.p+"05d53a1d210cd35ed5f7.jpg"}]},{title:"Main Courses",items:[{name:"Vegetable Lasagna",description:"Layers of pasta, vegetables, and cheese.",imageSrc:t.p+"24dff2a9abc4a31e4b63.png"},{name:"Eggplant Parmesan",description:"Breaded eggplant with tomato sauce and cheese.",imageSrc:t.p+"2b43c2f0ea42b1af8f2c.png"}]},{title:"Desserts",items:[{name:"Chocolate Cake",description:"Rich and moist chocolate cake.",imageSrc:t.p+"b99a4b50ca855691a7d7.png"},{name:"Fruit Tart",description:"Fresh fruits on a buttery pastry crust.",imageSrc:t.p+"14bc17d53d7dec36732e.png"}]},{title:"Beverages",items:[{name:"Fresh Orange Juice",description:"Squeezed from the juiciest oranges.",imageSrc:t.p+"84bd883640cf1344a28a.png"},{name:"Iced Coffee",description:"Chilled coffee with a hint of sweetness.",imageSrc:t.p+"f2df5594e59f85df3d61.jpg"}]},{title:"Daily Specials",content:"Don't forget to ask about our chef's daily specials. Each day, we feature a unique and delectable dish that will tantalize your taste buds."}],k=(()=>{const e=document.createElement("div");return E.forEach((n=>e.appendChild((e=>{const n=document.createElement("div");if(n.appendChild(g(e.title)),e.items){const t=b();e.items.forEach((e=>{const n=v(),o=function(e){const n=document.createElement("img");return n.setAttribute("src",e),n}(e.imageSrc),a=f(`${e.name}: ${e.description}`);n.appendChild(o),n.appendChild(a),t.appendChild(n),o.classList.add("image"),n.classList.add("section")})),n.appendChild(t)}else n.appendChild(f(e.content));return n.classList.add("menu-section"),n})(n)))),e})(),S={name:"Manik's Restaurant",address:"Biratnagar-8",phone:"+977 7077140850",email:"marsleonz@gmail.com",businessHours:{weekdays:{openingTime:"6 AM",closingTime:"8 PM"}},reservationForm:["Name","Email","Phone","Date","Time","Number of Guests"],feedbackForm:["Name","Email","Subject","Message"],stayConnected:"Follow us on social media to stay updated on our latest events, promotions, and menu additions.",directions:"Find your way to Manik's Restaurant with our easy-to-follow directions from the nearest landmarks and major roads."},M=(e,n)=>{const t=document.createElement("div");if(t.appendChild(g(e)),Array.isArray(n)){const e=b();n.forEach((n=>e.appendChild(v(n)))),t.appendChild(e)}else if("object"==typeof n){const e=n.weekdays.openingTime,o=n.weekdays.closingTime,a=`Monday - Friday: ${e} - ${o}`,r=`Saturday - Sunday: ${e} - ${o}`;t.appendChild(f(a)),t.appendChild(f(r))}else t.appendChild(f(n));return t.classList.add("section"),t},T=(()=>{const e=document.createElement("div");e.appendChild(f(`Contact ${S.name}`)),e.appendChild(M("Address",S.address)),e.appendChild(M("Phone",S.phone)),e.appendChild(M("Email",S.email)),e.appendChild(M("Business Hours",S.businessHours)),e.appendChild(f("Reservations"));const n=y();S.reservationForm.forEach((e=>{const t=x({placeholder:e});n.appendChild(t)})),e.appendChild(n),e.appendChild(f("Your Feedback"));const t=y();return S.feedbackForm.forEach((e=>{const n=x({placeholder:e});t.appendChild(n)})),e.appendChild(t),e.appendChild(M("Stay Connected",S.stayConnected)),e.appendChild(M("Directions",S.directions)),e.classList.add("contact-section"),e})(),L=document.querySelector("#content");L.classList.add("content");const R=function(){const e=document.createElement("div");return e.textContent="Manik's Restaurant",e.classList.add("header"),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("buttons"),e.addEventListener("click",j),e.appendChild(F("Home",0,!0)),e.appendChild(F("Menu")),e.appendChild(F("Contact")),e}()),e}(),A=function(e){const n=document.createElement("div");return n.classList.add("body"),n.appendChild(e),n}(w);function j(e){if("BUTTON"===e.target.tagName){const t=function(e){switch(e){case"Home":return w;case"Menu":return k;case"Contact":return T;default:return null}}(e.target.textContent);t&&(A.textContent="",A.appendChild(t),(n=e.target).parentNode.querySelectorAll("button").forEach((e=>{e.classList.remove("active")})),n.classList.add("active"))}var n}function F(e,n,t=!1){const o=document.createElement("button");return o.textContent=e,t&&o.classList.add("active"),o}L.appendChild(R),L.appendChild(A),L.appendChild(function(){const e=document.createElement("div");return e.textContent="Copyright © 2023 Manik Shah",e.classList.add("footer"),e}())})()})();