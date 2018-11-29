# <span style="color:#218d21"> Challenge 06: BackEnd endpoints

- Generate a backend rest service with the necessary endpoints to use in the application.
- Integrate MongoDB to save all reservations.
- Detailed specs:
  - Create some JS code to populate MongoDB with books information.
  -  Create a method to return all books. This method could receive a QUERY parameter to filter the books by bookShelf: Quito, Medellin, Digital, etc….
  -  Create a method to return the info of 1 book.
  - Create a method to lend a Book. This method should validate the book is not lent.
  - The backend should Have users.
  - Create a login endpoint for a user to authenticate and receive a token.
  - All the endpoints except Login are secured. Use a JWT approach.
  - Create a Detailed Readme on how to run the backend.

- Create at least 3 endpoints to be consumed.
- Use express architecture to mount all services.
- Push all changes to your GitHub repo.


## SETUP

First of all, We need install [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

After that we go to import the db.
For this we found the collection json files in:
> [./BackEnd/db/backUp](https://github.com/Jaimejs0528/JS-School/tree/master/C06/BackEnd/db/backUp)

To import just must do the next commands:

> mongoimport --db bookshelf --collection users --file /path/users.js<br>
> mongoimport --db bookshelf --collection books --file /path/books.js

NOTE: If you don't wanna import books collection, you can run the next command.

> npm run populateDB

With this command you add books to the books collection by [Google books API](https://www.googleapis.com/books/v1/volumes?q=isbn).
If you wanna add or change the defaults books to add, the JS script is > [./BackEnd/uils/PopulateDB.js], modifying the books array.(https://github.com/Jaimejs0528/JS-School/tree/master/C06/BackEnd/utils/PopulateDB.js)

After import the db, We need to execute the next command:

> npm install

To install all dependencies.

If all runs correctly, just run the next command:
> npm start // init our server.js

With our server runing, We are already for consume the services. You can notice that has two servers one https running in port 4420 and http running in port 3202. When you go to consume any service, you must specify one of them.

For this I recommend use [Postman](https://www.getpostman.com/), thought you can use [curl](https://curl.haxx.se/) or another tool that you want.

## USING ENDPOINTS

Ok, Let's start with specify all services (endpoints).

> /auth/register&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// POST<br>
> /auth/sign_in&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// POST<br>
> /bookshelf/books&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // POST & GET<br>
> /bookshelf/books/:isbn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// GET, isbn is a parameter to input<br>
> /bookshelf/books/digitals&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// GET<br>
> /bookshelf/books/cities/:city&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // GET, city is a parameter to input<br>
> /bookshelf/books/lends&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// PATCH & POST 


### <span style="color:#218d21">/auth/register : Register a user
----------
To consume this service, you need to put into the body the next json structure.

>{<br>
>&nbsp;&nbsp;&nbsp;"name": "A_name",<br>
>&nbsp;&nbsp;&nbsp;"email": "email@email.com",<br>
>&nbsp;&nbsp;&nbsp;"password": "Ruut@5678"<br>
>}<br>

Where email and passsword must satisfy the respective format.
- email: begins with letter, has @, has . and end in letter too
- password: minimum one digit, letter lowercase, letter uppercase and special Char, its length must be between 6 to 15 chars.

### <span style="color:#218d21">/auth/sign_in : Sign In a user Account
---------
To consume this service you have the next structure.

>{<br>
>&nbsp;&nbsp;&nbsp;"email": "email@email.com",<br>
>&nbsp;&nbsp;&nbsp;"password": "Ruut@5678"<br>
>}<br>

### <span style="color:#218d21">/bookshelf/books : Get books or add a new book
---------
If you use this endpoint with POST method, you need consume it with the next structure.

>{<br>
&nbsp;&nbsp;&nbsp;"internalCode":2113,<br>
&nbsp;&nbsp;&nbsp;"bookinfo": {<br>
&nbsp;&nbsp;&nbsp;"isbn":"3",<br>
&nbsp;&nbsp;&nbsp;"title": "alguno2",<br>
&nbsp;&nbsp;&nbsp;"author":"alguien2",<br>
&nbsp;&nbsp;&nbsp;"year":"2013",<br>
&nbsp;&nbsp;&nbsp;"description":"algo importante",<br>
&nbsp;&nbsp;&nbsp;"numPages":"21",<br>
&nbsp;&nbsp;&nbsp;"rating":"2.5",<br>
&nbsp;&nbsp;&nbsp;"image":"rutaImagen"<br>
},<br>
&nbsp;&nbsp;&nbsp;"cities":["medellin"],<br>
&nbsp;&nbsp;&nbsp;"hasDigitalCopy":true<br>
}<br>

For this you need add to header the next line.

> Authorization: Bearer 'JWT TOKEN TOO LONG'

You get tis token using "Sign In a user Account" service.

With this you add a new book to data base.

Now, If you use this endpoint with GET method, you don't need anything, just consume it.


### <span style="color:#218d21">/bookshelf/books/:isbn : Get a specific book
---------

For consume this service, you only need put into the URL the isbn code that you want search.

> /bookshelf/books/9781451648546&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example

### <span style="color:#218d21">/bookshelf/books/digitals : Get all books that have digital copy.
---------

Such as get all books, you don't need anything, just put it into the browser or [Postman](https://www.getpostman.com/).


### <span style="color:#218d21">/bookshelf/books/cities/:city : Get all books by a specific city.
---------

For consume this service, you only need put into the URL the city name that you want search.

cities names: "medellin", "quito", "cartagena".

> /bookshelf/books/cities/quito&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example

### <span style="color:#218d21">/bookshelf/books/lends : Get books loans by a specific user and lend a book.

If you use it with PATCH method, you must to put into the body, the next json structure.

{<br>
&nbsp;&nbsp;&nbsp;&nbsp;"isbn":"isbn-code",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"lendDate":1543521531000,<br>
&nbsp;&nbsp;&nbsp;&nbsp;"limitDate":1544732192000<br>
}<br>

lendDate is the date when the user lends a book and limit date is the date when the user must return the book (max 15 days)

And if you use with this, the GET method, you don't need anything, to except JWT Token.

For this you need add to header the next line (This applies too with PATCH method).

> Authorization: Bearer 'JWT TOKEN TOO LONG'
