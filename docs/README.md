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
- [ ] Profile
- [ ] Friends
- [ ] Transactions (payments/charges) with memos between friends
- [ ] Feed of transactions between friends
- [ ] Comment/Like others' items in feed
- [ ] Link bank account and/or card(s)
- [ ] Zacmo balance
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

#### Phase 2: Basic index page and profile views. (0.5 days)

**Objective:** When logged in, be able to see account information; buttons for login, logout, and signup; and simple navigation. Be able to view other users profile page.

#### Phase 3: Friends Model, API, and components (0.5 days)

**Objective:** Add friends. Friend/Unfriend through the API. Display form on users' pages to add user as a friend. List of friends on profile.

#### Phase 4: Transactions Model, API (0.5 days)

**Objective:** Payments to friends can be made through API. Display form on index page with fields
for friend to be paid, amount, and memo.

#### Phase 5: Feed Model, API, and view (0.5 days)

**Objective:** Display feed of transactions among friends on index page. For each payment payer, payee, memo, and time since transaction.

#### Phase 6: Complete basic flow of application (1 day)

**Objective:** Tie together everything from first 5 phases to ensure that user can signup/login/logout, view feed of transactions, view profile, add friends, view friends profiles, and pay friends.

### Stage 2

#### Phase 7: Balance, comments, and likes API (1 day)

**Objective:** Comment and/or like transactions through API, User balance gets automatically updated when making or receiving payments.

#### Phase 8: Bank/Card Model, API (1 day)

**Objective:** User can link bank or debit card information.

#### Phase 9: SynapsePay API to allow for real transactions between users (3-4 days)

**Objective:** Use SynapsePay API to authenticate bank accounts and make ACH pulls to transfer money to another user. Tie in payment functionality with existing transactions functionality between users.

#### Phase 10: Refactor, Style, and Test (1 day)

**Objective:** Go back and clean up anything that needs it. Elements should be formatted and laid out properly at this point so add style to make it look clean.

### Bonus Features (TBD)
- [ ] HTTPS
- [ ] Infinite Scroll
- [ ] Mobile Design
- [ ] Email verification on signup/change of account email
- [ ] Cancel payments/decline charges
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
- [ ] React-Native application for phones
