

export function login(user) {
  return $.ajax({
    url: 'api/session',
    method: 'POST',
    data: {user}
  });
}

export function logout() {
  return $.ajax({
    url: 'api/session',
    method: 'DELETE'
  });
}

export function signup(user) {
  return $.ajax({
    url: 'api/users',
    method: 'POST',
    data: {user}
  });
}
