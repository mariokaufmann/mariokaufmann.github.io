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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGVuY2lsLWNvbXBvbmVudHMvZGlzdC9lc20vc3QtY291bnRlci5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQTRGOztBQUU1Rix3QkFBd0IsZ0JBQWdCLEtBQUsscUJBQXFCLElBQUksYUFBYSxtQkFBbUIsT0FBTyxXQUFXLFlBQVksWUFBWSxZQUFZLGlCQUFpQixlQUFlLHFCQUFxQixhQUFhLHFCQUFxQixrQkFBa0IsWUFBWSx1QkFBdUIsaUJBQWlCOztBQUV6VDtBQUNBO0FBQ0EsSUFBSSw0REFBZ0I7QUFDcEIsd0JBQXdCLDREQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBQyxDQUFDLG9EQUFJLDZCQUE2Qiw0REFBQyxnQ0FBZ0MsNERBQUMsY0FBYyw0REFBQyxZQUFZLHVEQUF1RCxhQUFhLDREQUFDLDRCQUE0Qiw0REFBQyxnQkFBZ0IsNERBQUMsWUFBWSxzREFBc0Q7QUFDalM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsU0FBUyxlQUFlLFNBQVM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFbUMiLCJmaWxlIjoiMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCB9IGZyb20gJy4vaW5kZXgtYWNkZmZmMTEuanMnO1xuXG5jb25zdCBzdENvdW50ZXJDc3MgPSBcInB7bWFyZ2luOjAuNXJlbSAwfXNwYW57bWFyZ2luLXJpZ2h0OjAuMjVyZW19ZGl2e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXJ9YnV0dG9ue3dpZHRoOjJyZW07aGVpZ2h0OjJyZW07Y29sb3I6d2hpdGU7Ym9yZGVyOm5vbmU7Zm9udC1zaXplOjEuM3JlbTtjdXJzb3I6cG9pbnRlcjtib3JkZXItcmFkaXVzOjAuMnJlbX1idXR0b24ubWludXN7YmFja2dyb3VuZC1jb2xvcjpyZWQ7bWFyZ2luLXJpZ2h0OjFyZW19YnV0dG9uLnBsdXN7YmFja2dyb3VuZC1jb2xvcjpncmVlbjttYXJnaW4tbGVmdDoxcmVtfVwiO1xuXG5jb25zdCBTdENvdW50ZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY291bnRDaGFuZ2VkID0gY3JlYXRlRXZlbnQodGhpcywgXCJjb3VudENoYW5nZWRcIiwgNyk7XG4gICAgdGhpcy5jb3VudGVyVGl0bGUgPSAnJztcbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIHRoaXMuY291bnRlclRpdGxlICYmIGgoXCJwXCIsIG51bGwsIHRoaXMuY291bnRlclRpdGxlKSwgaChcImRpdlwiLCBudWxsLCBoKFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwibWludXNcIiwgb25DbGljazogKCkgPT4gdGhpcy5kZWNyZW1lbnRDb3VudCgpIH0sIFwiXFx1MjE5M1wiKSwgaChcInNwYW5cIiwgbnVsbCwgdGhpcy5jb3VudCksIGgoXCJzbG90XCIsIG51bGwpLCBoKFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwicGx1c1wiLCBvbkNsaWNrOiAoKSA9PiB0aGlzLmluY3JlbWVudENvdW50KCkgfSwgXCJcXHUyMTkxXCIpKSkpO1xuICB9XG4gIGluY3JlbWVudENvdW50KCkge1xuICAgIHRoaXMuY291bnQgKz0gMTtcbiAgICB0aGlzLmNvdW50Q2hhbmdlZC5lbWl0KHRoaXMuY291bnQpO1xuICB9XG4gIGRlY3JlbWVudENvdW50KCkge1xuICAgIGlmICh0aGlzLmNvdW50ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY291bnQgLT0gMTtcbiAgICB0aGlzLmNvdW50Q2hhbmdlZC5lbWl0KHRoaXMuY291bnQpO1xuICB9XG4gIGNvdW50ZXJUaXRsZUhhbmRsZXIobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgY29uc29sZS5sb2coYE9sZCB0aXRsZTogJHtvbGRWYWx1ZX0sIG5ldyB2YWx1ZTogJHtuZXdWYWx1ZX0uYCk7XG4gIH1cbiAgZG91YmxlQ2xpY2tIYW5kbGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCdEb3VibGUgY2xpY2shJyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImNvdW50ZXJUaXRsZVwiOiBbXCJjb3VudGVyVGl0bGVIYW5kbGVyXCJdXG4gIH07IH1cbn07XG5TdENvdW50ZXIuc3R5bGUgPSBzdENvdW50ZXJDc3M7XG5cbmV4cG9ydCB7IFN0Q291bnRlciBhcyBzdF9jb3VudGVyIH07XG4iXSwic291cmNlUm9vdCI6IiJ9