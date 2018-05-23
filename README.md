# ecomm-cart
CS546 Project.
This project aims to simply the online shopping experience especially for non-technical users.
We have kept a minimal style of design, which many non-technical users find easy to use. Many times, while web developers and many software developers try to make a software or a website, the forget that their product are also to be used by non-technical users. We therefore had decided to build an e-commerce cart website that is simple to design but complex to code.
For this project you require nodejs, npm and mongoDB installed on your pc. You also require an internet connection.
Steps: -

• Download the code.

• Navigate to inside the project folder on terminal, where you would see a package.json file

• Do npm install -- save for installing all the project dependencies 

"bcrypt-nodejs": "0.0.3",

"body-parser": "^1.18.2",

"connect-flash": "^0.1.1",

"connect-mongo": "^2.0.1",

"cookie-parser": "~1.4.3",

"csurf": "^1.9.0",

"debug": "~2.6.9",

"express": "~4.16.0",

"express-handlebars": "^3.0.0",

"express-session": "^1.15.6",

"express-validator": "^5.2.0",

"hbs": "~4.0.1",

"http-errors": "~1.6.2",

"mongoose": "^5.1.0",

"morgan": "~1.9.0",

"passport": "^0.4.0",

"passport-local": "^1.0.0",

"stripe": "^5.9.0"

• Set your mongodb data folder.

• Type "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --
dbpath d:\test\mongodb\data on your terminal and keep it running.

• Open mongodb compass community and set the port to 27017 and click connect.

• Now we need to run the seed command to seed our database.

• Copy and paste in the terminal npm run seed command.

• Now run npm start. Open your browser and run https://localhost:3000.
The first page user see’s is the products page. They can either sign in or sign up. There are two types of users. Admin and Regular users.

We have already seeded the admin user. The admin can add different product listings.

Credentials for admin account are: Email: admin@admin.com Password: 123456

We use passport module for login/sign up of new customers. Csurf is used for protecting the
session.

While checking out from the cart, we use Stripe API for checking valid card details during the
payment. As of now the Stripe API is set to test mode and below is our example of a valid card
details

Card Name: User’s Name

Card Number: 4242424242424242

Card Expiration: 10/2020

CVV/CVC:123

For a list of valid cards that can be used during testing, please visit,

https://stripe.com/docs/testing#cards

After successful payment, the order is placed and on the user’s profile page the order details can
be found (order history).

FOR A DETAILED AND MORE TECHNICAL EXPLANATION PLEASE HAVE A LOOK AT THE VIDEO.
Citations:

Stripe docs: https://stripe.com/docs

GetBootstrap: https://getbootstrap.com/docs/3.3/components/

Passport : http://www.passportjs.org/

NodeJS: http://nodejs.org

Express Generator: http://expressjs.com/en/starter/generator.html
