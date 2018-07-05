import addRateData from "../actions/rateActionCreator";

export default function getRates() {
  return fetch(
    "http://data.fixer.io/api/latest?base=EUR&access_key=YOUR_API_KEY"
  )
    .then(response => response.json())
    .then(responseJson => {
      // Map keys to array
      let transformedResults = {
        time: responseJson.date,
        base: responseJson.base
      };

      transformedResults.rates = Object.keys(responseJson.rates).map(key => {
        return {
          currency: key,
          rate: responseJson.rates[key]
        };
      });
      // Call action creator to notify views
      addRateData(transformedResults);
    })
    .catch(error => {
      console.error(
        "Error fetching from API. Did you replace YOUR_API_KEY with the one you got from Fixer API? (Go to https://fixer.io/ and get a free API key)",
        error
      );
    });
}
