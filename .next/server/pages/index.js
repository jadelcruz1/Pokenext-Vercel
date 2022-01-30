(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 539:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__QH1mK",
	"id": "Card_id__3Mjgi",
	"title": "Card_title__nskDb",
	"btn": "Card_btn__xV9sX"
};


/***/ }),

/***/ 17:
/***/ ((module) => {

// Exports
module.exports = {
	"title_container": "Home_title_container__Y_p4I",
	"title": "Home_title__T09hD",
	"pokemon_container": "Home_pokemon_container__TLgHq"
};


/***/ }),

/***/ 790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(17);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: external "next/Link"
const Link_namespaceObject = require("next/Link");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_namespaceObject);
// EXTERNAL MODULE: ./styles/Card.module.css
var Card_module = __webpack_require__(539);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
;// CONCATENATED MODULE: ./components/Card.js




function Card({ pokemon  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Card_module_default()).card,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`,
                    width: "120",
                    height: "120",
                    alt: pokemon.name
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: (Card_module_default()).id,
                    children: [
                        " # ",
                        pokemon.id
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: (Card_module_default()).title,
                    children: pokemon.name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                    href: `/pokemon/${pokemon.id}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (Card_module_default()).btn,
                        children: " Detalhes "
                    })
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./pages/index.js




async function getStaticProps() {
    const maxPokemons = 251;
    const api = 'https://pokeapi.co/api/v2/pokemon/';
    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();
    // add pokemon index
    data.results.forEach((item, index)=>{
        item.id = index + 1;
    });
    return {
        props: {
            pokemons: data.results
        }
    };
}
function Home({ pokemons  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).title_container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: (Home_module_default()).title,
                        children: [
                            "Poke",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Next"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/images/pokeball.png",
                        width: "50",
                        height: "50",
                        alt: "PokeNext"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default()).pokemon_container,
                children: pokemons.map((pokemon)=>/*#__PURE__*/ jsx_runtime_.jsx(Card, {
                        pokemon: pokemon
                    }, pokemon.id)
                )
            })
        ]
    }));
};


/***/ }),

/***/ 28:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(790)));
module.exports = __webpack_exports__;

})();