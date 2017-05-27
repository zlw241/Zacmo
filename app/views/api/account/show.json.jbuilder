

if current_user
  json.array! @linked_accounts do |account|
    json.partial! "api/account/account", account: account
  end
end
