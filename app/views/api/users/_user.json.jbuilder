

if current_user
  json.id user.id
  json.username user.username
  json.first_name user.first_name
  json.last_name user.last_name
  if current_user.id == user.id
    json.email user.email
    json.balance user.balance
    json.phone_num user.phone_num
  end
  json.friends user.friends do |friend|
    json.id friend.id
    json.username friend.username
  end
end
