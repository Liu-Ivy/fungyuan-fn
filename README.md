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
- Save the order list as a PDF file.
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
  - login(user)
  - signup(user)
  - logout()
  - me()
  - getUser() // synchronous


- Category Service
  - getCategory
  - updeteCategory(category)
  - createCategory(category)
  - deleteCategory(categoryId)

- Product Service
  - getCategory
  - updeteCategory(category)
  - createCategory(category)
  - deleteCategory(categoryId)

- OrderList Service
  - getCategory(userId)
  - updeteCategory(userId)
  - createCategory(OrderListId)

# Server

## Models

User model

```js
User 
{
  _id: ObjectId
	username: String // required
  password: String // required
	email: String // required & unique
	phone: String // required
} 
```            
```js
Category
 {
  _id: ObjectId
  title: String // required
  img: String // required
}  
``` 
```js
Product
 {
  _id: ObjectId
	name: String // required
  img: string //reuqired
  description: String // required
  category_id: {type: ObjectId, ref: Category }
} 
``` 
```js
OrderList
{
  _id: Object
  orderList: [
    {type:ObjectId, ref:Product}
  ]
  user_id: {type: ObjectId, ref: User}
}
``` 

## API Endpoints (backend routes)

|HTTP method	|URL|	Request Body	|Success Status|	Error Status|	Description|
|------|--------|--| -------|---|--------|
|POST	|/auth/signup|	{ username, password, email, phone }|	200|	404|	Create a new user
|POST	|/auth/login|	{ username, password }|	200|	404|	User login
|GET	|/auth/me|\	|200|	404|	Retrieve user data object
|POST	|/auth/logout|\ | 200|	404|	Logout the user
|GET	|/category |\ | 200	| 404|	Get all categories for the user
|POST	|/category|{title, img}  |200	| 404|	create category
|PUT	|/category/:categoryId | { _Id, title, img}  |200	| 404|	updeted category
|Delete	|/category|{ _Id, title, img}|200	| 404|	delete category
|GET	|/category/product |\ | 200	| 404|	Get all products from one category
|POST	|/product|{ name, img, description,category_id} |200	| 404|	create category
|PUT	|/product/:productId | {_id, name, img, description,category_id}  |200	| 404|	updeted category
|Delete	|/product/:productId | { _Id, title, img}|200	| 404|	delete category
|GET	|orderList/userId |\ | 200	| 404|	Get the orderlist for the user
|POST	|orderList/userId| { _id, orderList, user_id} |200	| 404|create orderList
|PUT	|orderList/userId | { _id, orderList, user_id}  |200	| 404|	updeted category

## Links

### Trello/Kanban

https://trello.com/b/VplVeNkz/funyung-company

### Git


