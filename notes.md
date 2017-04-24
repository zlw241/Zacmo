
## Bigger Issues

- user slice of state and session slice of state are mixed too much, separate out the two and clean everything up

- search bar will still container items search results even after logging out and logging back in, (not unmounting upon log out)

- side bar will still contain previous user until page refresh, after logging out and logging back in as a different user. (fixed by changing the way side bar recieves current user)

- transaction amounts shown for currentUser will reflect previous user's colors/transactions until page refresh, there is an issue with the log out functionality that I think may have to do with the currentUser on the window still being available after logout.

- the issue with transactions amounts not updating after log out seemed to have something to do with the currentUser slice of state having the same name as the window.currentUser variable used to bootstrap the currentUser the page was refreshed. Ask a TA for more details about this.


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
