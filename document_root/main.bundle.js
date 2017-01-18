webpackJsonp([0,3],{

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__value_objects_review_review_value_object__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReviewDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewDataService = (function () {
    function ReviewDataService(http) {
        this.http = http;
        this.DEFAULT_REVIEWS_PER_PAGE = 3;
        this.reviews = [
            new __WEBPACK_IMPORTED_MODULE_2__value_objects_review_review_value_object__["a" /* Review */](1001, "2004-05-16T02:31:03.078Z", "Sushi House", "123 Edgewood Rd", "Cedar Rapids", "IA", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 5),
            new __WEBPACK_IMPORTED_MODULE_2__value_objects_review_review_value_object__["a" /* Review */](1002, "2005-09-26T02:31:03.078Z", "Maki Sushi ", "123 Edgewood Rd", "Des Moines", "IA", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 3),
            new __WEBPACK_IMPORTED_MODULE_2__value_objects_review_review_value_object__["a" /* Review */](1003, "2002-01-04T02:31:03.078Z", "Takanama", "123 Edgewood Rd", "Des Moines", "IA", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 4),
            new __WEBPACK_IMPORTED_MODULE_2__value_objects_review_review_value_object__["a" /* Review */](1005, "2006-07-18T02:31:03.078Z", "Oyama", "123 Edgewood Rd", "Cedar Rapids", "IA", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 5),
            new __WEBPACK_IMPORTED_MODULE_2__value_objects_review_review_value_object__["a" /* Review */](1006, "2004-04-29T02:31:03.078Z", "NewBo Sushi", "123 Edgewood Rd", "Cedar Rapids", "IA", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 5),
            new __WEBPACK_IMPORTED_MODULE_2__value_objects_review_review_value_object__["a" /* Review */](1007, "2014-05-16T02:31:03.078Z", "Wasabi", "123 Edgewood Rd", "Cedar Rapids", "IA", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 2),
            new __WEBPACK_IMPORTED_MODULE_2__value_objects_review_review_value_object__["a" /* Review */](1008, "2006-05-16T02:31:03.078Z", "Fuki Sushi", "123 Edgewood Rd", "Palo Alto", "CA", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 3),
            new __WEBPACK_IMPORTED_MODULE_2__value_objects_review_review_value_object__["a" /* Review */](1009, "2002-03-12T02:31:03.078Z", "Joe's Bait Shop", "123 Edgewood Rd", "Fargo", "ND", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 1)
        ];
    }
    ReviewDataService.prototype.getReviews = function (state, page, count) {
        if (page === void 0) { page = 0; }
        if (count === void 0) { count = this.DEFAULT_REVIEWS_PER_PAGE; }
        return this.http.get("/api/reviews/" + state + "?page=" + page + "&count=" + count)
            .map(function (response) { return response.json(); })
            .toPromise();
        // return new Promise<ReviewData>( resolve => {
        //
        //   let requestedReviews: Array<Review> = null;
        //
        //   console.log(`State: ${state}`)
        //
        //   if( state === 'ALL' ) {
        //
        //     // sort the requestedReviews by date
        //     let sorted: Array<Review> = this.reviews.sort(function ( review1: Review, review2: Review ) {
        //       return (new Date(review2.reviewDate)).getTime() - (new Date(review1.reviewDate)).getTime()
        //     })
        //
        //     requestedReviews = sorted.slice(0, ((sorted.length < count) ? sorted.length : count))
        //
        //   } else {
        //
        //     requestedReviews = this.reviews.filter(review=>review.state===state)
        //
        //   }
        //
        //   resolve(
        //     new ReviewData(
        //       requestedReviews.length,
        //       0,
        //       false,
        //       requestedReviews
        //     )
        //   )
        //
        // });
    };
    ReviewDataService.prototype.getReviewById = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var requestedReview = null;
            for (var _i = 0, _a = _this.reviews; _i < _a.length; _i++) {
                var review = _a[_i];
                if (review.id === id) {
                    requestedReview = review;
                }
            }
            resolve(requestedReview);
        });
    };
    ReviewDataService.prototype.getStatesWithReviews = function () {
        return this.http.get('/api/statesWithReviews')
            .map(function (response) { return response.json(); })
            .toPromise();
        // MOCK data
        //
        // return new Promise<string[]>(resolve=>{
        //
        //   let reviewStates: string[] = []
        //
        //   for( let review of this.reviews) {
        //     if( reviewStates.indexOf( review.state ) === -1 ) {
        //       reviewStates.push(review.state)
        //     }
        //   }
        //
        //   resolve( reviewStates )
        //
        // })
    };
    ReviewDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], ReviewDataService);
    return ReviewDataService;
    var _a;
}());
//# sourceMappingURL=/Users/dchung/experiments/angular/sushipilgrim-cli/src/review-data.service.js.map

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MobileDetectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// This service is used by the review-list and
// state-list components to indicate which
// reviews the user has selected
var MobileDetectionService = (function () {
    function MobileDetectionService() {
        this.isMobile = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.isMobile$ = this.isMobile.asObservable();
    }
    MobileDetectionService.prototype.setMobile = function (isMobile) {
        this.isMobile.next(isMobile);
    };
    MobileDetectionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], MobileDetectionService);
    return MobileDetectionService;
}());
//# sourceMappingURL=/Users/dchung/experiments/angular/sushipilgrim-cli/src/mobile-detection.service.js.map

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StateSelectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// This service is used by the review-list and
// state-list components to indicate which
// reviews the user has selected
var StateSelectionService = (function () {
    function StateSelectionService() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.selected$ = this.selected.asObservable();
    }
    StateSelectionService.prototype.setState = function (selected) {
        this.selected.next(selected);
    };
    StateSelectionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], StateSelectionService);
    return StateSelectionService;
}());
//# sourceMappingURL=/Users/dchung/experiments/angular/sushipilgrim-cli/src/state-selection.service.js.map

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_review_data_review_data_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_state_selection_state_selection_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mobile_detection_mobile_detection_service__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReviewListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// This component is just a container for reviews
// and will be used as the target component for
// routing.
var ReviewListComponent = (function () {
    function ReviewListComponent(reviewDataService, stateSelectionService, mobileDetectionService, activatedRoute, router) {
        this.reviewDataService = reviewDataService;
        this.stateSelectionService = stateSelectionService;
        this.mobileDetectionService = mobileDetectionService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.MOBLIE_BREAKPOINT = 768;
        this.REVIEWS_PER_PAGE = 5;
        this.currentPage = 0;
        this.enableAccordian = true;
        this.path = [""];
        this.showMobileMenu = false;
        this.isMobile = window.innerWidth < this.MOBLIE_BREAKPOINT;
    }
    ReviewListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // since ngOnInit is only called once, subscribe to changes in the URL parameter
        this.activatedRoute.params.subscribe(function (params) {
            _this.selectedState = params['state'];
            if (_this.selectedState === undefined) {
                _this.selectedState = 'ALL';
            }
            // this.stateSelectionService.setState(this.selectedState)
            _this.mobileDetectionService.setMobile(_this.isMobile);
            _this.doNav();
        });
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            var page = queryParams['page'] || 0;
            var count = queryParams['count'];
            if (!count) {
                _this.doNav(page);
            }
            else {
                _this.doNav(page, count);
            }
        });
    };
    ReviewListComponent.prototype.doNav = function (page, count) {
        var _this = this;
        if (page === void 0) { page = 0; }
        if (count === void 0) { count = this.REVIEWS_PER_PAGE; }
        this.showMobileMenu = false;
        this.stateSelectionService.setState(this.selectedState);
        this.reviewDataService.getReviews(this.selectedState, page, count).then(function (data) {
            _this.reviews = data.reviews;
            // TODO this is a hack!!! I do not understant why the typeof data.page is a string
            _this.currentPage = Number(data.page).valueOf();
            _this.hasMorePages = data.hasMorePages;
            _this.enableAccordian = (_this.reviews.length > 1);
            _this.updateBreadcrumbs();
        });
        // scroll to the top of the currentPage when the list changes
        window.scrollTo(0, 0);
    };
    ReviewListComponent.prototype.updateBreadcrumbs = function () {
        this.path = ["All Reviews"];
        // TODO only compare first segment
        var url = this.router.url;
        if (url === '/' || url.startsWith("/?") || url.startsWith("/ALL")) {
        }
        else {
            this.path.push(this.reviews[0].state);
            if (/^\/\d+$/.test(url)) {
                this.path.push(this.reviews[0].name);
            }
        }
    };
    ReviewListComponent.prototype.doBreadcrumbNav = function (pathSegment) {
        // If the user clicks on the current breadcrumb
        // do nothing
        if (pathSegment < this.path.length - 1) {
            // set the default to all
            var url = "ALL";
            // if the user clicks on the 2nd (#1) item
            // make it the path
            if (pathSegment === 1) {
                url = this.path[1];
            }
            this.router.navigateByUrl(url)
                .then();
        }
    };
    ReviewListComponent.prototype.onHamburger = function () {
        this.showMobileMenu = !this.showMobileMenu;
    };
    ReviewListComponent.prototype.onResize = function (event) {
        this.isMobile = event.target.innerWidth < this.MOBLIE_BREAKPOINT;
        this.mobileDetectionService.setMobile(this.isMobile);
        if (!this.isMobile) {
            this.showMobileMenu = false;
        }
    };
    ReviewListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'review-list',
            moduleId: "module.id",
            template: __webpack_require__(629),
            styles: [__webpack_require__(625)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_review_data_review_data_service__["a" /* ReviewDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_review_data_review_data_service__["a" /* ReviewDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_review_data_review_data_service__["a" /* ReviewDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_state_selection_state_selection_service__["a" /* StateSelectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_state_selection_state_selection_service__["a" /* StateSelectionService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_mobile_detection_mobile_detection_service__["a" /* MobileDetectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_mobile_detection_mobile_detection_service__["a" /* MobileDetectionService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], ReviewListComponent);
    return ReviewListComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/dchung/experiments/angular/sushipilgrim-cli/src/review-list.component.js.map

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Review; });
// Value object representing restaurant review
var Review = (function () {
    function Review(id, reviewDate, // TODO review use of Date
        name, street, city, state, zip, phone, webUrl, mapUrl, text, rating) {
        this.id = id;
        this.reviewDate = reviewDate;
        this.name = name;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.webUrl = webUrl;
        this.mapUrl = mapUrl;
        this.text = text;
        this.rating = rating;
    }
    Review.getReviewFromJSON = function (json) {
        var o = JSON.parse(json);
        return new Review(o['id'], o['reviewDate'], // TODO review use of Date
        o['name'], o['street'], o['city'], o['state'], o['zip'], o['phone'], o['webUrl'], o['mapUrl'], o['text'], o['rating']);
    };
    Review.MAX_RATING = 5;
    return Review;
}());
//# sourceMappingURL=/Users/dchung/experiments/angular/sushipilgrim-cli/src/review.value-object.js.map

/***/ },

/***/ 354:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 354;


/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(467);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_39" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/dchung/experiments/angular/sushipilgrim-cli/src/main.js.map

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_main_page_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_state_list_state_list_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_review_review_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_review_list_review_list_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_review_data_review_data_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_state_selection_state_selection_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_mobile_detection_mobile_detection_service__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* SushipilgrimRouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__pages_main_main_page_component__["a" /* MainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_state_list_state_list_component__["a" /* StateListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_review_review_component__["a" /* ReviewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_review_list_review_list_component__["a" /* ReviewListComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_review_data_review_data_service__["a" /* ReviewDataService */], __WEBPACK_IMPORTED_MODULE_10__services_mobile_detection_mobile_detection_service__["a" /* MobileDetectionService */], __WEBPACK_IMPORTED_MODULE_9__services_state_selection_state_selection_service__["a" /* StateSelectionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__pages_main_main_page_component__["a" /* MainPageComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/dchung/experiments/angular/sushipilgrim-cli/src/app.module.js.map

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_review_list_review_list_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SushipilgrimRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// This app does something unusual with routing. Regardless of the
// state chosen, the same component is displayed in the router
// outlet. Therefore in the PageListComponent we subscribe to URL parameter
// changes and updat accordingly
var routes = [
    { path: ':state', component: __WEBPACK_IMPORTED_MODULE_2__components_review_list_review_list_component__["a" /* ReviewListComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_review_list_review_list_component__["a" /* ReviewListComponent */] },
];
var SushipilgrimRouterModule = (function () {
    function SushipilgrimRouterModule() {
    }
    SushipilgrimRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], SushipilgrimRouterModule);
    return SushipilgrimRouterModule;
}());
//# sourceMappingURL=/Users/dchung/experiments/angular/sushipilgrim-cli/src/app.routes.js.map

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__value_objects_review_review_value_object__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_data_review_data_service__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// This component displays a Review. It handles both the
// minimized and expanded (accordian) format of the review
var ReviewComponent = (function () {
    function ReviewComponent(reviewDataService, router) {
        this.reviewDataService = reviewDataService;
        this.router = router;
        // this array allows the template to display ricebowls based on
        // the rating - we use it because templates can only do 'for each'
        // loops not simple 'for' loops
        this.riceBowls = new Array();
        this.colorBowl = "images/ricebowl.png";
        this.greyBowl = "images/ricebowl-grey.png";
    }
    ReviewComponent.prototype.ngOnInit = function () {
        // configure the ricebowl array for the rating
        for (var i = 0; i < 5; i++) {
            this.riceBowls.push(i >= (__WEBPACK_IMPORTED_MODULE_2__value_objects_review_review_value_object__["a" /* Review */].MAX_RATING - this.review.rating) ? true : false);
        }
    };
    ReviewComponent.prototype.showThisReview = function () {
        this.router.navigateByUrl("" + this.review.id)
            .then();
    };
    ReviewComponent.prototype.more = function () {
        this.expanded = !this.expanded;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__value_objects_review_review_value_object__["a" /* Review */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__value_objects_review_review_value_object__["a" /* Review */]) === 'function' && _a) || Object)
    ], ReviewComponent.prototype, "review", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], ReviewComponent.prototype, "enableAccordian", void 0);
    ReviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'review',
            moduleId: "module.id",
            template: __webpack_require__(630),
            styles: [__webpack_require__(626)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_review_data_review_data_service__["a" /* ReviewDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_data_review_data_service__["a" /* ReviewDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_review_data_review_data_service__["a" /* ReviewDataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], ReviewComponent);
    return ReviewComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/dchung/experiments/angular/sushipilgrim-cli/src/review.component.js.map

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_review_data_review_data_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_state_selection_state_selection_service__ = __webpack_require__(190);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StateListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StateInfo = (function () {
    function StateInfo(name, abbr, hasReviews) {
        this.name = name;
        this.abbr = abbr;
        this.hasReviews = hasReviews;
    }
    return StateInfo;
}());
var StateListComponent = (function () {
    function StateListComponent(reviewDataService, stateSelectionService, router) {
        var _this = this;
        this.reviewDataService = reviewDataService;
        this.stateSelectionService = stateSelectionService;
        this.router = router;
        this.selectedState = "";
        this.states = [
            new StateInfo('All Reviews', 'ALL', false),
            new StateInfo('Alabama', 'AL', false),
            new StateInfo('Alaska', 'AK', false),
            new StateInfo('Arizona', 'AZ', false),
            new StateInfo('Arkansas', 'AR', false),
            new StateInfo('California', 'CA', false),
            new StateInfo('Colorado', 'CO', false),
            new StateInfo('Connecticut', 'CT', false),
            new StateInfo('Delaware', 'DE', false),
            new StateInfo('Florida', 'FL', false),
            new StateInfo('Georgia', 'GA', false),
            new StateInfo('Hawaii', 'HI', false),
            new StateInfo('Idaho', 'ID', false),
            new StateInfo('Illinois', 'IL', false),
            new StateInfo('Indiana', 'IN', false),
            new StateInfo('Iowa', 'IA', false),
            new StateInfo('Kansas', 'KS', false),
            new StateInfo('Kentucky', 'KY', false),
            new StateInfo('Louisiana', 'LA', false),
            new StateInfo('Maine', 'ME', false),
            new StateInfo('Maryland', 'MD', false),
            new StateInfo('Massachusetts', 'MA', false),
            new StateInfo('Michigan', 'MI', false),
            new StateInfo('Minnesota', 'MN', false),
            new StateInfo('Mississippi', 'MS', false),
            new StateInfo('Missouri', 'MO', false),
            new StateInfo('Montana', 'MT', false),
            new StateInfo('Nebraska', 'NE', false),
            new StateInfo('Nevada', 'NV', false),
            new StateInfo('New Hampshire', 'NH', false),
            new StateInfo('New Jersey', 'NJ', false),
            new StateInfo('New Mexico', 'NM', false),
            new StateInfo('New York', 'NY', false),
            new StateInfo('North Carolina', 'NC', false),
            new StateInfo('North Dakota', 'ND', false),
            new StateInfo('Ohio', 'OH', false),
            new StateInfo('Oklahoma', 'OK', false),
            new StateInfo('Oregon', 'OR', false),
            new StateInfo('Pennsylvania', 'PA', false),
            new StateInfo('Rhode Island', 'RI', false),
            new StateInfo('South Carolina', 'SC', false),
            new StateInfo('South Dakota', 'SD', false),
            new StateInfo('Tennessee', 'TN', false),
            new StateInfo('Texas', 'TX', false),
            new StateInfo('Utah', 'UT', false),
            new StateInfo('Vermont', 'VT', false),
            new StateInfo('Virginia', 'VA', false),
            new StateInfo('Washington', 'WA', false),
            new StateInfo('West Virginia', 'WV', false),
            new StateInfo('Wisconsin', 'WI', false),
            new StateInfo('Wyoming', 'WY', false)
        ];
        // selected$ is an Observable so the subscribe
        // function watches for changes
        stateSelectionService.selected$.subscribe(function (state) {
            _this.selectedState = state;
        });
    }
    StateListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reviewDataService.getStatesWithReviews().then(function (statesWithReviews) {
            _this.statesWithReviews = statesWithReviews;
            // since 'All Reviews' is not a state we
            // will treat it as a special case
            if (_this.statesWithReviews.length) {
                _this.states[0].hasReviews = true;
            }
            // TODO: this is a very inefficient algorithm
            for (var _i = 0, _a = _this.states; _i < _a.length; _i++) {
                var state = _a[_i];
                if (_this.statesWithReviews.indexOf(state.abbr) !== -1) {
                    state.hasReviews = true;
                }
            }
        });
    };
    StateListComponent.prototype.clicked = function (state) {
        // only follow the link if the selected
        // state is different than the current state
        if (this.selectedState !== state) {
            this.router.navigateByUrl("" + state)
                .then();
        }
    };
    StateListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'state-list',
            moduleId: "module.id",
            template: __webpack_require__(631),
            styles: [__webpack_require__(627)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_review_data_review_data_service__["a" /* ReviewDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_review_data_review_data_service__["a" /* ReviewDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_review_data_review_data_service__["a" /* ReviewDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_state_selection_state_selection_service__["a" /* StateSelectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_state_selection_state_selection_service__["a" /* StateSelectionService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], StateListComponent);
    return StateListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/dchung/experiments/angular/sushipilgrim-cli/src/state-list.component.js.map

/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mobile_detection_mobile_detection_service__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MainPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainPageComponent = (function () {
    function MainPageComponent(mobileDetectionService) {
        var _this = this;
        this.mobileDetectionService = mobileDetectionService;
        // isMobile$ is an Observable so the subscribe
        // function watches for changes
        this.mobileDetectionService.isMobile$.subscribe(function (isMobile) {
            _this.isMobile = isMobile;
        });
    }
    MainPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'page',
            moduleId: "module.id",
            template: __webpack_require__(632),
            styles: [__webpack_require__(628)],
            providers: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_mobile_detection_mobile_detection_service__["a" /* MobileDetectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_mobile_detection_mobile_detection_service__["a" /* MobileDetectionService */]) === 'function' && _a) || Object])
    ], MainPageComponent);
    return MainPageComponent;
    var _a;
}());
//# sourceMappingURL=/Users/dchung/experiments/angular/sushipilgrim-cli/src/main-page.component.js.map

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/dchung/experiments/angular/sushipilgrim-cli/src/environment.js.map

