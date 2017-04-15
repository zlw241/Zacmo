# Zacmo

[Heroku link][heroku] **Note:** Link to Zacmo production site

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com

## Minimum Viable Product

Zacmo is a web application inspired by Venmo built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Friends
- [ ] Transactions (payments/charges) between friends
- [ ] Pay/Charge form at top of each page with search bar
- [ ] Feed of transactions between friends
- [ ] Comment/Like others' transactions
- [ ] Profile page with feed of personal transactions
- [ ] Link bank account and/or card(s)
- [ ] Zacmo balance
- [ ] Cancel payments/decline charges
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Stage 1

#### Phase 1: Backend setup and Front End User Authentication (1 day)

**Objective:** Functioning rails project with front-end Authentication - signup, login, logout form

#### Phase 2: Basic index page and profile views. (1 day)

**Objective:** When logged in, be able to see account information; buttons for login, logout, and signup; and simple navigation. Be able to view other users profile page.

#### Phase 3: Friends Model, API, and components (1 day)

**Objective:** Add friends. Friend/Unfriend through the API. Display form on users' pages to add user as a friend. List of friends on profile.

#### Phase 4: Transactions Model, API (1 day)

**Objective:** Payments to friends can be made through API. Display form on index page with fields
for friend to be paid, amount, and memo.

#### Phase 5: Feed (1 day)

**Objective:** Display feed of transactions among friends on index page. For each payment payer, payee, memo, and time since transaction.

#### Phase 6: Complete basic flow of application (1 day)

**Objective:** Tie together everything from first 5 phases to ensure that user can signup/login/logout, view feed of transactions, view profile, add friends, view friends profiles, and pay friends.

### Stage 2

#### Phase X: Overview (X days)

**Objective:** Description

#### Phase X: Overview (X days)

**Objective:** Description


### Bonus Features (TBD)
- [ ] Infinite Scroll
- [ ] Email verification on signup/change of account email
- [ ] Signup with phone number instead of email
- [ ] Profile picture
- [ ] Link Facebook account with OAuth2
- [ ] Groups
- [ ] Automated payments
- [ ] Emoji's in memo of payment
- [ ] Chat
- [ ] Two-factor authentication
- [ ] Notifications
- [ ] Payments at a later date - specify date/time payment is to be sent
