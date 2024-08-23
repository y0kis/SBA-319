# SBA-319
This application is a RESTful API server built with Node.js, Express, and MongoDB. It supports CRUD (Create, Read, Update, Delete) operations for managing three distinct data collections in the database, including users, candies, and cookies.

// Seed Route
I created a route for seeding initial candy data. When accessed, it adds some predefined candy records to your database.

Index Route: 
The / route retrieves all candies from the database and renders an index view (presumably displaying a list of candies).

New Route: The /new route renders a form for adding new candies.

Delete Route: 
The /:id route (with HTTP DELETE method) deletes a candy record by its ID and redirects to the /candies route.
Update Route:
 The /:id route (with HTTP PUT method) updates a candy record based on the request body. If the readytoeat field is set to ‘on’, it’s marked as ready to eat; otherwise, it’s marked as not ready.

Seed Route: 
You’re creating a seed route that adds initial cookie data to your database. When accessed, it creates three cookies: “Jumbo Brownie,” “Lemon Sugar,” and “Monster Cookie.”

Index Route:
 The index route (/) retrieves all cookies from the database and renders them using the cookies/Index template.
New Route: The new route (/new) displays a form for users to input a new cookie.
Delete Route:
 The delete route (/:id) deletes a cookie based on its ID and redirects to the /cookies route.

Update Route: The update route (/:id) modifies a cookie’s properties (such as readyToEat) and redirects to the individual cookie’s show page.
Create Route:
 The create route (/) adds a new cookie to the database based on user input and redirects to the /cookies route.
Edit Route:
 The edit route (/:id/edit) displays a form to edit an existing cookie.
Show Route: The show route (/:id) displays details of an individual cookie.

User Model
This is a simple user model created using Mongoose for a Node.js application. It defines the schema for user data, including fields like name, email, age, and an optional “remember me” flag.

Installation
Make sure you have Node.js and MongoDB installed.
Clone this repository.
Install dependencies using npm install.

Usage
Import the User model in your application:
JavaScript