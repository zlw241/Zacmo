

# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users`
- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Transactions

- `GET /api/transactions`
  - Feed index/search
- `POST /api/transactions`
- `GET /api/transactions/:id`
- `PATCH /api/transactions/:id`
- `DELETE /api/transactions/:id`

### Likes

 - `CREATE /api/transactions/:id/likes`
 - `DESTROY /api/likes/:like_id`

### Comments

 - `CREATE /api/transactions/:id/comments`
  - Comment on a transaction in the feed
 - `DESTROY /api/comments/:comment_id`

### Users

 - `GET /api/users/:user_id`
  - Get a single user
 - `POST /api/users`
  - Create new user
 - `DELETE /api/users/:user_id`
  - Delete user
 - `PATCH /api/users/:user_id`
  - Edit user

### Friends
 - `POST /api/users/:id/friends`
 - `DELETE /api/users/:id/friends/:friend_id`

### Accounts

- `POST /api/accounts/`
 - Link new bank
- `PATCH /api/accounts/:account_id`
 - Update bank information
- `DELETE /api/accounts/:account_id`
 - Unlink bank account

### Cards

 - `POST /api/cards/`
  - Add debit card
 - `PATCH /api/cards/:card_id`
  - Update debit card information
 - `DELETE /api/cards/:card_id`
  - Delete debit card information
