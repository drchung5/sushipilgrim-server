import {Review}     from '../value-objects/review.value-object'
import {ReviewData} from '../value-objects/review-data.value-object'
import {isNumber} from "util";

export class ReviewDataService {

  constructor(){}

  // This method returns reviews based on the parameters passed in
  // The selector determines which reviews and the count determines the
  // number returned. The page indicates which page is requested. All
  // reviews are wrapped in a ReviewData object
  //
  // The selectors work as follows
  //
  // 1) If the selector is 'ALL' it returns all reviews (subject to pagination)
  //
  // 2) If the selector is a state (e.g. 'IA') it returns all reviews of
  //    restaurants in that state subject to pagination
  //
  // 3) If the selector is a number, the number is treated as an id and it
  //    returns the review that matches the id. Since there is only one
  //    review it is not subject to pagination
  //

  getReviews( selector: string, count: number = 5, page: number = 0 ): ReviewData{

    console.log( `getReviews( ${selector}, ${count}, ${page} )` )

    let reviewData : ReviewData = null

    if ( /^\d+$/.test(selector)  ) {

      console.log('BY ID')

      // the selector is a number so treat it as a review ID
      let requestedReview: Review = null

      let id = Number(selector)

      for (let review of this.reviews) {
        if( review.id === id ) {
          requestedReview = review
          break
        }
      }

      reviewData = new ReviewData (
        requestedReview ? 1 : 0,  // if the review is null set count to 0
        0,
        false,
        [ requestedReview ]
      )

    } else {

      // the selector is not a number os treat it as a state
      // abbreviation or 'ALL'

      let requestedReviews : Array<Review> = this.reviews

      if (selector != 'ALL') {
        // filter by state
        requestedReviews = requestedReviews.filter(review => review.state === selector)
      }

      requestedReviews = requestedReviews.sort(function ( review1: Review, review2: Review ) {
        return (new Date(review2.reviewDate)).getTime() - (new Date(review1.reviewDate)).getTime()
      })

      // TODO: do the math here!!!

      let resultsCount = requestedReviews.length

      reviewData = new ReviewData(
        count <= resultsCount ? count : resultsCount,
        page,
        (((page * count) + count) < requestedReviews.length),
        requestedReviews = requestedReviews.slice(page * count, count)
      )
    }

    console.log(`count: ${reviewData.count}  page: ${reviewData.page} hasMorePages: ${reviewData.hasMorePages}`)

    return reviewData
  }

  getStatesWithReviews(): Array<string>{
    let reviewStates: Array<string> = new Array<string>()
    for( let review of this.reviews) {
      if( reviewStates.indexOf( review.state ) === -1 ) {
        reviewStates.push(review.state)
      }
    }
    return reviewStates
  }


  reviews: Array<Review> = [

    new Review(
      1000,
      "2004-05-16T02:31:03.078Z",
      "Sushi House",
      "123 Edgewood Rd",
      "Cedar Rapids",
      "IA",
      "52404",
      "3197778888",
      "http://www.sushihouse.com",
      "http://www.map.com",
      [
        "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
        "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
      ],
      5
    ),

    new Review(
      1001,
      "2005-09-26T02:31:03.078Z",
      "Maki Sushi ",
      "123 Edgewood Rd",
      "Des Moines",
      "IA",
      "52404",
      "3197778888",
      "http://www.sushihouse.com",
      "http://www.map.com",
      [
        "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
        "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
      ],
      3
    ),

    new Review(
      1002,
      "2002-01-04T02:31:03.078Z",
      "Takanama",
      "123 Edgewood Rd",
      "Des Moines",
      "IA",
      "52404",
      "3197778888",
      "http://www.sushihouse.com",
      "http://www.map.com",
      [
        "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
        "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
      ],
      4
    ),

    new Review(
      1003,
      "2006-07-18T02:31:03.078Z",
      "Oyama",
      "123 Edgewood Rd",
      "Cedar Rapids",
      "IA",
      "52404",
      "3197778888",
      "http://www.sushihouse.com",
      "http://www.map.com",
      [
        "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
        "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
      ],
      5
    ),

    new Review(
      1004,
      "2004-04-29T02:31:03.078Z",
      "NewBo Sushi",
      "123 Edgewood Rd",
      "Cedar Rapids",
      "IA",
      "52404",
      "3197778888",
      "http://www.sushihouse.com",
      "http://www.map.com",
      [
        "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
        "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
      ],
      5
    ),

    new Review(
      1005,
      "2014-05-16T02:31:03.078Z",
      "Wasabi",
      "123 Edgewood Rd",
      "Cedar Rapids",
      "IA",
      "52404",
      "3197778888",
      "http://www.sushihouse.com",
      "http://www.map.com",
      [
        "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
        "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
      ],
      2
    ),

    new Review(
      1006,
      "2006-05-16T02:31:03.078Z",
      "Fuki Sushi",
      "123 Edgewood Rd",
      "Palo Alto",
      "CA",
      "52404",
      "3197778888",
      "http://www.sushihouse.com",
      "http://www.map.com",
      [
        "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
        "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
      ],
      3
    ),

    new Review(
      1007,
      "2002-03-12T02:31:03.078Z",
      "Joe's Bait Shop",
      "123 Edgewood Rd",
      "Fargo",
      "ND",
      "52404",
      "3197778888",
      "http://www.sushihouse.com",
      "http://www.map.com",
      [
        "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
        "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
      ],
      1
    )
  ]

}