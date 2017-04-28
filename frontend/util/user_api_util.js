
export function fetchUser(userId) {
  return $.ajax({
    url: `api/users/${userId}`,
    method: 'GET'
  });
}

// export function fetchByUsername(username) {
//
//   return $.ajax({
//     url: `api/users/${username}`,
//     method: 'GET'
//   })
// }

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

export function searchUsers(query) {
  return $.ajax({
    url: "api/users/search",
    dataType: "json",
    method: "GET",
    data: { query }
  });
}

export function addFriend(friend_id) {
  return $.ajax({
      url: `/api/users/${friend_id}/friendships`,
      method: 'POST'
  });
}

export function removeFriend(friend_id) {
  return $.ajax({
    url: `/api/friendships/${friend_id}`,
    method: 'DELETE'
  });
}

export function acceptRequest(friend_id) {
  return $.ajax({
    url: `/api/friendships/${friend_id}`,
    method: 'PATCH'
  });
}

export function updateImage(user, user_d) {
  return $.ajax({
    url: `/api/users/${user_d}`,
    type: 'PATCH',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: user
  });
}
