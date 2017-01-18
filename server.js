// BASE SETUP
// =============================================================================
"use strict";
var DOCUMENT_ROOT = 'document_root';
var INDEX_HTML = 'index.html';
var API_PATH = '/api';
var LISTEN_PORT = 9000;
var CONTENT_TYPE = 'content-type';
var JSON_MIME = 'application/json';
var review_data_service_1 = require("./services/review-data.service");
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var reviewDataService = new review_data_service_1.ReviewDataService();
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// SETUP DOCUMENT_ROOT FOR ANGULAR APP
// =============================================================================
app.use(express.static(path.join(__dirname, DOCUMENT_ROOT)));
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router
// Get ALl reviews
router.get('/reviews', function (req, res) {
    // TODO handle bad inputs, MIME-TYPE 404's req.query.count||undefined
    var reviewData = reviewDataService.getReviews('ALL', req.query.count || undefined, req.query.page || undefined);
    res.setHeader(CONTENT_TYPE, JSON_MIME);
    res.send(JSON.stringify(reviewData));
});
router.get('/reviews/:selector', function (req, res) {
    console.log("/api/reviews/" + req.params.selector + " count:" + req.query.count + " page:" + req.query.page);
    // TODO handle bad inputs, MIME-TYPE 404's
    var reviewData = reviewDataService.getReviews(req.params.selector, req.query.count || undefined, req.query.page || undefined);
    res.setHeader(CONTENT_TYPE, JSON_MIME);
    res.send(JSON.stringify(reviewData));
});
router.get('/statesWithReviews', function (req, res) {
    // TODO handle bad inputs, MIME-TYPE 404's
    var statesWithReviews = reviewDataService.getStatesWithReviews();
    res.setHeader(CONTENT_TYPE, JSON_MIME);
    res.send(JSON.stringify(statesWithReviews));
});
router.get('/*', function (req, res) { return res.json({ message: "API bad path: " + req.url }); });
// more routes for our API will happen here
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use(API_PATH, router);
// SPECIAL ROUTING (Must follow Router configuration)
// =============================================================================
// all requests not otherwise handled should go to 'index.html' to allow
// bookmarking and manual URLs for Angular single page app
app.all('/*', function (req, res) { return res.sendFile(path.join(__dirname, DOCUMENT_ROOT, INDEX_HTML)); });
// START THE SERVER
// =============================================================================
var port = process.env.PORT || LISTEN_PORT;
app.listen(port);
console.log("Server listening on port " + port);
