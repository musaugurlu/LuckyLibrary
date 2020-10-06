(function(t){function e(e){for(var s,n,i=e[0],c=e[1],l=e[2],g=0,h=[];g<i.length;g++)n=i[g],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&h.push(o[n][0]),o[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},o={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1018:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],n=(a("d3b7"),{created:function(){this.$http.interceptors.response.use(void 0,(function(t){return new Promise((function(){throw 401===t.status&&t.config&&!t.config.__isRetryRequest&&this.$store.dispatch("auht/logout"),t}))}))}}),i=n,c=a("2877"),l=Object(c["a"])(i,o,r,!1,null,null,null),u=l.exports,g=(a("45fc"),a("8c4f")),h=a("2f62"),d={namespaced:!0,state:{type:null,message:null},actions:{success:function(t,e){var a=t.commit;a("success",e)},error:function(t,e){var a=t.commit;a("error",e)},clear:function(t){var e=t.commit;e("clear")}},mutations:{success:function(t,e){t.type="alert-success",t.message=e},error:function(t,e){t.type="alert-danger",t.message=e},clear:function(t){t.type=null,t.message=null}}},f=a("bc3a"),p=a.n(f),_="http://localhost:8090",m={login:v,logout:b};function v(t){return p()({url:"".concat(_,"/auth/login"),data:t,method:"POST"})}function b(){return p()({url:"".concat(_,"/auth/logout"),data:{},method:"POST"})}var k={namespaced:!0,state:{status:"",token:localStorage.getItem("token")||"",user:{}},actions:{login:function(t,e){var a=t.commit;return new Promise((function(t,s){a("auth_request"),m.login(e).then((function(e){var s=e.data.token,o=e.data.user;localStorage.setItem("token",s),p.a.defaults.headers.common["Authorization"]="Bearer "+s,a("auth_success",s,o),t(e)})).catch((function(t){a("auth_error"),localStorage.removeItem("token"),s(t)}))}))},logout:function(t){var e=t.commit;return new Promise((function(t){e("logout"),localStorage.removeItem("token"),delete p.a.defaults.headers.common["Authorization"],t()}))}},mutations:{auth_request:function(t){t.status="loading"},auth_success:function(t,e,a){t.status="success",t.token=e,t.user=a},auth_error:function(t){t.status="error"},logout:function(t){t.status="",t.token=""}},getters:{isLoggedIn:function(t){return!!t.token},authStatus:function(t){return t.status}}},C=(a("96cf"),a("1da1")),y="http://localhost:8090",w={namespaced:!0,state:{categories:[],newBooks:[],popularBooks:[],numOfBooks:0,lastCatSyncTime:0,lastNoBSyncTime:0},mutations:{setCategories:function(t,e){return t.categories=e},setNewBooks:function(t,e){return t.newBooks=e},setPopularBooks:function(t,e){return t.popularBooks=e},setNumOfBooks:function(t,e){return t.numOfBooks=e}},actions:{getCategories:function(t){return Object(C["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,p.a.get("".concat(y,"/categories"));case 3:s=e.sent,a("setCategories",s.data);case 5:case"end":return e.stop()}}),e)})))()},getNumOfBooks:function(t){return Object(C["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,p.a.get("".concat(y,"/books/numOfBooks"));case 3:s=e.sent,a("setNumOfBooks",s.data);case 5:case"end":return e.stop()}}),e)})))()},getNewBooks:function(t){return Object(C["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,p.a.get("".concat(y,"/books/newbooks"));case 3:s=e.sent,a("setNewBooks",s.data);case 5:case"end":return e.stop()}}),e)})))()},getPopularBooks:function(t){return Object(C["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,p.a.get("".concat(y,"/books/popularbooks"));case 3:s=e.sent,a("setPopularBooks",s.data);case 5:case"end":return e.stop()}}),e)})))()}}};s["a"].use(h["a"]);var B=new h["a"].Store({modules:{alert:d,auth:k,books:w}}),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-header"),a("page-hero"),a("page-category"),a("page-footer")],1)},x=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-lg-9 col-md-9"},[a("div",{staticClass:"header__nav"},[a("nav",{staticClass:"header__menu mobile-menu"},[a("ul",[a("router-link",{attrs:{tag:"li",to:"/"}},[a("a",[t._v("Home")])]),a("router-link",{class:t.isActive("/book")?"active":"",attrs:{tag:"li",to:"/books"}},[a("a",[t._v("Books")])]),a("router-link",{class:t.isActive("/categor")?"active":"",attrs:{tag:"li",to:"/categories"}},[a("a",[t._v("Categories")])]),a("router-link",{class:t.isActive("/branch")?"active":"",attrs:{tag:"li",to:"/branches"}},[a("a",[t._v("Branches")])])],1)]),a("div",{staticClass:"header__menu__right"},[t.loggedIn?a("router-link",{staticClass:"primary-btn",attrs:{to:"/auth/logout"}},[a("i",{staticClass:"fa fa-user"}),t._v(" Logout")]):a("router-link",{staticClass:"primary-btn",attrs:{to:"/auth/login"}},[a("i",{staticClass:"fa fa-user"}),t._v(" Login")])],1)])])]),a("div",{attrs:{id:"mobile-menu-wrap"}})])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-3 col-md-3"},[a("div",{staticClass:"header__logo"},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:"/img/LuckyLibraryLogo.png",alt:""}})])])])}],E=(a("c975"),a("b0c0"),{methods:{isActive:function(t){return 0===this.$route.path.indexOf(t)}},mounted:function(){if("Home"!==this.$route.name&&"Book"!==this.$route.name){var t=document.getElementsByClassName("header")[0];t.setAttribute("style","background-image: url('/img/hero/library-bg.jpg');")}},computed:{loggedIn:function(){return this.$store.getters["auth/isLoggedIn"]}}}),j=E,S=Object(c["a"])(j,O,P,!1,null,null,null),L=S.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero set-bg"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"hero__text"},[a("div",{staticClass:"section-title"},[a("h2",[t._v("Discover The Best Books Near You")]),a("p",[t._v(t._s(t.numOfBooks)+" The best book is waiting for you")])]),a("search",{attrs:{categories:t.categories}})],1)])])])])},A=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("ul",{staticClass:"hero__categories__tags"},[t._l(t.slicedCategories,(function(e,s){return a("li",{key:s},[a("a",{attrs:{href:"/category/"+e.name.toLowerCase()}},[a("img",{attrs:{src:"/img/categories/category.png",alt:""}}),t._v(" "+t._s(e.name)+" ")])])})),t.categories.length>0?a("li",[t._m(1)]):t._e()],2)])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero__search__form"},[a("form",{attrs:{action:"/books/search",method:"GET"}},[a("input",{attrs:{type:"text",name:"query",placeholder:"Search..."}}),a("button",{attrs:{type:"submit"}},[t._v("Search Now")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"/categories/"}},[a("img",{attrs:{src:"img/hero/cat-6.png",alt:""}}),t._v(" All Categories")])}],I=(a("fb6a"),{props:["categories"],computed:{slicedCategories:function(){return this.categories&&this.categories.length>5?this.categories.slice(0,5):this.categories}}}),T=I,q=Object(c["a"])(T,H,D,!1,null,null,null),F=q.exports,R={components:{Search:F},methods:{},mounted:function(){this.$store.dispatch("books/getNumOfBooks"),this.$store.dispatch("books/getCategories")},computed:{categories:function(){return this.$store.state.books.categories},numOfBooks:function(){return this.$store.state.books.numOfBooks}}},M=R,U=(a("87fe"),Object(c["a"])(M,N,A,!1,null,"2356210a",null)),Y=U.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"categories spad"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[t._m(0),a("div",{staticClass:"categories__item__list"},t._l(t.categories,(function(e,s){return a("div",{key:s,staticClass:"categories__item"},[a("a",{attrs:{href:"/category/"+e.name.toLowerCase()}},[a("img",{attrs:{src:"/img/categories/categories.png",alt:""}}),a("h5",[t._v(t._s(e.name))]),a("span",[t._v(t._s(e.bcount)+" Books")])])])})),0)])])])])},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title"},[a("h2",[t._v("Most Popular Categories")]),a("p",[t._v("World of Book for Young and Old")])])}],J={mounted:function(){this.$store.dispatch("books/getCategories")},computed:{categories:function(){var t=this.$store.state.books.categories;return t&&t.length>5?t.slice(0,5):t}}},V=J,W=Object(c["a"])(V,z,G,!1,null,null,null),K=W.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"footer__copyright"},[a("div",{staticClass:"footer__copyright__text"},[a("p",[t._v(" Copyright © "+t._s(t.thisYear)+" All rights reserved | This template is made with "),a("i",{staticClass:"fa fa-heart",attrs:{"aria-hidden":"true"}}),t._v(" by "),a("a",{attrs:{href:"https://colorlib.com",target:"_blank"}},[t._v("Colorlib")])])])])])])])])},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 col-md-6"},[a("div",{staticClass:"footer__about"},[a("div",{staticClass:"footer__about__logo"},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:"/img/LuckyLibraryLogo.png",alt:""}})])]),a("p",[t._v("Challenging the way things have always been done can lead to creative new options that reward you. ")])])]),a("div",{staticClass:"col-lg-4 offset-lg-1 col-md-6"},[a("div",{staticClass:"footer__address"},[a("ul",[a("li",[a("span",[t._v("Call Us:")]),a("p",[t._v("(+12) 345-678-910")])]),a("li",[a("span",[t._v("Email:")]),a("p",[t._v("me@musaugurlu.com")])]),a("li",[a("span",[t._v("Fax:")]),a("p",[t._v("(+12) 345-678-910")])]),a("li",[a("span",[t._v("Connect Us:")]),a("div",{staticClass:"footer__social"},[a("a",{attrs:{href:"https://twitter.com/musaugurlu"}},[a("i",{staticClass:"fa fa-twitter"})]),a("a",{attrs:{href:"https://linkedin.com/in/musaugurlu"}},[a("i",{staticClass:"fa fa-linkedin"})])])])])])]),a("div",{staticClass:"col-lg-3 offset-lg-1 col-md-6"},[a("div",{staticClass:"footer__widget"},[a("ul",[a("li",[a("a",{attrs:{href:"/"}},[t._v("Home")])]),a("li",[a("a",{attrs:{href:"/books"}},[t._v("Books")])]),a("li",[a("a",{attrs:{href:"/categories"}},[t._v("Categories")])]),a("li",[a("a",{attrs:{href:"/branches"}},[t._v("Branches")])]),a("li",[a("a",{attrs:{href:"/my"}},[t._v("Log in")])])])])])])}],Z={computed:{thisYear:function(){return(new Date).getFullYear()}}},tt=Z,et=Object(c["a"])(tt,Q,X,!1,null,null,null),at=et.exports,st={name:"Home",components:{PageHeader:L,PageHero:Y,PageCategory:K,PageFooter:at}},ot=st,rt=Object(c["a"])(ot,$,x,!1,null,null,null),nt=rt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-header"),a("category"),a("page-footer")],1)},ct=[],lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"categories spad"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[t._m(0),a("div",{staticClass:"categories__item__list"},t._l(t.categories,(function(e,s){return a("a",{key:s,attrs:{href:"/category/"+e.name.toLowerCase()}},[a("div",{staticClass:"categories__item"},[a("img",{attrs:{src:"/img/categories/categories.png",alt:""}}),a("h5",[t._v(t._s(e.name))]),a("span",[t._v(t._s(e.bcount)+" Books")])])])})),0)])])])])},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title"},[a("p"),a("h2",[t._v("Categories")])])}],gt={mounted:function(){this.$store.dispatch("books/getCategories")},computed:{categories:function(){return this.$store.state.books.categories}}},ht=gt,dt=Object(c["a"])(ht,lt,ut,!1,null,null,null),ft=dt.exports,pt={components:{PageHeader:L,Category:ft,PageFooter:at}},_t=pt,mt=Object(c["a"])(_t,it,ct,!1,null,null,null),vt=mt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-header"),a("breadcrumb",{attrs:{category:t.$route.params.category}}),a("book-list",{attrs:{category:t.$route.params.category,books:t.books}}),a("page-footer")],1)},kt=[],Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"breadcrumb-area set-bg"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 text-center"},[a("div",{staticClass:"breadcrumb__text"},[a("h2",[t._v("Categories")]),a("div",{staticClass:"breadcrumb__option"},[t._m(0),a("span",[t._v(t._s(t.category))])])])])])])])},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"/categories"}},[a("i",{staticClass:"fa fa-home"}),t._v(" Categories")])}],wt={props:["category"]},Bt=wt,$t=(a("f64b"),Object(c["a"])(Bt,Ct,yt,!1,null,"791a26c4",null)),xt=$t.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"blog-section spad"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"row"},t._l(t.displayedBooks,(function(t){return a("single-book",{key:t.id,attrs:{id:t.id,img:t.imgUrl,title:t.title,author:t.author,publishedDate:t.publishedDate,category:t.category.name}})})),1),t.pages.length>1?a("div",{staticClass:"blog__pagination"},[t.page>3?a("button",{on:{click:function(e){e.preventDefault(),t.page=1}}},[a("i",{staticClass:"fa fa-angle-double-left"})]):t._e(),a("button",{attrs:{disabled:t.page<=1},on:{click:function(e){return e.preventDefault(),t.goPrev(e)}}},[a("i",{staticClass:"fa fa-long-arrow-left"}),t._v(" Pre")]),t.page>3?a("button",{attrs:{disabled:"disabled"}},[t._v("...")]):t._e(),t._l(t.pageNums,(function(e){return a("button",{key:e,attrs:{disabled:e==t.page},on:{click:function(a){return a.preventDefault(),t.setPage(e)}}},[t._v(t._s(e))])})),t.page<t.pages.length-2?a("button",{attrs:{disabled:"disabled"}},[t._v("...")]):t._e(),a("button",{attrs:{disabled:t.page>=t.pages.length},on:{click:function(e){return e.preventDefault(),t.goNext(e)}}},[t._v("Next "),a("i",{staticClass:"fa fa-long-arrow-right"})]),t.page<t.pages.length-2?a("button",{on:{click:function(e){t.page=t.pages.length}}},[a("i",{staticClass:"fa fa-angle-double-right"})]):t._e()],2):t._e()])])])])},Pt=[],Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-3 col-md-3"},[a("div",{staticClass:"blog__item"},[a("div",{staticClass:"blog__item__pic",style:t.getBGStyle()}),a("div",{staticClass:"blog__item__text"},[a("ul",{staticClass:"blog__item__tags"},[a("li",[a("i",{staticClass:"fa fa-tags"}),t._v(" "+t._s(t.category))])]),a("h5",[a("a",{attrs:{href:"/book/"+t.id}},[t._v(" "+t._s(t.title))])]),a("ul",{staticClass:"blog__item__widget"},[a("li",[a("i",{staticClass:"fa fa-clock-o"}),t._v(" "+t._s(t.publishedDate))]),a("li",[a("i",{staticClass:"fa fa-user"}),t._v(" "+t._s(t.author))])])])])])},jt=[],St={props:["id","img","title","author","publishedDate","category"],methods:{getBGStyle:function(){return"background-image: url('"+this.img+"');background-repeat: no-repeat;background-position: center;"}}},Lt=St,Nt=Object(c["a"])(Lt,Et,jt,!1,null,null,null),At=Nt.exports,Ht={components:{SingleBook:At},props:["books"],data:function(){return{pages:[],page:1,perPage:12}},methods:{goPrev:function(){this.page>1&&this.page--},goNext:function(){this.page<this.pages.length&&this.page++},setPage:function(t){this.page=t},setPages:function(){for(var t=Math.ceil(this.pageBooks.length/this.perPage),e=0;e<t;e++)this.pages.push(e+1)},paginate:function(t){var e=this.page,a=this.perPage,s=e*a-a,o=e*a;return t&&t.length>0?t.slice(s,o):t}},watch:{books:function(){this.setPages()}},computed:{pageBooks:function(){return this.books},displayedBooks:function(){return this.paginate(this.pageBooks)},pageNums:function(){var t=this.page>3?this.page-3:0,e=this.page<this.pages.length-2?this.page+2:this.pages.length;return this.pages.slice(t,e)}}},Dt=Ht,It=Object(c["a"])(Dt,Ot,Pt,!1,null,null,null),Tt=It.exports,qt=a("d4ec"),Ft=a("bee2"),Rt="http://localhost:8090",Mt=function(){function t(){Object(qt["a"])(this,t)}return Object(Ft["a"])(t,[{key:"getSingleBook",value:function(t){return p.a.get(Rt+"/book/"+t)}},{key:"getAllBooks",value:function(){return p.a.get(Rt+"/books")}},{key:"searchBook",value:function(t){return p.a.get(Rt+"/books/search/"+t)}},{key:"getBooksByCategory",value:function(t){return p.a.get(Rt+"/books/byCategory/"+t)}},{key:"findBooks",value:function(t){return p.a.get(Rt+"/books/search?query="+t)}},{key:"getBranches",value:function(){return p.a.get(Rt+"/branches")}},{key:"getBranch",value:function(t){return p.a.get(Rt+"/branch/"+t)}}]),t}(),Ut=Mt,Yt=new Ut,zt={components:{PageHeader:L,Breadcrumb:xt,BookList:Tt,PageFooter:at},data:function(){return{books:[]}},methods:{fetchBooks:function(){var t=this;Yt.getBooksByCategory(this.$route.params.category).then((function(e){t.books=e.data}))}},mounted:function(){this.fetchBooks()}},Gt=zt,Jt=Object(c["a"])(Gt,bt,kt,!1,null,null,null),Vt=Jt.exports,Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-header"),a("page-hero",{attrs:{book:t.book,category:t.category.name}}),a("page-book",{attrs:{book:t.book,branch:t.branch}}),a("page-footer")],1)},Kt=[],Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"listing-hero set-bg"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"listing__hero__option"},[a("div",{staticClass:"listing__hero__icon"},[a("img",{attrs:{src:t.book.imgUrl,alt:""}})]),a("div",{staticClass:"listing__hero__text"},[a("h2",[t._v(t._s(t.book.title))]),a("div",{staticClass:"listing__hero__widget"},[a("div",{staticClass:"listing__hero__widget__rating"},[a("i",{staticClass:"fa fa-tag",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.category)+" ")]),a("div",[t._v(t._s(t.book.view)+" View")])]),a("p",[a("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.book.author))])])])]),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"listing__hero__btns"},[t._m(0),a("a",{staticClass:"primary-btn",attrs:{href:"#"},on:{click:function(e){return t.checkOutBook()}}},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" Check Out")])])])])])])},Xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"primary-btn share-btn",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-mail-reply"}),t._v(" Hold")])}],Zt={props:["book","category"],methods:{checkOutBook:function(){this.$store.dispatch("users/getAll")}}},te=Zt,ee=(a("d50d"),Object(c["a"])(te,Qt,Xt,!1,null,"481a325e",null)),ae=ee.exports,se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"listing-details spad"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"listing__details__text"},[a("div",{staticClass:"listing__details__about"},[a("h4",[t._v("Description")]),a("p",[t._v(t._s(t.book.description))])])])]),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"listing__sidebar"},[a("div",{staticClass:"listing__sidebar__contact"},[t._m(0),a("div",{staticClass:"listing__sidebar__contact__text"},[a("h4",[t._v(t._s(t.branch.name))]),a("ul",[a("li",[a("span",{staticClass:"icon_pin_alt"}),t._v(" "+t._s(t.branch.address)+" United States")]),a("li",[a("span",{staticClass:"icon_phone"}),t._v(" "+t._s(t.branch.phone))]),t._m(1),t._m(2)])])])])])])])])},oe=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"listing__sidebar__contact__map"},[a("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.7681456471705!2d-81.65988898487815!3d30.329112081779684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b71823d5d43f%3A0x3b6a39728dac6947!2s303%20N%20Laura%20St%2C%20Jacksonville%2C%20FL%2032202!5e0!3m2!1sen!2sus!4v1593388331220!5m2!1sen!2sus",height:"200",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}}),a("img",{attrs:{src:"/img/map-icon.png",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("span",{staticClass:"icon_mail_alt"}),t._v(" luckylibrary@musaugurlu.com")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("span",{staticClass:"icon_globe-2"}),t._v(" https://luckylibrary.musaugurlu.com")])}],re={props:["book","branch"]},ne=re,ie=Object(c["a"])(ne,se,oe,!1,null,null,null),ce=ie.exports,le=new Ut,ue={components:{PageHeader:L,PageHero:ae,PageBook:ce,PageFooter:at},data:function(){return{book:[],category:[],branch:[]}},methods:{fetchBooks:function(){var t=this;le.getSingleBook(this.$route.params.book).then((function(e){t.book=e.data,t.category=e.data.category,t.branch=e.data.branch}))}},mounted:function(){this.fetchBooks()}},ge=ue,he=Object(c["a"])(ge,Wt,Kt,!1,null,null,null),de=he.exports,fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-header"),a("page-books"),a("page-footer")],1)},pe=[],_e=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"categories spad"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("search",{attrs:{categories:""}}),t._m(0),a("book-list",{attrs:{books:t.newBooks}}),t._m(1),a("book-list",{attrs:{books:t.popularBooks}})],1)])])])},me=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title"},[a("p"),a("h2",[t._v("New Books")]),a("p")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title"},[a("p"),a("h2",[t._v("Popular Books")]),a("p")])}],ve={components:{BookList:Tt,Search:F},mounted:function(){this.$store.dispatch("books/getNewBooks"),this.$store.dispatch("books/getPopularBooks")},computed:{popularBooks:function(){return this.$store.state.books.popularBooks},newBooks:function(){return this.$store.state.books.newBooks}}},be=ve,ke=Object(c["a"])(be,_e,me,!1,null,null,null),Ce=ke.exports,ye={components:{PageHeader:L,PageBooks:Ce,PageFooter:at}},we=ye,Be=Object(c["a"])(we,fe,pe,!1,null,null,null),$e=Be.exports,xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-header"),a("page-search"),a("page-footer")],1)},Oe=[],Pe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"categories spad"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("page-search",{attrs:{categories:""}}),a("div",{staticClass:"section-title"},[a("p"),a("h2",[t._v("Search for: "+t._s(t.$route.query.query))]),a("p")]),t.books.length>0?a("book-list",{attrs:{books:t.books}}):a("p",[t._v("No books found. Try to search with less words.")])],1)])])])},Ee=[],je=new Ut,Se={components:{BookList:Tt,PageSearch:F},data:function(){return{books:[]}},methods:{fetchBooks:function(){var t=this;je.findBooks(this.$route.query.query).then((function(e){t.books=e.data}))}},mounted:function(){this.fetchBooks()}},Le=Se,Ne=Object(c["a"])(Le,Pe,Ee,!1,null,null,null),Ae=Ne.exports,He={components:{PageHeader:L,PageSearch:Ae,PageFooter:at}},De=He,Ie=Object(c["a"])(De,xe,Oe,!1,null,null,null),Te=Ie.exports,qe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},Fe=[],Re={},Me=Object(c["a"])(Re,qe,Fe,!1,null,null,null),Ue=Me.exports,Ye=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-header"),a("branches"),a("page-footer")],1)},ze=[],Ge=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"categories spad"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[t._m(0),a("div",{staticClass:"categories__item__list"},t._l(t.branches,(function(e,s){return a("a",{key:s,attrs:{href:"/branch/"+e.id}},[a("div",{staticClass:"categories__item"},[a("img",{attrs:{src:"/img/categories/"+t.category.img,alt:""}}),a("h5",[t._v(t._s(e.name))])])])})),0)])])])])},Je=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title"},[a("h2",[t._v("Branches")]),a("p")])}],Ve=new Ut,We={data:function(){return{branches:[]}},methods:{fetchBranches:function(){var t=this;Ve.getBranches().then((function(e){t.branches=e.data}))}},mounted:function(){this.fetchBranches()}},Ke=We,Qe=Object(c["a"])(Ke,Ge,Je,!1,null,null,null),Xe=Qe.exports,Ze={components:{PageHeader:L,Branches:Xe,PageFooter:at}},ta=Ze,ea=Object(c["a"])(ta,Ye,ze,!1,null,null,null),aa=ea.exports,sa=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero set-bg"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"hero__text"},[t._m(0),a("div",{staticClass:"login_form"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[t.alert?a("span",{staticClass:"alert alert-danger"},[t._v(t._s(t.alert))]):t._e(),a("p"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",name:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("button",{staticClass:"site-btn",attrs:{type:"submit"}},[t._v("Login")])])])])])])])])},oa=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title"},[a("h2",[t._v("Login")])])}],ra={data:function(){return{email:"",password:"",submitted:!1}},computed:{loggedIn:function(){return this.$store.getters["auth/isLoggedIn"]},alert:function(){return this.$store.state.alert.message}},created:function(){this.$store.dispatch("auth/logout")},methods:{handleSubmit:function(){var t=this;this.submitted=!0;var e=this.email,a=this.password;e&&a&&this.$store.dispatch("auth/login",{email:e,password:a}).then((function(){return t.$router.push("/")})).catch((function(t){console.log(t)}))}}},na=ra,ia=(a("b96b"),Object(c["a"])(na,sa,oa,!1,null,"59eeaa10",null)),ca=ia.exports,la=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Logging out... ")])},ua=[],ga={mounted:function(){this.$store.dispatch("auth/logout"),this.$router.push("/")}},ha=ga,da=Object(c["a"])(ha,la,ua,!1,null,null,null),fa=da.exports;s["a"].use(g["a"]);var pa=[{path:"/",name:"Home",component:nt},{path:"/category/:category",name:"Category",component:Vt},{path:"/categories",name:"Categories",component:vt},{path:"/book/:book",name:"Book",component:de},{path:"/books",name:"Books",component:$e},{path:"/books/search",name:"Search",component:Te},{path:"/branch/:id",name:"Branch",component:Ue},{path:"/branches",name:"Branches",component:aa},{path:"/auth/login",name:"login",component:ca},{path:"/auth/logout",name:"logout",component:fa}],_a=new g["a"]({mode:"history",base:"/",routes:pa,linkExactActiveClass:"active",linkActiveClass:"active"});_a.beforeEach((function(t,e,a){if(t.matched.some((function(t){return t.meta.requiresAuth}))){if(B.getters["auth/isLoggedIn"])return void a();a("auth/login")}else a()}));var ma=_a;s["a"].prototype.$http=p.a;var va=localStorage.getItem("token");va&&(s["a"].prototype.$http.defaults.headers.common["Authorization"]="Bearer "+va),s["a"].config.productionTip=!1,new s["a"]({router:ma,store:B,render:function(t){return t(u)}}).$mount("#app")},"653f":function(t,e,a){},7572:function(t,e,a){},"87fe":function(t,e,a){"use strict";var s=a("1018"),o=a.n(s);o.a},b96b:function(t,e,a){"use strict";var s=a("d9cf"),o=a.n(s);o.a},d50d:function(t,e,a){"use strict";var s=a("653f"),o=a.n(s);o.a},d9cf:function(t,e,a){},f64b:function(t,e,a){"use strict";var s=a("7572"),o=a.n(s);o.a}});
//# sourceMappingURL=app.f29453b2.js.map