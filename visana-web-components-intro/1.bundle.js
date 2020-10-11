(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./stencil-components/dist/esm/vis-vote-counter.entry.js":
/*!***************************************************************!*\
  !*** ./stencil-components/dist/esm/vis-vote-counter.entry.js ***!
  \***************************************************************/
/*! exports provided: vis_vote_counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vis_vote_counter", function() { return VoteCounter; });
/* harmony import */ var _index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-acdfff11.js */ "./stencil-components/dist/esm/index-acdfff11.js");


const voteCounterCss = "p{margin:0.5rem 0}span{margin-right:0.25rem}div{display:flex;align-items:center}button{width:2rem;height:2rem;color:white;border:none;font-size:1.3rem;cursor:pointer;border-radius:0.2rem}button.downvote{background-color:red;margin-right:1rem}button.upvote{background-color:green;margin-left:1rem}";

const VoteCounter = class {
  constructor(hostRef) {
    Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.countChanged = Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "countChanged", 7);
    this.counterTitle = '';
    this.count = 0;
  }
  render() {
    return (Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, this.counterTitle && Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, this.counterTitle), Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "downvote", onClick: () => this.decrementCount() }, "\u2193"), Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.count), Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_index_acdfff11_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "upvote", onClick: () => this.incrementCount() }, "\u2191"))));
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
VoteCounter.style = voteCounterCss;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGVuY2lsLWNvbXBvbmVudHMvZGlzdC9lc20vdmlzLXZvdGUtY291bnRlci5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQTRGOztBQUU1RiwwQkFBMEIsZ0JBQWdCLEtBQUsscUJBQXFCLElBQUksYUFBYSxtQkFBbUIsT0FBTyxXQUFXLFlBQVksWUFBWSxZQUFZLGlCQUFpQixlQUFlLHFCQUFxQixnQkFBZ0IscUJBQXFCLGtCQUFrQixjQUFjLHVCQUF1QixpQkFBaUI7O0FBRWhVO0FBQ0E7QUFDQSxJQUFJLDREQUFnQjtBQUNwQix3QkFBd0IsNERBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFDLENBQUMsb0RBQUksNkJBQTZCLDREQUFDLGdDQUFnQyw0REFBQyxjQUFjLDREQUFDLFlBQVksMERBQTBELGFBQWEsNERBQUMsNEJBQTRCLDREQUFDLGdCQUFnQiw0REFBQyxZQUFZLHdEQUF3RDtBQUN0UztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFTLGVBQWUsU0FBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUUyQyIsImZpbGUiOiIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0IH0gZnJvbSAnLi9pbmRleC1hY2RmZmYxMS5qcyc7XG5cbmNvbnN0IHZvdGVDb3VudGVyQ3NzID0gXCJwe21hcmdpbjowLjVyZW0gMH1zcGFue21hcmdpbi1yaWdodDowLjI1cmVtfWRpdntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfWJ1dHRvbnt3aWR0aDoycmVtO2hlaWdodDoycmVtO2NvbG9yOndoaXRlO2JvcmRlcjpub25lO2ZvbnQtc2l6ZToxLjNyZW07Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czowLjJyZW19YnV0dG9uLmRvd252b3Rle2JhY2tncm91bmQtY29sb3I6cmVkO21hcmdpbi1yaWdodDoxcmVtfWJ1dHRvbi51cHZvdGV7YmFja2dyb3VuZC1jb2xvcjpncmVlbjttYXJnaW4tbGVmdDoxcmVtfVwiO1xuXG5jb25zdCBWb3RlQ291bnRlciA9IGNsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XHJcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xyXG4gICAgdGhpcy5jb3VudENoYW5nZWQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNvdW50Q2hhbmdlZFwiLCA3KTtcclxuICAgIHRoaXMuY291bnRlclRpdGxlID0gJyc7XHJcbiAgICB0aGlzLmNvdW50ID0gMDtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIHRoaXMuY291bnRlclRpdGxlICYmIGgoXCJwXCIsIG51bGwsIHRoaXMuY291bnRlclRpdGxlKSwgaChcImRpdlwiLCBudWxsLCBoKFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwiZG93bnZvdGVcIiwgb25DbGljazogKCkgPT4gdGhpcy5kZWNyZW1lbnRDb3VudCgpIH0sIFwiXFx1MjE5M1wiKSwgaChcInNwYW5cIiwgbnVsbCwgdGhpcy5jb3VudCksIGgoXCJzbG90XCIsIG51bGwpLCBoKFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwidXB2b3RlXCIsIG9uQ2xpY2s6ICgpID0+IHRoaXMuaW5jcmVtZW50Q291bnQoKSB9LCBcIlxcdTIxOTFcIikpKSk7XHJcbiAgfVxyXG4gIGluY3JlbWVudENvdW50KCkge1xyXG4gICAgdGhpcy5jb3VudCArPSAxO1xyXG4gICAgdGhpcy5jb3VudENoYW5nZWQuZW1pdCh0aGlzLmNvdW50KTtcclxuICB9XHJcbiAgZGVjcmVtZW50Q291bnQoKSB7XHJcbiAgICBpZiAodGhpcy5jb3VudCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvdW50IC09IDE7XHJcbiAgICB0aGlzLmNvdW50Q2hhbmdlZC5lbWl0KHRoaXMuY291bnQpO1xyXG4gIH1cclxuICBjb3VudGVyVGl0bGVIYW5kbGVyKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgY29uc29sZS5sb2coYE9sZCB0aXRsZTogJHtvbGRWYWx1ZX0sIG5ldyB2YWx1ZTogJHtuZXdWYWx1ZX0uYCk7XHJcbiAgfVxyXG4gIGRvdWJsZUNsaWNrSGFuZGxlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdEb3VibGUgY2xpY2shJyk7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XHJcbiAgICBcImNvdW50ZXJUaXRsZVwiOiBbXCJjb3VudGVyVGl0bGVIYW5kbGVyXCJdXHJcbiAgfTsgfVxyXG59O1xyXG5Wb3RlQ291bnRlci5zdHlsZSA9IHZvdGVDb3VudGVyQ3NzO1xuXG5leHBvcnQgeyBWb3RlQ291bnRlciBhcyB2aXNfdm90ZV9jb3VudGVyIH07XG4iXSwic291cmNlUm9vdCI6IiJ9