/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/dchung/experiments/angular/sushipilgrim-cli/src/polyfills.js.map

/***/ },

/***/ 625:
/***/ function(module, exports) {

module.exports = "nav.prev {\n  float: left;\n}\n\nnav.next {\n  float: right;\n}\n\n.disabled {\n  color: #dddddd;\n}\n\nheader {\n  margin-bottom: 1em;\n}\n\nheader,\nfooter,\nsushi-breadcrumb {\n  height: 2.4em;\n}\n\nheader,\nfooter {\n  background-color: #f8f8f8;\n  padding: .5em 0.4em 0em 0.4em;\n  font-weight: 900;\n  font-size: .7em;\n}\n\n.sushi-breadcrumb {\n  float: left;\n  display: inline-block;\n  border-right: 1px gray solid;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n}\n\n#hamburger {\n  float: right;\n  width: 1.5em;\n  margin-right: .25em;\n}\n\n.sushi-breadcrumb:hover {\n  font-style: italic;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.sushi-breadcrumb:last-of-type {\n  font-style: normal;\n  cursor: default;\n  text-decoration: none;\n}\n\n\n\n/*TODO these styles are for anchors, the prev*/\n/*next links might become spans in the future*/\n\n.prev>a,\n.next>a {\n  color: black;\n}\n\n.prev>a:hover,\n.next>a:hover {\n  font-style: italic;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n@media (min-width: 768px) {\n  #hamburger {\n    display: none;\n  }\n\n  state-list {\n    display: none;\n  }\n\n}"

/***/ },

