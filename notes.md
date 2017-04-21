

### Users

- modify friends state to be nested objects instead of arrays

### Search

- transition that makes search bar grow in width when clicked

### Routes

- user /:username for user route instead of /:user_id


### Friends

- make sure to add error handling for friend requests, updates, etc
- think about how to better separate methods for handling friendships from the
  user model, they're pretty tightly coupled right now

### Session

- `DELETE /api/session`

### Transactions

- `GET /api/transactions`
  - Feed index/search
- `POST /api/transactions`
- `GET /api/transactions/:id`
- `PATCH /api/transactions/:id`
- `DELETE /api/transactions/:id`