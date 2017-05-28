

export function fetchFundingToken() {
  return $.ajax({
    url: 'api/account/new',
    method: 'GET'
  });
}

export function fetchLinkedAccounts() {
  return $.ajax({
    url: 'api/account',
    method: 'GET'
  });
}
