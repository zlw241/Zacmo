

json.extract! transaction, :id, :amount, :memo

json.user do
  json.id transaction.user.id
  json.username transaction.user.username
  json.first_name transaction.user.first_name
  json.last_name transaction.user.last_name
end

json.recipient do
  json.id transaction.recipient.id
  json.username transaction.recipient.username
  json.first_name transaction.recipient.first_name
  json.last_name transaction.recipient.last_name
end
