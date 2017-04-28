


export function fetchTransactions() {
  return $.ajax({
    url: '/api/transactions',
    method: 'GET'
  });
}

export function fetchUserTransactions(user_id) {
  return $.ajax({
    url: `/api/users/${user_id}/transactions`,
    method: 'GET'
  });
}

export function fetchTransaction(transactionId) {
  return $.ajax({
    url: `api/transactions/${transactionId}`,
    method: 'GET'
  });
}

export function createTransaction(transaction) {
  return $.ajax({
    url: 'api/transactions',
    method: 'POST',
    data: {transaction}
  });
}

export function createComment(transactionId, comment) {
  return $.ajax({
    url: `api/transactions/${transactionId}/comments`,
    method: 'POST',
    data: {comment}
  });
}

export function addLike(transactionId) {
  return $.ajax({
    url: `api/transactions/${transactionId}/likes`,
    method: 'POST'
  });
}

export function removeLike(likeId) {
  return $.ajax({
    url: `api/likes/${likeId}`,
    method: 'DELETE'
  });
}
