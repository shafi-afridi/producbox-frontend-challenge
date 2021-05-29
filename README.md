# ProductBox Frontend Challenge

## Shopping Cart in LocalBrowserStorage

Git clone the project To install dependencies run in terminal
`npm i` in the project directory
Then run `npm start` to start the app

The app will run on [http://localhost:3000](http://localhost:3000) to view it in the browser.

At the header there are four links that will lead you to the pages.
1. The Home link will redirect you towards the root page
2. The Add Item link will lead you towards add item page where you can add items for sale
    #### Note
    The Url of the image should a valid accessible url, I have placed some local images in the assets directory but you can any url from internet which is accessible not all are accessible. I have used this url for testing you can copy any url from google
    #### From Local : /static/media/iphone1.26a5158a.jpg
    #### From Internet : https://img.router-switch.com/media/customoptions/129/2/4/iphone-12-pro-max-blue.jpg

3. The Items page show all the items stored in Local Browser Storage, I have pre placed some items in the state
4. The checkout page is by default empty and will redirect you towards items page after 3 seconds if empty, when you add to cart an item and checkout the item than it will be stored and won't redirect you until you buy the item.
5. The cart page is for managing the cart you can increase or decrease the items, This page will lead you to checkout


Thanks
