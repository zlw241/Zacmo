


export function fetchTransactions() {
  return $.ajax({
    url: '/api/transactions',
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
    url: 'url/transactions',
    method: 'POST',
    data: {transaction}
  });
}