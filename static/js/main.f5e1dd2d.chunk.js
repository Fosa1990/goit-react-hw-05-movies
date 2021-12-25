(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},46:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(27),r=c.n(i),s=c(6),o=(c(37),c(2)),u=(c(38),c(0));function l(e){var t=e.children;return Object(u.jsx)("div",{className:"container",children:t})}c(40);function j(){return Object(u.jsxs)("nav",{children:[Object(u.jsx)(s.c,{exact:!0,to:"/",className:"nav-link",activeClassName:"nav-link-active",children:"Home"}),Object(u.jsx)(s.c,{exact:!0,to:"/movies",className:"nav-link",activeClassName:"nav-link-active",children:"Movies"})]})}c(46);function b(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)(j,{})})}var h=c(4),d=c(30),O=c(17),v=c.n(O),m=c(31),f=c.n(m),x="https://api.themoviedb.org/3/",p="f6f92051b45422d9426f457ad6610127";function g(){return _.apply(this,arguments)}function _(){return _=Object(d.a)(v.a.mark((function e(){var t,c,n,a=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",c=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,f.a.get(t,c);case 4:return n=e.sent,e.abrupt("return",200===n.status?n.data:Promise.reject(new Error("Not found")));case 6:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}var N="https://image.tmdb.org/t/p/w300",k="prev",y="next",w="movies";function S(){var e=Object(o.useRouteMatch)().url,t=Object(n.useState)([]),c=Object(h.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(1),l=Object(h.a)(r,2),j=l[0],b=l[1],d=Object(n.useState)(0),O=Object(h.a)(d,2),v=O[0],m=O[1];console.log("HomePage__url",e),Object(n.useEffect)((function(){(console.log("fetchTrendingMovies"),g("".concat(x,"trending/all/week?api_key=").concat(p))).then((function(e){i(e.results),m(e.total_pages)}))}),[v]),Object(n.useEffect)((function(){(function(e){return console.log("fetchTrendingMoviesByPage"),g("".concat(x,"trending/all/week?api_key=").concat(p,"&page=").concat(e))})(j).then((function(e){i(e.results),m(e.total_pages)}))}),[j]);var f=function(e){e.currentTarget.name===k&&j>1&&b((function(e){return e-1})),e.currentTarget.name===y&&j!==v&&b((function(e){return e+1}))};return Object(u.jsxs)("div",{children:[Object(u.jsx)("ul",{children:a.map((function(e){var t=e.title?e.title:e.name;return Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"".concat(e.id),children:t})},e.id)}))}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{type:"button",name:k,onClick:f,className:"Button",children:"Previous"}),Object(u.jsx)("button",{type:"button",name:y,onClick:f,className:"Button",children:"Next"})]})]})}c(66);function C(e){var t=e.onSubmit,c=Object(n.useState)(""),a=Object(h.a)(c,2),i=a[0],r=a[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(i),r("")},className:"search-form",children:[Object(u.jsx)("input",{type:"text",value:i,name:"form-input",onChange:function(e){return r(e.target.value)},className:"form-input"}),Object(u.jsx)("button",{type:"submit",className:"Button",children:"Search"})]})}function M(){var e=Object(o.useRouteMatch)().url,t=Object(n.useState)([]),c=Object(h.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(1),l=Object(h.a)(r,2),j=l[0],b=l[1],d=Object(n.useState)(""),O=Object(h.a)(d,2),v=O[0],m=O[1],f=Object(n.useRef)(!0),_=Object(n.useState)(0),N=Object(h.a)(_,2),w=N[0],S=N[1];console.log("MoviesPage__url: ",e),Object(n.useEffect)((function(){f.current?f.current=!1:function(e,t){return console.log("fetchMoviesBySearch"),g("".concat(x,"search/movie?api_key=").concat(p,"&query=").concat(t,"&page=").concat(e,"&include_adult=false"))}(j,v).then((function(e){i(e.results),S(e.total_pages)}))}),[j,v]);var M=function(e){e.currentTarget.name===k&&j>1&&b((function(e){return e-1})),e.currentTarget.name===y&&j!==w&&b((function(e){return e+1}))};return Object(u.jsxs)("div",{children:[Object(u.jsx)(C,{onSubmit:function(e){v!==e&&m(e)}}),Object(u.jsx)("ul",{children:a.map((function(t){var c=t.title?t.title:t.name;return Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"".concat(e,"/").concat(t.id),children:c})},t.id)}))}),a.length>1&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{type:"button",name:k,onClick:M,children:"Previos"}),Object(u.jsx)("button",{type:"button",name:y,onClick:M,children:"Next"})]})]})}c(67);function P(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],i=Object(o.useParams)().movieId;return Object(n.useEffect)((function(){var e;return(e=i,console.log("fetchMovieCredits"),g("".concat(x,"movie/").concat(e,"/credits?api_key=").concat(p))).then((function(e){var t=e.cast.filter((function(e){return e.popularity>4}));a(t)})),function(){return a([])}}),[i]),console.log("Cast__cast:",c),Object(u.jsx)("div",{className:"cast",children:c.length>=1?c.map((function(e){return Object(u.jsxs)("div",{className:"actor",children:[Object(u.jsx)("div",{className:"image-container",children:Object(u.jsx)("img",{src:N+e.profile_path,alt:e.name})}),Object(u.jsx)("h3",{children:e.name}),Object(u.jsxs)("span",{children:["Character: ",e.character]})]},e.id)})):Object(u.jsx)("p",{className:"no-info",children:"There's no info about casts this movie yet."})})}var R=c(32);c(68);function B(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],i=Object(R.useParams)().movieId;return Object(n.useEffect)((function(){var e;return(e=i,console.log("fetchMovieReviews"),g("".concat(x,"movie/").concat(e,"/reviews?api_key=").concat(p))).then((function(e){return a(e.results)})),function(){return a([])}}),[i]),Object(u.jsx)("div",{className:"reviews",children:c.length>1?c.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{children:["Author: ",e.author]}),Object(u.jsx)("p",{children:e.content})]},e.id)})):Object(u.jsx)("p",{className:"no-info",children:"There's no reviews about this movie."})})}c(69);var I=c.p+"static/media/No-Image-Placeholder.ee97e8e7.svg";function T(e){var t=e.movie;console.log("MovieItem__movie: ",t);var c=t.poster_path,n=t.title,a=t.vote_average,i=t.overview,r=t.genres,s=function(e){var t;e.release_date&&(t=e.release_date.slice(0,4));e.first_air_date&&(t=e.first_air_date.slice(0,4));return t}(t);return Object(u.jsxs)("div",{className:"movie-box",children:[Object(u.jsx)("div",{className:"image-box",children:Object(u.jsx)("img",{src:c?N+c:I,alt:n,className:"box-image",loading:"lazy"})}),Object(u.jsxs)("ul",{className:"description",children:[Object(u.jsx)("li",{children:Object(u.jsxs)("h2",{children:[n," (",s,")"]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("p",{children:["IMDB rating : ",a,"/10"]})}),Object(u.jsxs)("li",{children:[Object(u.jsx)("h3",{children:"Overview :"}),Object(u.jsx)("p",{children:i})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("h3",{children:"Genres :"}),Object(u.jsx)("ul",{children:r.map((function(e,t){return Object(u.jsx)("li",{children:e.name},t)}))})]})]})]})}c(70);function E(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),c=t[0],a=t[1],i=Object(o.useParams)().movieId,r=Object(o.useRouteMatch)(),l=r.url,j=r.path;return Object(n.useEffect)((function(){var e;return(e=i,console.log("fetchMovieDetails"),g("".concat(x,"movie/").concat(e,"?api_key=").concat(p))).then(a),function(){return a(null)}}),[i]),console.log("MovieDetailsPage__url: ",l),console.log("MovieDetailsPage__movie: ",c),Object(u.jsxs)(u.Fragment,{children:[c&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{type:"button",onClick:function(){window.history.back()},className:"Button",children:"Back"}),Object(u.jsx)(T,{movie:c})]}),Object(u.jsx)(s.c,{to:"".concat(l,"/cast"),className:"movie-link",activeClassName:"movie-link-active",children:"Cast"}),Object(u.jsx)(s.c,{to:"".concat(l,"/reviews"),className:"movie-link",activeClassName:"movie-link-active",children:"Reviews"}),Object(u.jsx)(o.Route,{path:"".concat(j,"/cast"),exact:!0,children:Object(u.jsx)(P,{})}),Object(u.jsx)(o.Route,{path:"".concat(j,"/reviews"),exact:!0,children:Object(u.jsx)(B,{})})]})}function F(){return Object(u.jsxs)(l,{children:[Object(u.jsx)(b,{}),Object(u.jsxs)(o.Switch,{children:[Object(u.jsx)(o.Route,{path:"/",exact:!0,children:Object(u.jsx)(S,{})}),Object(u.jsx)(o.Route,{path:"/".concat(w),exact:!0,children:Object(u.jsx)(M,{})}),Object(u.jsx)(o.Route,{path:"/".concat(w,"/:movieId"),children:Object(u.jsx)(E,{})}),Object(u.jsx)(o.Route,{path:"/:movieId",children:Object(u.jsx)(E,{})}),Object(u.jsx)(o.Route,{children:Object(u.jsx)(S,{})})]})]})}var D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(s.a,{children:Object(u.jsx)(F,{})})}),document.getElementById("root")),D()}},[[71,1,2]]]);
//# sourceMappingURL=main.f5e1dd2d.chunk.js.map