## Component Hierarchy


**AppContainer**
 - AuthFormContainer
 - IndexContainer
 - ProfileContainer

**IndexContainer**
 - HeaderContainer
 - HomeContainer
 - ProfileContainer

 **HeaderContainer**
  - MainSearchContainer
  - Nav

**HomeContainer**
 - NewTransactionContainer
 - FeedContainer
 - SidebarContainer

**ProfileContainer**
 - NewTransactionContainer
 - Profile
  + ProfileDetail
 - FeedContainer
 - SidebarContainer

**AuthFormContainer**
 - LoginForm
 - SignupForm

**NewTransactionContainer**
 - NewTransaction
  + TransactionForm
   - SearchContainer

**MainSearchFormContainer**
 + MainSearchForm
 - MainSearchResultsContainer
  + MainSearchResultsList
   - MainSearchResultsItem

**SearchContainer**
 - SearchFormContainer
  + SearchForm
 - SearchResultsContainer
  + SearchResultsList
   - SearchResultsItem

**FeedContainer**
 - FeedHeader
  + FeedFilter
 - TransactionListContainer

**TransactionListContainer**
 - TransactionList
  + TransactionItemContainer

**TransactionItemContainer**
 - TransactionDetail
 - CommentContainer

**CommentContainer**
 - CommentList
  + CommentItem

**SidebarContainer**
 - SidebarListContainer
  + SidebarList
   - SidebarItem



## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "IndexContainer" |
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/:username" | "ProfileContainer" |
| "/account/settings" | "SettingsContainer" |
| "/account/payment-methods" | "PaymentMethodsContainer" |
| "/account/privacy" | "PrivacyContainer" |

- /
  - /login
  - /signup
  - /:username
  - /account
    - /settings
    - /payment-methods
    - /privacy
