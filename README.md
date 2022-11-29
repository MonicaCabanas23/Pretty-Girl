# Installing Guide
In Pretty Girl Single Page Application, the following packages will be necessary

```
yarn add react-router-dom@6
```
```
yarn add react-images-uploading
```
```
yarn add moment 
```
```
npm install react-responsive
```
```
npm install react-scroll
```

```
npm install sweetalert2
```

```
yarn add react-moment
```


# User's manual

## Landing page
At first, you will see the landing page in which you can explore the categories, recently arrived products and more. 
If you are not logged yet, you only have access to the searching feature in the header.

![landing-page](./img/users-manual/landing-page.png)
![searching-engine](./img/users-manual/arrived.png)

## Searching engine

When clicking the searching button in the header, a searhing engine by filters will be displayed as follows

![searching-engine](./img/users-manual/searching-action.png)

You can obtain two possible results: 

When no item has been found matching the required criteria

![searching-not-successful](./img/users-manual/no-succesful-search.png)

Or a successful search, displaying the items found that match the criteria

![searching-engine-**succesful**](./img/users-manual/succesful-search.png)

## Login
When clicking the login button in the header, a login form will appear as follows

![login](./img/users-manual/login.png)

If you already have an account, you can easily write your credentials and you will be redirected to the landing page with new features. On another hand, if you don't have an account already, you can always register by clicking in the link underneath the login form

![register](./img/users-manual/register.png)

If the login has been succesful, you will see a landing page as follows

![logged-landing-page](./img/users-manual/logged-login-page.png)
![logged-landing-page](./img/users-manual/arrived.png)
![logged-landing-page](./img/users-manual/logged-recommended.png)

## Product Description
When you click a product card, you will be redirected to a new page in which a brief description of the product will be displayed

![logged-product-description](./img/users-manual/logged-product-description.png)

If you wish, you can add each prodduct to your bag and a confirmation message will appear if everything is ok, if not, an error message will be shown.

## Bag

You can access to your bag by the bag button in the header. Here you will see each product you have added to your bag. Additionally, you can modify the quantity of each product you want to book or delete them if you wish.

![logged-bag](./img/users-manual/logged-bag.png)

## Booking Process

If you have decided to book the products available in your bag, you will be redirected to the booking process divided by three steps: 

### Client Data
![booking-first-step](./img/users-manual/booking-first-step.png)
### Booking description and delivery method
![booking-second-step](./img/users-manual/booking-second-step.png)
### Confirmation of the booking
![booking-third-step](./img/users-manual/booking-third-step.png)

## Admin features

If you are logged as an administrador, new features will be available such as adding or editing products, administrating categories and bookings from the database. In this version, only the Adding Products feature is available.

![logged-landing-page](./img/users-manual/admin-bar.png)

### Add Product 

In this section, an image uploader (for uploading up to one image per product) will be available as well as a form for writing the product's details. 

![logged-landing-page](./img/users-manual/admin-add-product-example.png)