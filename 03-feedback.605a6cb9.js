!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in t){var l=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,l.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){t[e]=o},e.parcelRequired7c6=l);var n,a=l("1WSnx"),r={form:document.querySelector(".feedback-form"),inputEl:document.querySelector("input"),textareaEl:document.querySelector("textarea")},i=r.form,u=r.inputEl,d=r.textareaEl;try{n=JSON.parse(localStorage.getItem("feedback-form-state"))||{}}catch(e){console.log(e.name),console.log(e.message)}window.onload=function(){var e=n.email,o=n.message;if(void 0===e&&void 0===o)return;void 0===e?(d.value=o,console.log(o)):void 0===o?(u.value=e,console.log(e)):(d.value=o,u.value=e)}(),i.addEventListener("input",(0,a.throttle)((function(){n.email=u.value,n.message=d.value,localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500)),i.addEventListener("submit",(function(e){e.preventDefault(),console.log(n),u.value="",d.value="",localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.605a6cb9.js.map
