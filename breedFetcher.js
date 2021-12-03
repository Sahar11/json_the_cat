const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q='+breedName, (error, response, body) => {
    if (error) { 
      return callback(error,null); // Print the error if one occurred
    } 
  
    const data = JSON.parse(body);
    // const breedDescription = (data[0]["description"]);
    
    console.log(data);
    
  });
};

module.exports = fetchBreedDescription;
