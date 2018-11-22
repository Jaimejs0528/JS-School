#  Challenge C05: Homepage for the final project


- Create a designs folder for upload all the specs, to be required to create the application
- Interact with the API for books which provide information of the books
- Use the endpoint: https://www.googleapis.com/books/v1/volumes?q=isbn:9781451648546, to get book information
- Create the model in JSON file to use as mocked data
- Start building the main layout for the site in a normal index.html file using SCSS and js to get the first prototype of the app with mocked data
- Create homepage of the bookstore app
- Create book preview page
- Create reservation process interface
- Finally, add into your GIT repo and push all the new elements

In this challenge were used the resources of challenge 03, to improve it, using scss instead that css, consuming a JSON file with the wooks to show, simulating a rest service.

To init the page, you need to use NPM to install all dependencies and a http-server.

> npm install  // To install all the dependencies.
> cd dist/ // Here is index.html (You must be inside C05 folder)
> npm -g i http-server  
> npm run build-dev //if you need to build the project with webpack.


Note: you could find the index.html inside dist folder if you have any issue with it.
