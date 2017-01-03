// BASE SETUP
// =============================================================================

const DOCUMENT_ROOT :string = 'document_root'
const INDEX_HTML    :string = 'index.html'
const API_PATH      :string = '/api'

const LISTEN_PORT : number = 9000

import {ReviewDataService} from './services/review-data.service'

var express = require('express')
var app = express();
var path = require('path')
var bodyParser = require('body-parser')

var reviewDataService = new ReviewDataService()

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// SETUP DOCUMENT_ROOT FOR ANGULAR APP
// =============================================================================
app.use(express.static(path.join( __dirname, DOCUMENT_ROOT)));

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:9000/api)
router.get('/', (req, res) => {

  })

// Get ALl reviews
router.get('/reviews', (req, res) => {
  // TODO handle bad inputs, MIME-TYPE 404's
  let reviewData = reviewDataService.getReviews( 'ALL', req.query.count||undefined, req.query.page||undefined );
  res.send(JSON.stringify(reviewData))

})


router.get('/reviews/:stateOrId', (req, res) => {
  // TODO handle bad inputs, MIME-TYPE 404's
  // determine whether the value is a sring or a number
  if( isNaN(req.params.stateOrId) ) {

    // state
    let reviewData = reviewDataService.getReviews(req.params.stateOrId, req.query.count || undefined, req.query.page || undefined);
    res.send(JSON.stringify(reviewData))

  } else {

    //id
    let review = reviewDataService.getReviewById(parseInt(req.params.stateOrId))
    res.send(JSON.stringify(review))

  }


})

router.get('/*',
  (req, res) => res.json({ message: `API bad path: ${req.url}`})
)

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use(API_PATH, router);


// SPECIAL ROUTING (Must follow Router configuration)
// =============================================================================
// all requests not otherwise handled should go to 'index.html' to allow
// bookmarking and manual URLs for Angular single page app
app.all('/*',
  ( req, res ) => res.sendFile( path.join(__dirname,DOCUMENT_ROOT,INDEX_HTML) )
)

// START THE SERVER
// =============================================================================
var port = process.env.PORT || LISTEN_PORT
app.listen(port);
console.log(`Server listening on port ${port}`);