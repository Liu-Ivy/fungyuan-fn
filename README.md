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
-  **Delete** As a user I can delete a product from their shopping list.
-  **Create** As a user I can creat a shopping list.

## Backlog

- CSS animation
- Save the shopping list as a PDF file.
- Geo Location of each office.

Homepage:
- ...
  
# Client

## Routes
| Method | Path | Component | Permissions | Behavior | 
|--------|------|--------|--| -------|
| `get`  | `/` | HomePageComponent| public | just promotional copy|
| `post` | `/auth/signup` | SignupPageComponent| anon only| signup form, link to login, navigate to homepage after signup|
| `post` | `/auth/login` | LoginPageComponent | anon only |login form, link to signup, navigate to homepage after login |
| `post` | `/auth/logout` | n/a| anon only | navigate to homepage after logout, expire session |
| `get`  | `/products` | ViewComponent| public | shows all products, links to details
| `get`  | `/products/:product` | ViewComponent| public | shows all products related to the product, links to details
| `get`  | `/product/:id` | ViewComponent| public | shows the single product
| `post` | `/product/new` | CreateViewComponent | user only | add a new product
| `get` | `**` | NotFoundPageComponent | public | 


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous


- P Service
  - product.getAll()
  - product.addOne(body)
  - plan.edit(id, body)
  - plan.delete(id)
# Server

## Models

User model

username - String // required // unique
password - String // required
location - String
plans - [{Object.id: plans}]

Product model

Product Name - String // required
Description - String // required
Size - number // required
Image - String // required
```

## API Endpoints (backend routes)

- GET /auth/me
  - 404 if no user in session
  - 200 with user object
- POST /auth/signup
  - 401 if user logged in
  - body:
    - companyname
    - e-mail
    - phone
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
- POST /auth/login
  - 401 if user logged in
  - body:
    - company name
    - phone
  - validation
    - fields not empty (422)
    - user exists (404)
    - phone matches (404)
  - store user in session
  - 200 with user object
- POST /auth/logout
  - body: (empty)
  - 204

- GET /products
  - check if logged in 
  - 200 with user object

 - GET /products:product
   - body:
    - topic
    - 200 with topic objects

   - GET /products:id
   - body:
    - id
    - Topic 
    - Image 
    - 200 with topic object

- POST /product/new
  - body:
    - Product
    - Description 
    - Size 
    - Image 
  - validation
    - fields cant be empty(422)

- DELETE /product/id
  - validation
    - id is valid (404)
    - id exists (404)
  - body: (empty - the user is already stored in the session)
  - remove from topic collection
  - updates user in session

## API routes:

### auth
|Method|Route|Functionality|
|---|---|---|
|GET|api/auth/me|Check session status|
|POST|api/auth/signup|Log in user to app and set user to session (Body: username, password)|
|POST|api/auth/login|Register user to app and set user to session (Body: username, password)|
|POST|api/auth/logout|Log out user from app and remove session|
  

## Links

### Trello/Kanban

https://trello.com/b/VplVeNkz/funyung-company

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/Ironhack-PartTime-BCN/boilerplate-frontend-module-3)

[Server repository Link](https://github.com/Ironhack-PartTime-BCN/boilerplate-backend-module-3)

[Deploy Link Backend](http://heroku.com)

[Deploy Link Frontend]()

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
# fungyuan-fn