/***/ 626:
/***/ function(module, exports) {

module.exports = "article {\n  padding: 0 1em 0 1em;\n}\n\nsection p:first-child {\n  margin-top: 1em;\n}\n\n.continue {\n  color: red;\n  font-size: smaller;\n  cursor: pointer;\n  float: right;\n  border: black 1px solid;\n  border-radius: .75em;\n  margin-bottom: .5em;\n  padding: .2em .4em;\n}\n\n.continue:hover {\n  font-style: italic;\n}\n\n.continue > span {\n  /*float: right;*/\n}\n\n.sushi-hidden {\n  display: none;\n}\n\nfooter {\n  margin-top: 0.5em;\n  padding: .5em;\n  border: 1px black solid;\n  background-color: lightgray;\n  font-style: italic;\n  margin-bottom: 1.5em;\n}\n\n.clear {\n  clear: both;\n}\n\n.rice-bowls {\n  display: inline-block;\n  float: right;\n}\n\n.restaurant-name {\n  font-weight: 900;\n  font-size: 1.2em;\n}\n\n.restaurant-name:hover {\n  font-style: italic;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.sushiFadeLastLine {\n  height: 2.5em;\n  overflow: hidden;\n}\n\n.rice-bowl {\n  width: 25px;\n  padding-bottom: .3em;\n}\n\n.rice-bowl-detail {\n  display: none;\n}\n\n\n/* Extra small devices (phones, less than 768px) */\n/* No media query since this is the default in Bootstrap */\n\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n\n  .sushiFadeLastLine {\n    height: 4em;\n    overflow: hidden;\n  }\n\n  .rice-bowl-detail {\n    display: inline-block;\n  }\n\n  .rice-bowl {\n    width: 30px;\n    padding-bottom: .1em;\n  }\n\n  .sushi-hidden {\n    display: inline-block;\n  }\n\n  .continue {\n    border: none;\n    margin-bottom: 0px;\n    padding: 0px;\n  }\n}\n"

/***/ },

