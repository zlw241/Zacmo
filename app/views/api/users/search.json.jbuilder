

json.array!(@users) do |user|
  json.username user.username
  json.id user.id
  json.first_name user.first_name
  json.last_name user.last_name
  json.friend_status current_user.friend_status user
end
