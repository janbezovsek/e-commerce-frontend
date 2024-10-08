# E-commerce app

This is a MERN stack application that includes authentication(register and login/logout) and authorization functionalities, saving user's data
into MongoDB database and common e-commerce practicies like navigating between pages, adding items in the cart bag and 
calculating prices for chosen items. Responsive design principles were also applied building this app so that the pages 
fit every screen, e.g. mobiles, tablets.



### Docker setup

We have build a front end image, back end image and database image. Then in the root file we
created compose.yaml file for connecting it all together. We pushed our project to Docker hub
https://hub.docker.com/repository/docker/bezovsekjan/client-ecommerce/general 
When building a client image we need to change proxy from "proxy": "http://localhost:5000"
to "proxy": "https://<"your server image name">:5000"



compose.yaml file in the root directory

services:
  client:
    image: e-commerce-client
    stdin_open: true
    ports:
      - "3000:3000"
  
  server:
    image: e-commerce-server
    ports:
      - "5000:5000"
    depends_on:
      - mongo
  
  mongo:
    image: mongo:6
    ports:
      - "27017:27017"




## App

![github1](https://github.com/user-attachments/assets/0dbb3cb1-6310-485e-8562-8e5778415247)



![github2](https://github.com/user-attachments/assets/46c3e55b-f9bc-45e4-8f78-189b714dc37b)


## The frontend explained

We have used CRA(create-react-app) build tool to get the app up and running. The packages used to build this app are listed in
the package.json file. The layout of the pages emulates the already proven to work designs of well known ecommerce platforms like Amazon.
In the navigation bar we have a Home page where all of the items are listed, a Cart items page, Check out page, Register and Login/Logout.
There is also a search bar and a Cart logo, that represents our Cart items and the number of chosen items. Next to it is 
a profile logo(the functionality not yet determined) and a text representing the state of the user or in other words, if the 
user is logged in or not. Items description page is available when item is clicked on Home page.

We have made sure that the app is user friendly and can be used with multitude of devices. On the Home page at the top there is 
a slideshow of banners, that can be shown one at a time automatically or when clicked on the arrows. Moving down the page there are
four sections of different items and banners accompanying them. In the future updates we will make it possible to change banners and items
and their corresponding info using the page in the form of Admin account. The footer has links just for appearances, when clicked 
they take you to 404 page. When item is clicked it navigates you to Cart items page.




- Before starting the app the local storage should be cleared to avoid errors.


![github3](https://github.com/user-attachments/assets/c3c79bcb-9dd3-4c5c-840f-c70260a0cb4f)





On Cart items page we have a list of all the items that we chose and two buttons, one for clearing the list and one for directing
us to Check out page. We also have X characters left of the images for deleting items individually, but at the moment we haven't
build a logic to make it work.




![github4](https://github.com/user-attachments/assets/9bbfaa8e-0017-4063-93d0-6b764d705ba2)





On the Check out page we have a template for filling out the users info, which at the moment doesn't have any code behind it.
But there is a subtotal price element which shows the correct calculated price and the items number element which also shows correct number 
of items that we chose.

A Register page is a simple two input field template for email and password. It connects us to the backend part of this app 
and saves the information into MongoDB database. The code checks if the user entered the correct format required for emails,
e.g. user@gmail.com and the length of password, which should be at least 7 characters. It then redirects you to Home page.

The login page takes in a user email and password, the same that we registered with. The code checks if the user entered the correct
format required for emails, e.g. user@gmail.com and the length of password, which should be at least 7 characters. It also checks
whether the typed user name(email) exists and if the password corresponds to that of registered user. We save login value
of true in the local storage and the TOKEN with its value in to Cookies. It then redirects you to Home page.

The search bar returns the results(items), that are available to select. When clicked it directs us to Item Desription page.

When directed to Item Description page we see all the information of specific item. There is item image, price, basic info and
full description and a button for adding items into the bag. When clicked a modal pops up to let you know you've clicked it.
We save the item(an object) in the local storage under the name cartList and when we click the button, the subsequent items are
also saved in the local storage under the name addedItems plus specific day date string to differentiate them.
Items stock number is shown just for visual appeal and it doesn't have any code behind it just yet. In future
updates it will change. We will also fix the fact, that a total number of items doesn't change immediately after add to bag item
is clicked, rather when we refresh or change the page.

All of the links in the footer are there just for visual appeal and when clicked they redirect you to a 404 Not found page, 
that has a button for directing you back to Home page.

Lastly, if we click on Cart logo a modal pops up. It contains images,prices and subtotal price of all items that we added to bag and 
a button  that directs us to Cart items page.

![github5](https://github.com/user-attachments/assets/d9fb906b-aa81-4f7d-8185-b315742fd0fc)



-Future modifications

We still haven't used authorization component AuthComponent.js(it is fully operational) which can be accessed once we login in to the application.
It could be used with relation to also unused profile icon that we have in the navbar, so that only authorized users(logged in) can access it.

Saving items in the user profile in MongoDB database.

Checkout page still needs logic behind Order now button

Creating Admin account and corresponding Admin page for maintaining the app
