# React-Native Demo App Using Flux Store Architecture

This app calculates exchange rates between currencies. It fetches data from Fixer Foreign Exchange API. Lists user's conversion history and saves it to the AsyncStorage.

## Developer Notes

This project is created using create-react-native-app.
An external component named react-native-chooser is used for select style picker.
Another external component named react-native-tabs is used for tabbed layout.
Implemented Flux architecture for communication between container components.

## To start

Please get a free API key from Fixer.io and replace it with "YOUR_API_KEY" in "src/api/getRates.js" to test the app.

And then run:
```
npm install  
npm start
```
