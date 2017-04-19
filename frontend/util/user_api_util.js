
export function fetchUser(userId) {
  return $.ajax({
    url: `api/users/${userId}`,
    method: 'GET'
  });
}

export function createUser(user) {
  return $.ajax({
    url: 'api/users',
    method: 'POST',
    data: {user}
  });
}

export function updateUser(user) {
  return $.ajax({
    url: `api/users/${user.id}`,
    method: 'PATCH',
    data: {user}
  });
}
