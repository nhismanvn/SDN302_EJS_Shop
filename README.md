# SDN302 EJS Shop

## Start
1. `npm install`
2. `cp .env.example .env` and edit variables (use MongoDB local or Atlas).
3. `npm run seed` to create sample products and admin user.
4. `npm start` and open http://localhost:3000/login.

## Features
- MVC EJS CRUD orders, select existing in-stock products, server-side total calculation
- Authentication with password hashing, session and admin authorization
- MongoDB Atlas ready, PORT support for deployment

## Deploy
Push to private GitHub repository (do not commit .env). Render: New Web Service, repository, build `npm install`, start `npm start`, configure MONGODB_URI, SESSION_SECRET, NODE_ENV=production. Seed via local machine pointed at Atlas before deploying. Auto-deploy on Git push enabled by default when configured in Render.

## Note
For classroom demo only. Production hardened apps should add CSRF protection, login rate limiting, input size limits, auditing and more.
