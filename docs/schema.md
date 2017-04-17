# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
phone_num       | string    | unique, indexed, unique
balance         | integer   | not null, default: 0
profile_pic     | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
created_at      | datetime  | not null
updated_at      | datetime  | not null

## transactions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
recipient_id    | integer   | not null, foreign key (references users), indexed
memo            | text      | not null
amount          | integer   | not null
visibility      | string    | not null, default: public
archived        | boolean   | default: false
created_at      | datetime  | not null
updated_at      | datetime  | not null

## friends
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
friend_id   | integer   | not null, foreign key (references users), indexed
created_at  | datetime  | not null
updated_at  | datetime  | not null

## accounts
column name     | data type | details
--------------  |-----------|-----------------------
id              | integer   | not null, primary key
bank_name       | string    | not null
account_num     | string    |
routing_num     | string    |
bank_id         | string    |
bank_pw_digest  | string    |
user_id         | integer   | not null, foreign_key (references users), indexed
authenticated   | boolean   | default: false
created_at      | datetime  | not null
updated_at      | datetime  | not null

## cards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
card_number | string    | not null, unique
exp_date    | datetime  | not null
cvv         | string    | not null
zip_code    | string    |
created_at  | datetime  | not null
updated_at  | datetime  | not null

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
transaction_id  | integer   | not null, foreign_key (references transactions), indexed
user_id         | integer   | not null, foreign_key (references users), indexed
body            | text      | not null
created_at      | datetime  | not null
updated_at      | datetime  | not null


## likes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
transaction_id  | integer   | not null, foreign_key (references transactions), indexed
user_id         | integer   | not null, foreign_key (references users), indexed, unique[transaction_id]
created_at      | datetime  | not null
updated_at      | datetime  | not null
