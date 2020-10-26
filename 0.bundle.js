(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./stencil-components/dist/esm/st-counter.entry.js":
/*!*********************************************************!*\
  !*** ./stencil-components/dist/esm/st-counter.entry.js ***!
  \*********************************************************/
/*! exports provided: st_counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "st_counter", function() { return StCounter; });
/* harmony import */ var _index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-acdfff11.js */ "./stencil-components/dist/esm/index-acdfff11.js");


const stCounterCss = "p{margin:0.5rem 0}span{margin-right:0.25rem}div{display:flex;align-items:center}button{width:2rem;height:2rem;color:white;border:none;font-size:1.3rem;cursor:pointer;border-radius:0.2rem}button.minus{background-color:red;margin-right:1rem}button.plus{background-color:green;margin-left:1rem}";

const StCounter = class {
  constructor(hostRef) {
    Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.countChanged = Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "countChanged", 7);
    this.counterTitle = '';
    this.count = 0;
  }
  render() {
    return (Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, this.counterTitle && Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, this.counterTitle), Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "minus", onClick: () => this.decrementCount() }, "\u2193"), Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.count), Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "plus", onClick: () => this.incrementCount() }, "\u2191"))));
  }
  incrementCount() {
    this.count += 1;
    this.countChanged.emit(this.count);
  }
  decrementCount() {
    if (this.count === 0) {
      return;
    }
    this.count -= 1;
    this.countChanged.emit(this.count);
  }
  counterTitleHandler(newValue, oldValue) {
    console.log(`Old title: ${oldValue}, new value: ${newValue}.`);
  }
  doubleClickHandler() {
    console.log('Double click!');
  }
  static get watchers() { return {
    "counterTitle": ["counterTitleHandler"]
  }; }
};
StCounter.style = stCounterCss;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGVuY2lsLWNvbXBvbmVudHMvZGlzdC9lc20vc3QtY291bnRlci5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQTRGOztBQUU1Rix3QkFBd0IsZ0JBQWdCLEtBQUsscUJBQXFCLElBQUksYUFBYSxtQkFBbUIsT0FBTyxXQUFXLFlBQVksWUFBWSxZQUFZLGlCQUFpQixlQUFlLHFCQUFxQixhQUFhLHFCQUFxQixrQkFBa0IsWUFBWSx1QkFBdUIsaUJBQWlCOztBQUV6VDtBQUNBO0FBQ0EsSUFBSSw0REFBZ0I7QUFDcEIsd0JBQXdCLDREQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBQyxDQUFDLG9EQUFJLDZCQUE2Qiw0REFBQyxnQ0FBZ0MsNERBQUMsY0FBYyw0REFBQyxZQUFZLHVEQUF1RCxhQUFhLDREQUFDLDRCQUE0Qiw0REFBQyxnQkFBZ0IsNERBQUMsWUFBWSxzREFBc0Q7QUFDalM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsU0FBUyxlQUFlLFNBQVM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFbUMiLCJmaWxlIjoiMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCB9IGZyb20gJy4vaW5kZXgtYWNkZmZmMTEuanMnO1xuXG5jb25zdCBzdENvdW50ZXJDc3MgPSBcInB7bWFyZ2luOjAuNXJlbSAwfXNwYW57bWFyZ2luLXJpZ2h0OjAuMjVyZW19ZGl2e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXJ9YnV0dG9ue3dpZHRoOjJyZW07aGVpZ2h0OjJyZW07Y29sb3I6d2hpdGU7Ym9yZGVyOm5vbmU7Zm9udC1zaXplOjEuM3JlbTtjdXJzb3I6cG9pbnRlcjtib3JkZXItcmFkaXVzOjAuMnJlbX1idXR0b24ubWludXN7YmFja2dyb3VuZC1jb2xvcjpyZWQ7bWFyZ2luLXJpZ2h0OjFyZW19YnV0dG9uLnBsdXN7YmFja2dyb3VuZC1jb2xvcjpncmVlbjttYXJnaW4tbGVmdDoxcmVtfVwiO1xuXG5jb25zdCBTdENvdW50ZXIgPSBjbGFzcyB7XHJcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xyXG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcclxuICAgIHRoaXMuY291bnRDaGFuZ2VkID0gY3JlYXRlRXZlbnQodGhpcywgXCJjb3VudENoYW5nZWRcIiwgNyk7XHJcbiAgICB0aGlzLmNvdW50ZXJUaXRsZSA9ICcnO1xyXG4gICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCB0aGlzLmNvdW50ZXJUaXRsZSAmJiBoKFwicFwiLCBudWxsLCB0aGlzLmNvdW50ZXJUaXRsZSksIGgoXCJkaXZcIiwgbnVsbCwgaChcImJ1dHRvblwiLCB7IGNsYXNzOiBcIm1pbnVzXCIsIG9uQ2xpY2s6ICgpID0+IHRoaXMuZGVjcmVtZW50Q291bnQoKSB9LCBcIlxcdTIxOTNcIiksIGgoXCJzcGFuXCIsIG51bGwsIHRoaXMuY291bnQpLCBoKFwic2xvdFwiLCBudWxsKSwgaChcImJ1dHRvblwiLCB7IGNsYXNzOiBcInBsdXNcIiwgb25DbGljazogKCkgPT4gdGhpcy5pbmNyZW1lbnRDb3VudCgpIH0sIFwiXFx1MjE5MVwiKSkpKTtcclxuICB9XHJcbiAgaW5jcmVtZW50Q291bnQoKSB7XHJcbiAgICB0aGlzLmNvdW50ICs9IDE7XHJcbiAgICB0aGlzLmNvdW50Q2hhbmdlZC5lbWl0KHRoaXMuY291bnQpO1xyXG4gIH1cclxuICBkZWNyZW1lbnRDb3VudCgpIHtcclxuICAgIGlmICh0aGlzLmNvdW50ID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY291bnQgLT0gMTtcclxuICAgIHRoaXMuY291bnRDaGFuZ2VkLmVtaXQodGhpcy5jb3VudCk7XHJcbiAgfVxyXG4gIGNvdW50ZXJUaXRsZUhhbmRsZXIobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgT2xkIHRpdGxlOiAke29sZFZhbHVlfSwgbmV3IHZhbHVlOiAke25ld1ZhbHVlfS5gKTtcclxuICB9XHJcbiAgZG91YmxlQ2xpY2tIYW5kbGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0RvdWJsZSBjbGljayEnKTtcclxuICB9XHJcbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcclxuICAgIFwiY291bnRlclRpdGxlXCI6IFtcImNvdW50ZXJUaXRsZUhhbmRsZXJcIl1cclxuICB9OyB9XHJcbn07XHJcblN0Q291bnRlci5zdHlsZSA9IHN0Q291bnRlckNzcztcblxuZXhwb3J0IHsgU3RDb3VudGVyIGFzIHN0X2NvdW50ZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=