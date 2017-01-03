// Value object representing restaurant review

export class Review {

  public static MAX_RATING = 5

  // TODO is this the right way to convert from JSON?
  //      should Review be an interface? If it were
  //      would the 'as' operator be a better choice?
  static getReviewFromJSON( json : string ) : Review {

    let o : Object = JSON.parse(json)

    return new Review(
      o['id'],
      o['reviewDate'],
      o['name'],
      o['street'],
      o['city'],
      o['state'],
      o['zip'],
      o['phone'],
      o['webUrl'],
      o['mapUrl'],
      o['text'],
      o['rating']
    );

  }

  constructor(
    public id: number,
    public reviewDate: string,
    public name: string,
    public street: string,
    public city: string,
    public state: string,
    public zip: string,
    public phone: string,
    public webUrl: string,
    public mapUrl: string,
    public text: string[],
    public rating: number
  ){}

}