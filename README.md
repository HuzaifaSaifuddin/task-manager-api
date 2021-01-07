# task-manager-api

API Live on https://huzaifas-task-manager.herokuapp.com/

USER APIs
- Create User   `POST '/users'`
- Login User    `POST '/users/login'`
- Logout User   `POST '/users/logout'`
- Logout All    `POST '/users/logoutAll'`
- Read Profile  `GET '/users/me'`
- Update User   `PATCH '/users/me'`
- Delete User   `DELETE '/users/me'`

TASK APIs
- Create Task   `POST '/tasks'`
- Read All Task `GET '/tasks'`
- Read Task     `GET '/task/:id'`
- Update Task   `PATCH '/tasks/:id'`
- Delete Task   `DELETE '/tasks/:id'`

AVATAR APIs
- View Avatar   `GET '/users/me/avatar'`
- Upload Avatar `POST '/users/me/avatar'`
- Delete Avatar `DELETE '/users/me/avatar'`

`me = session_user_id`

## Development

Clone the project and run `npm install`.
Then run `npm run dev` to run the application on http://localhost:3000.

## Test
Run `npm test` to run the test cases.
