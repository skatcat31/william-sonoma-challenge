# William Sonoma Coding Challenge Submission
### Submitted By
*Robert Mennell*  
<rnmennell@gmail.com>  
(209) 256-3858

This example is made out of 100% Javascript with a NodeJS static delivery development server for local testing

With ES imports there's no need to build or bundle because ES imports allow caching and thus faster delivery of your modules to remote users!

With fully standalone design any module can be used in any class and classes can be extended to suit different rendering needs like return the elements instead of just attaching them or allowing updating of the container with method overiding

# Framework
There isn't one. This is 100% ES6!

# Server
There is a dedicated Static File development server provided for testing purposes. This is due to the restrictions on script loading and CORS requests

# Bundle
There isn't one. With ES imports there is less and less reason to bundle for the front end and more and more reason to have an updated design pattern for the web

The lack of a bundle also allows for updating of individual components and bugfixes can go out incrimentally instead of requiring a brand new bundle to be pushed  
This means the next time someone visits the page they see the new version!

## Why didn't it get bundled?

Bundling take a large ammount of files and extracts the code into a single file that can be loaded by the front end and executed. Often it ends up needing source maps to keep developers able to debug and access the code in execution. However with ES6 imports and more modern design philosphies we can instead work with much smaller and more declaritive code without needing a build step. In fact the page itself is so small it's been copied into the readme.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Robert Mennell for William Sonoma</title>
    <meta name="description" content="William Sonoma Product Listings">
    <meta name="keywords" content="William Sonoma,Shopping">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="./main.js" type="module" defer></script>
</head>
<body style="margin:0;">
    <div id="slideshow"></div>
    <div id="header"></div>
    <div id="container"></div>
</body>
</html>
```

That's it. One script file and it's off to the races!

## Why you'd want to build
Building would let you develop without a local static server and just visiting the HTML file itself that pulls in the bundle without a module type

It does however run into the issue of longer times to load, and slower parsing times. Performance drops from 100 in audits and that's not cool!

Plus because CORS would be broken anyways you'd only get the static JSON file that was downloaded BEFORE starting development instead of the latest version from `https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json` on each refresh

# Running the Server and Visiting the Site

## Requirements
 - An ES6 compatible version of NodeJS

Open a command prompt and run `npm start` to launch the server. It will lint and then serve all file

Alternatively you can run the server only with `npm run server`

## Environment Variables
 - `PORT`: Number, the port you would like to run on. If not provided it will run on port 3000

## Visual Studio Code
The debugger will successfully launch the server with the included `launch.json` configuration

# Tests

## Requirements
 - An ES6 compatible version of NodeJS and NPM

## Linting
Run `npm test` and check if any errors come up. It will perform an install and then run the linter

If the linting fails it'll expose the errors

When the linter succeeds it'll inform you that all tests have passed

Alternatively you can run `npm run start` to lint all the files and then start the server. This is however slow so it's not recomended you use it to start the server every time

## Unit Tests
Each JavaScript file has a unit test script and there is a unit testing page to run all the tests

To see them and their results start the server and visit `/test` to see the results

# The Product List

We try to load the JSON file several ways incase for some reason there is a server error or the resource just plain was never intented to be accessed over CORS for this provided challenge:

1. A raw CORS request from the script file directly
2. A reverse proxied request from the provided server at `./products`
3. A staticly loaded version of the file fetched before the begining of development

## Presentation

Lets walk through how a user would be presented the page:

1. We show a loading screen once the page has loaded the scripts but before we fetch our data
2. Once the data is loaded we rerender with the list of products and their heros  
  a. We list the name and price above the hero  
  b. The hero is the same width and connected to the informational banner
3. The user clicks on a banner or hero image(even just nearby either) and gets a modal carasol
4. The user clicks on the current image to go to the next one
5. The user clicks anywhere to go back to the product list
6. User admires the pretty products and snappy performance

# Performance

## Requirements
 - Run an Audit with Lighthouse on Google chrome

## Note
The page was not optimized for Progressive Web Apps but was included all the same

## Results

### Desktop

#### Performance: 100

#### Progressive Web App: 27
- It's just not designed to be one

#### Accessibility: 100

#### Best Practices: 81
- Error logged to console. This is due to the way Chrome handles netowrk errors
- Manifest's short_name is to long
- Does not use HTTP/2 for all of it's resources. Not implimented on static server due to local

#### SEO: 100

### Mobile: 3g/CPU Slowdown | Modern infrastructure

#### Performance: 80 | 100
- First meaningfull render is slow on 3g, not present on non throttled network

#### Progressive Web App: 27 | 27
- It's just not designed to be one

#### Accessibility: 100 | 100

#### Best Practices: 81 | 81
- Error logged to console. This is due to the way Chrome handles netowrk errors
- Manifest's short_name is to long
- Does not use HTTP/2 for all of it's resources. Not implimented on static server due to local

#### SEO: 100 | 100
