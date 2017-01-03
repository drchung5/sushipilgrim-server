# Sushipilgrim Server

This NodeJS project is a companion to 
[Sushipilgrim-CLI](https://github.com/drchung5/sushipilgrim-angular-cli) 
It is written in Typescript and serves two purposes:

<ol>
<li>It acts as a web server to serve the <em>minified</em> and 
<em>concatenated</em> single page Angular 2 app (Sushipilgrum-CLI)
from its <em>document_root</em> directory. In order to support 
bookmarking and manual URLs all requests are routed to index.html
 
 Access the app at <em>http://host:port</em>

<li>It impements the RESTful API to serve sushi 
restaurant reviews as described below. 
For now this is a read only API and reviews are <em>hard-coded</em>
(mocked) into the solution. Eventually they will be stored in MongoDB
for a complete MEAN stack implementation.
</ol>

# API

### Get All Reviews*

```
http://host:port/api/reviews?count=[2]&page=[0]
```

This function returns all reviews. The number of reviews 
can be limited by the _count_ parameter. The _page_ 
parameter specifies a _zero-based_ page number. The 
_hasMorePages_ field indicates whether this is the last 
page (paginated by _count_)
<br>
<br>
&nbsp;&nbsp;&nbsp;_count_ is optional and defaults to 5
<br>
&nbsp;&nbsp;&nbsp;_page_ is optional and defaults to 0
<br>
<br>
This function varies slightly form _RESTful_ conventions.
If no matching reviews are found it returns HTTP Status code 404


```javascript
{ 
  count: 2,
  page: 0,
  hasMorePages: true,
  reviews: [
    {[review1]},
    {[review2]}
  ]
}
```

### Get Reviews by State*
```javascript
http://host:port/api/reviews/[state]?count=[count]&page=[page]
```

This function is like _Get All Reviews_ it returns _all_ reviews filtered
by state. The State must be specified as a 2 character postal abbreviation.
(DC for Washington DC)
<br>
<br>
The rest of the function is like _Get All Reviews_


### Get a Review*
```javascript
http://host:port/api/reviews?id=[id]
```

This function returns a review by its unique id. 
If no matching review is found it returns HTTP Status code 404


### Get States with Reviews
```javascript
http://host:port/api/reviews/states
```

This function returns an array of states with reviews or 
HTTP Status code 404 if no states have reviews

```javascript
{states: ['AL','MN','NC']}
```

### *Review JSONstructure

This is the JSON structure for reviews used in this API

```javascript

{
  id: 1001,
  reviewDate: "2004-05-16T02:31:03.078Z",
  name: 'Sushi House',
  street: '100 Main St',
  city: 'Cedar Falls',
  state: 'IA',
  zip: '50613',
  phone: "3192654566",
  webUrl: 'http://sushihousecf.com',
  mapUrl: 'http://maps.com/sushihousecf',
  text: [
    'This is a classic sushi bar.',
    'Everthiung was first rate!'
  ],
  rating: 5 // scale of 1-5
}
```