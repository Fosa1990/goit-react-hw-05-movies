(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[7],{113:function(t,e,c){},124:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return l}));var a=c(43),n=c(0),r=c(2),s=c(42),i=c(10),o=(c(113),c(1));function u(t){var e=t.cast;return Object(o.jsx)("div",{className:"cast",children:e.length>=1?e.map((function(t){return Object(o.jsxs)("div",{className:"actor",children:[Object(o.jsx)("div",{className:"image-container",children:Object(o.jsx)("img",{src:i.a+t.profile_path,alt:t.name})}),Object(o.jsx)("h3",{className:"actor-title",children:t.name}),Object(o.jsxs)("span",{className:"actor-role",children:["Character: ",t.character]})]},t.id)})):Object(o.jsx)("p",{className:"no-info",children:"There's no info about casts this movie yet."})})}function l(){var t=Object(n.useState)([]),e=Object(a.a)(t,2),c=e[0],i=e[1],l=Object(r.useParams)().slug.match(/[a-z0-9]+$/)[0];return Object(n.useEffect)((function(){return s.a(l).then((function(t){var e=t.cast.filter((function(t){return t.popularity>4}));i(e)})).catch((function(t){return console.log("error on catch CastPage: ",t)})),function(){return i([])}}),[l]),Object(o.jsx)(u,{cast:c})}}}]);
//# sourceMappingURL=cast-subview.621438c3.chunk.js.map