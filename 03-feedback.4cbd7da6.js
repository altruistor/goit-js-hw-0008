!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r("gK76q");var l=r("eaxEB"),o="feedback-form-state",u=document.querySelector(".feedback-form"),i=document.querySelector("input"),s=document.querySelector("textarea");!function(){var e=localStorage.getItem(o);if(e){var t=JSON.parse(e);i.value=t.email,s.value=t.message}}();var d=e(l)((function(){var e={email:i.value,message:s.value};localStorage.setItem(o,JSON.stringify(e))}),500);i.addEventListener("input",d),s.addEventListener("input",d),u.addEventListener("submit",(function(e){e.preventDefault();var t={email:i.value,message:s.value};""!==i.value&&""!==s.value&&(localStorage.setItem(o,JSON.stringify(t)),u.elements.email.value="",u.elements.message.value="",console.log(t))}))}();
//# sourceMappingURL=03-feedback.4cbd7da6.js.map
