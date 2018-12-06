# Challenge C08: Secure your application

- Add a login page in your frontend application
- Add support for login and security in your backend application
- Implement a reservation form for a book and use a DateTime picker to define a return date.
- The DateTime picker has to be validated, it can't be a date more than 15 days from now.
- Implement routes for cities, digital, searches, book detail
- Implement pagination. This has to be integrated with the backend.
- Implement a 404 page.
- Implement a redirection to login form if the user is not authenticated.
- Push all changes to your GitHub repo.

For this challenge we needed to connected the backend of C06 and this challenge made in React.

## Setup

First of all, you'll need to run the server [GUIDE](https://github.com/Jaimejs0528/JS-School/tree/master/C06).

NOTE: Don't modify the defaults ports and you must import the users collection too.

When you put to run the server first open in your browser the path to your https server by default must be https://localhost:4420, and allow connections to it.

![Image](https://i.gyazo.com/cac811a5c34b6aa436fa8370e75c50bf.png)

This is because the certificate is not valid.

After that you have the server running, you must to run, the next commands:
> npm install

All these dependencies are compatibles with node v11.0.0 and npm 6.4.1
> npm run init-server-dev

Internally this command runs the webpack-dev-server on port 5600.

You can access to the webpage using the next URL.

> http://localhost:5600

users to test

>user: juanC@gmail.com<br>
>Password: Root@2134<br><br>
>user: LauCristinaC@hotmail.com<br>
>Password: GnuLover@112<br><br>
>user: LuisAlb@hotmail.es<br>
>Password: Luis@0585<br>

NOTE: still logout frontEnd button aren't implement, for that to logout input in browser console.

> localstorage.clear();







