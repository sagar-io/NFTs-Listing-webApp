
# NFTs Listing Web App
This web app uses Moralis APIs to fetch the data such as NFTs by collection, the floor price, activities and traits.

# Technology used - 
React, 
CSS

## Bundler
I've used Vite (instead of create-react-app for enhancing speed and performance) bundler tool.

## Deployed Site Link 
https://nft-art-market.netlify.app/


### Run locally this web app by following instruction -

- create a *.env.local* file in the root folder and put the following text in it and replace the "YOUR_MORALIS_API_KEY" with your api key which you'll get after signup in Moralis platform - 
``` 
VITE_API_KEY = "YOUR_MORALIS_API_KEY"
```
- By replacing the *_global* to *global* in vite.config.js file
- Then run following commands in the terminal - 
```
npm i
npm run dev
```

