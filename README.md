<img width="1345" height="638" alt="Screenshot 2025-10-21 205256" src="https://github.com/user-attachments/assets/7e40ce70-d4d9-4aeb-9abe-e944adade7bc" />

# use vite to create project

- create react vite . - choose react and typescript
- Remove extra css and sample content, logo svgs, favicon
- npm run dev - application running

# install following libraries

- npm i react-router-dom
- npm i bootstrap
- npm i react-bootstrap

# import Bootstrap in App.tsx

- import "bootstrap/dist/css/bootstrap.min.css"

# create folder strucutre

components, pages, hooks, data, context, utilities

# Do Routing

- in main.tsx, Import BrowserRouter from react-router-dom and wrap <App> with it
- in App.tsx, import Routes and Route. Add pages, with <Route path="/" element={Home}>

# Create respectively pages using functional component

# Add bootstrap classes and <Container>

# Create a component Navbar component

- design using bootstrap navbar components
  - Import Navbar as NavbarBs, Nav, <Nav.Link to="/" as={NavLink}>Home<Nav.Link>
  - add colors, bg-white shadow-sm
  - Add Cart SVG towards the right, add sample count in red

# Render sample store data

-create storeItems.json inside data folder

- add images inside public/imgs folder
  -Create Row and Column and render data. Use bootstrap classes
  -Create <StoreItem>, Render data using Bootstrap Card component using <Card.Body> and <Card.Title>
- type the props name, price, imgURL
- create utility function using "new Intl.NumberFormat(undefined, {currency: 'USD', style: "currency", })" to add "dollar" sign
- # Add Action Items in Card
  - if no items are there in cart, show 'Add to Cart' button.
  - If item is already there, show 'Remove' button and option to increase and decrease quantity
  - use bootstrap component button and classes to style these

# Create context for ShoppingCart

- get Item Quantity
- increase item quantity ( can be used for add to cart as well, add check for quantity 0)
- decrease item quantity
- remove item from cart

# Add more functions for cart

- open cart
- close cart
- get total quantity in cart to show in the red circle on cart icon
- get cart items
