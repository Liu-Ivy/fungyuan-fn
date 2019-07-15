# Project Name
Fungyuan Web
## Description

This is an Mobile App for FunYung Grinding Wheel company.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start to access the website
-  **Login:** As a user I can login to the platform so that I can see all the information
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add** As a user I can add products to the shopping cart.
-  **Delete** As a user I can delete a product from shopping list.
-  **Create** As a user I can creat a shopping list.

## Backlog

- CSS animation
- Save the shopping list as a PDF file.
- Geo Location of each office.

Homepage:
- ...
  
# Client

## Routes
| Path | Component | Permissions | Behavior | 
|------|--------|--| -------|
| `/` | HomePage| public | just promotional copy|
| `/auth/signup` | SignupPage| anon only| signup form, navigate to all product page after signup|
| `/auth/login` | LoginPage | anon only |navigate to all product page after login |
| `/auth/logout` | HomePage| anon only | navigate to homepage after logout, expire session |
| `/category` | Category| public | shows all products, links to details
| `/category/product` | Product| public | shows all products related to the product, links to details
| `/product/item` | Item| public | shows the single product
| `/product/add` | AddItem | private | add a new product
| `/cart` | Cart| private | shows the order list




## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous


- Product Service
  - product.getAll()
  - product.addOne(body)
  - product.edit(id, body)
  - product.delete(id)
# Server

## Models

User model

User 
{
  _id: ObjectId
	username: String // required
  password: String // required
	email: String // required & unique
	phone: String // required
}             

Category
 {
  _id: ObjectId
	title: String // required
}   

Product
 {
  _id: ObjectId
	name: String // required
  img: string //reuqired
  description: String // required
  price: number // required
  category_id: {type: ObjectId, ref: Category }
} 

OrderList
{
  _id: Object
  orderList: [
    {type:ObjectId, ref:Product}
  ]
  user_id: {type: ObjectId, ref: User}
}




## API Endpoints (backend routes)
API Endpoints (backend routes)

HTTP method	URL	Request Body	Success Status	Error Status	Description
POST	/auth/signup	{ username, password, email, phone }	201	400	Create a new user
POST	/auth/login	{ username, password }	200	401	User login
GET	/auth/me	200	401	Retrieve user data object
POST	/auth/logout		200	400	Logout the user

GET	/category	/	200	400	Get all categories for the user
POST	/category	/product { name, img, description, price, category_id }	200	400	Get all products for the user
POST	/cart /	{ OrderList: [{type:ObjectId, ref:Product}] user_id: {type: ObjectId, ref: User} }	201	400	Create an OrderList
PUT	/cart/:id /	{ OrderList: [{type:ObjectId, ref:Product}] user_id: {type: ObjectId, ref: User} }	201	400	Updated an OrderList


## Links

### Trello/Kanban

https://trello.com/b/VplVeNkz/funyung-company

### Git