/***/ 627:
/***/ function(module, exports) {

module.exports = "nav {\n  font-size: 0.9em;\n  padding-left: 0em;\n  padding-top: 0.5em;\n  margin-left: 0em;\n  border-top: lightgray solid 1px;\n}\nul {\n  margin:0;\n}\n\nli {\n  list-style: none;\n  border: black 1px solid;\n  padding: .5em 0 .5em 0.5em;\n}\n\n\n.selected {\n  display: inline-block;\n  width: 0.9em;\n}\n\n.link {\n  display: inline-block;\n  padding-left: 0em;\n  margin-left: -0.2em;\n  color: blue;\n}\n\n.link:hover {\n  font-style: italic;\n  color: blue;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n@media (min-width: 768px) {\n\n  li {\n    border: none;\n    padding: 0;\n  }\n\n}"

/***/ },

/***/ 628:
/***/ function(module, exports) {

module.exports = "header {\n  margin-bottom: 0.5em;\n}\n\naside {\n  margin-left: .7em;\n  float: right;\n  width: 150px;\n  margin-bottom: .5em;\n}\n\nsection {\n  width: auto;\n  overflow: hidden;\n}\n\n@media (min-width: 768px) {\n\n}"

/***/ },

/***/ 629:
/***/ function(module, exports) {

module.exports = "<header>\n  <div (window:resize)=\"onResize($event)\" class=\"sushi-breadcrumb\"\n       *ngFor=\"let pathSegment of path; let i = index\"\n       (click)=\"doBreadcrumbNav(i)\">{{pathSegment}}&nbsp;</div>\n  <img id=\"hamburger\" (click)=\"onHamburger()\" src=\"../../../images/hamburger.png\"/>\n</header>\n\n<review\n      [hidden]=\"isMobile && showMobileMenu\"\n      *ngFor=\"let review of reviews\"\n      [review]=\"review\"\n      [enableAccordian]=\"enableAccordian\"></review>\n\n<state-list [hidden]=\"!isMobile || !showMobileMenu\"></state-list>\n\n<footer *ngIf=\"!showMobileMenu && (currentPage != 0 || hasMorePages)\">\n  <nav *ngIf=\"currentPage != 0\" class=\"prev\">\n    <a href=\"#\" [routerLink]=\"['/'+selectedState]\" [queryParams]={page:currentPage-1}>&laquo; Prev Page</a>\n  </nav>\n  <nav *ngIf=\"hasMorePages\" class=\"next\">\n    <a href=\"#\" [routerLink]=\"['/'+selectedState]\" [queryParams]={page:currentPage+1}>Next Page &raquo;</a>\n  </nav>\n</footer>"

/***/ },

