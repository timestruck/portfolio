// Dependencies
import React from 'react';
import Yelp from 'yelp-fusion';

// Styles
import './Restaurants.scss';

const apiKey = '2Wk-3LsIcMBE8HZS_c9rKffF_K1OaagjZejivVWBaDlikbZbNfXWVXXfvvf3aKSIQAGtu8z8BeF3l5Qz7ZgpiHyVtWgDJ3cmV4GvIJSEhGxfkKjRfup1af-d5ODnWnYx';

const client = Yelp.client(apiKey);

client.search({
  term: 'Four Barrel Coffee',
  location: 'san francisco, ca',
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});


function Restaurants() {
  return (
    <div className="restaurantsWrapper">
      <h1>Looking for restaurant reviews?</h1>
      <input placeholder="Search for a restaurant" />

    </div>
  );
}

export default Restaurants;
