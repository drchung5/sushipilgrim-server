// server.js

// BASE SETUP
// =============================================================================

const DOCUMENT_ROOT :string = 'document_root'
const INDEX_HTML    :string = 'index.html'
const API_PATH      :string = '/api'

const LISTEN_PORT : number = 9000

var express = require('express')
var app = express();
var path = require('path')
var bodyParser = require('body-parser')


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || LISTEN_PORT        // set our port

// SETUP DOCUMENT_ROOT FOR ANGULAR APP
// =============================================================================
app.use(express.static(path.join( __dirname, DOCUMENT_ROOT)));


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:9000/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use(API_PATH, router);


// SPECIAL ROUTING (Must follow Router configuration)
// =============================================================================
// all requests not otherwise handled should go to 'index.html' to allow
// bookmarking and manual URLs for Angular single page app
app.all('/*', function( req, res ){
  res.sendFile( path.join(__dirname,DOCUMENT_ROOT,INDEX_HTML) )
})


// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`Server listening on port ${LISTEN_PORT}`);