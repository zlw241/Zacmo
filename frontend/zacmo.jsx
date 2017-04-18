import React from 'react';
import ReactDOM from 'react-dom';

function createUser(user) {
  return $.ajax({
    url: 'api/users',
    method: 'POST',
    data: {user}
  });
}

function user(username, email, phone_num, first, last, pw) {
  return {
    username: username,
    email: email,
    phone_num: phone_num,
    first_name: first,
    last_name: last,
    password: pw
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.createUser = createUser;
  window.user = user;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hello, world!</h1>, root);
});
