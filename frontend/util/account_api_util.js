

export function fetchFundingToken() {
  return $.ajax({
    url: 'api/account/new',
    method: 'GET'
  });
}
