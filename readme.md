## <b>OVERVIEW</b>
Painti Web is an e-commerce application built with React that connects to a Firestore API. It allows users to view a list of products, see detailed information, add products to a shopping cart, and create purchase orders (compiling products along with user information).

<div align='center'>
  <a href="https://ecommerce-react-3dm7j5jc9-marinapamparas.vercel.app/" target="_blank">
    Deploy
  </a>
</div>

## <b>INSTALLATION</b>
Clone this repository.
Install dependencies with the command npm install.
Create a .env file in the root of the project and add your Firestore credentials.
To run the application, use the command npm run dev.

## <b>FEATURES</b>

-   Product Page: Displays a list of all available products, each showing a category, name, image, and price. Users can click on any product to view details (including stock and description).
-   Product Details Page: Shows more information about the selected product, including image, name, price, stock, and description. From this page, users can add items to the cart, proceed to checkout, or continue shopping (linking back to the product list).
-   Shopping Cart: The cart displays a list of all products added by the user, along with the selected quantities of each product and the total purchase price. Users can empty the entire cart or remove individual products. The next step is to finalize the purchase, which takes the user to the form page.
-   Checkout Form: Contains input fields to collect user contact information. The required fields are: name, phone, email, and email confirmation. Once the form is complete, the user can select "Place Order."
-   Order Confirmation: Upon completing the purchase, the user is redirected to the order confirmation page, where an order ID and the total price are displayed.

## <b>DEPENDENCIES</b>

-   React: Used to build the entire app.
-   Firebase: Used to store two collections—products and purchase orders.
-   React-Bootstrap: Used to style buttons and cards.
-   React-Router-Dom: Used to implement navigation within the app.
