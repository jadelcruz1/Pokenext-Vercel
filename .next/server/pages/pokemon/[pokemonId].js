(() => {
var exports = {};
exports.id = 643;
exports.ids = [643];
exports.modules = {

/***/ 901:
/***/ ((module) => {

// Exports
module.exports = {
	"pokemon_container": "Pokemon_pokemon_container__er0fC",
	"title": "Pokemon_title__ymttV",
	"types_container": "Pokemon_types_container__FVT9n",
	"type": "Pokemon_type__SeTvx",
	"type_normal": "Pokemon_type_normal__MobJW",
	"type_fire": "Pokemon_type_fire__fW9CB",
	"type_water": "Pokemon_type_water__KGtv1",
	"type_eletric": "Pokemon_type_eletric__BLbtz",
	"type_grass": "Pokemon_type_grass__GMT9L",
	"type_ice": "Pokemon_type_ice__EzPNM",
	"type_fighting": "Pokemon_type_fighting__0PFCS",
	"type_poison": "Pokemon_type_poison__QnMDc",
	"type_ground": "Pokemon_type_ground__ayOg5",
	"type_flying": "Pokemon_type_flying__VG_ey",
	"type_psychic": "Pokemon_type_psychic__8_6zW",
	"type_bug": "Pokemon_type_bug__FNlDd",
	"type_rock": "Pokemon_type_rock__SlSha",
	"type_ghost": "Pokemon_type_ghost__LLxF5",
	"type_dragon": "Pokemon_type_dragon__KF8AJ",
	"type_dark": "Pokemon_type_dark__8r5Gk",
	"type_steel": "Pokemon_type_steel__AGRUM",
	"type_fairy": "Pokemon_type_fairy__hvw6Y",
	"data_container": "Pokemon_data_container__RgIpM",
	"data_height": "Pokemon_data_height__N4rCl"
};


/***/ }),

/***/ 546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Pokemon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var _styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(901);
/* harmony import */ var _styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2__);



const getStaticPaths = async ()=>{
    const maxPokemons = 251;
    const api = 'https://pokeapi.co/api/v2/pokemon/';
    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();
    // params
    const paths = data.results.map((pokemon, index)=>{
        return {
            params: {
                pokemonId: (index + 1).toString()
            }
        };
    });
    return {
        paths,
        fallback: true
    };
};
const getStaticProps = async (context)=>{
    const id = context.params.pokemonId;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return {
        props: {
            pokemon: data
        }
    };
};
function Pokemon({ pokemon  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokemon_container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
                children: pokemon.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`,
                width: "200",
                height: "200",
                alt: pokemon.name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: "N\xfamero:"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "#",
                            pokemon.id
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: "Tipo:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().types_container),
                        children: pokemon.types.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `${(_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().type)} ${(_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default())['type_' + item.type.name]}`,
                                children: item.type.name
                            }, index)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().data_container),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().data_height),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Altura:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    pokemon.height * 10,
                                    " cm"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().data_weight),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Peso:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    pokemon.weight / 10,
                                    " kg"
                                ]
                            })
                        ]
                    })
                ]
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(546)));
module.exports = __webpack_exports__;

})();