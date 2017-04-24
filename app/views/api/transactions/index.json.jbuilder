

# json.array! @transactions do |transaction|
#   json.partial! "api/transactions/transaction", transaction: transaction
# end


# @transactions.each do |transaction|
@transactions.each do |transaction|
  json.partial! "api/transactions/transaction", transaction: transaction
end
