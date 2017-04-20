
# json.extract! user, :id,
#   :username,
#   :first_name,
#   :last_name,
#   :email,
#   :phone_num

if current_user
  if current_user.id == user.id
    json.extract! user, :id,
      :username,
      :first_name,
      :last_name,
      :email,
      :balance,
      :phone_num
  else
    json.id user.id
    json.username user.username
    json.first_name user.first_name
    json.last_name user.last_name
    json.friends user.friends do |friend|
      json.friend_id friend.id
      json.username friend.username
    end 
  end
end

# json.extract! user,
# if user.id != current_user.id
#   :id,
#   :username,
#   :first_name,
#   :last_name,
# else
#   :id,
#   :username,
#   :first_name,
#   :last_name,
#   :email,
#   :phone_num
# end
