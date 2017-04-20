
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
    json.extract! user,
    :id,
    :username,
    :first_name,
    :last_name
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
