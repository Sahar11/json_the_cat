const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q='+breedName, (error, response, body) => {
    if (error) { 
      return callback(error,null); // Print the error if one occurred
    } 
  
    // if (response.statusCode !== 200) {
    // return callback('statusCode:'+response.statusCode, null); // Print the response status code if a response was received
    // }
     console.log('body:', body); // Print the HTML for the Google homepage.
  
    const data = JSON.parse(body);
    // const breedDescription = (data[0]["description"]);
    // if (!data.length) {
    //  return callback('Cat breed is not found ', null);
    // } 
    // console.log(breedDescription);
    console.log(data);
    //   return returnFunc(null, breedDescription);
  });
};

module.exports = fetchBreedDescription;