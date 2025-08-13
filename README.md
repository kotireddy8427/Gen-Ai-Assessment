# User Login API & React App

This project provides a full-stack solution for a User Login entity, featuring a Node.js (Express) RESTful API and a React frontend.

## Features

- **Express REST API** with CRUD endpoints for users
- **Password hashing** with bcrypt
- **Input validation** and error handling
- **React User Login screen** with CRUD operations
- **Axios** for API calls
- **Configurable API URL** via `.env`
- **In-memory sample data** for demonstration

## Backend (Express)

- Entry point: `src/server.js`
- Endpoints:
  - `GET /users` - Fetch all users
  - `GET /users/:id` - Fetch user by ID
  - `POST /users` - Create/login user
  - `PUT /users/:id` - Update user
  - `DELETE /users/:id` - Delete user
- Error handling and input validation included

### Start Backend

```powershell
npm start
```

## Frontend (React)

- Main component: `src/UserLogin.js`
- Simple login form with CRUD buttons
- API calls via Axios
- Responses and errors displayed to user

### Start Frontend

```powershell
npm run react-start
```

## Environment Variables

- Set API URL in `.env`:
  ```env
  REACT_APP_API_URL=http://localhost:3000/users
  ```

## Project Structure

```
src/
	server.js           # Express backend entry
	app.js              # React frontend entry
	UserLogin.js        # React login component
	UserLogin.css       # CSS for login screen
	routes/userRoutes.js
	controllers/userController.js
	services/userService.js
	middleware/validateUser.js
	middleware/errorHandler.js
```

## Sample Data

- The backend uses an in-memory array for demonstration. No database setup required.

## Notes

- Make sure both backend and frontend are running for full functionality.
- For production, replace in-memory data with a real database.

---

**Author:** GitHub Copilot

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
