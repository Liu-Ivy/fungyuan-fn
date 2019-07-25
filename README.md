# Project Name
Fungyuan Web
## Description

This is an Mobile App for FunYung Grinding Wheel company to show their products to their clients.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start to access the website
-  **Login:** As a user I can login to the platform so that I can see all the information
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Create** As a user I can creat an order-list.
-  **Add** As a user I can add products to an order-list.
-  **Delete** As a user I can delete a product from order-list.
-  **AddProduct** As a user of admin, I can create new product list. 

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
| `/` | MainPage| public | just promotional copy|
| `/auth/signup` | SignupPage| anon only| signup form, navigate to all product page after signup|
| `/auth/login` | LoginPage | anon only |navigate to all product page after login |
| `/auth/logout` | Nav| anon only | navigate to mainpage after logout, expire session |
| `/category` | Category| anon | shows all products, links to fomepage
| `/category/:id` | Product| anon only | shows all products related to the product, links to details
| `/product/add-form` | AddProduct | private | add a new product
| `/order-list` | Cart| private | shows the order list


## Services

- Auth Service
  - login(user)
  - signup(user)
  - logout()
  - me()
  - getUser() // synchronous


- Category Service
  - getCategory

- Product Service
  - getCategory
  - createCategory(category)
  - deleteCategory(categoryId)

- OrderList Service
  - getCategory(userId)
  - updeteCategory(userId)


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
Category model         
```js
Category
 {
  _id: ObjectId
  title: String // required
  img: String // required
}  
``` 
Product model
```js
Product
 {
	name: String // required
  img: String //reuqired
  description: String // required
  category_id: {type: ObjectId, ref: Category }
} 
``` 

## API Endpoints (backend routes)

|HTTP method	|URL|	Request Body	|Success Status|	Error Status|	Description|
|------|--------|--| -------|---|--------|
|POST	|/auth/signup|	{ username, password, email, phone }|	200|	404|	Create a new user
|POST	|/auth/login|	{ username, password }|	200|	404|	User login
|GET	|/auth/me|\	|200|	404|	Retrieve user data object
|POST	|/auth/logout|\ | 200|	404|	Logout the user
|GET	|/category |\ | 200	| 404|	Show all categories for the user
|GET	|/getCategory/:id |\ | 200	| 404|	get one product from one category
|POST	|/product|{ name, img, description,category_id} |200	| 404|	create new product
|Delete	|/product/:id | {_id, name, img, description,category_id}  |200	|   404|	delete a product
|GET	|orderList/userId |\ | 200	| 404|	Get the orderlist for the user
|PUT	|orderList/userId | { _id, orderList, user_id}  |200	| 404|	updeted orderList

## Links

### Trello/Kanban

https://trello.com/b/VplVeNkz/funyung-company

### Git
 https://github.com/Liu-Ivy/fungyuan-fn
 https://github.com/Liu-Ivy/fungyuan-bn