/***/ 630:
/***/ function(module, exports) {

module.exports = "<article>\n\n  <header>\n    <span class=\"restaurant-name\" (click)=\"showThisReview()\">{{review.name}}</span><br>\n    {{review.street}}<br>\n    {{review.city}}, {{review.state}}&nbsp;&nbsp;{{review.zip}}\n  </header>\n\n  <section>\n    <template ngFor let-paragraph [ngForOf]=\"review.text\" let-i=\"index\">\n\n      <!--innerHTML syntax used for binding to support-->\n      <!--rendering of HTML tags in bound text-->\n      <!-- TODO: research what tags can be included -->\n      <p *ngIf=\"i === 0 || expanded || !enableAccordian\"\n         [innerHTML]=\"paragraph\"\n         [ngClass]=\"{sushiFadeLastLine:i === 0 && !expanded && enableAccordian}\">\n      </p>\n\n      <template [ngIf]=\"i === 0 && !expanded && enableAccordian\">\n        <div class=\"continue\" (click)=\"more()\">\n          <span class=\"sushi-hidden\">{{review.name}}&nbsp;</span><span>Full Review &raquo;</span>\n        </div>\n        <hr class=\"clear\">\n      </template>\n\n      <div *ngIf=\"i === (review.text.length-1) && expanded && enableAccordian\" class=\"continue\" (click)=\"more()\">\n        <span>&laquo; Minimize Review</span>\n      </div>\n\n    </template>\n  </section>\n\n  <!--Only display footer if review is expanded-->\n  <footer class=\"clear\" *ngIf=\"expanded || !enableAccordian\">\n    {{review.name}}<span class=\"rice-bowl-detail\"> &mdash; {{review.rating}} rice bowl<span *ngIf=\"review.rating > 1\">s</span></span>\n      <div class=\"rice-bowls\">\n        <img *ngFor=\"let bowl of riceBowls; let i = index\" class=\"rice-bowl\" [src]=\"bowl?colorBowl:greyBowl\"/>\n      </div>\n  </footer>\n\n</article>"

/***/ },

/***/ 631:
/***/ function(module, exports) {

module.exports = "<nav>\n\n  <ul *ngFor=\"let state of states\">\n\n    <li *ngIf=\"state.hasReviews\">\n      <div class=\"selected\">{{selectedState===state.abbr?'•':''}}</div>\n      <a class=\"link\" href=\"#\" [routerLink]=\"['/'+state.abbr]\" [queryParams]=\"{page: 0}\">{{state.name}}</a>\n    </li>\n\n    <li *ngIf=\"!state.hasReviews\">\n      <div class=\"selected\"></div>{{state.name}}\n    </li>\n\n  </ul>\n\n</nav>"

/***/ },

/***/ 632:
/***/ function(module, exports) {

module.exports = "<aside id=\"state-list-container\" [hidden]=\"isMobile\">\n  <header>Reviews</header>\n  <state-list></state-list>\n</aside>\n\n<section>\n  <router-outlet></router-outlet>\n</section>"

/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(355);


/***/ }

},[651]);
//# sourceMappingURL=main.bundle.map